'use client';

import { useState, type FormEvent, type ReactElement } from 'react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { useT } from '@/i18n/LanguageProvider';
import styles from './Contact.module.css';

const icons: Record<string, ReactElement> = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 11.5a8.5 8.5 0 01-12.7 7.4L3 21l2.2-5.1A8.5 8.5 0 1121 11.5z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

export default function Contact() {
  const t = useT().contact;
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const channels = [
    { label: t.channels.email, value: 'hello@narix.az', href: 'mailto:hello@narix.az', icon: 'mail' },
    { label: t.channels.whatsapp, value: '+994 51 560 06 25', href: 'https://wa.me/994515600625', icon: 'whatsapp' },
    {
      label: t.channels.location,
      value: t.locationValue,
      href: 'https://maps.google.com/?q=Baku,Azerbaijan',
      icon: 'pin',
    },
  ];

  // There is no backend yet, so hand the brief to the visitor's email client
  // instead of pretending it was sent.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const company = get('company');
    const subject = `Project brief — ${get('name')}${company ? ` (${company})` : ''}`;
    const body = `${get('message')}\n\n—\n${get('name')}\n${get('email')}${company ? `\n${company}` : ''}`;
    window.location.href = `mailto:hello@narix.az?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
    window.setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact-form" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.info}>
              <span className="eyebrow">{t.eyebrow}</span>
              <h2 className={styles.title}>
                {t.titleStart}{' '}
                <span className="gradient-text">{t.titleAccent}</span>
              </h2>
              <p className={styles.desc}>{t.desc}</p>

              <ul className={styles.channels}>
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className={styles.channel}
                      {...(c.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span className={styles.channelIcon}>{icons[c.icon]}</span>
                      <span>
                        <span className={styles.channelLabel}>{c.label}</span>
                        <strong>{c.value}</strong>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <Field id="name" label={t.form.name} type="text" required placeholder={t.form.namePh} />
                <Field id="email" label={t.form.email} type="email" required placeholder={t.form.emailPh} />
              </div>
              <Field id="company" label={t.form.company} type="text" placeholder={t.form.companyPh} />
              <Field id="message" label={t.form.message} multiline required placeholder={t.form.messagePh} />

              <div className={styles.submitRow}>
                <Button type="submit" variant="primary" size="lg" iconRight={<ArrowIcon />}>
                  {status === 'sent' ? t.form.sent : t.form.submit}
                </Button>
                <span className={styles.submitNote}>{t.form.note}</span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
}

function Field({ id, label, type = 'text', required, placeholder, multiline }: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}{required && <span aria-hidden> *</span>}</label>
      {multiline ? (
        <textarea id={id} name={id} rows={5} required={required} placeholder={placeholder} />
      ) : (
        <input id={id} name={id} type={type} required={required} placeholder={placeholder} />
      )}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
