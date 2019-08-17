export declare class SideDrawer {
    showContactInfo: boolean;
    title: string;
    opened: boolean;
    open(): void;
    onCloseDrawer(): void;
    onContentChange(content: string): void;
    render(): any;
}
