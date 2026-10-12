'use client';

import Link from 'next/link';
import Logo from '@/components/ui/Logo';
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

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo size="lg" />
            <p>{t.footer.tagline}</p>
            <div className={styles.socials}>
              <SocialLink href="https://wa.me/994515600625" label="WhatsApp">
                <WhatsAppIcon />
              </SocialLink>
              <SocialLink href="mailto:hello@narix.az" label="Email">
                <MailIcon />
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
          <span>{t.contact.locationValue}</span>
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
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className={styles.socialBtn}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 11.5a8.5 8.5 0 01-12.7 7.4L3 21l2.2-5.1A8.5 8.5 0 1121 11.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
