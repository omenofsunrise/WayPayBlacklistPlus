import { apiRequest, API_BASE_URL } from "waypay_react_library";
import type { 
  CreateBlackCatalogResponse, 
  CountResponse, 
  BlackCatalogCreatePayload,
  BlackCatalogUpdatePayload,
  SearchParams, 
  SearchBlackCatalogResponse,
} from "./blackCatalog";

class BlackCatalogService {
  private baseEndpoint = '/black-catalog';
  private accessTokenKey = 'access_token';

  private readCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  private getAuthHeaders(): Record<string, string> {
    const token = window.localStorage.getItem(this.accessTokenKey) || this.readCookie(this.accessTokenKey);
    return token ? { Authorization: token.startsWith('Bearer ') ? token : `Bearer ${token}` } : {};
  }

  private async uploadFile<T>(endpoint: string, formData: FormData): Promise<T> {
    const headers = this.getAuthHeaders();
    // Не устанавливаем Content-Type, браузер сам добавит boundary для FormData
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
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
        payload && typeof payload === 'object' && 'error' in payload
          ? String((payload as any).error)
          : `Request failed with status ${response.status}`;
      throw new Error(message);
    }

    return payload as T;
  }

  async setPassport(data: {
    black_catalog_id: string;
    main_page?: File;
    registration_page?: File;
  }): Promise<{ success: boolean; error?: string }> {
    const formData = new FormData();
    formData.append('black_catalog_id', data.black_catalog_id);
    if (data.main_page) formData.append('main_page', data.main_page);
    if (data.registration_page) formData.append('registration_page', data.registration_page);

    return this.uploadFile<{ success: boolean; error?: string }>(
      `${this.baseEndpoint}/passport/set`,
      formData
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
      method: 'GET' 
    });
  }

  async createComment(
    id: string,
    data: { content: string; parent_id?: string; file?: File }
  ): Promise<{ success: boolean; error?: string }> {
    const formData = new FormData();
    formData.append('content', data.content);
    if (data.parent_id) formData.append('parent_id', data.parent_id);
    if (data.file) formData.append('files', data.file);

    return this.uploadFile(`${this.baseEndpoint}/${id}/comments`, formData);
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
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      
      if (value instanceof File) {
        if (value.size > 0) formData.append(key, value);
      } else if (typeof value === 'boolean') {
        formData.append(key, value ? 'true' : 'false');
      } else if (typeof value === 'string' && value.trim() !== '') {
        formData.append(key, value);
      } else if (typeof value === 'number') {
        formData.append(key, String(value));
      }
    });

    return this.uploadFile<CreateBlackCatalogResponse>(this.baseEndpoint, formData);
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
    
    if (params.name) {
      queryParams.append('name', params.name);
      queryParams.append('fullname', params.name);
    }
    if (params.mine) {
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
      method: 'GET'
    });
  }
}

export const blackCatalogService = new BlackCatalogService();