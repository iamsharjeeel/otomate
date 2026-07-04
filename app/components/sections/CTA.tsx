'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/Button';
import { CTA_SECTION } from '@/lib/constants';

const OrbScene = dynamic(
  () => import('@/app/components/three/OrbScene'),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden section-padding"
    >
      <OrbScene />

      <div className="section-container relative z-10">
        <div ref={contentRef} className="mx-auto max-w-3xl text-center">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            {CTA_SECTION.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            {CTA_SECTION.subheading}
          </p>
          <div className="mt-10">
            <Button size="lg" className="w-full sm:w-auto sm:min-w-[280px]">
              {CTA_SECTION.primaryCta}
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-subtle">
            {CTA_SECTION.disclaimer}
          </p>
        </div>
      </div>

      {/* Exit-intent modal placeholder for future implementation */}
      {/* {EXIT_INTENT_MODAL_ENABLED && <ExitIntentModal />} */}
    </section>
  );
}
