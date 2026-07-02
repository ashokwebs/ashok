import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter, Syne } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const syne = Syne({ variable: '--font-syne', subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ashokpasala.com'),
  title: 'Ashok Pasala – Full Stack Developer & AI Systems Engineer',
  description: 'Full stack developer, AI systems engineer, and founder of Norveth. Building scalable software, intelligent AI systems, and transformative digital products.',
  keywords: ['Full Stack Developer', 'AI Engineer', 'Systems Architect', 'Next.js', 'Python', 'Web3', 'Norveth', 'Cybersecurity', 'Blockchain'],
  generator: 'Next.js',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ashok Pasala – Full Stack Developer & AI Systems Engineer',
    description: 'Full stack developer, AI systems engineer, and founder of Norveth. Building scalable software, intelligent AI systems, and transformative digital products.',
    url: 'https://ashokpasala.com',
    siteName: 'Ashok Pasala',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Pasala – Full Stack Developer & AI Systems Engineer',
    description: 'Full stack developer, AI systems engineer, and founder of Norveth.',
    creator: '@ashokwebs',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://ashokpasala.com/#person',
        name: 'Ashok Pasala',
        url: 'https://ashokpasala.com',
        jobTitle: 'Full Stack Developer & AI Systems Engineer',
        description: 'Full stack developer, AI systems engineer, and founder of Norveth.',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'VIT-AP University'
        },
        knowsAbout: ['Artificial Intelligence', 'Full Stack Development', 'Next.js', 'Python', 'Cybersecurity', 'Web3', 'Blockchain'],
        worksFor: {
          '@id': 'https://ashokpasala.com/#organization'
        },
        sameAs: [
          'https://github.com/ashokwebs',
          'https://www.linkedin.com/in/ashok-raj-p-1b8539317/',
          'https://instagram.com/_ashok.dev'
        ]
      },
      {
        '@type': 'Organization',
        '@id': 'https://ashokpasala.com/#organization',
        name: 'Norveth',
        url: 'https://ashokpasala.com',
        founder: {
          '@id': 'https://ashokpasala.com/#person'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ashokpasala.com/#website',
        url: 'https://ashokpasala.com',
        name: 'Ashok Pasala - Portfolio',
        publisher: {
          '@id': 'https://ashokpasala.com/#person'
        }
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://ashokpasala.com/#webpage',
        url: 'https://ashokpasala.com',
        name: 'Ashok Pasala – Full Stack Developer & AI Systems Engineer',
        isPartOf: {
          '@id': 'https://ashokpasala.com/#website'
        },
        about: {
          '@id': 'https://ashokpasala.com/#person'
        }
      }
    ]
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
