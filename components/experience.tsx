'use client'

import { Award, Trophy, Zap, Shield, Sparkles } from 'lucide-react'

const milestones = [
  {
    role: 'Founder & CEO',
    organization: 'Varellen Technologies',
    domain: 'Enterprise & Systems',
    period: '2024 — Present',
    badge: 'Flagship Enterprise',
    description:
      'Guiding venture strategy, high-performance digital platform architecture, and enterprise software engineering at Varellen Technologies. Leading development of scalable systems, AI automation frameworks, and resilient cloud architectures.',
    tags: ['Enterprise Software', 'Scalable Systems', 'AI Automation', 'Cloud Architecture', 'TypeScript', 'Python'],
  },
  {
    role: 'Founder & Systems Architect',
    organization: 'Norveth',
    domain: 'norveth.app',
    period: '2024 — Present',
    badge: 'AI Intelligence Platform',
    description:
      'Architected Norveth from line zero—an AI-powered website intelligence and automated code-level diagnostic platform utilizing real Chromium headless rendering, OWASP Top 10 security scanning, Model Context Protocol (MCP) integrations, and developer CLI tooling. Leading full-lifecycle engineering across distributed scan workers and deterministic AI analysis pipelines.',
    tags: ['Chromium Headless', 'Model Context Protocol (MCP)', 'OWASP Top 10', 'Distributed Workers', 'FastAPI', 'Next.js'],
  },
  {
    role: 'Multi-Agent Architect & Systems Engineer',
    organization: 'Global Hackathon Competitor (31 Hackathons)',
    domain: 'Devpost: ashokashishms',
    period: '2024 — Present',
    badge: '31 Hackathons • 22 Projects',
    description:
      'Shipped 22 production-grade AI platforms and software systems across 31 high-stakes global hackathons. Engineered breakthrough architectures including Vector AI (Autonomous C-Suite), CompanyBrain_AI (Enterprise Knowledge Engine), Qwen Chaos (MemoryAgent), ResQNet (Disaster Response Grid), and LaunchLens (Market Due Diligence).',
    tags: ['The Vector', 'CompanyBrain', 'Qwen Chaos', 'ResQNet', 'LaunchLens', 'SlackMind', 'Agent Momo'],
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
  { name: 'Qwen Global Hackathon', project: 'Qwen Chaos', focus: 'Self-Persistent MemoryAgent' },
  { name: 'Google Agentic AI Hackathon', project: 'The Vector / Vector AI', focus: 'Autonomous C-Suite Orchestration' },
  { name: 'Slack AI Hackathon', project: 'SlackMind', focus: 'Enterprise Agent Swarm Command' },
  { name: 'Global Disaster Tech', project: 'ResQNet', focus: 'Real-Time Incident Triage & Grid' },
  { name: 'Venture & Fintech Hackathon', project: 'LaunchLens & CompanyBrain', focus: 'Automated Due Diligence' },
  { name: 'Bank of India National Hackathon', project: 'SecureLedger', focus: 'FinTech & High-Frequency Security' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>07 // Trajectory &amp; Leadership</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Venture &amp; Hackathon Trajectory
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              From founding Varellen Technologies and Norveth to engineering 22+ shipped systems across 31 global hackathons.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((item) => (
              <div
                key={item.role + item.organization}
                className="glass-card-interactive p-7 sm:p-9 space-y-6 border border-white/[0.08]"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.role}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.1]">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-neutral-400 flex items-center gap-2">
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
                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.08]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons & Strategic Competitions */}
          <div className="p-8 sm:p-10 rounded-[1.5rem] glass-card space-y-8 border border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3
                  className="text-2xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Hackathon Track Record (31 Competitions • 22 Projects)
                </h3>
                <p className="text-sm text-neutral-400 font-light mt-1">
                  Rapid engineering execution across international AI hackathons, foundation model challenges, and enterprise platforms.
                </p>
              </div>
              <a
                href="https://devpost.com/ashokashishms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
              >
                <Trophy size={16} />
                <span>View Full Devpost Profile ↗</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hackathons.map((hack) => (
                <div
                  key={hack.name}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-white/[0.2] transition-colors"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    {hack.project}
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">
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
