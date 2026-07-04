import type { LucideIcon } from 'lucide-react';
import {
  Mail,
  MessageSquare,
  Phone,
  PhoneMissed,
  RefreshCw,
  Star,
} from 'lucide-react';

export const SITE = {
  name: 'OTOMATE',
  url: 'https://otomate.biz',
  tagline: 'Revenue automation for businesses that refuse to stay small.',
  email: 'hello@otomate.biz',
  phone: '(061) 765-987',
  location: 'New York, USA',
} as const;

export const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#testimonials' },
] as const;

export const HERO = {
  badge: 'AI-POWERED GROWTH SYSTEM',
  headline: {
    line1: 'Stop Losing Revenue',
    line2: 'to',
    highlights: ['Missed Calls,', 'Cold Leads', '& Silence.'],
  },
  subheading:
    'Otomate installs a fully automated revenue system into your business — AI agents, unified inbox, reactivation campaigns, and reputation tools. Done-for-you. Live in days.',
  primaryCta: 'Book a Free Demo',
  secondaryCta: 'See How It Works',
  socialProof: '1,000+ businesses automated',
  stats: [
    { value: 1000, suffix: '+', label: 'Brands' },
    { value: 3, suffix: 'x', label: 'Avg. Revenue Lift' },
    { value: 48, suffix: 'hr', label: 'Avg. Go-Live' },
  ],
} as const;

export const LOGO_SCROLL = {
  label: 'TRUSTED BY 1,000+ BRANDS WORLDWIDE',
  brands: [
    'Apex Dental',
    'Summit HVAC',
    'Nova Realty',
    'Prime Auto',
    'Elite Med Spa',
    'Bright Law',
    'Coastal Roofing',
    'Vertex Fitness',
    'Harbor Plumbing',
    'Skyline Agency',
    'Pulse Health',
    'Forge Construction',
  ],
} as const;

export const PROBLEM = {
  headline: 'Your business is leaking revenue every single day.',
  body: 'Every missed call is a customer lost. Every cold lead is money left on the table. Every day without automation is a day your competitors gain ground.',
  cards: [
    {
      emoji: '📵',
      stat: '67% of callers never call back if you don\'t answer.',
    },
    {
      emoji: '💸',
      stat: '80% of leads go cold within 5 minutes of inquiry.',
    },
    {
      emoji: '😴',
      stat: 'You\'re manually doing what AI can handle 24/7.',
    },
  ],
  cta: 'Sound familiar? Let\'s fix it.',
} as const;

