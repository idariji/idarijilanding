'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { num: '01', name: 'About', href: '/about' },
  { num: '02', name: 'Services', href: '/services' },
  { num: '03', name: 'Portfolio', href: '/portfolio' },
  { num: '04', name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const close = () => setIsMobileMenuOpen(false)

  // When menu open, header always goes dark navy regardless of scroll
  const menuOpen = isMobileMenuOpen

  return (
    <>
      {/* ── Full-screen Mobile Overlay ── */}
      <div className={`mob-overlay md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Spacer for header height */}
        <div style={{ height: '76px', flexShrink: 0 }} />

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 relative z-10">
          {navLinks.map((link) => (
            <div key={link.name} className="mob-link-wrap">
              <Link href={link.href} onClick={close} className="mob-nav-link">
                <span className="mob-num">{link.num}</span>
                <span className="mob-label">{link.name}</span>
                <span className="mob-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </div>
          ))}

          <div className="mob-cta pt-8">
            <a
              href="https://forms.gle/D2WXs3S4NDYZovpf6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-shine block w-full text-center text-white font-bold text-sm rounded-full py-4 hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #e05e00 100%)', boxShadow: '0 8px 32px rgba(255,107,0,0.4)' }}
            >
              Free Consultation
            </a>
          </div>
        </nav>

        {/* Footer strip */}
        <div className="mob-footer relative z-10 px-8 pb-8 pt-4 flex items-center justify-between">
          <p className="text-white/25 text-xs font-sans tracking-widest uppercase">Lagos & Ibadan, Nigeria</p>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#FF6B00] opacity-60" />
            <span className="text-white/20 text-xs">idarijiconcept.com</span>
          </div>
        </div>

        <div className="mob-glow" />
      </div>

      {/* ── Main Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${mounted ? 'header-anim' : 'opacity-0'}`}
        style={{
          background: menuOpen
            ? 'rgba(0,12,28,0.98)'
            : isScrolled
            ? 'rgba(255,255,255,0.95)'
            : 'transparent',
          backdropFilter: menuOpen ? 'blur(24px)' : isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: menuOpen ? 'blur(24px)' : isScrolled ? 'blur(20px)' : 'none',
          borderBottom: menuOpen
            ? '1px solid rgba(255,255,255,0.06)'
            : isScrolled
            ? '1px solid rgba(0,0,0,0.08)'
            : '1px solid transparent',
          boxShadow: isScrolled && !menuOpen ? '0 4px 32px rgba(0,0,0,0.08)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex justify-between items-center"
            style={{ height: isScrolled && !menuOpen ? '60px' : '76px', transition: 'height 0.4s ease' }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center group" onClick={close}>
              <img
                src="/idariji-logo-2.svg"
                alt="Idariji Concept"
                style={{
                  width: isScrolled && !menuOpen ? '152px' : '200px',
                  height: isScrolled && !menuOpen ? '45px' : '59px',
                  transition: 'width 0.4s ease, height 0.4s ease, filter 0.4s ease',
                  filter: menuOpen || !isScrolled ? 'brightness(0) invert(1)' : 'none',
                }}
                className="group-hover:opacity-90 transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link font-medium text-sm transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://forms.gle/D2WXs3S4NDYZovpf6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #FF6B00 0%, #e05e00 100%)',
                  color: 'white',
                  padding: isScrolled ? '8px 20px' : '10px 24px',
                  fontSize: isScrolled ? '13px' : '14px',
                  boxShadow: '0 4px 20px rgba(255,107,0,0.35)',
                  display: 'inline-block',
                }}
              >
                Free Consultation
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-1 rounded-lg transition-colors duration-300 focus:outline-none"
              style={{ color: menuOpen ? '#fff' : isScrolled ? '#001f3f' : '#fff' }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`hbg ${isMobileMenuOpen ? 'open' : ''}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
