import React from 'react';
import { type ContextMenuItem } from '../menu/ContextMenu';
type Alignment = 'left' | 'center' | 'right';
export interface Column {
    name: string;
    isSortable?: boolean;
    align?: Alignment;
    isHidden?: boolean;
}
export interface TableAction {
    label: string;
    action: (rowData: any[], rowIndex: number) => void;
    color?: string;
    disabled?: boolean;
    shouldShow?: (rowData: any[]) => boolean;
    getSubmenu?: (rowData: any[]) => ContextMenuItem[];
    showOnHover?: boolean;
}
export interface RowStyle {
    backgroundColor?: string;
    color?: string;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number | 'initial' | 'inherit';
    hoverBackgroundColor?: string;
}
export interface CreditsTableProps {
    columns: Column[];
    data: any[][];
    onRowDoubleClick?: (rowData: any[], rowIndex: number) => void;
    contextMenuActions?: TableAction[] | ((rowData: any[]) => TableAction[]);
    onSort?: (columnIndex: number) => void;
    onRowClick?: (rowData: any[], rowIndex: number) => void;
    sortConfig?: {
        key: number | null;
        direction: 'asc' | 'desc';
    };
    selectedRow?: number;
    fixedHeight?: string;
    hasTotalsRow?: boolean;
    debtChecker?: (rowData: any[]) => boolean;
    rowStyles?: {
        [rowIndex: number]: RowStyle;
    };
    isLoading?: boolean;
}
declare const CustomTable: React.FC<CreditsTableProps>;
export default CustomTable;
