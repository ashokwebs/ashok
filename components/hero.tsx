'use client'

import { ChevronDown } from 'lucide-react'

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
          <div className="text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-4 animate-slide-in-up">
              <span className="flex h-2 w-2 rounded-full bg-foreground/40 animate-pulse"></span>
              Founder @ Norveth &mdash; Building AI Infrastructure &amp; Intelligent Software
            </div>
            <h1 
              className="text-8xl sm:text-9xl md:text-[10rem] font-bold tracking-tighter leading-none text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Ashok Pasala
            </h1>

            {/* Subtitle section */}
            <div className="space-y-6 pt-4">
              <p className="text-lg sm:text-2xl text-secondary-foreground font-light tracking-wide">
                Full Stack Developer &bull; AI Systems Engineer
              </p>
              <div className="space-y-1 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light pt-2">
                <p>Computer Science Student @ VIT-AP University</p>
                <p>Founder of Norveth</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              aria-label="View Ashok Pasala's Full Stack AI Projects"
              className="px-8 py-3.5 bg-foreground text-background font-medium rounded-[1.25rem] hover:opacity-90 transition-all duration-300 text-sm sm:text-base shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              aria-label="Contact Ashok Pasala for consulting or freelance work"
              className="px-8 py-3.5 glass text-foreground font-medium rounded-[1.25rem] hover:bg-slate-50/50 transition-all duration-300 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll indicator - subtle animation */}
          <div className="flex justify-center pt-12 animate-subtle-float">
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
