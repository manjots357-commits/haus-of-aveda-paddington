import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
            CLIENT REVIEWS & PRAISE
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed]">
          WHAT OUR <span className="gold-gradient-text font-normal">CLIENTS SAY</span>
        </h2>
        <p className="mt-3 text-stone-300 text-sm sm:text-base font-sans leading-relaxed font-light">
          Real guest experiences from 184 Oxford St, Paddington. Honoring our commitment to botanical hair health, bespoke color, and sensory relaxation.
        </p>

        {/* Verified Google Badge Banner */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-[#0a140e] border border-[#dfb15b]/30 text-xs text-stone-200">
          <div className="flex items-center gap-1 text-[#dfb15b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#dfb15b] text-[#dfb15b]" />
            ))}
          </div>
          <span className="font-semibold text-[#f7f4ed]">
            {BUSINESS_INFO.googleRating} out of 5.0
          </span>
          <span className="text-stone-400">•</span>
          <span className="text-[#dfb15b]">
            Based on {BUSINESS_INFO.reviewsCount} Google Reviews
          </span>
        </div>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            id={`testimonial-${item.id}`}
            className="group p-6 sm:p-8 rounded-2xl glass-panel-gold border border-[#dfb15b]/20 hover:border-[#dfb15b]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Source */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#dfb15b]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#dfb15b] text-[#dfb15b]" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#dfb15b]/80 bg-[#0e1b12] px-2.5 py-0.5 rounded-full border border-[#dfb15b]/20">
                  Google Verified
                </span>
              </div>

              {/* Quote */}
              <p className="text-stone-200 font-cormorant italic text-base sm:text-lg leading-relaxed mb-6 font-light">
                “{item.quote}”
              </p>
            </div>

            {/* Author Information */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-cinzel text-[#f7f4ed] font-medium flex items-center gap-1.5">
                  <span>{item.author}</span>
                  <CheckCircle2 className="w-3 h-3 text-[#dfb15b]" />
                </h4>
                <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                  {item.location}
                </p>
              </div>

              <span className="text-[11px] font-mono text-[#dfb15b]">
                {item.service}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Google Maps Review Link */}
      <div className="mt-12 text-center">
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#dfb15b]/30 hover:border-[#dfb15b] bg-[#0b130e] hover:bg-[#0e1b12] text-xs font-sans text-stone-200 hover:text-[#dfb15b] transition-all duration-300 shadow-md"
        >
          <MapPin className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span>Read all 346 Google Reviews for Haus Of Aveda Paddington</span>
          <ExternalLink className="w-3 h-3 text-stone-400" />
        </a>
      </div>
    </section>
  );
};
