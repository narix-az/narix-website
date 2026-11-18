import type { Metadata } from 'next';
import { LANGS, SITE_URL, absoluteUrl } from '@/i18n/routes';
import type { Lang } from '@/i18n/types';

export type PageKey = 'home' | 'about' | 'services' | 'projects' | 'contact';

export const PAGE_PATHS: Record<PageKey, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
};

const COPY: Record<Lang, Record<PageKey, { title: string; description: string }>> = {
  az: {
    home: {
      title: 'Narix — tətbiqlər, veb saytlar və AI sistemləri',
      description:
        'Narix veb saytlar, mobil və veb tətbiqlər, AI avtomatlaşdırma və DevOps infrastrukturu qurur. İdeyadan işlək məhsula qədər bir komanda. Bakı, Azərbaycan.',
    },
    about: {
      title: 'Haqqımızda',
      description:
        'Narix — Bakıda mühəndis, dizayner və AI mütəxəssislərindən ibarət komanda. Rəqəmsal məhsulları dizayn edir, qurur və dəstəkləyirik: veb saytlar, tətbiqlər, AI avtomatlaşdırma və infrastruktur.',
    },
    services: {
      title: 'Xidmətlər',
      description:
        'Veb saytlar və platformalar, mobil və veb tətbiqlər, AI avtomatlaşdırma və agentlər, DevOps və bulud infrastrukturu, dizayn, test və keyfiyyət təminatı.',
    },
    projects: {
      title: 'Layihələr',
      description:
        'Layihələrimiz: Chamanly.az, inji, BirCV, Narix Academy, AI Monitor, nar.code, danisir.ai və başqaları.',
    },
    contact: {
      title: 'Əlaqə',
      description:
        'Layihəniz haqqında yazın: hello@narix.az və ya WhatsApp +994 51 560 06 25. 24 saat ərzində konkret addımlarla cavab veririk.',
    },
  },
  en: {
    home: {
      title: 'Narix — apps, websites and AI systems',
      description:
        'Narix builds websites, mobile and web apps, AI automation and DevOps infrastructure. One team from idea to a running product. Baku, Azerbaijan.',
    },
    about: {
      title: 'About',
      description:
        'Narix is a team of engineers, designers and AI specialists in Baku. We design, build and maintain digital products: websites, apps, AI automation and infrastructure.',
    },
    services: {
      title: 'Services',
      description:
        'Websites and platforms, mobile and web apps, AI automation and agents, DevOps and cloud infrastructure, design, testing and quality assurance.',
    },
    projects: {
      title: 'Projects',
      description:
        'Our projects: Chamanly.az, inji, BirCV, Narix Academy, AI Monitor, nar.code, danisir.ai and more.',
    },
    contact: {
      title: 'Contact',
      description:
        'Tell us about your project: hello@narix.az or WhatsApp +994 51 560 06 25. We reply within 24 hours with concrete next steps.',
    },
  },
};

/** Title, description, canonical URL and language alternates for one page. */
export function pageMetadata(lang: Lang, page: PageKey): Metadata {
  const { title, description } = COPY[lang][page];
  const path = PAGE_PATHS[page];
  const url = absoluteUrl(lang, path);
  const languages: Record<string, string> = { 'x-default': absoluteUrl('az', path) };
  LANGS.forEach((l) => {
    languages[l] = absoluteUrl(l, path);
  });
  const fullTitle = page === 'home' ? title : `${title} · Narix`;

  return {
    // the home title is complete as it is; other pages get the "· Narix" suffix
    title: page === 'home' ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Narix',
      title: fullTitle,
      description,
      locale: lang === 'az' ? 'az_AZ' : 'en_US',
      alternateLocale: lang === 'az' ? ['en_US'] : ['az_AZ'],
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Narix' }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [`${SITE_URL}/opengraph-image`] },
  };
}
