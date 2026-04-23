"use client"
import React, { useState, useEffect, useRef, useMemo } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ArrowRight, ArrowUpRight, Globe, Shield,
  Mail, CheckCircle2, XCircle, Star,
  Palette, TrendingUp, Users, Award, MessageCircle, ChevronDown
} from "lucide-react"
import Header from "./Header"
import Footer from "./Footer"
import BookingModal from "./BookingModal"
import { siteConfig } from "../lib/siteConfig"

// ─── Scroll Progress ──────────────────────────────────────────────────────
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none"
      style={{ width: `${progress}%`, background: "linear-gradient(90deg, #FF6B00, #FF9A40)", transition: "width 0.1s linear" }}
    />
  )
}

// ─── Count-Up ─────────────────────────────────────────────────────────────
function StatCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const startTime = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Reveal Wrapper ───────────────────────────────────────────────────────
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────
function HeroSection() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const logos = [
    { src: "/logos/foodlolo.png", name: "Foodlolo" },
    { src: "/logos/KAF_Logo_Side_Text_PNG.png", name: "KAF" },
    { src: "/logos/skillng.png", name: "SkillNG" },
    { src: "/logos/Logo 2.png", name: "Brand" },
  ]
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(150deg, #001F3F 0%, #000D1F 100%)" }}>
      {/* Hero background image — faded */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.09, mixBlendMode: "luminosity" }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-light opacity-20 pointer-events-none" />

      {/* Orange glow */}
      <div className="absolute -right-32 sm:-right-48 top-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,107,0,0.13) 0%, transparent 65%)", animation: "float-slow 10s ease-in-out infinite" }} />
      {/* Gold glow */}
      <div className="absolute -left-20 bottom-1/4 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,165,80,0.09) 0%, transparent 65%)", animation: "float 8s ease-in-out infinite", animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-28 pb-12">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}>
              <span className="inline-block text-[#FF9A40] text-xs font-bold tracking-[0.3em] uppercase mb-5">Lagos · Ibadan · Nigeria</span>
              <h2 className="font-display font-bold text-white leading-[1.08] mb-6 sm:mb-8" style={{ fontSize: "clamp(2rem, 4.8vw, 4.2rem)" }}>
                We build the brands<br />
                <span className="font-display italic text-[#FF6B00]">Nigerians notice.</span>
              </h2>
            </div>
            <div style={{ animation: "fadeInUp 0.7s ease 0.38s both" }}>
              <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Specialist branding and marketing for Nigerian hospitality, food &amp; beverage, and growth-stage brands. 6+ years. 80+ projects. Lagos and Ibadan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animation: "fadeInUp 0.7s ease 0.52s both" }}>
              <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
              <button onClick={() => setBookingOpen(true)} className="btn-shine group inline-flex items-center justify-center gap-3 bg-[#FF6B00] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-orange-glow hover:shadow-orange-glow-lg hover:bg-[#e05f00] transition-all duration-300">
                Book a Free Strategy Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
              <a href="/portfolio" className="group inline-flex items-center justify-center gap-3 text-white/75 hover:text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base border border-white/15 hover:border-white/30 transition-all duration-300" style={{ background: "rgba(255,255,255,0.05)" }}>
                See Our Work
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Right: Stats + logos */}
          <div style={{ animation: "fadeInUp 0.8s ease 0.35s both" }}>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[
                { target: 80, suffix: "+", label: "Projects Delivered" },
                { target: 95, suffix: "%+", label: "Client Satisfaction" },
                { target: 6, suffix: "+", label: "Years Experience" },
                { target: 12, suffix: "+", label: "Industries Served" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-white/10" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
                  <div className="font-display font-bold text-white leading-none mb-1" style={{ fontSize: "clamp(1.3rem, 4.5vw, 2.5rem)" }}>
                    <StatCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-[10px] sm:text-xs font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
            {/* Client logos */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
              <p className="text-white/30 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4">Trusted by leading brands</p>
              <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                {logos.map((logo, i) => (
                  <div key={i} className="w-12 sm:w-14 h-8 sm:h-9 flex items-center justify-center flex-shrink-0">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain transition-opacity duration-300"
                      style={{ filter: "brightness(0) invert(1)", opacity: 0.55 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
                    />
                  </div>
                ))}
                <span className="text-white/25 text-[10px] sm:text-xs font-medium flex-shrink-0 ml-auto">+8 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center" style={{ animation: "fadeInUp 0.6s ease 1s both" }}>
        <div className="flex flex-col items-center gap-1.5 text-white/25">
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── Verticals Section ────────────────────────────────────────────────────
const verticals = [
  {
    tag: "Primary",
    title: "For Hotels",
    headline: "Direct bookings. Better rooms. A brand guests remember.",
    description: "Brand strategy, direct-booking websites, photography, and marketing engines for Nigerian boutique hotels, serviced apartments, and event centres.",
    bullets: ["Direct booking website builds", "Social media content & ads", "Hotel visibility audits", "Corporate sales decks"],
    href: "/hotels",
    accent: "#C97A3A",
    bg: "linear-gradient(135deg, #1a0e06 0%, #2d1a0a 100%)",
    imageBg: "rgba(201,122,58,0.08)",
    pill: "Hospitality",
  },
  {
    tag: "Active",
    title: "For Food Brands",
    headline: "Your product deserves to stand out on the shelf — and on Chowdeck.",
    description: "Brand identity, packaging design, and delivery-app optimisation for Nigerian food, beverage, and snack brands ready to scale.",
    bullets: ["Packaging design (NAFDAC-ready)", "Brand identity systems", "Delivery app optimisation", "Shelf & Instagram presence"],
    href: "/food-brands",
    accent: "#E8472A",
    bg: "linear-gradient(135deg, #1a0602 0%, #2d0f08 100%)",
    imageBg: "rgba(232,71,42,0.08)",
    pill: "Food & Beverage",
  },
  {
    tag: "Coming Q4 2026",
    title: "For Startups",
    headline: "Your seed round didn't buy another gradient site.",
    description: "Brand strategy, website rebuilds, and fractional growth teams for seed to Series A Nigerian startups who need to convert and raise.",
    bullets: ["Positioning & messaging", "Next.js marketing sites", "Design systems", "Founder LinkedIn programs"],
    href: "/startups",
    accent: "#4F46E5",
    bg: "linear-gradient(135deg, #06060f 0%, #0d0d20 100%)",
    imageBg: "rgba(79,70,229,0.08)",
    pill: "Tech Startups",
  },
]

function VerticalsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Who We Serve</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
            Specialist teams for<br />
            <span className="font-display italic text-[#FF6B00]">specific industries</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {verticals.map((v, i) => (
            <a
              key={i}
              href={v.href}
              className="group relative rounded-2xl overflow-hidden block"
              style={{
                background: v.bg,
                animation: `fadeInUp 0.6s ease ${0.05 + i * 0.1}s both`,
                transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.28)" }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)" }}
            >
              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${v.accent}22 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full min-h-[300px] sm:min-h-[400px]">
                {/* Tags row */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border" style={{ color: v.accent, borderColor: `${v.accent}40`, background: `${v.accent}12` }}>{v.pill}</span>
                  {v.tag !== "Active" && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white/30 border border-white/10">{v.tag}</span>
                  )}
                </div>

                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3 leading-tight">{v.title}</h3>
                <p className="text-white/45 text-xs font-bold uppercase tracking-widest mb-3 font-sans" style={{ color: v.accent }}>{v.headline}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{v.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {v.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: v.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 font-bold text-sm mt-auto group-hover:gap-3 transition-all duration-300" style={{ color: v.accent }}>
                  Learn more <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: v.accent }} />
            </a>
          ))}
        </div>

        {/* Also serving strip */}
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl border border-gray-200 bg-white" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <p className="text-gray-500 text-sm">
              <span className="text-[#0D0D0D] font-semibold">Also serving:</span>{" "}
              Corporate Communications, Fashion & Lifestyle, Industrial & Oil/Gas
            </p>
            <a href="/services" className="group inline-flex items-center gap-1.5 text-[#FF6B00] text-sm font-bold flex-shrink-0 hover:gap-2.5 transition-all duration-300">
              View all services <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Portfolio Section ────────────────────────────────────────────────────
function PortfolioSection() {
  const [currentBatch, setCurrentBatch] = useState(0)
  const batches = useMemo(() => [
    {
      company: "Trois Ore Residence", tag: "Hospitality",
      projects: [
        { id: 1, title: "Social Media Upgrade", category: "Digital Marketing", image: "/portfolio/trois-ore/Tileri ILeyavengaza (I).jpg" },
        { id: 2, title: "Brand Identity", category: "Logo Design", image: "/portfolio/trois-ore/Tileri ILeyavengaza (II).jpg" },
        { id: 3, title: "Marketing Strategy", category: "Campaign Design", image: "/portfolio/trois-ore/Tileri TGIF.jpg" },
        { id: 4, title: "Digital Campaigns", category: "Social Media", image: "/portfolio/trois-ore/Tileri ILeyavengaza (I).jpg" },
      ],
    },
    {
      company: "KKLargesse", tag: "Events & Catering",
      projects: [
        { id: 5, title: "Brand Transformation", category: "Rebranding", image: "/portfolio/kklargesse/Hoodies.jpg" },
        { id: 6, title: "Branded Uniform", category: "Merchandise Design", image: "/portfolio/kklargesse/T-Shirt.jpg" },
        { id: 7, title: "Event Merchandise", category: "Brand Materials", image: "/portfolio/kklargesse/Tote Bag.jpg" },
        { id: 8, title: "Staff Branding", category: "Identity Design", image: "/portfolio/kklargesse/Hoodies.jpg" },
      ],
    },
    {
      company: "Fila Idan", tag: "Fashion",
      projects: [
        { id: 9, title: "Brand Identity", category: "Logo & Identity", image: "/portfolio/fila-idan/Banner I.jpg" },
        { id: 10, title: "Marketing Campaigns", category: "Digital Marketing", image: "/portfolio/fila-idan/Banner 2.jpg" },
        { id: 11, title: "Brand Materials", category: "Print Design", image: "/portfolio/fila-idan/Banner 3.jpg" },
        { id: 12, title: "Visual Identity", category: "Brand Design", image: "/portfolio/fila-idan/Banner I.jpg" },
      ],
    },
  ], [])

  // Preload all portfolio images so tab switches are instant
  useEffect(() => {
    batches.forEach(batch => {
      batch.projects.forEach(project => {
        const img = new window.Image()
        img.src = project.image
      })
    })
  }, [batches])

  useEffect(() => {
    const id = setInterval(() => setCurrentBatch(p => (p + 1) % batches.length), 5000)
    return () => clearInterval(id)
  }, [batches.length])

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Our Work</span>
            <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              Selected<br /><span className="font-display italic text-[#FF9A40]">Portfolio</span>
            </h2>
          </div>
          <a href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors flex-shrink-0">
            View full portfolio <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Reveal>

        {/* Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8 sm:mb-10">
          {batches.map((b, i) => (
            <button
              key={i}
              onClick={() => setCurrentBatch(i)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${i === currentBatch ? "bg-[#FF6B00] text-white shadow-orange-glow" : "text-white/55 hover:text-white border border-white/12 hover:border-white/25"}`}
              style={i !== currentBatch ? { background: "rgba(255,255,255,0.04)" } : {}}
            >
              {b.company}
              <span className="ml-1.5 text-[10px] sm:text-xs opacity-60">{b.tag}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {batches[currentBatch].projects.map((item, i) => (
            <motion.div
              key={`${currentBatch}-${item.id}`}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/90 via-[#001F3F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                <p className="text-[#FF9A40] text-[10px] sm:text-xs font-medium mt-0.5">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Client Logos ─────────────────────────────────────────────────────────
function ClientLogosSection() {
  const logos = [
    { src: "/logos/foodlolo.png", name: "Foodlolo" },
    { src: "/logos/KAF_Logo_Side_Text_PNG.png", name: "KAF" },
    { src: "/logos/recycledge-logo2-1-1-300x202.png", name: "Recycledge" },
    { src: "/logos/skillng.png", name: "SkillNG" },
    { src: "/logos/Strategy House Logo.png", name: "Strategy House" },
    { src: "/logos/Logo 2.png", name: "Brand" },
    { src: "/logos/Logo 4.png", name: "Brand" },
    { src: "/logos/IMG-20241114-WA0003-removebg-preview.png", name: "Brand" },
  ]
  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-y border-gray-100/80">
      <Reveal className="text-center mb-7 sm:mb-8">
        <span className="text-gray-400 text-xs font-bold tracking-[0.35em] uppercase">Brands That Trust Us</span>
      </Reveal>
      <div className="marquee-mask">
        <div className="flex w-max gap-5 sm:gap-6" style={{ animation: "marquee 28s linear infinite" }}>
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-28 sm:w-32 h-13 sm:h-14 flex items-center justify-center px-3 sm:px-4 bg-white rounded-xl border border-gray-100 mx-1" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <img
                src={logo.src}
                alt={logo.name}
                className={`max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${logo.src.includes("IMG-20241114-WA0003-removebg-preview") ? "scale-150" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────
const industryColors: Record<string, string> = {
  "F&B": "#E8472A",
  "Hospitality": "#C97A3A",
  "Fashion": "#9333EA",
  "Industrial": "#0891B2",
}

const testimonials = [
  { name: "Nikkey's Juice", role: "Ibadan, Nigeria", service: "Printing & Branding", industry: "F&B", content: "Our product packaging and print materials have never looked this good. Idariji Concept brought our vision to life with quality designs and professional printing that made Nikkey's Juice stand out on the shelves.", rating: 5 },
  { name: "KKLargesse", role: "Colchester, UK", service: "Brand Identity", industry: "F&B", content: "Idariji Concept completely transformed how we present our brand. Their creative direction gave KKLargesse a refined identity that truly resonates with our audience.", rating: 5 },
  { name: "Fila Idan", role: "Uyo, Nigeria", service: "Brand Strategy", industry: "Fashion", content: "The team helped us define who we are as a brand. Today, Fila Idan has a bold, consistent identity that perfectly captures our essence.", rating: 5 },
  { name: "NAF Conference Centre", role: "Abuja, Nigeria", service: "Hospitality Marketing", industry: "Hospitality", content: "Idariji Concept elevated our hotel's visibility with a smart marketing approach that truly drives bookings. Their expertise has positioned us as a top choice for guests.", rating: 5 },
  { name: "Trois Ore Residence", role: "Ibadan, Nigeria", service: "Digital Marketing", industry: "Hospitality", content: "Our social media presence got a complete upgrade. Idariji Concept's creative designs and strategy now make Trois Ore Residence stand out beautifully online.", rating: 5 },
  { name: "Netis Group", role: "Lagos, Nigeria", service: "Print Design", industry: "Industrial", content: "From design to delivery, Idariji Concept handled our print materials with precision and style. Their attention to detail made our brand look truly premium.", rating: 5 },
]

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 sm:mb-16">
          <div>
            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Testimonials</span>
            <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              What Our<br /><span className="font-display italic text-[#001F3F]">Clients Say</span>
            </h2>
          </div>
          <a href="/testimonials" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#FF6B00] transition-colors flex-shrink-0">
            All testimonials <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Reveal>
      </div>
      <div className="marquee-mask">
        <div className="flex w-max gap-4 sm:gap-5 pb-2" style={{ animation: "marquee 40s linear infinite" }}>
          {[...testimonials, ...testimonials].map((t, i) => {
            const accentColor = industryColors[t.industry] ?? "#FF6B00"
            return (
              <div key={i} className="flex-shrink-0 w-[300px] sm:w-[340px] bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, si) => <Star key={si} size={13} className="text-[#FF6B00] fill-[#FF6B00]" />)}
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border" style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}10` }}>
                    {t.industry}
                  </span>
                </div>
                <span className="font-display text-4xl text-[#FF6B00]/15 leading-none font-bold block -mb-2">&ldquo;</span>
                <p className="text-[#333] text-sm leading-[1.85] mb-5">{t.content}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white" style={{ background: "linear-gradient(135deg, #001F3F, #003d87)" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D0D0D] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role} · {t.service}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────
function CTASection() {
  const [bookingOpen, setBookingOpen] = useState(false)
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(255,107,0,0.08) 0%, transparent 65%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <Reveal>
          <span className="inline-block text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-5 sm:mb-6">Ready to Start?</span>
          <h2 className="font-display font-bold text-white mb-5 sm:mb-6 leading-tight" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>
            Ready to Level Up<br />
            <span className="font-display italic text-[#FF9A40]">Your Brand?</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-base lg:text-lg mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call and we'll tell you exactly what's holding your brand back — and how to fix it.
          </p>
          <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => setBookingOpen(true)} className="btn-shine group inline-flex items-center justify-center gap-3 bg-[#FF6B00] text-white rounded-full font-bold text-sm sm:text-base hover:bg-[#e05f00] transition-colors duration-300 shadow-orange-glow hover:shadow-orange-glow-lg w-full sm:w-auto" style={{ padding: "15px 36px" }}>
              Book a Strategy Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white/75 hover:text-white hover:border-white/40 rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto" style={{ padding: "15px 36px", background: "rgba(255,255,255,0.05)" }}>
              <MessageCircle size={16} className="text-green-400 flex-shrink-0" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Newsletter ───────────────────────────────────────────────────────────
function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [msg, setMsg] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("error"); setMsg("Please enter a valid email address."); return }
    setStatus("idle")
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Newsletter Subscription — ${email}`,
          from_name: 'Idariji Concept Newsletter',
          email,
          message: `New newsletter subscription request from: ${email}`,
        }),
      })
      const result = await response.json()
      if (result.success) { setStatus("success"); setMsg("You're subscribed! Welcome aboard."); setEmail("") }
      else { setStatus("error"); setMsg("Something went wrong. Please try again.") }
    } catch { setStatus("error"); setMsg("Something went wrong. Please try again.") }
  }
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: 'url("/Newsletter.jpg")' }}>
      <div className="absolute inset-0" style={{ background: "rgba(0,15,35,0.84)" }} />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 border border-[#FF6B00]/30" style={{ background: "rgba(255,107,0,0.15)" }}>
            <Mail size={22} className="text-[#FF9A40]" />
          </div>
          <span className="text-[#FF9A40] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Newsletter</span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>Stay Ahead of the Curve</h2>
          <p className="text-white/55 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed">
            Brand insights, marketing tips, and exclusive offers — delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-0 overflow-hidden rounded-full p-1.5 border border-white/15" style={{ background: "rgba(255,255,255,0.08)" }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="flex-1 bg-transparent px-4 sm:px-5 py-3 text-white placeholder:text-white/35 focus:outline-none text-sm min-w-0" />
              <button type="submit" className="btn-shine bg-[#FF6B00] text-white px-5 sm:px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#e05f00] transition-colors flex-shrink-0">Subscribe</button>
            </div>
            <AnimatePresence>
              {status !== "idle" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center justify-center gap-2">
                  {status === "success" ? <><CheckCircle2 size={14} className="text-green-400" /><span className="text-green-400 text-sm">{msg}</span></> : <><XCircle size={14} className="text-red-400" /><span className="text-red-400 text-sm">{msg}</span></>}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          <p className="text-white/30 text-xs mt-5 sm:mt-6">No spam, ever. Unsubscribe anytime.</p>
        </Reveal>
      </div>
    </section>
  )
}

// ─── WhatsApp Button ──────────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-5 sm:bottom-7 sm:right-6 z-40">
      <div className="absolute inset-0 rounded-full bg-green-500 ring-1" />
      <div className="absolute inset-0 rounded-full bg-green-500 ring-2" />
      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="relative group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3.5 sm:p-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300" style={{ boxShadow: "0 8px 32px rgba(34,197,94,0.35)" }}>
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[120px] sm:group-hover:max-w-[140px] transition-all duration-500 ease-in-out text-sm font-semibold">Chat with Us</span>
      </a>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Header />
      <WhatsAppButton />
      <HeroSection />
      <VerticalsSection />
      <PortfolioSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
