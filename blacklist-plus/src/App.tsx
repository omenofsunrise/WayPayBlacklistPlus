import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage, getSessionInfo, SideMenuContext } from "waypay_react_library";
import "./App.css";
import CalculatorPage from "./pages/CalculatorPage";
import BlacklistPage from "./pages/BlacklistPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
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
      const sessionInfo = await getSessionInfo();
      setIsAuthenticated(!!sessionInfo);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
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
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/calculator" replace />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/blacklist" element={<BlacklistPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </SideMenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;