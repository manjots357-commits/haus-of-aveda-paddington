import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Sparkles, Globe, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const ContactLocationSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Soft Ambient Background Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
            SALON LOCATION & CONTACT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed]">
          VISIT <span className="gold-gradient-text font-normal">HAUS OF AVEDA PADDINGTON</span>
        </h2>
        <p className="mt-3 text-stone-300 text-sm sm:text-base font-sans leading-relaxed font-light">
          Located on iconic Oxford Street in Paddington, Sydney. A botanical hair haven designed for calm, luxury, and transformative color.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Business Details Cards */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel-gold border border-[#dfb15b]/25 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#dfb15b] block mb-1">
                VERIFIED LOCAL SALON
              </span>
              <h3 className="text-2xl font-cinzel font-normal text-[#f7f4ed]">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-0.5">
                {BUSINESS_INFO.category} • Sydney, Australia
              </p>

              {/* Rating pill */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080d0a] border border-[#dfb15b]/30 text-xs">
                <Star className="w-3.5 h-3.5 fill-[#dfb15b] text-[#dfb15b]" />
                <span className="font-semibold text-[#f7f4ed]">{BUSINESS_INFO.googleRating}</span>
                <span className="text-stone-400">({BUSINESS_INFO.reviewsCount} Google reviews)</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <div className="p-2.5 rounded-xl bg-[#080d0a] border border-[#dfb15b]/30 text-[#dfb15b] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block">
                  Studio Address
                </span>
                <p className="text-sm font-sans text-stone-200 leading-snug font-medium">
                  {BUSINESS_INFO.address.street}
                </p>
                <p className="text-sm font-sans text-stone-300">
                  {BUSINESS_INFO.address.suburb} {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode}, {BUSINESS_INFO.address.country}
                </p>
                <p className="text-xs text-stone-400 pt-0.5 font-sans">
                  Historic Paddington precinct, Oxford St high street
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <div className="p-2.5 rounded-xl bg-[#080d0a] border border-[#dfb15b]/30 text-[#dfb15b] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block">
                  Direct Inquiries & Bookings
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-lg font-cinzel font-semibold text-[#dfb15b] hover:text-[#f7f4ed] transition-colors block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-[11px] text-stone-400 font-sans">
                  Call for appointments, color consultations & enquiries
                </p>
              </div>
            </div>

            {/* Direct Email */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <div className="p-2.5 rounded-xl bg-[#080d0a] border border-[#dfb15b]/30 text-[#dfb15b] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block">
                  Email Concierge
                </span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-sm font-mono text-stone-200 hover:text-[#dfb15b] transition-colors block"
                >
                  {BUSINESS_INFO.email}
                </a>
                <p className="text-[11px] text-stone-400 font-sans">
                  For private bookings, press inquiries & general consultations
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <div className="p-2.5 rounded-xl bg-[#080d0a] border border-[#dfb15b]/30 text-[#dfb15b] shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block">
                  Official Website
                </span>
                <a
                  href={BUSINESS_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-stone-200 hover:text-[#dfb15b] transition-colors flex items-center gap-1.5"
                >
                  <span>{BUSINESS_INFO.websiteDisplay}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#dfb15b]" />
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <div className="p-2.5 rounded-xl bg-[#080d0a] border border-[#dfb15b]/30 text-[#dfb15b] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono text-stone-400 tracking-wider block">
                  Salon Hours
                </span>
                <p className="text-xs font-sans text-stone-200 font-medium">
                  {BUSINESS_INFO.openingHours}
                </p>
                <p className="text-[11px] text-stone-400">
                  Late night appointments available Thursdays
                </p>
              </div>
            </div>
          </div>

          {/* Action Navigation Button */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-get-directions-btn"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] font-semibold text-xs tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-[#dfb15b]/25 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            <span>GET DIRECTIONS TO PADDINGTON</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Right Column: Google Maps Interactive Frame */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[460px] sm:h-full min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#dfb15b]/25 shadow-2xl bg-[#060907] flex flex-col justify-between p-6">
            {/* Embedded Google Map Iframe for 184 Oxford St, Paddington NSW 2021 Australia */}
            <iframe
              title="Haus Of Aveda Paddington Location Map"
              src="https://maps.google.com/maps?q=184+Oxford+St,+Paddington+NSW+2021,+Australia&hl=en&z=16&output=embed"
              className="absolute inset-0 w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[88%] opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#060907]/30 to-[#060907]/80 pointer-events-none" />

            {/* Floating Top Card */}
            <div className="relative z-10 self-start p-4 rounded-xl glass-panel-gold border border-[#dfb15b]/35 shadow-xl max-w-sm">
              <div className="flex items-center gap-2 text-xs font-cinzel text-[#f7f4ed] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>HAUS OF AVEDA PADDINGTON</span>
              </div>
              <p className="text-[11px] font-sans text-stone-300 mt-1 font-light">
                184 Oxford St, Paddington NSW 2021, Australia
              </p>
              <p className="text-[10px] font-mono text-[#dfb15b] mt-1">
                4.8/5 Rating • 346 Reviews
              </p>
            </div>

            {/* Floating Bottom Action Bar */}
            <div className="relative z-10 self-end w-full flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl glass-panel-gold border border-white/10 backdrop-blur-md">
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-[#dfb15b] block">
                  Oxford Street Landmark:
                </span>
                <span className="text-xs font-sans text-stone-200">
                  Corner of Oxford St & Paddington Walk
                </span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#dfb15b] hover:bg-[#e8c682] text-[#060907] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 shrink-0 shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
