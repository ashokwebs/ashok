import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Instrument_Serif } from 'next/font/google'
import { CONTACT, NORVETH, PROFILES, SITE } from '@/lib/config'
import { WORK } from '@/components/work'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const serif = Instrument_Serif({
  variable: '--font-serif-display',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

const title = 'Ashok Pasala: AI systems and security engineer'
const description =
  'Ashok Pasala builds AI systems, breaks them, and explains exactly why they broke. Selected work: a five-backend language in C99, a website audit engine, investigation tooling. Hire him through Norveth.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: '%s | Ashok Pasala' },
  description,
  applicationName: 'Ashok Pasala',
  authors: [{ name: 'Ashok Pasala', url: SITE }],
  creator: 'Ashok Pasala',
  keywords: [
    'Ashok Pasala', 'Ashok Raj Pasala', 'AI engineer', 'AI security', 'AI red teaming',
    'LLM security review', 'compiler engineer', 'Norveth', 'hire AI engineer India',
  ],
  verification: { google: 'O0fymhvn25v7YUKhQs7MYjCdNjLKiaJ4-944i_48IG4' },
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/', types: { 'text/markdown': '/llms.txt' } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    title,
    description,
    url: SITE,
    siteName: 'Ashok Pasala',
    locale: 'en_US',
    type: 'profile',
    firstName: 'Ashok',
    lastName: 'Pasala',
    username: 'ashokwebs',
  },
  twitter: { card: 'summary_large_image', title, description, creator: '@ashokfounds' },
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
  colorScheme: 'dark',
  themeColor: '#0c0c0b',
  width: 'device-width',
  initialScale: 1,
}

const PERSON = `${SITE}/#person`
const ORG = `${SITE}/#norveth`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON,
      name: 'Ashok Pasala',
      alternateName: ['Ashok Raj Pasala', 'Ashok Raj P'],
      givenName: 'Ashok',
      familyName: 'Pasala',
      jobTitle: 'AI systems and security engineer',
      description,
      url: SITE,
      image: `${SITE}/ashok.jpeg`,
      email: `mailto:${CONTACT.email}`,
      worksFor: { '@id': ORG },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'VIT-AP University', sameAs: 'https://vitap.ac.in' },
      address: { '@type': 'PostalAddress', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
      knowsAbout: [
        'AI security', 'LLM red teaming', 'Compilers', 'Programming language design',
        'Web crawling', 'Website security audits', 'Multi-agent systems', 'C', 'Python', 'TypeScript',
      ],
      sameAs: PROFILES.map((p) => p.href),
    },
    {
      '@type': 'Organization',
      '@id': ORG,
      name: 'Norveth',
      url: NORVETH,
      email: CONTACT.email,
      founder: { '@id': PERSON },
      description: 'Websites, web apps, AI systems, automation and security reviews. Where to hire Ashok Pasala.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'Ashok Pasala',
      inLanguage: 'en',
      publisher: { '@id': PERSON },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/#webpage`,
      url: SITE,
      name: title,
      isPartOf: { '@id': `${SITE}/#website` },
      mainEntity: { '@id': PERSON },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE}/#work`,
      name: 'Selected work by Ashok Pasala',
      itemListElement: WORK.map((w, i) => ({
        '@type': 'CreativeWork',
        position: i + 1,
        name: w.name,
        description: w.summary,
        creator: { '@id': PERSON },
        ...(w.link ? { url: w.link.href } : {}),
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Ashok Pasala?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ashok Pasala (also Ashok Raj Pasala) is an AI systems and security engineer from Andhra Pradesh, India, studying computer science at VIT-AP University. He built unfish, a programming language in C99 with five byte-identical backends, and Norveth, a website audit engine. He builds AI systems, attacks them, and documents why they fail.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I hire Ashok Pasala?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Through Norveth at https://norveth.app, which lists scope, prices and booking, or by email at hello@norveth.app.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
