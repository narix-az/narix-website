'use client';

import type { ReactElement } from 'react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { useT } from '@/i18n/LanguageProvider';
import styles from './About.module.css';

const iconKeys = ['mission', 'vision', 'team'] as const;

const icons: Record<string, ReactElement> = {
  mission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11" />
    </svg>
  ),
};

export default function About() {
  const t = useT().about;

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {t.titleStart}{' '}
              <span className="gradient-text">{t.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.desc}>{t.desc}</p>
          </Reveal>
        </header>

        <div className={styles.grid}>
          {t.pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08} y={32}>
              <div className={`${styles.card} u-conic-host u-hover-sheen`}>
                <span className={styles.borderOverlay} aria-hidden />
                <span className="u-conic-border" aria-hidden />
                <span className="u-sheen" aria-hidden />
                <div className={styles.icon}>
                  <span className={styles.iconGlow} aria-hidden />
                  {icons[iconKeys[i] ?? 'mission']}
                </div>
                <span className={styles.label}>{p.label}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className={styles.ctaRow}>
            <Button href="/services" variant="ghost" size="md">
              {t.ctaServices}
            </Button>
            <Button
              href="/contact"
              variant="gradient"
              size="md"
              iconRight={<ArrowIcon />}
            >
              {t.ctaWork}
            </Button>
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
