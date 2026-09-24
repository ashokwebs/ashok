'use client'

import { Globe, Workflow, Shield, ArrowUpRight } from 'lucide-react'
import { CONTACT } from '@/lib/config'

// Prices and booking live on norveth.app (the services studio). Do not add prices here.
const offers = [
  {
    icon: Globe,
    title: 'Websites & fixes for businesses',
    description:
      'A fast, clean website for your business, or fixes to the one you have: broken pages, slow loading, mobile layout, security headers.',
  },
  {
    icon: Workflow,
    title: 'Automation & AI assistants',
    description:
      'Replace a manual, repetitive workflow with an automation, or add an AI assistant that answers customers or handles internal work.',
  },
  {
    icon: Shield,
    title: 'AI/LLM security reviews for startups',
    description:
      'I attack your AI feature (prompt injection, tool abuse, data leaks, jailbreaks) and hand you reproducible findings with fixes.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>Services</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              What I can do for you
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Three things, done properly. Fixed quotes, delivery in days.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {offers.map((offer) => {
              const Icon = offer.icon
              return (
                <div
                  key={offer.title}
                  className="glass-card-interactive p-5 sm:p-7 md:p-8 flex flex-col justify-between border border-white/[0.08]"
                >
                  <div className="space-y-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1]">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>

                    <div className="space-y-2">
                      <h3
                        className="text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {offer.title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {offer.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <a
                      href={CONTACT.studio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-medium text-white hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>See prices &amp; book → norveth.app</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
