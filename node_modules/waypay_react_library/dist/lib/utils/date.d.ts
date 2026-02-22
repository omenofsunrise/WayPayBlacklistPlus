export declare const formatDate: (dateString: string | Date) => string;
export declare function parseDateInput(dateString: string): Date;
export declare const formatRelativeTime: (date: Date | string | number) => string;
export declare const formatExactDate: (date: Date) => string;
export declare const formatRelativeTimeExtended: (date: Date | string | number, options?: {
    useExactAfterMonths?: number;
    includeTime?: boolean;
}) => string;
