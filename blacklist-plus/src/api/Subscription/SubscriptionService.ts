import { apiRequest } from "waypay_react_library";
import type {
  CreateSubscriptionPayload,
  CreateSubscriptionResponse,
  SubscriptionStatusResponse,
  CancelSubscriptionResponse,
  TariffType,
} from "./subscription";

class SubscriptionService {
  private baseEndpoint = '/subscribe';

  /**
   * Создать или продлить подписку
   * POST /subscribe/black-list-plus
   * @param data Данные для подписки (количество дней и тип тарифа)
   */
  async createOrExtend(data: CreateSubscriptionPayload): Promise<CreateSubscriptionResponse> {
    return apiRequest<CreateSubscriptionResponse>(`${this.baseEndpoint}/black-list-plus`, {
      method: 'POST',
      body: data,
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
    
    return apiRequest<SubscriptionStatusResponse>(
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
    
    return apiRequest<CancelSubscriptionResponse>(
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