// hooks/useBlackCatalog.ts
import { useState, useCallback } from 'react';
import type { SearchBlackCatalogResponse, CreateBlackCatalogRequest, SearchParams, BlackCatalogItem } from './blackCatalog';
import { blackCatalogService } from './BlackCatalogService';

interface UseBlackCatalogReturn {
  // Состояния
  isLoading: boolean;
  error: string | null;
  searchResults: SearchBlackCatalogResponse | null;
  count: number | null;
  
  // Методы
  createEntry: (data: CreateBlackCatalogRequest['black_catalog']) => Promise<{ id: number; success: boolean } | null>;
  searchEntries: (params: SearchParams) => Promise<SearchBlackCatalogResponse | null>;
  getTotalCount: () => Promise<number | null>;
  getEntryById: (id: number) => Promise<BlackCatalogItem | null>;
  reset: () => void;
  clearError: () => void;
}

const useBlackCatalog = (): UseBlackCatalogReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchBlackCatalogResponse | null>(null);
  const [count, setCount] = useState<number | null>(null);

  const handleError = (err: unknown) => {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    setError(errorMessage);
    return null;
  };

  const createEntry = useCallback(async (data: CreateBlackCatalogRequest['black_catalog']) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await blackCatalogService.create(data);
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to create entry');
      }
      
      return { id: response.id, success: response.success };
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const searchEntries = useCallback(async (params: SearchParams) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await blackCatalogService.search(params);
      setSearchResults(response);
      return response;
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTotalCount = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const totalCount = await blackCatalogService.getCount();
      setCount(totalCount);
      return totalCount;
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getEntryById = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const entry = await blackCatalogService.getById(id);
      return entry;
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSearchResults(null);
    setCount(null);
    setError(null);
    setIsLoading(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    // Состояния
    isLoading,
    error,
    searchResults,
    count,
    
    // Методы
    createEntry,
    searchEntries,
    getTotalCount,
    getEntryById,
    reset,
    clearError
  };
};

export default useBlackCatalog;