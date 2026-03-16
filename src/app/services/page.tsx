import React from 'react'
import { Palette, TrendingUp, Users, Award, Globe, Shield, ArrowUpRight, Gift, MessageCircle } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import WhatsAppButton from '../../components/WhatsAppButton'
import { siteConfig } from '../../lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding & Marketing Services in Lagos, Nigeria — Idariji Concept',
  description: "Full-service branding and marketing agency in Lagos and Ibadan, Nigeria. Brand identity design, digital marketing, web development, hospitality management, printing, and business operations consulting.",
  keywords: ['branding services Lagos', 'marketing services Nigeria', 'creative agency Lagos', 'brand identity Nigeria', 'digital marketing Lagos', 'web development Nigeria', 'printing Lagos'],
}

const services = [
  {
    icon: Users,
    num: "01",
    title: "Business Operations",
    description: "We streamline your processes and structure your systems for efficiency, productivity, and sustainable growth.",
    link: "/services/business-operations",
    features: ["Process Optimization", "System Integration", "Workflow Management"]
  },
  {
    icon: Palette,
    num: "02",
    title: "Product Branding",
    description: "From concept to identity, we create brands that communicate value, connect emotionally, and stand out in any market.",
    link: "/services/product-branding",
    features: ["Brand Identity", "Logo Design", "Brand Guidelines"]
  },
  {
    icon: TrendingUp,
    num: "03",
    title: "Sales & Marketing",
    description: "We craft data-driven campaigns that attract, engage, and convert — turning visibility into consistent revenue.",
    link: "/services/sales-marketing",
    features: ["Digital Campaigns", "Lead Generation", "Analytics & Reporting"]
  },
  {
    icon: Globe,
    num: "04",
    title: "Digital Development",
    description: "We design and build digital solutions — from websites to apps — that enhance customer experience and performance.",
    link: "/services/digital-development",
    features: ["Web Development", "Mobile Apps", "E-commerce Solutions"]
  },
  {
    icon: Shield,
    num: "05",
    title: "Hospitality Management",
    description: "We help hospitality brands optimize operations, elevate guest experience, and boost bookings through targeted marketing.",
    link: "/services/hospitality-management",
    features: ["Guest Experience", "Booking Optimization", "Revenue Management"]
  },
  {
    icon: Award,
    num: "06",
    title: "Printing & Promotion",
    description: "From brand materials to large-scale campaigns, we bring your ideas to life with high-quality prints and creative promotions.",
    link: "/services/printing-promotion",
    features: ["Print Design", "Promotional Materials", "Large Format Printing"]
  },
  {
    icon: Gift,
    num: "07",
    title: "Gift & Merchandise",
    description: "Customizable corporate gifts and branded merchandise perfect for events, client appreciation, and team building.",
    link: "/services/gift-and-merchandise",
    features: ["Corporate Gifts", "Branded Merchandise", "Custom Packaging"]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-16 sm:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Our Services
          </h1>
          <p className="text-white/55 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
            Comprehensive branding, marketing, and business development solutions designed to grow your brand.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/45">
            <a href="/" className="hover:text-white/75 transition-colors">Home</a>
            <span className="text-white/25">›</span>
            <span className="text-white/75 font-medium">Services</span>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">What We Do</span>
            <h2
              className="font-display font-bold text-[#0D0D0D] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Our Comprehensive Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#FF6B00]/25 transition-all duration-300 overflow-hidden block"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.03)" }}
              >
                {/* Number */}
                <span
                  className="absolute top-6 right-7 font-display font-bold text-gray-100 group-hover:text-[#FF6B00]/15 transition-colors duration-300 leading-none select-none"
                  style={{ fontSize: "3rem" }}
                >
                  {service.num}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(255,107,0,0.08)" }}
                >
                  <service.icon size={22} className="text-[#FF6B00]" />
                </div>

                <h3 className="font-display font-semibold text-[#0D0D0D] text-xl mb-3 group-hover:text-[#001F3F] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[#FF6B00] text-xs font-bold">
                  Learn more <ArrowUpRight size={12} />
                </div>

                {/* Bottom orange bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4
        }} />
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,107,0,0.08) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-5 block">Ready to Start?</span>
          <h2
            className="font-display font-bold text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Let's Build Something<br />
            <span className="font-display italic text-[#FF9A40]">Extraordinary</span> Together.
          </h2>
          <p className="text-white/55 text-base sm:text-lg mb-10 leading-relaxed">
            Ready to grow your brand? Let's talk strategy, creativity, and execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="btn-shine inline-flex items-center justify-center gap-3 bg-[#FF6B00] text-white rounded-full font-bold text-sm sm:text-base hover:bg-[#e05f00] transition-colors duration-300 w-full sm:w-auto"
              style={{ padding: "16px 40px", boxShadow: "0 8px 32px rgba(255,107,0,0.35)" }}
            >
              Let's Work Together
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/75 hover:text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
              style={{ padding: "16px 40px", background: "rgba(255,255,255,0.05)" }}
            >
              <MessageCircle size={17} className="text-green-400" />
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
