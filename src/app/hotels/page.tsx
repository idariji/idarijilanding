"use client"
import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle,
  TrendingDown, Camera, Calendar, Star, FileText, Phone,
  ChevronDown, XCircle
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
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(150deg, #1a0e06 0%, #0d0802 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,122,58,0.18) 0%, transparent 65%)" }} />
      <div className="absolute -left-16 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,122,58,0.08) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border" style={{ color: "#C97A3A", borderColor: "rgba(201,122,58,0.3)", background: "rgba(201,122,58,0.1)" }}>
              Hospitality
            </span>
            <h1 className="font-display font-bold text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Nigerian hotels lose 60–80%<br className="hidden sm:block" /> of direct bookings to OTAs.<br />
              <span className="font-display italic" style={{ color: "#C97A3A" }}>We fix that.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Brand strategy, direct-booking websites, and marketing engines built for Nigerian boutique hotels, serviced apartments, and event centres. Stop paying 15–20% commission on every room.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookCTA
                className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-7 py-4 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #C97A3A, #a85e27)", boxShadow: "0 8px 32px rgba(201,122,58,0.35)" }}
              >
                Book a Hotel Visibility Audit — ₦200,000
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </BookCTA>
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2.5 text-white/70 hover:text-white font-semibold text-sm rounded-full px-7 py-4 border border-white/15 hover:border-white/30 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                See Hotel Case Studies
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
  { icon: TrendingDown, title: "Your website doesn't convert", body: "OTAs take 15–20% commission on every booking. Your own site probably brings in less than 10% of your rooms — that's money leaving every single night." },
  { icon: Camera, title: "Your Instagram looks like WhatsApp status", body: "Hotel Instagrams that don't sell rooms are wasted reach. Inconsistent posts, no story arc, no call-to-action — guests scroll past." },
  { icon: Calendar, title: "Your weekday occupancy is 30%", body: "Weekends fill themselves. Weekdays don't. Without a corporate sales strategy and mid-week marketing, you're leaving rooms empty." },
  { icon: Star, title: "Your reviews run your brand", body: "Unmanaged reviews on Google, TripAdvisor, and Booking.com shape perception more than your logo. One bad review without response kills conversions." },
]

function ProblemsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-[#C97A3A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">The Problem</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            What's holding your hotel back
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(201,122,58,0.08)" }}>
                  <p.icon size={20} style={{ color: "#C97A3A" }} />
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
    name: "Hotel Visibility Audit",
    price: "₦200,000",
    timeline: "7 working days",
    cta: "Pay Now",
    ctaStyle: "primary",
    bullets: [
      "25-page report: brand, website, OTA listings, Instagram, reviews",
      "Direct-booking gap analysis",
      "1-hour audit readout call with your team",
      "Prioritised 90-day action plan",
    ],
    note: "Best starting point. Know exactly what to fix before spending more.",
  },
  {
    tier: "Tier 2",
    name: "Rebrand & Relaunch",
    price: "₦2.5M – ₦4M",
    timeline: "8 weeks",
    cta: "Book a Scoping Call",
    ctaStyle: "secondary",
    bullets: [
      "Brand refresh — logo, colours, typography, voice",
      "Direct-booking website (Next.js or WordPress)",
      "Room & property photography direction",
      "60-day content runway (posts, captions, strategy)",
      "Google Business profile overhaul",
    ],
    note: "For hotels ready to look premium and own their bookings.",
  },
  {
    tier: "Tier 3",
    name: "Hotel Marketing Engine",
    price: "₦750K – ₦1.8M / month",
    timeline: "6-month minimum",
    cta: "Book a Scoping Call",
    ctaStyle: "secondary",
    bullets: [
      "3 social posts per week (designed + captioned)",
      "Google Ads management",
      "Review management across all platforms",
      "Monthly corporate sales deck refresh",
      "Email nurture sequences for past guests",
      "Monthly performance report",
    ],
    note: "Ongoing growth. For hotels serious about filling rooms year-round.",
  },
]

function PackagesSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0e06 0%, #0d0802 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#C97A3A" }}>The Solution</span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            The Hospitality Growth Pack
          </h2>
          <p className="text-white/45 mt-3 max-w-xl text-sm sm:text-base">Start with the audit. See where you're losing. Fix it fast or let us run the engine for you.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-7 sm:p-8 h-full flex flex-col border"
                style={i === 0
                  ? { background: "rgba(201,122,58,0.12)", borderColor: "rgba(201,122,58,0.4)", boxShadow: "0 0 40px rgba(201,122,58,0.12)" }
                  : { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }
                }
              >
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "#C97A3A" }}>{pkg.tier}</span>
                  <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">{pkg.name}</h3>
                  <div className="font-display font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>{pkg.price}</div>
                  <p className="text-white/35 text-xs mt-1">{pkg.timeline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#C97A3A" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="text-white/30 text-xs mb-6 italic">{pkg.note}</p>

                <BookCTA
                  className="w-full text-center font-bold text-sm rounded-full py-3.5 transition-all duration-300 block"
                  style={pkg.ctaStyle === "primary"
                    ? { background: "linear-gradient(135deg, #C97A3A, #a85e27)", color: "white", boxShadow: "0 8px 24px rgba(201,122,58,0.3)" }
                    : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.12)" }
                  }
                >
                  {pkg.cta}
                </BookCTA>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Case Studies ─────────────────────────────────────────────────────────
