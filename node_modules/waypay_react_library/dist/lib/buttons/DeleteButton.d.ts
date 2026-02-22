import React from 'react';
interface DeleteButtonProps {
    onClick: (e: React.MouseEvent) => void;
    tooltip?: string;
    size?: number;
}
declare const DeleteButton: React.FC<DeleteButtonProps>;
export default DeleteButton;
