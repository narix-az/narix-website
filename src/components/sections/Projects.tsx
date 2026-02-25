import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Smart Workflow Automation for Enterprise',
    client: 'Client: Tech Corp · Industry: SaaS',
    badge: 'Automation',
    variant: 'blue',
  },
  {
    title: 'AI-Powered Customer Support Platform',
    client: 'Client: Retail Plus · Industry: E-commerce',
    badge: 'Chatbot',
    variant: 'teal',
  },
  {
    title: 'Predictive Analytics Dashboard',
    client: 'Client: Finance Group · Industry: Fintech',
    badge: 'Analytics',
    variant: 'dark',
  },
  {
    title: 'AI Content & Brand Campaign',
    client: 'Client: Media Co · Industry: Marketing',
    badge: 'Content',
    variant: 'green',
  },
];

const icons: Record<string, React.ReactElement> = {
  blue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  teal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  green: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Our Projects</div>
          <h2 className={styles.title}>
            Real Projects, Real Impact,
            <br />
            Real Discovery
          </h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.thumb}>
                <div className={`${styles.thumbBg} ${styles[project.variant]}`}>
                  <div className={styles.thumbIcon}>{icons[project.variant]}</div>
                </div>
                <span className={styles.badge}>{project.badge}</span>
              </div>
              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
