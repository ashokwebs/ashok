// Single source of truth for how buyers reach Ashok.
export const CONTACT = {
  // WhatsApp number in international format, digits only, no "+" or spaces
  // (e.g. '919876543210'). Leave empty to hide every WhatsApp button.
  whatsapp: '[removed]', // [removed]
  email: 'founder@norveth.app',
  // Services studio: prices + booking live here, not on this site.
  studio: 'https://norveth.app',
} as const

export const whatsappLink = (text: string) =>
  CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}` : ''
