'use client'

import Image from 'next/image'
import { ShieldCheck, Cpu, GitBranch, Layers, Terminal } from 'lucide-react'

export default function About() {
  const axioms = [
    {
      icon: Cpu,
      title: 'First-Principles Reductionism',
      description:
        'Deconstruct every engineering challenge to its thermodynamic and computational limits. Eliminate framework bloat and arbitrary abstractions in favor of deterministic execution.',
    },
    {
      icon: Layers,
      title: 'Autonomous Multi-Agent Systems',
      description:
        'The next era of software is autonomous. We design intelligent agent swarms with shared vector memory, context routing, and asynchronous tool invocation.',
    },
    {
      icon: ShieldCheck,
      title: 'Resilience & Security by Design',
      description:
        'Zero-trust architecture, hardened Linux environments, and cryptographic verification embedded from line zero—ensuring sovereign fault tolerance.',
    },
    {
      icon: GitBranch,
      title: 'Compound Architectural Leverage',
      description:
        'Build foundational developer infrastructure and scalable backends that amplify developer velocity and deliver exponential operational leverage.',
    },
  ]

  return (
    <section id="about" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 sm:space-y-32">
          {/* Section Heading */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-emerald-400">01 //</span>
              <span>Venture &amp; Philosophy</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Founder Thesis &amp; Systems Mindset
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed">
              Software is not merely code—it is an engine of radical operational leverage.
            </p>
          </div>

          {/* Photo & Founder Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image card */}
            <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-card group border border-white/[0.08] shadow-2xl">
                <Image
                  src="/ashok.jpeg"
                  alt="Ashok Pasala — Founder of Varellen Technologies & Norveth"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority={false}
                />
                {/* Dramatic gradient overlay with emerald tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 mb-2">
                    Founder &amp; Systems Architect
                  </div>
                  <div
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Ashok Pasala
                  </div>
                  <div className="text-sm text-neutral-300 font-light mt-1.5">
                    Varellen Technologies • Norveth
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* Premium Testimonial Card */}
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-5 relative overflow-hidden backdrop-blur-sm shadow-xl">
                {/* Emerald gradient decorative line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 via-emerald-600/50 to-transparent"></div>
                <div className="absolute -right-10 -top-10 text-[100px] text-white/[0.02] font-serif leading-none select-none pointer-events-none">
                  &quot;
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400/80 flex items-center gap-2">
                  <Terminal size={14} />
                  <span>The Founder Mandate</span>
                </div>
                <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                  &ldquo;Through Varellen Technologies and Norveth, I engineer high-performance digital platforms, sovereign AI runtimes, and resilient developer tooling designed to transform complex cognitive workflows into autonomous, unstoppable infrastructure.&rdquo;
                </p>
              </div>

              <div className="space-y-5 text-neutral-300 text-sm sm:text-base font-light leading-relaxed px-1">
                <p>
                  As Founder &amp; CEO of <strong className="text-white font-medium">Varellen Technologies</strong> and Systems Architect at <strong className="text-white font-medium">Norveth</strong>, I bridge the gap between high-level autonomous agent orchestration and metal-level backend resilience. My work spans high-throughput distributed systems, vector memory architectures, proactive cybersecurity tooling, and full-stack web platforms.
                </p>
                <p>
                  My technical foundations are grounded in Computer Science &amp; Engineering at <strong className="text-white font-medium">VIT-AP University</strong>, with deep independent research in distributed consensus, operating system internals, applied cryptography, and large language model architectures.
                </p>
                <p>
                  Whether architecting enterprise AI pipelines, designing high-frequency WebSocket data clusters, or auditing decentralized smart contracts, I operate with an uncompromising focus on speed, deterministic execution, and mathematical elegance.
                </p>
              </div>

              {/* Badges / Credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
                <div className="p-3.5 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <ShieldCheck size={14} className="text-emerald-400/70" />
                    Ventures
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    Varellen &amp; Norveth
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Cpu size={14} className="text-emerald-400/70" />
                    Academic Base
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    CS &amp; Distributed Sys
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden group col-span-2 sm:col-span-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Terminal size={14} className="text-emerald-400/70" />
                    Reach
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white">
                    India • Global Remote
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

          {/* Core Engineering Axioms Grid */}
          <div className="space-y-10 sm:space-y-12">
            <div className="flex flex-col gap-3 text-center items-center justify-center">
              <h3
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Core Engineering Axioms
              </h3>
              <p className="text-neutral-400 font-light max-w-xl text-sm sm:text-base">
                Principles that dictate the architecture, resilience, and execution of all deployed systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
              {axioms.map((axiom, idx) => {
                const Icon = axiom.icon
                return (
                  <div
                    key={axiom.title}
                    className="group relative p-6 sm:p-8 md:p-10 glass-card hover:-translate-y-1.5 transition-all duration-500 border border-white/[0.06] hover:border-emerald-500/30 overflow-hidden hover:shadow-[0_8px_30px_-12px_rgba(16,185,129,0.2)]"
                  >
                    {/* Subtle gradient border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-colors duration-500 pointer-events-none"></div>
                    
                    {/* Large Background Number */}
                    <div 
                      className="absolute -right-4 -top-8 text-[140px] font-bold text-white/[0.02] pointer-events-none select-none group-hover:text-emerald-500/[0.04] transition-colors duration-500" 
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      0{idx + 1}
                    </div>

                    <div className="relative z-10 space-y-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-emerald-400 border border-white/[0.08] group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-500 shadow-sm">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-emerald-500/70">
                            0{idx + 1}
                          </span>
                          <h4
                            className="text-xl font-bold text-white group-hover:text-emerald-50 transition-colors"
                            style={{ fontFamily: 'var(--font-syne)' }}
                          >
                            {axiom.title}
                          </h4>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                          {axiom.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
