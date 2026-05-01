"use client"
import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight, CheckCircle2, MessageCircle, FileText,
  Globe, BarChart3, BookOpen, Briefcase, Award, ChevronDown, XCircle
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
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
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" style={{ background: "linear-gradient(150deg, #071827 0%, #030e18 100%)" }}>
      <div className="absolute inset-0 dot-grid-light opacity-10 pointer-events-none" />
      <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(30,58,95,0.4) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(30,58,95,0.5), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-40 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border" style={{ color: "#93C5FD", borderColor: "rgba(147,197,253,0.2)", background: "rgba(147,197,253,0.06)" }}>
              Corporate Communications
            </span>
            <h1 className="font-display font-bold text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Corporate communications<br className="hidden sm:block" /> that move at the standard<br />
              <span className="font-display italic" style={{ color: "#93C5FD" }}>of your brand.</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Capability statements, annual reports, corporate websites, CSR documentation, and executive communications for Nigerian corporates and indigenous operators.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#request-capability"
                className="btn-shine group inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm rounded-full px-7 py-4 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #1e3a5f, #142a46)", boxShadow: "0 8px 32px rgba(30,58,95,0.4)", border: "1px solid rgba(147,197,253,0.15)" }}
              >
                Request Our Capability Statement
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 text-white/60 hover:text-white font-semibold text-sm rounded-full px-7 py-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <MessageCircle size={14} className="flex-shrink-0" />
                Speak to Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-1.5 text-white/15">
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────
const services = [
  { icon: Briefcase, title: "Corporate Capability Deck", body: "Professionally designed capability statements that open doors with procurement teams, government bodies, and institutional clients." },
  { icon: BarChart3, title: "Annual Report Design", body: "End-to-end annual report design and production — data visualisation, photography direction, print-ready files." },
  { icon: Globe, title: "Corporate Website Rebuild", body: "A corporate website that reflects the gravity and scale of your organisation. Built for trust, not for trend." },
  { icon: BookOpen, title: "CSR / Sustainability Report", body: "ESG reporting designed to communicate your organisation's impact to investors, regulators, and the public." },
  { icon: FileText, title: "HSE Campaign Creative", body: "Safety campaign materials, toolbox talks, and compliance documentation designed to the standard of your HSE obligations." },
  { icon: Award, title: "Corporate Communications Retainer", body: "Ongoing communications support — press releases, executive content, brand materials — at a fixed monthly investment." },
]

function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#1e3a5f" }}>What We Deliver</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Corporate communications services
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">All engagements are custom-scoped. Contact us to discuss your requirements.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(30,58,95,0.06)" }}>
                  <s.icon size={20} style={{ color: "#1e3a5f" }} />
                </div>
                <h3 className="font-display font-semibold text-[#0D0D0D] text-lg mb-2.5">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Trust Elements ───────────────────────────────────────────────────────
function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-gray-400">Experience & Credentials</span>
          <h2 className="font-display font-bold text-[#0D0D0D] leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            Proven in industrial and corporate environments
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {[
            { title: "Netis Group", sub: "Lagos, Nigeria", body: "Industrial print and brand materials delivered to premium standard for a leading Nigerian engineering and services group." },
            { title: "NipeX Registration", sub: "In Progress", body: "Registration with the Nigerian Petroleum Exchange for procurement compliance — enabling us to serve oil & gas sector clients directly." },
            { title: "NCDMB Registration", sub: "In Progress", body: "Registration with the Nigerian Content Development & Monitoring Board for indigenous operator engagements." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl p-7 border border-gray-100 h-full" style={{ background: "#F8F9FB", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <h3 className="font-display font-semibold text-[#0D0D0D] text-lg mb-1">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#1e3a5f" }}>{item.sub}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Capability Request Form ──────────────────────────────────────────────
function CapabilityRequestSection() {
  const [form, setForm] = useState({ name: "", company: "", role: "", email: "", phone: "", brief: "" })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Corporate Capability Statement Request — ${form.company}`,
          from_name: form.name,
          email: form.email,
          message: `Company: ${form.company}\nRole: ${form.role}\nPhone: ${form.phone}\n\nBrief: ${form.brief}`,
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
    <section id="request-capability" className="py-20 sm:py-28" style={{ background: "linear-gradient(150deg, #071827 0%, #030e18 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: "#93C5FD" }}>Get in Touch</span>
            <h2 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Request our<br />Capability Statement
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8">
              Fill in the form and we'll send our full capability statement within 24 hours. A senior team member will follow up personally to discuss your requirements.
            </p>
            <div className="space-y-4">
              {[
                "Direct founder-to-client engagement",
                "Custom scoping for every engagement",
                "NDA available on request",
                "Domestic and diaspora Nigerian clients",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60 text-sm">
                  <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: "#93C5FD" }} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl p-7 sm:p-8 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
              {status === "success" ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={40} className="mx-auto mb-4" style={{ color: "#93C5FD" }} />
                  <h3 className="font-display font-bold text-white text-xl mb-2">Request received</h3>
                  <p className="text-white/50 text-sm">We'll send our capability statement and follow up within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-white text-lg mb-5">Request Capability Statement</h3>
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Chukwuemeka Obi" },
                    { label: "Company / Organisation", key: "company", type: "text", placeholder: "Netis Group" },
                    { label: "Your Role", key: "role", type: "text", placeholder: "Head of Communications" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "you@yourcompany.com" },
                    { label: "Phone / WhatsApp", key: "phone", type: "tel", placeholder: "+234 810 984 9221" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-white/70 mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors border"
                        style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                        onFocus={e => (e.target.style.borderColor = "rgba(147,197,253,0.4)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">Brief (optional)</label>
                    <textarea
                      placeholder="Tell us briefly what you're looking for..."
                      value={form.brief}
                      onChange={e => setForm(f => ({ ...f, brief: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors border resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(147,197,253,0.4)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <XCircle size={14} /> Something went wrong. Please try again.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full font-bold text-sm text-white rounded-full py-3.5 transition-all duration-300 hover:opacity-90 border"
                    style={{ background: "linear-gradient(135deg, #1e3a5f, #142a46)", borderColor: "rgba(147,197,253,0.2)", boxShadow: "0 8px 24px rgba(30,58,95,0.4)" }}
                  >
                    Request Capability Statement
                  </button>
                  <p className="text-white/25 text-xs text-center">We respond within 24 hours, Monday–Friday.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function CorporatePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CapabilityRequestSection />
      <Footer />
    </div>
  )
}
