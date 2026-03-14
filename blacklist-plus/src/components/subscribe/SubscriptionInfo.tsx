import React from 'react';

interface SubscriptionInfoProps {
  tariffType: string;
  expirationDate?: Date | null;
  isActive?: boolean;
}

const SubscriptionInfo: React.FC<SubscriptionInfoProps> = ({ 
  tariffType, 
  expirationDate, 
  isActive = false 
}) => {
  const getTariffDisplayName = (type: string) => {
    switch (type) {
      case 'blacklist_plus':
        return 'Black List Plus';
      default:
        return type;
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const getDaysUntilExpiration = () => {
    if (!expirationDate) return null;
    return Math.ceil(
      (new Date(expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
  };

    return (
      <div style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '16px',
        padding: '32px',
        marginTop: '24px',
        textAlign: 'center',
        border: '2px dashed #ccc',
      }}>
        <h3 style={{ color: '#666', marginBottom: '12px' }}>
          Здесь снизу предлагаю разместить мини лендинг, я попытаюсь сделать красивые скрины и придумать описание завтра
        </h3>
      </div>
    );
};

export default SubscriptionInfo;