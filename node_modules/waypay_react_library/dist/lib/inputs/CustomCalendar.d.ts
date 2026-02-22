import React from 'react';
interface DateInputProps {
    prefix?: string;
    value?: string;
    placeholder?: string;
    onChange?: (date: string) => void;
    onReset?: () => void;
}
declare const CustomCalendar: React.FC<DateInputProps>;
export default CustomCalendar;
