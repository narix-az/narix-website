import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.tag}>Ready to Start?</div>
          <h2 className={styles.title}>
            Ready to Build Smarter and Faster with AI?
          </h2>
          <p className={styles.desc}>
            Whether you have an idea, a challenge, or a full roadmap — we love
            helping bring it to life.
          </p>
          <div className={styles.actions}>
            <a href="mailto:hello@narix.ai" className={styles.btnPrimary}>
              <SendIcon />
              Get Started Today
            </a>
            <Link href="/services" className={styles.btnGhost}>
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 2 15 9 22 16 22 2" />
      <path d="M15 9l-9 4L2 7l13-7" />
    </svg>
  );
}
