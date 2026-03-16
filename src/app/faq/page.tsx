'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import { siteConfig } from '../../lib/siteConfig'

const faqs = [
  {
    category: "Working With Us",
    questions: [
      {
        question: "How do I get started with Idariji Concept?",
        answer: "The easiest way is to book a free consultation through our website or WhatsApp us directly. We'll have a discovery call to understand your goals, challenges, and vision — then propose the right services and approach for your needs.",
      },
      {
        question: "What types of businesses do you work with?",
        answer: "We work with startups, SMEs, and established brands across various industries. Our clients range from food and beverage brands to hospitality companies, tech startups, professional service firms, and more. If you're looking to build or strengthen your brand, we can help.",
      },
      {
        question: "Where are you based? Can you work with clients outside Lagos/Ibadan?",
        answer: "We're headquartered in Lagos and Ibadan, but we work with clients across Nigeria and internationally. Most of our branding, digital, and marketing work can be done fully remotely. For print and promotional projects, we coordinate delivery across Nigeria.",
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on scope. A logo and brand identity project typically takes 2–4 weeks. A full website development project may take 4–8 weeks. Marketing campaigns can run on a monthly retainer basis. We'll give you a detailed timeline estimate in our proposal.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer a comprehensive suite of business solutions: Brand Identity & Product Branding, Sales & Digital Marketing, Business Operations Optimization, Digital Product Development (websites, apps, e-commerce), Hospitality Management & Marketing, Printing & Promotion, and Gift & Merchandise. Visit our Services page for full details.",
      },
      {
        question: "How are your services priced?",
        answer: "Our pricing is project-based and customized to each client's specific needs and scope. We offer different service packages to accommodate various budgets. During your free consultation, we'll understand your requirements and provide a detailed proposal with transparent pricing.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes. Our standard payment structure typically involves a deposit before work begins, with the balance due at project completion. For larger projects, we can discuss milestone-based payment schedules. Contact us to discuss what works for your situation.",
      },
      {
        question: "Can I engage just one service, or do I need a package?",
        answer: "Absolutely — you can engage us for a single service. Many clients start with a specific need (like a logo redesign or a social media campaign) and expand the relationship over time. We're flexible and tailor our engagement to your actual needs.",
      },
    ],
  },
  {
    category: "Branding & Design",
    questions: [
      {
        question: "What's included in a brand identity package?",
        answer: "A complete brand identity typically includes: logo design (multiple concepts with revisions), color palette selection, typography system, brand guidelines document, and application mockups. We can also include business card design, letterhead, social media templates, and other brand collateral depending on your package.",
      },
      {
        question: "How many revisions do I get?",
        answer: "The number of revision rounds is defined in your service agreement, but we're committed to getting it right. Typically, branding projects include 2–3 rounds of revisions per deliverable. Our goal is your satisfaction, and we work collaboratively throughout the process.",
      },
      {
        question: "Do you own the designs you create for me?",
        answer: "Upon full payment, you own the final deliverables created for your project. You'll receive all final files in the formats you need. We retain the right to display the work in our portfolio unless you specifically request confidentiality in your agreement.",
      },
    ],
  },
  {
    category: "Digital & Marketing",
    questions: [
      {
        question: "Do you manage social media accounts?",
        answer: "Yes, social media management is part of our Sales & Marketing services. We create content calendars, design posts, write captions, schedule and publish content, and report on performance. We can manage one platform or multiple, depending on your needs.",
      },
      {
        question: "What digital marketing services do you offer?",
        answer: "Our digital marketing services include social media management, content creation, email marketing, paid advertising (Meta Ads, Google Ads), search engine optimization (SEO), and digital strategy consulting. We take a data-driven approach to ensure your budget is delivering measurable results.",
      },
      {
        question: "Can you build an e-commerce website for my business?",
        answer: "Yes. Our digital development team builds custom websites, including full e-commerce solutions. Whether you need a simple product showcase or a full online store with payment integration, we can build it. We also offer ongoing maintenance and support.",
      },
    ],
  },
  {
    category: "Print & Merchandise",
    questions: [
      {
        question: "What print services do you offer?",
        answer: "We offer a full range of print services: business cards, flyers, brochures, banners, roll-up stands, branded packaging, event materials, uniforms, and large-format printing. We handle both design and production.",
      },
      {
        question: "Can I order branded merchandise for my company?",
        answer: "Absolutely. We offer branded merchandise including t-shirts, hoodies, tote bags, notebooks, pens, mugs, and more. We also offer curated corporate gift packages perfect for client appreciation, events, or team recognition. Visit our Gift & Merchandise page to see our packages.",
      },
      {
        question: "Do you offer delivery for print and merchandise orders?",
        answer: "Yes, we coordinate delivery across Nigeria. Delivery timelines and costs depend on the order volume and your location. We'll provide full details in your project quotation.",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="flex-shrink-0 text-orange-500" />
        ) : (
          <ChevronDown size={20} className="flex-shrink-0 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-white border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppButton />
      <Header />

      {/* Hero */}
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Everything you need to know about working with Idariji Concept.
          </p>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">FAQ</span>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#001F3F]">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((item, qIndex) => (
                  <FAQItem key={qIndex} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="mt-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Reach out directly and we'll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#001f3f] hover:bg-[#003366] text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                WhatsApp Us
              </a>
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
