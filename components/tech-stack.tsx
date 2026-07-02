'use client'

export default function TechStack() {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'Node.js', 'Express', 'Django']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']
    },
    {
      title: 'AI',
      skills: ['LangChain', 'RAG', 'OpenAI', 'Multi-Agent Systems']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Linux', 'AWS', 'GitHub Actions']
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
