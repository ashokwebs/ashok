'use client'

import Image from 'next/image'
import { GraduationCap, MapPin } from 'lucide-react'

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
              Engineer, founder, and lifelong learner — building systems, not just software.
            </p>
          </div>

          {/* Photo + Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 animate-slide-in-up">
              <div className="relative max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-[1.5rem] overflow-hidden glass-card">
                <Image
                  src="/ashok.jpeg"
                  alt="Ashok Pasala — Full Stack Developer and AI Systems Engineer, founder of Norveth"
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed font-light">
                I&apos;m Ashok Pasala, a Computer Science student at VIT-AP University and the founder of Norveth. I build production-ready software — from full-stack web applications and backend platforms to AI-powered automation systems and multi-agent orchestration frameworks.
              </p>
              <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed font-light">
                My work focuses on designing systems that are scalable, maintainable, secure, and automation-first. I enjoy solving complex engineering problems by combining software architecture, artificial intelligence, cloud infrastructure, and developer tooling.
              </p>
              <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed font-light">
                Beyond software engineering, I actively research cybersecurity, distributed systems, Web3 architecture, and quantitative finance. I believe the future belongs to engineers who understand multiple domains deeply and can connect them into intelligent systems.
              </p>

              {/* Education & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 glass-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <GraduationCap size={20} className="text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground" style={{ fontFamily: 'var(--font-syne)' }}>
                        Education
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        B.Tech, Computer Science &amp; Engineering
                        <br />
                        VIT-AP University &mdash; Class of 2028
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 glass-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground" style={{ fontFamily: 'var(--font-syne)' }}>
                        Based In
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Andhra Pradesh, India
                        <br />
                        Working with clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="space-y-2 animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
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
        </div>
      </div>
    </section>
  )
}
