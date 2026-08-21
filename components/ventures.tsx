'use client'

import { ArrowUpRight, CheckCircle2, Globe } from 'lucide-react'

export default function Ventures() {
  return (
    <section id="ventures" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#0c0d10] border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>02 // Core Ventures &amp; Platforms</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Venture Ecosystem
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 font-light">
                Deep-tech initiatives, engineering intelligence platforms, and discovery infrastructure founded and architected by Ashok Pasala.
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest self-start md:self-auto">
              [Sovereign Software • 50+ Hackathons Grounded]
            </div>
          </div>

          {/* Ventures Tri-Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Venture 1: Varellen Technologies */}
            <article className="glass-card-interactive p-6 sm:p-8 flex flex-col justify-between space-y-6 group border border-white/[0.08]">
              <div className="space-y-5">
                {/* Badge row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-md">
                      VT
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest whitespace-nowrap">
                        Founder &amp; CEO
                      </span>
                      <h3
                        className="text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        Varellen Technologies
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1] whitespace-nowrap shrink-0">
                    Enterprise
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  Scalable Digital Platforms • Autonomous AI Systems
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Varellen Technologies is an advanced enterprise systems engineering and software venture founded by Ashok Pasala. Focused on building high-performance digital platforms, closed-loop AI automation frameworks, and resilient microservice architectures.
                </p>

                {/* Core Pillars */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Core Capabilities:
                  </div>
                  <div className="space-y-1.5 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Enterprise microservice meshes &amp; fault-tolerant APIs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Autonomous AI workflow orchestration pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Zero-trust cloud infrastructure and CI/CD automation</span>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Distributed Systems', 'FastAPI', 'Next.js 16', 'Docker', 'PostgreSQL'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-white hover:text-neutral-300 transition-colors whitespace-nowrap"
                >
                  <span>Enterprise Inquiry</span>
                  <ArrowUpRight size={13} />
                </a>
                <span className="text-[10px] font-mono text-neutral-500 whitespace-nowrap shrink-0">
                  Global Operations
                </span>
              </div>
            </article>

            {/* Venture 2: Norveth (norveth.app) */}
            <article className="glass-card-interactive p-6 sm:p-8 flex flex-col justify-between space-y-6 group border border-white/[0.08]">
              <div className="space-y-5">
                {/* Badge row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-md">
                      NV
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest whitespace-nowrap">
                        Founder &amp; Architect
                      </span>
                      <h3
                        className="text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        Norveth
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1] whitespace-nowrap shrink-0">
                    norveth.app
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  Engineering Intelligence • Dynamic Playwright Crawler
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Norveth is an AI-powered website engineering intelligence and dynamic crawling platform engineered by Ashok Pasala. Powered by Playwright headless execution, automated OWASP Top 10 security mapping, and an Engineering Knowledge Graph reasoning layer.
                </p>

                {/* Core Pillars */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Core Capabilities:
                  </div>
                  <div className="space-y-1.5 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Playwright async crawler with retry &amp; failover logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Security hardening (SSRF, CSP, HSTS, Prompt Defenses)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Model Context Protocol (MCP) server &amp; CLI diagnostics</span>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Playwright', 'MCP Protocol', 'OWASP Top 10', 'Knowledge Graph', 'Python'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="https://norveth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
                >
                  <Globe size={13} />
                  <span>Launch norveth.app ↗</span>
                </a>
                <span className="text-[10px] font-mono text-neutral-500 whitespace-nowrap shrink-0">
                  Live SaaS
                </span>
              </div>
            </article>

            {/* Venture 3: OSPRED & Yaltan */}
            <article className="glass-card-interactive p-6 sm:p-8 flex flex-col justify-between space-y-6 group border border-white/[0.08]">
              <div className="space-y-5">
                {/* Badge row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-md">
                      OS
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest whitespace-nowrap">
                        Creator &amp; Architect
                      </span>
                      <h3
                        className="text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        OSPRED &amp; Yaltan
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1] whitespace-nowrap shrink-0">
                    Search Engine
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  MCP, Skills &amp; AI Capability Discovery Platform
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  OSPRED is an autonomous discovery and indexing engine for Model Context Protocol (MCP) servers, reusable AI skills, and plugins. Built on the Yaltan scraping connector pipeline, Canonical Capability Schema, and security trust scoring.
                </p>

                {/* Core Pillars */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Core Capabilities:
                  </div>
                  <div className="space-y-1.5 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Yaltan multi-source GitHub &amp; API discovery connectors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Canonical Capability Schema for AI tool indexing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Automated tool verification and security namespace rating</span>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['OSPRED', 'Yaltan Pipeline', 'MCP Discovery', 'Vector Search', 'FastAPI'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-white hover:text-neutral-300 transition-colors whitespace-nowrap"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight size={13} />
                </a>
                <span className="text-[10px] font-mono text-neutral-500 whitespace-nowrap shrink-0">
                  Major Platform
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
