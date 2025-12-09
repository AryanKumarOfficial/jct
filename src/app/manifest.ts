// src/app/manifest.ts
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'JCT Journals',
        short_name: 'JCT',
        description: 'International peer-reviewed journals.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            // If you have a larger logo (e.g. 192x192), add it here:
            // {
            //   src: '/images/android-chrome-192x192.png',
            //   sizes: '192x192',
            //   type: 'image/png',
            // },
        ],
    }
}