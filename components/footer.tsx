'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <h3 
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Ashok Pasala
            </h3>
            <p className="text-sm text-muted-foreground font-light">
              Full Stack Developer &amp; AI Systems Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 
              className="text-sm font-bold text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 
              className="text-sm font-bold text-foreground"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                >
                  Architecture
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
          <p className="text-muted-foreground font-light">
            © {currentYear} Ashok Pasala. All rights reserved.
          </p>
          <p className="text-muted-foreground font-light">
            Designed and engineered by Ashok Pasala. Building intelligent software, one system at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
