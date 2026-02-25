import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
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
