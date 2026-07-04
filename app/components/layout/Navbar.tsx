'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/Button';
import { ThemeToggle } from '@/app/components/ui/ThemeToggle';
import { NAV_LINKS, SITE, CTAS } from '@/lib/constants';
import { cn, scrollToSection } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -80',
        onEnter: () => {
          setScrolled(true);
          if (borderRef.current) {
            gsap.to(borderRef.current, {
              opacity: 1,
              duration: 0.3,
            });
          }
        },
        onLeaveBack: () => {
          setScrolled(false);
          if (borderRef.current) {
            gsap.to(borderRef.current, {
              opacity: 0,
              duration: 0.3,
            });
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-transparent bg-black/40 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div
          ref={borderRef}
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-border-hairline opacity-0"
        />

        <div className="section-container flex h-16 items-center justify-between md:h-20">
          <a
            href="#"
            className="flex items-center gap-1 font-sora text-xl font-bold tracking-tight text-text-primary focus-ring rounded-sm"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {SITE.name}
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                onClick={() => handleNavClick(link.href)}
              />
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              {CTAS.login}
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection('cta')}
            >
              {CTAS.bookDemo}
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hairline text-text-primary focus-ring"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-5">
                <span className="font-sora text-xl font-bold">
                  {SITE.name}
                  <span className="text-accent">.</span>
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hairline focus-ring"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    onClick={() => handleNavClick(link.href)}
                    className="font-sora text-2xl font-medium text-text-primary focus-ring"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 p-5">
                <Button variant="ghost" className="w-full">
                  {CTAS.login}
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    scrollToSection('cta');
                    setMobileOpen(false);
                  }}
                >
                  {CTAS.bookDemo}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative text-sm text-text-muted transition-colors hover:text-text-primary focus-ring rounded-sm"
      whileHover="hover"
      initial="initial"
    >
      {label}
      <motion.span
        className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
