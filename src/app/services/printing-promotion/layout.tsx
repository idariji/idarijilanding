import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Printing & Promotional Materials in Lagos, Nigeria — Idariji Concept',
  description: 'High-quality printing and promotional materials in Lagos and Ibadan, Nigeria. Business cards, banners, flyers, branded merchandise, and large-format printing for businesses across Nigeria.',
  keywords: ['printing services Lagos', 'promotional materials Nigeria', 'printing company Lagos', 'branded merchandise Nigeria', 'flyer printing Lagos', 'banner printing Nigeria', 'print design Ibadan'],
  openGraph: {
    title: 'Printing & Branded Promotional Materials in Lagos, Nigeria — Idariji Concept',
    description: 'High-quality printing and promotional materials — business cards, banners, flyers, and branded merchandise in Lagos, Nigeria.',
  },
}

export default function PrintingPromotionLayout({ children }: { children: React.ReactNode }) {
  return children
}
