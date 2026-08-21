'use client'

import { useState } from 'react'
import { Mail, Briefcase, MapPin, Copy, Check, Send } from 'lucide-react'
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
    <section id="contact" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#0c0d10] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Heading */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>10 // Direct Communication</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Initiate Contact
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Available for technical advisory, autonomous AI mandates, venture collaborations (Varellen Technologies &amp; Norveth), and institutional systems engineering.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Primary Direct Email */}
            <div className="glass-card p-5 sm:p-7 md:p-8 space-y-5 flex flex-col justify-between border border-white/[0.08]">
              <div className="space-y-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1]">
                  <Mail size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Primary Direct
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white mt-0.5 break-all sm:break-normal"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    ashokashishms@gmail.com
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Direct personal inbox for technical discussions &amp; architecture advisory.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                <a
                  href="mailto:ashokashishms@gmail.com"
                  className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard('ashokashishms@gmail.com', 'primary')}
                  className="p-2 rounded-lg border border-white/[0.1] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy primary email"
                >
                  {copiedPrimary ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Ventures / Institutional */}
            <div className="glass-card p-5 sm:p-7 md:p-8 space-y-5 flex flex-col justify-between border border-white/[0.08]">
              <div className="space-y-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1]">
                  <Briefcase size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Venture &amp; Enterprise
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white mt-0.5 break-all sm:break-normal"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    founder@norveth.app
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Varellen Technologies &amp; Norveth enterprise partnerships and venture inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                <a
                  href="mailto:founder@norveth.app"
                  className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard('founder@norveth.app', 'venture')}
                  className="p-2 rounded-lg border border-white/[0.1] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy founder email"
                >
                  {copiedVenture ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Location & Global Operations */}
            <div className="glass-card p-5 sm:p-7 md:p-8 space-y-5 flex flex-col justify-between border border-white/[0.08]">
              <div className="space-y-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] flex items-center justify-center text-white border border-white/[0.1]">
                  <MapPin size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Global Base &amp; Location
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white mt-0.5"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Andhra Pradesh, India
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Operating remotely worldwide across US, Europe, and Asia-Pacific time zones.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active for Strategic Engagements</span>
              </div>
            </div>
          </div>

          {/* Interactive Direct Message Form & Verified Profiles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 glass-card p-5 sm:p-8 md:p-10 space-y-6 border border-white/[0.08]">
              <div className="space-y-1">
                <h3
                  className="text-2xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  Direct Message Dispatch
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Encrypted transmission directly to Ashok Pasala&apos;s executive triage queue.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 space-y-2">
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
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elon Musk"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elon@x.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Mandate / Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Autonomous Agent Architecture / Venture Advisory"
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Brief Specification / Inquiry
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline technical requirements, timeline, or venture collaboration parameters..."
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-white text-black font-semibold rounded-xl text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Transmit Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Verified Social Profiles Grid */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-8 space-y-6 border border-white/[0.08]">
                <div>
                  <h3
                    className="text-xl font-bold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Verified Identity Profiles
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
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
                      className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">
                            {label}
                          </div>
                          <div className="text-[11px] font-mono text-neutral-400">
                            {handle}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
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
