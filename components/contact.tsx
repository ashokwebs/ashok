'use client'

import { useState } from 'react'
import { Mail, Briefcase, MapPin, Copy, Check, MessageCircle } from 'lucide-react'
import { CONTACT, whatsappLink } from '@/lib/config'
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
  const [emailOpened, setEmailOpened] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPrimary(true)
    setTimeout(() => setCopiedPrimary(false), 2000)
  }

  // TODO(formspree): once a Formspree form exists that delivers to founder@norveth.app,
  // POST formData to https://formspree.io/f/<FORM_ID> here and show a success panel ONLY
  // when the response is ok. Until then there is no backend: never claim a message was sent.
  const buildMessage = () =>
    `Hi Ashok, I'm ${formData.name} (${formData.email}).\n\nProject: ${formData.subject}\n\n${formData.message}`

  const formIsComplete = () =>
    formData.name.trim() && formData.email.trim() && formData.subject.trim() && formData.message.trim()

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const link = whatsappLink(buildMessage())
    if (link) window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handleEmail = () => {
    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      formData.subject || 'Project enquiry'
    )}&body=${encodeURIComponent(buildMessage())}`
    window.location.href = mailto
    setEmailOpened(true)
  }

  return (
    <section id="contact" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#0c0d10] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Heading */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>Contact</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Get in touch
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Tell me what you need built, fixed or reviewed. I reply within 24 hours. For fixed prices and booking, see <a href="https://norveth.app" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4">norveth.app</a>.
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
                    Email
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white mt-0.5 break-all sm:break-normal"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {CONTACT.email}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Project enquiries, quotes and questions. Replies within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT.email)}
                  className="p-2 rounded-lg border border-white/[0.1] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy email address"
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
                    Prices &amp; booking
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white mt-0.5 break-all sm:break-normal"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    norveth.app
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Fixed-price services: websites, automation, AI systems and security reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
                <a
                  href={CONTACT.studio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-xs font-mono font-medium rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                >
                  See prices &amp; book
                </a>
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
                    Location
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
                <span>Available for projects · Oct 2026</span>
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
                  Send a project brief
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Fill this in, then send it on WhatsApp or by email. Nothing is sent until you do.
                </p>
              </div>

                <form onSubmit={handleWhatsApp} className="space-y-4">
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
                        placeholder="Jane Doe"
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
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      What do you need?
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="New website / automation / AI assistant / security review"
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What you have today, what you want, and your deadline."
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white text-sm outline-none focus:border-white/[0.3] transition-colors font-sans resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {CONTACT.whatsapp && (
                      <button
                        type="submit"
                        className="flex-1 py-3.5 bg-white text-black font-semibold rounded-xl text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        <MessageCircle size={14} />
                        <span>Message on WhatsApp</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        const form = (e.currentTarget as HTMLButtonElement).form
                        if (form && !form.reportValidity()) return
                        if (formIsComplete()) handleEmail()
                      }}
                      className={
                        CONTACT.whatsapp
                          ? 'flex-1 py-3.5 rounded-xl border border-white/[0.15] text-white text-xs font-mono uppercase tracking-wider hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2 cursor-pointer'
                          : 'flex-1 py-3.5 bg-white text-black font-semibold rounded-xl text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg'
                      }
                    >
                      <Mail size={14} />
                      <span>{CONTACT.whatsapp ? 'Email instead' : 'Send by email'}</span>
                    </button>
                  </div>
                  <p className="text-xs text-neutral-400">
                    {emailOpened ? 'Your email app should have opened with this message. ' : ''}
                    If your email app didn&apos;t open, write to{' '}
                    <a href={`mailto:${CONTACT.email}`} className="text-white underline underline-offset-4">
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                </form>
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
