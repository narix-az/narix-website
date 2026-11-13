import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/i18n/routes';

// Plus Jakarta Sans covers the full Azerbaijani alphabet, including capital Ə.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Each page sets its own title, description and language alternates
  // (see src/lib/seo.ts); these are the site-wide defaults.
  title: {
    default: 'Narix — tətbiqlər, veb saytlar və AI sistemləri',
    template: '%s · Narix',
  },
  description:
    'Narix veb saytlar, mobil və veb tətbiqlər, AI avtomatlaşdırma və DevOps infrastrukturu qurur. Bakı, Azərbaycan.',
  applicationName: 'Narix',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Narix', url: SITE_URL }],
  creator: 'Narix',
  publisher: 'Narix',
  category: 'technology',
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // favicon.ico, icon.png and apple-icon.png in this folder are picked up by Next.js
  verification: {
    google: 'zzQIK4SsofBP1Ihps46_HE26vWbs4KBgtTo_M9ezQAE',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Narix',
    alternateName: 'Narix.az',
    url: SITE_URL,
    logo: `${SITE_URL}/brand/narix-icon-512.png`,
    email: 'hello@narix.az',
    telephone: '+994 51 560 06 25',
    description:
      'Narix is a product and engineering studio based in Baku, Azerbaijan. We build websites, mobile and web apps, AI automation and DevOps infrastructure.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressCountry: 'AZ',
    },
    areaServed: ['AZ', 'TR', 'EU', 'US'],
    sameAs: [
      'https://www.linkedin.com/company/narix',
      'https://github.com/narix-az',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@narix.az',
        telephone: '+994 51 560 06 25',
        availableLanguage: ['English', 'Azerbaijani'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Narix',
    description:
      'Websites, mobile and web apps, AI automation and DevOps infrastructure.',
    inLanguage: ['az', 'en'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Narix',
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: '$$',
    telephone: '+994 51 560 06 25',
    email: 'hello@narix.az',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressCountry: 'AZ',
    },
    areaServed: ['Azerbaijan', 'Turkey', 'Europe', 'United States'],
    serviceType: [
      'Website Development',
      'Mobile and Web App Development',
      'AI Automation and Agents',
      'DevOps and Cloud Infrastructure',
      'Product Design and Branding',
      'Software Testing and QA',
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Azerbaijani is the default language; the pages under /en are English.
    // The <html> tag is shared, so its lang is corrected for /en before paint.
    <html lang="az" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "var p=location.pathname;if(p==='/en'||p.indexOf('/en/')===0||p.indexOf('/en.')===0){document.documentElement.lang='en'}",
          }}
        />
        {/* Structured data (JSON-LD) for Google: Organization, WebSite, ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
