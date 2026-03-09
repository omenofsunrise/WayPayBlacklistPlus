export interface BlackCatalogItem {
  id: number;
  fullname: string;
  doc: string;
  phone: string;
  address: string;
  doc_issue_date: string;
  birthdate: string;

}

export interface CreateBlackCatalogRequest {
  black_catalog: {
    address: string;
    doc: string;
    fullname: string;
    phone: string;
    doc_issue_date: string;
    birthdate: string;
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

export interface SearchParams {
  name?: string;
  phone?: string;
}
