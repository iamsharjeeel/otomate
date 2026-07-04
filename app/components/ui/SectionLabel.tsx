import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent',
        className
      )}
    >
      {children}
    </p>
  );
}
