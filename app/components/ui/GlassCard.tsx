'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: '0 0 30px rgba(0, 168, 255, 0.15)',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'glass-card p-6 transition-colors duration-300 hover:border-accent/30 md:p-8',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
