'use client';

import { useEffect, useRef } from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FOOTER, SITE } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const socialIcons = {
  Twitter,
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
} as const;

export function Footer() {
  const stickyBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !stickyBarRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'bottom top',
        onEnter: () => {
          gsap.to(stickyBarRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(stickyBarRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Sticky mobile CTA bar */}
      <div
        ref={stickyBarRef}
        className="fixed bottom-0 left-0 right-0 z-40 translate-y-full border-t border-border-hairline bg-surface/95 p-4 opacity-0 backdrop-blur-md lg:hidden"
      >
        <button
          type="button"
          onClick={() => scrollToSection('cta')}
          className="w-full rounded-full bg-accent py-3.5 text-center text-sm font-semibold text-white shadow-glow focus-ring"
        >
          Book a Demo
        </button>
      </div>

      <footer className="border-t border-border-hairline bg-surface pb-24 lg:pb-0">
        <div className="section-container section-padding">
          <div className="mb-16 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <a
                href="#"
                className="font-sora text-2xl font-bold text-text-primary focus-ring rounded-sm"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {SITE.name}
                <span className="text-accent">.</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {SITE.tagline}
              </p>
            </div>

            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 font-sora text-sm font-semibold text-text-primary">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted transition-colors hover:text-accent focus-ring rounded-sm"
                        onClick={
                          link.href.startsWith('#')
                            ? (e) => {
                                e.preventDefault();
                                scrollToSection(link.href.replace('#', ''));
                              }
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-border-hairline pt-8 md:flex-row">
            <p className="text-sm text-text-subtle">{FOOTER.copyright}</p>

            <div className="flex items-center gap-4">
              {FOOTER.social.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border-hairline text-text-muted transition-colors hover:border-accent/30 hover:text-accent focus-ring"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>

            <div className="flex gap-6">
              {FOOTER.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-text-subtle transition-colors hover:text-text-muted focus-ring rounded-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
