'use client';

import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import styles from './CTA.module.css';

export default function CTA() {
  const t = useT().cta;

  return (
    <section id="cta" className={styles.section}>
      <div className="container">
        <Reveal y={36}>
          <div className={styles.panel}>
            <span className={`${styles.blob} ${styles.blobA}`} aria-hidden />
            <span className={`${styles.blob} ${styles.blobB}`} aria-hidden />
            <span className={`${styles.blob} ${styles.blobC}`} aria-hidden />
            <span className={styles.grid} aria-hidden />

            <div className={styles.inner}>
              <span className={styles.eyebrow}>{t.eyebrow}</span>
              <h2 className={styles.title}>
                {t.titleStart} <span className={styles.accent}>{t.titleAccent}</span>
              </h2>
              <p className={styles.desc}>{t.desc}</p>
              <div className={styles.actions}>
                <Button href="/contact" variant="gradient" size="lg" iconRight={<ArrowIcon />}>
                  {t.book}
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  {t.start}
                </Button>
              </div>

              <ul className={styles.meta}>
                <li><CheckIcon /> {t.metaResponse}</li>
                <li><CheckIcon /> {t.metaCall}</li>
                <li><CheckIcon /> {t.metaProposal}</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
