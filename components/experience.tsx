'use client'

import { Briefcase, Terminal, Award, BookOpen, ArrowUpRight } from 'lucide-react'

const milestones = [
  {
    role: 'Founder & Systems Architect',
    organization: 'Norveth',
    domain: 'norveth.app',
    period: '2024 — Present',
    badge: 'Flagship Venture',
    description:
      'Architected Norveth from line zero—an AI-powered website intelligence and automated code-level diagnostic platform utilizing real Chromium headless rendering, OWASP Top 10 security scanning, Model Context Protocol (MCP) integrations, and developer CLI tooling. Leading full-lifecycle engineering across distributed scan workers and deterministic AI analysis pipelines.',
    tags: ['Chromium Headless', 'Model Context Protocol (MCP)', 'OWASP Top 10', 'Distributed Workers', 'FastAPI', 'Next.js'],
  },
  {
    role: 'Principal Systems & Full-Stack Architect',
    organization: 'Independent Technical Advisory',
    domain: 'Global Remote',
    period: '2024 — Present',
    badge: 'Advisory & Systems',
    description:
      'Delivering end-to-end distributed system architectures, high-concurrency backend APIs, custom multi-agent orchestration frameworks, and mission-critical database designs for international founders, high-growth startups, and technical clients.',
    tags: ['Autonomous AI Swarms', 'PostgreSQL & Redis', 'FastAPI & Node.js', 'System Hardening', 'Microservices'],
  },
  {
    role: 'Deep-Tech & Multi-Agent Researcher',
    organization: 'Systems Research Lab',
    domain: 'Open Source',
    period: '2023 — Present',
    badge: 'Research & R&D',
    description:
      'Conducting empirical research across autonomous agent convergence, context routing in large vector embeddings, distributed consensus fault tolerance, and proactive cyber threat intelligence synthesis (OSPRED framework).',
    tags: ['Multi-Agent Convergence', 'Vector Embedding Spaces', 'OSPRED Framework', 'Cryptographic Ledgers'],
  },
  {
    role: 'Computer Science & Distributed Systems',
    organization: 'VIT-AP University',
    domain: 'Academic Foundation',
    period: '2024 — 2028',
    badge: 'Academic Core',
    description:
      'Rigorous academic training and theoretical grounding in Advanced Algorithms, Operating Systems Internals, Distributed Systems, Computer Networks, Database Architecture, and Machine Learning.',
    tags: ['Distributed Systems', 'Operating Systems', 'Algorithms & Complexity', 'Machine Learning'],
  },
]

const hackathons = [
  { name: 'Google Agentic AI Hackathon', focus: 'Multi-Agent Autonomous Orchestration' },
  { name: 'Slack AI Hackathon', focus: 'Enterprise Workflow Automation & Bots' },
  { name: 'Qwen Global Hackathon', focus: 'Open-Weight LLM Fine-Tuning & RAG' },
  { name: 'Bank of India National Hackathon', focus: 'FinTech & High-Frequency Security' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span>04 // Trajectory &amp; Leadership</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Venture Trajectory
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              From founding deep-tech platforms to high-conviction engineering research and institutional advisory.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((item, idx) => (
              <div
                key={item.role + item.organization}
                className="glass-card-interactive p-7 sm:p-9 space-y-6"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-foreground tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.role}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-foreground/80 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                      <span className="text-foreground font-medium">{item.organization}</span>
                      <span>•</span>
                      <span>{item.domain}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-muted-foreground self-start sm:self-auto">
                    {item.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/80">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-white border border-border/80 text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons & Strategic Competitions */}
          <div className="p-8 sm:p-10 rounded-[1.5rem] glass-card space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3
                  className="text-2xl font-bold text-foreground tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Hackathon &amp; Innovation Engagements
                </h3>
                <p className="text-sm text-muted-foreground font-light mt-1">
                  Rapid engineering prototypes, high-intensity hackathons, and agentic AI competitions.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <Award size={16} />
                <span>Active Contributor</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hackathons.map((hack) => (
                <div
                  key={hack.name}
                  className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2 hover:border-black/30 transition-colors"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Participant
                  </div>
                  <div className="text-sm font-bold text-foreground leading-snug">
                    {hack.name}
                  </div>
                  <p className="text-xs text-muted-foreground font-light">
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
