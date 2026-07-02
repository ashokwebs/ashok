'use client'

import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Multi-Agent Orchestration Platform',
    description: 'AI orchestration framework where specialized agents collaborate to execute complex workflows autonomously.',
    tags: ['Python', 'FastAPI', 'LangChain', 'LLMs', 'Redis'],
    link: 'https://github.com/ashokwebs',
    github: 'https://github.com/ashokwebs',
  },
  {
    title: 'AI Workflow Automation Dashboard',
    description: 'Visual workflow builder for AI-powered business automation with real-time execution monitoring.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/ashokwebs',
    github: 'https://github.com/ashokwebs',
  },
  {
    title: 'Personal Knowledge Engine',
    description: 'Semantic search engine powered by embeddings and Retrieval-Augmented Generation (RAG) technology.',
    tags: ['Python', 'ChromaDB', 'OpenAI', 'Streamlit'],
    link: 'https://github.com/ashokwebs',
    github: 'https://github.com/ashokwebs',
  },
  {
    title: 'SaaS Analytics Platform',
    description: 'Modern analytics dashboard supporting user tracking, funnels, and real-time events with WebSocket integration.',
    tags: ['Next.js', 'Express', 'MongoDB', 'WebSockets'],
    link: 'https://github.com/ashokwebs',
    github: 'https://github.com/ashokwebs',
  },
  {
    title: 'API Integration Framework',
    description: 'Reusable API orchestration framework for scalable integrations and third-party service management.',
    tags: ['Node.js', 'Redis', 'TypeScript', 'REST'],
    link: 'https://github.com/ashokwebs',
    github: 'https://github.com/ashokwebs',
  },
  {
    title: 'DeFi Portfolio Tracker',
    description: 'Blockchain portfolio aggregation dashboard for tracking and analyzing cryptocurrency holdings.',
    tags: ['React', 'Web3.js', 'Ethers.js', 'Blockchain'],
    link: 'https://github.com/ashokwebs',
    github: 'https://github.com/ashokwebs',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Heading */}
          <div className="space-y-6 max-w-2xl">
            <h2 
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              A selection of projects showcasing full-stack development, AI systems, and innovative solutions.
            </p>
            <p className="text-base text-muted-foreground font-light mt-2">
              More projects are available on GitHub, including developer tools, AI experiments, cybersecurity research, and open-source utilities.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group p-8 glass-card flex flex-col animate-slide-in-up"
              >
                <div className="space-y-6 flex-1">
                  <div className="space-y-3">
                    <h3 
                      className="text-xl font-bold text-foreground"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 mt-6 border-t border-border">
                  <a
                    href={project.link}
                    aria-label={`View live demo for ${project.title}`}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus:outline-none rounded-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    aria-label={`View source code for ${project.title}`}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus:outline-none rounded-sm"
                  >
                    <Code2 size={16} />
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
