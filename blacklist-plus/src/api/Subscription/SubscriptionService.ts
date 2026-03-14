import { API_BASE_URL } from "waypay_react_library";
import type {
  CreateSubscriptionPayload,
  CreateSubscriptionResponse,
  SubscriptionStatusResponse,
  CancelSubscriptionResponse,
  TariffType,
} from "./subscription";

class SubscriptionService {
  private baseEndpoint = '/subscribe';
  private accessTokenKey = 'access_token';

  private readCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  private async requestWithAuth<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token =
      window.localStorage.getItem(this.accessTokenKey) || this.readCookie(this.accessTokenKey);
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {})
    };
    
    if (token) {
      headers.Authorization = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    }

    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });

    const text = await response.text();
    const payload = text ? (() => {
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    })() : null;

    if (!response.ok) {
      const message =
        payload && typeof payload === 'object' && 'message' in payload
          ? String(payload.message)
          : `Request failed with status ${response.status}`;
      throw new Error(message);
    }

    return payload as T;
  }

  /**
   * Создать или продлить подписку
   * POST /subscribe/black-list-plus
   * @param data Данные для подписки (количество дней и тип тарифа)
   */
  async createOrExtend(data: CreateSubscriptionPayload): Promise<CreateSubscriptionResponse> {
    return this.requestWithAuth<CreateSubscriptionResponse>(`${this.baseEndpoint}/black-list-plus`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Проверить статус подписки
   * GET /subscribe/status
   * @param tariffType Тип тарифа
   */
  async getStatus(tariffType: TariffType): Promise<SubscriptionStatusResponse> {
    const queryParams = new URLSearchParams();
    queryParams.append('tariff_type', tariffType);
    
    return this.requestWithAuth<SubscriptionStatusResponse>(
      `${this.baseEndpoint}/status?${queryParams.toString()}`,
      { method: 'GET' }
    );
  }

  /**
   * Отменить покупку подписки
   * POST /subscribe/cancel
   * @param tariffType Тип тарифа
   */
  async cancel(tariffType: TariffType): Promise<CancelSubscriptionResponse> {
    const queryParams = new URLSearchParams();
    queryParams.append('tariff_type', tariffType);
    
    return this.requestWithAuth<CancelSubscriptionResponse>(
      `${this.baseEndpoint}/cancel?${queryParams.toString()}`,
      { method: 'POST' }
    );
  }

  /**
   * Утилита для проверки активности подписки
   * @param tariffType Тип тарифа
   */
  async isActive(tariffType: TariffType): Promise<boolean> {
    try {
      const response = await this.getStatus(tariffType);
      return response.success && response.status === 'active';
    } catch {
      return false;
    }
  }

  /**
   * Получить дату окончания подписки
   * @param tariffType Тип тарифа
   */
  async getExpirationDate(tariffType: TariffType): Promise<string | null> {
    try {
      const response = await this.getStatus(tariffType);
      if (response.success && response.end_at) {
        return response.end_at;
      }
      return null;
    } catch {
      return null;
    }
  }
}

export const subscriptionService = new SubscriptionService();