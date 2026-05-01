import React from 'react'
import { Star, Quote } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'

const testimonials = [
  {
    name: "Nikkey's Juice",
    role: "Ibadan, Nigeria",
    service: "Printing & Promotion",
    content: "Our product packaging and print materials have never looked this good. Idariji Concept brought our vision to life with quality designs and professional printing that made Nikkey's Juice stand out on the shelves.",
    rating: 5,
  },
  {
    name: "KKLargesse",
    role: "Colchester, United Kingdom",
    service: "Product Branding",
    content: "Idariji Concept completely transformed how we present our brand. Their creative direction gave KKLargesse a refined identity that resonates with our audience. The process was smooth and the results exceeded expectations.",
    rating: 5,
  },
  {
    name: "Fila Idan",
    role: "Uyo, Nigeria",
    service: "Brand Identity",
    content: "The team at Idariji Concept helped us define who we are as a brand. Today, Fila Idan has a bold, consistent identity that perfectly captures our essence. Every piece they created reflected our values.",
    rating: 5,
  },
  {
    name: "NAF Conference Centre",
    role: "Abuja, Nigeria",
    service: "Hospitality Marketing",
    content: "Idariji Concept elevated our hotel's visibility with a smart marketing approach that truly drives bookings. Their hospitality marketing expertise has positioned us as a top choice for guests. We've seen a measurable increase in enquiries.",
    rating: 5,
  },
  {
    name: "Trois Ore Residence",
    role: "Ibadan, Nigeria",
    service: "Social Media & Design",
    content: "Our social media presence got a complete upgrade. Idariji Concept's creative designs and strategy now make Trois Ore Residence stand out beautifully online. Our engagement has grown significantly since we started working together.",
    rating: 5,
  },
  {
    name: "Netis Group",
    role: "Lagos, Nigeria",
    service: "Print Design",
    content: "From design to delivery, Idariji Concept handled our print materials with precision and style. Their attention to detail made Netis Group's brand look truly premium. We would recommend them without hesitation.",
    rating: 5,
  },
  {
    name: "Strategy House",
    role: "Lagos, Nigeria",
    service: "Business Operations",
    content: "Working with Idariji Concept to streamline our business operations was one of the best decisions we made. They brought clarity and structure to our processes, and the impact on our efficiency has been significant.",
    rating: 5,
  },
  {
    name: "Recycledge",
    role: "Nigeria",
    service: "Digital Marketing",
    content: "Idariji Concept helped us craft a digital marketing strategy that truly communicates our sustainability mission. They understand brand storytelling and translated our values into campaigns that connect with our audience.",
    rating: 5,
  },
  {
    name: "Skill NG",
    role: "Nigeria",
    service: "Product Branding",
    content: "The branding work Idariji Concept did for us gave Skill NG a professional, credible image that has opened doors we didn't expect. Our partners and users now take us more seriously as a platform.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">Client Testimonials</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Don't just take our word for it. Here's what businesses across Nigeria and beyond say about working with Idariji Concept.
          </p>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Testimonials</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-white/90 text-sm sm:text-base">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-white/90 text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">6+</div>
              <div className="text-white/90 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="text-orange-200 mb-3" size={32} />
                <p className="text-gray-700 italic mb-6 flex-1 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}
