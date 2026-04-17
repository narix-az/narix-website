'use client';

import Link from 'next/link';
import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost' | 'gradient';
type Size = 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  magnetic?: boolean;
  className?: string;
}

interface AsLinkProps extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
  external?: boolean;
}

interface AsButtonProps extends BaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  external?: never;
}

type ButtonProps = AsLinkProps | AsButtonProps;

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    iconLeft,
    iconRight,
    magnetic = true,
    className = '',
  } = props;

  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [transform, setTransform] = useState('translate3d(0,0,0)');

  const handleMove = (e: MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setTransform(`translate3d(${x * 0.18}px, ${y * 0.25}px, 0)`);
  };

  const handleLeave = () => setTransform('translate3d(0,0,0)');

  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <span className={styles.inner} style={{ transform }}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
      {variant === 'gradient' && <span className={styles.shine} aria-hidden />}
    </span>
  );

  if ('href' in props && props.href) {
    const isExternal = props.external || /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={props.href}
        className={cls}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {inner}
      </Link>
    );
  }

  const buttonProps = props as AsButtonProps;
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={buttonProps.type ?? 'button'}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={cls}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </button>
  );
}
