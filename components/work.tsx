import { ArrowUpRight } from 'lucide-react'
import { NORVETH } from '@/lib/config'

type Item = {
  name: string
  kind: string
  year: string
  summary: string
  details: string[]
  stack: string
  link?: { href: string; label: string }
  note?: string
}

export const WORK: Item[] = [
  {
    name: 'Norveth',
    kind: 'Website audit engine, now my studio',
    year: '2026',
    summary:
      'Point it at a URL and it renders the site in real Chromium, then checks what is actually there: security headers, TLS, Core Web Vitals, and WCAG 2.1 issues via axe-core, with annotated screenshots at several viewport sizes.',
    details: [
      'Deterministic checks first. The language model only explains findings; it never invents them.',
      'Ships with a dashboard, a developer API, a CLI, webhooks, scheduled scans and an MCP server.',
      'It is also where I take client work.',
    ],
    stack: 'Python · FastAPI · Playwright · Next.js',
    link: { href: NORVETH, label: 'norveth.app' },
  },
  {
    name: 'unfish',
    kind: 'Programming language',
    year: '2026',
    summary:
      'A language, runtime and compiler in zero-dependency ANSI C99, with five execution backends that must produce byte-identical output.',
    details: [
      'Backends: tree-walking interpreter, 36-opcode stack VM, 256-register VM with computed goto, ahead-of-time compiler to C, and WebAssembly.',
      'A differential test suite runs every program on every backend and fails on any difference.',
      'The AOT backend runs 30–400× faster than the interpreter. Fibers, channels and a garbage collector.',
    ],
    stack: 'C99 · WebAssembly',
    note: 'Source private for now. Walkthrough on request.',
  },
  {
    name: 'MENTIS',
    kind: 'Transaction attribution · Smart India Hackathon',
    year: '2026',
    summary:
      'Built for a Ministry of Home Affairs problem statement (SIH26182): trace a wallet to the exchange behind it and show evidence an investigator can check.',
    details: [
      'Refuses to name an exchange when the evidence is thin, instead of guessing with confidence.',
      'Tested against a 73-wallet corpus across risk bands, with a line-by-line requirement compliance matrix.',
      '334 commits.',
    ],
    stack: 'Python · Electron',
    note: 'Source private. Walkthrough on request.',
  },
  {
    name: 'yaltan',
    kind: 'Discovery and crawl engine',
    year: '2026',
    summary:
      'Crawls 38 sources for AI tools and MCP servers, normalises them into one schema, and only re-fetches what changed.',
    details: [
      'Version hashing for change detection, incremental back-off per source, queue-based workers.',
    ],
    stack: 'TypeScript · Postgres · BullMQ',
    note: 'Source private.',
  },
  {
    name: 'SlackMind',
    kind: 'Google Cloud Rapid Agent Hackathon',
    year: '',
    summary:
      'A team of Gemini agents that works inside Slack, grounded in company documents through Vertex AI Search and calling tools over MCP.',
    details: ['Shared context between agents, so a hand-off does not lose the thread.'],
    stack: 'Python · Gemini · Vertex AI · Slack Bolt',
    link: { href: 'https://devpost.com/software/slackmind', label: 'Devpost' },
  },
  {
    name: 'Understanding Is Not Observable',
    kind: 'Research paper, co-authored',
    year: 'Draft',
    summary:
      'A 36-page paper on measurement theory for brain-to-brain interfaces: what you can and cannot conclude about understanding from the signals you can record.',
    details: [],
    stack: 'Theory · ML',
  },
]

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">Selected work</h2>
        <p className="max-w-sm text-sm text-faint">
          Six of roughly seventy projects. Most of my best work is private; I&rsquo;ll walk you through it on a call.
        </p>
      </div>

      <ol className="mt-12 space-y-16 sm:mt-16 sm:space-y-20">
        {WORK.map((item, i) => (
          <li key={item.name} className="grid gap-4 md:grid-cols-[9rem_1fr] md:gap-10">
            <div className="flex items-baseline gap-3 font-mono text-xs text-faint md:flex-col md:gap-1">
              <span>{String(i + 1).padStart(2, '0')}</span>
              {item.year && <span>{item.year}</span>}
            </div>
            <article className="max-w-2xl">
              <h3 className="font-serif text-3xl leading-tight tracking-tight">{item.name}</h3>
              <p className="mt-1 text-sm text-accent">{item.kind}</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">{item.summary}</p>
              {item.details.length > 0 && (
                <ul className="mt-4 space-y-2 text-muted">
                  {item.details.map((d) => (
                    <li key={d} className="relative pl-5 leading-relaxed before:absolute before:left-0 before:text-faint before:content-['–']">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-faint">
                <span>{item.stack}</span>
                {item.link && (
                  <a href={item.link.href} target="_blank" rel="noopener" className="link inline-flex items-center gap-1 text-foreground">
                    {item.link.label} <ArrowUpRight size={12} aria-hidden />
                  </a>
                )}
                {item.note && <span>{item.note}</span>}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
