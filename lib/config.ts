// The three brands (see rich/docs/AGENCIES.md). Change a URL here and every link follows.
// janeory and zenvarq domains are not bought yet: point these at a preview URL until they are.
export const BRANDS = {
  zenvarq: 'https://zenvarq.com',
  norveth: 'https://norveth.app',
  janeory: 'https://janeorystudios.com',
} as const

// Single source of truth for how buyers reach Ashok.
export const CONTACT = {
  // WhatsApp number in international format, digits only, no "+" or spaces
  // (e.g. '919876543210'). Leave empty to hide every WhatsApp button.
  whatsapp: '[removed]', // [removed]
  // founder@norveth.app forwarding (Cloudflare Email Routing) is unverified. Switch once a test mail arrives.
  email: 'hello@norveth.app',
  // Services studio: prices + booking live here, not on this site.
  studio: BRANDS.norveth,
} as const

export const whatsappLink = (text: string) =>
  CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}` : ''
