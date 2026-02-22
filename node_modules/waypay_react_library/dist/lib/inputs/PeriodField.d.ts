import React from 'react';
import type { PredefinedPeriod } from '../types/analytic';
interface PeriodOption {
    id: string;
    label: string;
    value: PredefinedPeriod;
}
interface PeriodFieldProps {
    value?: string;
    placeholder?: string;
    options?: PeriodOption[];
    showCustomPeriodButton?: boolean;
    onChange?: (value: string, startDate?: string, endDate?: string) => void;
    onCustomPeriodClick?: () => void;
}
declare const PeriodField: React.FC<PeriodFieldProps>;
export default PeriodField;
