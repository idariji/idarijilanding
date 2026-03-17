import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#001f3f' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/5 pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-12">
          {/* Brand section */}
          <div className="md:col-span-4 space-y-4">
            <div className="mb-4">
              <span className="text-2xl sm:text-4xl font-bold text-white">Idariji Concept</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              We combine smart strategy with bold creativity to bring your vision to life. Every idea is crafted to deliver real, measurable results.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full h-8 w-8 sm:h-9 sm:w-9 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center" aria-label="Facebook">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full h-8 w-8 sm:h-9 sm:w-9 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center" aria-label="X (Twitter)">
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full h-8 w-8 sm:h-9 sm:w-9 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center" aria-label="Instagram">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full h-8 w-8 sm:h-9 sm:w-9 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">About</Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/product-branding" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Product Branding</Link>
              </li>
              <li>
                <Link href="/services/sales-marketing" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Sales & Marketing</Link>
              </li>
              <li>
                <Link href="/services/business-operations" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Business Operations</Link>
              </li>
              <li>
                <Link href="/services/digital-development" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Digital Development</Link>
              </li>
              <li>
                <Link href="/services/gift-and-merchandise" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">Gift & Merchandise</Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-300">
                  <p><span className="font-semibold text-white">Lagos:</span> {siteConfig.addresses.lagos}</p>
                  <p className="mt-1"><span className="font-semibold text-white">Ibadan:</span> {siteConfig.addresses.ibadan}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-300">
                  {siteConfig.phones.map((phone) => (
                    <p key={phone}><a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{phone}</a></p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-300">
                  <a href="mailto:hello@idarijiconcept.ng" className="hover:text-white transition-colors">hello@idarijiconcept.ng</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs sm:text-sm text-gray-300">
            © {siteConfig.founded}–{currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}