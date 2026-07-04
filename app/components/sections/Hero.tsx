'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { Badge } from '@/app/components/ui/Badge';
import { Button } from '@/app/components/ui/Button';
import { AnimatedCounter } from '@/app/components/ui/AnimatedCounter';
import { GradientText } from '@/app/components/ui/GradientText';
import { HERO, CTAS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

const HeroCanvas = dynamic(
  () => import('@/app/components/three/HeroCanvas'),
  {
    ssr: false,
    loading: () => <div className="canvas-placeholder" />,
  }
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.2);
      }

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        tl.from(
          words,
          { y: 40, opacity: 0, duration: 0.6, stagger: 0.08 },
          0.4
        );
      }

      if (subheadingRef.current) {
        tl.from(subheadingRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.7);
      }

      if (ctaRef.current) {
        tl.from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.9);
      }

      if (statsRef.current) {
        tl.from(statsRef.current, { y: 20, opacity: 0, duration: 0.6 }, 1.1);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="grain-overlay relative flex min-h-[100dvh] items-center pt-20"
    >
      <div className="section-container relative z-10 py-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mobile: canvas first */}
          <div className="order-1 lg:order-2">
            <HeroCanvas />
          </div>

          <div className="order-2 lg:order-1">
            <div ref={badgeRef}>
              <Badge>{HERO.badge}</Badge>
            </div>

            <h1
              ref={headlineRef}
              className="mt-6 font-sora text-[2.75rem] font-bold leading-[1.1] tracking-tight text-text-primary md:text-6xl lg:text-[4.5rem]"
            >
              <span className="hero-word inline-block">{HERO.headline.line1}</span>{' '}
              <span className="hero-word inline-block">{HERO.headline.line2}</span>
              <br />
              <GradientText className="hero-word inline-block">
                {HERO.headline.highlights[0]}
              </GradientText>{' '}
              <GradientText className="hero-word inline-block">
                {HERO.headline.highlights[1]}
              </GradientText>{' '}
              <GradientText className="hero-word inline-block">
                {HERO.headline.highlights[2]}
              </GradientText>
            </h1>

            <p
              ref={subheadingRef}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl"
            >
              {HERO.subheading}
            </p>

            <div ref={ctaRef} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('cta')}
              >
                {HERO.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('how-it-works')}
              >
                {HERO.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-accent/20 text-xs font-medium text-accent"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-text-muted">{HERO.socialProof}</p>
              </div>
            </div>

            <div
              ref={statsRef}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-border-hairline pt-8"
            >
              {HERO.stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
