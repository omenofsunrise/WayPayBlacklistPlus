import React from 'react';
interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    label?: string;
    disabled?: boolean;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
