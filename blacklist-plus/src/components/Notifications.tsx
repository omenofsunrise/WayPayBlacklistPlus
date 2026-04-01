import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import type { Notification } from '../api/BlackCatalog/blackCatalog';

const BellContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BellIcon = styled.span`
  font-size: 24px;
  color: #50555c;
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(239, 68, 68, 1);
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

// Notifications Container Components
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const NotificationsContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 100%;
  pointer-events: none;

  @media (max-width: 768px) {
    left: 20px;
    right: 20px;
    max-width: calc(100% - 40px);
  }
`;

const NotificationItem = styled.div<{ $isClosing?: boolean }>`
  background: white;
  border-radius: 8px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  pointer-events: auto;
  animation: ${({ $isClosing }) => ($isClosing ? slideOut : slideIn)} 0.3s ease forwards;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateX(-4px);
    border-color: rgba(0, 125, 136, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const NotificationIcon = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 125, 136, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 125, 136, 1);
  font-size: 16px;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

const NotificationTime = styled.span`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
  margin-top: 4px;
  display: block;
`;

interface NotificationsResponse {
  notifications: Notification[];
  next_page_token?: string;
}

export const useNotifications = (getNotificationsFn: () => Promise<NotificationsResponse | null>, markAsReadFn: (id: number) => Promise<void>) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [closingNotifications, setClosingNotifications] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const loadNotifications = async () => {
    try {
      setIsLoading(true);
      const response = await getNotificationsFn();
      if (response?.notifications) {
        const unreadNotifications = response.notifications.filter(n => !n.is_read);
        setNotifications(unreadNotifications);
      }
    } catch (error) {
      console.error('Failed to load notifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (notificationId: number) => {
    try {
      await markAsReadFn(notificationId);
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  const handleClose = async (notificationId: number) => {
    setClosingNotifications(prev => new Set(prev).add(notificationId));
    
    setTimeout(async () => {
      await markAsRead(notificationId);
      setClosingNotifications(prev => {
        const newSet = new Set(prev);
        newSet.delete(notificationId);
        return newSet;
      });
    }, 300);
  };

  return {
    notifications,
    closingNotifications,
    isLoading,
    handleClose,
    loadNotifications,
    markAsRead,
  };
};

// Individual Notification Display Component
interface NotificationDisplayProps {
  notification: Notification;
  isClosing: boolean;
  onClick: () => void;
}

const NotificationDisplay: React.FC<NotificationDisplayProps> = ({
  notification,
  isClosing,
  onClick,
}) => {
  const formatTime = (date?: Date | string) => {
    if (!date) return 'Только что';
    
    const now = new Date();
    const notificationDate = new Date(date);
    const diff = now.getTime() - notificationDate.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'Только что';
    if (minutes < 60) return `${minutes} мин назад`;
    if (hours < 24) return `${hours} ч назад`;
    if (days < 7) return `${days} дн назад`;
    return notificationDate.toLocaleDateString('ru-RU');
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <NotificationItem $isClosing={isClosing} onClick={handleClick}>
      <NotificationIcon>
        <span>🔔</span>
      </NotificationIcon>
      <NotificationContent>
        <NotificationText>{notification.content}</NotificationText>
        <NotificationTime>
          {formatTime(notification.created_at)}
        </NotificationTime>
      </NotificationContent>
    </NotificationItem>
  );
};

interface NotificationsProps {
  getNotifications: () => Promise<NotificationsResponse | null>;
  markAsRead: (id: number) => Promise<void>;
  onNotificationClick?: (notification: Notification) => void;
}

export const Notifications: React.FC<NotificationsProps> = ({ 
  getNotifications, 
  markAsRead,
  onNotificationClick 
}) => {
  const { notifications, closingNotifications, handleClose, loadNotifications } = useNotifications(
    getNotifications,
    markAsRead
  );

  useEffect(() => {
    loadNotifications();
  }, []);

  const handleNotificationClick = async (notification: Notification) => {
    // Сначала отмечаем как прочитанное
    await handleClose(notification.id);
    
    // Если есть callback, вызываем его
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <NotificationsContainer>
      {notifications.map(notification => (
        <NotificationDisplay
          key={notification.id}
          notification={notification}
          isClosing={closingNotifications.has(notification.id)}
          onClick={() => handleNotificationClick(notification)}
        />
      ))}
    </NotificationsContainer>
  );
};