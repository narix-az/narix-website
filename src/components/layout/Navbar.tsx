'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Nari<span>x</span>
      </Link>
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? styles.active : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navCta}>
        <Link href="/contact" className={styles.btnOutline}>
          Contact
        </Link>
        <Link href="/contact" className={styles.btnPrimary}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
