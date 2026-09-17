import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#060907]/90 backdrop-blur-2xl border-b border-[#dfb15b]/15 py-3.5 shadow-2xl shadow-black/90'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none"
            id="nav-logo"
          >
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.2em] text-[#f7f4ed] group-hover:text-[#dfb15b] transition-colors">
                HAUS OF AVEDA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b] inline-block" />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#dfb15b]/80 group-hover:text-[#f7f4ed] transition-colors font-sans uppercase">
              PADDINGTON • SYDNEY
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.22em] font-medium text-stone-300 hover:text-[#dfb15b] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#dfb15b] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Direct Phone */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="nav-phone-call"
              className="flex items-center gap-2 text-xs font-mono text-stone-300 hover:text-[#dfb15b] transition-colors py-2 px-3.5 rounded-full border border-white/10 hover:border-[#dfb15b]/40 bg-[#0b130e]/70"
              title="Call Haus Of Aveda Paddington directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfb15b]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              id="nav-book-appointment-btn"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#0b130e] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#dfb15b]/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK APPOINTMENT</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button & Quick Call */}
          <div className="flex md:hidden items-center space-x-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-full border border-[#dfb15b]/30 bg-[#0b130e] text-[#dfb15b]"
              aria-label="Call salon"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-stone-200 hover:text-[#dfb15b] transition-colors rounded-lg border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#060907]/98 backdrop-blur-2xl md:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto animate-fadeIn"
        >
          {/* Location & Rating Badge */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b130e] border border-[#dfb15b]/20 mb-6 text-xs text-stone-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#dfb15b]" />
              <span>184 Oxford St, Paddington</span>
            </div>
            <div className="text-[11px] font-mono text-[#dfb15b] font-semibold">
              4.8 ★ (346)
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col space-y-4 mb-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-cinzel tracking-wider text-stone-200 hover:text-[#dfb15b] border-b border-white/5 py-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#dfb15b]/70">0{idx + 1}</span>
              </a>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-auto space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#0b130e] font-semibold tracking-wider uppercase text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#dfb15b]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-xl border border-white/15 bg-[#0b130e] text-stone-200 font-mono text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#dfb15b]" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>

            <div className="text-center pt-2">
              <a
                href={BUSINESS_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#dfb15b]/90 font-mono underline"
              >
                {BUSINESS_INFO.websiteDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
