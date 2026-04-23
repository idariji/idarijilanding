import React from 'react'
import {
  Palette, TrendingUp, Users, Award, Globe, Gift,
  ArrowUpRight, ArrowRight, MessageCircle, CheckCircle2,
  Package
} from 'lucide-react'
import BookCTA from '../../components/BookCTA'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import WhatsAppButton from '../../components/WhatsAppButton'
import { siteConfig } from '../../lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding & Marketing Services Nigeria — Hotels, Food Brands, Startups | Idariji Concept',
  description: 'Specialist branding and marketing for Nigerian hospitality, food & beverage, tech startups, and corporate brands. Lagos and Ibadan. 80+ projects. 6+ years.',
  keywords: ['branding agency Lagos', 'hotel marketing Nigeria', 'food packaging design Nigeria', 'startup branding Nigeria', 'corporate communications Nigeria', 'branding agency Ibadan'],
}

// ─── Vertical pages ────────────────────────────────────────────────────────
const verticals = [
  {
    tag: 'Hospitality',
    title: 'For Hotels',
    headline: 'Stop losing bookings to OTAs.',
    description: 'Brand strategy, direct-booking websites, and marketing engines for Nigerian boutique hotels, serviced apartments, and event centres.',
    bullets: ['Direct booking website builds', 'Social media content & ads', 'Hotel Visibility Audit — ₦200,000', 'Corporate sales decks'],
    href: '/hotels',
    accent: '#C97A3A',
    bg: 'linear-gradient(135deg, #1a0e06 0%, #2d1a0a 100%)',
  },
  {
    tag: 'Food & Beverage',
    title: 'For Food Brands',
    headline: 'Stand out on the shelf and on Chowdeck.',
    description: 'Brand identity, packaging design, and delivery-app optimisation for Nigerian food, beverage, and snack brands.',
    bullets: ['Packaging design (NAFDAC-ready)', 'Brand identity systems', 'Delivery app optimisation', 'Brand & Packaging Audit — ₦150,000'],
    href: '/food-brands',
    accent: '#E8472A',
    bg: 'linear-gradient(135deg, #1a0602 0%, #2d0f08 100%)',
  },
  {
    tag: 'Tech Startups',
    title: 'For Startups',
    headline: 'Convert users. Impress investors.',
    description: 'Brand strategy, website rebuilds, and fractional growth teams for seed to Series A Nigerian startups.',
    bullets: ['Positioning & messaging', 'Next.js marketing sites', 'Design systems', 'Growth & Brand Teardown — ₦350,000'],
    href: '/startups',
    accent: '#4F46E5',
    bg: 'linear-gradient(135deg, #06060f 0%, #0d0d20 100%)',
  },
  {
    tag: 'Corporate',
    title: 'For Corporates',
    headline: 'Communications at the standard of your brand.',
    description: 'Capability statements, annual reports, corporate websites, CSR documentation, and executive communications.',
    bullets: ['Corporate capability decks', 'Annual report design', 'Corporate website rebuild', 'HSE campaign creative'],
    href: '/corporate',
    accent: '#0891B2',
    bg: 'linear-gradient(135deg, #071827 0%, #030e18 100%)',
  },
]

// ─── Supporting services ───────────────────────────────────────────────────
const supporting = [
  {
    icon: Palette,
    title: 'Product Branding & Identity',
    description: 'Logo design, brand guidelines, colour systems, and typography for businesses that want to look intentional.',
    link: '/services/product-branding',
    features: ['Logo & Brand Identity', 'Brand Guidelines Document', 'Colour & Typography System'],
  },
  {
    icon: TrendingUp,
    title: 'Sales & Digital Marketing',
    description: 'Data-driven campaigns that attract, engage, and convert — turning your visibility into consistent revenue.',
    link: '/services/sales-marketing',
    features: ['Social Media Management', 'Paid Advertising (Meta & Google)', 'Email Marketing'],
  },
  {
    icon: Globe,
    title: 'Digital Development',
    description: 'Websites and digital experiences that enhance your customer journey and business performance.',
    link: '/services/digital-development',
    features: ['Website Design & Build', 'Landing Pages', 'E-commerce'],
  },
  {
    icon: Award,
    title: 'Printing & Promotion',
    description: 'High-quality print materials that bring your brand to life at every physical touchpoint.',
    link: '/services/printing-promotion',
    features: ['Flyers, Banners & Signage', 'Business Cards & Stationery', 'Large Format Printing'],
  },
  {
    icon: Users,
    title: 'Business Operations',
    description: 'We streamline your processes and structure systems for efficiency, productivity, and sustainable growth.',
    link: '/services/business-operations',
    features: ['Process Optimisation', 'System Integration', 'Workflow Management'],
  },
  {
    icon: Gift,
    title: 'Gift & Merchandise',
    description: 'Customisable corporate gifts and branded merchandise for events, client appreciation, and team building.',
    link: '/services/gift-and-merchandise',
    features: ['Corporate Gift Packs', 'Branded Merchandise', 'Custom Packaging'],
  },
]

