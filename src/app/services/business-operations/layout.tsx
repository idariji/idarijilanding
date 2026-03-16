import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Operations Consulting in Lagos, Nigeria — Idariji Concept',
  description: 'Expert business operations consulting in Lagos and Ibadan, Nigeria. Process optimization, workflow management, and business systems design for SMEs and enterprises across Nigeria.',
  keywords: ['business operations Lagos', 'process optimization Nigeria', 'business consulting Lagos', 'SME operations Nigeria', 'workflow management Lagos', 'business systems Ibadan', 'operations management Nigeria'],
  openGraph: {
    title: 'Business Operations & Process Optimization Consulting, Lagos Nigeria — Idariji Concept',
    description: 'Expert business operations consulting in Lagos and Ibadan. Process optimization and workflow management for Nigerian businesses.',
  },
}

export default function BusinessOperationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
