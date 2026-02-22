import React from "react";
import { type UserType } from "../api/authCall";
type AuthPageProps = {
    onLoginSuccess: (token: string) => void;
    userType?: UserType;
    title?: string;
    submitLabel?: string;
    placeholder?: string;
    supportPhone?: string;
    supportLinkUrl?: string;
    supportLinkText?: string;
    brand?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    pollingIntervalMs?: number;
};
declare const AuthPage: React.FC<AuthPageProps>;
export default AuthPage;
