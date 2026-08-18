'use client'

import { ChevronDown, ArrowUpRight, Terminal, FileText } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/social-icons'

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-background pointer-events-none">
        <div className="absolute top-[-8%] right-[-6%] w-[550px] h-[550px] rounded-full bg-slate-100/80 blur-[120px] animate-gentle-glow" />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[650px] h-[650px] rounded-full bg-neutral-100/70 blur-[140px] animate-gentle-glow"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-10 animate-fade-in text-center">
          {/* Founder Status Badge */}
          <div className="flex justify-center">
            <div className="badge-founder animate-slide-in-up">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Founder @ Varellen Technologies &amp; Norveth</span>
              <span className="text-black/30 font-normal">•</span>
              <span className="text-muted-foreground lowercase font-normal">autonomous ai</span>
            </div>
          </div>

          {/* Monumental Name & Title */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1
              className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Ashok Pasala
              <span className="sr-only">
                {' '}
                — Founder of Varellen Technologies &amp; Norveth
              </span>
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl font-light text-foreground/90 tracking-tight max-w-3xl mx-auto leading-snug">
              Architecting <span className="font-semibold text-foreground">Autonomous AI Infrastructure</span>, Multi-Agent Orchestration &amp; High-Scale Distributed Platforms.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Founder &amp; CEO of <strong className="font-medium text-foreground">Varellen Technologies</strong> and Systems Architect at <strong className="font-medium text-foreground">Norveth</strong>. Engineering sovereign AI runtimes, mission-critical backends, and deterministic automation systems from first principles.
            </p>
          </div>

          {/* High-Leverage Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => scrollTo('projects')}
              aria-label="Explore Ashok Pasala's flagship software systems"
              className="px-8 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Systems</span>
              <ArrowUpRight size={14} />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashok Pasala's executive architecture resume"
              className="px-6 py-3.5 glass text-foreground font-medium rounded-full hover:bg-black/[0.04] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              <span>Resume / Spec</span>
            </a>

            <button
              onClick={() => scrollTo('console')}
              aria-label="Launch interactive developer CLI console"
              className="px-6 py-3.5 glass text-foreground font-medium rounded-full hover:bg-black/[0.04] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal size={14} />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Key Authority Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto border-t border-border/70">
            <div className="p-4 rounded-2xl bg-black/[0.015] border border-black/[0.04] text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                30+
              </div>
              <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                Production Systems
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.015] border border-black/[0.04] text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Varellen
              </div>
              <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                Founder &amp; CEO
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.015] border border-black/[0.04] text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Norveth
              </div>
              <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                Founder &amp; Architect
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.015] border border-black/[0.04] text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Global
              </div>
              <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                Advisory &amp; Scale
              </div>
            </div>
          </div>

          {/* Social Profiles & Scroll Down Indicator */}
          <div className="flex flex-col items-center gap-6 pt-2">
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/ashokwebs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on GitHub"
                className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all rounded-full"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashok-raj-p-1b8539317/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on LinkedIn"
                className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all rounded-full"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="https://x.com/ashokfounds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on X (Twitter)"
                className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all rounded-full"
              >
                <XIcon size={20} />
              </a>
            </div>

            <button
              onClick={() => scrollTo('about')}
              aria-label="Scroll down to Founder Thesis"
              className="text-muted-foreground/60 hover:text-foreground transition-colors animate-subtle-float cursor-pointer"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
