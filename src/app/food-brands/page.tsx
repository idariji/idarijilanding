"use client"
import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle,
  Package, Instagram, ShoppingBag, AlertTriangle,
  Star, ChevronDown, XCircle
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BookCTA from "@/components/BookCTA"
import { siteConfig } from "@/lib/siteConfig"

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(150deg, #1a0602 0%, #0d0200 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,71,42,0.2) 0%, transparent 65%)" }} />
      <div className="absolute -left-16 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,71,42,0.08) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border" style={{ color: "#E8472A", borderColor: "rgba(232,71,42,0.3)", background: "rgba(232,71,42,0.1)" }}>
              Food &amp; Beverage
            </span>
            <h1 className="font-display font-bold text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Your product deserves to<br className="hidden sm:block" /> stand out on the shelf —<br />
              <span className="font-display italic" style={{ color: "#E8472A" }}>and on Chowdeck.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Brand identity, packaging design, and delivery-app optimisation for Nigerian food, beverage, and snack brands. NAFDAC-compliant, print-ready, shelf-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookCTA
                className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-7 py-4 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #E8472A, #c03520)", boxShadow: "0 8px 32px rgba(232,71,42,0.35)" }}
              >
                Book a Brand &amp; Packaging Audit — ₦150,000
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </BookCTA>
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2.5 text-white/70 hover:text-white font-semibold text-sm rounded-full px-7 py-4 border border-white/15 hover:border-white/30 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                See Packaging Work
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-1.5 text-white/20">
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── Problems ─────────────────────────────────────────────────────────────
const problems = [
  { icon: Package, title: "Your packaging blends in", body: "Imported brands win the shelf because their packaging commands attention. Yours doesn't. Customers walk past — even when your product is better." },
  { icon: Instagram, title: "Your Instagram is inconsistent", body: "A weak, inconsistent feed means weak conversion. Followers don't trust what they can't predict. No aesthetic, no sales." },
  { icon: ShoppingBag, title: "You're invisible on delivery apps", body: "Wrong product photos, no promo cadence, poor menu copy — on Chowdeck and GoodFood you're competing on price alone because your brand isn't doing the work." },
  { icon: AlertTriangle, title: "Your brand can't scale", body: "No brand guidelines. No colour system. Every designer you hire takes the brand in a different direction. You can't franchise what you can't standardise." },
]

function ProblemsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#E8472A" }}>The Problem</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            What's holding your food brand back
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(232,71,42,0.07)" }}>
                  <p.icon size={20} style={{ color: "#E8472A" }} />
                </div>
                <h3 className="font-display font-semibold text-[#0D0D0D] text-lg mb-2.5">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Packages ─────────────────────────────────────────────────────────────
const packages = [
  {
    tier: "Tier 1",
    name: "Brand & Packaging Audit",
    price: "₦150,000",
    timeline: "5 working days",
    cta: "Book the Audit",
    ctaStyle: "primary",
    bullets: [
      "Shelf, Instagram & delivery app review",
      "20-page report with specific recommendations",
      "Competitor packaging analysis",
      "Priority action list for quick wins",
    ],
    note: "Know exactly what's holding your packaging back before redesigning.",
  },
  {
    tier: "Tier 2",
    name: "Packaging Sprint",
    price: "₦1M – ₦2.5M",
    timeline: "4–6 weeks",
    cta: "Book a Scoping Call",
    ctaStyle: "secondary",
    bullets: [
      "Full packaging system — primary, secondary, labels",
      "NAFDAC-compliant layout and typography",
      "Print-ready files (CMYK, bleed, crop marks)",
      "Packaging mockups for presentations",
      "Printer brief and production notes",
    ],
    note: "For brands ready to redesign and relaunch their product.",
  },
  {
    tier: "Tier 3",
    name: "Food Brand Ignition",
    price: "₦2M – ₦3.5M",
    timeline: "6 weeks",
    cta: "Book a Scoping Call",
    ctaStyle: "secondary",
    bullets: [
      "Complete brand identity system",
      "Full packaging design suite",
      "Delivery app profile optimisation (Chowdeck, GoodFood)",
      "30-day content launch plan",
      "Brand guidelines document",
      "Social media templates",
    ],
    note: "Full brand launch for new or relaunching food products.",
  },
]

function PackagesSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0602 0%, #0d0200 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#E8472A" }}>The Solution</span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            The Food Brand Pack
          </h2>
          <p className="text-white/45 mt-3 max-w-xl text-sm sm:text-base">Start with the audit. See what's broken. Redesign with confidence.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-7 sm:p-8 h-full flex flex-col border"
                style={i === 0
                  ? { background: "rgba(232,71,42,0.1)", borderColor: "rgba(232,71,42,0.35)", boxShadow: "0 0 40px rgba(232,71,42,0.1)" }
                  : { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }
                }
              >
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "#E8472A" }}>{pkg.tier}</span>
                  <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">{pkg.name}</h3>
                  <div className="font-display font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>{pkg.price}</div>
                  <p className="text-white/35 text-xs mt-1">{pkg.timeline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#E8472A" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="text-white/30 text-xs mb-6 italic">{pkg.note}</p>

                <BookCTA
                  className="w-full text-center font-bold text-sm rounded-full py-3.5 transition-all duration-300 block"
                  style={pkg.ctaStyle === "primary"
                    ? { background: "linear-gradient(135deg, #E8472A, #c03520)", color: "white", boxShadow: "0 8px 24px rgba(232,71,42,0.3)" }
                    : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.12)" }
                  }
                >
                  {pkg.cta}
                </BookCTA>
              </div>
            </Reveal>
          ))}
        </div>

        {/* NAFDAC callout */}
        <Reveal delay={0.3}>
          <div className="mt-8 px-6 py-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center gap-3" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
            <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5 sm:mt-0" style={{ color: "#E8472A" }} />
            <p className="text-white/55 text-sm">
              <span className="text-white font-semibold">NAFDAC-compliant packaging.</span>{" "}
              We design packaging that meets NAFDAC regulatory requirements. All files ship print-ready to your preferred printer or ours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Case Studies ─────────────────────────────────────────────────────────
