import { NORVETH } from '@/lib/config'

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-serif text-xl leading-none tracking-tight">
          Ashok Pasala
        </a>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm text-muted">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hidden hover:text-foreground sm:inline">
              {item.label}
            </a>
          ))}
          <a
            href={NORVETH}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-foreground/25 px-3.5 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  )
}