export interface Solution {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const SOLUTIONS = {
  label: 'WHAT WE INSTALL FOR YOU',
  headline: 'One system. Every revenue leak — sealed.',
  subheading:
    'Not software you figure out. A done-for-you system we build, install, and run inside your business.',
  items: [
    {
      icon: MessageSquare,
      title: 'Unified Inbox',
      body: 'Every lead, every channel — SMS, email, Instagram, Facebook, WhatsApp — in one conversation feed. Never miss a message again.',
    },
    {
      icon: Phone,
      title: 'AI Voice Agent',
      body: 'Our AI answers your phone 24/7, qualifies leads, books appointments, and hands off to your team — without you lifting a finger.',
    },
    {
      icon: PhoneMissed,
      title: 'Missed Call Text-Back',
      body: 'The moment a call is missed, our system sends an instant personalized SMS — recovering leads that would have gone cold permanently.',
    },
    {
      icon: RefreshCw,
      title: 'Database Reactivation',
      body: 'Your old leads are a goldmine. We run AI-driven campaigns that wake up dormant contacts and turn them into booked appointments — quarterly.',
    },
    {
      icon: Mail,
      title: 'Email & SMS Marketing',
      body: 'Automated nurture sequences, broadcasts, and follow-ups across email and SMS. Personalized, timely, and built to convert.',
    },
    {
      icon: Star,
      title: 'Reputation Management AI',
      body: 'Automatically request reviews after every job, filter negative feedback, respond to Google reviews — and watch your rating climb on autopilot.',
    },
  ] satisfies Solution[],
} as const;

export const HOW_IT_WORKS = {
  label: 'THE PROCESS',
  headline: 'From signed to running in 48 hours.',
  subheading: 'We handle everything. You just show up to the onboarding call.',
  steps: [
    {
      number: '01',
      title: 'Audit & Strategy Call',
      body: 'We map your current revenue gaps, lead flow, and automation opportunities in one focused session.',
    },
    {
      number: '02',
      title: 'We Build & Install',
      body: 'Our team builds your entire system — CRM, automations, AI agents, inbox, campaigns. You don\'t touch a line of code.',
    },
    {
      number: '03',
      title: 'You Scale',
      body: 'Go live within 48 hours. Watch leads respond, calls get answered, and reviews roll in — automatically.',
    },
  ],
} as const;

export const FEATURES = {
  label: 'EVERYTHING INCLUDED',
  headline: 'Replace 12 tools with one done-for-you system.',
  items: [
    'AI Booking Automations',
    'Unified Inbox (SMS, Email, IG, FB, WhatsApp)',
    'Missed Call Text-Back',
    '2-Way Email Marketing',
    '2-Way SMS Marketing',
    'Database Reactivation (Quarterly)',
    'Reputation Management AI',
    'AI Conversational Chat Widget (24/7)',
    'AI Voice Agent',
    'CRM & Pipeline Management',
    'Drag & Drop Websites & Landing Pages',
    'Unlimited Contacts & Users',
    'Automated Appointment Reminders',
    'Google Review Management',
    'GMB Messaging Integration',
    'Full Integrations (Zapier, Stripe, WhatsApp, Slack, WordPress)',
  ],
  comparison: [
    { tool: 'CRM Software', cost: 499 },
    { tool: 'Email Marketing', cost: 399 },
    { tool: 'SMS Platform', cost: 197 },
    { tool: 'Booking Software', cost: 99 },
    { tool: 'Chat Widget AI', cost: 195 },
    { tool: 'Review Management', cost: 299 },
    { tool: 'Voice AI Agent', cost: 499 },
    { tool: 'Reputation Tool', cost: 99 },
    { tool: 'Analytics Dashboard', cost: 49 },
  ],
  totalSeparate: 2334,
  otomatePrice: 997,
  savings: 1337,
  reveal: 'With Otomate: starting at $997/mo — done-for-you.',
} as const;

export interface PricingTier {
  id: string;
  name: string;
  label: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PRICING = {
  label: 'INVESTMENT',
  headline: 'Choose your growth tier.',
  subheading:
    'No contracts. No hidden fees. Cancel anytime — but you won\'t want to.',
  monthlyLabel: 'Monthly',
  yearlyLabel: 'Yearly',
  tiers: [
    {
      id: 'pro',
      name: 'Pro',
      label: 'Lead Pro',
      monthlyPrice: 997,
      yearlyPrice: 5970,
      features: [
        'Customized website',
        'Lead gen forms',
        'Live chat widget',
        'Calendar + booking automation',
        'Automated reminders',
        'Review gathering',
        'Video onboarding',
      ],
      cta: 'Get Started',
    },
    {
      id: 'premium',
      name: 'Premium',
      label: 'Lead Master',
      monthlyPrice: 1497,
      yearlyPrice: 6970,
      features: [
        'Everything in Pro',
        'AI missed call text-back',
        'SEO',
        'GMB messaging',
        'Universal inbox',
        'Full integrations',
        'Live onboarding',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      id: 'diamond',
      name: 'Diamond',
      label: 'Lead Monster',
      monthlyPrice: 2497,
      yearlyPrice: 9970,
      features: [
        'Everything in Premium',
        'Active reputation management',
        'Database reactivation (quarterly)',
        'AI chat widget (24/7)',
        'Full integrations (Zapier/Stripe/WhatsApp/Slack/WP)',
        '24/7 customer support',
        'Full personalized onboarding',
      ],
      cta: 'Get Started',
    },
  ] satisfies PricingTier[],
} as const;

export const TESTIMONIALS = {
  label: 'CLIENT RESULTS',
  headline: '1,000+ businesses. Real results.',
  stats: [
    { value: 3, suffix: 'x', label: 'Average Revenue Lift' },
    { value: 48, suffix: 'hr', label: 'Average Go-Live' },
    { value: 1000, suffix: '+', label: 'Businesses Automated' },
  ],
  items: [
    {
      name: 'Marcus Rivera',
      business: 'Summit HVAC Services',
      initials: 'MR',
      rating: 5,
      quote:
        'We were losing 15-20 calls a week after hours. Otomate\'s AI voice agent and missed call text-back recovered $47K in revenue in the first 90 days. The system literally pays for itself.',
    },
    {
      name: 'Sarah Chen',
      business: 'Bright Smile Dental',
      initials: 'SC',
      rating: 5,
      quote:
        'Our Google rating went from 3.8 to 4.9 stars in three months. The reputation AI handles everything — requests reviews, responds to feedback. I haven\'t touched it once.',
    },
    {
      name: 'David Okonkwo',
      business: 'Vertex Realty Group',
      initials: 'DO',
      rating: 5,
      quote:
        'Database reactivation alone brought us 23 booked appointments from leads we thought were dead. Otomate turned our CRM from a graveyard into a revenue engine.',
    },
  ],
} as const;

export const CTA_SECTION = {
  headline: 'Your competitors are automating. Are you?',
  subheading:
    'Book a 30-minute strategy session. We\'ll show you exactly where your business is leaking revenue and how to seal it.',
  primaryCta: 'Book My Free Demo',
  disclaimer: 'No commitment. No sales pressure. Just clarity.',
} as const;

export const FOOTER = {
  columns: [
    {
      title: 'Solutions',
      links: [
        { label: 'Unified Inbox', href: '#solutions' },
        { label: 'AI Voice Agent', href: '#solutions' },
        { label: 'Missed Call Text-Back', href: '#solutions' },
        { label: 'Database Reactivation', href: '#solutions' },
        { label: 'Reputation AI', href: '#solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Results', href: '#testimonials' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#testimonials' },
        { label: 'Support', href: '#' },
        { label: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: SITE.email, href: `mailto:${SITE.email}` },
        { label: SITE.phone, href: `tel:${SITE.phone.replace(/[^0-9+]/g, '')}` },
        { label: SITE.location, href: '#' },
      ],
    },
  ],
  social: [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} Otomate. All rights reserved.`,
} as const;

export const CTAS = {
  bookDemo: 'Book a Free Demo',
  bookMyDemo: 'Book My Free Demo',
  getStarted: 'Get Started',
  login: 'Login',
} as const;

// Placeholder for future exit-intent modal implementation
export const EXIT_INTENT_MODAL_ENABLED = false;
