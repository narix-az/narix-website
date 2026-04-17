'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { DeliveredProjectMeta } from '@/data/deliveredProjects';
import Reveal from '@/components/ui/Reveal';
import { useT } from '@/i18n/LanguageProvider';
import type { ProjectContent } from '@/i18n/types';
import styles from './DeliveredProjects.module.css';

interface DeliveredProjectsProps {
  projects: DeliveredProjectMeta[];
  title?: string;
  eyebrow?: string;
  description?: string;
}

function ProjectLogo({
  meta,
  name,
}: {
  meta: DeliveredProjectMeta;
  name: string;
}) {
  const [error, setError] = useState(false);
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`${styles.logo} ${styles[`accent-${meta.accent ?? 'violet'}`]}`}>
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={meta.logoUrl}
          alt=""
          className={styles.logoImg}
          onError={() => setError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

const transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

function ProjectModal({
  meta,
  content,
  labels,
  onClose,
}: {
  meta: DeliveredProjectMeta;
  content: ProjectContent;
  labels: { highlights: string; keyNumbers: string; visit: string; close: string };
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.modalBackdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={transition}
      >
        <button
          type="button"
          onClick={onClose}
          className={styles.modalClose}
          aria-label={labels.close}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.modalHead}>
          <ProjectLogo meta={meta} name={content.name} />
          <div>
            <span className={styles.modalCategory}>{content.category}</span>
            <h2 id="project-modal-title" className={styles.modalTitle}>
              {content.name}
            </h2>
          </div>
        </div>

        <p className={styles.modalDesc}>{content.description}</p>

        {content.stats && content.stats.length > 0 && (
          <div className={styles.modalSection}>
            <h3 className={styles.modalSubtitle}>{labels.keyNumbers}</h3>
            <div className={styles.statRow}>
              {content.stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.modalSection}>
          <h3 className={styles.modalSubtitle}>{labels.highlights}</h3>
          <ul className={styles.featureList}>
            {content.features.map((f) => (
              <li key={f}>
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.modalTags}>
          {content.tags.map((t) => (
            <span key={t} className={styles.tagPill}>
              {t}
            </span>
          ))}
        </div>

        {meta.link && (
          <a
            href={meta.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalCta}
          >
            {labels.visit}
            <ExternalIcon />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function DeliveredProjects({
  projects,
  title,
  eyebrow,
  description,
}: DeliveredProjectsProps) {
  const t = useT();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const close = useCallback(() => setSelectedId(null), []);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    const meta = projects.find((p) => p.id === selectedId);
    const content = t.delivered.projects[selectedId];
    if (!meta || !content) return null;
    return { meta, content };
  }, [selectedId, projects, t.delivered.projects]);

  const readCase = t.common.readCase;

  return (
    <section id="delivered-projects" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <Reveal>
            <span className="eyebrow">{eyebrow ?? t.delivered.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>{title ?? t.delivered.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.desc}>{description ?? t.delivered.desc}</p>
          </Reveal>
        </header>

        <div className={styles.grid}>
          {projects.map((p, i) => {
            const content = t.delivered.projects[p.id];
            if (!content) return null;
            return (
              <Reveal key={p.id} delay={(i % 3) * 0.08} y={36}>
                <button
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  className={`${styles.card} ${styles[`accentBorder-${p.accent ?? 'violet'}`]}`}
                >
                  <span className={styles.cardGlow} aria-hidden />
                  <span className={styles.cardSpotlight} aria-hidden />

                  <div className={styles.cardTop}>
                    <ProjectLogo meta={p} name={content.name} />
                    <span className={styles.cardCategory}>{content.category}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{content.name}</h3>
                  <p className={styles.cardDesc}>{content.shortDescription}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardTags}>
                      {content.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className={styles.tagPill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.cardCta}>
                      {readCase}
                      <ArrowIcon />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selected && (
              <ProjectModal
                key={selected.meta.id}
                meta={selected.meta}
                content={selected.content}
                labels={{
                  highlights: t.delivered.highlights,
                  keyNumbers: t.delivered.keyNumbers,
                  visit: t.common.visitProject,
                  close: t.common.close,
                }}
                onClose={close}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
