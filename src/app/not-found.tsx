'use client';

import Button from '@/components/ui/Button';
import { useT } from '@/i18n/LanguageProvider';
import styles from './not-found.module.css';

export default function NotFound() {
  const t = useT().notFound;
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.desc}>{t.desc}</p>
          <div className={styles.actions}>
            <Button href="/" variant="gradient" size="lg">
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
