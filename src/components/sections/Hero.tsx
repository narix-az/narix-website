'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import HeroVisual from './HeroVisual';
import { darkAccents, deliveredProjects } from '@/data/deliveredProjects';
import ProjectIcon from '@/components/ui/ProjectIcon';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Hero.module.css';

interface HeroProps {
  variant?: 'home' | 'page';
  title?: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease },
  }),
};

function Mesh() {
  return (
    <div className={styles.mesh} aria-hidden>
      <span className={`${styles.blob} ${styles.blobOrange}`} />
      <span className={`${styles.blob} ${styles.blobPink}`} />
      <span className={`${styles.blob} ${styles.blobViolet}`} />
      <span className={`${styles.blob} ${styles.blobLime}`} />
      <span className={styles.dots} />
    </div>
  );
}

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
        <Mesh />
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
              transition={{ duration: 0.85, delay: 0.08, ease }}
            >
              {title}
            </motion.h1>
            {(subtitle || description) && (
              <motion.p
                className={styles.pageDesc}
                initial={{ opacity: 0, y: reduced ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
              >
                {subtitle ?? description}
              </motion.p>
            )}
          </div>
        </div>
      </section>
    );
  }

  const trustProjects = deliveredProjects.slice(0, 4);

  return (
    <section id="hero" className={styles.hero}>
      <Mesh />
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
                <span className="gradient-text">{t.hero.titleAccent}</span>
                <svg
                  className={styles.underline}
                  viewBox="0 0 320 14"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="heroLine" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#ff5b1f" />
                      <stop offset="50%" stopColor="#ff2e7e" />
                      <stop offset="100%" stopColor="#7a3cff" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M2 9 C 80 2, 240 2, 318 9"
                    stroke="url(#heroLine)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease }}
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
              <Button href="/contact" variant="primary" size="lg" iconRight={<ArrowIcon />}>
                {t.hero.ctaPrimary}
              </Button>
              <Button href="#delivered-projects" variant="ghost" size="lg">
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
              <div className={styles.projectStack} aria-hidden>
                {trustProjects.map((p, i) => (
                  <span
                    key={p.id}
                    className={styles.projectChip}
                    data-dark={darkAccents.has(p.accent) || undefined}
                    style={{ background: `var(--${p.accent})`, zIndex: trustProjects.length - i }}
                  >
                    <ProjectIcon name={p.icon} size={20} />
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
