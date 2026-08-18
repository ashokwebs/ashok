'use client'

import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function Ventures() {
  return (
    <section id="ventures" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0c0d10] border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>02 // Core Ventures</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Venture Ecosystem
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 font-light">
                Deep-tech initiatives and enterprise platforms founded and architected by Ashok Pasala.
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest self-start md:self-auto">
              [Sovereign Software &bull; Global Scale]
            </div>
          </div>

          {/* Ventures Dual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Venture 1: Varellen Technologies */}
            <article className="glass-card-interactive p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-8 group border border-white/[0.08]">
              <div className="space-y-6">
                {/* Badge row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-md">
                      VT
                    </div>
                    <div>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                        Founder &amp; CEO
                      </span>
                      <h3
                        className="text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        Varellen Technologies
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1]">
                    Enterprise
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  Scalable Digital Platforms &bull; High-Throughput Infrastructure
                </div>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Varellen Technologies is an advanced enterprise software and deep-tech venture engineering custom digital platforms, autonomous AI workflow automation systems, and high-concurrency cloud backends for modern businesses.
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-2 text-xs font-mono text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>Distributed microservices &amp; sub-millisecond API meshes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>Autonomous AI workflow engines &amp; agentic pipelines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>Hardened, zero-downtime cloud infrastructure (AWS/Docker/K8s).</span>
                    </li>
                  </ul>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Enterprise SaaS', 'Distributed Backend', 'FastAPI', 'Next.js 16', 'PostgreSQL', 'Docker'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  <span>Inquire Enterprise Mandate</span>
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[11px] font-mono text-neutral-500">
                  ashokpasala.vercel.app
                </span>
              </div>
            </article>

            {/* Venture 2: Norveth */}
            <article className="glass-card-interactive p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-8 group border border-white/[0.08]">
              <div className="space-y-6">
                {/* Badge row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-md">
                      NV
                    </div>
                    <div>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                        Founder &amp; Systems Architect
                      </span>
                      <h3
                        className="text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        Norveth
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1]">
                    Live Platform
                  </span>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  AI Website Intelligence &bull; Real Chromium Engine
                </div>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Norveth is an engineering-first website intelligence platform that executes real Chromium headless rendering, automated OWASP Top 10 security scanning, accessibility (WCAG 2.1) diagnostics, and Model Context Protocol (MCP) tool integrations.
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-2 text-xs font-mono text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>Empirical Chromium rendering &mdash; zero shallow simulations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>Model Context Protocol (MCP) server &amp; CLI for AI agents.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>Actionable, deterministic AI-generated code patches.</span>
                    </li>
                  </ul>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Chromium Headless', 'MCP Integration', 'OWASP Security', 'FastAPI', 'Deterministic AI', 'CLI'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="https://norveth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  <span>Launch norveth.app</span>
                  <ArrowUpRight size={14} />
                </a>
                <span className="text-[11px] font-mono text-neutral-500">
                  norveth.app
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
