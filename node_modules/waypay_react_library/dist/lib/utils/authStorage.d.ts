export type SessionInfo = {
    has_pin: boolean;
    client: {
        id: string;
        is_moderated: boolean;
    };
};
export declare const authStorage: {
    isAuthenticated(): Promise<boolean>;
    getSessionInfo(): Promise<SessionInfo | null>;
    logout(tokenId?: string): Promise<void>;
    getClientId(): Promise<string | null>;
    hasPin(): Promise<boolean>;
};
export declare const getSessionInfo: () => Promise<SessionInfo | null>;
