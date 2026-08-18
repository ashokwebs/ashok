'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { CornerDownLeft, Copy, Check } from 'lucide-react'

interface HistoryEntry {
  command: string
  output: string | React.ReactNode
}

export default function SystemConsole() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
          <p className="text-emerald-400 font-bold">
            [SYS_OK] NEXUS://OS v2.6.0 Kernel Initialized.
          </p>
          <p className="text-neutral-400">
            Ashok Pasala &mdash; Founder @ Varellen Technologies &amp; Norveth (norveth.app)
          </p>
          <p className="text-neutral-500 text-xs pt-1">
            Type <span className="text-white font-bold">&apos;help&apos;</span> to list commands or click quick action buttons below.
          </p>
        </div>
      ),
    },
  ])
  const [copied, setCopied] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase()
    if (!cmd) return

    let output: React.ReactNode

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs pt-1">
              <div><span className="text-white font-bold">varellen</span> : Varellen Technologies venture</div>
              <div><span className="text-white font-bold">norveth</span> : Norveth AI platform &amp; specs</div>
              <div><span className="text-white font-bold">thesis</span> : Founder &amp; engineering principles</div>
              <div><span className="text-white font-bold">systems</span> : List flagship software systems</div>
              <div><span className="text-white font-bold">stack</span> : Technical stack &amp; languages</div>
              <div><span className="text-white font-bold">contact</span> : Executive contact &amp; email</div>
              <div><span className="text-white font-bold">geo</span> : Generative Engine Optimization spec</div>
              <div><span className="text-white font-bold">whoami</span> : Current session identity</div>
              <div><span className="text-white font-bold">clear</span> : Clear terminal screen</div>
            </div>
          </div>
        )
        break

      case 'varellen':
        output = (
          <div className="space-y-2 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[VENTURE] Varellen Technologies</p>
            <p className="text-neutral-400">
              Varellen Technologies is an advanced enterprise software and deep-tech venture founded by Ashok Pasala.
            </p>
            <ul className="list-disc pl-4 text-xs text-neutral-400 space-y-0.5">
              <li>High-performance digital platform development &amp; system architecture.</li>
              <li>Enterprise AI automation systems and closed-loop agent workflows.</li>
              <li>Scalable cloud infrastructure, microservice meshes, and secure APIs.</li>
            </ul>
            <p className="text-xs text-neutral-500 pt-1">
              Founder &amp; CEO: Ashok Pasala • Global Operations
            </p>
          </div>
        )
        break

      case 'norveth':
        output = (
          <div className="space-y-2 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[VENTURE] Norveth (norveth.app)</p>
            <p className="text-neutral-400">
              Norveth is an AI-powered website intelligence and code-level diagnostic platform engineered by Ashok Pasala.
            </p>
            <ul className="list-disc pl-4 text-xs text-neutral-400 space-y-0.5">
              <li>Real Chromium headless rendering engine (no shallow simulations).</li>
              <li>Automated OWASP Top 10 security mapping &amp; WCAG 2.1 diagnostics.</li>
              <li>Model Context Protocol (MCP) server &amp; developer CLI integration.</li>
              <li>Deterministic, grounded AI code recommendations.</li>
            </ul>
            <p className="text-xs text-emerald-400/80 pt-1">
              Visit: <a href="https://norveth.app" target="_blank" rel="noopener noreferrer" className="underline text-emerald-400">https://norveth.app</a>
            </p>
          </div>
        )
        break

      case 'thesis':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[PHILOSOPHY] First-Principles Systems Engineering:</p>
            <p className="text-neutral-400 text-xs">
              1. First-Principles Reductionism &bull; Strip away framework bloat.
            </p>
            <p className="text-neutral-400 text-xs">
              2. Radical Autonomous Automation &bull; Closed-loop agent swarms with shared memory.
            </p>
            <p className="text-neutral-400 text-xs">
              3. Sovereign Resilience &bull; Zero-trust security and sub-millisecond execution.
            </p>
            <p className="text-neutral-400 text-xs">
              4. Exponential Leverage &bull; Build foundational developer infrastructure.
            </p>
          </div>
        )
        break

      case 'systems':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[FLAGSHIP SYSTEMS &amp; ARCHITECTURES]</p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Multi-Agent Orchestration Platform:</strong> Collaborative execution kernel with vector memory &amp; LangChain.
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">AI Workflow Automation Engine:</strong> Visual pipeline compiler &amp; distributed worker cluster.
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">OSPRED Autonomous Security:</strong> Attack surface scanner &amp; automated CVE synthesis.
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Neural Knowledge Engine:</strong> Microsecond vector RAG pipeline.
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">ShadowForge On-Chain Intelligence:</strong> Heuristic pattern recognition &amp; smart contract auditor.
            </p>
          </div>
        )
        break

      case 'stack':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[SYSTEM STACK]</p>
            <p className="text-xs text-neutral-400"><strong className="text-white">Languages:</strong> Python, TypeScript, Go, Rust, C/C++, Java, Solidity, SQL</p>
            <p className="text-xs text-neutral-400"><strong className="text-white">Autonomous AI:</strong> Multi-Agent Swarms, LangChain, RAG, ChromaDB, MCP</p>
            <p className="text-xs text-neutral-400"><strong className="text-white">Backend &amp; Infra:</strong> FastAPI, Node.js, Next.js 16, PostgreSQL, Redis, Docker, K8s, AWS</p>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[CHANNELS]</p>
            <p className="text-xs text-neutral-400">• Primary: <span className="text-white">ashokashishms@gmail.com</span></p>
            <p className="text-xs text-neutral-400">• Norveth Business: <span className="text-white">founder@norveth.app</span></p>
            <p className="text-xs text-neutral-400">• GitHub: <span className="text-white">github.com/ashokwebs</span></p>
            <p className="text-xs text-neutral-400">• X (Twitter): <span className="text-white">x.com/ashokfounds</span></p>
          </div>
        )
        break

      case 'geo':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[GEO SPECIFICATIONS]</p>
            <p className="text-xs text-neutral-400">• Coordinates: 16.5062° N, 80.6480° E (Andhra Pradesh, India)</p>
            <p className="text-xs text-neutral-400">• LLM Discovery: /llms.txt (GPTBot, ClaudeBot, PerplexityBot, Gemini)</p>
            <p className="text-xs text-neutral-400">• Knowledge Graph: Person + Organizations (Varellen Technologies, Norveth) + ItemList</p>
          </div>
        )
        break

      case 'whoami':
        output = (
          <div className="text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400">guest@nexus-kernel [remote-terminal]</p>
            <p className="text-neutral-400 text-xs">Host: Ashok Pasala (Founder @ Varellen Technologies &amp; Norveth)</p>
            <p className="text-neutral-500 text-xs">Permission: READ_ONLY // Protocol: TLS 1.3</p>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      default:
        output = (
          <div className="text-xs sm:text-sm font-mono text-rose-400">
            Command not recognized: &apos;{cmd}&apos;. Type &apos;help&apos; for list of commands.
          </div>
        )
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }])
    setInput('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      executeCommand(input)
    }
  }

  const handleQuickCommand = (cmd: string) => {
    executeCommand(cmd)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('ashokashishms@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="console" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>09 // Developer Terminal</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Interactive System Console
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 font-light">
                Inspect architecture parameters, venture data, and founder telemetry directly via command line.
              </p>
            </div>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all self-start md:self-auto cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied ashokashishms@gmail.com' : 'Copy Executive Email'}</span>
            </button>
          </div>

          {/* Terminal Box */}
          <div className="rounded-[1.5rem] bg-[#0d0e11] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-neutral-200">
            {/* Terminal Window Chrome */}
            <div className="px-5 py-3.5 bg-[#141518] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
                <span className="text-xs text-neutral-400 ml-2 font-mono">
                  ashok@varellen:~ (zsh)
                </span>
              </div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-widest hidden sm:block">
                NEXUS://OS • LIVE
              </div>
            </div>

            {/* Quick Action Chips */}
            <div className="px-5 py-2.5 bg-[#0f1013] border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-neutral-500 text-[11px] uppercase tracking-wider shrink-0">
                Quick Run:
              </span>
              {['varellen', 'norveth', 'thesis', 'systems', 'stack', 'contact', 'geo', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleQuickCommand(cmd)}
                  className="px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 text-xs shrink-0 transition-colors cursor-pointer border border-white/[0.06]"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Console Log Body */}
            <div
              className="p-5 sm:p-7 space-y-4 max-h-[380px] overflow-y-auto"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-white font-bold">{entry.command}</span>
                  </div>
                  <div className="pl-4">{entry.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <div className="px-5 py-4 bg-[#121316] border-t border-white/[0.08] flex items-center gap-3">
              <span className="text-emerald-400 text-sm font-bold">➜</span>
              <span className="text-cyan-400 text-sm font-bold">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command ('varellen', 'norveth', 'thesis', 'systems')..."
                className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 outline-none font-mono"
                aria-label="Interactive CLI command prompt"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(input)}
                className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Submit CLI Command"
              >
                <CornerDownLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
