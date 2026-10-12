'use client';

import React, { type CSSProperties } from 'react';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import type { ServiceContent } from '@/i18n/types';
import type { Accent } from '@/data/deliveredProjects';
import styles from './Services.module.css';

const iconKeys = ['automation', 'chatbot', 'analytics', 'web', 'content', 'strategy'] as const;
type IconKey = (typeof iconKeys)[number];

const accentMap: Accent[] = ['orange', 'pink', 'violet', 'blue', 'lime', 'yellow'];

/** Zig-zag bento: wide cards at 0, 3 and 4 → rows of [2+1], [1+2], [2+1]. */
const wideIndexes = new Set([0, 3, 4]);

const iconPaths: Record<IconKey, React.ReactElement> = {
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
    </svg>
  ),
  chatbot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <path d="M12 3v3M8 12h.01M16 12h.01M9 16h6" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l2.4 5.4L20 9l-4 3.8.9 5.6L12 15.7 7.1 18.4 8 12.8 4 9l5.6-1.6L12 2z" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 14h4" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
};

/** Small decorative illustrations shown on the wide cards. */
function Illustration({ iconKey }: { iconKey: IconKey }) {
  if (iconKey === 'automation') {
    return (
      <div className={styles.illoFlow} aria-hidden>
        {['Lead', 'AI', 'CRM', '✓'].map((n, i) => (
          <React.Fragment key={n}>
            {i > 0 && (
              <span className={styles.illoLine}>
                <i style={{ animationDelay: `${i * 0.35}s` }} />
              </span>
            )}
            <span className={styles.illoNode}>{n}</span>
          </React.Fragment>
        ))}
      </div>
    );
  }
  if (iconKey === 'web') {
    return (
      <div className={styles.illoBrowser} aria-hidden>
        <div className={styles.illoBar}>
          <i /><i /><i />
        </div>
        <div className={styles.illoPage}>
          <span className={styles.illoHeroBlock} />
          <span className={styles.illoLineLg} />
          <span className={styles.illoLineSm} />
          <div className={styles.illoCards}>
            <span /><span /><span />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.illoSwatches} aria-hidden>
      {(['orange', 'pink', 'violet', 'lime'] as const).map((c, i) => (
        <span key={c} style={{ background: `var(--${c})`, animationDelay: `${i * 0.2}s` }} />
      ))}
      <strong>Aa</strong>
    </div>
  );
}

interface ServicesProps {
  variant?: 'full' | 'preview';
}

function ServiceCard({
  service,
  iconKey,
  accent,
  index,
  wide,
}: {
  service: ServiceContent;
  iconKey: IconKey;
  accent: Accent;
  index: number;
  wide: boolean;
}) {
  const vars = {
    '--accent': `var(--${accent})`,
    '--accent-soft': `var(--${accent}-soft)`,
    '--accent-ink': `var(--${accent}-ink)`,
  } as CSSProperties;

  return (
    <Reveal delay={(index % 3) * 0.08} y={32} className={wide ? styles.wide : undefined}>
      <article className={styles.card} style={vars}>
        <div className={styles.content}>
          <div className={styles.cardTop}>
            <span
              className={styles.iconWrap}
              data-dark={accent === 'violet' || accent === 'blue' || undefined}
            >
              {iconPaths[iconKey]}
            </span>
            <span className={styles.numBadge} aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDesc}>{service.description}</p>
          <div className={styles.tags}>
            {service.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        {wide && <Illustration iconKey={iconKey} />}
      </article>
    </Reveal>
  );
}

export default function Services({ variant = 'full' }: ServicesProps) {
  const t = useT();
  const list = t.services.list;
  const preview = variant === 'preview';
  const display = preview ? list.slice(0, 3) : list;

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <header className="sec-head">
          <Reveal>
            <span className="eyebrow">{t.services.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="sec-title">
              {t.services.titleStart}{' '}
              <span className="gradient-text">{t.services.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-desc">{t.services.desc}</p>
          </Reveal>
        </header>

        <div className={styles.grid}>
          {display.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              iconKey={iconKeys[i] ?? 'automation'}
              accent={accentMap[i] ?? 'orange'}
              index={i}
              wide={!preview && wideIndexes.has(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
