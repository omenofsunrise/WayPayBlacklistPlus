import React from 'react';
interface EditButtonProps {
    onClick: (e: React.MouseEvent) => void;
    tooltip?: string;
    size?: number;
}
declare const EditButton: React.FC<EditButtonProps>;
export default EditButton;
