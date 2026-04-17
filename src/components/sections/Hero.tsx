'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import HeroVisual from './HeroVisual';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Hero.module.css';

interface HeroProps {
  variant?: 'home' | 'page';
  title?: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero({
  variant = 'home',
  title,
  subtitle,
  description,
  eyebrow,
}: HeroProps) {
  const reduced = useReducedMotion();
  const t = useT();

  if (variant === 'page') {
    return (
      <section className={styles.heroPage}>
        <div className={styles.spotlight} aria-hidden />
        <div className="container">
          <div className={styles.pageInner}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {eyebrow ?? 'Narix'}
            </motion.span>
            <motion.h1
              className={styles.pageTitle}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h1>
            {(subtitle || description) && (
              <motion.p
                className={styles.pageDesc}
                initial={{ opacity: 0, y: reduced ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {subtitle ?? description}
              </motion.p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.spotlight} aria-hidden />
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <motion.span
              className="eyebrow"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {t.hero.eyebrow}
            </motion.span>

            <motion.h1
              className={styles.title}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {t.hero.titleStart}{' '}
              <span className={styles.titleAccent}>
                {t.hero.titleAccent}
                <svg
                  className={styles.underline}
                  viewBox="0 0 320 14"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="heroLine" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#8a5cff" />
                      <stop offset="50%" stopColor="#4d7bff" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M2 9 C 80 2, 240 2, 318 9"
                    stroke="url(#heroLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </span>{' '}
              {t.hero.titleEnd}
            </motion.h1>

            <motion.p
              className={styles.desc}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              className={styles.actions}
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Button href="/contact" variant="gradient" size="lg" iconRight={<ArrowIcon />}>
                {t.hero.ctaPrimary}
              </Button>
              <Button href="#delivered-projects" variant="ghost" size="lg" iconLeft={<PlayIcon />}>
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>

            <motion.div
              className={styles.trustRow}
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.avatars}>
                {['JK', 'MA', 'TS', 'EL'].map((a, i) => (
                  <span key={a} className={styles.avatar} style={{ zIndex: 4 - i }}>
                    {a}
                  </span>
                ))}
              </div>
              <div className={styles.trustText}>
                <strong>{t.hero.trustStrong}</strong> {t.hero.trustRest}
                <span className={styles.stars}>{t.hero.trustStars}</span>
              </div>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>

      <a href="#delivered-projects" className={styles.scrollCue} aria-label={t.hero.scroll}>
        <span />
      </a>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
    </svg>
  );
}
