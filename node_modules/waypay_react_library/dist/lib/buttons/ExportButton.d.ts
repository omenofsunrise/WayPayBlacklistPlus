import React from 'react';
interface ExportButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    onExport?: () => Promise<void>;
    isExporting?: boolean;
    exportProgress?: number;
}
declare const ExportButton: React.FC<ExportButtonProps>;
export default ExportButton;
