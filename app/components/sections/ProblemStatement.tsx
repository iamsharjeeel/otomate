'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { Button } from '@/app/components/ui/Button';
import { PROBLEM, CTAS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function ProblemStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
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

      if (bodyRef.current) {
        gsap.from(bodyRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
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

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            ref={headlineRef}
            className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl"
          >
            {PROBLEM.headline}
          </h2>
          <p
            ref={bodyRef}
            className="mt-6 text-lg leading-relaxed text-text-muted"
          >
            {PROBLEM.body}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {PROBLEM.cards.map((card) => (
            <GlassCard key={card.stat} className="text-center">
              <span className="text-4xl" role="img" aria-hidden="true">
                {card.emoji}
              </span>
              <p className="mt-4 text-base leading-relaxed text-text-primary">
                {card.stat}
              </p>
            </GlassCard>
          ))}
        </div>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={() => scrollToSection('solutions')}
            className="font-sora text-lg font-medium text-accent underline-offset-4 transition-colors hover:text-accent-bright hover:underline focus-ring rounded-sm"
          >
            {PROBLEM.cta}
          </button>
          <Button onClick={() => scrollToSection('cta')}>
            {CTAS.bookDemo}
          </Button>
        </div>
      </div>
    </section>
  );
}
