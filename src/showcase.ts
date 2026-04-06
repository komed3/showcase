import { useEffect, useRef, useState } from 'react';

import { INITIAL_DEVICES } from '@/src/constants';
import type { DeviceInstance, DeviceType } from '@/src/types';

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

    // Global Zoom Interceptor (disables native browser zoom)
    useEffect( () => {
        const handleGlobalWheel = ( e: WheelEvent ) => {
            if ( e.ctrlKey ) {
                e.preventDefault();
                setZoom( prev => Math.min( Math.max( prev + e.deltaY > 0 ? -0.05 : 0.05, 0.1 ), 1.5 ) );
            }
        };

        // Add to window to catch it everywhere
        window.addEventListener( 'wheel', handleGlobalWheel, { passive: false } );

        // Disable pinch-to-zoom on touch devices if possible
        const handleTouch = ( e: TouchEvent ) => {
            if ( e.touches.length > 1 ) e.preventDefault();
        };

        window.addEventListener( 'touchmove', handleTouch, { passive: false } );

        return () => {
            window.removeEventListener( 'wheel', handleGlobalWheel );
            window.removeEventListener( 'touchmove', handleTouch );
        };
    }, [] );

    // URL Submission Handler
    const handleUrlSubmit = async ( e: SubmitEvent ) => {
        e.preventDefault();

        let formattedUrl = inputUrl.trim();
        if ( ! formattedUrl ) return;

        if ( ! formattedUrl.startsWith( 'http://' ) && ! formattedUrl.startsWith( 'https://' ) ) {
            formattedUrl = `https://${formattedUrl}`;
        }

        setLoadError( null );
        setUrl( formattedUrl );
        setInputUrl( formattedUrl );

        // Basic reachability check (will often fail due to CORS, but good for malformed URLs)
        try { new URL( formattedUrl ) }
        catch ( err ) { setLoadError( 'Invalid URL format. Please check the address.' ) }
    };

    // Device Management Handlers
    const handleAddDevice = ( deviceData: { name: string; width: number; height: number; type: DeviceType } ) => {
        const id = Math.random().toString( 36 ).substring( 2, 9 );
        setDevices( [ ...devices, { ...deviceData, id, orientation: deviceData.width > deviceData.height ? 'landscape' : 'portrait' } ] );
    };

    const removeDevice = ( id: string ) => {
        setDevices( devices.filter( d => d.id !== id ) );
    };
}
