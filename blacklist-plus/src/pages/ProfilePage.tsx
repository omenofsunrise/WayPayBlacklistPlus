import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStorage } from 'waypay_react_library';
import SubscriptionBlock from '../components/subscribe/SubscriptionBlock';

interface ProfilePageProps {
  userName: string;
  userPhone: string;
  subscriptionEndDate?: string;
  hasActiveSubscription: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ 
  userName, 
  userPhone, 
  subscriptionEndDate,
  hasActiveSubscription 
}) => {
  const navigate = useNavigate();
  const [showSubscription, setShowSubscription] = useState(false);
  const [userData, setUserData] = useState<{ name: string; phone: string }>({
    name: userName || '',
    phone: userPhone || ''
  });
  const [subscriptionInfo, setSubscriptionInfo] = useState<{
    hasActive: boolean;
    endDate?: string;
    tariffType?: string;
  }>({
    hasActive: hasActiveSubscription || false,
    endDate: subscriptionEndDate,
    tariffType: 'blacklist_plus'
  });

  // Синхронизируем данные при изменении пропсов
  useEffect(() => {
    setUserData({
      name: userName || 'Пользователь',
      phone: userPhone || ''
    });
  }, [userName, userPhone]);

  useEffect(() => {
    setSubscriptionInfo(prev => ({
      ...prev,
      hasActive: hasActiveSubscription || false,
      endDate: subscriptionEndDate
    }));
  }, [hasActiveSubscription, subscriptionEndDate]);

  const handleLogout = async () => {
    try {
      await authStorage.logout();
      navigate('/', { replace: true });
      window.location.reload();
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  const handlePaymentSuccess = () => {
    setShowSubscription(false);
    // Обновляем страницу или делаем редирект для получения актуальных данных
    window.location.reload();
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Не ограничена';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div style={{ 
      padding: '24px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Карточка профиля */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '24px'
      }}>
        <h1 style={{ 
          margin: '0 0 24px 0',
          color: '#333',
          fontSize: '28px'
        }}>
          Профиль пользователя
        </h1>

        {/* Информация о пользователе */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#F9FAFA',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#007D88',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              marginRight: '16px'
            }}>
              {userData.name.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', color: '#333' }}>
                {userData.name}
              </div>
              <div style={{ color: '#666', fontSize: '14px' }}>
                {userData.phone}
              </div>
            </div>
          </div>

          {/* Информация о подписке */}
          <div style={{
            padding: '16px',
            backgroundColor: '#F0F8FF',
            borderRadius: '8px',
            border: '1px solid #007D8820'
          }}>
            {subscriptionInfo.hasActive && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#666' }}>Подписка действует до:</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>
                  {formatDate(subscriptionInfo.endDate)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Кнопки действий */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          {subscriptionInfo.hasActive && (
            <button
              onClick={() => setShowSubscription(!showSubscription)}
              style={{
                padding: '12px 24px',
                backgroundColor: showSubscription ? '#f0f0f0' : '#007D88',
                color: showSubscription ? '#333' : 'white',
                border: showSubscription ? '1px solid #ddd' : 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s',
                flex: '1 1 auto'
              }}
            >
              {showSubscription ? 'Не продлевать' : 'Продлить подписку'}
            </button>
          )}

          <button
            onClick={handleLogout}
            style={{
              padding: '12px 24px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              flex: '1 1 auto'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>

      {/* Блок продления подписки */}
      {showSubscription && (
        <div style={{
          animation: 'slideDown 0.3s ease-out'
        }}>
          <SubscriptionBlock
            tariffType="blacklist_plus"
            onPaymentSuccess={handlePaymentSuccess}
            phone={userData.phone}
            name={userData.name}
            disablePromo={true}
            title='Продление подписки'
          />
        </div>
      )}

      {/* Стили для анимации */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;