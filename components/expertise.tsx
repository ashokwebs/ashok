'use client'

import { Zap, Code2, Network, Cpu, Shield, Blocks } from 'lucide-react'

const expertise = [
  {
    icon: Zap,
    title: 'Artificial Intelligence',
    description: 'AI Agents, Multi-Agent Systems, LLM Applications, RAG, and intelligent automation',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Modern web applications with React, Next.js, TypeScript, and cutting-edge frameworks',
  },
  {
    icon: Cpu,
    title: 'Backend Engineering',
    description: 'Scalable APIs, microservices, real-time systems, and robust server architecture',
  },
  {
    icon: Network,
    title: 'DevOps & Infrastructure',
    description: 'Cloud infrastructure, containerization, CI/CD pipelines, and scalable deployments',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Security-first development, ethical hacking, system hardening, and vulnerability assessment',
  },
  {
    icon: Blocks,
    title: 'Blockchain & Web3',
    description: 'Smart contracts, DeFi protocols, and decentralized architecture design',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Heading */}
          <div className="space-y-6 max-w-2xl">
            <h2 
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Core Expertise
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Specialized knowledge across multiple domains, from AI systems to cloud infrastructure.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className="group p-8 bg-white border border-border rounded-3xl hover:border-foreground/20 hover:shadow-md transition-all duration-300 animate-slide-in-up"
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                      <Icon size={24} className="text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                      <h3 
                        className="text-lg font-bold text-foreground"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {item.description}
                      </p>
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
