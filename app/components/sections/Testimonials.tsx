'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCounter } from '@/app/components/ui/AnimatedCounter';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { TESTIMONIALS } from '@/lib/constants';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <SectionLabel>{TESTIMONIALS.label}</SectionLabel>
          <h2 className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {TESTIMONIALS.headline}
          </h2>
        </div>

        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {TESTIMONIALS.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.items.map((testimonial, index) => (
            <GlassCard
              key={testimonial.name}
              className={cn(
                'flex flex-col',
                index === 1 && 'md:mt-8'
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-muted font-sora text-sm font-bold text-accent">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-sora font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-subtle">
                    {testimonial.business}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
