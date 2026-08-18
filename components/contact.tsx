'use client'

import { useState } from 'react'
import { Mail, Briefcase, MapPin, Copy, Check, Send, Phone } from 'lucide-react'
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  DevpostIcon,
} from '@/components/social-icons'

const socials = [
  { label: 'GitHub', href: 'https://github.com/ashokwebs', handle: '@ashokwebs', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashok-raj-p-1b8539317/', handle: 'Ashok Raj P', Icon: LinkedInIcon },
  { label: 'X (Twitter)', href: 'https://x.com/ashokfounds', handle: '@ashokfounds', Icon: XIcon },
  { label: 'Instagram', href: 'https://instagram.com/_ashok.dev', handle: '@_ashok.dev', Icon: InstagramIcon },
  { label: 'Devpost', href: 'https://devpost.com/ashokashishms/', handle: 'ashokashishms', Icon: DevpostIcon },
]

export default function Contact() {
  const [copiedPrimary, setCopiedPrimary] = useState(false)
  const [copiedVenture, setCopiedVenture] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const copyToClipboard = (text: string, type: 'primary' | 'venture') => {
    navigator.clipboard.writeText(text)
    if (type === 'primary') {
      setCopiedPrimary(true)
      setTimeout(() => setCopiedPrimary(false), 2000)
    } else {
      setCopiedVenture(true)
      setTimeout(() => setCopiedVenture(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open mailto with prefilled form details
    const mailto = `mailto:ashokashishms@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Engineering Mandate / Venture Discussion'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Heading */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span>08 // Direct Communication</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Initiate Contact
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              Available for technical advisory, autonomous AI mandates, venture collaborations, and institutional systems engineering.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Direct Email */}
            <div className="glass-card p-7 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-foreground">
                  <Mail size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Primary Direct
                  </div>
                  <h3
                    className="text-lg font-bold text-foreground mt-0.5"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    ashokashishms@gmail.com
                  </h3>
                  <p className="text-xs text-muted-foreground font-light mt-1">
                    Direct personal inbox for technical discussions &amp; architecture advisory.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border/80">
                <a
                  href="mailto:ashokashishms@gmail.com"
                  className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard('ashokashishms@gmail.com', 'primary')}
                  className="p-2 rounded-lg border border-border/80 hover:bg-slate-50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Copy primary email"
                >
                  {copiedPrimary ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Norveth Venture / Business */}
            <div className="glass-card p-7 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-foreground">
                  <Briefcase size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Norveth Venture
                  </div>
                  <h3
                    className="text-lg font-bold text-foreground mt-0.5"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    founder@norveth.app
                  </h3>
                  <p className="text-xs text-muted-foreground font-light mt-1">
                    Enterprise partnerships, website intelligence platform &amp; venture inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border/80">
                <a
                  href="mailto:founder@norveth.app"
                  className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard('founder@norveth.app', 'venture')}
                  className="p-2 rounded-lg border border-border/80 hover:bg-slate-50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Copy Norveth founder email"
                >
                  {copiedVenture ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Location & Global Operations */}
            <div className="glass-card p-7 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-foreground">
                  <MapPin size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Global Base &amp; Location
                  </div>
                  <h3
                    className="text-lg font-bold text-foreground mt-0.5"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Andhra Pradesh, India
                  </h3>
                  <p className="text-xs text-muted-foreground font-light mt-1">
                    Operating remotely worldwide across US, Europe, and Asia-Pacific time zones.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/80 text-xs font-mono text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active for Strategic Engagements</span>
              </div>
            </div>
          </div>

          {/* Interactive Direct Message Form & Verified Profiles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 glass-card p-8 sm:p-10 space-y-6">
              <div className="space-y-1">
                <h3
                  className="text-2xl font-bold text-foreground tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Direct Message Dispatch
                </h3>
                <p className="text-xs font-mono text-muted-foreground">
                  Encrypted transmission directly to Ashok Pasala&apos;s executive triage queue.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                  <p className="font-semibold text-sm">Dispatched to Email Client.</p>
                  <p className="text-xs">
                    Your transmission has been forwarded. You can also reach out directly via{' '}
                    <strong>ashokashishms@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elon Musk"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-white/70 text-sm outline-none focus:border-foreground transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elon@x.com"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-white/70 text-sm outline-none focus:border-foreground transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Mandate / Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Autonomous Agent Architecture / Venture Advisory"
                      className="w-full px-4 py-3 rounded-xl border border-border/80 bg-white/70 text-sm outline-none focus:border-foreground transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Brief Specification / Inquiry
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline technical requirements, timeline, or venture collaboration parameters..."
                      className="w-full px-4 py-3 rounded-xl border border-border/80 bg-white/70 text-sm outline-none focus:border-foreground transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-foreground text-background font-medium rounded-xl text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Transmit Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Verified Social Profiles Grid */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-8 space-y-6">
                <div>
                  <h3
                    className="text-xl font-bold text-foreground tracking-tight"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Verified Identity Profiles
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    Canonical public profiles &amp; development repositories.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {socials.map(({ label, href, handle, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-white/60 hover:bg-white hover:border-black/30 hover:shadow-xs transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-foreground leading-tight">
                            {label}
                          </div>
                          <div className="text-[11px] font-mono text-muted-foreground">
                            {handle}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
