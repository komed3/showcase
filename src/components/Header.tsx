import { ExternalLink, Info, LayoutTemplate, Plus, RotateCcw, Search } from 'lucide-react';
import type { HeaderProps } from '@/src/types';

export const Header = ( { inputUrl, setInputUrl, onUrlSubmit, onAddDevice, onReset, onToggleInfo, currentUrl }: HeaderProps ) => {
    return ( <header className="shrink-0 z-50 bg-white/90 backdrop-blur-xl border-b border-brand-200 px-6 py-3 shadow-sm">
        <div className="max-w-[1600px] mx-auto flex items-center gap-10 h-12">
            <div className="h-full flex items-center gap-3 shrink-0">
                <div className="h-full aspect-square bg-brand-900 rounded-lg flex items-center justify-center text-white shadow-md">
                    <LayoutTemplate size={24} />
                </div>
                <h1 className="font-display font-bold text-xl tracking-tight text-brand-900 leading-none">Showcase</h1>
            </div>

            <form onSubmit={ onUrlSubmit } className="flex-1 flex items-center gap-2 h-full">
                <div className="relative flex-1 h-full group">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-brand-500 group-focus-within:text-brand-900 transition-colors">
                        <Search size={16} />
                    </div>
                    <input
                        type="text" value={ inputUrl } onChange={ ( e ) => setInputUrl( e.target.value ) }
                        placeholder="Enter website URL to start …"
                        className="w-full h-full pl-10 pr-4 bg-brand-100 border-transparent border-2 focus:border-brand-900 focus:bg-white rounded-xl outline-none transition-all font-medium text-sm cursor-text"
                    />
                </div>
                <button
                    className="h-full bg-brand-900 text-white px-6 rounded-xl font-bold text-sm hover:bg-brand-900/90 transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                    type="submit"
                >
                    Preview
                </button>
            </form>

            <div className="flex items-center gap-2 shrink-0 h-full">
                { currentUrl && ( <a
                    href={ currentUrl } target="_blank" rel="noopener noreferrer" title="Open in new tab"
                    className="h-full px-3 flex items-center justify-center bg-white border border-brand-200 text-brand-500 hover:text-brand-900 rounded-xl transition-all cursor-pointer"
                >
                    <ExternalLink size={18} />
                </a> ) }

                <button
                    className="h-full flex items-center gap-2 bg-white border border-brand-200 text-brand-900 px-4 rounded-xl font-bold text-sm hover:bg-brand-100 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                    onClick={ onAddDevice }
                >
                    <Plus size={18} />
                    Add Device
                </button>

                <button
                    className="h-full aspect-square flex items-center justify-center bg-white border border-brand-200 text-brand-500 hover:text-brand-900 rounded-xl transition-all cursor-pointer"
                    onClick={ onReset } title="Reset Workspace"
                >
                    <RotateCcw size={18} />
                </button>

                <button
                    className="h-full aspect-square flex items-center justify-center bg-white border border-brand-200 text-brand-500 hover:text-brand-900 rounded-xl transition-all cursor-pointer"
                    onClick={ onToggleInfo } title="Help & Info"
                >
                    <Info size={18} />
                </button>
            </div>
        </div>
    </header> );
};
