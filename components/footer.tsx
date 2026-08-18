'use client'

import { ArrowUpRight, Cpu } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Founder Thesis', href: '#about' },
    { label: 'Core Ventures', href: '#ventures' },
    { label: 'Flagship Systems', href: '#projects' },
    { label: 'Technical Arsenal', href: '#expertise' },
    { label: 'Systems R&D', href: '#research' },
    { label: 'Venture Trajectory', href: '#experience' },
    { label: 'Engineering Mandates', href: '#services' },
    { label: 'System Console', href: '#console' },
    { label: 'Executive Contact', href: '#contact' },
  ]

  const resources = [
    { label: 'Norveth Platform (norveth.app)', href: 'https://norveth.app' },
    { label: 'Executive Resume (PDF)', href: '/resume.pdf' },
    { label: 'AI Crawler Spec (llms.txt)', href: '/llms.txt' },
    { label: 'Sitemap (XML)', href: '/sitemap.xml' },
  ]

  const socials = [
    { label: 'GitHub (@ashokwebs)', href: 'https://github.com/ashokwebs' },
    { label: 'LinkedIn (Ashok Raj P)', href: 'https://www.linkedin.com/in/ashok-raj-p-1b8539317/' },
    { label: 'X / Twitter (@ashokfounds)', href: 'https://x.com/ashokfounds' },
    { label: 'Instagram (@_ashok.dev)', href: 'https://instagram.com/_ashok.dev' },
    { label: 'Devpost (ashokashishms)', href: 'https://devpost.com/ashokashishms/' },
  ]

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#09090b] text-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mandate */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white text-black font-bold flex items-center justify-center text-xs tracking-wider shadow-md">
                AP
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-white tracking-tight leading-none"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Ashok Pasala
                </h3>
                <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
                  Varellen Technologies • Norveth
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Founder &amp; CEO of <strong className="text-white font-medium">Varellen Technologies</strong> and Systems Architect at <strong className="text-white font-medium">Norveth</strong> (norveth.app). Engineering sovereign AI infrastructure, enterprise software, and high-scale distributed backend systems from first principles.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-[11px] font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for Strategic Mandates &amp; Advisory</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4
              className="text-xs font-mono uppercase tracking-widest text-white font-bold"
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Specifications */}
          <div className="md:col-span-3 space-y-4">
            <h4
              className="text-xs font-mono uppercase tracking-widest text-white font-bold"
            >
              Ventures &amp; Specs
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {resources.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Profiles */}
          <div className="md:col-span-2 space-y-4">
            <h4
              className="text-xs font-mono uppercase tracking-widest text-white font-bold"
            >
              Network
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {socials.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {soc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {currentYear} Ashok Pasala • Varellen Technologies &amp; Norveth. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Cpu size={12} />
            <span>Engineered from First Principles • Next.js 16</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
