'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { DeliveredProject } from '@/data/deliveredProjects';
import styles from './DeliveredProjects.module.css';

interface DeliveredProjectsProps {
  projects: DeliveredProject[];
  title?: string;
}

function ProjectPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return <span className={styles.logoPlaceholder}>{initials}</span>;
}

function ProjectLogo({ project }: { project: DeliveredProject }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={styles.logoWrap}>
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.logoUrl}
          alt={`${project.name} logo`}
          className={styles.logoImg}
          onError={() => setImgError(true)}
        />
      )}
      {imgError && <ProjectPlaceholder name={project.name} />}
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 8,
  },
};

const transition = {
  duration: 0.2,
  ease: [0.25, 0.46, 0.45, 0.94],
};

function ProjectModal({
  project,
  onClose,
}: {
  project: DeliveredProject;
  onClose: () => void;
}) {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      ref={backdropRef}
      className={styles.modalBackdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transition}
    >
      <motion.div
        className={styles.modal}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={transition}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={styles.modalClose}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className={styles.modalLogoWrap}>
          <ProjectLogo project={project} />
        </div>
        <h2 id="modal-title" className={styles.modalTitle}>
          {project.name}
        </h2>
        <p className={styles.modalDesc}>{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalLink}
          >
            View project
            <ExternalIcon />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function DeliveredProjects({
  projects,
  title = "Projects We've Delivered",
}: DeliveredProjectsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<DeliveredProject | null>(null);
  const itemWidth = 200;
  const gap = 24;

  const scrollTo = useCallback(
    (delta: number) => {
      const track = trackRef.current;
      if (!track) return;
      const step = itemWidth + gap;
      track.scrollBy({ left: delta * step, behavior: 'smooth' });
    },
    [itemWidth, gap]
  );

  const openModal = useCallback((project: DeliveredProject) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || projects.length === 0) return;

    let animationId: number;
    const scroll = () => {
      const threshold = track.scrollWidth / 2;
      if (track.scrollLeft >= threshold - 1) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 0.25;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [projects.length]);

  const duplicated = [...projects, ...projects];

  return (
    <section id="delivered-projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.arrows}>
            <button
              type="button"
              onClick={() => scrollTo(-1)}
              className={styles.arrow}
              aria-label="Previous projects"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(1)}
              className={styles.arrow}
              aria-label="Next projects"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className={styles.trackWrap}>
          <div
            ref={trackRef}
            className={styles.track}
            role="region"
            aria-label="Delivered projects"
          >
            {duplicated.map((project, i) => (
              <button
                key={`${project.id}-${i}`}
                type="button"
                onClick={() => openModal(project)}
                className={styles.card}
                disabled={!!selectedProject}
              >
                <ProjectLogo project={project} />
                <span className={styles.name}>{project.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence mode="wait">
            {selectedProject && (
              <ProjectModal
                key={selectedProject.id}
                project={selectedProject}
                onClose={closeModal}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
