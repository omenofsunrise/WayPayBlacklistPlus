import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage, getSessionInfo, SideMenuContext } from "waypay_react_library";
import "./App.css";
import CalculatorPage from "./pages/CalculatorPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import BlackCatalogPage from "./pages/BlackCatalogPage";
import { NotModeratedMessage } from "./components/Moderation";
import type { TariffType } from "./api/Subscription/subscription";
import { subscriptionService } from "./api/Subscription/SubscriptionService";
import SubscriptionPage from "./pages/SubscriptionPage";

const SubscriptionGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasActiveSubscription, setHasActiveSubscription] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [tariffType] = useState<TariffType>('blacklist_plus');
  const [userData, setUserData] = useState<{ name: string; phone: string }>({
    name: "",
    phone: "",
  });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const sessionInfo = await getSessionInfo() as { 
        client: { 
          name?: string; 
          phone?: string;
        }
        is_moderated?: boolean;
      } | null;
      
      if (sessionInfo) {
        setUserData({
          name: sessionInfo.client.name || "Пользователь",
          phone: sessionInfo.client.phone || "",
        });
      }
      
      await checkSubscription();
    } catch (error) {
      console.error('Ошибка при загрузке данных пользователя:', error);
      setUserData({
        name: "Пользователь",
        phone: "",
      });
      await checkSubscription();
    }
  };

  const checkSubscription = async () => {
    try {
      setIsChecking(true);
      const isActive = await subscriptionService.isActive(tariffType);
      setHasActiveSubscription(isActive);
    } catch (error) {
      console.error('Ошибка при проверке подписки:', error);
      setHasActiveSubscription(false);
    } finally {
      setIsChecking(false);
    }
  };

  const handlePaymentSuccess = () => {
    checkSubscription();
  };

  if (isChecking) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Проверка подписки...
      </div>
    );
  }

  if (!hasActiveSubscription) {
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isModerated, setIsModerated] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState<string | null>(null);
  const [selectedTopMenuItem, setSelectedTopMenuItem] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const sessionInfo = await getSessionInfo() as { is_moderated?: boolean } | null;
      
      if (sessionInfo) {
        setIsAuthenticated(true);
        setIsModerated(sessionInfo?.is_moderated ?? true);
      } else {
        setIsAuthenticated(false);
        setIsModerated(true);
      }
    } catch (error) {
      console.error('Ошибка при проверке авторизации:', error);
      setIsAuthenticated(false);
      setIsModerated(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    checkAuth();
  };

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev);
  };

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Загрузка...</div>;
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
    return <NotModeratedMessage />;
  }

  return (
    <BrowserRouter>
      <SideMenuContext.Provider value={{
        collapsed,
        toggleCollapsed,
        selectedSideMenuItem,
        setSelectedSideMenuItem,
        selectedTopMenuItem,
        setSelectedTopMenuItem,
      }}>
        <SubscriptionGuard>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/calculator" replace />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/blacklist" element={<BlackCatalogPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Layout>
        </SubscriptionGuard>
      </SideMenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;