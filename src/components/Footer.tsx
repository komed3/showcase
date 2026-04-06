import { Maximize2 } from 'lucide-react';
import type { FooterProps } from '@/src/types';

export const Footer = ( { zoom, setZoom }: FooterProps ) => {
    return ( <footer className="shrink-0 bg-white/90 backdrop-blur-xl border-t border-brand-200 px-6 py-2.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-brand-500 uppercase tracking-widest">
                    <Maximize2 size={12} />
                    Workspace Zoom
                </div>
                <div className="relative flex items-center group w-48">
                    <input
                        type="range" min="0.1" max="1.5" step="0.01" value={ zoom }
                        onChange={ ( e ) => setZoom( parseFloat( e.target.value ) ) }
                        className="w-full h-1.5 bg-brand-100 rounded-full appearance-none cursor-pointer accent-brand-900 hover:accent-brand-800 transition-all"
                    />
                </div>
                <span className="text-[11px] font-mono font-bold text-brand-900 bg-brand-100 px-2 py-0.5 rounded-md min-w-[45px] text-center">
                    { Math.round( zoom * 100 ) }%
                </span>
            </div>
        </div>
    </footer> );
};
