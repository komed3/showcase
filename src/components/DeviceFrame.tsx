import { Monitor, Tablet, Smartphone, Trash2, RotateCw } from 'lucide-react';
import { motion } from 'motion/react';

import type { DeviceFrameProps } from '@/src/types';

export const DeviceFrame = ( { device, url, zoom, isDragging, onRemove, onToggleOrientation }: DeviceFrameProps ) => {
    const Icon = device.type === 'desktop' ? Monitor : device.type === 'tablet' ? Tablet : Smartphone;

    return ( <motion.div
        layout
        initial={ { opacity: 0, scale: 0.95, y: 10 } }
        animate={ { opacity: 1, scale: 1, y: 0 } }
        exit={ { opacity: 0, scale: 0.95, y: 10 } }
        transition={ { type: 'spring', damping: 25, stiffness: 200 } }
        className="flex flex-col gap-4 shrink-0"
    >
        <div className="flex items-center justify-between w-full px-1">
            <div className="flex items-center gap-2 min-w-0">
                <div className="p-1.5 bg-white rounded-md shadow-sm border border-brand-200 text-brand-500">
                    <Icon size={14} />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                    <span className="font-display font-bold text-xs text-brand-900 truncate">{ device.name }</span>
                    <span className="text-[9px] font-mono font-bold text-brand-500 uppercase tracking-tighter whitespace-nowrap">
                        { device.width } × { device.height }
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <button
                    onClick={ () => onToggleOrientation( device.id ) } title="Rotate device"
                    className="p-1.5 text-brand-400 hover:text-brand-900 hover:bg-brand-100 rounded-md transition-all cursor-pointer"
                >
                    <RotateCw size={14} />
                </button>
                <button
                    onClick={ () => onRemove( device.id ) } title="Remove device"
                    className="p-1.5 text-brand-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all cursor-pointer"
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>

        <div className="relative transition-all duration-300 ease-out" style={ {
            width: device.width * zoom, height: device.height * zoom
        } }>
            <div
                className={ `
                    absolute top-0 left-0 shadow-2xl origin-top-left overflow-hidden
                    ${ device.type === 'desktop' ? 'rounded-lg border-t-[20px] border-x-[6px] border-b-[6px] border-brand-900 bg-brand-900' : '' }
                    ${ device.type === 'tablet' ? 'rounded-[1.5rem] border-[10px] border-brand-900 bg-brand-900' : '' }
                    ${ device.type === 'mobile' || device.type === 'custom' ? 'rounded-[2rem] border-[8px] border-brand-900 bg-brand-900' : '' }
                `}
                style={ {
                    width: device.width, height: device.height,
                    transform: `scale(${ zoom })`
                } }
            >
                { device.type === 'desktop' && ( <div className="absolute -top-[15px] left-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-400/80" />
                </div> ) }

                { ( device.type !== 'desktop' ) && ( <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-900 rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-brand-500/30 rounded-full" />
                </div> ) }

                <div className="relative w-full h-full bg-white">
                    <iframe
                        key={ `${ device.id }-${ device.width }-${ device.height }` }
                        src={ url } title={ `${ device.name } preview` }
                        className="w-full h-full border-none"
                    />
                    { isDragging && ( <div className="absolute inset-0 z-10 bg-transparent" /> ) }
                </div>

                { ( device.type !== 'desktop' ) && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/10 rounded-full z-20" />
                ) }
            </div>
        </div>
    </motion.div> );
};
