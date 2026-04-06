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

            <div className="h-4 w-px bg-brand-200" />

            <div className="flex items-center gap-1.5">
                { [ 0.3, 0.5, 0.8, 1.0 ].map( ( val ) => ( <button
                    key={ val } onClick={ () => setZoom( val ) }
                    className={ `px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                        zoom === val
                            ? 'bg-brand-900 text-white shadow-md'
                            : 'bg-white border border-brand-200 text-brand-500 hover:border-brand-900 hover:text-brand-900'
                    }` }
                >{ val * 100 }%</button> ) ) }
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="text-[9px] font-bold text-brand-400 uppercase tracking-[0.25em]">
                Middle-Click Drag • Ctrl+Scroll Zoom
            </div>
            <div className="h-4 w-px bg-brand-200" />
            <div className="text-[9px] font-bold text-brand-900 uppercase tracking-[0.1em]">
                Copyright 2026 komed3
            </div>
        </div>
    </footer> );
};
