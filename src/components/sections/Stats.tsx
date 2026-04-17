'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Stats.module.css';

interface StatNumeric {
  end: number;
  suffix?: string;
}

const numerics: StatNumeric[] = [
  { end: 50, suffix: '+' },
  { end: 20, suffix: '+' },
  { end: 95, suffix: '%' },
  { end: 3, suffix: '×' },
];

function Counter({ stat }: { stat: StatNumeric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
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

  const display = stat.end >= 100 ? Math.round(value) : value.toFixed(0);

  return (
    <span ref={ref} className={styles.value}>
      {display}
      <span className={styles.suffix}>{stat.suffix}</span>
    </span>
  );
}

export default function Stats() {
  const t = useT().stats;

  return (
    <section id="stats" className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.bar}>
            <span className={`u-orb ${styles.orbA}`} aria-hidden />
            <span className={`u-orb ${styles.orbB}`} aria-hidden />
            <span className={styles.runner} aria-hidden />

            {numerics.map((n, i) => {
              const labels = t[i];
              return (
                <div key={i} className={styles.item} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.itemIndex} aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Counter stat={n} />
                  <div className={styles.label}>{labels?.label}</div>
                  {labels?.helper && <div className={styles.helper}>{labels.helper}</div>}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
