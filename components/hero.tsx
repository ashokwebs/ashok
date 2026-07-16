'use client'

import { ChevronDown } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/social-icons'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-neutral-100/80 blur-[100px] animate-gentle-glow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-slate-50/80 blur-[120px] animate-gentle-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 animate-fade-in">
          {/* Name - Premium display */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full glass text-xs sm:text-sm font-medium text-foreground/80 mb-2 animate-slide-in-up">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-500/80 animate-pulse"></span>
              <span className="sm:hidden">Founder @ Norveth &mdash; AI Infrastructure</span>
              <span className="hidden sm:inline">Founder @ Norveth &mdash; Building AI Infrastructure &amp; Intelligent Software</span>
            </div>
            <h1
              className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Ashok Pasala
              <span className="sr-only"> - Full Stack Developer & AI Systems Engineer</span>
            </h1>

            {/* Subtitle section */}
            <div className="space-y-5 pt-2">
              <p className="text-lg sm:text-2xl text-secondary-foreground font-light tracking-wide">
                Full Stack Developer &bull; AI Systems Engineer
              </p>
              <p className="text-base sm:text-lg text-muted-foreground font-light">
                Computer Science Student @ VIT-AP University
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light pt-1">
                I build intelligent systems, scalable software, autonomous AI workflows, and resilient backend infrastructure.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-6 max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => scrollToSection('projects')}
              aria-label="View Ashok Pasala's featured projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background font-medium rounded-[1.25rem] hover:opacity-90 transition-all duration-300 text-sm sm:text-base shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
            >
              View Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashok Pasala's resume as PDF"
              className="w-full sm:w-auto px-8 py-3.5 glass text-foreground font-medium rounded-[1.25rem] hover:bg-slate-50/50 transition-all duration-300 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none flex items-center justify-center"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              aria-label="Get in touch with Ashok Pasala"
              className="w-full sm:w-auto px-8 py-3.5 glass text-foreground font-medium rounded-[1.25rem] hover:bg-slate-50/50 transition-all duration-300 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
            >
              Get in Touch
            </button>
          </div>

          {/* Quick social links */}
          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://github.com/ashokwebs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashok Pasala on GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none rounded-sm"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-raj-p-1b8539317/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashok Pasala on LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none rounded-sm"
            >
              <LinkedInIcon size={22} />
            </a>
          </div>

          {/* Scroll indicator - subtle animation */}
          <div className="flex justify-center pt-8 animate-subtle-float">
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
