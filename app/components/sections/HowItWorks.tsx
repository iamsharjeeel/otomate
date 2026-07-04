'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { HOW_IT_WORKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

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

      if (stepsRef.current) {
        const steps = stepsRef.current.querySelectorAll('.step-card');
        gsap.from(steps, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (lineRef.current && dotRef.current) {
        const path = lineRef.current.querySelector('path');
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });

          gsap.to(dotRef.current, {
            left: '100%',
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding">
      <div className="section-container">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <SectionLabel>{HOW_IT_WORKS.label}</SectionLabel>
          <h2 className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {HOW_IT_WORKS.headline}
          </h2>
          <p className="mt-6 text-lg text-text-muted">
            {HOW_IT_WORKS.subheading}
          </p>
        </div>

        <div ref={stepsRef} className="relative mt-20">
          {/* Desktop timeline line */}
          <div className="relative hidden lg:block">
            <div className="relative mx-16 h-1">
              <svg
                ref={lineRef}
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 100 4"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 2 L 100 2"
                  stroke="rgba(0, 168, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div
                ref={dotRef}
                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent shadow-glow-accent"
                style={{ left: '0%' }}
              />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  'step-card relative text-center lg:text-left',
                  index < HOW_IT_WORKS.steps.length - 1 &&
                    'lg:after:absolute lg:after:right-0 lg:after:top-8 lg:after:hidden lg:after:h-px lg:after:w-full'
                )}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent-muted font-mono text-lg font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="font-sora text-xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-muted">
                  {step.body}
                </p>

                {/* Mobile vertical connector */}
                {index < HOW_IT_WORKS.steps.length - 1 && (
                  <div className="mx-auto mt-8 h-12 w-px bg-border-hairline lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
