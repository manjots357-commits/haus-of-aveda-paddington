import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, Check, Clock, Calendar, X, MapPin } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
              SALON RITUALS & ARTISTRY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed]">
            BEAUTY IN <span className="gold-gradient-text font-normal">EVERY DETAIL</span>
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base font-sans font-light max-w-xl">
            Pure flower and plant essences tailored to your hair texture and personal aesthetic. Explore our signature Paddington services.
          </p>
        </div>

        <div className="text-xs font-mono text-[#dfb15b] px-4 py-2 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 self-start md:self-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#dfb15b] animate-pulse" />
          <span>100% Vegan & Cruelty-Free Aveda</span>
        </div>
      </div>

      {/* Main Services Interactive Grid / Row Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Numbered Service List */}
        <div className="lg:col-span-7 space-y-4">
          {SERVICES.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => setModalService(service)}
                className={`group cursor-pointer p-5 sm:p-7 rounded-2xl transition-all duration-500 border relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0d1712]/90 border-[#dfb15b]/40 shadow-xl shadow-black/80'
                    : 'bg-[#080d0a]/60 border-white/5 hover:border-[#dfb15b]/20 hover:bg-[#0d1712]/50'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeServiceIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#dfb15b] to-[#9e7238]"
                  />
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-[#dfb15b]/80 font-light">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-cinzel font-light text-[#f7f4ed] group-hover:text-[#dfb15b] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 font-sans mt-0.5">
                        {service.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {service.popular && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-sans uppercase tracking-wider bg-[#dfb15b]/15 text-[#e8c682] border border-[#dfb15b]/30">
                        Signature
                      </span>
                    )}
                    <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-stone-400 group-hover:text-[#dfb15b] group-hover:border-[#dfb15b]/40 group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Subtitle / Tagline on mobile */}
                <div className="mt-3 pt-3 border-t border-white/5 lg:hidden text-xs text-stone-400">
                  <p>{service.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Dynamic Service Preview Card */}
        <div className="lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="glass-panel-gold rounded-2xl overflow-hidden border border-[#dfb15b]/25 shadow-2xl p-6 sm:p-8"
            >
              {/* Preview Image with Vignette */}
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060907] via-[#060907]/30 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#dfb15b]">
                  {activeService.number} • {activeService.category}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] text-stone-300 font-sans">
                  <Clock className="w-3.5 h-3.5 text-[#dfb15b]" />
                  <span>{activeService.duration}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <h4 className="text-xl font-cinzel text-[#f7f4ed] font-medium">
                  {activeService.title}
                </h4>
                <p className="text-sm font-sans text-stone-300 leading-relaxed font-light">
                  {activeService.description}
                </p>

                {/* Key Signature Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#dfb15b] font-mono block">
                    Session Inclusions:
                  </span>
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-300 font-sans">
                      <Check className="w-3.5 h-3.5 text-[#dfb15b] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Booking & Details Trigger */}
                <div className="pt-6 flex items-center gap-3">
                  <button
                    onClick={() => onSelectServiceForBooking(activeService.title)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfb15b] to-[#c99e46] text-[#060907] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#dfb15b]/20 active:scale-95 transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </button>
                  <button
                    onClick={() => setModalService(activeService)}
                    className="py-3 px-4 rounded-xl border border-white/15 hover:border-[#dfb15b]/40 text-stone-200 text-xs font-medium tracking-wider hover:bg-[#0b130e] transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Lightbox for Complete Service Breakdown */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl glass-panel-gold rounded-2xl p-6 sm:p-8 border border-[#dfb15b]/30 shadow-2xl">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-white/10 hover:border-white/30 text-stone-300 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#dfb15b] mb-2">
              <span>{modalService.number}</span>
              <span>•</span>
              <span>{modalService.category}</span>
            </div>

            <h3 className="text-2xl font-cinzel text-[#f7f4ed] mb-2">
              {modalService.title}
            </h3>

            <p className="text-sm text-stone-300 mb-6 font-sans leading-relaxed font-light">
              {modalService.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0b130e] border border-white/10 mb-6 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#dfb15b] font-cinzel block">
                Session Protocols Included:
              </span>
              <ul className="space-y-2">
                {modalService.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-stone-200 font-sans">
                    <Check className="w-3.5 h-3.5 text-[#dfb15b] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-400 mb-6 font-sans gap-2">
              <span>Duration: <strong className="text-stone-200">{modalService.duration}</strong></span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#dfb15b]" />
                <strong className="text-stone-200">184 Oxford St, Paddington NSW</strong>
              </span>
            </div>

            <button
              onClick={() => {
                const serviceName = modalService.title;
                setModalService(null);
                onSelectServiceForBooking(serviceName);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] font-semibold text-xs tracking-widest uppercase hover:shadow-xl transition-all"
            >
              Book {modalService.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
