import React from 'react'
import Link from 'next/link'
import { ArrowRight, Briefcase, Heart, Users, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import { siteConfig } from '../../lib/siteConfig'

export const metadata: Metadata = {
  title: 'Careers — Idariji Concept',
  description: 'Join the Idariji Concept team. We\'re looking for talented creatives, strategists, and builders who want to make a real impact.',
}

const values = [
  {
    icon: Heart,
    title: "Passion-Driven Work",
    description: "We do our best work when we care deeply about the outcome. Every project is an opportunity to create something meaningful.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "We believe great ideas come from great teams. We work together, challenge each other, and celebrate wins as one.",
  },
  {
    icon: Zap,
    title: "Continuous Growth",
    description: "We invest in our people. Expect to learn, grow, and expand your skills on every engagement.",
  },
  {
    icon: Briefcase,
    title: "Real Impact",
    description: "Our work directly shapes how businesses are perceived and how they grow. You'll see the results of your work in the real world.",
  },
]

const openings = [
  {
    title: "Brand Designer",
    type: "Full-time",
    location: "Lagos / Ibadan",
    description: "We're looking for a talented brand designer to help create visual identities for our clients. You'll work on logo design, brand guidelines, and marketing materials.",
    requirements: ["3+ years of branding and graphic design experience", "Strong portfolio of brand identity work", "Proficiency in Adobe Creative Suite", "Understanding of brand strategy"],
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Lagos / Remote",
    description: "Join our marketing team to develop and execute digital campaigns for our clients across social media, email, and paid channels.",
    requirements: ["2+ years of digital marketing experience", "Proven track record managing social media and ad campaigns", "Analytical mindset with experience interpreting marketing data", "Excellent writing and communication skills"],
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "Lagos",
    description: "Help us grow our client base by identifying opportunities, building relationships, and presenting our services to prospective clients.",
    requirements: ["Experience in B2B sales or business development", "Strong network within Nigerian business community", "Excellent presentation and communication skills", "Self-motivated and results-oriented"],
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Help us build brands, drive growth, and deliver results for businesses across Nigeria and beyond.
          </p>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Careers</span>
          </div>
        </div>
      </div>

      {/* Why work with us */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#001F3F]">Why Work at Idariji Concept?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're a team of creative strategists and problem-solvers passionate about building brands that make a real difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#001F3F]">Open Positions</h2>
            <p className="text-gray-600 text-lg">We're growing and looking for great people to join us.</p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 text-sm text-orange-700 bg-orange-100 px-3 py-1 rounded-full font-medium">
                        <Briefcase size={14} /> {job.type}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Application: ${encodeURIComponent(job.title)}&body=${encodeURIComponent(`Hi,\n\nI'd like to apply for the ${job.title} position at Idariji Concept.\n\n[Please attach your CV and portfolio]\n\nBest regards,`)}`}
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05f00] text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm"
                  >
                    Apply Now <ArrowRight size={16} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Open application */}
          <div className="mt-12 bg-gradient-to-br from-[#001f3f] to-[#003366] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Don't see a fit?</h3>
            <p className="text-white/80 mb-6">
              We're always open to hearing from talented people. Send us your CV and tell us how you'd contribute to Idariji Concept.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Open Application&body=${encodeURIComponent('Hi,\n\nI\'d like to be considered for future opportunities at Idariji Concept.\n\n[Tell us about yourself and attach your CV]\n\nBest regards,')}`}
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05f00] text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Send Open Application <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}
