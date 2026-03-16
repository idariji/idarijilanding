import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hospitality Marketing & Management Agency in Nigeria — Idariji Concept',
  description: 'Specialized hospitality marketing and hotel management consulting in Lagos and Ibadan, Nigeria. Guest experience optimization, booking strategy, and revenue management for hotels and hospitality businesses.',
  keywords: ['hotel marketing Nigeria', 'hospitality marketing Lagos', 'hotel management Nigeria', 'hospitality agency Lagos', 'hotel marketing Ibadan', 'guest experience Nigeria', 'hospitality consulting Nigeria'],
  openGraph: {
    title: 'Hotel & Hospitality Marketing Agency in Nigeria — Idariji Concept',
    description: 'Specialized hospitality marketing and hotel management consulting in Lagos and Ibadan, Nigeria.',
  },
}

export default function HospitalityManagementLayout({ children }: { children: React.ReactNode }) {
  return children
}
