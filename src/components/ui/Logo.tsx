import Link from 'next/link';
import styles from './Logo.module.css';

export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href="/" className={`${styles.logo} ${styles[size]}`} aria-label="Narix">
      narix
    </Link>
  );
}
