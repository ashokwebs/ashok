import { ArrowUpRight } from 'lucide-react'
import { CONTACT, NORVETH } from '@/lib/config'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        AI systems &amp; security engineer · India, working worldwide
      </p>

      <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        I build AI systems, break them, and explain <em className="text-accent">exactly</em> why they broke.
      </h1>

      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        <p>
          I&rsquo;m Ashok Pasala. I&rsquo;ve written a language with five backends in C, a website audit engine that
          renders pages in real Chromium, and a lot of software that had to survive a hackathon judge at 4&nbsp;a.m.
        </p>
        <p>
          I take client work through <span className="text-foreground">Norveth</span>: websites and web apps, AI
          systems and automation, and security reviews of the AI you already run. Fixed quote before any work starts.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <a
          href={NORVETH}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-accent"
        >
          Work with me on Norveth <ArrowUpRight size={16} aria-hidden />
        </a>
        <a href="#work" className="link px-1 text-center text-muted sm:text-left">
          See the work
        </a>
        <a href={`mailto:${CONTACT.email}`} className="link px-1 text-center font-mono text-sm text-faint sm:text-left">
          {CONTACT.email}
        </a>
      </div>
    </section>
  )
}
