export interface BlackCatalogItem {
  id: number;
  fullname: string;
  doc: string;
  address: string;
  birthdate: string;
  comment?: string;
  is_swindler?: boolean;
  debt_ending_at?: string;
  main_passport_page?: string;
  registration_passport_page?: string;
  creator_id?: string;
}

export interface BlackCatalogCreatePayload {
  address: string;
  doc: string;
  fullname: string;
  birthdate: string;
  comment?: string;
  is_swindler?: boolean;
  debt_ending_at?: string;
  main_page?: File | null;
  registration_page?: File | null;
}

export interface BlackCatalogUpdatePayload {
  address: string;
  doc: string;
  fullname: string;
  birthdate: string;
  comment?: string;
  is_swindler?: boolean;
  debt_ending_at?: string;
}

export interface BlackCatalogFormData {
  fullname: string;
  doc: string;
  address: string;
  birthdate: string;
  comment: string;
  main_page: File | null;
  registration_page: File | null;
  is_swindler: boolean;
  debt_ending_at: string;
}

export interface CreateBlackCatalogRequest {
  black_catalog: {
    address: string;
    doc: string;
    fullname: string;
    birthdate: string;
    comment?: string;
    is_swindler?: boolean;
    debt_ending_at?: string;
    main_page?: File | null;
    registration_page?: File | null;
  };
}

export interface CreateBlackCatalogResponse {
  id: number;
  success: boolean;
  error?: string;
}

export interface SearchBlackCatalogResponse {
  black_catalogs: BlackCatalogItem[];
  count: number;
  next_page_token?: string;
  success: boolean;
  error?: string;
}

export interface CountResponse {
  count: number;
}

export interface ErrorResponse {
  error: string;
}

export interface SearchParams {
  name?: string;
  mine?: boolean;
  page_token?: string;
  page_size?: number;
}

export interface AddDebtRequest {
  blacklist_id: number;
  debt_ending_at: Date;
}