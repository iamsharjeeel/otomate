import { SectionLabel } from '@/app/components/ui/SectionLabel';
import { LOGO_SCROLL } from '@/lib/constants';

function BrandLogo({ name }: { name: string }) {
  const width = 80 + (name.length % 5) * 20;

  return (
    <div className="flex shrink-0 items-center px-8">
      <svg
        width={width}
        height="32"
        viewBox={`0 0 ${width} 32`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0"
          y="8"
          width={width * 0.15}
          height="16"
          rx="2"
          className="fill-accent/40"
        />
        <text
          x={width * 0.2}
          y="22"
          className="fill-text-muted font-sora text-sm font-semibold"
          style={{ fontSize: '14px' }}
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

export function LogoScroll() {
  const row1 = LOGO_SCROLL.brands.slice(0, 6);
  const row2 = LOGO_SCROLL.brands.slice(6);

  return (
    <section className="bg-surface-elevated py-16 md:py-20">
      <div className="section-container mb-10 text-center">
        <SectionLabel>{LOGO_SCROLL.label}</SectionLabel>
      </div>

      <div className="marquee-mask space-y-6 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...row1, ...row1].map((brand, i) => (
            <BrandLogo key={`r1-${brand}-${i}`} name={brand} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse">
          {[...row2, ...row2].map((brand, i) => (
            <BrandLogo key={`r2-${brand}-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
