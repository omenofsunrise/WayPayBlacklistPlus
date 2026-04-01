import { apiRequest } from "waypay_react_library";
import type { 
  CreateBlackCatalogResponse, 
  CountResponse, 
  BlackCatalogCreatePayload,
  BlackCatalogUpdatePayload,
  SearchParams, 
  SearchBlackCatalogResponse,
  AddDebtRequest,
  NotificationsResponse,
} from "./blackCatalog";

class BlackCatalogService {
  private baseEndpoint = '/black-catalog';

  private prepareFormData(data: Record<string, any>): FormData {
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      
      if (value instanceof File) {
        if (value.size > 0) formData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach(item => {
          if (item instanceof File) {
            formData.append(key, item);
          } else {
            formData.append(key, String(item));
          }
        });
      } else if (typeof value === 'boolean') {
        formData.append(key, value ? 'true' : 'false');
      } else if (typeof value === 'string' && value.trim() !== '') {
        formData.append(key, value);
      } else if (typeof value === 'number') {
        formData.append(key, String(value));
      } else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value));
      }
    });

    return formData;
  }

  async setPassport(data: {
    black_catalog_id: string;
    main_page?: File;
    registration_page?: File;
  }): Promise<{ success: boolean; error?: string }> {
    const formData = this.prepareFormData(data);
    
    return apiRequest<{ success: boolean; error?: string }>(
      `${this.baseEndpoint}/passport/set`,
      {
        method: 'POST',
        body: formData,
        isFormData: true
      }
    );
  }

  async deletePassport(data: {
    black_catalog_id: string;
    main_page_id?: string;
    registration_page_id?: string;
  }): Promise<{ success: boolean; error?: string }> {
    return apiRequest<{ success: boolean; error?: string }>(`${this.baseEndpoint}/passport/delete`, {
      method: 'POST',
      body: data,
    });
  }

  async getComments(id: string, pageSize = 20): Promise<{
    comments: Array<{
      id: string;
      content: string;
      created_at: string;
      user_id: string;
      author?: {
        full_name?: string;
        avatar_url?: string;
      };
      files?: Array<{
        id: string;
        filename: string;
        url?: string;
        content_type?: string;
        size_bytes?: number;
      }>;
    }>;
    next_page_token?: string;
    total_count?: number;
    success: boolean;
    error?: string;
  }> {
    const queryParams = new URLSearchParams();
    queryParams.append('page_size', String(pageSize));
    return apiRequest(`${this.baseEndpoint}/${id}/comments?${queryParams.toString()}`, { 
      method: 'GET',
    });
  }

  async addDebt(request: AddDebtRequest) {
    apiRequest(
      `${this.baseEndpoint}/debt`,
      {
        method: 'POST',
        body: request,
      }
    );
  }

  async deleteDebt(id: number) {
    apiRequest(
      `${this.baseEndpoint}/debt/${id}`,
      {
        method: 'DELETE',
      }
    );
  }

  async createComment(
    id: string,
    data: { content: string; parent_id?: string; file?: File }
  ): Promise<{ success: boolean; error?: string }> {
    const formData = this.prepareFormData({
      content: data.content,
      parent_id: data.parent_id,
      files: data.file ? [data.file] : []
    });

    return apiRequest(
      `${this.baseEndpoint}/${id}/comments`,
      {
        method: 'POST',
        body: formData,
        isFormData: true
      }
    );
  }

  async updateComment(
    commentId: string,
    content: string
  ): Promise<{ success: boolean; error?: string }> {
    return apiRequest(`/comments/${commentId}`, {
      method: 'PUT',
      body: { content },
    });
  }

  async deleteComment(
    id: string,
    commentId: string
  ): Promise<{ success: boolean; error?: string }> {
    return apiRequest(`${this.baseEndpoint}/${id}/comments/${commentId}`, {
      method: 'DELETE',
    });
  }

  /**
   * Создать запись в черном каталоге
   * POST /black-catalog
   */
  async create(data: BlackCatalogCreatePayload): Promise<CreateBlackCatalogResponse> {
    const formData = this.prepareFormData(data);
    
    return apiRequest<CreateBlackCatalogResponse>(
      this.baseEndpoint,
      {
        method: 'POST',
        body: formData,
        isFormData: true
      }
    );
  }

  /**
   * Обновить запись в черном каталоге
   * PUT /black-catalog/{id}
   */
  async update(id: number, data: BlackCatalogUpdatePayload): Promise<CreateBlackCatalogResponse> {
    // Для обновления пустые строки превращаем в null
    const preparedData = { ...data };
    
    if (preparedData.birthdate === '') {
      (preparedData as any).birthdate = null;
    }
    if (preparedData.debt_ending_at === '') {
      (preparedData as any).debt_ending_at = null;
    }
    
    return apiRequest<CreateBlackCatalogResponse>(`${this.baseEndpoint}/${id}`, {
      method: 'PUT',
      body: { black_catalog: preparedData },
    });
  }

  /**
   * Удалить запись из черного каталога
   * DELETE /black-catalog/{id}
   */
  async delete(id: number) {
    return apiRequest(`${this.baseEndpoint}/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Получить количество записей в черном каталоге
   * GET /black-catalog/count
   */
  async getCount(): Promise<number> {
    const response = await apiRequest<CountResponse>(`${this.baseEndpoint}/count`, {
      method: 'GET',
    });
    return response.count;
  }

  async getNotifications(): Promise<NotificationsResponse> {
    const response = await apiRequest<NotificationsResponse>(`${this.baseEndpoint}/notifications`, {
      method: 'GET',
    });
    return response;
  }

  async markAsReadNotification(id: number): Promise<void> {
    await apiRequest(`${this.baseEndpoint}/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  /**
   * Поиск по черному каталогу
   * GET /black-catalog/search
   */
  async search(params: SearchParams): Promise<SearchBlackCatalogResponse> {
    const queryParams = new URLSearchParams();
    
    if (params.name) {
      queryParams.append('name', params.name);
      queryParams.append('fullname', params.name);
    }
    if (params.mine) {
      queryParams.append('mine', 'true');
    }
    if (params.id) {
      queryParams.append('mine', 'true');
    }
    if (params.page_token) {
      queryParams.append('page_token', params.page_token);
    }
    if (params.page_size) {
      queryParams.append('page_size', String(params.page_size));
    }
    
    const queryString = queryParams.toString();
    const endpoint = queryString 
      ? `${this.baseEndpoint}/search?${queryString}`
      : `${this.baseEndpoint}/search`;

    return apiRequest<SearchBlackCatalogResponse>(endpoint, {
      method: 'GET',
    });
  }
}

export const blackCatalogService = new BlackCatalogService();