'use client';

import React, { useRef, type MouseEvent } from 'react';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import type { ServiceContent } from '@/i18n/types';
import styles from './Services.module.css';

const iconKeys = ['automation', 'chatbot', 'analytics', 'web', 'content', 'strategy'] as const;
const accentMap = ['violet', 'blue', 'cyan', 'violet', 'cyan', 'blue'] as const;

const iconPaths: Record<string, React.ReactElement> = {
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
    </svg>
  ),
  chatbot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <path d="M12 3v3M8 12h.01M16 12h.01M9 16h6" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l2.4 5.4L20 9l-4 3.8.9 5.6L12 15.7 7.1 18.4 8 12.8 4 9l5.6-1.6L12 2z" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 14h4" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
};

interface ServicesProps {
  variant?: 'full' | 'preview';
}

function ServiceCard({
  service,
  iconKey,
  accent,
  index,
}: {
  service: ServiceContent;
  iconKey: string;
  accent: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const numLabel = String(index + 1).padStart(2, '0');

  return (
    <Reveal delay={(index % 3) * 0.08} y={32}>
      <div
        ref={ref}
        onMouseMove={onMove}
        className={`${styles.card} ${styles[`accent-${accent}`]} u-conic-host u-hover-sheen`}
      >
        <span className={styles.spot} aria-hidden />
        <span className={styles.borderOverlay} aria-hidden />
        <span className="u-conic-border" aria-hidden />
        <span className="u-sheen" aria-hidden />

        <span className={styles.numBadge} aria-hidden>{numLabel}</span>

        <div className={styles.iconWrap}>
          <span className={styles.iconGlow} aria-hidden />
          {iconPaths[iconKey]}
        </div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.description}</p>
        <div className={styles.tags}>
          {service.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <span className={styles.arrow} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Reveal>
  );
}

export default function Services({ variant = 'full' }: ServicesProps) {
  const t = useT();
  const list = t.services.list;
  const display = variant === 'preview' ? list.slice(0, 3) : list;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <Reveal>
            <span className="eyebrow">{t.services.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {t.services.titleStart}
              <br />
              <span className="gradient-text">{t.services.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.desc}>{t.services.desc}</p>
          </Reveal>
        </header>

        <div className={styles.grid}>
          {display.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              iconKey={iconKeys[i] ?? 'automation'}
              accent={accentMap[i] ?? 'violet'}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
