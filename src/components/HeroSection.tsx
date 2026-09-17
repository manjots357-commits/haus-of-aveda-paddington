import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, MapPin, Star } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Live Three.js 3D Sculptural Ribbon & Floating Gold Dust Canvas */}
      <Hero3DCanvas />

      {/* Atmospheric Vignette & Subtle Gradient */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#060907]/50 to-[#060907] pointer-events-none" />

      {/* Center Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#dfb15b]/25 mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b] animate-ping" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#e8c682] font-sans font-medium">
            HAUS OF AVEDA • PADDINGTON
          </span>
        </motion.div>

        {/* Main Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel font-light text-[#f7f4ed] tracking-tight leading-[1.08] max-w-4xl"
        >
          THE ART OF{' '}
          <span className="block font-cormorant italic font-normal text-[#dfb15b] tracking-wide text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 gold-gradient-text">
            Beautiful Hair
          </span>
        </motion.h1>

        {/* Supporting Luxury Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl font-cormorant italic text-stone-300 font-light max-w-2xl mx-auto leading-relaxed"
        >
          “A luxury Aveda salon experience in the heart of Paddington.”
        </motion.p>

        {/* Live Business Verification Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-sans text-stone-300"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0b130e]/80 border border-[#dfb15b]/20">
            <Star className="w-3.5 h-3.5 text-[#dfb15b] fill-[#dfb15b]" />
            <span className="text-[#f7f4ed] font-medium">
              4.8 / 5.0 Google Rating
            </span>
            <span className="text-stone-400 text-[11px]">(346 Reviews)</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0b130e]/80 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span>184 Oxford St, Paddington NSW 2021</span>
          </div>
        </motion.div>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            id="hero-book-appointment-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase hover:shadow-2xl hover:shadow-[#dfb15b]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK APPOINTMENT</span>
          </button>

          <a
            href="#services"
            id="hero-explore-services-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-[#dfb15b]/50 bg-[#0b130e]/60 hover:bg-[#0b130e] text-[#f7f4ed] hover:text-[#dfb15b] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE SERVICES</span>
            <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#dfb15b] group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 sm:mt-18 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-[#dfb15b] transition-colors group"
          aria-label="Scroll to Experience Section"
        >
          <span>THE EXPERIENCE</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#dfb15b]/50 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-[#dfb15b]"
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
};
