'use client'

import { Trophy } from 'lucide-react'

const milestones = [
  {
    role: 'Founder & CEO',
    organization: 'Varellen Technologies',
    domain: 'Enterprise Systems & Digital Platforms',
    period: '2024 — Present',
    badge: 'Flagship Enterprise',
    description:
      'Guiding venture strategy, high-performance digital platform architecture, and enterprise software engineering at Varellen Technologies. Leading development of scalable systems, closed-loop AI automation frameworks, and resilient cloud architectures.',
    tags: ['Enterprise Software', 'Scalable Systems', 'AI Automation', 'Cloud Architecture', 'TypeScript', 'Python'],
  },
  {
    role: 'Founder & Systems Architect',
    organization: 'Norveth',
    domain: 'norveth.app',
    period: '2024 — Present',
    badge: 'Engineering Intelligence Platform',
    description:
      'Architected Norveth from line zero—an AI-powered website engineering intelligence and dynamic crawling platform utilizing Playwright headless execution, automated OWASP Top 10 security scanning, Model Context Protocol (MCP) integrations, and developer CLI tooling. Engineered distributed scan workers and an Engineering Knowledge Graph reasoning layer.',
    tags: ['Playwright', 'Model Context Protocol (MCP)', 'OWASP Top 10', 'Engineering Knowledge Graph', 'FastAPI', 'Next.js'],
  },
  {
    role: 'Creator & Systems Architect',
    organization: 'OSPRED & Yaltan',
    domain: 'Search & MCP Discovery',
    period: '2024 — Present',
    badge: 'Discovery Platform',
    description:
      'Architected OSPRED—the discovery and search engine for AI agent capabilities, Model Context Protocol (MCP) servers, and reusable skills. Engineered the Yaltan scraping and extraction pipeline, the Canonical Capability Schema, and an automated trust & security verification system.',
    tags: ['OSPRED', 'Yaltan Pipeline', 'MCP Discovery', 'Canonical Schema', 'Trust & Verification', 'FastAPI'],
  },
  {
    role: 'Quantitative Systems Architect',
    organization: 'QROS Quant Research',
    domain: 'Polymarket & ML Trading',
    period: '2024 — Present',
    badge: 'Quantitative Trading',
    description:
      'Engineered QROS—a high-frequency quantitative research and algorithmic trading platform targeting Polymarket BTC 5-minute prediction markets. Ingests Binance 1-second streaming ticks, trains LightGBM volatility and strike prediction models, and executes backtested paper trading and MM-1 market-making strategies.',
    tags: ['QROS', 'Polymarket 5-Min', 'Binance 1s Stream', 'LightGBM Models', 'Volatility Forecasting', 'MM-1 Strategy'],
  },
  {
    role: 'Multi-Agent Architect & Hackathon Competitor',
    organization: '50+ Global Hackathons & Competitions',
    domain: 'Devpost: ashokashishms',
    period: '2024 — Present',
    badge: '50+ Hackathons • 40+ Architectures',
    description:
      'Shipped 40+ production-grade AI platforms, multi-agent swarms, and low-level systems across 50+ global hackathons. Flagship builds include SlackMind (Google Cloud Rapid Agent), Mule Account Detection (IIT Hyderabad & Bank of India), IWCIS (SanDisk), Qwen Chaos (Qwen Global), and Vector AI (Autonomous Digital C-Suite).',
    tags: ['SlackMind', 'Mule Detection', 'IWCIS SanDisk', 'The Vector', 'CompanyBrain', 'Qwen Chaos', 'ResQNet'],
  },
  {
    role: 'Computer Science & Distributed Systems',
    organization: 'VIT-AP University',
    domain: 'Academic Foundation',
    period: '2024 — 2028',
    badge: 'Academic Core',
    description:
      'Theoretical grounding and rigorous coursework in Advanced Algorithms, Operating Systems Internals, Distributed Systems, Computer Networks, Database Architecture, and Machine Learning.',
    tags: ['Distributed Systems', 'Operating Systems Internals', 'Algorithms & Complexity', 'Machine Learning'],
  },
]

const hackathons = [
  { name: 'Google Cloud Rapid Agent Hackathon', project: 'SlackMind', focus: 'Gemini, Vertex AI Data Store & MCP in Slack' },
  { name: 'IIT Hyderabad + Bank of India Hackathon', project: 'Mule Account Detection', focus: 'Transaction Anomaly Detection & Graph ML' },
  { name: 'SanDisk Storage Hackathon', project: 'IWCIS Storage Container', focus: 'exFAT File-System Internals & Storage I/O' },
  { name: 'Qwen Global Hackathon', project: 'Qwen Chaos', focus: 'Self-Persistent Neural MemoryAgent' },
  { name: 'Google Agentic AI Challenge', project: 'The Vector / Vector AI', focus: 'Autonomous C-Suite Multi-Agent Swarms' },
  { name: 'Global Disaster Tech Hackathon', project: 'ResQNet', focus: 'Real-Time Incident Triage & Live Stream' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>07 // Trajectory &amp; Leadership</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Venture &amp; Systems Trajectory
            </h2>
            <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed">
              From founding Varellen Technologies, Norveth, and OSPRED to engineering 40+ shipped architectures across 50+ global hackathons.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((item) => (
              <div
                key={item.role + item.organization}
                className="glass-card-interactive p-6 sm:p-9 space-y-5 sm:space-y-6 border border-white/[0.08]"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-lg sm:text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.role}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1]">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-neutral-400 flex items-center gap-2">
                      <span className="text-emerald-400 font-medium">{item.organization}</span>
                      <span>•</span>
                      <span>{item.domain}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 self-start sm:self-auto">
                    {item.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-base text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-white/[0.08]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons & Strategic Competitions */}
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-[1.5rem] glass-card space-y-6 sm:space-y-8 border border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Hackathon Track Record (50+ Global Competitions • 40+ Architectures)
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
                  Rapid engineering execution across international foundation model challenges, national FinTech initiatives, and low-level storage systems.
                </p>
              </div>
              <a
                href="https://devpost.com/ashokashishms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
              >
                <Trophy size={16} />
                <span>View Devpost Profile ↗</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {hackathons.map((hack) => (
                <div
                  key={hack.name}
                  className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-white/[0.2] transition-colors"
                >
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-emerald-400">
                    {hack.project}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {hack.name}
                  </div>
                  <p className="text-xs text-neutral-400 font-light">
                    {hack.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
