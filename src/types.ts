import type { MouseEvent, RefObject, SubmitEventHandler } from 'react';

export type DeviceType = 'desktop' | 'tablet' | 'mobile' | 'custom';

export interface DeviceInstance {
    id: string;
    type: DeviceType;
    name: string;
    width: number;
    height: number;
    orientation: 'portrait' | 'landscape';
}

export interface NewDevice {
    name: string;
    width: number;
    height: number;
    type: DeviceType;
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

export interface CanvasProps {
    url: string;
    devices: DeviceInstance[];
    zoom: number;
    isDragging: boolean;
    loadError: string | null;
    scrollContainerRef: RefObject< HTMLDivElement | null >;
    onMouseDown: ( e: MouseEvent ) => void;
    onMouseMove: ( e: MouseEvent ) => void;
    onMouseUp: () => void;
    onRemoveDevice: ( id: string ) => void;
    onToggleOrientation: ( id: string ) => void;
}

export interface DeviceFrameProps {
    key?: string;
    device: DeviceInstance;
    url: string;
    zoom: number;
    isDragging: boolean;
    onRemove: ( id: string ) => void;
    onToggleOrientation: ( id: string ) => void;
}

export interface AddDeviceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: ( device: NewDevice ) => void;
}

export interface FooterProps {
    zoom: number;
    setZoom: ( zoom: number ) => void;
}
