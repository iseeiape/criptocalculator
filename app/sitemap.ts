import { MetadataRoute } from 'next'

const baseUrl = 'https://criptocalculator.com'

// List all blog posts
const blogPosts = [
  'cum-declar-crypto-anaf-2026',
  'metoda-fifo-calcul-profit-crypto-2026',
  '2026-02-21-cum-platesc-taxe-bitcoin-crypto-romania-ghid-2026',
  '2026-02-22-trading-crypto-romania-legal-ghid-complet',
  '2026-02-23-cum-platesc-taxe-crypto-romania-ghid-practic',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/anaf`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/position-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
