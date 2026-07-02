'use client'

export default function About() {
  const stats = [
    { number: '30+', label: 'Engineering Projects' },
    { number: 'Founder', label: 'of Norveth' },
    { number: 'Open Source', label: 'Contributor' },
    { number: 'AI Systems', label: 'Builder' },
  ]

  return (
    <section id="about" className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {/* Section heading */}
          <div className="space-y-6">
            <h2 
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight" 
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
              Computer Science Student @ VIT-AP University
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 animate-slide-in-up">
                <div 
                  className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground font-light">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* About paragraph */}
          <div className="max-w-3xl space-y-6">
            <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed font-light">
              I design full-stack applications, AI-powered automation systems, and scalable backend platforms. My interests span artificial intelligence, distributed systems, cybersecurity, and modern software architecture, with a focus on building practical products that solve real problems.
            </p>
            <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed font-light">
              As the founder of Norveth, I'm building intelligent software, automation platforms, and developer tools while contributing to open-source projects and continuously exploring emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
