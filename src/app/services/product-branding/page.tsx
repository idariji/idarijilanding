import React, { useMemo } from 'react'
import { Palette, ArrowRight } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'

export default function ProductBrandingPage() {
  const features = useMemo(() => [
    "Brand Identity Design",
    "Logo & Visual System",
    "Brand Strategy & Positioning",
    "Brand Guidelines & Style Guides",
    "Packaging Design",
    "Corporate Identity Materials",
    "Brand Refresh & Rebranding",
    "Brand Audit & Research"
  ], [])

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-6">
            <Palette size={48} className="text-orange-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Product Branding</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Product Branding</span>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="w-full h-80 rounded-lg mb-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=830&h=540&fit=crop&crop=center"
                  alt="Product Branding Design"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Service Overview</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Build a powerful brand identity that resonates with your audience and sets you apart from competitors. Our branding team combines strategic thinking with creative execution to craft visual identities that tell your brand's story and drive lasting recognition.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We take a research-led approach — understanding your market, audience, and business goals before designing anything. The result is a cohesive brand system: logo, colour palette, typography, tone of voice, and guidelines that your team can use consistently across every touchpoint.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From startups building their identity from scratch to established businesses ready for a refresh, we've helped over 120 brands across Nigeria and West Africa create visual systems that convert. Our clients report up to 70% increase in brand recall after a rebrand.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Our Process</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Every brand project follows our proven four-phase process: Discover (research & strategy), Define (positioning & messaging), Design (visual identity), and Deploy (guidelines & rollout). This ensures every creative decision is grounded in your business objectives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=403&h=350&fit=crop&crop=center"
                      alt="Brand Design Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=403&h=350&fit=crop&crop=center"
                      alt="Brand Identity Materials"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#001f3f' }}>Services List</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <a key={index} href="/contact" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                      <span className="text-gray-700 text-sm">{feature}</span>
                      <ArrowRight size={16} className="text-orange-500" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#001f3f] rounded-lg p-6 text-center text-white">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Palette size={32} className="text-[#001f3f]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Don't hesitate to get in touch with us.</h3>
                <p className="text-sm text-gray-300 mb-6">
                  A perfect strategy and professional team to make your brand stand out.
                </p>
                <a
                  href="/contact"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full inline-block text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}
