import React from 'react'
import { Gift, ShoppingCart, Star, Check } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import WhatsAppButton from '../../../components/WhatsAppButton'

export default function GiftAndMerchandisePage() {
  type GiftItem = { id: number; name: string; image: string; price: string; rating: number; items: string[] }
  const giftItems: GiftItem[] = [
    {
      id: 1,
      name: "Corporate Gift Set",
      image: "/portfolio/kklargesse/T-Shirt.jpg",
      price: "₦15,000",
      rating: 5,
      items: [
        "Branded T-shirt",
        "Custom notebook",
        "Branded pen",
        "Gift box packaging",
        "Personalized card"
      ]
    },
    {
      id: 2,
      name: "Executive Package",
      image: "/portfolio/kklargesse/Hoodies.jpg", 
      price: "₦25,000",
      rating: 5,
      items: [
        "Premium hoodie",
        "Leather portfolio",
        "Metal pen set",
        "Branded mug",
        "Luxury gift box"
      ]
    },
    {
      id: 3,
      name: "Event Starter Pack",
      image: "/portfolio/kklargesse/Tote Bag.jpg",
      price: "₦8,500",
      rating: 4,
      items: [
        "Custom tote bag",
        "Branded keychain",
        "Stickers pack",
        "Mini notebook",
        "Eco-friendly packaging"
      ]
    },
    {
      id: 4,
      name: "Premium Branding Kit",
      image: "/business-operations/118074.jpg",
      price: "₦35,000",
      rating: 5,
      items: [
        "Branded polo shirt",
        "Executive diary",
        "Premium pen set",
        "Branded water bottle",
        "Custom USB drive",
        "Luxury presentation box"
      ]
    },
    {
      id: 5,
      name: "Team Building Package",
      image: "/business-operations/2147626523.jpg",
      price: "₦12,000",
      rating: 4,
      items: [
        "Team t-shirts (5 pcs)",
        "Branded caps",
        "Water bottles",
        "Team badges",
        "Group photo frame"
      ]
    },
    {
      id: 6,
      name: "Client Appreciation Set",
      image: "/business-operations/2150038844.jpg",
      price: "₦18,000",
      rating: 5,
      items: [
        "Premium shirt",
        "Branded notebook",
        "Pen and pencil set",
        "Custom calendar",
        "Thank you card",
        "Elegant gift wrapping"
      ]
    }
  ]

  const handleCheckout = (item: any) => {
    try {
      const message = `Hi! I'm interested in the ${item.name} (${item.price}). Can you help me customize this package?`
      const whatsappUrl = `https://wa.me/2348109849221?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Checkout error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 mb-6">
            <Gift size={16} className="text-orange-400" />
            <span className="text-sm text-white/90">Custom Corporate Gifts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent block mb-2">
              Gift & Merchandise
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block">
              Solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create lasting impressions with our customizable corporate gifts and branded merchandise. Perfect for events, client appreciation, and team building.
          </p>
          
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Gift & Merchandise</span>
          </div>
        </div>
      </div>
      
      {/* Gift Cards Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Gift Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our curated gift packages or let us create a custom solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftItems.map((item, index) => {
              const cardColors = [
                { bg: 'from-orange-50 to-orange-100', badge: 'bg-orange-500', text: 'text-orange-800', border: 'border-orange-200' },
                { bg: 'from-purple-50 to-purple-100', badge: 'bg-purple-500', text: 'text-purple-800', border: 'border-purple-200' },
                { bg: 'from-blue-50 to-blue-100', badge: 'bg-blue-500', text: 'text-blue-800', border: 'border-blue-200' },
                { bg: 'from-green-50 to-green-100', badge: 'bg-green-500', text: 'text-green-800', border: 'border-green-200' },
                { bg: 'from-pink-50 to-pink-100', badge: 'bg-pink-500', text: 'text-pink-800', border: 'border-pink-200' },
                { bg: 'from-indigo-50 to-indigo-100', badge: 'bg-indigo-500', text: 'text-indigo-800', border: 'border-indigo-200' }
              ]
              const colors = cardColors[index % cardColors.length]
              
              return (
                <div key={item.id} className={`bg-gradient-to-br ${colors.bg} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${colors.border} group hover:-translate-y-2 relative`}>
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${colors.badge} text-white px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                    Gift Set
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 z-10">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}.0</span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden mt-2">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${colors.text} mb-4`}>{item.name}</h3>
                    
                    {/* Items Grid */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {item.items.map((listItem, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className={`w-2 h-2 ${colors.badge} rounded-full flex-shrink-0`} />
                          <span className="font-medium">{listItem}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Price and Button */}
                    <div className="border-t border-white/50 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`text-2xl font-bold ${colors.text}`}>{item.price}</div>
                        <div className="text-xs text-gray-600 bg-white/70 px-2 py-1 rounded-full">
                          Free Delivery
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleCheckout(item)}
                        className={`w-full ${colors.badge} hover:opacity-90 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg`}
                      >
                        <ShoppingCart size={18} />
                        Order Package
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Custom Order CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Need Something Custom?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We can create personalized gift packages tailored to your specific needs and budget.
          </p>
          <button 
            onClick={() => {
              try {
                const message = "Hi! I'd like to discuss a custom gift package for my organization."
                const whatsappUrl = `https://wa.me/2348109849221?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
              } catch (error) {
                console.error('Custom quote error:', error)
              }
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  )
}