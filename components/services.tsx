'use client'

import { Globe, Server, Bot, Shield, Compass, Wrench, ArrowUpRight } from 'lucide-react'

const mandates = [
  {
    icon: Bot,
    title: 'Autonomous AI & Multi-Agent Architecture',
    tag: 'Core Specialty',
    description:
      'Designing and deploying sovereign multi-agent runtimes, closed-loop automation workflows, custom RAG search pipelines, and LLM-powered tool-calling architectures for high-impact enterprise workflows.',
  },
  {
    icon: Server,
    title: 'High-Scale Backend & Distributed APIs',
    tag: 'Infrastructure',
    description:
      'Architecting resilient RESTful, GraphQL, gRPC, and WebSocket backend systems with sub-millisecond dispatch, optimized relational and vector database structures, and bulletproof authentication.',
  },
  {
    icon: Globe,
    title: 'Full-Stack Sovereign SaaS Platforms',
    tag: 'End-to-End',
    description:
      'Building ultra-responsive, accessible, and high-conversion web applications utilizing Next.js 16 (App Router), React 19, and modern CSS systems. Built for hyper-speed, seamless UX, and long-term maintainability.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Attack Surface Hardening',
    tag: 'Zero-Trust',
    description:
      'Comprehensive security assessments, automated vulnerability scanning via custom tooling (like OSPRED), Linux server hardening, OWASP mitigation, and threat intelligence synthesis.',
  },
  {
    icon: Compass,
    title: 'Venture & Systems Architecture Advisory',
    tag: 'Strategic Advisory',
    description:
      'Guiding startups and established technical teams on systems design, technical roadmap formulation, tech-stack evaluation, and cloud cost/latency optimizations.',
  },
  {
    icon: Wrench,
    title: 'Developer Infrastructure & Rapid Prototyping',
    tag: 'Velocity',
    description:
      'Engineering custom CLI developer tools, API gateways, Model Context Protocol (MCP) servers, and zero-to-one deep-tech MVPs designed to validate breakthrough ideas in days, not months.',
  },
]

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>08 // Strategic Engagements</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Engineering Mandates
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Partnering with ambitious founders, enterprises, and engineering leaders to execute high-stakes technical projects.
            </p>
          </div>

          {/* Mandates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mandates.map((mandate, idx) => {
              const Icon = mandate.icon
              return (
                <div
                  key={mandate.title}
                  className="glass-card-interactive p-7 sm:p-8 flex flex-col justify-between border border-white/[0.08]"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1] group-hover:bg-white group-hover:text-black transition-colors">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
                        {mandate.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3
                        className="text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {mandate.title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {mandate.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      onClick={scrollToContact}
                      className="text-xs font-mono font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Mandate</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-[1.75rem] border border-white/[0.1] bg-[#121216] shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3
                className="text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Have a Complex Systems Challenge?
              </h3>
              <p className="text-sm text-neutral-400 font-light">
                Direct advisory on autonomous AI agent swarms, distributed architectures, and sovereign developer tooling. Available worldwide.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all shrink-0 cursor-pointer shadow-md"
            >
              Initiate Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
