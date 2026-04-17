'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Tag = 'h1' | 'h2' | 'h3';

interface AnimatedHeadingProps {
  as?: Tag;
  children: ReactNode;
  className?: string;
  delay?: number;
  splitWords?: boolean;
}

const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionH3 = motion.h3;

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function AnimatedHeading({
  as = 'h2',
  children,
  className,
  delay = 0,
  splitWords = false,
}: AnimatedHeadingProps) {
  const reduced = useReducedMotion();
  const Comp = as === 'h1' ? MotionH1 : as === 'h3' ? MotionH3 : MotionH2;

  if (!splitWords || typeof children !== 'string') {
    return (
      <Comp
        className={className}
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Comp>
    );
  }

  const words = children.split(' ');
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          custom={i + delay * 10}
          variants={variants}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {w}
        </motion.span>
      ))}
    </Comp>
  );
}
