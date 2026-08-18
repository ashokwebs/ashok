'use client'

import { FileText, Cpu, Shield, BookOpen, Layers } from 'lucide-react'

const publications = [
  {
    icon: Cpu,
    category: 'Autonomous AI',
    title: 'Autonomous Multi-Agent Convergence & Deterministic Routing',
    date: 'July 2026',
    readTime: '8 min read',
    abstract:
      'An analysis of coordinating specialized agent swarms with shared vector memory, dynamic context routing, and asynchronous tool invocation kernels to eliminate stochastic drift in multi-stage workflows.',
    tags: ['Multi-Agent Systems', 'Vector Memory', 'Deterministic Routing', 'LangChain'],
  },
  {
    icon: Layers,
    category: 'Agent Infrastructure',
    title: 'Model Context Protocol (MCP) as a Sovereign Tool Interface',
    date: 'June 2026',
    readTime: '6 min read',
    abstract:
      'How the Model Context Protocol enables autonomous LLMs to interface directly with real Chromium headless rendering pipelines, live APIs, and local developer environments—pioneered in Norveth.',
    tags: ['MCP Protocol', 'Chromium Engine', 'Developer Tooling', 'Agent Interfaces'],
  },
  {
    icon: Shield,
    category: 'Cybersecurity',
    title: 'Automated Attack Surface Mapping & EVM Ledger Analytics',
    date: 'May 2026',
    readTime: '7 min read',
    abstract:
      'Designing proactive security platforms (OSPRED) that execute continuous vulnerability discovery, CVE synthesis, and on-chain heuristic anomaly detection across distributed ledgers.',
    tags: ['Threat Modeling', 'OWASP Top 10', 'EVM Analytics', 'OSPRED Framework'],
  },
  {
    icon: BookOpen,
    category: 'Distributed Systems',
    title: 'First-Principles Reductionism in Distributed Telemetry',
    date: 'April 2026',
    readTime: '5 min read',
    abstract:
      'Achieving sub-millisecond event dispatch and high-frequency WebSocket stream aggregation by eliminating unnecessary intermediate abstractions and optimizing event loops.',
    tags: ['WebSocket Telemetry', 'Sub-Millisecond Dispatch', 'Concurrency', 'System Design'],
  },
]

export default function ResearchNotes() {
  return (
    <section id="research" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>06 // Systems R&amp;D</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Research &amp; Engineering Notes
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 font-light">
                Essays, technical whitepapers, and architectural notes on autonomous AI, distributed computing, and cybersecurity.
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest self-start md:self-auto">
              [Open Research &bull; Technical Essays]
            </div>
          </div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {publications.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="glass-card-interactive p-5 sm:p-7 md:p-9 flex flex-col justify-between group border border-white/[0.08]"
                >
                  <div className="space-y-5">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1] group-hover:bg-white group-hover:text-black transition-colors">
                          <Icon size={16} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500">
                        {item.date} • {item.readTime}
                      </div>
                    </div>

                    {/* Title & Abstract */}
                    <div className="space-y-2.5">
                      <h3
                        className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {item.abstract}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href="https://github.com/ashokwebs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-300 hover:text-white transition-colors"
                    >
                      <FileText size={14} />
                      <span>Review Technical Spec</span>
                    </a>
                    <span className="text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                      ↗
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
