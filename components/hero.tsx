'use client'

import { ChevronDown, ArrowUpRight, Terminal, FileText, Award } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon, DevpostIcon } from '@/components/social-icons'

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090b]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[140px] animate-gentle-glow" />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[650px] h-[650px] rounded-full bg-neutral-800/[0.15] blur-[160px] animate-gentle-glow"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-10 animate-fade-in text-center">
          {/* Founder Status Badge */}
          <div className="flex justify-center">
            <div className="badge-founder animate-slide-in-up">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Founder @ Varellen Technologies &amp; Norveth</span>
              <span className="text-white/20 font-normal">•</span>
              <span className="text-neutral-400 font-mono text-[11px]">31 Hackathons • 22+ AI Systems</span>
            </div>
          </div>

          {/* Monumental Name & Title */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1
              className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none text-metallic"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Ashok Pasala
              <span className="sr-only">
                {' '}
                — Founder of Varellen Technologies &amp; Norveth | AI Systems Architect
              </span>
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-tight max-w-3xl mx-auto leading-snug">
              Architecting <span className="font-semibold text-white">Autonomous AI Infrastructure</span>, Multi-Agent Swarms &amp; High-Scale Platforms.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              Founder &amp; CEO of <strong className="font-medium text-neutral-200">Varellen Technologies</strong> and Systems Architect at <strong className="font-medium text-neutral-200">Norveth</strong>. Builder of 22+ shipped systems across 31 hackathons (Vector AI, CompanyBrain, Qwen Chaos, ResQNet).
            </p>
          </div>

          {/* High-Leverage Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => scrollTo('projects')}
              aria-label="Explore Ashok Pasala's flagship software systems"
              className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore 22+ Systems</span>
              <ArrowUpRight size={14} />
            </button>

            <a
              href="/resume"
              aria-label="View Ashok Pasala's executive architecture resume"
              className="px-6 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.25] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              <span>Resume / Spec</span>
            </a>

            <button
              onClick={() => scrollTo('console')}
              aria-label="Launch interactive developer CLI console"
              className="px-6 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.25] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal size={14} />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Key Authority Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto border-t border-white/[0.08]">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                31
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Hackathons &bull; Global
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                22+
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Shipped AI Systems
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Varellen
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Founder &amp; CEO
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Norveth
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Founder &amp; Architect
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
                className="p-2 text-neutral-400 hover:text-white hover:scale-110 transition-all rounded-full"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://devpost.com/ashokashishms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on Devpost (22 Projects, 31 Hackathons)"
                className="p-2 text-neutral-400 hover:text-white hover:scale-110 transition-all rounded-full"
              >
                <DevpostIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashok-raj-p-1b8539317/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on LinkedIn"
                className="p-2 text-neutral-400 hover:text-white hover:scale-110 transition-all rounded-full"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="https://x.com/ashokfounds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on X (Twitter)"
                className="p-2 text-neutral-400 hover:text-white hover:scale-110 transition-all rounded-full"
              >
                <XIcon size={20} />
              </a>
            </div>

            <button
              onClick={() => scrollTo('about')}
              aria-label="Scroll down to Founder Thesis"
              className="text-neutral-500 hover:text-white transition-colors animate-subtle-float cursor-pointer"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
