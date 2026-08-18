'use client'

import { FileText, ArrowUpRight, Cpu, Shield, BookOpen, Layers } from 'lucide-react'

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
    <section id="research" className="relative w-full py-24 sm:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span>06 // Systems R&amp;D</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Research &amp; Engineering Notes
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light">
                Essays, technical whitepapers, and architectural notes on autonomous AI, distributed computing, and cybersecurity.
              </p>
            </div>

            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest self-start md:self-auto">
              [Open Research &bull; Technical Essays]
            </div>
          </div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="glass-card-interactive p-7 sm:p-9 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                          <Icon size={16} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground">
                        {item.date} • {item.readTime}
                      </div>
                    </div>

                    {/* Title & Abstract */}
                    <div className="space-y-2.5">
                      <h3
                        className="text-xl font-bold text-foreground tracking-tight group-hover:text-black transition-colors"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {item.abstract}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/80 flex items-center justify-between">
                    <a
                      href="https://github.com/ashokwebs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-foreground hover:opacity-70 transition-opacity"
                    >
                      <FileText size={14} />
                      <span>Review Technical Spec</span>
                    </a>
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground">
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
