import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import HomePage from './app/page'
import AboutPage from './app/about/page'
import BlogPage from './app/blog/page'
import BlogPostPage from './app/blog/[id]/page'
import PortfolioPage from './app/portfolio/page'
import ContactPage from './app/contact/page'
import CareersPage from './app/careers/page'
import StartupsPage from './app/startups/page'
import HotelsPage from './app/hotels/page'
import FoodBrandsPage from './app/food-brands/page'
import CorporatePage from './app/corporate/page'
import ServicesPage from './app/services/page'
import ProductBrandingPage from './app/services/product-branding/page'
import SalesMarketingPage from './app/services/sales-marketing/page'
import BusinessOperationsPage from './app/services/business-operations/page'
import DigitalDevelopmentPage from './app/services/digital-development/page'
import HospitalityManagementPage from './app/services/hospitality-management/page'
import PrintingPromotionPage from './app/services/printing-promotion/page'
import GiftMerchandisePage from './app/services/gift-and-merchandise/page'
import TestimonialsPage from './app/testimonials/page'
import FaqPage from './app/faq/page'
import PrivacyPolicyPage from './app/privacy-policy/page'
import TermsPage from './app/terms-of-service/page'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#001f3f' }}>404</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Page not found</p>
      <a href="/" style={{ color: '#FF6B00', fontWeight: 600 }}>Go Home</a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/food-brands" element={<FoodBrandsPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/product-branding" element={<ProductBrandingPage />} />
        <Route path="/services/sales-marketing" element={<SalesMarketingPage />} />
        <Route path="/services/business-operations" element={<BusinessOperationsPage />} />
        <Route path="/services/digital-development" element={<DigitalDevelopmentPage />} />
        <Route path="/services/hospitality-management" element={<HospitalityManagementPage />} />
        <Route path="/services/printing-promotion" element={<PrintingPromotionPage />} />
        <Route path="/services/gift-and-merchandise" element={<GiftMerchandisePage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
