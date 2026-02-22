import React from 'react';
interface PhoneInputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    tabIndex?: number;
    disabled?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    customPlaceholder?: string;
}
declare const PhoneModalInput: React.FC<PhoneInputProps>;
export default PhoneModalInput;
