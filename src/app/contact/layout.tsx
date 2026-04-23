import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Idariji Concept. Start a project, ask a question, or book a free consultation. Based in Lagos and Ibadan, Nigeria.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
