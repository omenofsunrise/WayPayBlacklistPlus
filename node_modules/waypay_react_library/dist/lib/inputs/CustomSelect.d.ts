import React from 'react';
interface CustomSelectProps<T = string> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    placeholder?: string;
    customPlaceholder?: string;
    hasError?: boolean;
    errorMessage?: string;
    options: {
        value: T;
        label: string;
    }[];
    value?: T;
    onChange?: (event: {
        target: {
            value: T;
        };
    }) => void;
    name?: string;
    disabled?: boolean;
    required?: boolean;
}
declare const CustomSelect: <T extends string | number = string>({ placeholder, customPlaceholder, value, onChange, hasError, errorMessage, options, name, disabled, required, ...props }: CustomSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export default CustomSelect;
