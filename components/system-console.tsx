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
            [SYS_OK] NEXUS://OS v3.0.0 Kernel Initialized.
          </p>
          <p className="text-neutral-400 text-[11px] sm:text-xs">
            Ashok Pasala &mdash; Founder @ Varellen Technologies, Norveth &amp; OSPRED | 50+ Hackathons • 40+ Architectures
          </p>
          <p className="text-neutral-500 text-[10px] sm:text-xs pt-0.5">
            Type <span className="text-white font-bold">&apos;help&apos;</span> or tap quick run chips below.
          </p>
        </div>
      ),
    },
  ])
  const [copied, setCopied] = useState(false)
  const isInitialMount = useRef(true)
  const logContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll ONLY the inner terminal box when a new command is executed by the user (never the window on mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
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
              <div><span className="text-white font-bold">qros</span> : Quantitative ML &amp; Polymarket BTC trading</div>
              <div><span className="text-white font-bold">ospred</span> : OSPRED &amp; Yaltan MCP discovery platform</div>
              <div><span className="text-white font-bold">norveth</span> : Norveth crawler &amp; engineering intelligence</div>
              <div><span className="text-white font-bold">slackmind</span> : Google Cloud Rapid Agent Hackathon</div>
              <div><span className="text-white font-bold">hackathons</span> : 50+ Global Hackathons &amp; Wins</div>
              <div><span className="text-white font-bold">fintech</span> : Bank of India Mule Account Detection</div>
              <div><span className="text-white font-bold">infra</span> : 24/7 dedicated server &amp; local LLM lab</div>
              <div><span className="text-white font-bold">varellen</span> : Varellen Technologies venture</div>
              <div><span className="text-white font-bold">thesis</span> : Founder &amp; engineering axioms</div>
              <div><span className="text-white font-bold">contact</span> : Executive contact &amp; email</div>
              <div><span className="text-white font-bold">clear</span> : Clear terminal screen</div>
            </div>
          </div>
        )
        break

      case 'qros':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[QUANTITATIVE ENGINE] QROS Platform</p>
            <p className="text-neutral-400 text-xs">
              • Target: Polymarket BTC 5-minute binary options &amp; prediction markets.
            </p>
            <p className="text-neutral-400 text-xs">
              • Ingestion: Binance 1-second streaming ticks with sub-millisecond price-to-beat anchors.
            </p>
            <p className="text-neutral-400 text-xs">
              • ML Architecture: LightGBM Scale &amp; Shape models forecasting strike probability (p_up) and volatility vs EWMA/HAR baselines.
            </p>
            <p className="text-neutral-400 text-xs">
              • Execution: Backtester, paper trading simulator, and MM-1 market-making engine.
            </p>
          </div>
        )
        break

      case 'ospred':
      case 'yaltan':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[SEARCH &amp; DISCOVERY] OSPRED &amp; Yaltan Pipeline</p>
            <p className="text-neutral-400 text-xs">
              • Purpose: Autonomous discovery, capability search, and verification for Model Context Protocol (MCP) servers and AI skills.
            </p>
            <p className="text-neutral-400 text-xs">
              • Yaltan Scraping: Multi-source GitHub and API connector pipeline with automated deduplication &amp; capability extraction.
            </p>
            <p className="text-neutral-400 text-xs">
              • Canonical Schema: Standardized schema defining agent identity, authorship, and security verification namespace.
            </p>
          </div>
        )
        break

      case 'norveth':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[VENTURE] Norveth (norveth.app)</p>
            <p className="text-neutral-400 text-xs">
              • Architecture: Playwright async crawling infrastructure with exponential backoff &amp; LLM failover.
            </p>
            <p className="text-neutral-400 text-xs">
              • Security Defenses: Full SSRF protection, private-IP blocking, CSP, HSTS, CSRF, and prompt-injection mitigations.
            </p>
            <p className="text-neutral-400 text-xs">
              • Knowledge Graph: AI reasoning layer mapping findings into interactive architecture diagrams and white-label reports.
            </p>
            <p className="text-xs text-emerald-400/80 pt-0.5">
              Live SaaS: <a href="https://norveth.app" target="_blank" rel="noopener noreferrer" className="underline text-emerald-400">https://norveth.app</a>
            </p>
          </div>
        )
        break

      case 'slackmind':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[HACKATHON] Google Cloud Rapid Agent Hackathon</p>
            <p className="text-neutral-400 text-xs">
              • SlackMind: Autonomous AI command center orchestrating agent swarms directly inside Slack.
            </p>
            <p className="text-neutral-400 text-xs">
              • Tech Stack: Gemini foundation models, Vertex AI Search Data Store, and MCP server tooling with shared context routing.
            </p>
          </div>
        )
        break

      case 'hackathons':
      case 'devpost':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[HACKATHONS // 50+ GLOBAL CHALLENGES • 40+ ARCHITECTURES]</p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Google Cloud Rapid Agent:</strong> SlackMind (Gemini + Vertex AI + MCP).
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Bank of India + IIT Hyderabad:</strong> Mule Account Detection (Graph ML).
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">SanDisk Hackathon:</strong> IWCIS exFAT Storage &amp; Container Architecture.
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Qwen Global Hackathon:</strong> Qwen Chaos Self-Persistent MemoryAgent.
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Google Agentic AI:</strong> The Vector (Autonomous Digital C-Suite).
            </p>
            <p className="text-xs text-neutral-400">
              • <strong className="text-white">Global Disaster Tech:</strong> ResQNet (Real-Time Incident Triage Grid).
            </p>
            <p className="text-xs text-emerald-400/80 pt-1">
              Devpost: <a href="https://devpost.com/ashokashishms/" target="_blank" rel="noopener noreferrer" className="underline text-emerald-400">https://devpost.com/ashokashishms/</a>
            </p>
          </div>
        )
        break

      case 'fintech':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[FINTECH &amp; SECURITY] Mule Account Detection System</p>
            <p className="text-neutral-400 text-xs">
              • Partner: Bank of India + IIT Hyderabad Hackathon.
            </p>
            <p className="text-neutral-400 text-xs">
              • Algorithm: High-frequency transaction graph anomaly detection and behavioral pattern classification.
            </p>
          </div>
        )
        break

      case 'infra':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[INFRASTRUCTURE] 24/7 Server &amp; Local Model Lab</p>
            <p className="text-neutral-400 text-xs">
              • 24/7 Dedicated Server: Dell server running PostgreSQL, Redis, Cloudflare Tunnels, and background worker queues.
            </p>
            <p className="text-neutral-400 text-xs">
              • Local AI Lab: Ollama, Qwen, Mistral, Hermes models benchmarked for bug-bounty &amp; CTF security research.
            </p>
          </div>
        )
        break

      case 'varellen':
        output = (
          <div className="space-y-2 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[VENTURE] Varellen Technologies</p>
            <p className="text-neutral-400 text-xs">
              Enterprise digital platforms, closed-loop AI workflow automation, and high-throughput cloud infrastructure.
            </p>
            <p className="text-xs text-neutral-500 pt-0.5">
              Founder &amp; CEO: Ashok Pasala • Global Operations
            </p>
          </div>
        )
        break

      case 'thesis':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[PHILOSOPHY] First-Principles Systems Engineering:</p>
            <p className="text-neutral-400 text-xs">
              1. First-Principles Reductionism • Strip away framework bloat.
            </p>
            <p className="text-neutral-400 text-xs">
              2. Radical Autonomous Automation • Closed-loop agent swarms with shared memory.
            </p>
            <p className="text-neutral-400 text-xs">
              3. Sovereign Resilience • Zero-trust security and sub-millisecond execution.
            </p>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-neutral-300">
            <p className="text-emerald-400 font-semibold">[CHANNELS]</p>
            <p className="text-xs text-neutral-400">• Primary: <span className="text-white">ashokashishms@gmail.com</span></p>
            <p className="text-xs text-neutral-400">• Venture: <span className="text-white">founder@norveth.app</span></p>
            <p className="text-xs text-neutral-400">• Devpost: <span className="text-white">devpost.com/ashokashishms</span></p>
            <p className="text-xs text-neutral-400">• GitHub: <span className="text-white">github.com/ashokwebs</span></p>
            <p className="text-xs text-neutral-400">• X (Twitter): <span className="text-white">x.com/ashokfounds</span></p>
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
    <section id="console" className="relative w-full py-20 sm:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>09 // Developer Terminal</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Interactive System Console
              </h2>
              <p className="text-sm sm:text-lg text-neutral-400 font-light">
                Inspect architecture parameters, QROS quantitative models, OSPRED discovery pipelines, and 50+ hackathon records directly via CLI.
              </p>
            </div>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all self-start md:self-auto cursor-pointer active:scale-95"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied ashokashishms@gmail.com' : 'Copy Executive Email'}</span>
            </button>
          </div>

          {/* Terminal Box */}
          <div className="rounded-2xl sm:rounded-[1.5rem] bg-[#0d0e11] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-neutral-200">
            {/* Terminal Window Chrome */}
            <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-[#141518] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]/80" />
                <span className="text-[11px] sm:text-xs text-neutral-400 ml-1.5 sm:ml-2 font-mono truncate max-w-[160px] sm:max-w-none">
                  ashok@nexus-kernel:~ (zsh)
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest hidden sm:block">
                NEXUS://OS • LIVE
              </div>
            </div>

            {/* Quick Action Chips */}
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#0f1013] border-b border-white/[0.06] flex items-center gap-1.5 sm:gap-2 overflow-x-auto text-xs no-scrollbar">
              <span className="text-neutral-500 text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0 mr-1">
                Run:
              </span>
              {['qros', 'ospred', 'norveth', 'slackmind', 'hackathons', 'fintech', 'infra', 'varellen', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleQuickCommand(cmd)}
                  className="px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] active:bg-white/[0.15] text-neutral-300 text-[11px] sm:text-xs shrink-0 transition-colors cursor-pointer border border-white/[0.06]"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Console Log Body */}
            <div
              ref={logContainerRef}
              className="p-4 sm:p-6 md:p-7 space-y-3 sm:space-y-4 max-h-[300px] sm:max-h-[380px] overflow-y-auto"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, index) => (
                <div key={index} className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-neutral-400">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-white font-bold">{entry.command}</span>
                  </div>
                  <div className="pl-3 sm:pl-4 text-xs sm:text-sm">{entry.output}</div>
                </div>
              ))}
            </div>

            {/* Input Line */}
            <div className="px-4 sm:px-5 py-3 sm:py-4 bg-[#121316] border-t border-white/[0.08] flex items-center gap-2.5 sm:gap-3">
              <span className="text-emerald-400 text-xs sm:text-sm font-bold">➜</span>
              <span className="text-cyan-400 text-xs sm:text-sm font-bold">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command ('qros', 'ospred', 'hackathons')..."
                className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 outline-none font-mono"
                aria-label="Interactive CLI command prompt"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(input)}
                className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Submit CLI Command"
              >
                <CornerDownLeft size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
