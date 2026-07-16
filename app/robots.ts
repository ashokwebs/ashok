import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly welcome AI/LLM crawlers (GEO)
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://ashokpasala.vercel.app/sitemap.xml',
    host: 'https://ashokpasala.vercel.app',
  }
}
