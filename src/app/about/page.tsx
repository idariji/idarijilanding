'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">About Us</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">About us</span>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#001F3F]">Our Story</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  At Idariji Concept, we're driven by one purpose: turning ideas into impact. We saw how many businesses struggled to connect vision with visibility, so we built a team that understands both the heart of a brand and the science of growth.
                </p>
                <p>
                  We don't just design logos or campaigns, we build identities that inspire trust and strategies that deliver real results. Today, we partner with startups, SMEs, and established brands to create stories that speak, campaigns that convert, and systems that scale.
                </p>
                <p>
                  Our journey is an ongoing one, with one brand, one idea, and one breakthrough at a time.
                </p>
              </div>
              <div className="mt-8">
                <a href="/contact" className="group relative overflow-hidden bg-[#FF6B00] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e05f00] transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 inline-flex items-center gap-2">
                  <span className="relative z-10">Work with us</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#001F3F]">Our Process</h2>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2 text-[#001F3F]">Discover & Define</h3>
                      <p className="text-gray-600 text-sm">
                        We begin by understanding your goals, audience, and challenges. Then, we shape clear strategies that connect vision with direction — setting the stage for meaningful results.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-orange-300 to-transparent"></div>
                </div>
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2 text-[#001F3F]">Design & Develop</h3>
                      <p className="text-gray-600 text-sm">
                        Our creative team brings strategy to life through purposeful design, compelling storytelling, and seamless execution — ensuring your brand looks good and performs even better.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-orange-300 to-transparent"></div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#001F3F]">Deliver & Grow</h3>
                    <p className="text-gray-600 text-sm">
                      We launch, measure, and refine. Every project is tracked for performance and optimized for growth because success, to us, is a journey — not a destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#001F3F]">Our Promise</h2>
            <div className="max-w-4xl mx-auto">
              <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 text-gray-700">
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>To be your trusted partner in progress.</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>To help your brand grow with meaning, not just marketing.</span>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>To turn your ideas into impact.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#001F3F]">Meet Our Innovative Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {[
                { name: "Damilare Adebisi", role: "Head of Operations", image: "/team-member-1.png" },
                { name: "Nwaka Daniel Damilola", role: "Creative Lead", image: "/team-member-2.png" },
                { name: "Abdulquadry Labibat Damilola", role: "Head of Customer Service & Acquisition", image: "/Team Member 3.jpeg" },
                { name: "Olayemi Habeeb Olawale", role: "Head of Digital Products", image: "/Team Member 4.jpeg" },
                { name: "Suebat Aderibigbe", role: "Head of Admin & Communications", image: "/Team Member 5.jpeg" }
              ].map((member, index) => (
                <div key={index} className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 ${member.image ? 'bg-orange-500' : 'bg-[#003366]'}`}>
                  <div className="w-full h-[340px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-gray-500 text-6xl group-hover:text-orange-400 transition-colors duration-300">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className={`text-xl font-semibold mb-2 ${member.image ? 'text-white' : 'text-white'}`}>{member.name}</h3>
                    <p className={member.image ? 'text-white/80' : 'text-orange-200'}>{member.role}</p>
                  </div>
                </div>
              ))}
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