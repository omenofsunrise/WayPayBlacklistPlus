export type UserType = string;
export type InitiateCallAuthResponse = {
    call_phone: string;
    check_id: string;
    name_required?: boolean;
};
export type ConfirmCallAuthResponse = {
    access_token: string;
    accessToken: string;
    refresh_token: string;
    refreshToken: string;
    status: string;
};
export declare const normalizeInitiateCallAuthResponse: (data: any) => InitiateCallAuthResponse;
export declare const initiateCallAuth: (phone: string, userType: UserType) => Promise<InitiateCallAuthResponse>;
export declare const confirmCallAuth: (phone: string, checkId: string, userType: UserType, name?: string) => Promise<ConfirmCallAuthResponse>;
export declare const getSessionInfo: () => Promise<unknown>;
