'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useT } from '@/i18n/LanguageProvider';
import styles from './HeroVisual.module.css';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * Floating UI mockup stack: an "AI Agent" chat card (with a typing indicator
 * that resolves into the reply), an automation workflow chain with a pulse
 * travelling through it, and a live metrics chip.
 */
export default function HeroVisual() {
  const t = useT().heroVisual;
  const reduced = useReducedMotion();

  return (
    <div className={styles.wrap} aria-hidden>
      {/* === Main: AI agent card === */}
      <motion.div
        className={styles.agent}
        initial={{ opacity: 0, y: 30, rotate: reduced ? 0 : 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
      >
        <div className={styles.agentHead}>
          <span className={styles.avatar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
              <path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
            </svg>
          </span>
          <div className={styles.agentTitle}>
            <strong>{t.agentName}</strong>
            <span>
              <i className={styles.onlineDot} /> {t.online}
            </span>
          </div>
          <span className={styles.statusPill}>{t.statusLive}</span>
        </div>

        <motion.div
          className={`${styles.bubble} ${styles.user}`}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease }}
        >
          {t.userMessage}
        </motion.div>

        <div className={styles.botSlot}>
          {/* Typing indicator fades out as the reply lands */}
          <motion.div
            className={styles.typing}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.3, delay: 1.3, times: [0, 0.15, 0.85, 1] }}
          >
            <span /><span /><span />
          </motion.div>

          <motion.div
            className={`${styles.bubble} ${styles.bot}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 2.5, ease }}
          >
            <span className={styles.botName}>{t.botName}</span>
            {t.botMessage}
            <div className={styles.steps}>
              {[t.steps.analyze, t.steps.summarize, t.steps.dispatch].map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2.9 + i * 0.25, ease }}
                >
                  <i /> {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.input}>
          <span className={styles.placeholder}>{t.inputPlaceholder}</span>
          <span className={styles.send}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </span>
        </div>
      </motion.div>

      {/* === Floating mini metric === */}
      <motion.div
        className={styles.metric}
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
      >
        <div className={styles.metricLabel}>{t.metricLabel}</div>
        <div className={styles.metricValue}>
          238 <span>{t.metricDelta}</span>
        </div>
        <svg viewBox="0 0 100 30" className={styles.spark} preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkStroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ff5b1f" />
              <stop offset="100%" stopColor="#ff2e7e" />
            </linearGradient>
            <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff2e7e" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#ff2e7e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 22 L12 18 L24 24 L36 14 L48 17 L60 9 L72 12 L84 6 L100 3 L100 30 L0 30 Z"
            fill="url(#sparkFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          />
          <motion.path
            d="M0 22 L12 18 L24 24 L36 14 L48 17 L60 9 L72 12 L84 6 L100 3"
            fill="none"
            stroke="url(#sparkStroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>

      {/* === Floating workflow card === */}
      <motion.div
        className={styles.workflow}
        initial={{ opacity: 0, y: 30, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease }}
      >
        <div className={styles.flowTitle}>{t.flowTitle}</div>
        <div className={styles.flowChain}>
          <span className={`${styles.node} ${styles.nodeOrange}`}>{t.flowNodes.trigger}</span>
          <span className={styles.line}><i /></span>
          <span className={`${styles.node} ${styles.nodePink}`}>{t.flowNodes.ai}</span>
          <span className={styles.line}><i /></span>
          <span className={`${styles.node} ${styles.nodeViolet}`}>{t.flowNodes.crm}</span>
          <span className={styles.line}><i /></span>
          <span className={`${styles.node} ${styles.nodeOk}`}>✓</span>
        </div>
      </motion.div>
    </div>
  );
}
