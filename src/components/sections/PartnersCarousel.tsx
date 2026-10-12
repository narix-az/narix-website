'use client';

import { useState } from 'react';
import type { Partner } from '@/data/partners';
import { useT } from '@/i18n/LanguageProvider';
import styles from './PartnersCarousel.module.css';

interface PartnersCarouselProps {
  items: Partner[];
  title?: string;
  subtitle?: string;
}

function LogoItem({ item }: { item: Partner }) {
  const [imgError, setImgError] = useState(false);
  return (
    <li className={styles.slide}>
      {item.logoUrl && !imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.logoUrl}
          alt=""
          className={styles.logoImg}
          onError={() => setImgError(true)}
          loading="lazy"
        />
      )}
      <span className={styles.name}>{item.name}</span>
    </li>
  );
}

export default function PartnersCarousel({ items, title, subtitle }: PartnersCarouselProps) {
  const t = useT().partners;

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title ?? t.title}</p>
      <p className={styles.subtitle}>{subtitle ?? t.subtitle}</p>
      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {/* The second copy only exists to make the loop seamless */}
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.list} aria-hidden={copy === 1 || undefined}>
              {items.map((item) => (
                <LogoItem key={item.id} item={item} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
