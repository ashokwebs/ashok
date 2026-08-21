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
const syne = Syne({ variable: '--font-syne', subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

const siteTitle = 'Ashok Pasala — Founder (Varellen Technologies & Norveth) | AI Systems Architect'
const siteDescription =
  'Ashok Pasala is a Founder, AI Systems Architect, and Deep Tech Engineer. Founder of Varellen Technologies & Norveth, engineering autonomous multi-agent orchestration frameworks, sovereign AI infrastructure, enterprise software platforms, and high-scale distributed backends.'

export const metadata: Metadata = {
  metadataBase: new URL('https://ashokpasala.vercel.app'),
  title: {
    default: siteTitle,
    template: '%s | Ashok Pasala',
  },
  description: siteDescription,
  applicationName: 'Ashok Pasala Portfolio & Venture Hub',
  verification: {
    google: 'O0fymhvn25v7YUKhQs7MYjCdNjLKiaJ4-944i_48IG4',
  },
  keywords: [
    'Ashok Pasala', 'Ashok Raj Pasala', 'Varellen Technologies', 'Founder of Varellen Technologies',
    'Norveth', 'Founder of Norveth', 'Varellen',
    'AI Systems Architect', 'AI Systems Engineer', 'Autonomous AI Systems',
    'Multi-Agent Orchestration', 'AI Agent Frameworks', 'Systems Architect',
    'Full Stack Architect', 'Distributed Systems Engineer', 'Deep Tech Founder',
    'Next.js 16', 'React 19', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'Rust', 'Go',
    'Retrieval Augmented Generation', 'RAG', 'LangChain', 'Vector Search',
    'Cybersecurity Researcher', 'OSPRED Framework', 'ShadowForge Intelligence',
    'DevOps', 'Docker', 'Kubernetes', 'PostgreSQL', 'High-Scale Backend',
    'VIT-AP University Computer Science', 'India Tech Founders', 'Silicon Valley Style Engineer'
  ],
  authors: [{ name: 'Ashok Pasala', url: 'https://ashokpasala.vercel.app' }],
  creator: 'Ashok Pasala',
  publisher: 'Ashok Pasala — Varellen Technologies & Norveth',
  category: 'Technology & Artificial Intelligence',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    // Advertise the AI-crawler spec in <head> so generative engines can find it
    // without guessing the path; previously /llms.txt was only reachable via a
    // visible link in the page body.
    types: {
      'text/markdown': '/llms.txt',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Andhra Pradesh',
    'geo.position': '16.5062;80.6480',
    'ICBM': '16.5062, 80.6480',
    'author': 'Ashok Pasala',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://ashokpasala.vercel.app',
    siteName: 'Ashok Pasala — Founder & AI Systems Architect',
    locale: 'en_US',
    type: 'profile',
    firstName: 'Ashok',
    lastName: 'Pasala',
    username: 'ashokwebs',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description:
      'Founder of Varellen Technologies & Norveth. Architecting autonomous multi-agent infrastructure, enterprise software, and resilient distributed backends.',
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
  colorScheme: 'dark',
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
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
          'Founder & CEO (Varellen Technologies)',
          'Founder & Systems Architect (Norveth)',
          'AI Systems Architect',
          'Autonomous Systems Engineer',
          'Full Stack Systems Engineer',
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
          'Autonomous AI Agents',
          'Multi-Agent Orchestration Frameworks',
          'Retrieval-Augmented Generation (RAG)',
          'Large Language Models (LLMs)',
          'High-Scale Backend Engineering',
          'Distributed Systems Architecture',
          'Enterprise Software Development',
          'System Design & Microservices',
          'Cybersecurity & Threat Modeling',
          'Blockchain & Web3 Cryptography',
          'Next.js 16 & React 19',
          'TypeScript & Python',
          'FastAPI & Node.js',
          'PostgreSQL, Redis & Vector Databases',
          'Docker, Kubernetes & Cloud DevOps',
          'Linux Kernel & Server Hardening',
          'First-Principles Engineering',
        ],
        worksFor: [
          {
            '@id': 'https://ashokpasala.vercel.app/#norveth',
          },
          {
            '@id': 'https://ashokpasala.vercel.app/#varellen',
          },
        ],
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
        '@id': 'https://ashokpasala.vercel.app/#norveth',
        name: 'Norveth',
        url: 'https://norveth.app',
        email: 'founder@norveth.app',
        description:
          'Norveth is an engineering-first deep technology venture focused on building sovereign AI runtimes, multi-agent orchestration frameworks, developer infrastructure, and mission-critical website intelligence software.',
        founder: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        foundingDate: '2024',
        knowsAbout: [
          'Autonomous AI Runtimes',
          'Multi-Agent Systems',
          'Developer Tooling',
          'Enterprise Automation',
          'Cybersecurity Systems',
          'Distributed Cloud Infrastructure',
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://ashokpasala.vercel.app/#varellen',
        name: 'Varellen Technologies',
        url: 'https://ashokpasala.vercel.app',
        email: 'ashokashishms@gmail.com',
        description:
          'Varellen Technologies is an advanced technology initiative and enterprise software engineering venture founded by Ashok Pasala, focused on high-performance digital platforms, scalable architectures, and intelligent software solutions.',
        founder: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        foundingDate: '2024',
        knowsAbout: [
          'Enterprise Software Platforms',
          'Distributed Architectures',
          'AI Automation Systems',
          'Scalable Cloud Infrastructure',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ashokpasala.vercel.app/#website',
        dateModified: new Date().toISOString().split('T')[0],
        url: 'https://ashokpasala.vercel.app',
        name: 'Ashok Pasala — Founder & AI Systems Architect',
        description:
          'Official digital hub and system architecture portal of Ashok Pasala, Founder of Varellen Technologies & Norveth.',
        inLanguage: 'en',
        publisher: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://ashokpasala.vercel.app/#webpage',
        dateModified: new Date().toISOString().split('T')[0],
        url: 'https://ashokpasala.vercel.app',
        name: 'Ashok Pasala — Founder & AI Systems Architect',
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
        '@type': 'ItemList',
        '@id': 'https://ashokpasala.vercel.app/#architectures',
        name: 'Featured Software Systems & AI Architectures',
        itemListElement: [
          {
            '@type': 'SoftwareApplication',
            position: 1,
            name: 'Norveth Alpha & Crawler Mesh',
            applicationCategory: 'Engineering Intelligence',
            operatingSystem: 'Cloud / Containerized',
            description:
              'AI-powered website engineering intelligence platform featuring dynamic Playwright crawling, automated OWASP Top 10 security mapping, and an Engineering Knowledge Graph reasoning layer.',
            url: 'https://norveth.app',
            author: { '@id': 'https://ashokpasala.vercel.app/#person' },
          },
          {
            '@type': 'SoftwareApplication',
            position: 2,
            name: 'OSPRED & Yaltan Discovery Platform',
            applicationCategory: 'Search & MCP Tooling',
            operatingSystem: 'Cloud',
            description:
              'Autonomous capability discovery and indexing engine for Model Context Protocol (MCP) servers, reusable AI skills, and plugins with security trust verification.',
            url: 'https://github.com/ashokwebs',
            author: { '@id': 'https://ashokpasala.vercel.app/#person' },
          },
          {
            '@type': 'SoftwareApplication',
            position: 3,
            name: 'QROS Quant & Polymarket BTC Trading Engine',
            applicationCategory: 'Quantitative Finance & ML',
            operatingSystem: 'Linux / Cloud',
            description:
              'High-frequency quantitative research and algorithmic trading platform targeting Polymarket BTC 5-minute prediction markets with LightGBM volatility modeling.',
            url: 'https://github.com/ashokwebs',
            author: { '@id': 'https://ashokpasala.vercel.app/#person' },
          },
          {
            '@type': 'SoftwareApplication',
            position: 4,
            name: 'SlackMind Agent Command Center',
            applicationCategory: 'Autonomous AI Swarms',
            operatingSystem: 'Cloud',
            description:
              'Google Cloud Rapid Agent Hackathon project orchestrating multi-agent swarms inside Slack with Gemini, Vertex AI Data Store, and MCP server tooling.',
            url: 'https://devpost.com/software/slackmind',
            author: { '@id': 'https://ashokpasala.vercel.app/#person' },
          },
          {
            '@type': 'SoftwareApplication',
            position: 5,
            name: 'The Vector / Vector AI Command Center',
            applicationCategory: 'Autonomous AI',
            operatingSystem: 'Cross-platform',
            description:
              'Multi-agent AI executive council (CEO, CTO, CMO) that autonomously turns ideas into startups, generates full business plans, tech architectures, and financial models with cross-agent consensus.',
            url: 'https://devpost.com/software/the_vector',
            author: { '@id': 'https://ashokpasala.vercel.app/#person' },
          },
          {
            '@type': 'SoftwareApplication',
            position: 6,
            name: 'Bank of India Mule Account Detection System',
            applicationCategory: 'FinTech Cybersecurity & ML',
            operatingSystem: 'Cloud',
            description:
              'IIT Hyderabad & Bank of India Hackathon project detecting illicit financial mule account routing and transaction anomalies with graph ML.',
            url: 'https://github.com/ashokwebs',
            author: { '@id': 'https://ashokpasala.vercel.app/#person' },
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://ashokpasala.vercel.app/#services',
        name: 'Ashok Pasala — Systems Engineering & Strategic Advisory',
        url: 'https://ashokpasala.vercel.app/#services',
        provider: {
          '@id': 'https://ashokpasala.vercel.app/#person',
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core Engineering Capabilities',
          itemListElement: [
            'Autonomous AI & Multi-Agent Systems',
            'Full Stack Enterprise Engineering',
            'Distributed Backend & API Architecture',
            'SaaS Product Architecture & Scalability',
            'Systems Architecture & Technical Advisory',
            'Developer Infrastructure & Prototyping',
          ].map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
          })),
        },
      },
      {
        // Generative engines quote FAQPage entities near-verbatim when answering
        // "who is / what is" queries, so these mirror the real questions an LLM
        // gets asked about Ashok and the ventures. Every answer here is drawn
        // from public/llms.txt so the two sources cannot drift apart.
        '@type': 'FAQPage',
        '@id': 'https://ashokpasala.vercel.app/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Ashok Pasala?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Ashok Pasala (also known as Ashok Raj Pasala) is a Founder, AI & Quantitative Systems Architect, and Deep Tech Engineer based in Andhra Pradesh, India. He is Founder & CEO of Varellen Technologies, Founder & Systems Architect of Norveth, creator of OSPRED & Yaltan, and lead architect of QROS. He has engineered 40+ production-grade software architectures across 50+ global hackathons, including Google Cloud Rapid Agent, Bank of India & IIT Hyderabad, SanDisk, and Qwen Global.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is Varellen Technologies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Varellen Technologies is an enterprise systems engineering and software venture founded by Ashok Pasala. It focuses on high-performance digital platforms, closed-loop AI automation frameworks, scalable cloud architectures, and resilient microservice systems.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is Norveth?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Norveth (norveth.app) is an AI-powered website engineering intelligence and dynamic crawling platform engineered by Ashok Pasala. It combines Playwright headless execution, automated OWASP Top 10 security mapping, WCAG 2.1 diagnostics, and an Engineering Knowledge Graph reasoning layer.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is OSPRED?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'OSPRED is an autonomous capability discovery and indexing engine for Model Context Protocol (MCP) servers, reusable AI skills, and plugins. It is built on the Yaltan scraping connector pipeline, a Canonical Capability Schema, and automated security trust scoring.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is QROS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'QROS is a high-frequency quantitative research and algorithmic trading platform targeting Polymarket BTC 5-minute prediction markets, using LightGBM volatility models over Binance one-second streaming ticks, plus a market-making execution engine and backtester.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact Ashok Pasala?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Ashok Pasala can be reached at ashokashishms@gmail.com for general enquiries or founder@norveth.app for executive and venture enquiries. He is also on GitHub (github.com/ashokwebs), LinkedIn, and X (@ashokfounds).',
            },
          },
        ],
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
              name: 'Executive Hub',
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-foreground selection:text-background">
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
