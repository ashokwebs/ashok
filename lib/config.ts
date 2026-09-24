// Single source of truth for how people reach Ashok. Change a value here and every link follows.
export const SITE = 'https://ashokpasala.vercel.app'
export const NORVETH = 'https://norveth.app'

export const CONTACT = {
  email: 'hello@norveth.app',
  // Hiring goes through Norveth: scope, prices and booking live there, not on this site.
  studio: NORVETH,
} as const

export const PROFILES = [
  { label: 'GitHub', href: 'https://github.com/ashokwebs' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashok-raj-p-1b8539317/' },
  { label: 'X', href: 'https://x.com/ashokfounds' },
  { label: 'Devpost', href: 'https://devpost.com/ashokashishms' },
] as const
