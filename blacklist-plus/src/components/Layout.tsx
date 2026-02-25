import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SideMenuContext, SideMenu } from 'waypay_react_library';

// Импортируем иконки (можно заменить на свои)
const CalculatorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BlacklistIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 9L22 13M22 9L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Логотип приложения
const Logo = () => (
  <div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '30px', color: '#000' }}>
    ЧС+
  </div>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelectedSideMenuItem } = useContext(SideMenuContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Определяем элементы меню
  const menuItems = [
    {
      key: 'calculator',
      label: 'Калькулятор',
      icon: <CalculatorIcon />,
      onClick: () => navigate('/calculator'),
    },
    {
      key: 'blacklist',
      label: 'Чёрный список',
      icon: <BlacklistIcon />,
      onClick: () => navigate('/blacklist'),
    },
    {
      key: 'profile',
      label: 'Профиль',
      icon: <ProfileIcon />,
      onClick: () => navigate('/profile'),
    },
  ];

  // Синхронизируем выбранный пункт меню с текущим URL
  useEffect(() => {
    const path = location.pathname.substring(1); // убираем первый слеш
    const currentItem = menuItems.find(item => item.key === path);
    if (currentItem) {
      setSelectedSideMenuItem(currentItem.key);
    }
  }, [location.pathname, setSelectedSideMenuItem]);

  return (
    <LayoutContainer $isMobile={isMobile}>
      <SideMenu 
        items={menuItems}
        logo={<Logo />}
        autoCollapseOnSelect={false}
        mobileBreakpoint={768}
        showBottomLabels={false}
      >
        {/* Этот children будет использоваться только в мобильной версии */}
        {isMobile && children}
      </SideMenu>
      
      {/* Для десктопа оставляем отдельный ContentArea */}
      {!isMobile && (
        <ContentArea $isMobile={isMobile}>
          {children}
        </ContentArea>
      )}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
`;

const ContentArea = styled.main<{ $isMobile: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: #ffffff;
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '70px' : '0')}; /* Отступ для Bottom Navigation */
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 70px)' : '100vh')}; /* Учитываем высоту Bottom Navigation */
`;