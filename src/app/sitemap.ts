import type { MetadataRoute } from 'next';
import { LANGS, absoluteUrl } from '@/i18n/routes';
import { PAGE_PATHS, type PageKey } from '@/lib/seo';

export const dynamic = 'force-static';

const PRIORITY: Record<PageKey, number> = { home: 1, services: 0.9, projects: 0.9, about: 0.8, contact: 0.7 };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = Object.keys(PAGE_PATHS) as PageKey[];

  return pages.flatMap((page) => {
    const path = PAGE_PATHS[page];
    const languages: Record<string, string> = { 'x-default': absoluteUrl('az', path) };
    LANGS.forEach((lang) => {
      languages[lang] = absoluteUrl(lang, path);
    });
    return LANGS.map((lang) => ({
      url: absoluteUrl(lang, path),
      lastModified,
      changeFrequency: page === 'home' ? ('weekly' as const) : ('monthly' as const),
      priority: lang === 'az' ? PRIORITY[page] : PRIORITY[page] - 0.1,
      alternates: { languages },
    }));
  });
}
