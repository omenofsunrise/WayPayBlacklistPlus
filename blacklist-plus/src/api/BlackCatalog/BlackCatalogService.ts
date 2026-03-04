import { apiRequest } from "waypay_react_library";
import type { 
  CreateBlackCatalogRequest, 
  CreateBlackCatalogResponse, 
  CountResponse, 
  SearchParams, 
  SearchBlackCatalogResponse,
} from "./blackCatalog";

class BlackCatalogService {
  private baseEndpoint = '/black-catalog';

  /**
   * Очищает данные от пустых строк для дат
   */
  private sanitizeData(data: CreateBlackCatalogRequest['black_catalog']): Partial<CreateBlackCatalogRequest['black_catalog']> {
    const sanitized: Partial<CreateBlackCatalogRequest['black_catalog']> = {};
    
    (Object.keys(data) as Array<keyof typeof data>).forEach(key => {
      const value = data[key];
      
      if (key === 'birthdate' || key === 'doc_issue_date') {
        if (value && value !== '') {
          sanitized[key] = value;
        }
      } else {
        sanitized[key] = value;
      }
    });
    
    return sanitized;
  }

  /**
   * Подготавливает данные для обновления
   * Для обновления: пустые даты превращаем в null
   */
  private prepareUpdateData(data: CreateBlackCatalogRequest['black_catalog']): CreateBlackCatalogRequest['black_catalog'] {
    const prepared = { ...data };
    
    if (prepared.birthdate === '') {
      (prepared as any).birthdate = null;
    }
    if (prepared.doc_issue_date === '') {
      (prepared as any).doc_issue_date = null;
    }
    
    return prepared;
  }

  /**
   * Создать запись в черном каталоге
   * POST /black-catalog
   * При создании: пустые даты не отправляются
   */
  async create(data: CreateBlackCatalogRequest['black_catalog']): Promise<CreateBlackCatalogResponse> {
    const sanitizedData = this.sanitizeData(data);
    
    return apiRequest<CreateBlackCatalogResponse>(this.baseEndpoint, {
      method: 'POST',
      body: { black_catalog: sanitizedData }
    });
  }

  /**
   * Обновить запись в черном каталоге
   * PUT /black-catalog/{id}
   * При обновлении: пустые даты отправляются как null
   */
  async update(id: number, data: CreateBlackCatalogRequest['black_catalog']): Promise<CreateBlackCatalogResponse> {
    const preparedData = this.prepareUpdateData(data);
    
    return apiRequest<CreateBlackCatalogResponse>(`${this.baseEndpoint}/${id}`, {
      method: 'PUT',
      body: { black_catalog: preparedData }
    });
  }

  /**
   * Удалить запись из черного каталога
   * DELETE /black-catalog/{id}
   */
  async delete(id: number) {
    return apiRequest(`${this.baseEndpoint}/${id}`, {
      method: 'DELETE'
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
}

export const blackCatalogService = new BlackCatalogService();
