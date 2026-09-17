import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, MapPin, Globe, Leaf } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#dfb15b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Large Editorial Typography & Story */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
              SANCTUARY PHILOSOPHY
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed] leading-tight">
              MORE THAN{' '}
              <span className="font-cormorant italic font-normal text-[#dfb15b] block mt-2 text-4xl sm:text-6xl gold-gradient-text">
                A Salon
              </span>
            </h2>
            <p className="text-sm font-serif italic text-stone-400 tracking-wide">
              A luxury Aveda salon experience in the heart of Paddington.
            </p>
          </div>

          <div className="space-y-5 text-stone-300 font-sans leading-relaxed text-sm sm:text-base pr-0 lg:pr-6 font-light">
            <p>
              Located at <strong className="text-[#f7f4ed] font-medium">184 Oxford St</strong> in the historic fashion enclave of <strong className="text-[#f7f4ed] font-medium">Paddington, Sydney</strong>, Haus Of Aveda Paddington is a botanical sanctuary uniting high-fashion hair artistry with 100% vegan, cruelty-free plant science.
            </p>
            <p>
              We believe great hair begins with holistic wellness. From our bespoke French balayage and architectural scissor cuts to calming scalp exfoliation and sensory neck and shoulder rituals, every touch is designed to restore balance and radiant luster.
            </p>
            <p className="text-stone-400 text-xs sm:text-sm italic border-l-2 border-[#dfb15b]/40 pl-4 py-1.5 bg-[#0b130e]/40 rounded-r-lg">
              “Every service is infused with pure flower and plant essences—sustainable luxury that honors both your personal radiance and our planet.”
            </p>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl glass-panel-gold border border-[#dfb15b]/20 space-y-2">
              <Leaf className="w-5 h-5 text-[#dfb15b]" />
              <h4 className="text-sm font-cinzel text-[#f7f4ed] font-medium">100% Vegan Care</h4>
              <p className="text-xs text-stone-400 font-sans font-light">Cruelty-free formulas powered by certified organic botanicals.</p>
            </div>
            <div className="p-4 rounded-xl glass-panel-gold border border-[#dfb15b]/20 space-y-2">
              <Award className="w-5 h-5 text-[#dfb15b]" />
              <h4 className="text-sm font-cinzel text-[#f7f4ed] font-medium">Master Colourists</h4>
              <p className="text-xs text-stone-400 font-sans font-light">Specializing in dimensional balayage & tone refinement.</p>
            </div>
            <div className="p-4 rounded-xl glass-panel-gold border border-[#dfb15b]/20 space-y-2">
              <HeartHandshake className="w-5 h-5 text-[#dfb15b]" />
              <h4 className="text-sm font-cinzel text-[#f7f4ed] font-medium">Sensory Rituals</h4>
              <p className="text-xs text-stone-400 font-sans font-light">Aromatherapy scalp massage included with every appointment.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual Composition */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Featured Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Haus Of Aveda Paddington Salon Ambience"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060907] via-transparent to-transparent opacity-85" />

              {/* Floating Verified Location Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-gold border border-[#dfb15b]/30">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#dfb15b]/20 text-[#dfb15b] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#dfb15b] block">
                      PADDINGTON, SYDNEY
                    </span>
                    <p className="text-xs font-sans text-stone-200 mt-0.5 font-medium">
                      {BUSINESS_INFO.address.fullFormatted}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-[11px] text-[#dfb15b]">
                      <span>{BUSINESS_INFO.phone}</span>
                      <span>•</span>
                      <a
                        href={BUSINESS_INFO.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                      >
                        {BUSINESS_INFO.websiteDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame Border */}
            <div className="absolute -inset-2 rounded-2xl border border-[#dfb15b]/20 -z-10 translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
