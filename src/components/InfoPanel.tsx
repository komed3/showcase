import { Info, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { InfoPanelProps } from '@/src/types';

export const InfoPanel = ( { isOpen, onClose }: InfoPanelProps ) => {
    return ( <AnimatePresence>
        { isOpen && ( <motion.div
            initial={ { height: 0, opacity: 0 } }
            animate={ { height: 'auto', opacity: 1 } }
            exit={ { height: 0, opacity: 0 } }
            className="bg-brand-900 text-white overflow-hidden shrink-0 shadow-inner"
        >
            <div className="max-w-[1600px] mx-auto px-6 py-5 flex items-start justify-between gap-12">
                <div className="flex gap-8 flex-1">
                    <div className="flex flex-col gap-1.5 max-w-sm">
                        <div className="flex items-center gap-2 text-brand-200 font-bold text-xs uppercase tracking-widest mb-1">
                            <Info size={14} />
                            Zooming
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                            Hold <strong>Ctrl + Scroll</strong> to zoom the workspace. You can also use the slider in the footer
                            for precise control or use one of the preset zoom levels in the header for quick adjustments.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5 max-w-sm">
                        <div className="flex items-center gap-2 text-brand-200 font-bold text-xs uppercase tracking-widest mb-1">
                            <Info size={14} />
                            Navigation
                        </div>
                            <p className="text-sm leading-relaxed opacity-90">
                            Use the <strong>Middle Mouse Button</strong> (scroll wheel) to drag the entire canvas in any direction.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5 max-w-sm">
                        <div className="flex items-center gap-2 text-brand-200 font-bold text-xs uppercase tracking-widest mb-1">
                            <Info size={14} />
                            Limitations
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                            Some websites block embedding via iframes (X-Frame-Options). If a site doesn't load, it's likely restricted by its owner.
                        </p>
                    </div>
                </div>

                <button
                    className="p-2 hover:bg-white/10 rounded-full transition-all cursor-pointer text-white/60 hover:text-white"
                    onClick={ onClose }
                >
                    <X size={20} />
                </button>
            </div>
        </motion.div> ) }
    </AnimatePresence> );
};
