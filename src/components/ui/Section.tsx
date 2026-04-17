import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  children: ReactNode;
  bleed?: boolean;
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  children,
  bleed = false,
  spacing = 'lg',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[`spacing-${spacing}`]} ${className}`}
    >
      <div className={bleed ? styles.bleed : 'container'}>
        {(eyebrow || title || description) && (
          <header
            className={`${styles.header} ${align === 'center' ? styles.center : styles.left}`}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
