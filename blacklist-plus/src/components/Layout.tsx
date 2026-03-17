import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SideMenuContext, SideMenu } from 'waypay_react_library';

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

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const Logo = () => (
  <div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '30px', color: '#000' }}>
    ЧС+
  </div>
);

interface UserInfo {
  name: string;
  phone: string;
  licenseEndDate?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  userInfo: UserInfo;
}

const Layout: React.FC<LayoutProps> = ({ children, userInfo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelectedSideMenuItem, collapsed } = useContext(SideMenuContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      key: 'formatted',
      label: 'Оформленные',
      icon: <BlacklistIcon />,
      onClick: () => navigate('/formatted'),
    },
    {
      key: 'profile',
      label: 'Профиль',
      icon: <ProfileIcon />,
      onClick: () => navigate('/profile'),
    },
  ];

  useEffect(() => {
    const path = location.pathname.substring(1);
    const currentItem = menuItems.find(item => item.key === path);
    if (currentItem) {
      setSelectedSideMenuItem(currentItem.key);
    }
  }, [location.pathname, setSelectedSideMenuItem]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Бессрочно';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const UserInfoBottomContent = () => (
    <UserInfoContainer $collapsed={collapsed}>
      {!collapsed && (
        <>
          <UserAvatar $collapsed={collapsed}>
            <UserIcon />
          </UserAvatar>
          <UserDetails>
            <UserName>{userInfo.name}</UserName>
            <UserPhone>{userInfo.phone}</UserPhone>
            
            {userInfo.licenseEndDate && (
              <LicenseInfo>
                <LicenseDate>
                  до {formatDate(userInfo.licenseEndDate)}
                </LicenseDate>
              </LicenseInfo>
            )}
          </UserDetails>
        </>
      )}
      
      {collapsed && (
          <UserDetails>

          </UserDetails>
      )}
    </UserInfoContainer>
  );

  return (
    <LayoutContainer $isMobile={isMobile}>
      <SideMenu 
        items={menuItems}
        logo={isMobile ? null : <Logo />}
        bottomContent={<UserInfoBottomContent />}
        autoCollapseOnSelect={false}
        mobileBreakpoint={768}
        showBottomLabels={false}
        className="app-side-menu"
        style={{ backgroundColor: '#ffffff' }}
      >
        {isMobile && children}
      </SideMenu>
      
      {!isMobile && (
        <ContentArea $isMobile={isMobile}>
          {children}
        </ContentArea>
      )}
    </LayoutContainer>
  );
};

export default Layout;

const UserInfoContainer = styled.div<{ $collapsed: boolean }>`
  width: 100%;
  padding: ${({ $collapsed }) => ($collapsed ? '12px 0' : '8px')};
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  gap: 12px;
  border-radius: 12px;
  background-color: rgba(249, 250, 250, 0.8);
  transition: all 0.3s ease;
  position: relative;
`;

const UserAvatar = styled.div<{ $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? '40px' : '48px')};
  height: ${({ $collapsed }) => ($collapsed ? '40px' : '48px')};
  border-radius: 50%;
  background: #007D88;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  
  svg {
    width: ${({ $collapsed }) => ($collapsed ? '20px' : '24px')};
    height: ${({ $collapsed }) => ($collapsed ? '20px' : '24px')};
    stroke: white;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserPhone = styled.div`
  font-size: 12px;
  color: #50555c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LicenseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 4px 8px;
  background-color: white;
  border-radius: 16px;
  color: #25CBA1;
  font-size: 11px;
`;

const LicenseDate = styled.span`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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
