'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/Button';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { PRICING } from '@/lib/constants';
import { cn, formatPrice, scrollToSection } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
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

  const handleToggle = () => {
    if (toggleRef.current) {
      gsap.to(toggleRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => setIsYearly((prev) => !prev),
      });
    } else {
      setIsYearly((prev) => !prev);
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="section-padding">
      <div className="section-container">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <SectionLabel>{PRICING.label}</SectionLabel>
          <h2 className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {PRICING.headline}
          </h2>
          <p className="mt-6 text-lg text-text-muted">{PRICING.subheading}</p>

          <div
            ref={toggleRef}
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-border-hairline bg-white/5 p-1"
          >
            <button
              type="button"
              onClick={() => !isYearly || handleToggle()}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-all focus-ring',
                !isYearly
                  ? 'bg-accent text-white shadow-glow'
                  : 'text-text-muted hover:text-text-primary'
              )}
            >
              {PRICING.monthlyLabel}
            </button>
            <button
              type="button"
              onClick={() => isYearly || handleToggle()}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-all focus-ring',
                isYearly
                  ? 'bg-accent text-white shadow-glow'
                  : 'text-text-muted hover:text-text-primary'
              )}
            >
              {PRICING.yearlyLabel}
            </button>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-center"
        >
          {PRICING.tiers.map((tier) => {
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
            const period = isYearly ? '/year' : '/mo';

            return (
              <div
                key={tier.id}
                className={cn(
                  'glass-card relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow',
                  tier.popular &&
                    'scale-[1.03] border-accent/50 shadow-glow-accent lg:-my-4'
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {tier.label}
                  </p>
                  <h3 className="mt-2 font-sora text-2xl font-bold text-text-primary">
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-mono text-4xl font-bold text-text-primary">
                      {formatPrice(price)}
                    </span>
                    <span className="text-text-muted">{period}</span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-text-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => scrollToSection('cta')}
                >
                  {tier.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
