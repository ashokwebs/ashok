import { MetadataRoute } from 'next'

const BASE = 'https://ashokpasala.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: BASE,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/resume`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
