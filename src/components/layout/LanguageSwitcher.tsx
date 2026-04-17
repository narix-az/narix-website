'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageProvider';
import type { Lang } from '@/i18n/types';
import styles from './LanguageSwitcher.module.css';

const options: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
];

interface LanguageSwitcherProps {
  size?: 'sm' | 'md';
  layoutId?: string;
}

export default function LanguageSwitcher({
  size = 'sm',
  layoutId = 'lang-pill',
}: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`${styles.wrap} ${styles[size]}`}
      role="group"
      aria-label={t.nav.languageLabel}
    >
      <GlobeIcon />
      {options.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            className={`${styles.option} ${active ? styles.active : ''}`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className={styles.indicator}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className={styles.label}>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      className={styles.globe}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}
