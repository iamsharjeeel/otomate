'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { SOLUTIONS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <SectionLabel>{SOLUTIONS.label}</SectionLabel>
          <h2 className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {SOLUTIONS.headline}
          </h2>
          <p className="mt-6 text-lg text-text-muted">
            {SOLUTIONS.subheading}
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {SOLUTIONS.items.map((solution) => {
            const Icon = solution.icon;
            return (
              <GlassCard
                key={solution.title}
                className="group transition-shadow duration-300 hover:shadow-glow-accent"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent-muted">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-sora text-xl font-semibold text-text-primary">
                  {solution.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-muted">
                  {solution.body}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
