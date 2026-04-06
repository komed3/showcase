import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig( () => ( {
    base: '/showcase/',
    plugins: [ react(), tailwindcss() ],
    resolve: { alias: { '@': resolve( __dirname, '.' ) } },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: { output: { manualChunks( id: string ) {
            if ( id.includes( 'node_modules' ) ) {
                if ( id.includes( 'lucide') ) return 'icons';
                if ( id.includes( 'react' ) || id.includes( 'react-dom' ) ) return 'react';
                return 'vendor';
            }
        } } }
    }
} ) );
