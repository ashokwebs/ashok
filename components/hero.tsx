'use client'

import { ChevronDown, ArrowUpRight, Terminal, FileText } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon, DevpostIcon } from '@/components/social-icons'

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-[#09090b]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] rounded-full bg-white/[0.03] blur-[100px] sm:blur-[140px] animate-gentle-glow" />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-neutral-800/[0.15] blur-[120px] sm:blur-[160px] animate-gentle-glow"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 sm:space-y-10 animate-fade-in text-center">
          {/* Founder Status Badge */}
          <div className="flex justify-center">
            <div className="badge-founder animate-slide-in-up flex-wrap justify-center text-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 max-w-full">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white/95 text-[11px] sm:text-xs">Founder @ Varellen, Norveth &amp; OSPRED</span>
              <span className="text-white/20 font-normal hidden xs:inline">•</span>
              <span className="text-neutral-400 font-mono text-[10px] sm:text-[11px]">50+ Hackathons • 40+ Architectures</span>
            </div>
          </div>

          {/* Monumental Name & Title */}
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-metallic break-words"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Ashok Pasala
              <span className="sr-only">
                {' '}
                — Founder of Varellen Technologies &amp; Norveth | AI &amp; Quantitative Systems Architect
              </span>
            </h1>

            <p className="text-base sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-tight max-w-3xl mx-auto leading-snug px-2">
              Architecting <span className="font-semibold text-white">Autonomous AI Infrastructure</span>, Quant ML Trading Engines &amp; Sovereign Systems.
            </p>

            <p className="text-xs sm:text-base text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed px-2">
              Founder &amp; CEO of <strong className="font-medium text-neutral-200">Varellen Technologies</strong>, Architect of <strong className="font-medium text-neutral-200">Norveth</strong> (norveth.app), <strong className="font-medium text-neutral-200">OSPRED</strong>, and <strong className="font-medium text-neutral-200">QROS</strong>. Builder of 40+ shipped architectures across 50+ hackathons (Google Cloud, Bank of India, Qwen, SanDisk).
            </p>
          </div>

          {/* High-Leverage Actions */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-stretch sm:items-center pt-2 max-w-sm sm:max-w-none mx-auto w-full">
            <button
              onClick={() => scrollTo('projects')}
              aria-label="Explore Ashok Pasala's flagship software systems"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 active:scale-[0.98] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Master Systems</span>
              <ArrowUpRight size={14} />
            </button>

            <a
              href="/resume"
              aria-label="View Ashok Pasala's executive architecture resume"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.25] active:scale-[0.98] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              <span>Executive Spec / Resume</span>
            </a>

            <button
              onClick={() => scrollTo('console')}
              aria-label="Launch interactive developer CLI console"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.25] active:scale-[0.98] transition-all text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal size={14} />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Key Authority Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8 max-w-4xl mx-auto border-t border-white/[0.08]">
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-0.5 sm:space-y-1">
              <div
                className="text-xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                50+
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Hackathons &bull; Global
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-0.5 sm:space-y-1">
              <div
                className="text-xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                40+
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Shipped Architectures
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-0.5 sm:space-y-1">
              <div
                className="text-xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Varellen
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Founder &amp; CEO
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all text-center space-y-0.5 sm:space-y-1">
              <div
                className="text-xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Norveth
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                Founder &amp; Architect
              </div>
            </div>
          </div>

          {/* Social Profiles & Scroll Down Indicator */}
          <div className="flex flex-col items-center gap-5 sm:gap-6 pt-1 sm:pt-2">
            <div className="flex items-center gap-4 sm:gap-5">
              <a
                href="https://github.com/ashokwebs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on GitHub"
                className="p-2.5 text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all rounded-full touch-manipulation"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://devpost.com/ashokashishms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on Devpost"
                className="p-2.5 text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all rounded-full touch-manipulation"
              >
                <DevpostIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashok-raj-p-1b8539317/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on LinkedIn"
                className="p-2.5 text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all rounded-full touch-manipulation"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="https://x.com/ashokfounds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashok Pasala on X (Twitter)"
                className="p-2.5 text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all rounded-full touch-manipulation"
              >
                <XIcon size={20} />
              </a>
            </div>

            <button
              onClick={() => scrollTo('about')}
              aria-label="Scroll down to Founder Thesis"
              className="text-neutral-500 hover:text-white transition-colors animate-subtle-float cursor-pointer p-2"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
