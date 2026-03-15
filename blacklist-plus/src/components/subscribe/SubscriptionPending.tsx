import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { TariffType } from '../../api/Subscription/subscription';
import { subscriptionService } from '../../api/Subscription/SubscriptionService';

interface SubscriptionPendingPageProps {
  paymentUrl: string;
  onCheckStatus?: () => Promise<void>;
  tariffType?: TariffType;
  onPaymentComplete?: () => void;
  expiresAt?: string; // Дата истечения срока оплаты в формате ISO
}

const SubscriptionPendingPage: React.FC<SubscriptionPendingPageProps> = ({ 
  paymentUrl, 
  onCheckStatus,
  tariffType = 'blacklist_plus',
  onPaymentComplete,
  expiresAt
}) => {
  const [paymentStep, setPaymentStep] = useState<number>(1);
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const [cancelError, setCancelError] = useState<string | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);
  const [autoCheckError, setAutoCheckError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const isCheckingRef = useRef(false);
  
  const isMounted = useRef(true);
  const checkIntervalRef = useRef<number | null>(null);
  const timerIntervalRef = useRef<number | null>(null);

  // Функция для склонения слова "минута"
  const getMinutesWord = useCallback((minutes: number): string => {
    if (minutes >= 11 && minutes <= 19) return 'минут';
    const lastDigit = minutes % 10;
    if (lastDigit === 1) return 'минута';
    if (lastDigit >= 2 && lastDigit <= 4) return 'минуты';
    return 'минут';
  }, []);

  // Функция для форматирования оставшегося времени
  const formatTimeLeft = useCallback((expiryDate: string) => {
    const now = new Date().getTime();
    const expiry = new Date(expiryDate).getTime();
    const difference = expiry - now;

    if (difference <= 0) {
      return '00:00';
    }

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  // Обновление таймера
  const updateTimer = useCallback(() => {
    if (expiresAt && paymentStep === 1) {
      const formatted = formatTimeLeft(expiresAt);
      setTimeLeft(formatted);

      // Если время истекло
      if (formatted === '00:00') {
        setAutoCheckError('Время ожидания оплаты истекло');
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }
      }
    }
  }, [expiresAt, paymentStep, formatTimeLeft]);

  // Запуск таймера
  const startTimer = useCallback(() => {
    if (!expiresAt || paymentStep !== 1) return;

    // Обновляем таймер сразу
    updateTimer();

    // Запускаем интервал для обновления каждую секунду
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    timerIntervalRef.current = window.setInterval(() => {
      if (isMounted.current && paymentStep === 1) {
        updateTimer();
      }
    }, 1000);
  }, [expiresAt, paymentStep, updateTimer]);

  // Остановка таймера
  const stopTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  const performStatusCheck = useCallback(async () => {
    if (isCheckingRef.current || paymentStep === 3) {
      return;
    }

    try {
      isCheckingRef.current = true;
      setAutoCheckError(null);
      
      const statusResponse = await subscriptionService.getStatus(tariffType);
      
      if (statusResponse.success && statusResponse.status === 'active') {
        setPaymentStep(3);
        stopTimer(); // Останавливаем таймер при успешной оплате
        if (onPaymentComplete) {
          onPaymentComplete();
        }
      } else if (statusResponse.status === 'pending') {
        setPaymentStep(1);
      } else if (statusResponse.status === 'expired') {
        setAutoCheckError('Время ожидания оплаты истекло');
        stopTimer(); // Останавливаем таймер при истечении срока
      }
      
      if (onCheckStatus) {
        await onCheckStatus();
      }
      
    } catch (error) {
      console.error('Ошибка при проверке статуса:', error);
      setAutoCheckError('Не удалось проверить статус оплаты');
    } finally {
      if (isMounted.current) {
        isCheckingRef.current = false;
      }
    }
  }, [tariffType, onCheckStatus, onPaymentComplete, paymentStep, stopTimer]);

  const startAutoCheck = useCallback(() => {
    if (checkIntervalRef.current) {
      return;
    }
    
    performStatusCheck();
    
    checkIntervalRef.current = window.setInterval(() => {
      if (isMounted.current) {
        performStatusCheck();
      }
    }, 5000);
    
  }, [performStatusCheck]);

  const stopAutoCheck = useCallback(() => {
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;

    startAutoCheck();
    startTimer();

    return () => {
      isMounted.current = false;
      stopAutoCheck();
      stopTimer();
    };
  }, [startAutoCheck, startTimer, stopAutoCheck, stopTimer]);

  // Эффект для перезапуска таймера при изменении paymentStep
  useEffect(() => {
    if (paymentStep === 1) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [paymentStep, startTimer, stopTimer]);

  const getStepStatus = (step: number) => {
    if (paymentStep > step) return 'completed';
    if (paymentStep === step) return 'current';
    return 'pending';
  };

  const handleCancelSubscription = async () => {
    try {
      setIsCancelling(true);
      setCancelError(null);
      
      const response = await subscriptionService.cancel(tariffType);
      
      if (response.success) {
        stopAutoCheck();
        stopTimer();
        window.location.reload();
      } else {
        setCancelError('Не удалось отменить подписку');
      }
    } catch (error) {
      console.error('Ошибка при отмене подписки:', error);
      setCancelError('Произошла ошибка при отмене подписки');
    } finally {
      setIsCancelling(false);
      setShowCancelConfirm(false);
    }
  };

  // Определяем цвет таймера в зависимости от оставшегося времени
  const getTimerColor = () => {
    if (!expiresAt) return '#007D88';
    
    const now = new Date().getTime();
    const expiry = new Date(expiresAt).getTime();
    const difference = expiry - now;
    const minutesLeft = difference / (1000 * 60);

    if (minutesLeft <= 1) return '#F44336'; // Красный - меньше минуты
    if (minutesLeft <= 3) return '#FF9800'; // Оранжевый - меньше 3 минут
    return '#007D88'; // Основной цвет бренда
  };

  // Получаем цвет фона для таймера
  const getTimerBackgroundColor = () => {
    if (!expiresAt) return '#E8F4F5';
    
    const now = new Date().getTime();
    const expiry = new Date(expiresAt).getTime();
    const difference = expiry - now;
    const minutesLeft = difference / (1000 * 60);

    if (minutesLeft <= 1) return '#FFEBEE';
    if (minutesLeft <= 3) return '#FFF3E0';
    return '#E8F4F5';
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
        position: 'relative'
      }}>
        {/* Кнопка отмены в углу */}
        {paymentStep === 1 && !showCancelConfirm && (
          <button
            onClick={() => setShowCancelConfirm(true)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'transparent',
              color: '#999',
              border: '1px solid #ddd',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#999';
            }}
          >
            ✕ Отменить
          </button>
        )}

        {/* Модалка подтверждения отмены */}
        {showCancelConfirm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px',
              maxWidth: '400px',
              width: '90%',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                color: '#333', 
                marginBottom: '15px',
                fontSize: '20px'
              }}>
                Отменить оформление?
              </h3>

              <p style={{ 
                color: '#666', 
                marginBottom: '25px',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                Вы уверены, что хотите отменить оформление подписки? 
                Вам придется начать заново.
              </p>

              {cancelError && (
                <div style={{
                  backgroundColor: '#FFEBEE',
                  color: '#F44336',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  {cancelError}
                </div>
              )}

              <div style={{
                display: 'flex',
                gap: '10px'
              }}>
                <button
                  onClick={handleCancelSubscription}
                  disabled={isCancelling}
                  style={{
                    flex: 1,
                    backgroundColor: '#F44336',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: isCancelling ? 'not-allowed' : 'pointer',
                    opacity: isCancelling ? 0.7 : 1,
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#D32F2F';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#F44336';
                    }
                  }}
                >
                  {isCancelling ? 'Отмена...' : 'Да, отменить'}
                </button>

                <button
                  onClick={() => {
                    setShowCancelConfirm(false);
                    setCancelError(null);
                  }}
                  disabled={isCancelling}
                  style={{
                    flex: 1,
                    backgroundColor: '#f5f5f5',
                    color: '#666',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    cursor: isCancelling ? 'not-allowed' : 'pointer',
                    opacity: isCancelling ? 0.5 : 1,
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#e0e0e0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#f5f5f5';
                    }
                  }}
                >
                  Нет, вернуться
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Заголовок */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#333', 
            marginBottom: '10px',
            fontSize: '28px'
          }}>
            {paymentStep === 1 && 'Ожидание оплаты'}
            {paymentStep === 2 && 'Подтверждение платежа'}
            {paymentStep === 3 && 'Платёж завершён'}
          </h1>

          <p style={{ 
            color: '#666', 
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            {paymentStep === 1 && 'Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.'}
            {paymentStep === 2 && 'Платёж обрабатывается банком. Обычно это занимает несколько секунд.'}
            {paymentStep === 3 && 'Подписка успешно активирована! Спасибо за покупку.'}
          </p>
        </div>

        {/* Прогресс процесса оплаты */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '40px',
          position: 'relative'
        }}>
          {/* Линия прогресса */}
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15%',
            right: '15%',
            height: '2px',
            backgroundColor: '#E0E0E0',
            zIndex: 1
          }}>
            <div style={{
              width: paymentStep === 1 ? '0%' : paymentStep === 2 ? '50%' : '100%',
              height: '100%',
              backgroundColor: '#007D88',
              transition: 'width 0.5s ease'
            }} />
          </div>

          {/* Шаг 1 */}
          <div style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            flex: 1
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: getStepStatus(1) === 'completed' ? '#007D88' : 
                             getStepStatus(1) === 'current' ? '#007D88' : '#E0E0E0',
              border: getStepStatus(1) === 'current' ? '3px solid #007D88' : 'none',
              margin: '0 auto 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getStepStatus(1) === 'completed' ? '✓' : '1'}
            </div>
            <div style={{
              color: getStepStatus(1) === 'current' ? '#007D88' : '#999',
              fontSize: '12px',
              fontWeight: getStepStatus(1) === 'current' ? 'bold' : 'normal'
            }}>
              Начало
            </div>
          </div>

          {/* Шаг 2 */}
          <div style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            flex: 1
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: getStepStatus(2) === 'completed' ? '#007D88' : 
                             getStepStatus(2) === 'current' ? 'white' : '#E0E0E0',
              border: getStepStatus(2) === 'current' ? '3px solid #007D88' : 'none',
              margin: '0 auto 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: getStepStatus(2) === 'current' ? '#007D88' : 
                     getStepStatus(2) === 'completed' ? 'white' : '#999',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getStepStatus(2) === 'completed' ? '✓' : '2'}
            </div>
            <div style={{
              color: getStepStatus(2) === 'current' ? '#007D88' : '#999',
              fontSize: '12px',
              fontWeight: getStepStatus(2) === 'current' ? 'bold' : 'normal'
            }}>
              Подтверждение
            </div>
          </div>

          {/* Шаг 3 */}
          <div style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            flex: 1
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: getStepStatus(3) === 'completed' ? '#007D88' : 
                             getStepStatus(3) === 'current' ? 'white' : '#E0E0E0',
              border: getStepStatus(3) === 'current' ? '3px solid #007D88' : 'none',
              margin: '0 auto 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: getStepStatus(3) === 'current' ? '#007D88' : 
                     getStepStatus(3) === 'completed' ? 'white' : '#999',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getStepStatus(3) === 'completed' ? '✓' : '3'}
            </div>
            <div style={{
              color: getStepStatus(3) === 'current' ? '#007D88' : '#999',
              fontSize: '12px',
              fontWeight: getStepStatus(3) === 'current' ? 'bold' : 'normal'
            }}>
              Завершено
            </div>
          </div>
        </div>

        {/* Блок со ссылкой и таймером */}
        <div style={{
          backgroundColor: '#F9FAFA',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px'
        }}>
          {/* Ссылка для оплаты */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ color: '#999', fontSize: '14px', marginBottom: '5px' }}>
              Ссылка для оплаты
            </div>
            <a 
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007D88',
                textDecoration: 'none',
                fontSize: '16px',
                wordBreak: 'break-all',
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#E8F4F5',
                borderRadius: '8px',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D1E9EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8F4F5';
              }}
            >
              {paymentUrl}
            </a>
          </div>

          {/* Таймер */}
          {paymentStep === 1 && expiresAt && timeLeft !== '00:00' && (
            <div style={{
              borderTop: '1px solid #E0E0E0',
              paddingTop: '20px'
            }}>
              <div style={{ 
                color: '#666', 
                fontSize: '14px', 
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Осталось времени на оплату
              </div>
              <div style={{
                backgroundColor: getTimerBackgroundColor(),
                padding: '15px',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: getTimerColor(),
                  fontFamily: 'monospace',
                  lineHeight: 1.2,
                  letterSpacing: '4px'
                }}>
                  {timeLeft}
                </div>
              </div>
            </div>
          )}
        </div>

        {autoCheckError && paymentStep !== 3 && (
          <div style={{
            backgroundColor: '#FFEBEE',
            color: '#F44336',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {autoCheckError}
          </div>
        )}

        {paymentStep === 2 && (
          <div style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#E3F2FD',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#1976D2', 
              fontSize: '14px',
              margin: 0
            }}>
              Идёт автоматическая проверка статуса каждые 5 секунд.
              Платёж обрабатывается банком. Обычно это занимает несколько секунд.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default SubscriptionPendingPage;