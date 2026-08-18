'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Terminal, ArrowUpRight, Search } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Thesis', href: '#about' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Systems', href: '#projects' },
    { label: 'Arsenal', href: '#expertise' },
    { label: 'Research', href: '#research' },
    { label: 'Console', href: '#console' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollTo = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openCmdK = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3 sm:py-3.5'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      {/* Scrolled Gradient Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none rounded-lg"
            aria-label="Ashok Pasala — Founder & Systems Architect Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-neutral-200 text-black font-bold flex items-center justify-center text-xs tracking-wider transition-transform group-hover:scale-105 shadow-md shrink-0">
              AP
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm font-bold text-white tracking-tight leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Ashok Pasala
              </span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest leading-tight mt-0.5">
                Varellen • Norveth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="relative group text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-200 uppercase tracking-wider font-mono cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={openCmdK}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card-interactive text-xs font-mono text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Open Command Palette"
            >
              <Search size={12} />
              <span>⌘K</span>
            </button>

            <button
              onClick={() => scrollTo('#console')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card-interactive text-xs font-mono text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Jump to interactive terminal console"
            >
              <Terminal size={12} />
              <span>CLI</span>
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              <span>Contact</span>
              <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Mobile Menu Action Row */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openCmdK}
              className="p-2.5 text-neutral-400 hover:text-white transition-colors touch-manipulation rounded-lg active:bg-white/[0.05]"
              aria-label="Open Search Command Palette"
            >
              <Search size={18} />
            </button>
            <button
              className="p-2.5 text-white hover:opacity-70 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus:outline-none rounded-lg touch-manipulation active:bg-white/[0.05]"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div
              id="mobile-navigation"
              className="absolute left-4 right-4 z-40 lg:hidden py-4 space-y-1.5 border border-white/[0.12] mt-3 bg-[#111115]/98 backdrop-blur-2xl px-4 shadow-2xl rounded-2xl animate-slide-in-up"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="w-full text-left px-3.5 py-3 text-xs uppercase tracking-wider font-mono text-neutral-300 hover:text-white active:bg-white/[0.08] rounded-xl transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/[0.08] mt-2 flex flex-col gap-2">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3 bg-white text-black text-xs font-semibold rounded-xl text-center cursor-pointer active:bg-neutral-200"
                >
                  Initiate Contact
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
