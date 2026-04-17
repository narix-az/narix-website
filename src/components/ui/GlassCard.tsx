'use client';

import { useRef, type ReactNode, type CSSProperties, type MouseEvent } from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: 'violet' | 'blue' | 'cyan' | 'none';
  style?: CSSProperties;
  as?: 'div' | 'article' | 'section';
}

export default function GlassCard({
  children,
  className = '',
  interactive = true,
  glow = 'violet',
  style,
  as: Tag = 'div',
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mx', `${x}%`);
    ref.current.style.setProperty('--my', `${y}%`);
  };

  const cls = [
    styles.card,
    interactive ? styles.interactive : '',
    glow !== 'none' ? styles[`glow-${glow}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cls}
      style={style}
      onMouseMove={handleMove}
    >
      <span className={styles.border} aria-hidden />
      <span className={styles.spotlight} aria-hidden />
      <div className={styles.inner}>{children}</div>
    </Tag>
  );
}
