import React from 'react';
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Star,
  ExternalLink,
  Instagram,
  Facebook,
  Music2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking?: () => void;
}

const SOCIAL_MEDIA_LINKS = [
  {
    name: 'Instagram',
    handle: '@hausofavedapaddington',
    category: 'Balayage & Lookbook',
    href: 'https://instagram.com/hausofavedapaddington',
    icon: Instagram,
    badge: 'Lookbook',
  },
  {
    name: 'Facebook',
    handle: 'Haus Of Aveda Paddington',
    category: 'Salon Stories & Updates',
    href: 'https://facebook.com/hausofavedapaddington',
    icon: Facebook,
    badge: 'Community',
  },
  {
    name: 'TikTok',
    handle: '@avedapaddington',
    category: 'Hair Transformations',
    href: 'https://tiktok.com/@avedapaddington',
    icon: Music2,
    badge: 'Artistry',
  },
];

const NAVIGATION_LINKS = [
  { label: 'Sanctuary Story', href: '#about' },
  { label: 'The Experience', href: '#experience' },
  { label: 'Signature Rituals', href: '#services' },
  { label: 'Hair Lookbook', href: '#gallery' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Guest FAQs', href: '#faq' },
  { label: 'Reserve Visit', href: '#booking' },
];

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#040705] text-stone-300 border-t border-[#dfb15b]/20 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Tier 1: Luxury 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Brand Identity & Ethos (4 Columns) */}
          <div className="lg:col-span-4 space-y-5" id="footer-brand-block">
            <div className="space-y-1.5">
              <a href="#home" className="inline-flex items-center gap-2 group">
                <span
                  id="footer-brand-title"
                  className="font-cinzel text-2xl sm:text-3xl font-normal tracking-[0.2em] text-[#f7f4ed] group-hover:text-[#dfb15b] transition-colors"
                >
                  HAUS OF AVEDA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b] inline-block" />
              </a>
              <p className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#dfb15b]">
                PADDINGTON • SYDNEY
              </p>
            </div>

            <p className="text-xs sm:text-sm font-sans text-stone-300 leading-relaxed font-light pr-0 lg:pr-6">
              A botanical luxury hair sanctuary located on Oxford Street. Powered by 100% vegan Aveda plant science, bespoke French balayage, precision scissor geometry, and restorative sensory rituals.
            </p>

            {/* Verified Google Rating Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09110c] border border-[#dfb15b]/30 text-xs font-mono text-[#dfb15b]">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#dfb15b] text-[#dfb15b]" />
                ))}
              </div>
              <span className="font-semibold text-stone-100">{BUSINESS_INFO.googleRating}</span>
              <span className="text-stone-400 font-sans">•</span>
              <span className="text-stone-300 font-sans text-[11px]">{BUSINESS_INFO.reviewsCount} Google Reviews</span>
            </div>

            {/* Direct Booking Action */}
            <div className="pt-2">
              <a
                href="#booking"
                onClick={(e) => {
                  if (onOpenBooking) {
                    e.preventDefault();
                    onOpenBooking();
                  }
                }}
                className="inline-flex items-center gap-2 text-xs font-cinzel tracking-[0.2em] uppercase text-[#dfb15b] hover:text-[#f7f4ed] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#dfb15b]"
              >
                <span>Reserve An Appointment</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Salon Business Hours (3 Columns) */}
          <div className="lg:col-span-3 space-y-4" id="footer-hours-block">
            <div className="flex items-center gap-2 border-b border-[#dfb15b]/20 pb-3">
              <Clock className="w-4 h-4 text-[#dfb15b]" />
              <h4 className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#f7f4ed] font-medium">
                Salon Hours
              </h4>
            </div>

            <div className="space-y-2.5 text-xs font-sans">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">Tuesday</span>
                <span className="font-mono text-stone-200">9:30 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">Wednesday</span>
                <span className="font-mono text-stone-200">9:30 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#dfb15b]/20 bg-[#0d1a11]/40 px-2 rounded-lg -mx-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#dfb15b] font-medium">Thursday</span>
                  <span className="text-[9px] font-mono text-[#dfb15b]/90 uppercase px-1 py-0.2 rounded bg-[#dfb15b]/10 border border-[#dfb15b]/30">Late Night</span>
                </div>
                <span className="font-mono text-[#f7f4ed] font-medium">9:30 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">Friday</span>
                <span className="font-mono text-stone-200">9:30 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">Saturday</span>
                <span className="font-mono text-stone-200">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-1 text-stone-400">
                <span>Sunday & Monday</span>
                <span className="font-mono text-stone-400 italic">Closed / By Request</span>
              </div>
            </div>

            <p className="text-[11px] text-[#dfb15b]/80 font-sans italic pt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb15b] shrink-0" />
              <span>Evening salon appointments available on Thursdays.</span>
            </p>
          </div>

          {/* Column 3: Paddington Studio & Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-4" id="footer-contact-block">
            <div className="flex items-center gap-2 border-b border-[#dfb15b]/20 pb-3">
              <MapPin className="w-4 h-4 text-[#dfb15b]" />
              <h4 className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#f7f4ed] font-medium">
                Paddington Studio
              </h4>
            </div>

            <div className="space-y-3.5 text-xs font-sans text-stone-300">
              {/* Address */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">
                  Studio Address
                </span>
                <p className="text-stone-100 font-medium leading-snug">
                  {BUSINESS_INFO.address.street}
                </p>
                <p className="text-stone-300 text-[11px]">
                  {BUSINESS_INFO.address.suburb} {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode}, {BUSINESS_INFO.address.country}
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#dfb15b] hover:text-[#f7f4ed] transition-colors pt-0.5"
                >
                  <span>View in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Phone */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">
                  Direct Inquiries & Bookings
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-sm font-cinzel font-semibold text-[#dfb15b] hover:text-[#f7f4ed] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Direct Email */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">
                  Email Concierge
                </span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-xs font-mono text-stone-200 hover:text-[#dfb15b] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#dfb15b]" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              {/* Official Website */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">
                  Official Website
                </span>
                <a
                  href={BUSINESS_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200 hover:text-[#dfb15b] font-mono text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#dfb15b]" />
                  <span>{BUSINESS_INFO.websiteDisplay}</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Navigation / Curated Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4" id="footer-nav-block">
            <div className="flex items-center gap-2 border-b border-[#dfb15b]/20 pb-3">
              <Sparkles className="w-4 h-4 text-[#dfb15b]" />
              <h4 className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#f7f4ed] font-medium">
                Explore
              </h4>
            </div>

            <ul className="space-y-2 text-xs font-sans text-stone-300">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#dfb15b] transition-colors flex items-center justify-between py-1 group"
                  >
                    <span>{link.label}</span>
                    <span className="text-stone-500 group-hover:text-[#dfb15b] transition-colors text-[10px] font-mono">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tier 2: Seamlessly Integrated Luxury Social Media Showcase */}
        <div
          id="footer-social-media-section"
          className="border-t border-b border-white/10 py-8"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-[#070e0a]/90 border border-[#dfb15b]/25 shadow-xl relative overflow-hidden">
            {/* Subtle Gold Accent Background Flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#dfb15b]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              {/* Social Section Title & Bio */}
              <div className="text-center lg:text-left space-y-1.5 max-w-md">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.25em] text-[#dfb15b]">
                  <Sparkles className="w-3 h-3 text-[#dfb15b]" />
                  <span>SOCIAL SANCTUARY</span>
                </div>
                <h3 className="text-lg sm:text-xl font-cinzel font-light text-[#f7f4ed] tracking-wide">
                  CONNECT WITH <span className="gold-gradient-text font-normal">HAUS OF AVEDA</span>
                </h3>
                <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                  Explore couture balayage transformations, botanical scalp rituals, and behind-the-chair artistry from our 184 Oxford Street salon team.
                </p>
              </div>

              {/* Three Structured Social Media Cards with Gold Accent Scheme */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full lg:w-auto">
                {SOCIAL_MEDIA_LINKS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`footer-social-${item.name.toLowerCase()}`}
                      aria-label={`Follow Haus Of Aveda Paddington on ${item.name}`}
                      title={`${item.name}: ${item.handle}`}
                      className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-[#09110c] border border-[#dfb15b]/25 hover:border-[#dfb15b] hover:bg-[#dfb15b]/10 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#dfb15b]/15 transform hover:-translate-y-0.5"
                    >
                      {/* Icon Container with Gold Border */}
                      <div className="w-10 h-10 rounded-lg bg-[#0b130e] border border-[#dfb15b]/40 text-[#dfb15b] group-hover:bg-[#dfb15b] group-hover:text-[#060907] flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Content Column */}
                      <div className="text-left min-w-0 pr-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-cinzel font-medium text-[#f7f4ed] group-hover:text-[#dfb15b] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#dfb15b]/15 text-[#dfb15b] border border-[#dfb15b]/30">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-stone-400 group-hover:text-[#e8c682] block truncate">
                          {item.handle}
                        </span>
                      </div>

                      {/* External Arrow Indicator */}
                      <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-[#dfb15b] ml-auto shrink-0 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Perfectly Aligned Copyright, Location & Back-to-Top Baseline */}
        <div
          id="footer-bottom-bar"
          className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-stone-400 border-t border-white/5"
        >
          {/* Copyright & Salon Designation */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p className="text-stone-300">
              © {new Date().getFullYear()} <strong className="text-[#f7f4ed] font-medium">Haus Of Aveda Paddington</strong>. All rights reserved.
            </p>
            <span className="hidden sm:inline text-stone-600">•</span>
            <span className="text-stone-400 text-[11px]">
              Aveda Concept Salon & Botanical Sanctuary
            </span>
          </div>

          {/* Location & Back To Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-mono text-[11px] text-stone-400 hidden lg:inline">
              184 Oxford St, Paddington NSW 2021, Australia
            </span>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0b130e] border border-[#dfb15b]/30 text-stone-300 hover:text-[#dfb15b] hover:border-[#dfb15b] hover:bg-[#dfb15b]/10 transition-all duration-300 group shadow-sm active:scale-95"
              aria-label="Back to top"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300 group-hover:text-[#dfb15b]">
                TOP
              </span>
              <ArrowUp className="w-3.5 h-3.5 text-[#dfb15b] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


