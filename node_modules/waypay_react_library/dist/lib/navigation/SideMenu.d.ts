import React from "react";
export interface SideMenuItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: SideMenuItem[];
    onClick?: (item: SideMenuItem) => void;
    hidden?: boolean;
    disabled?: boolean;
}
export interface SideMenuProps {
    items: SideMenuItem[];
    bottomItems?: SideMenuItem[];
    bottomContent?: React.ReactNode;
    logo?: React.ReactNode;
    arrowIcon?: React.ReactNode;
    collapsed?: boolean;
    onToggle?: (collapsed: boolean) => void;
    selectedKey?: string | null;
    onSelect?: (item: SideMenuItem) => void;
    autoCollapseOnSelect?: boolean;
    width?: string;
    collapsedWidth?: string;
    className?: string;
    style?: React.CSSProperties;
    mobileBreakpoint?: number;
    showBottomLabels?: boolean;
    children?: React.ReactNode;
}
declare const SideMenu: React.FC<SideMenuProps>;
export default SideMenu;
