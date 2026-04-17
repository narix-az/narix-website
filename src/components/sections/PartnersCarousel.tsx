'use client';

import { useState } from 'react';
import type { Partner } from '@/data/partners';
import { useT } from '@/i18n/LanguageProvider';
import styles from './PartnersCarousel.module.css';

interface PartnersCarouselProps {
  items: Partner[];
  title?: string;
  subtitle?: string;
  bare?: boolean;
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
            loading="lazy"
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
  title,
  subtitle,
  bare = false,
}: PartnersCarouselProps) {
  const t = useT().partners;
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`${styles.wrapper} ${bare ? styles.bare : ''}`}>
      {!bare && (
        <>
          <h3 className={styles.title}>{title ?? t.title}</h3>
          <p className={styles.subtitle}>{subtitle ?? t.subtitle}</p>
        </>
      )}
      <div className={styles.trackWrap}>
        <div className={styles.track} role="region" aria-label="Partners">
          {duplicated.map((item, i) => (
            <LogoItem key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
