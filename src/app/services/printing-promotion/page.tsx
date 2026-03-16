'use client'
import React from 'react'
import { Award, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'

export default function PrintingPromotionPage() {
  const features = [
    "Brand Material Design & Printing",
    "Large-Scale Campaign Materials", 
    "Promotional Product Development",
    "Marketing Collateral Creation",
    "Event & Trade Show Materials",
    "Custom Packaging Solutions",
    "Digital & Offset Printing",
    "Branded Merchandise"
  ]

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-6">
            <Award size={48} className="text-orange-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Printing & Promotion</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Printing & Promotion</span>
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="w-full h-80 rounded-lg mb-8 overflow-hidden">
                <img 
                  src="/portfolio/fila-idan/Banner I.jpg" 
                  alt="Billboard and Banner Design - Fila Idan"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Service Overview</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Bring your brand to life with premium printing and promotional solutions. We create high-quality marketing materials, branded merchandise, and large-scale campaign assets that make lasting impressions and drive brand recognition.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our comprehensive printing services include business cards, brochures, banners, packaging, promotional products, and custom merchandise. We use state-of-the-art printing technology and premium materials to ensure exceptional quality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We've produced over 10 million printed pieces for 500+ clients, helping businesses increase brand visibility by 85% through strategic promotional campaigns and high-impact marketing materials.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Production Excellence</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our production facility features advanced digital and offset printing equipment, ensuring fast turnaround times without compromising quality. We offer eco-friendly printing options and sustainable materials for environmentally conscious brands.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="/portfolio/fila-idan/Banner 2.jpg" 
                      alt="Billboard Campaign Design - Fila Idan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="/portfolio/fila-idan/Banner 3.jpg" 
                      alt="Promotional Banner Materials - Fila Idan"
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
                  <Award size={32} className="text-[#001f3f]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Don't hesitate to get in touch with us.</h3>
                <p className="text-sm text-gray-300 mb-6">
                  A perfect strategy and professional team to make your business grow.
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