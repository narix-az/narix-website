'use client';

import { useEffect, useRef } from 'react';
import styles from './Orbs.module.css';

/**
 * Ambient floating orbs + a cursor-following spotlight orb.
 * Lives in the root layout so it provides global atmosphere.
 */
export default function Orbs() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = followerRef.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currX = targetX;
    let currY = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      currX += (targetX - currX) * 0.08;
      currY += (targetY - currY) * 0.08;
      el.style.transform = `translate3d(${currX - 300}px, ${currY - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.layer} aria-hidden>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div ref={followerRef} className={styles.follower} />
      <div className={styles.grid} />
    </div>
  );
}
