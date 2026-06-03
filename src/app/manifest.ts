import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Friends of Island Park',
        short_name: 'FOIP',
        description: 'Friends of Island Park',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#247a47',
        icons: [
            {
                src: '/icons/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icons/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
