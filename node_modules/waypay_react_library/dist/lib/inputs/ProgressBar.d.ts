import React from 'react';
interface ProgressBarProps {
    percentage: number;
    onChange?: (percentage: number) => void;
    draggable?: boolean;
    colors?: {
        primary: string;
        secondary: string;
    };
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export {};
