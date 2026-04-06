import { AlertCircle, LayoutTemplate, Search } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

import type { CanvasProps } from '@/src/types';
import { DeviceFrame } from '@/src/components/DeviceFrame';

export const Canvas = ( {
    url, devices, zoom, isDragging, loadError, scrollContainerRef, onMouseDown,
    onMouseMove, onMouseUp, onRemoveDevice, onToggleOrientation
} : CanvasProps ) => {
    // Error State
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

    // Empty State
    if ( ! url ) return ( <div className="flex-1 flex flex-col items-center justify-center bg-brand-50 p-12 text-center">
        <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-200 mb-8 border border-brand-100">
            <LayoutTemplate size={40} />
        </div>
        <h2 className="font-display font-bold text-3xl text-brand-900 mb-4 tracking-tight">Ready to showcase?</h2>
        <p className="text-brand-500 max-w-md leading-relaxed font-medium">
            Enter a website URL in the search bar above to start previewing your design across multiple devices simultaneously.
        </p>
        <div className="mt-12 flex items-center gap-3 text-xs font-bold text-brand-400 uppercase tracking-widest">
            <Search size={14} />
            Waiting for input …
        </div>
    </div> );

    // Main Canvas
    return ( <main
        ref={ scrollContainerRef } onMouseDown={ onMouseDown } onMouseMove={ onMouseMove }
        onMouseUp={ onMouseUp } onMouseLeave={ onMouseUp }
        className="flex-1 overflow-auto p-16 no-scrollbar bg-brand-50 cursor-grab active:cursor-grabbing"
    >
        <div className="flex flex-row justify-center items-center min-h-full gap-16 min-w-fit mx-auto">
            <AnimatePresence mode="popLayout">
                { devices.map( ( device ) => ( <DeviceFrame
                    key={ device.id } device={ device } url={ url } zoom={ zoom } isDragging={ isDragging }
                    onRemove={ onRemoveDevice } onToggleOrientation={ onToggleOrientation }
                /> ) ) }
            </AnimatePresence>
        </div>
    </main> );
}
