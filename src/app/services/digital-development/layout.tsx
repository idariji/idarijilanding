import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design & Development Agency in Lagos, Nigeria — Idariji Concept',
  description: 'Professional website design and development services in Lagos and Ibadan, Nigeria. We build fast, modern websites, e-commerce stores, and mobile apps for businesses across Nigeria.',
  keywords: ['web development Lagos', 'website design Nigeria', 'digital agency Lagos', 'app development Nigeria', 'e-commerce development Lagos', 'web design Ibadan', 'website development Nigeria'],
  openGraph: {
    title: 'Website Design & App Development Agency in Lagos, Nigeria — Idariji Concept',
    description: 'Professional website design, development, and mobile app services in Lagos, Nigeria.',
  },
}

export default function DigitalDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children
}
