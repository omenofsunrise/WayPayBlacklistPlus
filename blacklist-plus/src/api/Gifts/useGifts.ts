import { useState, useCallback } from "react";
import type {
  UserInfo,
  Giftee,
  MakeGiftsPayload,
  MakeGiftsResponse,
} from "./gifts";
import { giftsService } from "./GiftsService";

interface UseGiftsReturn {
  isLoading: boolean;
  error: string | null;
  giftees: Giftee[];
  foundUsers: UserInfo[];
  findUsers: (params: { phone?: string; nickname?: string }) => Promise<UserInfo[]>;
  makeGifts: (data: MakeGiftsPayload) => Promise<MakeGiftsResponse | null>;
  loadGiftees: () => Promise<Giftee[]>;
  deleteGiftee: (id: string) => Promise<Giftee[]>;
  clearError: () => void;
  clearFoundUsers: () => void;
}

const useGifts = (): UseGiftsReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [giftees, setGiftees] = useState<Giftee[]>([]);
  const [foundUsers, setFoundUsers] = useState<UserInfo[]>([]);

  const handleError = (err: unknown) => {
    const errorMessage = err instanceof Error ? err.message : "Неизвестная ошибка";
    setError(errorMessage);
  };

  const findUsers = useCallback(async (params: { phone?: string; nickname?: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await giftsService.findUsers(params);
      const users = response.users || [];
      setFoundUsers(users);
      return users;
    } catch (err) {
      handleError(err);
      setFoundUsers([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const makeGifts = useCallback(async (data: MakeGiftsPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await giftsService.makeGifts(data);
      return response;
    } catch (err) {
      handleError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadGiftees = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await giftsService.getGiftees();
      const list = response.giftees || [];
      setGiftees(list);
      return list;
    } catch (err) {
      handleError(err);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteGiftee = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await giftsService.deleteGiftee({ id });
      const list = response.giftees || [];
      setGiftees(list);
      return list;
    } catch (err) {
      handleError(err);
      return giftees;
    } finally {
      setIsLoading(false);
    }
  }, [giftees]);

  const clearError = useCallback(() => setError(null), []);
  const clearFoundUsers = useCallback(() => setFoundUsers([]), []);

  return {
    isLoading,
    error,
    giftees,
    foundUsers,
    findUsers,
    makeGifts,
    loadGiftees,
    deleteGiftee,
    clearError,
    clearFoundUsers,
  };
};

export default useGifts;
