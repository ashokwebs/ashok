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
    <section id="about" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {/* Section Heading */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>01 // Venture &amp; Philosophy</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Founder Thesis &amp; Systems Mindset
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              Software is not merely code—it is an engine of radical operational leverage.
            </p>
          </div>

          {/* Photo & Founder Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Image card */}
            <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full">
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden glass-card group border border-white/[0.1]">
                <Image
                  src="/ashok.jpeg"
                  alt="Ashok Pasala — Founder of Varellen Technologies & Norveth"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-mono uppercase tracking-widest text-white/70">
                    Founder &amp; Systems Architect
                  </div>
                  <div
                    className="text-xl font-bold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Ashok Pasala
                  </div>
                  <div className="text-xs text-neutral-300 font-light mt-1">
                    Varellen Technologies • Norveth
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-5 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Terminal size={14} />
                  <span>The Founder Mandate</span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  &ldquo;Through Varellen Technologies and Norveth, I engineer high-performance digital platforms, sovereign AI runtimes, and resilient developer tooling designed to transform complex cognitive workflows into autonomous, unstoppable infrastructure.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Ventures
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Varellen &amp; Norveth
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Academic Grounding
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    CS &amp; Distributed Sys
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] col-span-2 sm:col-span-1">
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Location &amp; Reach
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    India &bull; Global Remote
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Engineering Axioms Grid */}
          <div className="space-y-6 pt-8 border-t border-white/[0.08]">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Core Engineering Axioms
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {axioms.map((axiom, idx) => {
                const Icon = axiom.icon
                return (
                  <div
                    key={axiom.title}
                    className="p-5 sm:p-7 md:p-8 glass-card space-y-4 hover:-translate-y-1 transition-transform border border-white/[0.08]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1]">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-neutral-500">
                          0{idx + 1}
                        </span>
                        <h4
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: 'var(--font-syne)' }}
                        >
                          {axiom.title}
                        </h4>
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed font-light">
                        {axiom.description}
                      </p>
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
