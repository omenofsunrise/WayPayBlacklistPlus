export declare const authStorage: {
    setTokens(access: string, refresh: string): void;
    getAccessToken(): string | null;
    getRefreshToken(): string | null;
    clear(): void;
};
