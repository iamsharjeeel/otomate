import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'var(--color-navy)',
          light: 'var(--color-navy-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          bright: 'var(--color-accent-bright)',
          muted: 'var(--color-accent-muted)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          card: 'var(--color-surface-card)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          muted: 'var(--color-text-muted)',
          subtle: 'var(--color-text-subtle)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          hairline: 'var(--color-border-hairline)',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-bright) 50%, #00D4FF 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 168, 255, 0.15)',
        'glow-lg': '0 0 60px rgba(0, 168, 255, 0.25)',
        'glow-accent': '0 0 30px rgba(0, 168, 255, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
