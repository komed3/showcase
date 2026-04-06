import { useShowcase } from '@/src/showcase';

import { AddDeviceModal } from '@/src/components/AddDeviceModal';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { InfoPanel } from '@/src/components/InfoPanel';

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
        <InfoPanel isOpen={ showInfo } onClose={ () => setShowInfo( false ) } />
        <Footer zoom={ zoom } setZoom={ setZoom } />
        <AddDeviceModal isOpen={ showAddModal } onClose={ () => setShowAddModal( false ) } onAdd={ handleAddDevice } />
    </div> );
}
