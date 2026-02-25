'use client';

import { useRef, useEffect, useState } from 'react';
import type { Partner } from '@/data/partners';
import styles from './PartnersCarousel.module.css';

interface PartnersCarouselProps {
  items: Partner[];
  title?: string;
  subtitle?: string;
}

function LogoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return <span className={styles.placeholder}>{initials}</span>;
}

function LogoItem({ item }: { item: Partner }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={styles.slide}>
      <div className={styles.logoWrap}>
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logoUrl}
            alt={`${item.name} logo`}
            className={styles.logoImg}
            onError={() => setImgError(true)}
          />
        )}
        {imgError && <LogoPlaceholder name={item.name} />}
      </div>
      {item.showName && <span className={styles.companyName}>{item.name}</span>}
    </div>
  );
}

export default function PartnersCarousel({
  items,
  title = 'Our Partners',
  subtitle = 'We collaborate with companies to deliver AI, automation, and digital solutions.',
}: PartnersCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    const scroll = () => {
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 0.3;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicated = [...items, ...items];

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.trackWrap}>
        <div ref={trackRef} className={styles.track} role="region" aria-label="Partners">
          {duplicated.map((item, i) => (
            <LogoItem key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
