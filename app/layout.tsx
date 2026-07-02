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
  title: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
  description: 'Ashok Raj Pasala is a Full Stack Developer, AI Systems Engineer, and founder of Norveth. Specializing in Next.js, React, Python, and intelligent AI automation.',
  verification: {
    google: 'O0fymhvn25v7YUKhQs7MYjCdNjLKiaJ4-944i_48IG4',
  },
  keywords: [
    'Ashok Pasala', 'Ashok Raj Pasala', 'Full Stack Developer', 'AI Systems Engineer', 
    'AI Developer', 'AI Automation Engineer', 'Backend Developer', 'React Developer', 
    'Next.js Developer', 'Python Developer', 'Software Engineer', 'Computer Science Student', 
    'VIT-AP University', 'Norveth', 'Founder of Norveth'
  ],
  authors: [{ name: 'Ashok Pasala', url: 'https://ashokpasala.com' }],
  creator: 'Ashok Pasala',
  publisher: 'Ashok Pasala',
  category: 'Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
    description: 'Ashok Raj Pasala is a Full Stack Developer, AI Systems Engineer, and founder of Norveth. Specializing in Next.js, React, Python, and intelligent AI automation.',
    url: 'https://ashokpasala.com',
    siteName: 'Ashok Pasala Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
    description: 'Ashok Raj Pasala is a Full Stack Developer, AI Systems Engineer, and founder of Norveth.',
    creator: '@ashokwebs',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
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
        name: 'Ashok Raj Pasala',
        alternateName: 'Ashok Pasala',
        image: [
          'https://ashokpasala.com/ashok-profile.jpg',
          'https://ashokpasala.com/ashok-profile-transparent.png'
        ],
        url: 'https://ashokpasala.com',
        jobTitle: ['Full Stack Developer', 'AI Systems Engineer', 'Software Engineer'],
        description: 'Ashok Raj Pasala is a Full Stack Developer, AI Systems Engineer, and founder of Norveth.',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'VIT-AP University'
        },
        knowsAbout: ['Artificial Intelligence', 'Full Stack Development', 'Next.js', 'React', 'Python', 'Cybersecurity', 'Web3', 'Blockchain', 'Backend Development'],
        worksFor: {
          '@id': 'https://ashokpasala.com/#organization'
        },
        sameAs: [
          'https://github.com/ashokwebs',
          'https://www.linkedin.com/in/ashok-raj-p-1b8539317/',
          'https://instagram.com/_ashok.dev',
          'https://x.com/ashokfounds',
          'https://www.facebook.com/ashokpasala.dev'
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
        name: 'Ashok Pasala',
        description: 'Portfolio of Ashok Raj Pasala',
        publisher: {
          '@id': 'https://ashokpasala.com/#person'
        }
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://ashokpasala.com/#webpage',
        url: 'https://ashokpasala.com',
        name: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
        isPartOf: {
          '@id': 'https://ashokpasala.com/#website'
        },
        about: {
          '@id': 'https://ashokpasala.com/#person'
        },
        mainEntity: {
          '@id': 'https://ashokpasala.com/#person'
        }
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://ashokpasala.com/#contact',
        url: 'https://ashokpasala.com/#contact',
        name: 'Contact Ashok Pasala',
        isPartOf: {
          '@id': 'https://ashokpasala.com/#website'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ashokpasala.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://ashokpasala.com',
              name: 'Home'
            }
          }
        ]
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
