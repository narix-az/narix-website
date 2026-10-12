'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Process.module.css';

const tones = ['orange', 'pink', 'violet', 'blue', 'lime'] as const;

export default function Process() {
  const t = useT().process;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 55%'],
  });
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <header className="sec-head">
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="sec-title">
              {t.titleStart} <span className="gradient-text">{t.titleAccent}</span>{' '}
              {t.titleEnd}
            </h2>
          </Reveal>
        </header>

        <div ref={containerRef} className={styles.track}>
          <span className={styles.rail} aria-hidden>
            <motion.span className={styles.railFill} style={{ scaleX: progress }} />
            <motion.span className={styles.railFillY} style={{ scaleY: progress }} />
          </span>

          <ol className={styles.steps}>
            {t.steps.map((step, i) => (
              <li key={step.num} className={styles.stepItem}>
                <Reveal delay={i * 0.08} y={28}>
                  <div className={styles.step}>
                    <span className={`${styles.num} ${styles[tones[i % tones.length]]}`}>
                      {step.num}
                    </span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
