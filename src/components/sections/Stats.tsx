'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Stats.module.css';

interface StatNumeric {
  end: number;
  suffix?: string;
  tone: 'orange' | 'lime' | 'violet' | 'pink';
}

const numerics: StatNumeric[] = [
  { end: 50, suffix: '+', tone: 'orange' },
  { end: 20, suffix: '+', tone: 'lime' },
  { end: 95, suffix: '%', tone: 'violet' },
  { end: 3, suffix: '×', tone: 'pink' },
];

/**
 * Renders the final value on the server (so crawlers and no-JS visitors see
 * real numbers), then counts up from zero once scrolled into view.
 */
function Counter({ stat }: { stat: StatNumeric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(stat.end);
  const armed = useRef(false);

  // Before the first paint below the fold, reset to 0 so the count-up is visible.
  useEffect(() => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (r.top > window.innerHeight) {
      armed.current = true;
      setValue(0);
    }
  }, [reduced]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / duration);
      setValue(stat.end * ease(k));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.end]);

  return (
    <span ref={ref} className={styles.value}>
      {Math.round(value)}
      <span className={styles.suffix}>{stat.suffix}</span>
    </span>
  );
}

export default function Stats() {
  const t = useT().stats;

  return (
    <section id="stats" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {numerics.map((n, i) => {
            const labels = t[i];
            return (
              <Reveal key={i} delay={i * 0.08} y={24}>
                <div className={`${styles.tile} ${styles[n.tone]}`}>
                  <Counter stat={n} />
                  <div className={styles.label}>{labels?.label}</div>
                  {labels?.helper && <div className={styles.helper}>{labels.helper}</div>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
