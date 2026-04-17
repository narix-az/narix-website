import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Orbs from '@/components/shared/Orbs';
import SmoothScroll from '@/components/shared/SmoothScroll';
import ScrollProgress from '@/components/shared/ScrollProgress';
import { LanguageProvider } from '@/i18n/LanguageProvider';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://narix.az';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Narix — AI Systems That Run Your Business',
    template: '%s · Narix',
  },
  description:
    'Narix — AI avtomatlaşdırma agentliyi. Biznesiniz üçün AI iş axınları, AI agentlər, çatbotlar, analitika və müasir veb sistemlər hazırlayırıq. Bakı, Azərbaycan.',
  applicationName: 'Narix',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    // EN
    'Narix',
    'Narix AI',
    'Narix Azerbaijan',
    'AI automation agency',
    'AI agency Azerbaijan',
    'AI automation Baku',
    'AI agents',
    'AI chatbots',
    'workflow automation',
    'business process automation',
    'AI analytics',
    'web development Azerbaijan',
    'custom software Azerbaijan',
    'AI consulting Baku',
    'OpenAI integration',
    'n8n automation',
    'Make.com automation',
    'Zapier automation',
    // AZ
    'süni intellekt',
    'AI avtomatlaşdırma',
    'biznes avtomatlaşdırma',
    'AI agentlər',
    'çatbot hazırlanması',
    'AI çatbot',
    'veb sayt hazırlanması',
    'veb sayt hazırlanması Bakı',
    'süni intellekt Azərbaycan',
    'AI həlləri Azərbaycan',
    'avtomatlaşdırma Bakı',
    'AI analitika',
    'maliyyə hesablayıcı',
    'online satış avtomatlaşdırma',
    'Narix.az',
  ],
  authors: [{ name: 'Narix', url: SITE_URL }],
  creator: 'Narix',
  publisher: 'Narix',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      az: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Narix — AI Systems That Run Your Business',
    description:
      'AI workflow automation, AI agents, analytics and modern software — built for fast-moving teams in Azerbaijan and beyond.',
    siteName: 'Narix',
    locale: 'en_US',
    alternateLocale: ['az_AZ'],
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Narix — AI Systems That Run Your Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narix — AI Systems That Run Your Business',
    description:
      'AI workflow automation, AI agents, analytics and modern software — built for fast-moving teams.',
    images: ['/opengraph-image'],
  },
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    // TODO: Replace with your Google Search Console verification string.
    // Get it from: https://search.google.com/search-console → Add property (narix.az) → HTML tag method → copy the content="..." value.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Narix',
    alternateName: 'Narix AI',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: 'hello@narix.az',
    telephone: '+994 51 560 06 25',
    description:
      'Narix is an AI automation studio based in Baku, Azerbaijan. We design, build and operate AI workflows, agents, analytics and modern web platforms.',
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
      'AI automation, AI agents, analytics and modern web platforms for fast-moving teams.',
    inLanguage: ['en', 'az'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Narix — AI Automation Studio',
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
      'AI Workflow Automation',
      'AI Chatbots & Agents',
      'AI Analytics',
      'Web & System Development',
      'AI Strategy & Audits',
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Sync the document.lang attribute with the user's saved language as early as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('narix-lang');if(l==='az'||l==='en'){document.documentElement.lang=l;}}catch(e){}`,
          }}
        />
        {/* Structured data (JSON-LD) for Google: Organization, WebSite, ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <ScrollProgress />
            <Orbs />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
