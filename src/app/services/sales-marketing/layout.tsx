import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Lagos, Nigeria — Idariji Concept',
  description: 'Result-driven digital marketing agency in Lagos and Ibadan, Nigeria. Social media marketing, content strategy, lead generation, and performance marketing for businesses across Nigeria.',
  keywords: ['digital marketing agency Lagos', 'social media marketing Nigeria', 'marketing agency Lagos', 'lead generation Nigeria', 'content marketing Lagos', 'digital marketing Ibadan', 'performance marketing Nigeria'],
  openGraph: {
    title: 'Digital Marketing & Social Media Agency in Lagos, Nigeria — Idariji Concept',
    description: 'Result-driven digital marketing agency in Lagos, Nigeria. Social media, content strategy, and lead generation.',
  },
}

export default function SalesMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}
