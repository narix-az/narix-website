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

export const metadata: Metadata = {
  metadataBase: new URL('https://narix.az'),
  title: {
    default: 'Narix — AI Systems That Run Your Business',
    template: '%s · Narix',
  },
  description:
    'Narix is an AI automation studio. We design, build, and operate AI workflows, agents, analytics and modern software for fast-moving teams.',
  keywords: [
    'AI automation',
    'AI agency',
    'AI agents',
    'workflow automation',
    'AI chatbots',
    'business intelligence',
    'web development',
    'Narix',
  ],
  authors: [{ name: 'Narix' }],
  openGraph: {
    type: 'website',
    title: 'Narix — AI Systems That Run Your Business',
    description:
      'AI workflow automation, AI agents, analytics and modern software — built for fast-moving teams.',
    siteName: 'Narix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narix — AI Systems That Run Your Business',
    description:
      'AI workflow automation, AI agents, analytics and modern software — built for fast-moving teams.',
  },
};

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
