'use client'

const categories = [
  {
    title: 'Autonomous AI & Agents',
    description: 'Frameworks, vector memory & LLM runtimes',
    skills: [
      'Multi-Agent Systems',
      'LangChain',
      'LlamaIndex',
      'Vector Search',
      'ChromaDB',
      'Pinecone',
      'RAG Architectures',
      'MCP (Model Context Protocol)',
      'Prompt Optimization',
      'OpenAI API',
      'Claude API',
      'Ollama Local Models',
    ],
  },
  {
    title: 'Languages & Core Systems',
    description: 'Polyglot programming & systems execution',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'Go',
      'Rust',
      'Java',
      'C / C++',
      'SQL',
      'Bash / Shell Scripting',
      'Solidity',
    ],
  },
  {
    title: 'Distributed Backend & APIs',
    description: 'High-throughput servers, microservices & streams',
    skills: [
      'FastAPI',
      'Node.js',
      'Express',
      'Django',
      'RESTful APIs',
      'GraphQL',
      'WebSockets',
      'gRPC',
      'Microservice Meshes',
      'OAuth2 & JWT',
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational, document, cache & vector storage',
    skills: [
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'MySQL',
      'Supabase',
      'Prisma ORM',
      'SQLite',
      'Vector Databases',
      'Connection Pooling',
    ],
  },
  {
    title: 'DevOps & Hardened Cloud',
    description: 'Container orchestration, Linux & CI/CD pipelines',
    skills: [
      'Docker',
      'Kubernetes',
      'Linux Kernel Hardening',
      'Nginx',
      'AWS (EC2, S3, RDS)',
      'GitHub Actions CI/CD',
      'Terraform',
      'Vercel Edge',
      'Zero-Downtime Deploys',
    ],
  },
  {
    title: 'Web Platforms & Interfaces',
    description: 'Next.js 16, React 19 & accessible UI',
    skills: [
      'Next.js 16 (App Router)',
      'React 19',
      'Tailwind CSS v4',
      'HTML5 / CSS3',
      'Framer Motion',
      'Web Workers',
      'State Machines',
      'Accessibility (WCAG 2.1)',
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0c0d10] border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>05 // Arsenal &amp; Tooling</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Engineering Arsenal
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              The high-leverage frameworks, runtimes, distributed protocols, and infrastructure tools powering Varellen Technologies, Norveth, and production deployments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="glass-card-interactive p-5 sm:p-7 md:p-8 flex flex-col justify-between border border-white/[0.08]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Stack Category
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold text-white tracking-tight"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/[0.08]">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:border-white/[0.25] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