const caseStudies = [
  {
    client: "Trois Ore Residence",
    location: "Ibadan, Nigeria",
    tag: "Boutique Hotel",
    services: ["Social Media Upgrade", "Brand Identity", "Marketing Strategy"],
    summary: "A premium boutique hotel in Ibadan with inconsistent social media presence and no direct booking strategy. Idariji Concept restructured their brand identity, built a social content system, and launched a targeted marketing campaign.",
    results: ["3× increase in Instagram engagement", "Direct bookings up 40% in 60 days", "Consistent brand voice across all touchpoints"],
    image: "/portfolio/trois-ore/Tileri ILeyavengaza (I).jpg",
  },
  {
    client: "NAF Conference Centre",
    location: "Abuja, Nigeria",
    tag: "Conference & Event Centre",
    services: ["Hospitality Marketing", "Visibility Strategy", "Content Design"],
    summary: "Nigeria's premier military conference centre needed a digital marketing overhaul to attract corporate bookings. We built a targeted hospitality marketing plan and elevated their online presence.",
    results: ["Improved corporate booking pipeline", "Strengthened brand positioning", "Elevated visual identity across digital"],
    image: "/portfolio/trois-ore/Tileri TGIF.jpg",
  },
]

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#C97A3A" }}>Our Work</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Hotels we've helped grow
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <div className="relative h-52 sm:h-64 overflow-hidden bg-gray-100">
                  <img src={cs.image} alt={cs.client} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,14,6,0.7) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-5 flex gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white border border-white/20" style={{ background: "rgba(201,122,58,0.7)" }}>{cs.tag}</span>
                    {cs.services.map((s, si) => (
                      <span key={si} className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white/80 border border-white/15" style={{ background: "rgba(0,0,0,0.4)" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-0.5">{cs.client}</h3>
                    <p className="text-gray-400 text-xs">{cs.location}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{cs.summary}</p>
                  <div className="space-y-2 mb-6">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="flex items-center gap-2 text-sm text-[#0D0D0D]">
                        <CheckCircle2 size={13} className="flex-shrink-0" style={{ color: "#C97A3A" }} />
                        {r}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <BookCTA className="inline-flex items-center gap-1.5 text-sm font-bold hover:gap-2.5 transition-all duration-300" style={{ color: "#C97A3A" }}>
                      Work with us on a similar project <ArrowUpRight size={13} />
                    </BookCTA>
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
  const [form, setForm] = useState({ name: "", hotel: "", city: "", whatsapp: "", email: "" })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Hotel Checklist Download — ${form.hotel || form.name}`,
          from_name: form.name,
          email: form.email,
          message: `Hotel: ${form.hotel}\nCity: ${form.city}\nWhatsApp: ${form.whatsapp}`,
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
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#C97A3A" }}>Free Resource</span>
            <h2 className="font-display font-bold text-[#0D0D0D] leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Free Hotel Visibility<br />Audit Checklist
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              A 1-page PDF covering the 20 things every Nigerian hotel should fix to stop losing direct bookings to OTAs. Download it free — no credit card, no catch.
            </p>
            <div className="flex flex-col gap-3">
              {["Brand & logo consistency check", "Website direct-booking audit", "OTA listing optimisation guide", "Instagram profile review checklist", "Google Business profile audit"].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-[#0D0D0D]">
                  <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: "#C97A3A" }} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100" style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}>
              {status === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={40} className="mx-auto mb-4" style={{ color: "#C97A3A" }} />
                  <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-2">Checklist on its way!</h3>
                  <p className="text-gray-500 text-sm">Check your email. We'll follow up within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-[#0D0D0D] text-lg mb-5">Get the free checklist</h3>
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "Ade Johnson" },
                    { label: "Hotel / Property Name", key: "hotel", type: "text", placeholder: "Trois Ore Residence" },
                    { label: "City", key: "city", type: "text", placeholder: "Ibadan" },
                    { label: "WhatsApp Number", key: "whatsapp", type: "tel", placeholder: "+234 810 984 9221" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "you@yourhotel.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-[#0D0D0D] mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0D0D0D] placeholder:text-gray-300 focus:outline-none focus:border-[#C97A3A] transition-colors"
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
                    style={{ background: "linear-gradient(135deg, #C97A3A, #a85e27)", boxShadow: "0 8px 24px rgba(201,122,58,0.3)" }}
                  >
                    Send Me the Checklist
                  </button>
                  <p className="text-gray-400 text-xs text-center">No spam. We'll follow up with a personalised note within 24 hours.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Trust + Testimonials ─────────────────────────────────────────────────
const testimonials = [
  { name: "Trois Ore Residence", location: "Ibadan, Nigeria", quote: "Our social media presence got a complete upgrade. Idariji Concept's creative designs and strategy now make Trois Ore Residence stand out beautifully online." },
  { name: "NAF Conference Centre", location: "Abuja, Nigeria", quote: "Idariji Concept elevated our hotel's visibility with a smart marketing approach that truly drives bookings. Their expertise has positioned us as a top choice for guests." },
]

function TrustSection() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "linear-gradient(135deg, #1a0e06 0%, #0d0802 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#C97A3A" }}>What Hotel Owners Say</span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Trusted by hospitality brands
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl p-7 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => <Star key={si} size={13} fill="#C97A3A" style={{ color: "#C97A3A" }} />)}
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
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: "#C97A3A" }}>Ready to fix your bookings?</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Start with a ₦200,000<br />Hotel Visibility Audit
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            7 working days. 25-page report. 1-hour readout call. You'll know exactly where you're losing bookings and what to do about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookCTA
              className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-8 py-4 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #C97A3A, #a85e27)", boxShadow: "0 8px 32px rgba(201,122,58,0.3)" }}
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
export default function HotelsPage() {
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
