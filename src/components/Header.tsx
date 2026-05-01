import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowUpRight, Hotel, UtensilsCrossed, Rocket, Building2, LayoutGrid } from 'lucide-react'
import BookingModal from './BookingModal'

const verticals = [
  {
    name: 'For Hotels',
    href: '/hotels',
    tag: 'Hospitality',
    color: '#C97A3A',
    bg: 'rgba(201,122,58,0.08)',
    border: 'rgba(201,122,58,0.2)',
    icon: Hotel,
    desc: 'Direct bookings, brand strategy & marketing engines',
  },
  {
    name: 'For Food Brands',
    href: '/food-brands',
    tag: 'F&B',
    color: '#E8472A',
    bg: 'rgba(232,71,42,0.08)',
    border: 'rgba(232,71,42,0.2)',
    icon: UtensilsCrossed,
    desc: 'Packaging, brand identity & delivery-app optimisation',
  },
  {
    name: 'For Startups',
    href: '/startups',
    tag: 'Tech',
    color: '#818CF8',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.2)',
    icon: Rocket,
    desc: 'Website rebuilds, positioning & fractional growth teams',
  },
  {
    name: 'For Corporates',
    href: '/corporate',
    tag: 'Corporate',
    color: '#38BDF8',
    bg: 'rgba(8,145,178,0.08)',
    border: 'rgba(8,145,178,0.2)',
    icon: Building2,
    desc: 'Capability decks, annual reports & executive comms',
  },
]

