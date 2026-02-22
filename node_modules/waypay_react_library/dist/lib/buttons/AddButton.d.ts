import React from 'react';
interface AddButtonProps {
    onClick: (e: React.MouseEvent) => void;
    tooltip?: string;
    size?: number;
    margin?: string;
}
declare const AddButton: React.FC<AddButtonProps>;
export default AddButton;
