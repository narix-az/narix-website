'use client';

import Link from 'next/link';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/contact', label: t.nav.contact },
  ];

  const contactLinks = [
    { href: 'mailto:hello@narix.az', label: 'hello@narix.az' },
    { href: 'tel:+994515600625', label: '+994 51 560 06 25' },
  ];

  const legalLinks = [
    { href: '#', label: t.footer.legal.privacy },
    { href: '#', label: t.footer.legal.terms },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark} aria-hidden />
              <span>
                Nari<span className={styles.logoAccent}>x</span>
              </span>
            </Link>
            <p>{t.footer.tagline}</p>
            <div className={styles.socials}>
              <SocialLink href="https://twitter.com" label="Twitter">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="https://github.com" label="GitHub">
                <GitHubIcon />
              </SocialLink>
            </div>
          </div>

          <div className={styles.col}>
            <h4>{t.footer.columns.services}</h4>
            <ul>
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <Link href="/services">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>{t.footer.columns.company}</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>{t.footer.columns.contact}</h4>
            <ul>
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Narix. {t.footer.rights}</span>
          <ul className={styles.legal}>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bigMark} aria-hidden>narix</div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialBtn}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}
