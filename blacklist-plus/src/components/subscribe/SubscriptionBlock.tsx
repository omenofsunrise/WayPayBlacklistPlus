import React, { useState } from 'react';
import type { TariffType } from '../../api/Subscription/subscription';
import useSubscription from '../../api/Subscription/useSubscription';

interface SubscriptionBlockProps {
  tariffType: TariffType;
  onPaymentSuccess?: () => void;
  phone?: string;
  name?: string;
}

const SubscriptionBlock: React.FC<SubscriptionBlockProps> = ({ 
  tariffType, 
  onPaymentSuccess
}) => {
  const [selectedDays, setSelectedDays] = useState<number>(365);
  const {
    isLoading,
    error,
    createOrExtend,
    clearError,
  } = useSubscription();

  // Проверка активна ли акция (до 25 апреля)
  const isPromoActive = () => {
    const today = new Date();
    const promoEndDate = new Date('2026-04-25');
    return today <= promoEndDate;
  };

  const subscriptionPlans = [
    { 
      days: 30, 
      price: 600, 
      promoPrice: 1, // Акционная цена
      label: '1 месяц', 
      pricePerDay: '20.00',
      promoPricePerDay: '0.03', // 1₽/30 дней ≈ 0.03₽/день
    },
    { days: 90, price: 1764, label: '3 месяца', discount: '2%', pricePerDay: '19.60' },
    { days: 180, price: 3456, label: '6 месяцев', discount: '4%', pricePerDay: '19.20' },
    { days: 365, price: 6860, label: '1 год', discount: '6%', pricePerDay: '18.79' },
  ];

  const handleSelectPlan = (days: number) => {
    setSelectedDays(days);
  };

  const handleSubscribe = async () => {
    // Используем акционную цену для 30 дней, если акция активна
    const selectedPlan = subscriptionPlans.find(plan => plan.days === selectedDays);
    const finalPrice = selectedPlan?.promoPrice && isPromoActive() 
      ? selectedPlan.promoPrice 
      : selectedPlan?.price;

    const result = await createOrExtend({
      days: selectedDays,
      tariff_type: tariffType,
      // Можно передать специальный параметр для акции, если API поддерживает
      // promo_code: selectedDays === 30 && isPromoActive() ? 'APRIL_PROMO' : undefined
    });

    if (result?.success && result.payment_url) {
      // Перенаправляем на страницу оплаты
      window.location.href = result.payment_url;
      
      // Если есть callback успешной оплаты, вызываем его
      // (обычно это происходит после редиректа обратно)
      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    }
  };

  const getTariffDisplayName = (type: TariffType) => {
    switch (type) {
      case 'blacklist_plus':
        return 'Black List Plus';
      default:
        return type;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '10px',
          color: '#333',
        }}>
          Оформление подписки
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: '#666',
          fontSize: '18px',
        }}>
          {getTariffDisplayName(tariffType)}
        </p>

        {error && (
          <div style={{
            backgroundColor: '#fee',
            color: '#c33',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span>{error}</span>
            <button 
              onClick={clearError}
              style={{
                background: 'none',
                border: 'none',
                color: '#c33',
                cursor: 'pointer',
                fontSize: '18px',
              }}
            >
              ×
            </button>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
        }}>
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.days}
              onClick={() => handleSelectPlan(plan.days)}
              style={{
                border: `2px solid ${selectedDays === plan.days ? '#007D88' : '#e0e0e0'}`,
                borderRadius: '10px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: selectedDays === plan.days ? '#F9FAFA' : 'white',
                position: 'relative',
                transform: selectedDays === plan.days ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              {plan.discount && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  backgroundColor: '#25CBA1',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}>
                  {plan.discount}
                </div>
              )}
              
              {/* Специальный бейдж для акционного предложения */}
              {plan.promoPrice && isPromoActive() && plan.days === 30 && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  backgroundColor: '#FF6B6B',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}>
                  🔥 АКЦИЯ
                </div>
              )}
              
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{plan.label}</h3>
              
              {/* Отображение цены с акцией для 30 дней */}
              {plan.promoPrice && isPromoActive() && plan.days === 30 ? (
                <>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007D88' }}>
                    {plan.promoPrice} ₽
                  </div>
                  <div style={{ 
                    fontSize: '16px', 
                    color: '#999', 
                    textDecoration: 'line-through',
                    marginTop: '4px'
                  }}>
                    {plan.price} ₽
                  </div>
                  <div style={{ color: '#999', marginTop: '5px' }}>
                    {plan.promoPricePerDay} ₽/день
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007D88' }}>
                    {plan.price} ₽
                  </div>
                  <div style={{ color: '#999', marginTop: '5px' }}>
                    {plan.pricePerDay} ₽/день
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}>
          <button
            onClick={handleSubscribe}
            disabled={isLoading}
            style={{
              backgroundColor: '#007D88',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
              transition: 'background-color 0.3s',
            }}
          >
            {isLoading ? 'Обработка...' : 'Оформить подписку'}
          </button>
        </div>

        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#999',
          fontSize: '14px',
        }}>
          {isPromoActive() && (
            <p style={{ color: '#FF6B6B', fontWeight: 'bold' }}>
              Акция действует до 25 апреля 2025 года
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBlock;