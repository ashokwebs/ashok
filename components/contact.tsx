import { ArrowUpRight } from 'lucide-react'
import { CONTACT, NORVETH, PROFILES } from '@/lib/config'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-6xl">
        Have something to build, or something you need broken?
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Tell me what it is. Scope, prices and booking are on Norveth. If you&rsquo;d rather write first, email
        me.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <a
          href={NORVETH}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-accent"
        >
          Work with me on Norveth <ArrowUpRight size={16} aria-hidden />
        </a>
        <a href={`mailto:${CONTACT.email}`} className="link text-center text-lg sm:text-left">
          {CONTACT.email}
        </a>
      </div>
      <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
        {PROFILES.map((p) => (
          <li key={p.label}>
            <a href={p.href} target="_blank" rel="noopener noreferrer me" className="link">
              {p.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/resume" className="link">
            Resume
          </a>
        </li>
      </ul>
    </section>
  )
}
