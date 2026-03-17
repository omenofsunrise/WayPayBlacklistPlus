export interface BlackCatalogPageContentTexts {
  pageTitle: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  notFoundTitle: string;
  notFoundDescription: (query: string) => string;
  addButtonLabel: string;
  addToCatalogLabel: string;
  deleteConfirmText: (fullname: string) => string;
}

export interface BlackCatalogPageContentProps {
  texts: BlackCatalogPageContentTexts;
  showDebtSection?: boolean;
  requireDebtDate?: boolean;
}
