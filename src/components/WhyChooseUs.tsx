import React from 'react';
import { Sparkle, Sparkles, Leaf, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

const ICONS = [Leaf, Award, HeartHandshake, ShieldCheck];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4">
          <Sparkle className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
            THE AVEDA DIFFERENCE
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed]">
          WHY CHOOSE <span className="gold-gradient-text font-normal">OUR SANCTUARY</span>
        </h2>
        <p className="mt-3 text-stone-300 text-sm sm:text-base font-sans leading-relaxed font-light">
          Four botanical pillars that guide every precision cut, balayage highlight, and restorative scalp ritual on Oxford Street.
        </p>
      </div>

      {/* 4 Concise Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_CHOOSE_US.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div
              key={item.number}
              id={`why-choose-${item.number}`}
              className="group p-6 sm:p-8 rounded-2xl glass-panel-gold border border-[#dfb15b]/20 hover:border-[#dfb15b]/50 hover:bg-[#0b130e]/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#dfb15b] font-semibold tracking-widest px-2.5 py-1 rounded bg-[#0b130e] border border-[#dfb15b]/30">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 group-hover:text-[#dfb15b] group-hover:border-[#dfb15b]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-cinzel font-normal text-[#f7f4ed] mb-3 group-hover:text-[#dfb15b] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-stone-300/85 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-stone-400 group-hover:text-[#dfb15b] transition-colors">
                <Sparkles className="w-3 h-3 text-[#dfb15b]" />
                <span>Paddington Sanctuary Standard</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
