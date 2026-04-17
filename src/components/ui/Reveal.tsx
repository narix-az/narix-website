'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  duration?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  duration = 0.7,
  blur = true,
}: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduced ? 0 : y,
        filter: !reduced && blur ? 'blur(10px)' : 'blur(0px)',
      }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
