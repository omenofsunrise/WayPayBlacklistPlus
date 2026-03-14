import { useState, useCallback } from 'react';
import type {
  CreateSubscriptionPayload,
  CreateSubscriptionResponse,
  SubscriptionStatusResponse,
  CancelSubscriptionResponse,
  TariffType,
  Subscription,
  SubscriptionStatus,
} from './subscription';
import { subscriptionService } from './SubscriptionService';

interface UseSubscriptionReturn {
  isLoading: boolean;
  error: string | null;
  subscription: Subscription | null;
  status: SubscriptionStatusResponse | null;
  
  createOrExtend: (data: CreateSubscriptionPayload) => Promise<CreateSubscriptionResponse | null>;
  getStatus: (tariffType: TariffType) => Promise<SubscriptionStatusResponse | null>;
  cancel: (tariffType: TariffType) => Promise<CancelSubscriptionResponse | null>;
  isActive: (tariffType: TariffType) => Promise<boolean>;
  getExpirationDate: (tariffType: TariffType) => Promise<string | null>;
  reset: () => void;
  clearError: () => void;
}

const useSubscription = (): UseSubscriptionReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [status, setStatus] = useState<SubscriptionStatusResponse | null>(null);

  const handleError = (err: unknown): null => {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    setError(errorMessage);
    return null;
  };

  const createOrExtend = useCallback(async (data: CreateSubscriptionPayload) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await subscriptionService.createOrExtend(data);
      
      if (!response.success) {
        throw new Error(response.message || 'Failed to create or extend subscription');
      }
      
      if (response.subscription) {
        setSubscription(response.subscription);
      }
      
      return response;
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getStatus = useCallback(async (tariffType: TariffType) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await subscriptionService.getStatus(tariffType);
      
      if (response.success) {
        setStatus(response);
        
        if (response.end_at && response.status) {
          setSubscription(prev => ({
            ...prev,
            end_at: response.end_at || prev?.end_at,
            status: response.status as any,
          } as Subscription));
        }
      }
      
      return response;
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancel = useCallback(async (tariffType: TariffType) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await subscriptionService.cancel(tariffType);
      
      if (!response.success) {
        throw new Error(response.message || 'Failed to cancel subscription');
      }
      
      if (response.status) {
        setSubscription(prev => prev ? {
          ...prev,
          status: response.status as SubscriptionStatus,
          end_at: response.end_at || prev.end_at,
        } : null);
      }
      
      return response;
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const isActive = useCallback(async (tariffType: TariffType): Promise<boolean> => {
    try {
      return await subscriptionService.isActive(tariffType);
    } catch (err) {
      handleError(err);
      return false;
    }
  }, []);

  const getExpirationDate = useCallback(async (tariffType: TariffType): Promise<string | null> => {
    try {
      return await subscriptionService.getExpirationDate(tariffType);
    } catch (err) {
      handleError(err);
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setSubscription(null);
    setStatus(null);
    setError(null);
    setIsLoading(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    subscription,
    status,
    
    createOrExtend,
    getStatus,
    cancel,
    isActive,
    getExpirationDate,
    reset,
    clearError,
  };
};

export default useSubscription;