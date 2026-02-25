import Link from 'next/link';
import styles from './About.module.css';

const features = [
  'Strategic AI roadmap tailored to your business goals',
  'Clear implementation path from discovery to deployment',
  'Custom solutions aligned with your workflows',
  'Ethical, transparent, and responsible AI design',
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.cardMain}>
              <div className={styles.iconCenter}>
                <AIIcon />
              </div>
            </div>
            <div className={`${styles.chip} ${styles.chip1}`}>✦ Seamless Integration</div>
            <div className={`${styles.chip} ${styles.chip2}`}>298+ Projects Delivered</div>
            <div className={`${styles.chip} ${styles.chip3}`}>AI-Powered Solutions</div>
          </div>
          <div className={styles.content}>
            <div className={styles.tag}>About Us</div>
            <h2 className={styles.title}>Where Technology Meets Strategy</h2>
            <p className={styles.desc}>
              Our team of data scientists, engineers, and designers turns complex
              challenges into simple, AI-powered solutions that drive real results.
            </p>
            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className={styles.cta}>
              <Link href="/services" className={styles.btn}>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="1.5">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f7cff" />
          <stop offset="100%" stopColor="#00e5c9" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}
