import type { ReactNode } from 'react';
export interface Tab {
    id: string;
    label: string;
    content?: ReactNode;
}
interface TabsProps<T extends string> {
    tabs: Tab[];
    activeTab: T;
    onChange: (tabId: T) => void;
    addButton?: ReactNode;
    fontSize?: number | string;
}
declare const Tabs: <T extends string>({ tabs, activeTab, onChange, addButton, fontSize }: TabsProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
