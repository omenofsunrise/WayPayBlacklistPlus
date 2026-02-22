import React from 'react';
declare global {
    interface Window {
        ymaps?: any;
    }
}
export interface YandexMapSelectorProps {
    onLocationSelect: (address: string, lat: number, lon: number) => void;
    initialAddress?: string;
    initialLat?: number;
    initialLon?: number;
    apiKey?: string;
    zoom?: number;
    height?: number | string;
    width?: number | string;
    inputPlaceholder?: string;
    searchButtonLabel?: string;
    draggablePlacemark?: boolean;
    controls?: string[];
    showSearch?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onError?: (error: Error) => void;
}
declare const YandexMapSelector: React.FC<YandexMapSelectorProps>;
export default YandexMapSelector;
