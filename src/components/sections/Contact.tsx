'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
  };

  return (
    <section id="contact-form" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.tag}>Get in Touch</div>
            <h2 className={styles.title}>Let&apos;s Build Something Great Together</h2>
            <p className={styles.desc}>
              Have a project in mind? Reach out and our team will get back to you
              within 24 hours.
            </p>
            <div className={styles.contactDetails}>
              <a href="mailto:hello@narix.ai" className={styles.contactItem}>
                <EmailIcon />
                <span>hello@narix.ai</span>
              </a>
              <a href="tel:+1234567890" className={styles.contactItem}>
                <PhoneIcon />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Your company" />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Tell us about your project" />
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
