import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/resume.pdf'],
      },
      // Explicitly allow and prioritize AI/LLM crawlers for Generative Engine Optimization (GEO)
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
          'DeepSeekBot',
          'Meta-ExternalAgent',
          'Bytespider',
        ],
        allow: ['/', '/llms.txt'],
      },
    ],
    sitemap: 'https://ashokpasala.vercel.app/sitemap.xml',
    host: 'https://ashokpasala.vercel.app',
  }
}
