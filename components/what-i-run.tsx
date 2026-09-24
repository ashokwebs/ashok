'use client'

import { ArrowUpRight } from 'lucide-react'
import { BRANDS } from '@/lib/config'

const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const brands = [
  {
    name: 'Norveth',
    url: BRANDS.norveth,
    line: 'Technology company: websites, apps, AI and automation, and security reviews.',
  },
  {
    name: 'Janeory Studios',
    url: BRANDS.janeory,
    line: 'Media and content: video, clips, social and technical writing.',
  },
]

export default function WhatIRun() {
  return (
    <section id="what-i-run" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 max-w-3xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>What I run</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Zenvarq
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              The parent company. Two brands sit under it.
            </p>
          </div>

          <ul className="space-y-3 border-l border-white/[0.1] pl-5 sm:pl-6">
            {brands.map((b) => (
              <li key={b.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                >
                  {b.name}
                  <span className="text-xs font-mono font-normal text-neutral-500">{host(b.url)}</span>
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-sm text-neutral-400 font-light leading-relaxed">{b.line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
