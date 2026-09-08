import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/countries',
    '/courses',
    '/visa-guidance',
    '/scholarships',
    '/faq',
    '/contact',
    '/book-consultation',
    '/blog',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
