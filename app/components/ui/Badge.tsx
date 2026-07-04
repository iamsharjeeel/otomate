import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/30 bg-accent-muted px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-accent',
        className
      )}
    >
      {children}
    </span>
  );
}
