import React, { useState, useEffect } from 'react';
import SubscriptionBlock from '../components/subscribe/SubscriptionBlock';
import type { TariffType } from '../api/Subscription/subscription';
import { subscriptionService } from '../api/Subscription/SubscriptionService';
import ProfileHeader from '../components/subscribe/ProfileHeader';
import SubscriptionInfo from '../components/subscribe/SubscriptionInfo';

interface SubscriptionPageProps {
  tariffType: TariffType;
  name: string;
  phone: string;
  onPaymentSuccess?: () => void;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({
  tariffType,
  name,
  phone,
  onPaymentSuccess,
}) => {
  const [hasActiveSubscription, setHasActiveSubscription] = useState<boolean>(false);
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState<string | undefined>('');

  useEffect(() => {
    loadSubscriptionInfo();
    checkSubscriptionStatus();
    
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const loadSubscriptionInfo = async () => {
    try {
      setIsLoading(true);
      const isActive = await subscriptionService.isActive(tariffType);
      setHasActiveSubscription(isActive);
      
      if (isActive) {
        const date = await subscriptionService.getExpirationDate(tariffType);
        setExpirationDate(date ? new Date(date) : null);
      }
    } catch (error) {
      console.error('Ошибка при загрузке информации о подписке:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    loadSubscriptionInfo();
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  const checkSubscriptionStatus = async () => {
    try {
      const status = await subscriptionService.getStatus(tariffType);
      setStatus(status.status);
    } catch {
    }
  };

  return (
    <div style={{
      padding: 0,
      width: "100%",
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      WebkitOverflowScrolling: "touch", 
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        width: "100%",
        boxSizing: "border-box",
        height: "auto",
        minHeight: "100%",
      }}>
        <ProfileHeader name={name} phone={phone} />
        
        <div>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              Загрузка информации о подписке...
            </div>
          ) : (
            <>
              <SubscriptionBlock 
                tariffType={tariffType}
                onPaymentSuccess={handlePaymentSuccess}
                disablePromo={status === 'expired'}
              />
              
              <SubscriptionInfo 
                tariffType={tariffType}
                expirationDate={expirationDate}
                isActive={hasActiveSubscription}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;