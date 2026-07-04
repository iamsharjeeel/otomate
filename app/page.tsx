import { Hero } from '@/app/components/sections/Hero';
import { LogoScroll } from '@/app/components/sections/LogoScroll';
import { ProblemStatement } from '@/app/components/sections/ProblemStatement';
import { Solutions } from '@/app/components/sections/Solutions';
import { HowItWorks } from '@/app/components/sections/HowItWorks';
import { Features } from '@/app/components/sections/Features';
import { Pricing } from '@/app/components/sections/Pricing';
import { Testimonials } from '@/app/components/sections/Testimonials';
import { CTA } from '@/app/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoScroll />
      <ProblemStatement />
      <Solutions />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
