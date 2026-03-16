import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Identity Design Agency in Lagos, Nigeria — Idariji Concept',
  description: 'Professional brand identity design, logo design, and brand strategy services in Lagos and Ibadan, Nigeria. We create memorable brands that connect emotionally with your audience and drive business growth.',
  keywords: ['brand identity design Lagos', 'logo design Nigeria', 'branding agency Lagos', 'brand strategy Nigeria', 'brand guidelines Ibadan', 'brand design agency Nigeria', 'Idariji Concept branding'],
  openGraph: {
    title: 'Brand Identity & Logo Design Agency in Lagos, Nigeria — Idariji Concept',
    description: 'Professional brand identity design, logo design, and brand strategy services in Lagos and Ibadan, Nigeria.',
  },
}

export default function ProductBrandingLayout({ children }: { children: React.ReactNode }) {
  return children
}
