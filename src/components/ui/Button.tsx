import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
}: ButtonProps) {
  const variantClass = {
    primary: styles.btnPrimary,
    outline: styles.btnOutline,
    ghost: styles.btnGhost,
  }[variant];

  const combinedClass = `${styles.btn} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={combinedClass}>{children}</button>;
}
