import { useState, useCallback } from 'react';
import type { 
  SearchBlackCatalogResponse, 
  BlackCatalogCreatePayload,
  BlackCatalogUpdatePayload,
  SearchParams,
} from './blackCatalog';
import { blackCatalogService } from './BlackCatalogService';

interface UseBlackCatalogReturn {
  isLoading: boolean;
  error: string | null;
  searchResults: SearchBlackCatalogResponse | null;
  count: number | null;
  
  createEntry: (data: BlackCatalogCreatePayload) => Promise<{ id: number; success: boolean } | null>;
  updateEntry: (id: number, data: BlackCatalogUpdatePayload) => Promise<{ id: number; success: boolean } | null>;
  deleteEntry: (id: number) => void;
  searchEntries: (params: SearchParams) => Promise<SearchBlackCatalogResponse | null>;
  getTotalCount: () => Promise<number | null>;
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

  const createEntry = useCallback(async (data: BlackCatalogCreatePayload) => {
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

  const updateEntry = useCallback(async (id: number, data: BlackCatalogUpdatePayload) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await blackCatalogService.update(id, data);
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to update entry');
      }
      
      return { id: response.id, success: response.success };
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteEntry = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await blackCatalogService.delete(id);
      
      if (count !== null) {
        setCount(Math.max(0, count - 1));
      }
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchResults, count]);

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
    isLoading,
    error,
    searchResults,
    count,
    
    createEntry,
    updateEntry,
    deleteEntry,
    searchEntries,
    getTotalCount,
    reset,
    clearError
  };
};

export default useBlackCatalog;
