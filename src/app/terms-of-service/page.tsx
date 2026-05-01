import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { siteConfig } from '../../lib/siteConfig'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Terms of Service</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Terms of Service</span>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-headings:font-bold prose-a:text-orange-500">
            <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Idariji Concept website and engaging our services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>

            <h2>2. Services</h2>
            <p>
              Idariji Concept provides branding, marketing, digital development, business operations, hospitality management, printing, and promotional services. The specific scope, timeline, and deliverables of each engagement are defined in individual service agreements or proposals.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>Clients engaging Idariji Concept's services agree to:</p>
            <ul>
              <li>Provide accurate, complete, and timely information required for service delivery</li>
              <li>Respond to requests for feedback and approvals within agreed timeframes</li>
              <li>Ensure all materials provided to us do not infringe third-party rights</li>
              <li>Make payments according to agreed terms</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon full payment of all fees, clients receive ownership of the final deliverables created specifically for them. Idariji Concept retains ownership of all pre-existing intellectual property, methodologies, tools, and general know-how used in delivering services. We reserve the right to display completed work in our portfolio unless otherwise agreed in writing.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. This obligation survives the termination of any service agreement.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              Payment terms are defined in individual service agreements. Generally, a deposit is required before work commences, with the balance due upon project completion. Overdue payments may result in work being paused until payment is received.
            </p>

            <h2>7. Revisions and Scope Changes</h2>
            <p>
              Each project includes a defined number of revision rounds as specified in the service agreement. Requests beyond this scope or significant changes to project requirements will be assessed and may incur additional fees.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              Idariji Concept's liability for any claim arising from our services is limited to the fees paid for the specific service in question. We are not liable for indirect, consequential, or incidental damages.
            </p>

            <h2>9. Termination</h2>
            <p>
              Either party may terminate a service agreement with written notice as specified in the agreement. Fees for work completed up to the termination date remain payable. Deposits are non-refundable unless specified in the service agreement.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be subject to the exclusive jurisdiction of Nigerian courts.
            </p>

            <h2>11. Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <ul>
              <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li>Phone: {siteConfig.phones[0]}</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
