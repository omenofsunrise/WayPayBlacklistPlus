import React, { type ReactNode } from "react";
export type ModalMode = "create" | "edit" | "view" | "create-pool" | "edit-pool";
interface ModalProps {
    title?: string;
    onClose: () => void;
    onCancel: () => void;
    onSave?: (e: React.FormEvent) => void;
    children: ReactNode;
    isSaveDisabled?: boolean;
    isSubmitting?: boolean;
    mode?: ModalMode;
    hideSaveButton?: boolean;
    hideCanselButton?: boolean;
    width?: string;
    saveButtonText?: string;
    customLayout?: React.ReactNode;
}
declare const BaseModal: React.FC<ModalProps>;
export default BaseModal;
export { Header as ModalHeader, Title as ModalTitle };
declare const Header: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
