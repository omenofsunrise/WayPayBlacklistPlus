import React from 'react';
interface CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    customPlaceholder?: string;
    hasError?: boolean;
    errorMessage?: string;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}
declare const CustomTextArea: React.FC<CustomTextAreaProps>;
export default CustomTextArea;
