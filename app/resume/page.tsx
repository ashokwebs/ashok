import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download, Printer, ExternalLink, Mail, MapPin, Globe } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/social-icons'

export const metadata: Metadata = {
  title: 'Executive Resume & Systems Architecture Spec',
  description:
    'Official executive resume of Ashok Pasala — Founder & CEO of Varellen Technologies, Founder & Systems Architect of Norveth, AI Systems Architect.',
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
              Founder &amp; CEO (Varellen Technologies) • Founder &amp; Systems Architect (Norveth) • AI Systems Architect
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
              <a href="https://github.com/ashokwebs" className="hover:underline">
                github.com/ashokwebs
              </a>{' '}
              •{' '}
              <a href="https://linkedin.com/in/ashok-raj-p-1b8539317" className="hover:underline">
                LinkedIn
              </a>{' '}
              •{' '}
              <a href="https://x.com/ashokfounds" className="hover:underline">
                @ashokfounds
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
            <strong>Founder, AI Systems Architect, and Deep Tech Engineer</strong> engineering autonomous multi-agent orchestration frameworks, sovereign AI infrastructure, enterprise digital platforms, and high-concurrency distributed backend systems from first principles. Founder &amp; CEO of <strong>Varellen Technologies</strong> and Founder &amp; Systems Architect of <strong>Norveth</strong> (<a href="https://norveth.app" className="underline font-medium">norveth.app</a> — AI website intelligence &amp; Model Context Protocol tooling). Computer Science &amp; Distributed Systems background at <strong>VIT-AP University</strong> (2024–2028).
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
              <li>Guiding venture roadmap and system design for enterprise digital platforms, autonomous AI workflow automation pipelines, and high-throughput cloud infrastructure.</li>
              <li>Architected fault-tolerant microservice meshes with sub-millisecond API dispatch, zero-trust security postures, and automated Docker/K8s CI/CD pipelines.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-[#0f172a]">Norveth</span>
                <span className="text-xs font-semibold text-neutral-600"> — Founder &amp; Systems Architect (<a href="https://norveth.app" className="underline">norveth.app</a>)</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | AI INTELLIGENCE</span>
            </div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1 leading-relaxed">
              <li>Architected full-lifecycle website intelligence platform utilizing <strong>real Chromium headless rendering</strong>, <strong>Model Context Protocol (MCP)</strong> server integration, and automated OWASP Top 10 security/performance diagnostics.</li>
              <li>Engineered distributed scan workers, deterministic AI code remediation pipelines, and developer CLI tools for code-level diagnostics.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-sm font-bold text-[#0f172a]">Independent Systems Engineering &amp; Strategic Advisory</span>
                <span className="text-xs font-semibold text-neutral-600"> — Principal Technical Consultant</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | GLOBAL REMOTE</span>
            </div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1 leading-relaxed">
              <li>Delivering high-concurrency backend APIs, custom multi-agent orchestration frameworks, and mission-critical database designs for international founders.</li>
              <li>Conducted empirical research in agent convergence, vector embedding spaces, and proactive cyber attack surface mapping (OSPRED framework).</li>
            </ul>
          </div>
        </section>

        {/* Flagship Architectures & Software Systems */}
        <section className="mb-6 space-y-3.5">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Flagship Architectures &amp; Software Systems
          </h2>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">Multi-Agent Orchestration Platform</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Autonomous AI</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Python, FastAPI, LangChain, Redis, Vector DBs</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Autonomous execution kernel where specialized agent personas collaborate on complex, multi-stage workflows with deterministic routing, shared vector memory persistence, and asynchronous tool invocation.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">AI Workflow Automation Engine</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Enterprise Automation</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Next.js 16, Node.js, PostgreSQL, Docker, WebSockets</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Visual pipeline compiler translating high-level natural language instructions into distributed, fault-tolerant worker execution graphs with live WebSocket telemetry.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">OSPRED Autonomous Security Engine</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Cybersecurity</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Python, FastAPI, Docker, Linux Hardening, CVE Feeds</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              AI-assisted security platform executing continuous vulnerability surface discovery, automated threat intelligence synthesis, and zero-trust Linux server hardening.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">Neural Knowledge Retrieval Engine &amp; ShadowForge Intelligence</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">RAG &amp; Web3</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Python, ChromaDB, OpenAI, Solidity, Web3.js</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Sub-millisecond dense vector RAG engine over unstructured corpora alongside an EVM ledger intelligence engine for heuristic pattern recognition and smart contract auditing.
            </p>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section className="mb-6 space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Technical Arsenal &amp; Domain Mastery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Autonomous AI:</div>
            <div className="sm:col-span-3 text-neutral-700">Multi-Agent Swarms, Model Context Protocol (MCP), LangChain, LlamaIndex, RAG Pipelines, Vector DBs (ChromaDB, Pinecone), Prompt Optimization.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Languages:</div>
            <div className="sm:col-span-3 text-neutral-700">Python, TypeScript, JavaScript, Go, Rust, Java, C/C++, SQL, Bash/Shell, Solidity.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Backend &amp; Infra:</div>
            <div className="sm:col-span-3 text-neutral-700">FastAPI, Node.js, Express, Next.js 16 (App Router), React 19, PostgreSQL, Redis Streams, MongoDB, Docker, Kubernetes, AWS, Nginx, CI/CD.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Security &amp; Web3:</div>
            <div className="sm:col-span-3 text-neutral-700">OWASP Top 10 Hardening, Attack-Surface Mapping, Zero-Trust Architecture, EVM Smart Contracts, Cryptographic Protocols, Network Triage.</div>
          </div>
        </section>

        {/* Education & Competitions */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Education &amp; Competitions
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
            <strong>Hackathons:</strong> Google Agentic AI Hackathon, Slack AI Hackathon, Qwen Global Hackathon, Bank of India National Hackathon.
          </div>
        </section>
      </div>
    </main>
  )
}
