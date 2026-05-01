import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { siteConfig } from '../../lib/siteConfig'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative pt-32 pb-20 sm:pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3 text-2xl">›</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-headings:font-bold prose-a:text-orange-500">
            <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Idariji Concept (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact information:</strong> Name, email address, phone number, and company name when you fill out contact forms or request consultations.</li>
              <li><strong>Communication data:</strong> Messages you send us via email, WhatsApp, or our website forms.</li>
              <li><strong>Usage data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
              <li><strong>Newsletter subscriptions:</strong> Email addresses provided for newsletter sign-ups.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide our services</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our legitimate business interests</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, subject to confidentiality agreements. We may also disclose information where required by law.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Object to processing of your information in certain circumstances</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li>Phone: {siteConfig.phones[0]}</li>
              <li>Lagos Office: {siteConfig.addresses.lagos}</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
