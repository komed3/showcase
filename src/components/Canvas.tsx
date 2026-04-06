import { Globe, Search, AlertCircle } from 'lucide-react';
import React from 'react';
import { AnimatePresence } from 'motion/react';

import type { CanvasProps, DeviceInstance } from '@/src/types';
import { DeviceFrame } from '@/src/components/DeviceFrame';

export const Canvas = ( {
    url, devices, zoom, isDragging, loadError, scrollContainerRef, onMouseDown,
    onMouseMove, onMouseUp, onRemoveDevice, onToggleOrientation
} : CanvasProps ) => {}
