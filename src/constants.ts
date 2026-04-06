import { DeviceInstance } from '@/src/types';

export const INITIAL_DEVICES: DeviceInstance[] = [
    { id: '1', type: 'desktop', name: 'Desktop', width: 1440, height: 900, orientation: 'landscape' },
    { id: '2', type: 'tablet', name: 'Tablet', width: 768, height: 1024, orientation: 'portrait' },
    { id: '3', type: 'mobile', name: 'Mobile', width: 375, height: 812, orientation: 'portrait' }
];
