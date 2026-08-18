'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Cpu,
  Layers,
  ShieldCheck,
  Database,
  Activity,
  Globe,
  TrendingUp,
  BrainCircuit,
  Bot,
  HardDrive,
  Search,
} from 'lucide-react'
import { GitHubIcon, DevpostIcon } from '@/components/social-icons'

const systems = [
  {
    icon: Globe,
    category: 'Engineering Intelligence & Crawler',
    domainKey: 'ai',
    title: 'Norveth Alpha & Crawling Infrastructure',
    headline: 'Full-Lifecycle Engineering Intelligence & Dynamic Playwright Mesh',
    description:
      'Deep engineering intelligence ecosystem executing automated website analysis, GitHub repository auditing, ZIP code inspections, and Playwright-based dynamic crawling. Features retry pipelines with exponential backoff, LLM failover, SSRF protection, and an Engineering Knowledge Graph reasoning layer.',
    metrics: 'Dynamic Playwright Crawler • Knowledge Graph • White-Label Reports • CI/CD',
    tags: ['norveth.app', 'Playwright', 'FastAPI', 'Next.js', 'Knowledge Graph', 'Python'],
    github: 'https://github.com/ashokwebs',
    liveUrl: 'https://norveth.app',
    status: 'Flagship Ecosystem',
  },
  {
    icon: Search,
    category: 'MCP Discovery & Search',
    domainKey: 'ai',
    title: 'OSPRED & Yaltan Indexing Engine',
    headline: 'Autonomous Capability Discovery & Trust Verification for AI Agents',
    description:
      'Discovery and search infrastructure for Model Context Protocol (MCP) servers, reusable AI skills, and plugins. Powered by the Yaltan scraping connector pipeline, Canonical Capability Schema, and an automated trust & security verification system with intent-based semantic search.',
    metrics: 'MCP Indexing • Canonical Capability Schema • Security Metadata • Yaltan Scraping',
    tags: ['OSPRED', 'MCP Discovery', 'Yaltan Pipeline', 'Vector Search', 'FastAPI', 'Python'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/ashokashishms',
    status: 'Core Initiative',
  },
  {
    icon: TrendingUp,
    category: 'Quantitative Research & ML Trading',
    domainKey: 'quant',
    title: 'QROS Quant & Polymarket BTC Engine',
    headline: '5-Minute Binary Options Prediction, Binance 1s Feeds & LightGBM Models',
    description:
      'High-frequency quantitative research and algorithmic trading platform targeting Polymarket BTC 5-minute prediction markets. Ingests Binance 1-second streaming ticks, calculates Price-to-Beat anchors, and forecasts volatility & strike probabilities using custom LightGBM Scale/Shape ML models, backtesters, and an MM-1 market-making engine.',
    metrics: 'Binance 1s Stream • Polymarket 5-Min Markets • LightGBM Volatility • MM-1 Engine',
    tags: ['QROS', 'Polymarket', 'Binance Websockets', 'LightGBM', 'Python', 'FastAPI'],
    github: 'https://github.com/ashokwebs',
    status: 'Active Quant Engine',
  },
  {
    icon: Bot,
    category: 'Google Cloud Hackathon',
    domainKey: 'hackathon',
    title: 'SlackMind Agent Command Center',
    headline: 'Google Cloud Rapid Agent Hackathon — Gemini & Vertex AI in Slack',
    description:
      'Autonomous AI agent orchestration kernel built for the Google Cloud Rapid Agent Hackathon. Coordinates intelligent agent swarms inside Slack utilizing Gemini foundation models, Vertex AI Search Data Store, and Model Context Protocol (MCP) tool routing with shared context delegation.',
    metrics: 'Google Cloud Rapid Agent • Gemini • Vertex AI Data Store • MCP Server',
    tags: ['Google Cloud', 'Gemini', 'Vertex AI', 'Slack Bolt', 'MCP Server', 'Python'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/slackmind',
    status: 'Hackathon Flagship',
  },
  {
    icon: BrainCircuit,
    category: 'Autonomous Multi-Agent',
    domainKey: 'ai',
    title: 'The Vector / Vector AI Command Center',
    headline: 'Autonomous Digital C-Suite & Startup Architecture Engine',
    description:
      'Multi-agent AI executive council (CEO, CTO, CMO) that turns ideas into startups in 8 seconds. Generates complete business plans, distributed tech stacks, and financial models simultaneously with deterministic cross-agent consensus.',
    metrics: 'Multi-Agent Consensus • Instant Spec Generation • Cross-Agent Memory',
    tags: ['The Vector', 'Multi-Agent Swarms', 'Python', 'LangChain', 'FastAPI', 'Next.js 16'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/the_vector',
    status: 'Production System',
  },
  {
    icon: ShieldCheck,
    category: 'FinTech & Security Hackathon',
    domainKey: 'security',
    title: 'Bank of India Mule Account Detection',
    headline: 'IIT Hyderabad & Bank of India Hackathon — ML Transaction Anomaly Engine',
    description:
      'Financial crime and suspicious transaction detection system engineered for the Bank of India & IIT Hyderabad Hackathon. Employs advanced machine learning models, graph traversal algorithms, and transaction pattern recognition to identify illicit mule account networks in real-time.',
    metrics: 'IIT Hyderabad + Bank of India • Graph ML • Real-Time Anomaly Triage',
    tags: ['Bank of India', 'Graph ML', 'Python', 'FastAPI', 'FinTech Security'],
    github: 'https://github.com/ashokwebs',
    status: 'National Hackathon Project',
  },
  {
    icon: HardDrive,
    category: 'Storage Architecture Hackathon',
    domainKey: 'security',
    title: 'IWCIS Storage Container System',
    headline: 'SanDisk Hackathon — Containerized File-System & exFAT Handling',
    description:
      'Low-level storage architecture and container concept engineered for the SanDisk Hackathon. Features optimized exFAT file-system handling, containerized storage abstraction layers, and high-throughput I/O pipelines.',
    metrics: 'SanDisk Hackathon • exFAT Internals • Storage Containers • I/O Optimization',
    tags: ['SanDisk', 'File Systems', 'exFAT', 'C / C++', 'Linux Kernel'],
    github: 'https://github.com/ashokwebs',
    status: 'SanDisk Hackathon Project',
  },
  {
    icon: Database,
    category: 'Enterprise Intelligence',
    domainKey: 'ai',
    title: 'CompanyBrain_AI & Qwen Chaos',
    headline: 'Enterprise Knowledge Fusion & Self-Persistent MemoryAgent',
    description:
      'Autonomous enterprise executive connecting contracts, financials, and roadmaps to eliminate organizational blind spots, paired with Qwen Chaos—a self-persistent MemoryAgent built for the Qwen Global Hackathon demonstrating cross-session neural recall.',
    metrics: 'Qwen Global Hackathon • Contract Parsing • Neural Memory Persistence',
    tags: ['CompanyBrain', 'Qwen LLM', 'Vector Persistence', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/companybrain_ai',
    status: 'Shipped System',
  },
  {
    icon: Activity,
    category: 'Crisis & Geospatial AI',
    domainKey: 'hackathon',
    title: 'ResQNet Disaster Response Grid',
    headline: 'Real-Time Incident Severity Triage & Resource Dispatch Grid',
    description:
      'AI-powered disaster response platform that coordinates rescue operations, detects incident severity in real-time, and connects affected citizens with life-saving resources through low-latency telemetry.',
    metrics: 'Real-Time Triage • Geospatial Mapping • Low-Latency WebSocket Stream',
    tags: ['ResQNet', 'Next.js', 'Node.js', 'WebSockets', 'PostgreSQL', 'Geospatial AI'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/resqnet',
    status: 'Shipped System',
  },
  {
    icon: Cpu,
    category: 'Local AI & Server Infrastructure',
    domainKey: 'security',
    title: 'Local LLM Lab & 24/7 Dedicated Server Grid',
    headline: 'Self-Hosted Model Benchmarking, Cloudflare Tunnels & Microservice Nodes',
    description:
      'Dedicated private server infrastructure and local model laboratory. Operates Ollama, Qwen, Mistral, and Hermes models for bug-bounty security research alongside a 24/7 cluster hosting PostgreSQL, Redis, Cloudflare Tunnels, and background worker queues.',
    metrics: 'Ollama Lab • 24/7 Infrastructure • Cloudflare Tunnels • Worker Queues',
    tags: ['Local LLMs', 'PostgreSQL', 'Redis', 'Cloudflare Tunnels', 'Linux Server'],
    github: 'https://github.com/ashokwebs',
    status: 'Live Infrastructure',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'quant' | 'hackathon' | 'security'>('all')

  const filteredSystems =
    activeFilter === 'all'
      ? systems
      : systems.filter((s) => s.domainKey === activeFilter)

  return (
    <section id="projects" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>03 // 40+ Master Architectures</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Flagship Systems &amp; R&amp;D
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 font-light">
                Engineering intelligence platforms, MCP discovery search engines, quantitative ML trading systems, and autonomous agent swarms engineered across 50+ global hackathons and venture mandates.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <a
                href="https://devpost.com/ashokashishms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all"
              >
                <DevpostIcon size={14} />
                <span>Devpost</span>
              </a>
              <a
                href="https://github.com/ashokwebs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all"
              >
                <GitHubIcon size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2.5 border-b border-white/[0.08] -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {[
              { key: 'all', label: 'All Architectures (40+)' },
              { key: 'ai', label: 'Engineering AI & MCP (Norveth / OSPRED)' },
              { key: 'quant', label: 'Quantitative & ML (QROS)' },
              { key: 'hackathon', label: 'Hackathons (Google Cloud, Qwen)' },
              { key: 'security', label: 'Security & FinTech (Bank of India, IWCIS)' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 active:scale-95 touch-manipulation ${
                  activeFilter === tab.key
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredSystems.map((system) => {
              const Icon = system.icon
              return (
                <article
                  key={system.title}
                  className="glass-card-interactive p-5 sm:p-7 md:p-9 flex flex-col justify-between group border border-white/[0.08]"
                >
                  <div className="space-y-5 sm:space-y-6">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1] group-hover:bg-white group-hover:text-black transition-colors duration-300">
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                          {system.category}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-emerald-400 border border-white/[0.08]">
                        {system.status}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {system.title}
                      </h3>
                      <div className="text-xs font-mono text-emerald-400 font-medium leading-snug">
                        {system.headline}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-1">
                        {system.description}
                      </p>
                    </div>

                    {/* Architectural Highlights */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>{system.metrics}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {system.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.08]">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {system.liveUrl && (
                        <a
                          href={system.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <Globe size={14} />
                          <span>Live Site</span>
                        </a>
                      )}
                      {system.devpost && (
                        <a
                          href={system.devpost}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View Devpost submission for ${system.title}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white transition-colors"
                        >
                          <DevpostIcon size={14} />
                          <span>Devpost</span>
                        </a>
                      )}
                      <a
                        href={system.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Inspect source repository for ${system.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white transition-colors"
                      >
                        <GitHubIcon size={14} />
                        <span>Source</span>
                      </a>
                    </div>

                    <a
                      href={system.liveUrl || system.devpost || system.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-neutral-400 group-hover:border-white group-hover:text-white transition-all"
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
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-[1.5rem] bg-gradient-to-br from-neutral-900 via-[#111115] to-[#09090b] border border-white/[0.12] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3
                className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Looking for Sovereign AI Architecture or High-Frequency Quant Systems?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
                I partner with ambitious founders, quantitative trading teams, and engineering organizations to design multi-agent runtimes, MCP search grids, and low-latency platforms.
              </p>
            </div>

            <a
              href="#contact"
              className="px-6 py-3.5 bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors shrink-0 shadow-md"
            >
              Initiate Project Mandate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
