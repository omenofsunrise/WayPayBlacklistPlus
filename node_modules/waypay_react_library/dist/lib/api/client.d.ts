import { API_BASE_URL } from './config';
type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: unknown;
    headers?: Record<string, string>;
    token?: string;
    withCredentials?: boolean;
    isFormData?: boolean;
};
export declare function apiRequest<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T>;
export { API_BASE_URL };
export declare function refreshAccessToken(): Promise<string | null>;
