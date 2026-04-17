'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Process.module.css';

export default function Process() {
  const t = useT().process;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 25%'],
  });
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '100%']), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>
              {t.titleStart} <span className="gradient-text">{t.titleAccent}</span>
              <br />
              {t.titleEnd}
            </h2>
          </Reveal>
        </header>

        <div ref={containerRef} className={styles.timeline}>
          <div className={styles.rail} aria-hidden>
            <motion.span className={styles.railFill} style={{ height: lineHeight }} />
          </div>

          {t.steps.map((step, i) => (
            <Reveal key={step.num} delay={0.05} y={32}>
              <div className={`${styles.step} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.dot} aria-hidden>
                  <span />
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={styles.num}>{step.num}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
