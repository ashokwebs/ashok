'use client'

import { useState } from 'react'
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Database, Activity, Globe, HeartPulse, BrainCircuit } from 'lucide-react'
import { GitHubIcon, DevpostIcon } from '@/components/social-icons'

const systems = [
  {
    icon: BrainCircuit,
    category: 'Autonomous Multi-Agent',
    domainKey: 'ai',
    title: 'The Vector / Vector AI Command Center',
    headline: 'Autonomous Digital C-Suite & Startup Architecture Engine',
    description:
      'Multi-agent AI executive council (CEO, CTO, CMO) that autonomously turns concepts into startups in seconds. Generates complete business plans, distributed tech architectures, and financial models simultaneously with cross-agent consensus.',
    metrics: 'Multi-Agent Consensus • Instant Spec Generation • Cross-Agent Memory',
    tags: ['Multi-Agent Swarms', 'Python', 'LangChain', 'FastAPI', 'Next.js 16'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/the_vector',
  },
  {
    icon: Database,
    category: 'Enterprise Intelligence',
    domainKey: 'enterprise',
    title: 'CompanyBrain_AI',
    headline: 'Autonomous AI Executive & Enterprise Knowledge Fabric',
    description:
      'Autonomous enterprise intelligence kernel that connects the dots between contracts, financials, and roadmaps to eliminate organizational blind spots and automate strategic decision flows.',
    metrics: 'Contract Parsing • Financial Data Fusion • Zero-Drift RAG',
    tags: ['Vector Search', 'Python', 'FastAPI', 'PostgreSQL', 'LangChain'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/companybrain_ai',
  },
  {
    icon: Cpu,
    category: 'Neural Memory & Agents',
    domainKey: 'ai',
    title: 'Qwen Chaos MemoryAgent',
    headline: 'Self-Persistent Neural Agent with Cross-Session Recall',
    description:
      'Interactive, AI-built MemoryAgent that IS its own memory. Engineered for the Qwen Global Hackathon to prove cross-session recall and state persistence through a high-frequency live interactive experience.',
    metrics: 'Qwen LLM • Cross-Session Recall • Neural State Persistence',
    tags: ['Qwen Models', 'Vector Persistence', 'Python', 'FastAPI', 'Next.js'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/qwen-chaos',
  },
  {
    icon: Activity,
    category: 'Crisis & Geospatial AI',
    domainKey: 'enterprise',
    title: 'ResQNet Disaster Response Grid',
    headline: 'Real-Time AI Incident Severity & Resource Orchestration',
    description:
      'AI-powered disaster response platform that coordinates rescue operations, detects incident severity in real-time, and connects affected citizens with life-saving resources through low-latency telemetry.',
    metrics: 'Real-Time Triage • Geospatial Mapping • High-Availability Stream',
    tags: ['Next.js', 'Node.js', 'WebSockets', 'PostgreSQL', 'Geospatial AI'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/resqnet',
  },
  {
    icon: Layers,
    category: 'Market Intelligence',
    domainKey: 'enterprise',
    title: 'LaunchLens Multi-Model Due Diligence',
    headline: 'Automated Market Validation & VC Risk Analysis',
    description:
      'Multi-model AI platform providing instant market validation, competitive risk surface analysis, and due diligence for founders and venture capital firms before committing capital.',
    metrics: 'Multi-Model Synthesis • VC Due Diligence • Market Sizing',
    tags: ['Multi-LLM Synthesis', 'Python', 'FastAPI', 'Next.js 16'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/launchlens',
  },
  {
    icon: ShieldCheck,
    category: 'Cybersecurity',
    domainKey: 'security',
    title: 'OSPRED Autonomous Security Engine',
    headline: 'Proactive Threat Surface & Vulnerability Scanner',
    description:
      'AI-assisted cybersecurity platform engineered for automated attack-surface mapping, vulnerability scanning, threat intelligence synthesis, and zero-trust Linux server hardening.',
    metrics: 'Attack Surface Mapping • Automated Hardening • CVE Synthesis',
    tags: ['Python', 'FastAPI', 'Docker', 'Security Research', 'Linux'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/ashokashishms',
  },
  {
    icon: Globe,
    category: 'Distributed Ledgers',
    domainKey: 'web3',
    title: 'ShadowForge On-Chain Intelligence',
    headline: 'Heuristic Pattern Recognition & Smart Contract Auditing',
    description:
      'Distributed ledger intelligence engine executing real-time heuristic pattern recognition, smart contract security audits, and cryptographic anomaly detection across EVM chains.',
    metrics: 'Heuristic Detection • Contract Auditing • EVM Parsing',
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Web3.js', 'Solidity'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/ashokashishms',
  },
  {
    icon: HeartPulse,
    category: 'Clinical Diagnostic AI',
    domainKey: 'enterprise',
    title: 'TriageAI & CareCompass AI',
    headline: 'Clinical-Grade Emergency Navigation & Specialist Routing',
    description:
      'Intelligent healthcare navigation and clinical triage platform that analyzes acute symptoms, detects emergency thresholds, and routes patients to the right medical specialist with clinical reasoning.',
    metrics: 'Clinical Triage • Emergency Detection • Specialist Routing',
    tags: ['Clinical Graph', 'Python', 'FastAPI', 'Next.js', 'Medical RAG'],
    github: 'https://github.com/ashokwebs',
    devpost: 'https://devpost.com/software/carecompass-ai',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'enterprise' | 'security' | 'web3'>('all')

  const filteredSystems =
    activeFilter === 'all'
      ? systems
      : systems.filter((s) => s.domainKey === activeFilter)

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>03 // 22+ Shipped Architectures</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Flagship Systems
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 font-light">
                Mission-critical software platforms, autonomous multi-agent swarms, and distributed infrastructure engineered across 31 global hackathons and venture mandates.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <a
                href="https://devpost.com/ashokashishms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all"
              >
                <DevpostIcon size={14} />
                <span>Devpost (22 Projects)</span>
              </a>
              <a
                href="https://github.com/ashokwebs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all"
              >
                <GitHubIcon size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/[0.08]">
            {[
              { key: 'all', label: 'All Architectures (22+)' },
              { key: 'ai', label: 'Autonomous AI & Swarms' },
              { key: 'enterprise', label: 'Enterprise, Health & Telemetry' },
              { key: 'security', label: 'Cybersecurity (OSPRED)' },
              { key: 'web3', label: 'Distributed Ledgers' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 ${
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSystems.map((system) => {
              const Icon = system.icon
              return (
                <article
                  key={system.title}
                  className="glass-card-interactive p-7 sm:p-9 flex flex-col justify-between group border border-white/[0.08]"
                >
                  <div className="space-y-6">
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
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
                        Production Ready
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2.5">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {system.title}
                      </h3>
                      <div className="text-xs font-mono text-emerald-400">
                        {system.headline}
                      </div>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed pt-1">
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
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.08]">
                    <div className="flex items-center gap-4">
                      <a
                        href={system.devpost || 'https://devpost.com/ashokashishms/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View Devpost submission for ${system.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white transition-colors"
                      >
                        <DevpostIcon size={14} />
                        <span>Devpost</span>
                      </a>
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
                      href={system.devpost || system.github}
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
          <div className="p-8 sm:p-10 rounded-[1.5rem] bg-gradient-to-br from-neutral-900 via-[#111115] to-[#09090b] border border-white/[0.12] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
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
