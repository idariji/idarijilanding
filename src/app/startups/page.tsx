"use client"
import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle,
  Layers, Target, Code2, Linkedin, ChevronDown, Send
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
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(150deg, #06060f 0%, #0d0d20 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 65%)" }} />
      <div className="absolute -left-16 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-40 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border" style={{ color: "#818CF8", borderColor: "rgba(79,70,229,0.3)", background: "rgba(79,70,229,0.1)" }}>
              Tech Startups
            </span>
            <h1 className="font-display font-bold text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Your seed round didn't<br className="hidden sm:block" /> buy another Tailwind<br />
              <span className="font-display italic" style={{ color: "#818CF8" }}>gradient site.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Brand strategy, website rebuilds, and fractional growth teams for seed to Series A Nigerian startups who need to convert users and impress investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookCTA
                className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-7 py-4 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #4F46E5, #3730A3)", boxShadow: "0 8px 32px rgba(79,70,229,0.35)" }}
              >
                Book Early Access — ₦350,000 Teardown
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </BookCTA>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 text-white/70 hover:text-white font-semibold text-sm rounded-full px-7 py-4 border border-white/15 hover:border-white/30 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <MessageCircle size={14} className="flex-shrink-0" />
                Chat on WhatsApp
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
  { icon: Target, title: "Undifferentiated positioning", body: "Every Nigerian fintech looks the same. Same blue gradient. Same 'fast and secure' copy. Same result: visitors leave without understanding why you're different." },
  { icon: Code2, title: "Landing pages that don't convert", body: "You're burning paid traffic but your conversion rate is under 2%. The problem isn't the ads — it's the page. No clear value prop. No credible proof. No urgency." },
  { icon: Layers, title: "Inconsistent design system", body: "Your web app, marketing site, and email all look like they were designed by three different teams. They were. That incoherence kills trust before a user signs up." },
  { icon: Linkedin, title: "Founder invisible on LinkedIn", body: "LinkedIn is the single most high-ROI channel for B2B Nigerian startups. Most founders haven't posted in months. That silence is costing you warm pipeline." },
]

function ProblemsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#4F46E5" }}>The Problem</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            What's holding your startup back
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(79,70,229,0.07)" }}>
                  <p.icon size={20} style={{ color: "#4F46E5" }} />
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
    name: "Growth & Brand Teardown",
    price: "₦350,000",
    timeline: "7 working days",
    cta: "Book Early Access",
    ctaStyle: "primary",
    bullets: [
      "Loom video walkthrough + written report",
      "Website, positioning & funnel review",
      "Design system consistency audit",
      "Content and social channel review",
      "Prioritised action list for 90 days",
    ],
    note: "Know exactly what to fix before your next sprint.",
  },
  {
    tier: "Tier 2",
    name: "Rebrand & Website Rebuild",
    price: "₦4M – ₦8M",
    timeline: "8–12 weeks",
    cta: "Book a Scoping Call",
    ctaStyle: "secondary",
    bullets: [
      "Brand refresh — positioning, messaging, visual identity",
      "Next.js or Webflow marketing site",
      "Design system documentation",
      "Conversion-optimised copy",
      "Analytics & event tracking setup",
    ],
    note: "For startups past product-market fit and ready to look the part.",
  },
  {
    tier: "Tier 3",
    name: "Fractional Brand & Growth Team",
    price: "₦2M – ₦5M / month",
    timeline: "6-month minimum",
    cta: "Book a Scoping Call",
    ctaStyle: "secondary",
    bullets: [
      "Dedicated designer + content strategist",
      "Part-time growth PM embedded in your team",
      "Weekly sprints aligned to your roadmap",
      "Monthly performance reviews",
      "Cheaper than a full-time Head of Marketing",
    ],
    note: "Ongoing execution. Startup velocity without the headcount.",
    addon: "Add-on: Founder LinkedIn & PR Program — ₦600K/month",
  },
]

function PackagesSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #06060f 0%, #0d0d20 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#818CF8" }}>The Solution</span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Built for how startups actually work
          </h2>
          <p className="text-white/45 mt-3 max-w-xl text-sm sm:text-base">Three engagement models. Start with the teardown or go straight to build.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-7 sm:p-8 h-full flex flex-col border"
                style={i === 0
                  ? { background: "rgba(79,70,229,0.12)", borderColor: "rgba(79,70,229,0.4)", boxShadow: "0 0 40px rgba(79,70,229,0.12)" }
                  : { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }
                }
              >
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "#818CF8" }}>{pkg.tier}</span>
                  <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">{pkg.name}</h3>
                  <div className="font-display font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>{pkg.price}</div>
                  <p className="text-white/35 text-xs mt-1">{pkg.timeline}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#818CF8" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {pkg.addon && (
                  <div className="mb-4 px-3 py-2.5 rounded-xl border text-xs text-white/50 border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
                    ✦ {pkg.addon}
                  </div>
                )}

                <p className="text-white/30 text-xs mb-6 italic">{pkg.note}</p>

                <BookCTA
                  className="w-full text-center font-bold text-sm rounded-full py-3.5 transition-all duration-300 block"
                  style={pkg.ctaStyle === "primary"
                    ? { background: "linear-gradient(135deg, #4F46E5, #3730A3)", color: "white", boxShadow: "0 8px 24px rgba(79,70,229,0.3)" }
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

// ─── Startup Lead Form ────────────────────────────────────────────────────
function StartupLeadForm() {
  const [form, setForm] = useState({ name: "", startup: "", email: "", whatsapp: "", stage: "", challenge: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Startup Inquiry — ${form.startup} (${form.stage})`,
          from_name: form.name,
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  const inp = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0D0D0D] placeholder:text-gray-300 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-colors"

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div>
            <Reveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#4F46E5" }}>Work With Us</span>
              <h2 className="font-display font-bold text-[#0D0D0D] leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                Ready to build a brand<br />
                <span className="font-display italic" style={{ color: "#4F46E5" }}>worth remembering?</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                Tell us about your startup. We'll reach out within 24 hours to schedule a free 30-minute brand audit — no pitch, no pressure.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                {[
                  { icon: "🎯", title: "Brand Strategy Session", desc: "Understand your positioning, messaging, and competitive gaps." },
                  { icon: "🖥️", title: "Website Teardown", desc: "We walk through your site and tell you exactly what's losing you leads." },
                  { icon: "📈", title: "Growth Roadmap", desc: "A clear 90-day action plan tailored to your stage and goals." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#0D0D0D] text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl p-7 sm:p-9 border border-gray-100 shadow-xl" style={{ background: "linear-gradient(145deg, #fafafa 0%, #ffffff 100%)" }}>
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(79,70,229,0.1)" }}>
                    <CheckCircle2 size={28} style={{ color: "#4F46E5" }} />
                  </div>
                  <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-2">We'll be in touch!</h3>
                  <p className="text-gray-500 text-sm">Expect a message from us within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Your Name</label>
                      <input type="text" required className={inp} placeholder="Tunde Okonkwo" value={form.name} onChange={(e) => set("name", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Startup Name</label>
                      <input type="text" required className={inp} placeholder="Payday.ng" value={form.startup} onChange={(e) => set("startup", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input type="email" required className={inp} placeholder="you@yourstartup.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">WhatsApp Number</label>
                    <input type="tel" required className={inp} placeholder="+234 810 984 9221" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Your Stage</label>
                    <select required className={inp} value={form.stage} onChange={(e) => set("stage", e.target.value)}>
                      <option value="">Select your stage...</option>
                      <option value="Pre-launch">Pre-launch — building the product</option>
                      <option value="MVP">MVP — have users, refining the product</option>
                      <option value="Growing">Growing — past product-market fit</option>
                      <option value="Scaling">Scaling — Series A or later</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Biggest Challenge</label>
                    <textarea
                      required
                      rows={3}
                      className={`${inp} resize-none`}
                      placeholder="What's holding your brand or growth back right now?"
                      value={form.challenge}
                      onChange={(e) => set("challenge", e.target.value)}
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-xs">Something went wrong. Please try again or WhatsApp us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 font-bold text-sm rounded-full py-3.5 text-white transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #3730A3)", boxShadow: "0 8px 24px rgba(79,70,229,0.3)" }}
                  >
                    {status === "loading" ? "Sending..." : (<>Get My Free Audit <Send size={14} /></>)}
                  </button>
                  <p className="text-center text-gray-400 text-[11px]">No spam. No sales pitch. Just honest advice.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "linear-gradient(135deg, #06060f 0%, #0d0d20 100%)" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: "#818CF8" }}>Ready to grow?</span>
          <h2 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Start with a<br />
            <span className="font-display italic" style={{ color: "#818CF8" }}>₦350,000 Teardown.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            7 working days. Loom video walkthrough + written report. You'll know exactly what's holding your brand and website back.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookCTA
              className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-8 py-4 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #4F46E5, #3730A3)", boxShadow: "0 8px 32px rgba(79,70,229,0.3)" }}
            >
              Book a Teardown
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </BookCTA>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 text-white/70 hover:text-white font-bold text-sm rounded-full px-8 py-4 border border-white/15 hover:border-white/30 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <MessageCircle size={15} className="flex-shrink-0" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function StartupsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <PackagesSection />
      <StartupLeadForm />
      <FinalCTA />
      <Footer />
    </div>
  )
}
