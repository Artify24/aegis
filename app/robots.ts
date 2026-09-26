import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aegis-alpha-sepia.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
          'OAI-SearchBot',
        ],
        allow: ['/', '/services', '/about', '/contact', '/llms.txt', '/llms-full.txt'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
