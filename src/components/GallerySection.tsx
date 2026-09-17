import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'ALL MOMENTS' },
    { id: 'colour', label: 'COUTURE COLOUR' },
    { id: 'couture', label: 'PRECISION CUTS' },
    { id: 'styling', label: 'EVENT STYLING' },
    { id: 'botanical', label: 'BOTANICAL RITUALS' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Soft Ambience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#dfb15b]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
              LOOKBOOK & PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed]">
            MOMENTS OF <span className="gold-gradient-text font-normal">BEAUTY</span>
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base font-sans font-light max-w-lg">
            A curated showcase of bespoke hair transformations, lived-in balayage, and salon artistry at Haus Of Aveda Paddington.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === tab.id
                  ? 'bg-[#dfb15b] text-[#060907] border-[#dfb15b] font-semibold shadow-md shadow-[#dfb15b]/20'
                  : 'bg-[#0b130e]/60 text-stone-300 border-white/10 hover:border-[#dfb15b]/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const isFeatured = index === 0 || index === 3;
          return (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveModalItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#dfb15b]/15 bg-[#080d0a]/80 shadow-xl ${
                isFeatured ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale-[8%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Vignette & Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060907] via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4 text-[#dfb15b]" />
                </div>

                {/* Bottom Title & Caption Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#dfb15b] block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="text-lg sm:text-xl font-cinzel text-[#f7f4ed] font-medium group-hover:text-[#dfb15b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-sans mt-1 line-clamp-1 opacity-80 group-hover:opacity-100 transition-opacity font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn">
          <div className="relative max-w-4xl w-full glass-panel-gold rounded-2xl overflow-hidden border border-[#dfb15b]/30 shadow-2xl">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-black transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#080d0a] border-t border-[#dfb15b]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#dfb15b] font-mono">
                  {activeModalItem.category} • Haus Of Aveda Paddington Portfolio
                </span>
                <h4 className="text-xl font-cinzel text-[#f7f4ed] mt-0.5">
                  {activeModalItem.title}
                </h4>
                <p className="text-xs text-stone-300 font-sans mt-1 font-light">
                  {activeModalItem.caption}
                </p>
              </div>
              <div className="text-xs font-mono text-[#dfb15b]">
                184 Oxford St, Paddington NSW
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
