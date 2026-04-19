import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SideMenuContext, SideMenu } from 'waypay_react_library';
import { isTestUserId } from '../utils/testUser';

const CalculatorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BlacklistIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 19.75C21 17.66 19.33 14.682 17 14.023M15 19.75C15 17.099 12.314 13.75 9 13.75C5.686 13.75 3 17.099 3 19.75M15 10.25C15.7956 10.25 16.5587 9.93393 17.1213 9.37132C17.6839 8.80871 18 8.04565 18 7.25C18 6.45435 17.6839 5.69129 17.1213 5.12868C16.5587 4.56607 15.7956 4.25 15 4.25M7.586 17.086L9 18.5M9 18.5L10.414 19.914M9 18.5L10.414 17.086M9 18.5L7.586 19.914M12 7.25C12 8.04565 11.6839 8.80871 11.1213 9.37132C10.5587 9.93393 9.79565 10.25 9 10.25C8.20435 10.25 7.44129 9.93393 6.87868 9.37132C6.31607 8.80871 6 8.04565 6 7.25C6 6.45435 6.31607 5.69129 6.87868 5.12868C7.44129 4.56607 8.20435 4.25 9 4.25C9.79565 4.25 10.5587 4.56607 11.1213 5.12868C11.6839 5.69129 12 6.45435 12 7.25Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const NotificationsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  isTestUser?: boolean;
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
    // ...(!isTestUserId() 
    //   ? [{
    //       key: 'calculator',
    //       label: 'Калькулятор',
    //       icon: <CalculatorIcon />,
    //       onClick: () => navigate('/calculator'),
    //     }] 
    //   : []
    // ),
    {
      key: 'blacklist',
      label: 'Чёрный список',
      icon: <BlacklistIcon />,
      onClick: () => navigate('/blacklist'),
    },
    {
      key: 'notifications',
      label: 'Уведомления',
      icon: <NotificationsIcon />,
      onClick: () => navigate('/notifications'),
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
            
            {!userInfo.isTestUser && userInfo.licenseEndDate && (
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
  padding-bottom: ${({ $isMobile }) => ($isMobile ? '70px' : '0')};
  height: ${({ $isMobile }) => ($isMobile ? 'calc(100vh - 70px)' : '100vh')};
`;
