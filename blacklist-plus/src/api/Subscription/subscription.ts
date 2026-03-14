export type TariffType = 'blacklist_plus';

export type SubscriptionStatus = 'active' | 'expired' | 'cancelled' | 'pending';

export interface Subscription {
  id: string;
  user_id: string;
  tariff_type: TariffType;
  status: SubscriptionStatus;
  start_at: string;
  end_at: string;
  created_at: string;
}

export interface CreateSubscriptionPayload {
  days: number;
  tariff_type: TariffType;
}

export interface CreateSubscriptionResponse {
  success: boolean;
  error_code?: string;
  message?: string;
  payment_url?: string;
  subscription?: Subscription;
}

export interface SubscriptionStatusResponse {
  success: boolean;
  status?: SubscriptionStatus;
  end_at?: string;
  expires_at?: string;
  payment_url?: string;
  transaction_status?: string;
  error_code?: string;
  message?: string;
}

export interface CancelSubscriptionResponse {
  success: boolean;
  status?: SubscriptionStatus;
  end_at?: string;
  expires_at?: string;
  payment_url?: string;
  transaction_status?: string;
  error_code?: string;
  message?: string;
}