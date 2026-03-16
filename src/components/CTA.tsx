import React from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

export default function CTA() {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #001F3F 0%, #000D1F 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,107,0,0.08) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Ready to Start?</span>
        <h2
          className="font-display font-bold text-white mb-5 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Let's Build Something<br />
          <span className="font-display italic text-[#FF9A40]">Extraordinary</span> Together.
        </h2>
        <p className="text-white/55 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Your vision deserves a partner who understands strategy, creativity, and execution.
          Let's bring your brand to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="btn-shine group inline-flex items-center justify-center gap-3 bg-[#FF6B00] text-white rounded-full font-bold text-sm sm:text-base hover:bg-[#e05f00] transition-colors duration-300 w-full sm:w-auto"
            style={{ padding: "15px 36px", boxShadow: "0 8px 32px rgba(255,107,0,0.35)" }}
          >
            Let's Work Together
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white/75 hover:text-white hover:border-white/40 rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
            style={{ padding: "15px 36px", background: "rgba(255,255,255,0.05)" }}
          >
            <MessageCircle size={16} className="text-green-400 flex-shrink-0" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
