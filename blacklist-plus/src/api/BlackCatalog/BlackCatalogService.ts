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

  private appendFormValue(form: FormData, key: string, value: unknown) {
    if (value === undefined || value === null) return;
    if (typeof value === 'string' && value.trim() === '') return;

    if (value instanceof File) {
      if (value.size > 0) form.append(key, value);
      return;
    }

    if (typeof value === 'boolean') {
      form.append(key, value ? 'true' : 'false');
      return;
    }

    form.append(key, String(value));
  }

  private readCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  private async requestFormData<T>(endpoint: string, formData: FormData): Promise<T> {
    const token =
      window.localStorage.getItem(this.accessTokenKey) || this.readCookie(this.accessTokenKey);
    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = token.startsWith('Bearer ') ? token : token;
    }
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

    return this.requestFormData<{ success: boolean; error?: string }>(
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
    const endpoint = `${this.baseEndpoint}/${id}/comments?${queryParams.toString()}`;
    return apiRequest(endpoint, { method: 'GET' });
  }

  async createComment(
    id: string,
    data: { content: string; parent_id?: string; file?: File }
  ): Promise<{ success: boolean; error?: string }> {
    const formData = new FormData();
    formData.append('content', data.content);
    if (data.parent_id) formData.append('parent_id', data.parent_id);
    if (data.file) formData.append('files', data.file);

    return this.requestFormData(`${this.baseEndpoint}/${id}/comments`, formData);
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
   * Подготавливает данные для обновления
   * Для обновления: пустые даты превращаем в null
   */
  private prepareUpdateData(data: BlackCatalogUpdatePayload): BlackCatalogUpdatePayload {
    const prepared: BlackCatalogUpdatePayload = { ...data };
    
    if (prepared.birthdate === '') {
      (prepared as any).birthdate = null;
    }
    if (prepared.debt_ending_at === '') {
      (prepared as any).debt_ending_at = null;
    }
    return prepared;
  }

  /**
   * Создать запись в черном каталоге
   * POST /black-catalog
   * При создании: пустые даты не отправляются
   */
  async create(data: BlackCatalogCreatePayload): Promise<CreateBlackCatalogResponse> {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof BlackCatalogCreatePayload>).forEach(key => {
      this.appendFormValue(formData, key, data[key]);
    });

    return this.requestFormData<CreateBlackCatalogResponse>(this.baseEndpoint, formData);
  }

  /**
   * Обновить запись в черном каталоге
   * PUT /black-catalog/{id}
   * При обновлении: пустые даты отправляются как null
   */
  async update(id: number, data: BlackCatalogUpdatePayload): Promise<CreateBlackCatalogResponse> {
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
    if (params.name) {
      queryParams.append('name', params.name);
      queryParams.append('fullname', params.name);
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
