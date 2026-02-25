import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../not-found.module.css';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFoundPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.desc}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.btnPrimary}>
              Back to Home
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
