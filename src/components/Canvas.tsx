import { Globe, Search, AlertCircle } from 'lucide-react';
import React from 'react';
import { AnimatePresence } from 'motion/react';

import type { CanvasProps, DeviceInstance } from '@/src/types';
import { DeviceFrame } from '@/src/components/DeviceFrame';

export const Canvas = ( {
    url, devices, zoom, isDragging, loadError, scrollContainerRef, onMouseDown,
    onMouseMove, onMouseUp, onRemoveDevice, onToggleOrientation
} : CanvasProps ) => {
    if ( loadError ) return ( <div className="flex-1 flex flex-col items-center justify-center bg-brand-50 p-12 text-center">
        <div className="w-20 h-20 bg-red-50 rounded-3xl shadow-xl flex items-center justify-center text-red-500 mb-8 border border-red-100">
            <AlertCircle size={40} />
        </div>
        <h2 className="font-display font-bold text-3xl text-brand-900 mb-4 tracking-tight">Something went wrong</h2>
        <p className="text-brand-500 max-w-md leading-relaxed font-medium mb-8">
            { loadError }
        </p>
        <button
            className="bg-brand-900 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-xl hover:bg-brand-800 transition-all active:scale-95 cursor-pointer"
            onClick={ () => window.location.reload() }
        >
            Try Again
        </button>
    </div> );
}
