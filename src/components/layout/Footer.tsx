import Link from 'next/link';
import styles from './Footer.module.css';

const serviceLinks = [
  { href: '/services', label: 'AI & Workflow Automation' },
  { href: '/services', label: 'AI Chatbots & Support' },
  { href: '/services', label: 'AI Content & Branding' },
  { href: '/services', label: 'Business Analytics' },
  { href: '/services', label: 'Web Development' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const contactLinks = [
  { href: 'mailto:hello@narix.ai', label: 'hello@narix.ai' },
  { href: 'tel:+1234567890', label: '+1 (234) 567-890' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo}>
              Nari<span>x</span>
            </Link>
            <p>
              Narix combines AI and creativity to deliver intelligent, personalized,
              and future-ready business solutions that drive growth and innovation.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Narix. All rights reserved.</span>
          <div className={styles.socials}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
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
