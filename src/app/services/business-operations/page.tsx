import React from 'react'
import { Users, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Newsletter from '../../../components/Newsletter'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'

export default function BusinessOperationsPage() {
  const features = [
    "Process Optimization & Automation",
    "Organizational Structure Design", 
    "Performance Management Systems",
    "Quality Control Implementation",
    "Resource Allocation Planning",
    "Workflow Documentation",
    "Cost Reduction Strategies",
    "Team Productivity Enhancement"
  ]

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-6">
            <Users size={48} className="text-orange-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Business Operations</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span className="mx-3 text-2xl">›</span>
            <a href="/services" className="hover:text-white transition-colors cursor-pointer">Services</a>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Business Operations</span>
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              <div className="w-full h-80 rounded-lg mb-8 overflow-hidden">
                <img 
                  src="/business-operations/118074.jpg" 
                  alt="Business Operations Overview"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Service Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Service Overview</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Transform your business operations with our comprehensive optimization solutions. We analyze your current processes, identify inefficiencies, and implement strategic improvements that boost productivity by up to 40% while reducing operational costs.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our systematic approach includes workflow mapping, resource allocation optimization, performance management system design, and quality control implementation. We work with businesses of all sizes to create scalable operational frameworks that support sustainable growth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From small startups to established enterprises, we've helped over 200+ businesses streamline their operations, improve team collaboration, and establish robust systems that drive consistent results and long-term success.
                </p>
              </div>
              
              {/* Service Center */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#001f3f' }}>Our Methodology</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We follow a proven 4-phase methodology: Assessment & Analysis, Strategy Development, Implementation & Training, and Monitoring & Optimization. Our certified business analysts work closely with your team to ensure smooth transitions and measurable improvements in operational efficiency.
                </p>
                
                {/* Service Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="/business-operations/2147626523.jpg" 
                      alt="Business Process Optimization"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img 
                      src="/business-operations/2150038844.jpg" 
                      alt="Team Productivity Enhancement"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Services List */}
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
              
              {/* Contact CTA */}
              <div className="bg-[#001f3f] rounded-lg p-6 text-center text-white">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-[#001f3f]" />
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