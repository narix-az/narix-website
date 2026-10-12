import Link from 'next/link';
import styles from './Logo.module.css';

export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href="/" className={`${styles.logo} ${styles[size]}`} aria-label="Narix">
      <LogoMark className={styles.mark} />
      <span className={styles.word}>narix</span>
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient id="narixMark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff5b1f" />
          <stop offset="50%" stopColor="#ff2e7e" />
          <stop offset="100%" stopColor="#7a3cff" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#narixMark)" />
      <path
        d="M19 44 V20 L32 37 V20 M32 37 L45 20 V44"
        fill="none"
        stroke="#fff"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
