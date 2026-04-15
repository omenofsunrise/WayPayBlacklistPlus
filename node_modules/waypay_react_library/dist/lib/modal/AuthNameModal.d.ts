import React from "react";
type AuthNameModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string) => void;
    error?: string;
    isLoading?: boolean;
};
declare const AuthNameModal: React.FC<AuthNameModalProps>;
export default AuthNameModal;
