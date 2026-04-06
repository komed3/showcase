export type DeviceType = 'desktop' | 'tablet' | 'mobile' | 'custom';

export interface DeviceInstance {
    id: string;
    type: DeviceType;
    name: string;
    width: number;
    height: number;
    orientation: 'portrait' | 'landscape';
}
