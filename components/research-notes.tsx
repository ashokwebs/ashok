'use client'

import { BookOpen, ArrowUpRight, FileCode, Cpu, Shield, BrainCircuit, TrendingUp, Search } from 'lucide-react'

const publications = [
  {
    icon: TrendingUp,
    category: 'Quantitative Research & ML',
    title: 'QROS: Volatility Modeling & Binary Options Strike Prediction on Polymarket',
    abstract:
      'Empirical analysis of sub-second high-frequency tick ingestion (Binance 1s feeds) for forecasting 5-minute Polymarket BTC settlement probabilities. Formulates LightGBM Scale/Shape volatility models against EWMA baselines and details the mechanics of our MM-1 market-making engine.',
    date: 'August 2026',
    readTime: '12 min read',
    tags: ['Quantitative ML', 'LightGBM', 'Polymarket', 'Volatility Forecasting', 'Python'],
    link: '#projects',
  },
  {
    icon: Search,
    category: 'AI Tooling & Search Protocols',
    title: 'OSPRED: Canonical Capability Schemas & Security Trust Vectors for MCP Servers',
    abstract:
      'Proposing a standardized taxonomy and verification pipeline (Yaltan) for indexing Model Context Protocol (MCP) servers, reusable AI skills, and autonomous tool registries. Covers automated SSRF/prompt-injection safety classification and intent-based capability matching.',
    date: 'July 2026',
    readTime: '10 min read',
    tags: ['Model Context Protocol', 'OSPRED', 'Capability Indexing', 'Trust Scoring', 'FastAPI'],
    link: '#projects',
  },
  {
    icon: BrainCircuit,
    category: 'Autonomous Multi-Agent Systems',
    title: 'Deterministic State Coordination in Autonomous Multi-Agent Swarms',
    abstract:
      'Architectural principles for mitigating hallucination cascades and state divergence across collaborative agent swarms. Implemented across The Vector and SlackMind (Google Cloud Rapid Agent Hackathon) with shared vector context and asynchronous tool routing.',
    date: 'June 2026',
    readTime: '9 min read',
    tags: ['Agent Swarms', 'Shared Memory', 'LangChain', 'Gemini', 'Deterministic AI'],
    link: '#projects',
  },
  {
    icon: Shield,
    category: 'Cybersecurity & Systems Hardening',
    title: 'Norveth Dynamic Crawling & Zero-Trust Web Security Defense Engine',
    abstract:
      'Technical design of the Norveth Playwright async crawler, featuring retry pipelines with exponential backoff, LLM failover, and comprehensive defenses against SSRF, private-IP traversal, CSP bypasses, and automated OWASP Top 10 diagnostic mapping.',
    date: 'May 2026',
    readTime: '8 min read',
    tags: ['Playwright', 'SSRF Hardening', 'OWASP Top 10', 'Knowledge Graph', 'Python'],
    link: '#ventures',
  },
]

export default function ResearchNotes() {
  return (
    <section id="research" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>06 // Systems R&amp;D &amp; Publications</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Research &amp; Engineering Notes
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 font-light">
                Whitepapers, quantitative models, and architectural specifications on quantitative ML trading, MCP capability indexing, and autonomous agent swarms.
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest self-start md:self-auto">
              [Open Systems Research &bull; Technical Specs]
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
                        className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                        {item.abstract}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read action */}
                  <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors"
                    >
                      <span>Explore Spec</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <span className="text-[10px] font-mono text-neutral-500">
                      Technical Note
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
