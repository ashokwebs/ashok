'use client'

import { Globe, Server, Bot, LayoutDashboard, Compass, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Full Stack Development',
    description: 'End-to-end web applications with React, Next.js, and TypeScript — from polished frontends to production deployments.',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Scalable REST and GraphQL APIs, authentication systems, database design, and microservice architectures.',
  },
  {
    icon: Bot,
    title: 'AI Automation & Agents',
    description: 'Custom AI agents, multi-agent workflows, RAG pipelines, and LLM-powered automation for real business processes.',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS & Dashboard Development',
    description: 'Analytics dashboards, admin panels, and complete SaaS products built for performance and maintainability.',
  },
  {
    icon: Compass,
    title: 'System Architecture & Consulting',
    description: 'Technical consulting on system design, scalability, security, and infrastructure decisions.',
  },
  {
    icon: Wrench,
    title: 'Developer Tooling & Prototyping',
    description: 'Internal tools, CLI utilities, integrations, and rapid prototypes to validate ideas quickly.',
  },
]

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Heading */}
          <div className="space-y-6 max-w-2xl">
            <h2
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Services
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Available for freelance projects, technical consulting, and long-term collaborations.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group p-8 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
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
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={scrollToContact}
              aria-label="Contact Ashok Pasala about a project"
              className="px-8 py-3.5 bg-foreground text-background font-medium rounded-[1.25rem] hover:opacity-90 transition-all duration-300 text-sm sm:text-base shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
