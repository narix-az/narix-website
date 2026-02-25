import Link from 'next/link';
import PartnersCarousel from './PartnersCarousel';
import { partners } from '@/data/partners';
import styles from './Hero.module.css';

interface HeroProps {
  variant?: 'home' | 'page';
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({
  variant = 'home',
  title,
  subtitle,
  description,
}: HeroProps) {
  if (variant === 'page') {
    return (
      <section className={styles.heroPage}>
        <div className="container">
          <div className={styles.pageInner}>
            <div className={`${styles.badge} fade-up`}>Narix</div>
            <h1 className={`${styles.pageTitle} fade-up delay-1`}>{title}</h1>
            {subtitle && (
              <p className={`${styles.pageDesc} fade-up delay-2`}>{subtitle}</p>
            )}
            {description && (
              <p className={`${styles.pageDesc} fade-up delay-2`}>{description}</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={`${styles.badge} fade-up`}>AI Business Solutions</div>
          <h1 className={`${styles.title} fade-up delay-1`}>
            Transform Your Business
            <br />
            <span className={styles.highlight}>With AI Power</span>
          </h1>
          <p className={`${styles.desc} fade-up delay-2`}>
            Narix delivers intelligent AI solutions that streamline operations,
            automate workflows, and unlock growth. Let our experts help you
            harness the power of artificial intelligence.
          </p>
          <div className={`${styles.actions} fade-up delay-3`}>
            <Link href="/contact" className={styles.btnPrimary}>
              <ArrowRightIcon />
              Get Started Today
            </Link>
            <Link href="#process" className={styles.btnGhost}>
              How It Works
            </Link>
          </div>
          <div className={`${styles.trust} fade-up delay-4`}>
            <PartnersCarousel items={partners} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}
