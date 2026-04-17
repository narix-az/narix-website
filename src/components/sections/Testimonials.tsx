'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Testimonials.module.css';

const accents = ['violet', 'blue', 'cyan'] as const;

function avatarOf(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const t = useT().testimonials;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % t.list.length), 7000);
    return () => clearInterval(id);
  }, [t.list.length]);

  // Reset to first when language changes (list identity changes too)
  useEffect(() => {
    setActive((v) => (v >= t.list.length ? 0 : v));
  }, [t.list.length]);

  const item = t.list[active];
  const accent = accents[active % accents.length];

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {t.titleStart} <span className="gradient-text">{t.titleAccent}</span>
              {t.titleEnd}
            </h2>
          </Reveal>
        </header>

        <div className={styles.stage}>
          <AnimatePresence mode="wait">
            <motion.figure
              key={`${item.author}-${active}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.card} ${styles[`accent-${accent}`]}`}
            >
              <span className={styles.borderOverlay} aria-hidden />
              <QuoteIcon />
              <blockquote className={styles.quote}>“{item.text}”</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar}>{avatarOf(item.author)}</span>
                <span>
                  <strong>{item.author}</strong>
                  <span className={styles.role}>
                    {item.role} · {item.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className={styles.dots} role="tablist" aria-label="Testimonials">
            {t.list.map((tt, i) => (
              <button
                key={`${tt.author}-${i}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 7H4v6h3l-2 4h3l3-6V7H9zm10 0h-5v6h3l-2 4h3l3-6V7h-2z" />
    </svg>
  );
}
