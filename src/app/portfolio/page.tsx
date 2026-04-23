import type { Metadata } from 'next'
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of brand identity, digital marketing, and creative work for businesses across Nigeria and beyond. See what Idariji Concept delivers.',
}

export default function PortfolioPage() {
  const portfolioItems = [
    { title: "Social Media Upgrade", category: "Digital Marketing", image: "/portfolio/trois-ore/Tileri ILeyavengaza (I).jpg", company: "Trois Ore Residence", alt: "Social media design and digital marketing campaign for Trois Ore Residence hotel, Ibadan Nigeria" },
    { title: "Brand Identity", category: "Logo Design", image: "/portfolio/trois-ore/Tileri ILeyavengaza (II).jpg", company: "Trois Ore Residence", alt: "Brand identity and logo design for Trois Ore Residence hospitality brand, Nigeria" },
    { title: "Marketing Strategy", category: "Campaign Design", image: "/portfolio/trois-ore/Tileri TGIF.jpg", company: "Trois Ore Residence", alt: "TGIF marketing campaign design for Trois Ore Residence, Ibadan Nigeria" },
    { title: "Brand Transformation", category: "Rebranding", image: "/portfolio/kklargesse/Hoodies.jpg", company: "KKLargesse", alt: "Brand transformation and rebranding project for KKLargesse events and catering company, UK" },
    { title: "Branded Uniform", category: "Merchandise Design", image: "/portfolio/kklargesse/T-Shirt.jpg", company: "KKLargesse", alt: "Branded uniform and merchandise design for KKLargesse events and catering brand by Idariji Concept Lagos" },
    { title: "Event Merchandise", category: "Brand Materials", image: "/portfolio/kklargesse/Tote Bag.jpg", company: "KKLargesse", alt: "Event merchandise and branded tote bag design for KKLargesse events and catering company" },
    { title: "Brand Identity", category: "Logo & Identity", image: "/portfolio/fila-idan/Banner I.jpg", company: "Fila Idan", alt: "Brand identity and visual identity design for Fila Idan fashion brand, Uyo Nigeria" },
    { title: "Marketing Campaigns", category: "Digital Marketing", image: "/portfolio/fila-idan/Banner 2.jpg", company: "Fila Idan", alt: "Digital marketing and social media campaign design for Fila Idan brand Nigeria" },
    { title: "Brand Materials", category: "Print Design", image: "/portfolio/fila-idan/Banner 3.jpg", company: "Fila Idan", alt: "Print design and brand materials for Fila Idan fashion brand by Idariji Concept Lagos" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">Our Portfolio</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Portfolio</span>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[430/350] relative overflow-hidden">
                  <img src={item.image} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-orange-200">{item.category}</p>
                    <p className="text-xs text-gray-300">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 sm:mt-12 space-x-1 sm:space-x-2">
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded flex items-center justify-center font-medium hover:bg-orange-600 transition-colors text-sm sm:text-base">
              1
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 text-gray-700 rounded flex items-center justify-center font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base">
              2
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 text-gray-700 rounded flex items-center justify-center font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base">
              3
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 text-gray-700 rounded flex items-center justify-center font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base">
              4
            </button>
          </div>
        </div>
      </div>
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}