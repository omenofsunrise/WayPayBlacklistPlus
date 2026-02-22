import React from 'react';
interface EntitySelectContainerProps {
    mode: 'create' | 'edit' | 'view';
    primaryValue: string;
    secondaryValue?: string;
    placeholder?: string;
    onSelect: () => void;
    onClear: () => void;
    disabled?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    customIcon?: React.ReactNode;
}
declare const EntitySelectContainer: React.FC<EntitySelectContainerProps>;
export default EntitySelectContainer;
