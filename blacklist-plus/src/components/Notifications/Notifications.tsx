import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import type { Notification } from '../../api/BlackCatalog/blackCatalog';
import { useNavigate } from 'react-router-dom';

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

const NotificationToast = styled.div<{ $isClosing?: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #007d88;
  padding: 12px 16px;
  min-width: 280px;
  max-width: 380px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${({ $isClosing }) => ($isClosing ? slideOut : slideIn)} 0.3s ease forwards;
  z-index: 10000;
  margin-bottom: 12px;

  &:hover {
    transform: translateX(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const NotificationIcon = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background-color: rgba(0, 125, 136, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007d88;
  font-size: 14px;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
`;

const NotificationTime = styled.span`
  font-size: 11px;
  color: #999;
  margin-top: 4px;
  display: block;
`;

const CloseIcon = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #999;
  font-size: 18px;
  margin-left: 8px;
  
  &:hover {
    color: #666;
  }
`;

const NotificationsStack = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
  
  > * {
    pointer-events: auto;
  }
`;

interface NotificationsResponse {
  notifications: Notification[];
  next_page_token?: string;
}

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
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [closingIds, setClosingIds] = useState<Set<number>>(new Set());

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

  const loadNotifications = async () => {
    try {
      const response = await getNotifications();
      if (response?.notifications) {
        const unreadNotifications = response.notifications.filter(n => !n.is_read);
        setNotifications(unreadNotifications);
      }
    } catch (error) {
      console.error('Failed to load notifications:', error);
    }
  };

  const handleClose = async (notificationId: number) => {
    setClosingIds(prev => new Set(prev).add(notificationId));
    
    setTimeout(async () => {
      try {
        await markAsRead(notificationId);
        setNotifications(prev => prev.filter(n => n.id !== notificationId));
        setClosingIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(notificationId);
          return newSet;
        });
      } catch (error) {
        console.error('Failed to mark notification as read:', error);
      }
    }, 300);
  };

  const handleClick = async (notification: Notification) => {
    await handleClose(notification.id);
    
    if (notification.entity_id) {
      navigate(`/dossier/${notification.entity_id}`);
    } else if (onNotificationClick) {
      onNotificationClick(notification);
    }
  };

  useEffect(() => {
    loadNotifications();
    
    const interval = setInterval(loadNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  if (notifications.length === 0) {
    return null;
  }

  return (
    <NotificationsStack>
      {notifications.map(notification => (
        <NotificationToast 
          key={notification.id}
          $isClosing={closingIds.has(notification.id)}
          onClick={() => handleClick(notification)}
        >
          <NotificationIcon>
            <span>🔔</span>
          </NotificationIcon>
          <NotificationContent>
            <NotificationText>{notification.content}</NotificationText>
            <NotificationTime>
              {formatTime(notification.created_at)}
            </NotificationTime>
          </NotificationContent>
          <CloseIcon onClick={(e) => {
            e.stopPropagation();
            handleClose(notification.id);
          }}>
            ×
          </CloseIcon>
        </NotificationToast>
      ))}
    </NotificationsStack>
  );
};