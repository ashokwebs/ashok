'use client'

import { useState, useEffect } from 'react'
import {
  Search,
  Terminal,
  FileText,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  X,
} from 'lucide-react'

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(false)

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const scrollTo = (id: string) => {
    setIsOpen(false)
    const element = document.querySelector(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('ashokashishms@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setIsOpen(false)
    }, 1500)
  }

  const items = [
    {
      category: 'Navigation',
      label: 'Founder Thesis & Philosophy',
      icon: Cpu,
      action: () => scrollTo('#about'),
      shortcut: 'T',
    },
    {
      category: 'Navigation',
      label: 'Ventures (Varellen & Norveth)',
      icon: Layers,
      action: () => scrollTo('#ventures'),
      shortcut: 'V',
    },
    {
      category: 'Navigation',
      label: 'Flagship Systems & Architectures',
      icon: Code2,
      action: () => scrollTo('#projects'),
      shortcut: 'S',
    },
    {
      category: 'Navigation',
      label: 'Technical Arsenal & Stack',
      icon: Cpu,
      action: () => scrollTo('#expertise'),
      shortcut: 'A',
    },
    {
      category: 'Navigation',
      label: 'Interactive CLI Terminal',
      icon: Terminal,
      action: () => scrollTo('#console'),
      shortcut: 'C',
    },
    {
      category: 'Navigation',
      label: 'Research Notes & Essays',
      icon: FileText,
      action: () => scrollTo('#research'),
      shortcut: 'R',
    },
    {
      category: 'Actions',
      label: copied ? 'Copied ashokashishms@gmail.com!' : 'Copy Executive Email',
      icon: copied ? Check : Copy,
      action: copyEmail,
      shortcut: '⌘C',
    },
    {
      category: 'Actions',
      label: 'Download Executive Resume / Spec (PDF)',
      icon: FileText,
      action: () => window.open('/resume.pdf', '_blank'),
      shortcut: 'PDF',
    },
    {
      category: 'Ventures',
      label: 'Visit Norveth Platform (norveth.app)',
      icon: ExternalLink,
      action: () => window.open('https://norveth.app', '_blank'),
      shortcut: 'EXT',
    },
    {
      category: 'Ventures',
      label: 'View GitHub Profile (@ashokwebs)',
      icon: ExternalLink,
      action: () => window.open('https://github.com/ashokwebs', '_blank'),
      shortcut: 'GIT',
    },
  ]

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#0e0f11] border border-neutral-800 shadow-2xl overflow-hidden font-sans animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-800 bg-[#141517]">
          <Search size={18} className="text-neutral-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 outline-none font-mono"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-neutral-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-neutral-800/80 text-neutral-300 hover:text-white transition-colors group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 group-hover:bg-neutral-700 transition-colors">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-medium font-mono text-white">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 group-hover:text-neutral-200">
                    {item.shortcut}
                  </span>
                </button>
              )
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[#111214] border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px]">
              ESC
            </kbd>
            <span>to exit</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <span>NEXUS://OS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
