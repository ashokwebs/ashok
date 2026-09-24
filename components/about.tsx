import Image from 'next/image'

const HOW = [
  ['Quote first', 'You get a fixed price and a written scope before I start. No hourly meter.'],
  ['Show the failure', 'Security reviews come with the prompt, request or input that breaks the system, so you can reproduce it yourself.'],
  ['Tests over promises', 'When I say something works, there is a test that fails if it stops working.'],
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 md:grid-cols-[16rem_1fr] md:gap-14">
        <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-sm sm:w-56 md:w-full">
          <Image
            src="/ashok.jpeg"
            alt="Portrait of Ashok Pasala"
            fill
            sizes="(max-width: 768px) 224px, 256px"
            className="object-cover grayscale"
          />
        </div>

        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">About</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I study computer science at VIT-AP University in Andhra Pradesh (class of 2028). I learn by building the
              thing: around seventy projects so far, most of them across 50+ hackathons, from a C compiler backend to
              agent systems to graph analysis for an investigation tool.
            </p>
            <p>
              The work I care about most is the edge where AI systems fail. Models get wired into products faster than
              anyone checks what they do with hostile input. I build those systems, then attack them, and write up what
              broke and why in plain language.
            </p>
            <p>
              I work remotely with clients anywhere. Hiring goes through{' '}
              <a href="https://norveth.app" target="_blank" rel="noopener" className="link text-foreground">
                Norveth
              </a>
              .
            </p>
          </div>

          <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-faint">How I work</h3>
          <dl className="mt-5 space-y-5">
            {HOW.map(([t, d]) => (
              <div key={t} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-medium text-foreground">{t}</dt>
                <dd className="leading-relaxed text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
