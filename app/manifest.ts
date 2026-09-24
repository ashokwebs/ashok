import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ashok Pasala',
    short_name: 'Ashok Pasala',
    description: 'Ashok Pasala builds AI systems, breaks them, and explains why they broke. Hire him through Norveth.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0c0b',
    theme_color: '#0c0c0b',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
