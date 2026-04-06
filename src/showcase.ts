import { useRef, useState } from 'react';

import { INITIAL_DEVICES } from '@/src/constants';
import type { DeviceInstance } from '@/src/types';

export function useShowcase () {
    const [ url, setUrl ] = useState( '' );
    const [ inputUrl, setInputUrl ] = useState( '' );
    const [ zoom, setZoom ] = useState( 0.5 );
    const [ devices, setDevices ] = useState< DeviceInstance[] >( INITIAL_DEVICES );
    const [ showInfo, setShowInfo ] = useState( false );
    const [ showAddModal, setShowAddModal ] = useState( false );
    const [ isDragging, setIsDragging ] = useState( false );
    const [ loadError, setLoadError ] = useState< string | null >( null );

    const scrollContainerRef = useRef< HTMLDivElement >( null );
    const startX = useRef( 0 ), startY = useRef( 0 );
    const scrollLeft = useRef( 0 ), scrollTop = useRef( 0 );
}
