import React from 'react'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover:pr-8 active:scale-95 min-h-[64px]">
        <MessageCircle size={28} className="flex-shrink-0" />
        <span className="hidden group-hover:block text-base font-medium whitespace-nowrap">
          Need Help? Chat Us Now
        </span>
      </div>
    </a>
  )
}
