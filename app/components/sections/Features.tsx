'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { GradientText } from '@/app/components/ui/GradientText';
import { FEATURES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

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

      if (listRef.current) {
        const items = listRef.current.children;
        gsap.from(items, {
          x: -30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (tableRef.current) {
        const rows = tableRef.current.querySelectorAll('.comparison-row');
        gsap.from(rows, {
          x: 30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        const priceElements = tableRef.current.querySelectorAll('.price-value');
        priceElements.forEach((el, i) => {
          gsap.fromTo(
            el,
            { textDecoration: 'none', opacity: 1 },
            {
              textDecoration: 'line-through',
              opacity: 0.5,
              duration: 0.3,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: tableRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      if (revealRef.current) {
        gsap.from(revealRef.current, {
          y: 30,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: revealRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div ref={headerRef} className="mx-auto mb-16 max-w-3xl text-center">
          <SectionLabel>{FEATURES.label}</SectionLabel>
          <h2 className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {FEATURES.headline}
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <ul ref={listRef} className="space-y-4">
            {FEATURES.items.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-text-primary"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-muted">
                  <Check className="h-3 w-3 text-accent" />
                </span>
                <span className="text-sm leading-relaxed md:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div>
            <div
              ref={tableRef}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <div className="border-b border-border-hairline px-6 py-4">
                <div className="grid grid-cols-2 font-mono text-xs uppercase tracking-wider text-text-subtle">
                  <span>Tool Replaced</span>
                  <span className="text-right">Cost</span>
                </div>
              </div>

              {FEATURES.comparison.map((row) => (
                <div
                  key={row.tool}
                  className="comparison-row grid grid-cols-2 border-b border-border px-6 py-3 last:border-0"
                >
                  <span className="text-sm text-text-muted">{row.tool}</span>
                  <span className="price-value text-right font-mono text-sm text-text-primary">
                    {formatPrice(row.cost)}/mo
                  </span>
                </div>
              ))}

              <div className="grid grid-cols-2 border-t border-border-hairline bg-white/5 px-6 py-4">
                <span className="font-sora font-semibold text-text-primary">
                  Total if separate
                </span>
                <span className="text-right font-mono font-bold text-text-primary line-through opacity-50">
                  {formatPrice(FEATURES.totalSeparate)}/mo
                </span>
              </div>
            </div>

            <div ref={revealRef} className="mt-8 text-center lg:text-left">
              <p className="font-sora text-xl font-semibold text-text-primary md:text-2xl">
                <GradientText>{FEATURES.reveal}</GradientText>
              </p>
              <p className="mt-3 font-mono text-lg text-accent">
                You save {formatPrice(FEATURES.savings)}/month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
