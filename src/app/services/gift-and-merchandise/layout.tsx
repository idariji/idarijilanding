import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift and Merchandise — Idariji Concept',
  description: 'Customizable corporate gifts and branded merchandise. Perfect for events, promotions, and client appreciation.'
}

export default function GiftMerchandiseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}