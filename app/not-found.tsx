'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="glass-card max-w-lg w-full p-12 flex flex-col items-center text-center animate-slide-in-up relative z-10">
        <h1 
          className="text-8xl sm:text-9xl font-bold text-foreground tracking-tighter opacity-10"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          404
        </h1>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            Page not found
          </h2>
          <p className="text-muted-foreground font-light mb-8 text-sm sm:text-base">
            The page you are looking for doesn't exist or has been moved to a new URL.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
          >
            <ArrowLeft size={18} />
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
