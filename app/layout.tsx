import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { ThemeProvider } from '@/app/components/ui/ThemeProvider';
import { SITE } from '@/lib/constants';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const description =
  'Otomate installs a complete AI revenue system into your business: missed call text-back, 2-way SMS/email marketing, database reactivation, AI voice agents, reputation management. Done-for-you. Live in 48 hours.';

export const metadata: Metadata = {
  title:
    'Otomate — AI-Powered Business Automation | Unified Inbox, AI Agents & Revenue Recovery',
  description,
  keywords: [
    'business automation',
    'AI agents',
    'missed call text back',
    'unified inbox',
    'reputation management',
    'database reactivation',
    'SMS marketing automation',
    'AI voice agent',
  ],
  authors: [{ name: 'Otomate' }],
  creator: 'Otomate',
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: 'website',
    url: SITE.url,
    title: 'Otomate — AI-Powered Business Automation',
    description,
    siteName: 'Otomate',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Otomate — AI-Powered Business Automation',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otomate — AI-Powered Business Automation',
    description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} light`}
      suppressHydrationWarning
    >
      <head>
        {/* Analytics placeholder */}
        {/* <Script src="..." strategy="afterInteractive" /> */}
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
