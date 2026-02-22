import React from 'react';
interface RadioButtonProps {
    id: string;
    name: string;
    checked: boolean;
    onChange: () => void;
    children: React.ReactNode;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
