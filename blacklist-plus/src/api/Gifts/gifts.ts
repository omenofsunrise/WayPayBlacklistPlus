export interface UserBaseInfo {
  id: string;
  fullname: string;
  nickname: string;
  phone: string;
}

export interface UserInfo {
  base: UserBaseInfo;
  address?: string;
  birthdate?: string;
  doc?: string;
  doc_issue_date?: string;
}

export interface UsersInfoResponse {
  users: UserInfo[];
}

export interface Giftee {
  id: string;
  user_id: string;
  fullname: string;
  phone: string;
  end_at: string;
}

export interface GifteesResponse {
  giftees: Giftee[];
}

export interface MakeGiftsPayload {
  days: number;
  user_ids: string[];
}

export interface MakeGiftsResponse {
  payment_url: string;
}

export interface DeleteGifteePayload {
  id: string;
}
