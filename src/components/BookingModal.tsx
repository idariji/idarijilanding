
import React, { useState, useEffect, useRef } from 'react'
import { X, Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'

const services = [
  'Product Branding & Identity',
  'Sales & Digital Marketing',
  'Digital Development (Website / App)',
  'Printing & Promotion',
  'Business Operations',
  'Gift & Merchandise',
  'Hospitality — Hotels & Apartments',
  'Food Brand & Packaging',
  'Startup Branding & Growth',
  'Corporate Communications',
  'Other / Not Sure Yet',
]

const inp =
  'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all'

interface Props {
  open: boolean
  onClose: () => void
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function BookingModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  function handleClose() {
    if (status === 'sending') return
    onClose()
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setStatus('idle')
    }, 300)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email) return
    setStatus('sending')

    try {
      const res = await fetch('https://formsubmit.co/ajax/idarijiconcept@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Inquiry from ${form.name}`,
          _captcha: 'false',
          _template: 'table',
          name: form.name,
          email: form.email,
          phone: form.phone || '—',
          service: form.service || '—',
          message: form.message || '—',
        }),
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) handleClose() }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,10,24,0.75)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
        style={{ maxHeight: '90dvh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between px-6 pt-6 pb-4 bg-white border-b border-gray-100">
          <div>
            <h2 className="font-display font-bold text-[#0D0D0D] text-xl">Get in Touch</h2>
            <p className="text-gray-400 text-sm mt-0.5">We'll reply within 1 business day.</p>
          </div>
          <button
            onClick={handleClose}
            disabled={status === 'sending'}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0 ml-4 disabled:opacity-40"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <h3 className="font-display font-bold text-[#0D0D0D] text-xl mb-2">Message sent!</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                We've received your inquiry and will be in touch within 1 business day.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 bg-[#FF6B00] text-white text-sm font-bold rounded-full px-8 py-3 hover:bg-[#e05f00] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <AlertCircle size={15} className="text-red-500 flex-shrink-0" />
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly at <a href="mailto:idarijiconcept@gmail.com" className="font-semibold underline">idarijiconcept@gmail.com</a>.</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                  <input
                    className={inp}
                    placeholder="Amaka Johnson"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    className={inp}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                <input
                  className={inp}
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Interest</label>
                <div className="relative">
                  <select
                    className={`${inp} appearance-none pr-9 cursor-pointer`}
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    disabled={status === 'sending'}
                  >
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tell us about your project</label>
                <textarea
                  className={`${inp} resize-none`}
                  rows={4}
                  placeholder="What are you working on? What's the goal? Any timeline or budget in mind?"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  disabled={status === 'sending'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || !form.name || !form.email}
                className="w-full flex items-center justify-center gap-2.5 bg-[#FF6B00] hover:bg-[#e05f00] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-full py-4 transition-colors"
                style={{ boxShadow: '0 8px 24px rgba(255,107,0,0.3)' }}
              >
                {status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                ) : (
                  <><Send size={15} />Send Message</>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs">
                Or reach us directly at{' '}
                <a href="mailto:idarijiconcept@gmail.com" className="text-[#FF6B00] font-semibold hover:underline">
                  idarijiconcept@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
