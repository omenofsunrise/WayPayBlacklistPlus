import React from 'react';
interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}
declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
export default ToggleSwitch;
