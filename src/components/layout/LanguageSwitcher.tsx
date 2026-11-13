'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageProvider';
import { localePath, switchLocalePath } from '@/i18n/routes';
import type { Lang } from '@/i18n/types';
import styles from './LanguageSwitcher.module.css';

const options: { code: Lang; label: string; name: string }[] = [
  { code: 'az', label: 'AZ', name: 'Azərbaycanca' },
  { code: 'en', label: 'EN', name: 'English' },
];

interface LanguageSwitcherProps {
  size?: 'sm' | 'md';
}

// Each language has its own URL, so switching is a link to the same page in
// the other language — it can be opened in a new tab, shared and indexed.
export default function LanguageSwitcher({ size = 'sm' }: LanguageSwitcherProps) {
  const { lang, t, standalone } = useLanguage();
  const pathname = usePathname() ?? '/';

  return (
    <nav className={`${styles.wrap} ${styles[size]}`} aria-label={t.nav.languageLabel}>
      <GlobeIcon />
      {options.map((opt) => {
        const active = lang === opt.code;
        return (
          <Link
            key={opt.code}
            href={standalone ? localePath(opt.code, '/') : switchLocalePath(pathname, opt.code)}
            prefetch={false}
            hrefLang={opt.code}
            lang={opt.code}
            title={opt.name}
            scroll={false}
            className={`${styles.option} ${active ? styles.active : ''}`}
            aria-current={active ? 'true' : undefined}
          >
            {active && <span className={styles.indicator} />}
            <span className={styles.label}>{opt.label}</span>
          </Link>
        );
      })}
    </nav>
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
