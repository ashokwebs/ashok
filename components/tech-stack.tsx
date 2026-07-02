'use client'

export default function TechStack() {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'Bash', 'Rust', 'Go']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Three.js', 'GSAP']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'Django', 'REST APIs', 'GraphQL', 'WebSockets', 'gRPC', 'Microservices']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'SQLite', 'Supabase', 'Prisma ORM', 'Vector DBs']
    },
    {
      title: 'AI',
      skills: ['AI Agents', 'Multi-Agent Systems', 'LangChain', 'RAG', 'Prompt Engineering', 'Vector Search', 'Knowledge Retrieval', 'OpenAI']
    },
    {
      title: 'DevOps & Infra',
      skills: ['Linux', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'CI/CD', 'AWS', 'Nginx', 'Terraform']
    }
  ]

  return (
    <section id="tech-stack" className="relative w-full py-24 sm:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="space-y-6 max-w-2xl">
            <h2 
              className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              The tools, frameworks, and technologies I use to build scalable systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group p-8 glass-card animate-slide-in-up hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 
                  className="text-xl font-bold text-foreground mb-6"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-slate-100 text-foreground/80 border border-slate-200"
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
