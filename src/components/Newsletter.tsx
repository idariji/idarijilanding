'use client'
import React, { useState } from 'react'
import { ArrowRight, Mail, CheckCircle2, XCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscription, setSubscription] = useState<{
    status: "idle" | "loading" | "success" | "error"
    message: string
  }>({ status: "idle", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setSubscription({ status: "error", message: "Please enter your email address." })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubscription({ status: "error", message: "Please enter a valid email address." })
      return
    }

    setSubscription({ status: "loading", message: "" })

    try {
      const api = process.env.NEXT_PUBLIC_API_URL
      if (!api) throw new Error('API not configured')

      const response = await fetch(`${api}/api/v1/public/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubscription({ status: "success", message: result.message || "You're subscribed! Welcome aboard." })
        setEmail("")
      } else if (response.status === 409) {
        setSubscription({ status: "error", message: "This email is already subscribed." })
      } else {
        setSubscription({ status: "error", message: "Something went wrong. Please try again." })
      }
    } catch {
      setSubscription({ status: "error", message: "Something went wrong. Please try again." })
    }
  }

  return (
    <div
      className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/Newsletter.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
            </div>
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-orange-400">Newsletter</h2>
            <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">Stay in the loop</p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-8 text-gray-200">
              Get the latest updates, news, and exclusive offers delivered directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 sm:mt-12">
            <div className="relative">
              <div className="relative flex flex-col sm:flex-row items-center overflow-hidden rounded-lg border bg-white shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 w-full bg-transparent px-4 sm:px-6 py-3 sm:py-4 text-gray-900 placeholder:text-gray-500 focus:outline-none text-sm sm:text-base"
                  disabled={subscription.status === "loading"}
                />
                <button
                  type="submit"
                  disabled={subscription.status === "loading"}
                  className="group relative overflow-hidden px-6 sm:px-6 py-4 sm:py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors w-full sm:w-auto min-h-[56px] active:scale-95 shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="font-medium text-sm sm:text-base">
                      {subscription.status === "loading" ? "Subscribing..." : "Subscribe"}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>

            <div className={`mt-4 flex items-center justify-center gap-2 transition-all duration-300 ${subscription.status !== "idle" ? "opacity-100" : "opacity-0"}`}>
              {subscription.status === "success" && (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-xs sm:text-sm text-green-500">{subscription.message}</span>
                </>
              )}
              {subscription.status === "error" && (
                <>
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-xs sm:text-sm text-red-500">{subscription.message}</span>
                </>
              )}
            </div>
          </form>

          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
            {["No spam, unsubscribe at any time", "Exclusive content and offers", "Weekly insights from the Idariji team"].map((text, index) => (
              <p key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                <span>{text}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
