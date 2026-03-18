import React, { useState, useEffect } from 'react';
import type { TariffType } from '../../api/Subscription/subscription';
import useSubscription from '../../api/Subscription/useSubscription';

interface SubscriptionBlockProps {
  tariffType: TariffType;
  onPaymentSuccess?: () => void;
  phone?: string;
  name?: string;
  disablePromo?: boolean;
  title?: string;
}

// Определяем интерфейсы для стилей
interface DisclaimerStyles {
  overlay: React.CSSProperties;
  content: React.CSSProperties;
  title: React.CSSProperties;
  text: React.CSSProperties;
  checkboxContainer: React.CSSProperties;
  checkbox: React.CSSProperties;
  checkboxLabel: React.CSSProperties;
  buttonsContainer: React.CSSProperties;
  confirmButton: React.CSSProperties;
  cancelButton: React.CSSProperties;
}

interface MobileStyles {
  container: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  plansGrid: React.CSSProperties;
  planCard: React.CSSProperties;
  planTitle: React.CSSProperties;
  planPrice: React.CSSProperties;
  button: React.CSSProperties;
  errorMessage: React.CSSProperties;
  disclaimer: DisclaimerStyles;
}

const SubscriptionBlock: React.FC<SubscriptionBlockProps> = ({ 
  tariffType, 
  onPaymentSuccess,
  disablePromo = false,
  title = 'Оформление подписки'
}) => {
  const [selectedDays, setSelectedDays] = useState<number>(365);
  const [isMobile, setIsMobile] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  
  const {
    isLoading,
    error,
    createOrExtend,
    clearError,
  } = useSubscription();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isPromoActive = () => {
    // Если акция отключена через пропс, сразу возвращаем false
    if (disablePromo) {
      return false;
    }
    
    const today = new Date();
    const promoEndDate = new Date('2026-04-25');
    return today <= promoEndDate;
  };

  const subscriptionPlans = [
    { 
      days: 30, 
      price: 600, 
      promoPrice: 150,
      label: '1 месяц', 
      pricePerDay: '20.00',
      promoPricePerDay: '0.03',
    },
    { days: 90, price: 1764, label: '3 месяца', discount: '2%', pricePerDay: '19.60' },
    { days: 180, price: 3456, label: '6 месяцев', discount: '4%', pricePerDay: '19.20' },
    { days: 365, price: 6860, label: '1 год', discount: '6%', pricePerDay: '18.79' },
  ];

  const handleSelectPlan = (days: number) => {
    setSelectedDays(days);
  };

  const handleSubscribeClick = () => {
    setShowDisclaimer(true);
  };

  const handleConfirmSubscribe = async () => {
    if (!disclaimerAccepted) {
      alert('Пожалуйста, подтвердите ознакомление с дисклеймером');
      return;
    }

    setShowDisclaimer(false);
    
    const result = await createOrExtend({
      days: selectedDays,
      tariff_type: tariffType,
      promo: !disablePromo
    });

    if (result?.success && result.payment_url) {
      window.location.href = result.payment_url;
      
      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    }
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
    setDisclaimerAccepted(false);
  };

  const getTariffDisplayName = (type: TariffType) => {
    switch (type) {
      case 'blacklist_plus':
        return 'Black List Plus';
      default:
        return type;
    }
  };

  // Создаем объект со стилями как обычный объект, а не через styled-components
  const getMobileStyles = (): MobileStyles => ({
    container: {
      padding: isMobile ? '20px 15px' : '40px',
    },
    title: {
      fontSize: isMobile ? '24px' : '32px',
      marginBottom: isMobile ? '5px' : '10px',
    },
    subtitle: {
      fontSize: isMobile ? '16px' : '18px',
      marginBottom: isMobile ? '20px' : '30px',
    },
    plansGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: isMobile ? '12px' : '20px',
      marginBottom: isMobile ? '20px' : '30px',
    },
    planCard: {
      padding: isMobile ? '15px' : '20px',
    },
    planTitle: {
      fontSize: isMobile ? '18px' : '20px',
    },
    planPrice: {
      fontSize: isMobile ? '22px' : '24px',
    },
    button: {
      padding: isMobile ? '12px 30px' : '15px 40px',
      fontSize: isMobile ? '16px' : '18px',
      width: isMobile ? '100%' : 'auto',
    },
    errorMessage: {
      padding: isMobile ? '12px' : '15px',
      fontSize: isMobile ? '14px' : '16px',
    },
    disclaimer: {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: isMobile ? '15px' : '20px',
      },
      content: {
        backgroundColor: 'white',
        borderRadius: isMobile ? '15px' : '20px',
        padding: isMobile ? '20px' : '30px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      },
      title: {
        fontSize: isMobile ? '20px' : '24px',
        marginBottom: '20px',
        color: '#333',
      },
      text: {
        fontSize: isMobile ? '14px' : '16px',
        lineHeight: '1.6',
        color: '#666',
        marginBottom: '25px',
      },
      checkboxContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        marginBottom: '25px',
        cursor: 'pointer',
      },
      checkbox: {
        width: isMobile ? '20px' : '18px',
        height: isMobile ? '20px' : '18px',
        cursor: 'pointer',
        marginTop: '2px',
      },
      checkboxLabel: {
        fontSize: isMobile ? '14px' : '16px',
        color: '#333',
        lineHeight: '1.5',
        flex: 1,
      },
      buttonsContainer: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'flex-end',
        flexDirection: isMobile ? 'column' : 'row',
      },
      confirmButton: {
        backgroundColor: '#007D88',
        color: 'white',
        border: 'none',
        padding: isMobile ? '12px 20px' : '12px 30px',
        borderRadius: '8px',
        fontSize: isMobile ? '16px' : '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        flex: isMobile ? 1 : '0 1 auto',
      },
      cancelButton: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        border: 'none',
        padding: isMobile ? '12px 20px' : '12px 30px',
        borderRadius: '8px',
        fontSize: isMobile ? '16px' : '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        flex: isMobile ? 1 : '0 1 auto',
      },
    },
  });

  const styles = getMobileStyles();
  const promoActive = isPromoActive();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: isMobile ? '15px' : '20px',
        padding: styles.container.padding,
        boxShadow: isMobile ? '0 10px 30px rgba(0,0,0,0.2)' : '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: styles.title.marginBottom,
          color: '#333',
          fontSize: styles.title.fontSize,
        }}>
          {title}
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          marginBottom: styles.subtitle.marginBottom,
          color: '#666',
          fontSize: styles.subtitle.fontSize,
        }}>
          {getTariffDisplayName(tariffType)}
        </p>

        {error && (
          <div style={{
            backgroundColor: '#fee',
            color: '#c33',
            padding: styles.errorMessage.padding,
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: styles.errorMessage.fontSize,
          }}>
            <span style={{ flex: 1 }}>{error}</span>
            <button 
              onClick={clearError}
              style={{
                background: 'none',
                border: 'none',
                color: '#c33',
                cursor: 'pointer',
                fontSize: isMobile ? '20px' : '18px',
                padding: '0 5px',
                marginLeft: '10px',
              }}
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
        )}

        <div style={styles.plansGrid}>
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.days}
              onClick={() => handleSelectPlan(plan.days)}
              style={{
                border: `2px solid ${selectedDays === plan.days ? '#007D88' : '#e0e0e0'}`,
                borderRadius: '10px',
                padding: styles.planCard.padding,
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: selectedDays === plan.days ? '#F9FAFA' : 'white',
                position: 'relative',
                transform: selectedDays === plan.days && !isMobile ? 'scale(1.02)' : 'scale(1)',
                ...(selectedDays === plan.days && isMobile && {
                  borderWidth: '3px',
                }),
              }}
            >
              {plan.discount && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: isMobile ? '5px' : '10px',
                  backgroundColor: '#25CBA1',
                  color: 'white',
                  padding: isMobile ? '4px 8px' : '5px 10px',
                  borderRadius: '20px',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: 'bold',
                }}>
                  {plan.discount}
                </div>
              )}
              {plan.promoPrice && promoActive && plan.days === 30 && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: isMobile ? '5px' : '10px',
                  backgroundColor: '#FF6B6B',
                  color: 'white',
                  padding: isMobile ? '4px 8px' : '5px 10px',
                  borderRadius: '20px',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                }}>
                  {isMobile ? '🔥 АКЦИЯ' : '🔥 АКЦИЯ'}
                </div>
              )}
              
              <h3 style={{ 
                margin: '0 0 10px 0', 
                color: '#333',
                fontSize: styles.planTitle.fontSize,
                paddingRight: plan.discount || (plan.promoPrice && promoActive && plan.days === 30) ? '70px' : '0',
              }}>
                {plan.label}
              </h3>
              
              {plan.promoPrice && promoActive && plan.days === 30 ? (
                <>
                  <div style={{ 
                    fontSize: styles.planPrice.fontSize, 
                    fontWeight: 'bold', 
                    color: '#007D88',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    <span>{plan.promoPrice} ₽</span>
                    <span style={{ 
                      fontSize: isMobile ? '14px' : '16px', 
                      color: '#999', 
                      textDecoration: 'line-through',
                    }}>
                      {plan.price} ₽
                    </span>
                  </div>
                  <div style={{ 
                    color: '#999', 
                    marginTop: '5px',
                    fontSize: isMobile ? '14px' : '16px',
                  }}>
                    {plan.promoPricePerDay} ₽/день
                  </div>
                  {promoActive && (
                    <p style={{ 
                      color: '#FF6B6B', 
                      fontWeight: 'bold',
                      fontSize: isMobile ? '13px' : '14px',
                      margin: '5px 0 0 0',
                    }}>
                      Акция действует до 25 апреля 2026 года
                    </p>
                  )}
                </>
              ) : (
                <>
                  <div style={{ 
                    fontSize: styles.planPrice.fontSize, 
                    fontWeight: 'bold', 
                    color: '#007D88' 
                  }}>
                    {plan.price} ₽
                  </div>
                  <div style={{ 
                    color: '#999', 
                    marginTop: '5px',
                    fontSize: isMobile ? '14px' : '16px',
                  }}>
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
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '15px' : '20px',
        }}>
          <button
            onClick={handleSubscribeClick}
            disabled={isLoading}
            style={{
              backgroundColor: '#007D88',
              color: 'white',
              border: 'none',
              padding: styles.button.padding,
              borderRadius: '8px',
              fontSize: styles.button.fontSize,
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
              transition: 'background-color 0.3s',
              width: styles.button.width,
              ...(isMobile && {
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }),
            }}
          >
            {isLoading ? 'Обработка...' : 'Оформить подписку'}
          </button>
        </div>
      </div>

      {/* Модальное окно с дисклеймером */}
      {showDisclaimer && (
        <div style={styles.disclaimer.overlay}>
          <div style={styles.disclaimer.content}>
            <h2 style={styles.disclaimer.title}>
              ВНИМАНИЕ
            </h2>
            
            <div style={styles.disclaimer.text}>
              Авторы проекта не гарантируют актуальность информации, 
              представленной в данном проекте, и не несут ответственности 
              за её достоверность. Источником данных является открытое 
              сообщество людей, практикующих рассрочки, поэтому информация 
              может быстро устаревать или требовать перепроверки.
            </div>

            <label style={styles.disclaimer.checkboxContainer}>
              <input
                type="checkbox"
                checked={disclaimerAccepted}
                onChange={(e) => setDisclaimerAccepted(e.target.checked)}
                style={styles.disclaimer.checkbox}
              />
              <span style={styles.disclaimer.checkboxLabel}>
                Я ознакомился и принимаю условия использования сервиса
              </span>
            </label>

            <div style={styles.disclaimer.buttonsContainer}>
              <button
                onClick={handleCloseDisclaimer}
                style={styles.disclaimer.cancelButton}
              >
                Отмена
              </button>
              <button
                onClick={handleConfirmSubscribe}
                disabled={!disclaimerAccepted}
                style={{
                  ...styles.disclaimer.confirmButton,
                  opacity: disclaimerAccepted ? 1 : 0.5,
                  cursor: disclaimerAccepted ? 'pointer' : 'not-allowed',
                }}
              >
                Подтвердить и продолжить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionBlock;