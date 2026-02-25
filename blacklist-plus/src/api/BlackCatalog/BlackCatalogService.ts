import { apiRequest } from "waypay_react_library";
import type { CreateBlackCatalogRequest, CreateBlackCatalogResponse, CountResponse, SearchParams, SearchBlackCatalogResponse, BlackCatalogItem } from "./blackCatalog";


class BlackCatalogService {
  private baseEndpoint = '/black-catalog';

  /**
   * Создать запись в черном каталоге
   * POST /black-catalog
   */
  async create(data: CreateBlackCatalogRequest['black_catalog']): Promise<CreateBlackCatalogResponse> {
    return apiRequest<CreateBlackCatalogResponse>(this.baseEndpoint, {
      method: 'POST',
      body: { black_catalog: data }
    });
  }

  /**
   * Получить количество записей в черном каталоге
   * GET /black-catalog/count
   */
  async getCount(): Promise<number> {
    const response = await apiRequest<CountResponse>(`${this.baseEndpoint}/count`, {
      method: 'GET'
    });
    return response.count;
  }

  /**
   * Поиск по черному каталогу
   * GET /black-catalog/search
   */
  async search(params: SearchParams): Promise<SearchBlackCatalogResponse> {
    // Формируем query параметры
    const queryParams = new URLSearchParams();
    if (params.name) queryParams.append('name', params.name);
    if (params.phone) queryParams.append('phone', params.phone);
    
    const queryString = queryParams.toString();
    const endpoint = queryString 
      ? `${this.baseEndpoint}/search?${queryString}`
      : `${this.baseEndpoint}/search`;

    return apiRequest<SearchBlackCatalogResponse>(endpoint, {
      method: 'GET'
    });
  }

  /**
   * Получить конкретную запись по ID (если нужен отдельный эндпоинт)
   * Возможно такого эндпоинта нет в API, добавил для полноты
   */
  async getById(id: number): Promise<BlackCatalogItem | null> {
    try {
      // Так как отдельного эндпоинта нет, используем поиск по имени
      // Это не идеально, но пока как пример
      const results = await this.search({ name: id.toString() });
      return results.black_catalogs.find(item => item.id === id) || null;
    } catch {
      return null;
    }
  }
}

// Экспортируем единственный экземпляр сервиса
export const blackCatalogService = new BlackCatalogService();