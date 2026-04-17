'use client';

import { motion } from 'framer-motion';
import { useT } from '@/i18n/LanguageProvider';
import styles from './HeroVisual.module.css';

/**
 * Floating UI mockup stack: an "AI Agent" chat card,
 * an automation workflow card, and a metrics chip.
 */
export default function HeroVisual() {
  const t = useT().heroVisual;

  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.glow} />

      {/* === Main: AI agent card === */}
      <motion.div
        className={styles.agent}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.agentHead}>
          <div className={styles.dot} />
          <div className={styles.agentTitle}>
            <strong>{t.agentName}</strong>
            <span>{t.online}</span>
          </div>
          <span className={styles.statusPill}>{t.statusLive}</span>
        </div>

        <motion.div
          className={`${styles.bubble} ${styles.user}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {t.userMessage}
        </motion.div>

        <motion.div
          className={`${styles.bubble} ${styles.bot}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <span className={styles.botName}>{t.botName}</span>
          {t.botMessage}
          <div className={styles.steps}>
            <span><i /> {t.steps.analyze}</span>
            <span><i /> {t.steps.summarize}</span>
            <span><i /> {t.steps.dispatch}</span>
          </div>
        </motion.div>

        <div className={styles.input}>
          <span className={styles.cursor}>|</span>
          <span className={styles.placeholder}>{t.inputPlaceholder}</span>
          <span className={styles.send}>↑</span>
        </div>
      </motion.div>

      {/* === Floating mini metric === */}
      <motion.div
        className={styles.metric}
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.metricLabel}>{t.metricLabel}</div>
        <div className={styles.metricValue}>
          238 <span>{t.metricDelta}</span>
        </div>
        <svg viewBox="0 0 100 30" className={styles.spark} preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkG" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 22 L12 18 L24 24 L36 14 L48 17 L60 9 L72 12 L84 6 L100 3"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0 22 L12 18 L24 24 L36 14 L48 17 L60 9 L72 12 L84 6 L100 3 L100 30 L0 30 Z"
            fill="url(#sparkG)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          />
        </svg>
      </motion.div>

      {/* === Floating workflow card === */}
      <motion.div
        className={styles.workflow}
        initial={{ opacity: 0, y: 30, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.flowTitle}>{t.flowTitle}</div>
        <div className={styles.flowChain}>
          <span className={styles.node}>{t.flowNodes.trigger}</span>
          <span className={styles.line} />
          <span className={styles.node}>{t.flowNodes.ai}</span>
          <span className={styles.line} />
          <span className={styles.node}>{t.flowNodes.crm}</span>
          <span className={styles.line} />
          <span className={`${styles.node} ${styles.nodeOk}`}>✓</span>
        </div>
      </motion.div>
    </div>
  );
}