const navLinks = [
  { num: '01', name: 'About', href: '/about' },
  { num: '03', name: 'Portfolio', href: '/portfolio' },
  { num: '04', name: 'Blog', href: '/blog' },
  { num: '05', name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const close = () => { setIsMobileMenuOpen(false); setMobileServicesOpen(false) }
  const openBooking = () => { close(); setBookingOpen(true) }
  const menuOpen = isMobileMenuOpen

  return (
    <>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* ── Mega-menu dropdown styles ── */}
      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .mega-dropdown { animation: dropdownIn 0.2s cubic-bezier(0.4,0,0.2,1) forwards; }

        .services-dropdown {
          width: min(440px, calc(100vw - 2rem));
          left: 50%;
          transform: translateX(-50%);
        }
        @media (max-width: 1023px) {
          .services-dropdown {
            left: auto;
            right: 0;
            transform: none;
            width: min(320px, calc(100vw - 2rem));
          }
        }

        .vertical-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid transparent;
          text-decoration: none;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
          cursor: pointer;
        }
        .vertical-card:hover {
          transform: translateX(3px);
        }
        .vertical-card .card-arrow {
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .vertical-card:hover .card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>

      {/* ── Mobile Overlay ── */}
      <div className={`mob-overlay md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
        <div style={{ height: '76px', flexShrink: 0 }} />
        <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 relative z-10 overflow-y-auto py-4">
          {/* Services accordion */}
          <div className="mob-link-wrap">
            <button
              onClick={() => setMobileServicesOpen(v => !v)}
              className="mob-nav-link w-full text-left"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span className="mob-num">02</span>
              <span className="mob-label">Services</span>
              <span className="mob-arrow" style={{ transform: mobileServicesOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.25s ease' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="pl-10 pb-3 flex flex-col gap-2">
                {verticals.map((v) => (
                  <Link key={v.href} to={v.href} onClick={close} className="flex items-center gap-2 text-white/60 hover:text-white text-sm py-1.5 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: v.color }} />
                    {v.name}
                    <span className="text-[10px] font-bold ml-1" style={{ color: v.color }}>{v.tag}</span>
                  </Link>
                ))}
                <Link to="/services" onClick={close} className="flex items-center gap-2 text-[#FF6B00] text-sm py-1.5 font-semibold">
                  <LayoutGrid size={12} /> All Services
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <div key={link.name} className="mob-link-wrap">
              <Link to={link.href} onClick={close} className="mob-nav-link">
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
            <button
              onClick={openBooking}
              className="btn-shine block w-full text-center text-white font-bold text-sm rounded-full py-4 hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #e05e00 100%)', boxShadow: '0 8px 32px rgba(255,107,0,0.4)' }}
            >
              Book a Free Strategy Call
            </button>
          </div>
        </nav>

        <div className="mob-footer relative z-10 px-8 pb-8 pt-4 flex items-center justify-between">
          <p className="text-white/25 text-xs font-sans tracking-widest uppercase">Lagos & Ibadan, Nigeria</p>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#FF6B00] opacity-60" />
            <span className="text-white/20 text-xs">idarijiconcept.ng</span>
          </div>
        </div>
        <div className="mob-glow" />
      </div>

      {/* ── Main Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${mounted ? 'header-anim' : 'opacity-0'}`}
        style={{
          background: menuOpen ? 'rgba(0,12,28,0.98)' : isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: menuOpen ? 'blur(24px)' : isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: menuOpen ? 'blur(24px)' : isScrolled ? 'blur(20px)' : 'none',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.06)' : isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          boxShadow: isScrolled && !menuOpen ? '0 4px 32px rgba(0,0,0,0.08)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{ height: isScrolled && !menuOpen ? '60px' : '76px', transition: 'height 0.4s ease' }}>

            {/* Logo */}
            <Link to="/" className="flex items-center group" onClick={close}>
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
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">

              <Link to="/about" className={`nav-link font-medium text-[13px] lg:text-sm whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'}`}>
                About
              </Link>

              {/* ── Services mega-menu ── */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setDesktopServicesOpen(v => !v)}
                  className={`nav-link font-medium text-[13px] lg:text-sm whitespace-nowrap transition-colors duration-300 flex items-center gap-1 ${isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Services
                  <ChevronDown size={12} className="transition-transform duration-200" style={{ transform: desktopServicesOpen ? 'rotate(180deg)' : 'none' }} />
                </button>

                {desktopServicesOpen && (
                  <div
                    className="mega-dropdown services-dropdown absolute top-full mt-4 rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(160deg, rgba(0,15,35,0.98) 0%, rgba(0,8,20,0.99) 100%)',
                      backdropFilter: 'blur(32px)',
                      WebkitBackdropFilter: 'blur(32px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
                    }}
                  >
                    {/* Header strip */}
                    <div className="px-5 pt-5 pb-3 border-b border-white/5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Industry Verticals</p>
                    </div>

                    {/* Vertical cards */}
                    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-2">
                      {verticals.map((v) => {
                        const Icon = v.icon
                        return (
                          <Link
                            key={v.href}
                            to={v.href}
                            onClick={() => setDesktopServicesOpen(false)}
                            className="vertical-card"
                            style={{ background: v.bg, borderColor: v.border }}
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ background: `${v.color}18` }}>
                              <Icon size={15} style={{ color: v.color }} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1 mb-0.5">
                                <span className="text-white font-semibold text-[13px] leading-tight whitespace-nowrap">{v.name}</span>
                                <ArrowUpRight size={12} className="card-arrow flex-shrink-0" style={{ color: v.color }} />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: v.color }}>{v.tag}</span>
                              <p className="text-white/40 text-[11px] leading-snug">{v.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Footer strip */}
                    <div className="mx-3 mb-3 p-3 rounded-xl flex items-center justify-between border border-white/5" style={{ background: 'rgba(255,107,0,0.06)' }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,107,0,0.15)' }}>
                          <LayoutGrid size={13} className="text-[#FF6B00]" />
                        </div>
                        <div>
                          <p className="text-white/80 text-[12px] font-semibold">All Services</p>
                          <p className="text-white/30 text-[10px]">Full service catalogue</p>
                        </div>
                      </div>
                      <Link
                        to="/services"
                        onClick={() => setDesktopServicesOpen(false)}
                        className="flex items-center gap-1.5 text-[#FF6B00] text-[12px] font-bold hover:gap-2.5 transition-all duration-200"
                      >
                        Explore <ArrowUpRight size={11} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/portfolio" className={`nav-link font-medium text-[13px] lg:text-sm whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'}`}>
                Portfolio
              </Link>

              <Link to="/blog" className={`nav-link font-medium text-[13px] lg:text-sm whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white/80 hover:text-white'}`}>
                Blog
              </Link>

              <button
                onClick={() => setBookingOpen(true)}
                className="btn-shine font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #FF6B00 0%, #e05e00 100%)',
                  color: 'white',
                  padding: isScrolled ? '7px 16px' : '9px 20px',
                  fontSize: '13px',
                  boxShadow: '0 4px 20px rgba(255,107,0,0.35)',
                }}
              >
                Book a Call
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-1 rounded-lg transition-colors duration-300 focus:outline-none"
              style={{ color: menuOpen ? '#fff' : isScrolled ? '#001f3f' : '#fff' }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`hbg ${isMobileMenuOpen ? 'open' : ''}`}>
                <span /><span /><span />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
