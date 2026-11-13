'use client';

import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageProvider';
import { parsePath } from '@/i18n/routes';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const { t, href } = useLanguage();
  const current = parsePath(pathname ?? '/').path;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/projects', label: t.nav.projects },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.left}>
          <Logo />
        </div>

        <div className={styles.center}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              const active = current === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={href(link.path)}
                    className={`${styles.link} ${active ? styles.linkActive : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={styles.indicator}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.right}>
          <LanguageSwitcher />
          <span className={styles.cta}>
            <Button href="/contact" variant="primary" size="md">
              {t.nav.cta}
            </Button>
          </span>
          <button
            type="button"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <Link
                    href={href(link.path)}
                    className={styles.mobileLink}
                    aria-current={current === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Button href="/contact" variant="gradient" size="lg">
                  {t.nav.cta}
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
