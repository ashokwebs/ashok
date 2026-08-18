import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ashok Pasala — Founder & AI Systems Architect',
    short_name: 'Ashok Pasala',
    description:
      'Executive hub & architecture portal of Ashok Pasala. Founder & Systems Architect of Norveth, engineering autonomous AI infrastructure and high-scale distributed backends.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
