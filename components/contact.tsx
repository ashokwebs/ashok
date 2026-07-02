'use client'

import { Mail, MapPin, Code2, Share2 } from 'lucide-react'

const XIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const FbIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Available for freelance projects, technical consulting, startup collaborations, and open-source contributions. If you&apos;re building something ambitious, I&apos;d love to hear about it.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <a
              href="mailto:ashokashishms@gmail.com"
              aria-label="Send an email to Ashok Raj Pasala"
              className="group p-8 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300 block focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Mail className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    ashokashishms@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/place/Andhra+Pradesh,+India"
              aria-label="View Ashok Pasala's Location in India"
              className="group p-8 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300 block focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              style={{ animationDelay: '200ms' }}
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <MapPin className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    India
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-border space-y-8">
            <h3 
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Follow
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ashokwebs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              >
                <Code2 size={20} className="text-foreground" strokeWidth={1.5} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ashok-raj-p-1b8539317/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              >
                <Share2 size={20} className="text-foreground" strokeWidth={1.5} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/_ashok.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              >
                <Share2 size={20} className="text-foreground" strokeWidth={1.5} />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://x.com/ashokfounds"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              >
                <XIcon size={20} className="text-foreground" />
                <span className="text-sm font-medium">X (Twitter)</span>
              </a>
              <a
                href="https://www.facebook.com/ashokpasala.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              >
                <FbIcon size={20} className="text-foreground" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
