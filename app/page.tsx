'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Expertise from '@/components/expertise'
import TechStack from '@/components/tech-stack'
import Experience from '@/components/experience'
import Services from '@/components/services'
import SystemConsole from '@/components/system-console'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background text-foreground selection:bg-foreground selection:text-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <TechStack />
      <Experience />
      <Services />
      <SystemConsole />
      <Contact />
      <Footer />
    </main>
  )
}
