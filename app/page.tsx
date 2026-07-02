'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Code2, Zap, Network, Cpu } from 'lucide-react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Expertise from '@/components/expertise'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