// ─── Fixed-price packages preview ─────────────────────────────────────────
const packages = [
  { name: 'Hotel Visibility Audit', price: '₦200,000', days: '7 days' },
  { name: 'Food Brand & Packaging Audit', price: '₦150,000', days: '5 days' },
  { name: 'Startup Growth Teardown', price: '₦350,000', days: '7 days' },
  { name: 'Logo & Brand Guide Sprint', price: '₦450,000', days: '10 days' },
  { name: 'One-Page Landing Site', price: '₦350,000', days: '7 days' },
  { name: '30-Day Social Content Sprint', price: '₦500,000', days: '30 days' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 sm:pb-28 overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #001F3F 0%, #000D1F 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-light opacity-20 pointer-events-none" />
        <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span>›</span>
            <span className="text-white/60">Services</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-[#FF9A40] text-xs font-bold tracking-[0.3em] uppercase mb-5">What We Do</span>
            <h1 className="font-display font-bold text-white leading-[1.08] mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)' }}>
              Specialist services for<br />
              <span className="font-display italic text-[#FF6B00]">Nigerian businesses that want to grow.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              We focus on four high-demand verticals — hospitality, food & beverage, tech startups, and corporate communications — and supporting services for every brand that wants to look premium.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookCTA
                className="btn-shine inline-flex items-center gap-2.5 bg-[#FF6B00] text-white font-bold text-sm rounded-full px-7 py-3.5 hover:bg-[#e05f00] transition-colors"
                style={{ boxShadow: '0 8px 32px rgba(255,107,0,0.35)' }}
              >
                Book a Free Strategy Call <ArrowRight size={14} />
              </BookCTA>
              <a
                href="/packages"
                className="inline-flex items-center gap-2.5 text-white/70 hover:text-white font-semibold text-sm rounded-full px-7 py-3.5 border border-white/15 hover:border-white/30 transition-all"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                See Fixed Prices <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vertical specialist pages ── */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Specialist Verticals</span>
            <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Industry-specific teams<br />
              <span className="font-display italic text-[#FF6B00]">built for your sector</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">Each vertical has its own playbook, pricing, and proof. Click through to see exactly what we do for your industry.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {verticals.map((v, i) => (
              <a
                key={i}
                href={v.href}
                className="group relative rounded-2xl overflow-hidden block hover:-translate-y-1.5 transition-all duration-300"
                style={{
                  background: v.bg,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                }}
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${v.accent}20 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }} />

                <div className="relative z-10 p-7 sm:p-8">
                  <div className="flex items-start justify-between mb-5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border" style={{ color: v.accent, borderColor: `${v.accent}40`, background: `${v.accent}12` }}>
                      {v.tag}
                    </span>
                    <ArrowUpRight size={18} className="text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-1.5">{v.title}</h3>
                  <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: v.accent }}>{v.headline}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{v.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {v.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-2 text-white/55 text-xs">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: v.accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-300" style={{ color: v.accent }}>
                    See full offering <ArrowUpRight size={13} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: v.accent }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fixed-price packages strip ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
            <div>
              <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Fixed Prices</span>
              <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
                Productised services with<br />transparent pricing
              </h2>
            </div>
            <a href="/packages" className="group inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] flex-shrink-0 hover:gap-3 transition-all duration-300">
              View all packages <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg, i) => (
              <a
                key={i}
                href="/packages"
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-[#FAF8F5] hover:border-[#FF6B00]/25 hover:bg-white transition-all duration-300"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                <div>
                  <p className="font-semibold text-[#0D0D0D] text-sm mb-0.5">{pkg.name}</p>
                  <p className="text-gray-400 text-xs">{pkg.days}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="font-display font-bold text-[#FF6B00] text-base">{pkg.price}</p>
                  <Package size={12} className="ml-auto mt-0.5 text-gray-300 group-hover:text-[#FF6B00] transition-colors" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/packages"
              className="btn-shine inline-flex items-center gap-2.5 bg-[#FF6B00] text-white font-bold text-sm rounded-full px-8 py-3.5 hover:bg-[#e05f00] transition-colors"
              style={{ boxShadow: '0 8px 24px rgba(255,107,0,0.3)' }}
            >
              See All Packages & Pay Now <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Supporting services ── */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 pb-7 border-b border-gray-200">
            <div>
              <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Also Available</span>
              <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Supporting services<br />
                <span className="font-display italic text-[#FF6B00]">for every brand</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs sm:text-right leading-relaxed">Across Fashion & Lifestyle, Industrial, and any brand that wants to look premium.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {supporting.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#FF6B00]/25 hover:-translate-y-1 hover:shadow-lg overflow-hidden block transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <span className="absolute top-5 right-6 font-display font-bold text-gray-100 group-hover:text-[#FF6B00]/12 transition-colors leading-none select-none" style={{ fontSize: '2.8rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(255,107,0,0.08)' }}>
                  <s.icon size={20} className="text-[#FF6B00]" />
                </div>

                <h3 className="font-display font-semibold text-[#0D0D0D] text-lg mb-2.5 group-hover:text-[#001F3F] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>

                <div className="space-y-1.5 mb-5">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[#FF6B00] text-xs font-bold">
                  Learn more <ArrowUpRight size={11} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">How We Work</span>
              <h2 className="font-display font-bold text-[#0D0D0D] leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Every engagement<br />starts with a strategy call.
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                We don't do proposals before we understand your business. A 30-minute call tells us everything we need to scope a solution that fits — and nothing more than you need.
              </p>
              <BookCTA
                className="btn-shine inline-flex items-center gap-2.5 bg-[#FF6B00] text-white font-bold text-sm rounded-full px-7 py-3.5 hover:bg-[#e05f00] transition-colors"
                style={{ boxShadow: '0 8px 24px rgba(255,107,0,0.3)' }}
              >
                Book a Free Strategy Call <ArrowRight size={14} />
              </BookCTA>
            </div>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Book a Strategy Call', body: 'Free 30-minute call. We listen to your challenge, your market, and your goals.' },
                { step: '02', title: 'Receive a Scoped Proposal', body: 'Clear scope, fixed timeline, and transparent pricing — no surprises.' },
                { step: '03', title: 'We Execute', body: 'Dedicated team, regular check-ins, on-time delivery. Your brand comes to life.' },
                { step: '04', title: 'You Grow', body: 'We measure what matters. Most clients stay for retainer work after the first project.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-2xl border border-gray-100 bg-[#FAF8F5]">
                  <span className="font-display font-bold text-[#FF6B00] text-2xl leading-none flex-shrink-0 w-10">{step.step}</span>
                  <div>
                    <h3 className="font-semibold text-[#0D0D0D] text-sm mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001F3F 0%, #000D1F 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-light opacity-20 pointer-events-none" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.08) 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-5 block">Ready to Start?</span>
          <h2 className="font-display font-bold text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Ready to level up<br />
            <span className="font-display italic text-[#FF9A40]">your brand?</span>
          </h2>
          <p className="text-white/55 text-base sm:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Book a free strategy call or start with one of our fixed-price audit packages. No fluff, no retainer lock-in on day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookCTA
              className="btn-shine inline-flex items-center justify-center gap-3 bg-[#FF6B00] text-white rounded-full font-bold text-sm sm:text-base hover:bg-[#e05f00] transition-colors duration-300 w-full sm:w-auto"
              style={{ padding: '16px 40px', boxShadow: '0 8px 32px rgba(255,107,0,0.35)' }}
            >
              Book a Strategy Call <ArrowRight size={15} />
            </BookCTA>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/75 hover:text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
              style={{ padding: '16px 40px', background: 'rgba(255,255,255,0.05)' }}
            >
              <MessageCircle size={16} className="text-green-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  )
}
