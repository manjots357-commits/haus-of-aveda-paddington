import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Scissors, Leaf, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/salonData';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const icons = [Scissors, Leaf, HeartHandshake];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#e8c682] font-sans">
              HAUS OF AVEDA STANDARD
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed] tracking-wide uppercase"
          >
            THE LUXURY{' '}
            <span className="font-cormorant italic text-[#dfb15b] normal-case text-4xl sm:text-6xl gold-gradient-text">
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-stone-300 font-sans text-sm sm:text-base leading-relaxed"
          >
            Crafted for those who value hair wellness as deeply as high-fashion artistry. Discover why discerning clients across Sydney choose Haus Of Aveda Paddington.
          </motion.p>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 sm:p-10 rounded-2xl glass-panel-gold border border-[#dfb15b]/20 hover:border-[#dfb15b]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Radial Aura */}
                <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-[#dfb15b]/10 blur-3xl group-hover:bg-[#dfb15b]/20 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1b12] border border-[#dfb15b]/30 flex items-center justify-center text-[#dfb15b] group-hover:scale-110 group-hover:bg-[#dfb15b] group-hover:text-[#060907] transition-all duration-500 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#dfb15b]/70 tracking-widest">
                      // {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-cinzel tracking-wider text-[#f7f4ed] group-hover:text-[#dfb15b] transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-serif italic text-[#dfb15b]/90 mb-4 tracking-wide">
                    {item.tagline}
                  </p>

                  <p className="text-stone-300 text-sm leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-sans tracking-widest uppercase text-stone-400 group-hover:text-[#dfb15b] transition-colors">
                  <span>DISCOVER RITUAL</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Consultation Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0a140e]/90 border border-[#dfb15b]/25 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-cinzel text-[#f7f4ed] tracking-wide">
              Complimentary Sensory Consultation
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
              Every appointment includes an aroma sensory journey, customized scalp diagnosis, and expert guidance.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#dfb15b] hover:bg-[#e8c682] text-[#060907] text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#dfb15b]/20 active:scale-95"
          >
            Reserve Your Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
};
