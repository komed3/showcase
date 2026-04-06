import { useShowcase } from '@/src/showcase';

import { Header } from '@/src/components/Header';

export default function App () {
    const {
        url, inputUrl, setInputUrl, zoom, setZoom, devices, showInfo, setShowInfo,
        showAddModal, setShowAddModal, isDragging, loadError, scrollContainerRef,
        handleUrlSubmit, handleAddDevice, removeDevice, toggleDeviceOrientation,
        resetWorkspace, handleMouseDown, handleMouseMove, handleMouseUp
    } = useShowcase();

    return ( <div className="h-screen flex flex-col bg-brand-50 select-none overflow-hidden font-sans">
        <Header
            inputUrl={ inputUrl } setInputUrl={ setInputUrl } onUrlSubmit={ handleUrlSubmit }
            onAddDevice={ () => setShowAddModal( true ) } onReset={ resetWorkspace }
            onToggleInfo={ () => setShowInfo( ! showInfo ) } currentUrl={ url }
        />
    </div> );
}
