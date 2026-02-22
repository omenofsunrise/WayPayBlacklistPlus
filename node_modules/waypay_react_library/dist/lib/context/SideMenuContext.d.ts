interface SideMenuContextType {
    collapsed: boolean;
    toggleCollapsed: () => void;
    selectedSideMenuItem: string | null;
    setSelectedSideMenuItem: (item: string | null) => void;
    selectedTopMenuItem: string | null;
    setSelectedTopMenuItem: (item: string | null) => void;
}
export declare const SideMenuContext: import("react").Context<SideMenuContextType>;
export {};
