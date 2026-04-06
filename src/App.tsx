import { useShowcase } from '@/src/showcase';

export default function App () {
    const {
        url, inputUrl, setInputUrl, zoom, setZoom, devices, showInfo, setShowInfo,
        showAddModal, setShowAddModal, isDragging, loadError, scrollContainerRef,
        handleUrlSubmit, handleAddDevice, removeDevice, toggleDeviceOrientation,
        resetWorkspace, handleMouseDown, handleMouseMove, handleMouseUp
    } = useShowcase();

    return ( <></> );
}
