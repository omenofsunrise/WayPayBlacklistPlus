import { useState, useCallback } from 'react';
import type { 
  SearchBlackCatalogResponse, 
  BlackCatalogCreatePayload,
  BlackCatalogUpdatePayload,
  SearchParams,
  AddDebtRequest,
  NotificationsResponse,
} from './blackCatalog';
import { blackCatalogService } from './BlackCatalogService';

interface UseBlackCatalogReturn {
  isLoading: boolean;
  error: string | null;
  searchResults: SearchBlackCatalogResponse | null;
  count: number | null;
  notifications: NotificationsResponse | null;
  createEntry: (data: BlackCatalogCreatePayload) => Promise<{ id: number; success: boolean } | null>;
  addDebt: (data: AddDebtRequest) => void;
  markAsReadNotification: (id: number) => void;
  deleteDebt: (id: number) => void;
  updateEntry: (id: number, data: BlackCatalogUpdatePayload) => Promise<{ id: number; success: boolean } | null>;
  deleteEntry: (id: number) => void;
  searchEntries: (params: SearchParams) => Promise<SearchBlackCatalogResponse | null>;
  getTotalCount: () => Promise<number | null>;
  getNotifications: () => Promise<NotificationsResponse | null>;
  reset: () => void;
  clearError: () => void;
}

const useBlackCatalog = (): UseBlackCatalogReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchBlackCatalogResponse | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [notifications, setnotifications] = useState<NotificationsResponse | null>(null);

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

  const addDebt = useCallback(async (data: AddDebtRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await blackCatalogService.addDebt(data);
      
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteDebt = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await blackCatalogService.deleteDebt(id);
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

  const markAsReadNotification = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await blackCatalogService.markAsReadNotification(id);
    } catch (err) {
      return handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getNotifications = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const notes = await blackCatalogService.getNotifications();
      setnotifications(notes);
      return notes;
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
    notifications,
    createEntry,
    addDebt,
    updateEntry,
    deleteEntry,
    searchEntries,
    getTotalCount,
    reset,
    clearError,
    getNotifications,
    markAsReadNotification,
    deleteDebt
  };
};

export default useBlackCatalog;
