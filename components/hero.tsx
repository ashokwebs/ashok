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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-slate-100/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-slate-50/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 animate-fade-in">
          {/* Name - Premium display */}
          <div className="text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-800 mb-4 animate-slide-in-up shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-foreground text-white font-medium rounded-2xl hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base shadow-sm hover:shadow-md"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-border text-foreground font-medium rounded-2xl hover:bg-slate-50 transition-all duration-300 text-sm sm:text-base"
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
