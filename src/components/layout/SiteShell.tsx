import type { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/shared/SmoothScroll';
import ScrollProgress from '@/components/shared/ScrollProgress';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import type { Lang } from '@/i18n/types';

/** Everything around a page — navigation, footer, scrolling — in one language. */
export default function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <LanguageProvider lang={lang}>
      <SmoothScroll>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
