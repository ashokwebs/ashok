import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Executive Resume & Systems Architecture Spec',
  description:
    'Official executive resume of Ashok Pasala — Founder & CEO of Varellen Technologies, Systems Architect of Norveth, OSPRED, QROS. 50+ Hackathons, 40+ Shipped Architectures.',
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-white selection:text-black">
      {/* Top Action Navigation */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Executive Hub</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Ashok_Pasala_Executive_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-md"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Document Canvas */}
      <div className="max-w-4xl mx-auto bg-white text-[#0f172a] rounded-2xl shadow-2xl p-8 sm:p-12 md:p-14 font-sans border border-neutral-200/80 print:p-0 print:border-none print:shadow-none print:rounded-none">
        {/* Header */}
        <header className="border-b-2 border-[#0f172a] pb-6 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] uppercase">
              Ashok Pasala
            </h1>
            <p className="text-sm font-semibold text-neutral-700">
              Founder &amp; CEO (Varellen Technologies) • Founder &amp; Systems Architect (Norveth, OSPRED, QROS)
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-600 space-y-1 md:text-right">
            <div>
              <a href="https://ashokpasala.vercel.app" className="font-semibold text-[#0f172a] hover:underline">
                ashokpasala.vercel.app
              </a>{' '}
              • Andhra Pradesh, India
            </div>
            <div>
              <a href="mailto:ashokashishms@gmail.com" className="hover:underline">
                ashokashishms@gmail.com
              </a>{' '}
              •{' '}
              <a href="mailto:founder@norveth.app" className="hover:underline">
                founder@norveth.app
              </a>
            </div>
            <div>
              <a href="https://devpost.com/ashokashishms/" className="hover:underline">
                devpost.com/ashokashishms
              </a>{' '}
              •{' '}
              <a href="https://github.com/ashokwebs" className="hover:underline">
                github.com/ashokwebs
              </a>{' '}
              •{' '}
              <a href="https://linkedin.com/in/ashok-raj-p-1b8539317" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
            <strong>Founder, AI Systems Architect, and Deep Tech Engineer</strong> engineering autonomous multi-agent orchestration frameworks, quantitative ML trading systems, MCP discovery search engines, and high-concurrency distributed backends. Founder &amp; CEO of <strong>Varellen Technologies</strong>, Architect of <strong>Norveth</strong> (<a href="https://norveth.app" className="underline font-medium">norveth.app</a>), <strong>OSPRED</strong>, and <strong>QROS</strong>. Builder of <strong>40+ shipped software systems across 50+ global hackathons</strong> (Google Cloud Rapid Agent, Bank of India &amp; IIT Hyderabad, SanDisk, Qwen Global). Computer Science &amp; Distributed Systems at <strong>VIT-AP University</strong> (2024–2028).
          </p>
        </section>

        {/* Venture Leadership & Systems Engineering */}
        <section className="mb-6 space-y-4">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Venture Leadership &amp; Systems Engineering
          </h2>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-[#0f172a]">Varellen Technologies</span>
                <span className="text-xs font-semibold text-neutral-600"> — Founder &amp; Chief Executive Officer</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | ENTERPRISE &amp; SYSTEMS</span>
            </div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1 leading-relaxed">
              <li>Guiding venture roadmap and system design for enterprise digital platforms, closed-loop AI automation pipelines, and high-throughput cloud infrastructure.</li>
              <li>Architected fault-tolerant microservice meshes with sub-millisecond API dispatch, zero-trust security postures, and automated Docker/K8s CI/CD pipelines.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-[#0f172a]">Norveth</span>
                <span className="text-xs font-semibold text-neutral-600"> — Founder &amp; Systems Architect (<a href="https://norveth.app" className="underline">norveth.app</a>)</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | ENGINEERING INTELLIGENCE</span>
            </div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1 leading-relaxed">
              <li>Architected full-lifecycle website engineering intelligence platform utilizing <strong>Playwright dynamic headless crawling</strong> with exponential backoff &amp; LLM failover, <strong>Model Context Protocol (MCP)</strong> tooling, and automated OWASP Top 10 security/performance diagnostics.</li>
              <li>Engineered Engineering Knowledge Graph reasoning layer mapping findings into interactive architecture diagrams and deterministic code fixes.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-[#0f172a]">OSPRED &amp; Yaltan</span>
                <span className="text-xs font-semibold text-neutral-600"> — Creator &amp; Systems Architect</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | AI CAPABILITY SEARCH</span>
            </div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1 leading-relaxed">
              <li>Engineered autonomous discovery and indexing engine for Model Context Protocol (MCP) servers, reusable AI skills, and plugins using the Yaltan scraping pipeline.</li>
              <li>Designed Canonical Capability Schema and automated tool verification engine with SSRF/prompt-injection safety metadata scoring.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-[#0f172a]">QROS Quantitative Research</span>
                <span className="text-xs font-semibold text-neutral-600"> — Quantitative Systems Architect</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | QUANT ML TRADING</span>
            </div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1 leading-relaxed">
              <li>Built high-frequency trading platform targeting <strong>Polymarket BTC 5-minute prediction markets</strong> using Binance 1-second streaming tick feeds.</li>
              <li>Trained LightGBM Scale/Shape ML models predicting strike settlement probabilities ($p_{up} = P(S_T &gt; K)$) and volatility alongside an MM-1 market-making engine.</li>
            </ul>
          </div>
        </section>

        {/* Flagship Architectures & Hackathon Systems (50+ Hackathons) */}
        <section className="mb-6 space-y-3.5">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Flagship Architectures &amp; Hackathon Systems (50+ Hackathons)
          </h2>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">SlackMind Agent Command Center</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Google Cloud Rapid Agent</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Gemini, Vertex AI Data Store, MCP, Slack Bolt, Python</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Autonomous AI agent orchestration kernel coordinating intelligent agent swarms directly inside Slack with Gemini models, Vertex AI Search Data Store, and MCP tool routing.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">The Vector / Vector AI Command Center</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Autonomous C-Suite</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Multi-Agent Swarms, Python, LangChain, FastAPI, Next.js</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Autonomous multi-agent executive council (CEO, CTO, CMO) that transforms startup concepts into complete business plans, distributed tech architectures, and financial models with cross-agent consensus in seconds.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">Mule Account Detection System</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Bank of India &amp; IIT Hyderabad</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Graph ML, Anomaly Detection, Python, FastAPI, FinTech</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              High-frequency financial crime and suspicious transaction detection system identifying illicit mule account networks in real-time.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">IWCIS Storage Architecture &amp; Qwen Chaos</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">SanDisk &amp; Qwen Global</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">exFAT Internals, Container Architecture, Qwen LLM, Vector Memory</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Containerized exFAT file-system storage optimization (SanDisk) paired with a self-persistent neural MemoryAgent with cross-session state recall (Qwen Global).
            </p>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Technical Arsenal &amp; Domain Mastery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Autonomous AI &amp; Quant:</div>
            <div className="sm:col-span-3 text-neutral-700">Multi-Agent Swarms, Model Context Protocol (MCP), LightGBM, Quantitative Volatility, LangChain, RAG Pipelines, Vector DBs (ChromaDB, Pinecone).</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Languages:</div>
            <div className="sm:col-span-3 text-neutral-700">Python, TypeScript, JavaScript, Go, Rust, Java, C/C++, SQL, Bash/Shell, Solidity.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Backend &amp; Infra:</div>
            <div className="sm:col-span-3 text-neutral-700">FastAPI, Node.js, Express, Next.js 16 (App Router), React 19, PostgreSQL, Redis Streams, Docker, Kubernetes, Playwright, Cloudflare Tunnels.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Security &amp; Web3:</div>
            <div className="sm:col-span-3 text-neutral-700">OWASP Top 10 Hardening, SSRF Protection, Zero-Trust Architecture, EVM Smart Contracts, Cryptographic Protocols, Graph Anomaly Detection.</div>
          </div>
        </section>

        {/* Education & 50+ Hackathons */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Education &amp; 50+ Hackathons Track Record
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <span className="text-sm font-bold text-[#0f172a]">VIT-AP University</span>
              <span className="text-xs font-semibold text-neutral-600"> — B.Tech in Computer Science &amp; Engineering</span>
            </div>
            <span className="text-xs font-mono text-neutral-500">2024 – 2028 | ANDHRA PRADESH, INDIA</span>
          </div>
          <div className="text-xs text-neutral-600">
            <strong>Core Focus:</strong> Distributed Systems, Operating Systems Internals, Advanced Algorithms, Computer Networks, Database Architecture, Machine Learning.
          </div>
          <div className="text-xs text-neutral-600">
            <strong>50+ Global Hackathons &amp; Challenges:</strong> Google Cloud Rapid Agent, Bank of India &amp; IIT Hyderabad, SanDisk Storage, Qwen Global, Slack AI, Google Devpost/XPRIZE.
          </div>
        </section>
      </div>
    </main>
  )
}
