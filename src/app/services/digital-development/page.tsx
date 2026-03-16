'use client'
import React from 'react'
import { Globe, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'

export default function DigitalDevelopmentPage() {
  const features = [
    "Website Design & Development",
    "Mobile App Development", 
    "E-commerce Solutions",
    "Custom Software Development",
    "UI/UX Design",
    "Digital Platform Integration",
    "API Development & Integration",
    "Cloud Solutions & Hosting"
  ]

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-6">
            <Globe size={48} className="text-orange-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Digital Development</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Digital Development</span>
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="w-full h-80 rounded-lg mb-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=830&h=540&fit=crop&crop=center" 
                  alt="Web Development and Digital Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Service Overview</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Transform your digital presence with cutting-edge web and mobile solutions. We create responsive websites, mobile applications, and custom software that enhance user experience, streamline business processes, and drive digital growth.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our development process includes user research, UI/UX design, frontend and backend development, testing, deployment, and ongoing maintenance. We use modern technologies and frameworks to ensure scalable, secure, and high-performance digital solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We've delivered 300+ digital projects with 99.9% uptime and helped businesses increase online conversions by 180%. Our solutions serve over 1 million users globally and have generated significant ROI for our clients.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Development Approach</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We follow Agile development methodology with continuous integration and deployment. Our tech stack includes React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We prioritize security, performance, and scalability in every project.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=403&h=350&fit=crop&crop=center" 
                      alt="Mobile App Development Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=403&h=350&fit=crop&crop=center" 
                      alt="UI/UX Design and Development"
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
                  <Globe size={32} className="text-[#001f3f]" />
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