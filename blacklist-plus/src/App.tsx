import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import { Notifications } from "./components/Notifications";
import useBlackCatalog from "./api/BlackCatalog/useBlackCatalog";
import BlackCatalogDossier from "./components/BlackCatalogDossier";
import PrivacyModal from "./components/PrivacyModal";

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

const AuthenticatedApp: React.FC<{
  userData: { name: string; phone: string; id: string };
  subscriptionInfo: { hasActive: boolean; hasPending: boolean; endDate?: string };
  collapsed: boolean;
  toggleCollapsed: () => void;
  selectedSideMenuItem: string | null;
  setSelectedSideMenuItem: (value: string | null) => void;
  selectedTopMenuItem: string | null;
  setSelectedTopMenuItem: (value: string | null) => void;
}> = ({
  userData,
  subscriptionInfo,
  collapsed,
  toggleCollapsed,
  selectedSideMenuItem,
  setSelectedSideMenuItem,
  selectedTopMenuItem,
  setSelectedTopMenuItem,
}) => {
  const navigate = useNavigate();
  const { getNotifications, markAsReadNotification } = useBlackCatalog();

  const handleNotificationClick = async (notification: any) => {
    if (notification.entity_id) {
      navigate(`/dossier/${notification.entity_id}`);
    }
  };

  return (
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
        onSubscriptionCheck={() => {}}
        onUserDataLoad={() => {}}
      >
        <Layout
          userInfo={{
            name: userData.name,
            phone: userData.phone,
            licenseEndDate: subscriptionInfo.endDate,
          }}
        >
          <Notifications 
            getNotifications={getNotifications}
            markAsRead={markAsReadNotification}
            onNotificationClick={handleNotificationClick}
          />
          
          <Routes>
            <Route path="/" element={<Navigate to="/blacklist" replace />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route
              path="/blacklist"
              element={<BlackCatalogPage userId={userData.id} />}
            />
            <Route
              path="/formatted"
              element={<FormattedCatalogPage userId={userData.id} />}
            />
            <Route
              path="/profile"
              element={
                <ProfilePage
                  userName={userData.name}
                  userPhone={userData.phone}
                  subscriptionEndDate={subscriptionInfo.endDate}
                  hasActiveSubscription={subscriptionInfo.hasActive}
                />
              }
            />
            <Route
              path="/dossier/:id"
              element={<BlackCatalogDossier userId={userData.id} item={undefined} onBack={() => navigate('/blacklist')}/>}
            />
          </Routes>
        </Layout>
      </SubscriptionGuard>
    </SideMenuContext.Provider>
  );
};

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

  useEffect(() => {
    checkAuth();
    // Проверяем, давал ли пользователь согласие ранее
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
    setShowPrivacyModal(true);
    checkAuth();
  };

  const handlePrivacyAccept = () => {
    localStorage.setItem('privacyConsent', 'true');
    setShowPrivacyModal(false);
  };

  const handlePrivacyDecline = () => {
    // Если пользователь не согласен, можно либо выйти из аккаунта, либо просто закрыть модалку
    // Вариант 1: просто закрываем и больше не показываем в этой сессии
    setShowPrivacyModal(false);
    
    // Вариант 2: разлогиниваем пользователя (раскомментировать если нужно)
    // localStorage.removeItem('privacyConsent');
    // setIsAuthenticated(false);
  };

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

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
      <AuthenticatedApp
        userData={userData}
        subscriptionInfo={subscriptionInfo}
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        selectedSideMenuItem={selectedSideMenuItem}
        setSelectedSideMenuItem={setSelectedSideMenuItem}
        selectedTopMenuItem={selectedTopMenuItem}
        setSelectedTopMenuItem={setSelectedTopMenuItem}
      />
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
          <Layout
            userInfo={{
              name: userData.name,
              phone: userData.phone,
              licenseEndDate: subscriptionInfo.endDate,
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/calculator" replace />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route
                path="/blacklist"
                element={<BlackCatalogPage userId={userData.id} />}
              />
              <Route
                path="/formatted"
                element={<FormattedCatalogPage userId={userData.id} />}
              />
              <Route
                path="/profile"
                element={
                  <ProfilePage
                    userName={userData.name}
                    userPhone={userData.phone}
                    subscriptionEndDate={subscriptionInfo.endDate}
                    hasActiveSubscription={subscriptionInfo.hasActive}
                  />
                }
              />
            </Routes>
          </Layout>
        </SubscriptionGuard>
      </SideMenuContext.Provider>

      {/* Модалка согласия */}
      <PrivacyModal
        isOpen={showPrivacyModal}
        onAccept={handlePrivacyAccept}
        onDecline={handlePrivacyDecline}
        companyName="ООО WayPay"
      />
    </BrowserRouter>
  );
}

export default App;