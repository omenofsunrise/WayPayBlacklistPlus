export interface BlackCatalogItem {
  id: number;
  fullname: string;
  doc: string;
  phone: string;
  address: string;
}

export interface CreateBlackCatalogRequest {
  black_catalog: {
    address: string;
    doc: string;
    fullname: string;
    phone: string;
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
  success: boolean;
  error?: string;
}

export interface CountResponse {
  count: number;
}

export interface ErrorResponse {
  error: string;
}

// Параметры поиска
export interface SearchParams {
  name?: string;
  phone?: string;
}
