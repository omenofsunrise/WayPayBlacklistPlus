import { apiRequest } from "waypay_react_library";
import type {
  UsersInfoResponse,
  GifteesResponse,
  MakeGiftsPayload,
  MakeGiftsResponse,
  DeleteGifteePayload,
} from "./gifts";

class GiftsService {
  /**
   * Поиск пользователя по номеру телефона или нику
   * GET /users/info
   */
  async findUsers(params: { phone?: string; nickname?: string }): Promise<UsersInfoResponse> {
    const queryParams = new URLSearchParams();
    if (params.phone) queryParams.append("phone", params.phone);
    if (params.nickname) queryParams.append("nickname", params.nickname);

    return apiRequest<UsersInfoResponse>(`/users/info?${queryParams.toString()}`, {
      method: "GET",
    });
  }

  /**
   * Создать подарки для указанных пользователей
   * POST /gifts/make
   */
  async makeGifts(data: MakeGiftsPayload): Promise<MakeGiftsResponse> {
    return apiRequest<MakeGiftsResponse>(`/gifts/make`, {
      method: "POST",
      body: data,
    });
  }

  /**
   * Получить список получателей подарков
   * GET /gifts/giftees
   */
  async getGiftees(): Promise<GifteesResponse> {
    return apiRequest<GifteesResponse>(`/gifts/giftees`, {
      method: "GET",
    });
  }

  /**
   * Удалить отслеживание за получателем подарка
   * POST /gifts/giftees/delete
   */
  async deleteGiftee(data: DeleteGifteePayload): Promise<GifteesResponse> {
    return apiRequest<GifteesResponse>(`/gifts/giftees/delete`, {
      method: "POST",
      body: data,
    });
  }
}

export const giftsService = new GiftsService();
