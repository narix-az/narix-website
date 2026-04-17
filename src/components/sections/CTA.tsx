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
            <span className={styles.aurora} aria-hidden />
            <span className={styles.grid} aria-hidden />
            <span className={styles.glowA} aria-hidden />
            <span className={styles.glowB} aria-hidden />
            <span className={styles.borderOverlay} aria-hidden />

            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className={styles.title}>
              {t.titleStart}
              <br />
              <span className="gradient-text">{t.titleAccent}</span>
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

            <div className={styles.meta}>
              <span><Dot /> {t.metaResponse}</span>
              <span><Dot /> {t.metaCall}</span>
              <span><Dot /> {t.metaProposal}</span>
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

function Dot() {
  return <span className={styles.metaDot} aria-hidden />;
}
