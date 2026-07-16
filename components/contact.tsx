'use client'

import { Briefcase, Mail, MapPin } from 'lucide-react'
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
  DevpostIcon,
} from '@/components/social-icons'

const socials = [
  { label: 'GitHub', href: 'https://github.com/ashokwebs', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashok-raj-p-1b8539317/', Icon: LinkedInIcon },
  { label: 'X (Twitter)', href: 'https://x.com/ashokfounds', Icon: XIcon },
  { label: 'Instagram', href: 'https://instagram.com/_ashok.dev', Icon: InstagramIcon },
  { label: 'Devpost', href: 'https://devpost.com/ashokashishms/', Icon: DevpostIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/ashokpasala.dev', Icon: FacebookIcon },
]

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:ashokashishms@gmail.com"
              aria-label="Send an email to Ashok Pasala"
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

            {/* Business / Norveth */}
            <a
              href="mailto:founder@norveth.app"
              aria-label="Email Ashok Pasala at Norveth for business enquiries"
              className="group p-8 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300 block focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              style={{ animationDelay: '100ms' }}
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Briefcase className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Business
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    founder@norveth.app
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              className="group p-8 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300 block"
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
                    Andhra Pradesh, India &mdash; working with clients worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-border space-y-8">
            <h3
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Elsewhere
            </h3>
            <div className="flex flex-wrap gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ashok Pasala on ${label}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
                >
                  <Icon size={20} className="text-foreground" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
