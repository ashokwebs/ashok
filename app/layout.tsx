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

const siteDescription =
  'Ashok Pasala is a Full Stack Developer, AI Systems Engineer, and founder of Norveth. He builds production-ready web applications, scalable backend platforms, AI automation systems, and multi-agent orchestration frameworks using Next.js, React, TypeScript, Python, and FastAPI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://ashokpasala.vercel.app'),
  title: {
    default: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
    template: '%s | Ashok Pasala',
  },
  description: siteDescription,
  verification: {
    google: 'O0fymhvn25v7YUKhQs7MYjCdNjLKiaJ4-944i_48IG4',
  },
  keywords: [
    'Ashok Pasala', 'Ashok Raj Pasala', 'Norveth', 'Founder of Norveth',
    'Full Stack Developer', 'AI Systems Engineer', 'AI Engineer', 'AI Automation',
    'AI Agents', 'Multi-Agent Systems', 'Systems Architect', 'Software Engineer',
    'Backend Developer', 'React Developer', 'Next.js Developer', 'TypeScript Developer',
    'Python Developer', 'FastAPI Developer', 'Node.js Developer',
    'Retrieval Augmented Generation', 'RAG', 'LangChain', 'Prompt Engineering',
    'DevOps', 'Docker', 'Kubernetes', 'PostgreSQL', 'Cybersecurity Researcher',
    'Web3 Developer', 'Blockchain', 'Distributed Systems', 'SaaS Developer',
    'Computer Science Student', 'VIT-AP University', 'India',
  ],
  authors: [{ name: 'Ashok Pasala', url: 'https://ashokpasala.vercel.app' }],
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
    description: siteDescription,
    url: 'https://ashokpasala.vercel.app',
    siteName: 'Ashok Pasala — Portfolio',
    locale: 'en_US',
    type: 'profile',
    firstName: 'Ashok',
    lastName: 'Pasala',
    username: 'ashokwebs',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
    description:
      'Full Stack Developer, AI Systems Engineer, and founder of Norveth. Building AI infrastructure, intelligent software, and scalable backend systems.',
    creator: '@ashokfounds',
    site: '@ashokfounds',
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
        '@id': 'https://ashokpasala.vercel.app/#person',
        name: 'Ashok Pasala',
        alternateName: ['Ashok Raj Pasala', 'Ashok Raj P'],
        givenName: 'Ashok',
        familyName: 'Pasala',
        image: 'https://ashokpasala.vercel.app/ashok.jpeg',
        url: 'https://ashokpasala.vercel.app',
        email: ['mailto:ashokashishms@gmail.com', 'mailto:founder@norveth.app'],
        jobTitle: [
          'Full Stack Developer',
          'AI Systems Engineer',
          'Systems Architect',
          'Founder of Norveth',
        ],
        description: siteDescription,
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Andhra Pradesh',
          addressCountry: 'IN',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'VIT-AP University',
          sameAs: 'https://vitap.ac.in',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Andhra Pradesh',
            addressCountry: 'IN',
          },
        },
        knowsAbout: [
          'Artificial Intelligence',
          'AI Agents',
          'Multi-Agent Systems',
          'Retrieval-Augmented Generation (RAG)',
          'LLM Applications',
          'Prompt Engineering',
          'Full Stack Development',
          'Backend Engineering',
          'System Design',
          'Software Architecture',
          'Distributed Systems',
          'DevOps',
          'Cloud Infrastructure',
          'Cybersecurity',
          'Blockchain',
          'Web3',
          'Next.js',
          'React',
          'TypeScript',
          'Python',
          'FastAPI',
          'Node.js',
          'PostgreSQL',
          'Docker',
          'Kubernetes',
          'Linux',
        ],
        worksFor: {
          '@id': 'https://ashokpasala.vercel.app/#organization',
        },
        sameAs: [
          'https://github.com/ashokwebs',
          'https://www.linkedin.com/in/ashok-raj-p-1b8539317/',
          'https://instagram.com/_ashok.dev',
          'https://x.com/ashokfounds',
          'https://www.facebook.com/ashokpasala.dev',
          'https://devpost.com/ashokashishms/',
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://ashokpasala.vercel.app/#organization',
        name: 'Norveth',
        url: 'https://ashokpasala.vercel.app',
        email: 'founder@norveth.app',
        description:
          'Norveth is an engineering-first technology initiative focused on building intelligent software, AI automation platforms, developer infrastructure, cybersecurity tooling, and scalable digital products.',
        founder: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        foundingDate: '2024',
        knowsAbout: [
          'AI Infrastructure',
          'AI Agents',
          'Multi-Agent Orchestration',
          'Automation Platforms',
          'SaaS Products',
          'Developer Tools',
          'Cybersecurity',
          'Cloud Infrastructure',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ashokpasala.vercel.app/#website',
        url: 'https://ashokpasala.vercel.app',
        name: 'Ashok Pasala — Portfolio',
        description:
          'Portfolio of Ashok Pasala: Full Stack Developer, AI Systems Engineer, and founder of Norveth.',
        inLanguage: 'en',
        publisher: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://ashokpasala.vercel.app/#webpage',
        url: 'https://ashokpasala.vercel.app',
        name: 'Ashok Pasala | Full Stack Developer & AI Systems Engineer',
        isPartOf: {
          '@id': 'https://ashokpasala.vercel.app/#website',
        },
        about: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        mainEntity: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://ashokpasala.vercel.app/#services',
        name: 'Ashok Pasala — Engineering Services',
        url: 'https://ashokpasala.vercel.app/#services',
        provider: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Engineering Services',
          itemListElement: [
            'Full Stack Development',
            'Backend & API Development',
            'AI Automation & Agent Development',
            'SaaS & Dashboard Development',
            'System Architecture & Technical Consulting',
            'Developer Tooling & Rapid Prototyping',
          ].map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ashokpasala.vercel.app/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://ashokpasala.vercel.app',
              name: 'Home',
            },
          },
        ],
      },
    ],
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
