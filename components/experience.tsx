'use client'

export default function Experience() {
  const experiences = [
    {
      role: 'Founder & Systems Architect — Norveth',
      period: '2024 — Present',
      description:
        'Building an engineering-first technology initiative focused on intelligent software, AI automation platforms, developer infrastructure, and scalable digital products. The long-term vision: production-grade AI systems and enterprise platforms that solve real-world engineering problems.',
    },
    {
      role: 'Independent Full Stack Developer',
      period: '2024 — Present',
      description:
        'Delivering full-stack web applications, backend APIs, scalable database designs, and AI-powered automation workflows for clients across multiple domains — from SaaS platforms to developer tooling.',
    },
    {
      role: 'Technical Researcher',
      period: '2023 — Present',
      description:
        'Deep research across AI and multi-agent systems, distributed systems, cybersecurity, Web3 architecture, and backend infrastructure.',
    },
    {
      role: 'Technical Writer',
      period: 'Ongoing',
      description:
        'Writing technical notes, engineering essays, software documentation, and long-form research on modern software engineering.',
    },
  ]

  const activities = [
    'Google Agentic AI Hackathon Participant',
    'Slack AI Hackathon Participant',
    'Qwen Hackathon Participant',
    'Bank of India Hackathon Participant',
    'Open Source Contributor',
    'Technical Writer & Content Creator',
  ]

  const interests = [
    'AI Agents & Multi-Agent Systems',
    'Distributed Systems Architecture',
    'Cloud-Native Development',
    'Applied Cryptography',
    'Autonomous Workflows',
    'System Design & Optimization',
  ]

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {/* Experience Timeline */}
          <div className="space-y-12">
            <h2 
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="pb-8 border-b border-border last:border-b-0 animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 
                        className="text-2xl font-bold text-foreground"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {exp.role}
                      </h3>
                      <span className="text-sm text-muted-foreground font-light whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Achievements */}
          <div className="space-y-12">
            <h3 
              className="text-3xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Activities &amp; Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="p-5 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-sm text-foreground font-light">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Interests */}
          <div className="space-y-12">
            <h3 
              className="text-3xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Technical Interests
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-5 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <p className="text-sm text-foreground font-light">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