const caseStudies = [
  {
    client: "Nikkey's Juice",
    location: "Ibadan, Nigeria",
    tag: "Juice & Beverages",
    services: ["Printing & Branding", "Packaging Design", "Shelf Visibility"],
    summary: "Nikkey's Juice needed packaging that could compete on Nigerian grocery shelves and attract modern health-conscious buyers. We redesigned their label system and print materials to command attention.",
    results: ["Product packaging redesigned for shelf impact", "Print materials elevated to match brand premium", "Consistent brand identity across all formats"],
    image: "/portfolio/trois-ore/Tileri ILeyavengaza (II).jpg",
  },
  {
    client: "KKLargesse",
    location: "Colchester, UK",
    tag: "Catering & Events",
    services: ["Brand Identity", "Branded Merchandise", "Event Materials"],
    summary: "A UK-based Nigerian catering brand needed a refined identity that could travel. We built a complete brand system — uniforms, merchandise, event materials — that gave KKLargesse a premium, consistent look.",
    results: ["Complete brand identity system delivered", "Branded uniforms and merchandise produced", "Consistent visual identity across events"],
    image: "/portfolio/kklargesse/Hoodies.jpg",
  },
  {
    client: "Foodlolo",
    location: "Nigeria",
    tag: "Food Platform",
    services: ["Brand Identity", "Logo Design", "Visual System"],
    summary: "Foodlolo needed a brand identity that could scale with a growing food-tech platform. We built a clean, scalable visual identity ready for digital and physical applications.",
    results: ["Complete brand identity built from scratch", "Scalable logo system across all sizes", "Design system ready for product growth"],
    image: "/logos/foodlolo.png",
  },
]

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#E8472A" }}>Our Work</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Food brands we've built
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img src={cs.image} alt={cs.client} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,6,2,0.65) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white border border-white/20" style={{ background: "rgba(232,71,42,0.7)" }}>{cs.tag}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-0.5">{cs.client}</h3>
                    <p className="text-gray-400 text-xs">{cs.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.services.map((s, si) => (
                      <span key={si} className="px-2 py-0.5 rounded-full text-[11px] font-medium text-gray-500 bg-gray-100">{s}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cs.summary}</p>
                  <div className="space-y-1.5 mb-5">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="flex items-center gap-2 text-sm text-[#0D0D0D]">
                        <CheckCircle2 size={12} className="flex-shrink-0" style={{ color: "#E8472A" }} />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Lead Magnet ──────────────────────────────────────────────────────────
function LeadMagnetSection() {
  const [form, setForm] = useState({ name: "", brand: "", email: "" })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Food Brand Checklist Download — ${form.brand || form.name}`,
          from_name: form.name,
          email: form.email,
          message: `Brand: ${form.brand}`,
        }),
      })
      const result = await res.json()
      if (result.success) setStatus("success")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#E8472A" }}>Free Resource</span>
            <h2 className="font-display font-bold text-[#0D0D0D] leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Free Food Brand<br />Packaging Checklist
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              20 things your packaging must get right before it hits a shelf, a delivery app, or an Instagram post. Download free.
            </p>
            <div className="flex flex-col gap-3">
              {["Shelf-impact colour and typography check", "NAFDAC required label elements", "Delivery app photo & copy audit", "Instagram packaging presentation guide", "Print file spec checklist"].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-[#0D0D0D]">
                  <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: "#E8472A" }} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100" style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}>
              {status === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={40} className="mx-auto mb-4" style={{ color: "#E8472A" }} />
                  <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-2">Checklist sent!</h3>
                  <p className="text-gray-500 text-sm">Check your email. We'll follow up shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-5">Get the free checklist</h3>
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "Tolu Adeyemi" },
                    { label: "Brand / Product Name", key: "brand", type: "text", placeholder: "Nikkey's Juice" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "you@yourbrand.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-[#0D0D0D] mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0D0D0D] placeholder:text-gray-300 focus:outline-none focus:border-[#E8472A] transition-colors"
                      />
                    </div>
                  ))}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <XCircle size={14} /> Something went wrong. Please try again.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full font-bold text-sm text-white rounded-full py-3.5 transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #E8472A, #c03520)", boxShadow: "0 8px 24px rgba(232,71,42,0.25)" }}
                  >
                    Send Me the Checklist
                  </button>
                  <p className="text-gray-400 text-xs text-center">No spam. Just the checklist and a follow-up note.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────
const testimonials = [
  { name: "Nikkey's Juice", location: "Ibadan, Nigeria", quote: "Our product packaging and print materials have never looked this good. Idariji Concept brought our vision to life with quality designs that made Nikkey's Juice stand out on the shelves." },
  { name: "KKLargesse", location: "Colchester, UK", quote: "Idariji Concept completely transformed how we present our brand. Their creative direction gave KKLargesse a refined identity that truly resonates with our audience." },
]

function TrustSection() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "linear-gradient(135deg, #1a0602 0%, #0d0200 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#E8472A" }}>What Founders Say</span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Trusted by food brands
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl p-7 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => <Star key={si} size={13} fill="#E8472A" style={{ color: "#E8472A" }} />)}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/35 text-xs">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: "#E8472A" }}>Ready to stand out?</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Make your product jump<br />off the shelf.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Start with a ₦150,000 Brand &amp; Packaging Audit. 5 working days. 20-page report. You'll know exactly what to fix before spending more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookCTA
              className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-8 py-4 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #E8472A, #c03520)", boxShadow: "0 8px 32px rgba(232,71,42,0.3)" }}
            >
              Book the Audit
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </BookCTA>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 text-[#0D0D0D] font-bold text-sm rounded-full px-8 py-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white"
            >
              <MessageCircle size={15} className="text-green-500 flex-shrink-0" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function FoodBrandsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <PackagesSection />
      <CaseStudiesSection />
      <LeadMagnetSection />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
