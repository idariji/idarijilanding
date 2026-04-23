import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to frequently asked questions about working with Idariji Concept — our services, pricing, process, timelines, and more.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
