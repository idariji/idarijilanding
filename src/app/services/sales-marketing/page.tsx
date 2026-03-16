'use client'
import React, { useMemo } from 'react'
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'

export default function SalesMarketingPage() {
  const features = useMemo(() => [
    "Digital Marketing Campaigns",
    "Social Media Management", 
    "Content Marketing Strategy",
    "Lead Generation Systems",
    "Sales Funnel Optimization",
    "Performance Analytics & Reporting",
    "Email Marketing Automation",
    "Conversion Rate Optimization"
  ], [])

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-6">
            <TrendingUp size={48} className="text-orange-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Sales & Marketing</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Sales & Marketing</span>
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="w-full h-80 rounded-lg mb-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=830&h=540&fit=crop&crop=center" 
                  alt="Sales and Marketing Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Service Overview</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Drive revenue growth with our data-driven sales and marketing strategies. We create integrated campaigns that generate qualified leads, nurture prospects, and convert customers while maximizing your marketing ROI through strategic channel optimization.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our comprehensive approach includes market analysis, customer journey mapping, multi-channel campaign development, sales funnel optimization, and performance tracking. We leverage both digital and traditional marketing channels to reach your target audience effectively.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our clients typically see a 3x increase in qualified leads and 250% improvement in conversion rates within the first 6 months. We've generated over ₦2.5 billion in revenue for our clients through strategic marketing campaigns and sales optimization.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Campaign Strategy</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We develop comprehensive marketing strategies using the AIDA framework: Awareness, Interest, Desire, and Action. Our campaigns integrate SEO, social media, content marketing, email automation, and paid advertising to create a cohesive customer acquisition system.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1553028826-f4804151e596?w=403&h=350&fit=crop&crop=center" 
                      alt="Digital Marketing Campaign Strategy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=403&h=350&fit=crop&crop=center" 
                      alt="Sales Performance Analytics"
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
                  <TrendingUp size={32} className="text-[#001f3f]" />
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