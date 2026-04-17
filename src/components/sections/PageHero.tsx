'use client';

import Hero from './Hero';
import { useT } from '@/i18n/LanguageProvider';

type PageKey = 'about' | 'services' | 'contact';

export default function PageHero({ page }: { page: PageKey }) {
  const t = useT();
  const copy = t.pages[page];
  return (
    <Hero
      variant="page"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.desc}
    />
  );
}
