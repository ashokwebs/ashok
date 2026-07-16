import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ashok Pasala — Full Stack Developer & AI Systems Engineer',
    short_name: 'Ashok Pasala',
    description:
      'Portfolio of Ashok Pasala — Full Stack Developer, AI Systems Engineer, and founder of Norveth. Building AI infrastructure and intelligent software.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
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
