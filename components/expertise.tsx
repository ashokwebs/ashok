'use client'

import { Zap, Code2, Server, Network, Shield, Blocks } from 'lucide-react'

const domains = [
  {
    icon: Zap,
    title: 'Autonomous AI & Multi-Agent Swarms',
    subtitle: 'Runtimes, Orchestration & Memory',
    description:
      'Architecting collaborative multi-agent swarms with context routing, deterministic execution kernels, shared vector memory persistence, and tool validation. Deep expertise with LangChain, LlamaIndex, RAG pipelines, and embedding spaces.',
    capabilities: ['Multi-Agent Coordination', 'Dense Vector RAG', 'Tool Calling & Function Execution', 'Embedding Indexing'],
  },
  {
    icon: Server,
    title: 'Distributed Backends & Microservices',
    subtitle: 'High-Throughput Concurrency & APIs',
    description:
      'Engineering mission-critical server architectures, asynchronous event loops, and high-frequency WebSocket pipelines. Specializing in Python FastAPI, Node.js/TypeScript, Go, gRPC, and RESTful microservices.',
    capabilities: ['FastAPI & Node.js', 'WebSocket Clusters', 'gRPC & Microservices', 'High-Concurrency Event Loops'],
  },
  {
    icon: Code2,
    title: 'Full-Stack Sovereign Web Platforms',
    subtitle: 'Next.js 16, React 19 & Fluid UX',
    description:
      'Building ultra-responsive, accessible, and high-conversion web platforms with Next.js 16 (App Router), React 19, TypeScript, and modern CSS systems. Precision typography, fluid animations, and microsecond load times.',
    capabilities: ['Next.js 16 App Router', 'React 19 Server Components', 'TypeScript Type Safety', 'Pixel-Perfect Architecture'],
  },
  {
    icon: Network,
    title: 'DevOps & Hardened Infrastructure',
    subtitle: 'Containers, Orchestration & CI/CD',
    description:
      'Deploying resilient cloud infrastructure across AWS, Docker, and Kubernetes. Automated zero-downtime CI/CD pipelines, Nginx reverse proxies, Linux kernel tuning, and Terraform infrastructure as code.',
    capabilities: ['Docker & Kubernetes', 'Linux Kernel Hardening', 'GitHub Actions CI/CD', 'AWS & Nginx Optimization'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Threat Modeling',
    subtitle: 'Zero-Trust, Hardening & CVE Analysis',
    description:
      'Security-first engineering with proactive attack-surface discovery, automated vulnerability triage, ethical hacking, and cryptographic integrity checks across networks, APIs, and container runtimes.',
    capabilities: ['OWASP Top 10 Hardening', 'Vulnerability Assessment', 'Cryptographic Protocols', 'Zero-Trust Architecture'],
  },
  {
    icon: Blocks,
    title: 'Decentralized Ledgers & Web3',
    subtitle: 'Smart Contracts & On-Chain Analytics',
    description:
      'Designing EVM smart contracts, decentralized protocol logic, on-chain heuristic analytics, and DeFi portfolio trackers with Solidity, Web3.js, and cryptographic security auditing.',
    capabilities: ['Solidity Smart Contracts', 'EVM On-Chain Analytics', 'DeFi Protocol Mechanics', 'Cryptographic Ledger Parsing'],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative w-full py-24 sm:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span>03 // Technical Breadth</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              First-Principles Arsenal
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              Full-spectrum technical mastery spanning autonomous machine intelligence, low-latency distributed systems, and hardened cloud infrastructure.
            </p>
          </div>

          {/* Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => {
              const Icon = domain.icon
              return (
                <div
                  key={domain.title}
                  className="glass-card-interactive p-7 sm:p-8 flex flex-col justify-between"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3
                        className="text-xl font-bold text-foreground tracking-tight"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {domain.title}
                      </h3>
                      <div className="text-xs font-mono text-muted-foreground">
                        {domain.subtitle}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-6 mt-6 border-t border-border/80 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Core Vectors
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-foreground/80"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
