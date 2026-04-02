import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { NotificationsResponse } from '../../api/BlackCatalog/blackCatalog';

const BellContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const BellIcon = styled.span`
  font-size: 24px;
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

interface NotificationBellProps {
  getNotifications: () => Promise<NotificationsResponse | null>;
  onBellClick?: () => void;
}

export const NotificationBell: React.FC<NotificationBellProps> = ({ 
  getNotifications, 
  onBellClick 
}) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const loadUnreadCount = async () => {
    try {
      const response = await getNotifications();
      if (response?.notifications) {
        const count = response.notifications.filter(n => !n.is_read).length;
        setUnreadCount(count);
      }
    } catch (error) {
      console.error('Failed to load unread count:', error);
    }
  };

  useEffect(() => {
    loadUnreadCount();
    
    const interval = setInterval(loadUnreadCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (onBellClick) {
      onBellClick();
    }
  };

  return (
    <BellContainer onClick={handleClick}>
      <BellIcon>🔔</BellIcon>
      {unreadCount > 0 && <Badge>{unreadCount > 9 ? '9+' : unreadCount}</Badge>}
    </BellContainer>
  );
};