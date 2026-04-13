import { useState, useEffect, useCallback, useRef, memo, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  AuthPage,
  getSessionInfo,
  SideMenuContext,
} from "waypay_react_library";
import "./App.css";
import CalculatorPage from "./pages/CalculatorPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import BlackCatalogPage from "./pages/BlackCatalogPage";
import FormattedCatalogPage from "./pages/FormattedCatalogPage";
import { NotModeratedMessage } from "./components/Moderation";
import type { TariffType } from "./api/Subscription/subscription";
import { subscriptionService } from "./api/Subscription/SubscriptionService";
import SubscriptionPage from "./pages/SubscriptionPage";
import SubscriptionPendingPage from "./components/subscribe/SubscriptionPending";
import ProfileHeader from "./components/subscribe/ProfileHeader";
import { Notifications } from "./components/Notifications/Notifications";
import useBlackCatalog from "./api/BlackCatalog/useBlackCatalog";
import BlackCatalogDossier from "./components/BlackCatalogDossier";
import PrivacyModal from "./components/PrivacyModal";
import NotificationsPage from "./pages/NotificationsPage";
import { isTestUserId } from "./utils/testUser";

const SubscriptionGuard: React.FC<{
  children: React.ReactNode;
  onSubscriptionCheck: (status: any) => void;
  onUserDataLoad: (data: { name: string; phone: string; id: string }) => void;
}> = ({ children, onSubscriptionCheck, onUserDataLoad }) => {
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    hasActive: boolean;
    hasPending: boolean;
    endDate?: string;
    pendingData?: {
      payment_url: string;
      expires_at: string;
    };
  }>({
    hasActive: false,
    hasPending: false,
  });
  const [isChecking, setIsChecking] = useState(true);
  const [tariffType] = useState<TariffType>("blacklist_plus");
  const [userData, setUserData] = useState<{
    name: string;
    phone: string;
    id: string;
  }>({
    name: "",
    phone: "",
    id: "",
  });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const sessionInfo = (await getSessionInfo()) as {
        client: {
          name?: string;
          phone?: string;
          id?: string;
        };
        is_moderated?: boolean;
      } | null;

      if (sessionInfo) {
        const userData = {
          name: sessionInfo.client.name || "Пользователь",
          phone: sessionInfo.client.phone || "",
          id: sessionInfo.client.id || "",
        };
        setUserData(userData);
        onUserDataLoad(userData);

        if (isTestUserId(userData.id)) {
          const newStatus = {
            hasActive: true,
            hasPending: false,
          };
          setSubscriptionStatus(newStatus);
          onSubscriptionCheck(newStatus);
          setIsChecking(false);
          return;
        }
      }

      await checkSubscriptionStatus();
    } catch (error) {
      console.error("Ошибка при загрузке данных пользователя:", error);
      const userData = {
        name: "Пользователь",
        phone: "",
        id: "",
      };
      setUserData(userData);
      onUserDataLoad(userData);
      await checkSubscriptionStatus();
    }
  };

  const checkSubscriptionStatus = async () => {
    try {
      setIsChecking(true);

      const status = await subscriptionService.getStatus(tariffType);

      if (status.success) {
        if (status.status === "active") {
          const newStatus = {
            hasActive: true,
            hasPending: false,
            endDate: status.end_at,
          };
          setSubscriptionStatus(newStatus);
          onSubscriptionCheck(newStatus);
        } else if (status.status === "pending") {
          const newStatus = {
            hasActive: false,
            hasPending: true,
            pendingData: {
              payment_url: status.payment_url!,
              expires_at: status.expires_at!,
            },
          };
          setSubscriptionStatus(newStatus);
          onSubscriptionCheck(newStatus);
        } else {
          const newStatus = {
            hasActive: false,
            hasPending: false,
          };
          setSubscriptionStatus(newStatus);
          onSubscriptionCheck(newStatus);
        }
      } else {
        const newStatus = {
          hasActive: false,
          hasPending: false,
        };
        setSubscriptionStatus(newStatus);
        onSubscriptionCheck(newStatus);
      }
    } catch (error) {
      console.error("Ошибка при проверке статуса подписки:", error);
      const newStatus = {
        hasActive: false,
        hasPending: false,
      };
      setSubscriptionStatus(newStatus);
      onSubscriptionCheck(newStatus);
    } finally {
      setIsChecking(false);
    }
  };

  const handlePaymentSuccess = () => {
    checkSubscriptionStatus();
  };

  if (isChecking) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Проверка подписки...
      </div>
    );
  }

  if (subscriptionStatus.hasPending && subscriptionStatus.pendingData) {
    return (
      <SubscriptionPendingPage
        paymentUrl={subscriptionStatus.pendingData.payment_url}
        expiresAt={subscriptionStatus.pendingData.expires_at}
      />
    );
  }

  if (!subscriptionStatus.hasActive) {
    return (
      <SubscriptionPage
        tariffType={tariffType}
        name={userData.name}
        phone={userData.phone}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  return <>{children}</>;
};

// Мемоизированные компоненты
const MemoizedNotifications = memo(Notifications);
const MemoizedLayout = memo(Layout);

// Компонент роутов который не будет пересоздаваться
const AppRoutes = memo(({ userId, userName, userPhone, subscriptionEndDate, hasActiveSubscription }: any) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blacklist" replace />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/blacklist" element={<BlackCatalogPage userId={userId} />} />
      <Route path="/formatted" element={<FormattedCatalogPage userId={userId} />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route
        path="/profile"
        element={
          <ProfilePage
            userId={userId}
            userName={userName}
            userPhone={userPhone}
            subscriptionEndDate={subscriptionEndDate}
            hasActiveSubscription={hasActiveSubscription}
          />
        }
      />
      <Route
        path="/dossier/:id"
        element={
          <BlackCatalogDossier 
            userId={userId} 
            item={undefined} 
            onBack={() => window.history.back()} 
          />
        }
      />
    </Routes>
  );
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isModerated, setIsModerated] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState<string | null>(null);
  const [selectedTopMenuItem, setSelectedTopMenuItem] = useState<string | null>(null);
  const [userData, setUserData] = useState<{
    name: string;
    phone: string;
    id: string;
  }>({
    name: "",
    phone: "",
    id: "",
  });
  const [subscriptionInfo, setSubscriptionInfo] = useState<{
    hasActive: boolean;
    hasPending: boolean;
    endDate?: string;
  }>({
    hasActive: false,
    hasPending: false,
  });
  
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  
  const { getNotifications, markAsReadNotification } = useBlackCatalog();
  
  const [unreadNotifications, setUnreadNotifications] = useState<any[]>([]);
  
  const timeoutRef = useRef<number | null>(null);
  const isMountedRef = useRef<boolean>(true);
  const isUpdatingRef = useRef<boolean>(false);

  // Функция загрузки уведомлений БЕЗ потери фокуса
  const loadUnreadNotifications = useCallback(async () => {
    if (!isMountedRef.current || isUpdatingRef.current) return;
    
    isUpdatingRef.current = true;
    
    try {
      const response = await getNotifications();
      if (response?.notifications && isMountedRef.current) {
        const unread = response.notifications.filter((n: any) => !n.is_read);
        
        // Используем функциональное обновление чтобы не зависеть от текущего состояния
        setUnreadNotifications((prev) => {
          // Проверяем, изменился ли список
          const prevIds = prev.map(n => n.id).sort().join(',');
          const newIds = unread.map(n => n.id).sort().join(',');
          
          if (prevIds !== newIds) {
            return unread;
          }
          return prev; // Возвращаем предыдущее состояние если нет изменений
        });
      }
    } catch (error) {
      console.error("Ошибка при загрузке уведомлений:", error);
    } finally {
      isUpdatingRef.current = false;
    }
  }, [getNotifications]);

  // Настройка интервала с использованием setTimeout и сохранением фокуса
  useEffect(() => {
    if (!isAuthenticated || !isModerated || !subscriptionInfo.hasActive) {
      return;
    }

    // Первая загрузка
    loadUnreadNotifications();

    // Рекурсивный setTimeout вместо setInterval
    const scheduleUpdate = () => {
      if (!isMountedRef.current) return;
      
      timeoutRef.current = setTimeout(async () => {
        await loadUnreadNotifications();
        scheduleUpdate(); // Планируем следующее обновление
      }, 10000); // 10 секунд
    };

    scheduleUpdate();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isAuthenticated, isModerated, subscriptionInfo.hasActive, loadUnreadNotifications]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const handleNotificationClick = useCallback(async (notification: any) => {
    await markAsReadNotification(notification.id);
    await loadUnreadNotifications();
  }, [markAsReadNotification, loadUnreadNotifications]);

  useEffect(() => {
    checkAuth();
    const hasConsented = localStorage.getItem('privacyConsent');
    if (hasConsented === 'true') {
      setShowPrivacyModal(false);
    }
  }, []);

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const sessionInfo = (await getSessionInfo()) as {
        client?: {
          name?: string;
          phone?: string;
          id?: string;
        };
        is_moderated?: boolean;
      } | null;

      if (sessionInfo) {
        setIsAuthenticated(true);
        setIsModerated(sessionInfo?.is_moderated ?? true);

        setUserData({
          name: sessionInfo.client?.name || "Пользователь",
          phone: sessionInfo.client?.phone || "",
          id: sessionInfo.client?.id || "",
        });
      } else {
        setIsAuthenticated(false);
        setIsModerated(true);
      }
    } catch (error) {
      console.error("Ошибка при проверке авторизации:", error);
      setIsAuthenticated(false);
      setIsModerated(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    if (isTestUserId()) {
      setShowPrivacyModal(true);
    }
    checkAuth();
  };

  const handlePrivacyAccept = () => {
    localStorage.setItem('privacyConsent', 'true');
    setShowPrivacyModal(false);
  };

  const handlePrivacyDecline = () => {
    setShowPrivacyModal(false);
  };

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const handleSubscriptionCheck = (status: any) => {
    setSubscriptionInfo({
      hasActive: status.hasActive,
      hasPending: status.hasPending,
      endDate: status.endDate,
    });
  };

  const handleUserDataLoad = (data: {
    name: string;
    phone: string;
    id: string;
  }) => {
    setUserData(data);
  };

  const isTestUser = useMemo(() => isTestUserId(userData.id), [userData.id]);

  useEffect(() => {
    if (isTestUser) {
      setSubscriptionInfo({
        hasActive: true,
        hasPending: false,
        endDate: undefined,
      });
    }
  }, [isTestUser]);

  // Мемоизируем пропсы для роутов
  const routeProps = useMemo(() => ({
    userId: userData.id,
    userName: userData.name,
    userPhone: userData.phone,
    subscriptionEndDate: subscriptionInfo.endDate,
    hasActiveSubscription: subscriptionInfo.hasActive,
  }), [userData.id, userData.name, userData.phone, subscriptionInfo.endDate, subscriptionInfo.hasActive]);

  // Мемоизируем данные для Layout
  const layoutUserInfo = useMemo(() => ({
    name: userData.name,
    phone: userData.phone,
    licenseEndDate: subscriptionInfo.endDate,
    isTestUser,
  }), [userData.name, userData.phone, subscriptionInfo.endDate, isTestUser]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Загрузка...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <AuthPage
        onLoginSuccess={handleLoginSuccess}
        userType="blacklist_plus"
        enableRegistration={true}
        title="Регистрация / Авторизация"
      />
    );
  }

  if (!isModerated) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            minHeight: "100vh",
            boxSizing: "border-box",
          }}
        >
          <ProfileHeader name={userData.name} phone={userData.phone} />
          <NotModeratedMessage />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <SideMenuContext.Provider
        value={{
          collapsed,
          toggleCollapsed,
          selectedSideMenuItem,
          setSelectedSideMenuItem,
          selectedTopMenuItem,
          setSelectedTopMenuItem,
        }}
      >
        <SubscriptionGuard
          onSubscriptionCheck={handleSubscriptionCheck}
          onUserDataLoad={handleUserDataLoad}
        >
          <MemoizedLayout userInfo={layoutUserInfo}>
            {unreadNotifications.length > 0 && (
              <MemoizedNotifications
                getNotifications={getNotifications}
                markAsRead={markAsReadNotification}
                onNotificationClick={handleNotificationClick}
              />
            )}
            <AppRoutes {...routeProps} />
          </MemoizedLayout>
        </SubscriptionGuard>
      </SideMenuContext.Provider>

      <PrivacyModal
        isOpen={showPrivacyModal}
        onAccept={handlePrivacyAccept}
        onDecline={handlePrivacyDecline}
        companyName="ООО Вайпай"
      />
    </BrowserRouter>
  );
}

export default App;