'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Expertise from '@/components/expertise'
import TechStack from '@/components/tech-stack'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <TechStack />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
