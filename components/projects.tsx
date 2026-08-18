'use client'

import { useState } from 'react'
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Database, Activity, Globe } from 'lucide-react'
import { GitHubIcon } from '@/components/social-icons'

const systems = [
  {
    icon: Cpu,
    category: 'Autonomous AI',
    domainKey: 'ai',
    title: 'Multi-Agent Orchestration Platform',
    headline: 'Collaborative Multi-Agent Execution Kernel',
    description:
      'Autonomous orchestration kernel where specialized agent personas collaborate on complex, multi-stage workflows with deterministic routing, shared vector memory persistence, and dynamic tool validation.',
    metrics: 'Deterministic Routing • Vector Memory • LangChain Kernel',
    tags: ['Python', 'FastAPI', 'LangChain', 'Redis', 'Vector DBs'],
    github: 'https://github.com/ashokwebs',
  },
  {
    icon: Layers,
    category: 'Enterprise Automation',
    domainKey: 'enterprise',
    title: 'AI Workflow Automation Engine',
    headline: 'Visual Pipeline Compiler & Distributed Workers',
    description:
      'Visual pipeline compiler that translates high-level natural language instructions into distributed, fault-tolerant worker execution graphs with live WebSocket telemetry.',
    metrics: 'Visual Compiler • Distributed Worker Graph • Real-Time Stream',
    tags: ['Next.js 16', 'Node.js', 'PostgreSQL', 'Docker', 'WebSockets'],
    github: 'https://github.com/ashokwebs',
  },
  {
    icon: ShieldCheck,
    category: 'Cybersecurity',
    domainKey: 'security',
    title: 'OSPRED Autonomous Security Engine',
    headline: 'Proactive Threat Surface & Vulnerability Scanner',
    description:
      'AI-assisted cybersecurity platform engineered for automated attack-surface mapping, vulnerability scanning, threat intelligence synthesis, and server hardening.',
    metrics: 'Attack Surface Mapping • Automated Hardening • CVE Synthesis',
    tags: ['Python', 'FastAPI', 'Docker', 'Security Research', 'Linux'],
    github: 'https://github.com/ashokwebs',
  },
  {
    icon: Database,
    category: 'Neural Search',
    domainKey: 'ai',
    title: 'Neural Knowledge Retrieval Engine',
    headline: 'Sub-Millisecond Dense Vector RAG Pipeline',
    description:
      'High-throughput semantic search and knowledge synthesis engine utilizing dense embeddings and Retrieval-Augmented Generation (RAG) over heterogeneous unstructured corpora.',
    metrics: 'Vector Embeddings • Semantic Indexing • RAG Pipeline',
    tags: ['Python', 'ChromaDB', 'OpenAI API', 'Streamlit', 'RAG'],
    github: 'https://github.com/ashokwebs',
  },
  {
    icon: Activity,
    category: 'High-Scale Analytics',
    domainKey: 'enterprise',
    title: 'Enterprise SaaS Telemetry Platform',
    headline: 'Real-Time Event Stream Ingestion & Analytics',
    description:
      'High-frequency event ingestion and aggregation cluster handling WebSocket telemetry with sub-millisecond dispatch and high-density executive dashboard visualizations.',
    metrics: 'Sub-ms Dispatch • WebSocket Ingestion • Event Funnels',
    tags: ['Next.js', 'Express', 'MongoDB', 'WebSockets', 'Tailwind'],
    github: 'https://github.com/ashokwebs',
  },
  {
    icon: Globe,
    category: 'Distributed Ledgers',
    domainKey: 'web3',
    title: 'ShadowForge On-Chain Intelligence',
    headline: 'Heuristic Pattern Recognition & Smart Contract Auditing',
    description:
      'Distributed ledger intelligence engine executing real-time heuristic pattern recognition, smart contract security audits, and cryptographic anomaly detection.',
    metrics: 'Heuristic Detection • Contract Auditing • EVM Parsing',
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Web3.js'],
    github: 'https://github.com/ashokwebs',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'enterprise' | 'security' | 'web3'>('all')

  const filteredSystems =
    activeFilter === 'all'
      ? systems
      : systems.filter((s) => s.domainKey === activeFilter)

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span>03 // Systems &amp; Architectures</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Flagship Architectures
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light">
                Mission-critical software platforms, autonomous agent runtimes, and distributed infrastructure engineered from first principles.
              </p>
            </div>

            <a
              href="https://github.com/ashokwebs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground hover:opacity-70 transition-opacity self-start md:self-auto"
            >
              <span>View All on GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border/70">
            {[
              { key: 'all', label: 'All Architectures' },
              { key: 'ai', label: 'Autonomous AI & Agents' },
              { key: 'enterprise', label: 'Enterprise & Telemetry' },
              { key: 'security', label: 'Cybersecurity (OSPRED)' },
              { key: 'web3', label: 'Distributed Ledgers' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  activeFilter === tab.key
                    ? 'bg-foreground text-background font-semibold shadow-xs'
                    : 'text-muted-foreground hover:text-foreground hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSystems.map((system) => {
              const Icon = system.icon
              return (
                <article
                  key={system.title}
                  className="glass-card-interactive p-7 sm:p-9 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          {system.category}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-foreground/80 border border-slate-200">
                        Production Ready
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2.5">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-black transition-colors"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {system.title}
                      </h3>
                      <div className="text-xs font-mono text-foreground/80">
                        {system.headline}
                      </div>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed pt-1">
                        {system.description}
                      </p>
                    </div>

                    {/* Architectural Highlights */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{system.metrics}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {system.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-white border border-border/80 text-foreground/80 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border/80">
                    <a
                      href={system.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Inspect source architecture for ${system.title}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-foreground hover:opacity-70 transition-opacity"
                    >
                      <GitHubIcon size={16} />
                      <span>Inspect Repository</span>
                    </a>

                    <a
                      href={system.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground group-hover:border-foreground group-hover:text-foreground transition-all"
                      aria-label={`Open ${system.title}`}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Callout */}
          <div className="p-8 sm:p-10 rounded-[1.5rem] bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3
                className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Looking for Custom AI Architecture or Distributed Systems?
              </h3>
              <p className="text-sm text-neutral-400 font-light max-w-xl">
                I partner with ambitious founders, enterprises, and engineering teams to build sovereign AI systems, multi-agent frameworks, and high-throughput platforms.
              </p>
            </div>

            <a
              href="#contact"
              className="px-6 py-3.5 bg-white text-black font-medium text-xs font-mono uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors shrink-0"
            >
              Initiate Project Mandate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
