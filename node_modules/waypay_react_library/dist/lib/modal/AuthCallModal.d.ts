type Props = {
    isOpen: boolean;
    callPhone: string;
    error?: string;
    onClose?: () => void;
};
declare const AuthCallModal: ({ isOpen, callPhone, error, onClose }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default AuthCallModal;
