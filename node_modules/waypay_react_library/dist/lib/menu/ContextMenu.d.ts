import React from 'react';
import { type HTMLMotionProps } from 'framer-motion';
export interface ContextMenuItem {
    label: string | React.ReactNode;
    action?: () => void;
    color?: string;
    submenu?: ContextMenuItem[];
    disabled?: boolean;
}
export interface ContextMenuProps extends HTMLMotionProps<'div'> {
    x: number;
    y: number;
    items: ContextMenuItem[];
    onClose: () => void;
}
declare const ContextMenu: React.FC<ContextMenuProps>;
export default ContextMenu;
