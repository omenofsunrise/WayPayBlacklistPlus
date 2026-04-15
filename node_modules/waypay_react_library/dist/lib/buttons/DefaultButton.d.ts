import type { ButtonHTMLAttributes, ReactNode } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    icon?: ReactNode;
    bg?: string;
    hoverBg?: string;
    disabledBg?: string;
    textColor?: string;
    fullWidth?: boolean;
    minWidth?: string;
    width?: number | string;
    isPrimary?: boolean;
};
declare const Button: ({ children, icon, disabled, bg, hoverBg, disabledBg, textColor, fullWidth, minWidth, width, isPrimary, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Button;
