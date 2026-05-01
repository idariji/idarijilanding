import React, { useState } from 'react'
import { Send, CheckCircle, User, Mail, Phone, Briefcase, FileText } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

const positions = [
  "Brand Designer",
  "Digital Marketing Specialist",
  "Business Development Executive",
  "Other / Open Application",
]

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Career Application: ${formData.position} — ${formData.name}`,
          from_name: 'Idariji Concept Careers',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          position: formData.position,
          cover_letter: formData.coverLetter,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or reach us on WhatsApp.')
      }
    } catch {
      setError('Something went wrong. Please try again or reach us on WhatsApp.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h3>
        <p className="text-lg text-gray-600 mb-2">
          Thanks, {formData.name}! We've received your application for <strong>{formData.position}</strong>.
        </p>
        <p className="text-gray-500 mb-6">We'll be in touch within 3–5 business days.</p>
        <p className="text-gray-500">
          Questions? <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-medium">Chat us on WhatsApp</a>
        </p>
        <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '' }) }} className="mt-6 text-sm text-gray-500 hover:text-gray-700 underline">
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline w-4 h-4 mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline w-4 h-4 mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline w-4 h-4 mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="+234 xxx xxx xxxx"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Briefcase className="inline w-4 h-4 mr-2" />
            Position *
          </label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select a position</option>
            {positions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FileText className="inline w-4 h-4 mr-2" />
          Cover Letter / Why should we hire you? *
        </label>
        <textarea
          name="coverLetter"
          required
          rows={6}
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Tell us about yourself, your experience, and why you'd be a great fit for this role. You can also include a link to your portfolio or LinkedIn profile."
        />
      </div>

      <p className="text-sm text-gray-500">
        Please email your CV to <a href={`mailto:${siteConfig.email}`} className="text-orange-500 hover:underline">{siteConfig.email}</a> with the subject line matching your chosen position.
      </p>

      {error && <p className="text-center text-red-500 text-sm">{error}</p>}

      <div className="text-center">
        <button
          type="submit"
          disabled={isLoading}
          className="group bg-[#FF6B00] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e05f00] transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span>{isLoading ? 'Submitting...' : 'Submit Application'}</span>
          <Send size={20} className={isLoading ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform duration-300'} />
        </button>
      </div>
    </form>
  )
}
