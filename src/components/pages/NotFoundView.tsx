'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { LanguageProvider, useT } from '@/i18n/LanguageProvider';
import { DEFAULT_LANG, parsePath } from '@/i18n/routes';
import type { Lang } from '@/i18n/types';
import styles from '@/app/not-found.module.css';

function Message() {
  const t = useT().notFound;
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.desc}>{t.desc}</p>
          <div className={styles.actions}>
            <Button href="/" variant="primary" size="lg">
              {t.home}
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              {t.contact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// One 404 page serves every unknown address, so it cannot know its language
// when it is built. It starts in the default language and switches to English
// once it can see that the address is under /en.
export default function NotFoundView() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  useEffect(() => {
    setLang(parsePath(window.location.pathname).lang);
  }, []);

  return (
    <LanguageProvider lang={lang} standalone>
      <Navbar />
      <main>
        <Message />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
