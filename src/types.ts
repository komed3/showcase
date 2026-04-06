import type { SubmitEventHandler } from 'react';

export type DeviceType = 'desktop' | 'tablet' | 'mobile' | 'custom';

export interface DeviceInstance {
    id: string;
    type: DeviceType;
    name: string;
    width: number;
    height: number;
    orientation: 'portrait' | 'landscape';
}

export interface HeaderProps {
    inputUrl: string;
    setInputUrl: ( url: string ) => void;
    onUrlSubmit: SubmitEventHandler< HTMLFormElement >;
    onAddDevice: () => void;
    onReset: () => void;
    onToggleInfo: () => void;
    currentUrl: string;
}

export interface InfoPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface FooterProps {
    zoom: number;
    setZoom: ( zoom: number ) => void;
}
