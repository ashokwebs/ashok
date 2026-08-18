import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Executive Resume & Systems Architecture Spec',
  description:
    'Official executive resume of Ashok Pasala — Founder & CEO of Varellen Technologies, Founder & Systems Architect of Norveth, AI Systems Architect. 31 Hackathons, 22 Shipped Systems.',
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
            <strong>Founder, AI Systems Architect, and Deep Tech Engineer</strong> building sovereign AI infrastructure, autonomous multi-agent swarms, and high-concurrency distributed backend systems from first principles. Founder &amp; CEO of <strong>Varellen Technologies</strong> and <strong>Norveth</strong> (<a href="https://norveth.app" className="underline font-medium">norveth.app</a>). Track record of shipping <strong>22+ production-grade AI platforms across 31 global hackathons</strong> on Devpost. Computer Science &amp; Distributed Systems background at <strong>VIT-AP University</strong> (2024–2028).
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
              <span className="text-xs font-mono text-neutral-500">2024 – PRESENT | AI INTELLIGENCE PLATFORM</span>
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

        {/* Flagship Architectures & Shipped Systems (22+ Projects) */}
        <section className="mb-6 space-y-3.5">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Flagship Architectures &amp; Shipped Systems (22+ Projects)
          </h2>

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
                <span className="text-xs font-bold text-[#0f172a]">CompanyBrain_AI &amp; Qwen Chaos MemoryAgent</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Enterprise &amp; Neural AI</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Python, Vector Search, FastAPI, Qwen LLM, PostgreSQL</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Autonomous enterprise AI executive fusing contracts, financials, and roadmaps alongside a self-persistent MemoryAgent with cross-session state recall engineered for the Qwen Global Hackathon.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">ResQNet Disaster Response Grid &amp; LaunchLens</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Crisis AI &amp; Due Diligence</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Next.js 16, Node.js, WebSockets, Geospatial AI, Python</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Real-time crisis orchestration grid for incident severity triage and life-saving resource dispatch paired with a multi-model market validation engine for VC due diligence.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f172a]">OSPRED Autonomous Security Engine &amp; ShadowForge</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 font-medium">Security &amp; Web3</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Python, FastAPI, Docker, Linux Hardening, Solidity, Web3.js</span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Proactive cybersecurity surface discovery, automated threat intelligence synthesis, and zero-trust Linux hardening combined with EVM on-chain intelligence auditing.
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
            <div className="sm:col-span-3 text-neutral-700">Multi-Agent Swarms, Model Context Protocol (MCP), LangChain, LlamaIndex, RAG Pipelines, Vector DBs (ChromaDB, Pinecone), Prompt Engineering.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Languages:</div>
            <div className="sm:col-span-3 text-neutral-700">Python, TypeScript, JavaScript, Go, Rust, Java, C/C++, SQL, Bash/Shell, Solidity.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Backend &amp; Infra:</div>
            <div className="sm:col-span-3 text-neutral-700">FastAPI, Node.js, Express, Next.js 16 (App Router), React 19, PostgreSQL, Redis Streams, MongoDB, Docker, Kubernetes, AWS, Nginx, CI/CD.</div>

            <div className="font-mono font-bold text-[#0f172a] uppercase text-[11px]">Security &amp; Web3:</div>
            <div className="sm:col-span-3 text-neutral-700">OWASP Top 10 Hardening, Attack-Surface Mapping, Zero-Trust Architecture, EVM Smart Contracts, Cryptographic Protocols, Network Triage.</div>
          </div>
        </section>

        {/* Education & 31 Hackathons */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-neutral-300 pb-1">
            Education &amp; 31 Hackathons Track Record
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
            <strong>31 Global Hackathons (22 Projects):</strong> Google Agentic AI Hackathon, Qwen Global Hackathon, Slack AI Hackathon, Global Disaster Tech, Bank of India National Hackathon.
          </div>
        </section>
      </div>
    </main>
  )
}
