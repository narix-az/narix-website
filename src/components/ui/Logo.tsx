'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import styles from './Logo.module.css';

// Horizontal Narix logo (symbol + wordmark), exported from the brand kit at
// 120px high so it stays sharp at up to 3x on the sizes used here.
// `tone="light"` is the white-wordmark version for dark backgrounds.
export default function Logo({ size = 'md', tone = 'dark' }: { size?: 'md' | 'lg'; tone?: 'dark' | 'light' }) {
  const { href } = useLanguage();
  const height = size === 'lg' ? 36 : 30;
  return (
    <Link href={href('/')} className={`${styles.logo} ${styles[size]}`} aria-label="Narix">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === 'light' ? '/brand/narix-logo-light.png' : '/brand/narix-logo.png'}
        alt="Narix"
        width={Math.round(height * 4.508)}
        height={height}
        decoding="async"
      />
    </Link>
  );
}
