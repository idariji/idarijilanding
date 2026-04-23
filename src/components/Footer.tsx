import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#001f3f' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-800/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pt-12 sm:pt-16 pb-10 sm:pb-12">

          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/">
              <img
                src="/idariji-logo.svg"
                alt="Idariji Concept"
                className="h-8 sm:h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Specialist branding and marketing for Nigerian hospitality, food &amp; beverage, and growth-stage brands. Lagos and Ibadan.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: siteConfig.social.facebook, label: 'Facebook', icon: <Facebook className="h-3.5 w-3.5" /> },
                {
                  href: siteConfig.social.twitter, label: 'X (Twitter)', icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )
                },
                { href: siteConfig.social.instagram, label: 'Instagram', icon: <Instagram className="h-3.5 w-3.5" /> },
                { href: siteConfig.social.linkedin, label: 'LinkedIn', icon: <Linkedin className="h-3.5 w-3.5" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-[#FF6B00]/25 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — side-by-side on all screens */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide">Verticals</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'For Hotels', href: '/hotels' },
                  { name: 'For Food Brands', href: '/food-brands' },
                  { name: 'For Startups', href: '/startups' },
                  { name: 'For Corporates', href: '/corporate' },
                  { name: 'All Services', href: '/services' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm tracking-wide">Company</h3>
              <ul className="space-y-2.5">
                {[
                  { name: 'About', href: '/about' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'FAQ', href: '/faq' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wide">Get in Touch</h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="h-3.5 w-3.5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <div className="text-xs text-gray-400 space-y-1">
                  <p><span className="text-white font-medium">Lagos:</span> 21 Anifowose St, Shomolu</p>
                  <p><span className="text-white font-medium">Ibadan:</span> House 3, Latinwo Estate, Jericho</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-3.5 w-3.5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <div className="text-xs text-gray-400 space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <p key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 text-[#FF6B00] flex-shrink-0" />
                <a href="mailto:hello@idarijiconcept.ng" className="text-xs text-gray-400 hover:text-white transition-colors break-all">
                  hello@idarijiconcept.ng
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white rounded-full px-4 py-2.5 transition-all duration-200 mt-2"
              style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.4l-.371-.22-3.762.893.942-3.648-.241-.377A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {siteConfig.founded}–{currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
