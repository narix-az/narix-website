import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE = 'https://narix.az';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE}/`,
          az: `${SITE}/`,
          'x-default': `${SITE}/`,
        },
      },
    },
    {
      url: `${SITE}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE}/about`,
          az: `${SITE}/about`,
          'x-default': `${SITE}/about`,
        },
      },
    },
    {
      url: `${SITE}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE}/services`,
          az: `${SITE}/services`,
          'x-default': `${SITE}/services`,
        },
      },
    },
    {
      url: `${SITE}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE}/contact`,
          az: `${SITE}/contact`,
          'x-default': `${SITE}/contact`,
        },
      },
    },
  ];

  return routes;
}
