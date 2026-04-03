import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Добавьте этот импорт
import useBlackCatalog from "../api/BlackCatalog/useBlackCatalog";
import type { Notification } from "../api/BlackCatalog/blackCatalog";
import { Container, EmptyStateContainer, EmptyStateText, EmptyStateTitle, LoadingContainer } from "../components/BlackCatalogPageContent/styles";
import { Header, LoadingSpinner, MarkAsReadButton, NotificationCard, NotificationContent, NotificationDate, NotificationHeader, NotificationsList } from "../components/Notifications/style";
import { CustomTitle } from "waypay_react_library";

const NotificationsPage: React.FC = () => {
  const navigate = useNavigate(); // Добавьте эту строку
  
  const {
    notifications,
    getNotifications,
    markAsReadNotification,
    isLoading,
  } = useBlackCatalog();

  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Только что";
    if (diffMins < 60) return `${diffMins} мин назад`;
    if (diffHours < 24) return `${diffHours} ч назад`;
    if (diffDays === 1) return "Вчера";
    if (diffDays < 7) return `${diffDays} дня назад`;
    
    return d.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const loadNotifications = useCallback(async (loadMore = false) => {
    if (loadMore) {
      setLoadingMore(true);
    }
    
    const pageToken = loadMore && notifications?.next_page_token 
      ? notifications.next_page_token 
      : undefined;
    
    const response = await getNotifications(pageToken);
    
    if (response) {
      if (!response.next_page_token) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } else {
      setHasMore(false);
    }
    
    if (loadMore) {
      setLoadingMore(false);
    }
  }, [getNotifications, notifications?.next_page_token]);

  useEffect(() => {
    const init = async () => {
      setIsInitialLoading(true);
      await loadNotifications(false);
      setIsInitialLoading(false);
    };
    init();
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading && !loadingMore) {
          loadNotifications(true);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoading, loadingMore, loadNotifications]);

  const handleMarkAsRead = async (id: number) => {
    await markAsReadNotification(id);
    await loadNotifications(false);
  };

  // Добавьте этот обработчик для клика по уведомлению
  const handleNotificationClick = async (notification: Notification) => {
    // Если уведомление не прочитано, отмечаем его как прочитанное
    if (!notification.is_read) {
      await markAsReadNotification(notification.id);
      await loadNotifications(false);
    }
    
    // Переход на страницу сущности, если есть entity_id
    if (notification.entity_id) {
      navigate(`/dossier/${notification.entity_id}`);
    }
    // Или можно добавить другую логику перехода по умолчанию
  };

  if (isInitialLoading) {
    return (
      <Container>
        <LoadingContainer>
          <LoadingSpinner />
          <div>Загрузка уведомлений...</div>
        </LoadingContainer>
      </Container>
    );
  }

  const allNotifications = notifications?.notifications || [];

  return (
    <Container>
      <Header>
        <CustomTitle style={{whiteSpace: 'nowrap'}}>
          Уведомления 
        </CustomTitle>
      </Header>

      {allNotifications.length === 0 ? (
        <EmptyStateContainer>
          <EmptyStateTitle>Нет уведомлений</EmptyStateTitle>
          <EmptyStateText>
            Здесь будут отображаться все уведомления о новых записях и изменениях
          </EmptyStateText>
        </EmptyStateContainer>
      ) : (
        <NotificationsList>
          {allNotifications.map((notification: Notification) => (
            <NotificationCard 
              key={notification.id} 
              isRead={notification.is_read}
              onClick={() => handleNotificationClick(notification)} // Добавьте onClick
              style={{ cursor: "pointer" }} // Добавьте курсор для указания кликабельности
            >
              <NotificationHeader>
                <NotificationContent isRead={notification.is_read}>
                  {notification.content}
                </NotificationContent>
                {!notification.is_read && (
                  <MarkAsReadButton 
                    onClick={(e) => {
                      e.stopPropagation(); // Предотвращаем срабатывание клика на карточке
                      handleMarkAsRead(notification.id);
                    }}
                    title="Отметить как прочитанное"
                  >
                    ✓
                  </MarkAsReadButton>
                )}
              </NotificationHeader>
              <NotificationDate>
                {formatDate(notification.created_at)}
              </NotificationDate>
            </NotificationCard>
          ))}
          
          <div ref={loadMoreRef} style={{ height: "20px" }} />
          
          {loadingMore && (
            <LoadingContainer>
              <LoadingSpinner small />
              <div>Загрузка...</div>
            </LoadingContainer>
          )}
          
          {!hasMore && allNotifications.length > 0 && (
            <EmptyStateText style={{ textAlign: "center", marginTop: "20px" }}>
            </EmptyStateText>
          )}
        </NotificationsList>
      )}
    </Container>
  );
};

export default NotificationsPage;