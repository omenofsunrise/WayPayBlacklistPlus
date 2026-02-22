import React from 'react';
type InputType = 'number' | 'text' | 'fullname' | 'doc' | 'date' | 'rubles' | 'percents';
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    customPlaceholder?: string;
    inputType?: InputType;
    hasError?: boolean;
    errorMessage?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare const CustomInput: React.FC<CustomInputProps>;
export default CustomInput;
