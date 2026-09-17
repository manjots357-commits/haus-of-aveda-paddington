import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Sparkles,
  ChevronDown,
  Phone,
  Calendar,
  HelpCircle,
  Leaf,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES, FaqItem } from '../data/faqData';
import { BUSINESS_INFO } from '../data/salonData';

interface FaqSectionProps {
  onOpenBooking?: (serviceTitle?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItemIds, setOpenItemIds] = useState<string[]>(['consultation-requirement', 'typical-visit-duration']);

  // Toggle open state for accordion
  const toggleItem = (id: string) => {
    setOpenItemIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // Expand all / Collapse all helper
  const expandAll = () => {
    setOpenItemIds(filteredItems.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenItemIds([]);
  };

  // Filtered list based on category & search query
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.highlight && item.highlight.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="faq"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060907] via-[#09110c] to-[#060907] text-[#f7f4ed] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#16271a]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b130e] border border-[#dfb15b]/30 text-xs font-mono tracking-[0.25em] text-[#dfb15b] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span>CLARITY & GUEST GUIDANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-normal tracking-wide text-[#f7f4ed]">
            FREQUENTLY ASKED <span className="gold-gradient-text font-serif italic">QUESTIONS</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-stone-300 font-light leading-relaxed">
            Everything you need to know about our Oxford Street sanctuary, from pre-appointment colour diagnostics and typical visit timings to bespoke Aveda botanical care routines.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-10">
          {/* Quick Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#dfb15b]/70 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. balayage, consultation, products, duration, Thursday)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0b130e]/90 border border-[#dfb15b]/30 focus:border-[#dfb15b] text-sm font-sans text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#dfb15b]/50 transition-all shadow-inner"
              id="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono uppercase text-stone-400 hover:text-[#dfb15b] px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {FAQ_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  id={`faq-filter-${category.id}`}
                  className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wider transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#dfb15b] to-[#c99e46] text-[#060907] font-semibold border-[#dfb15b] shadow-md shadow-[#dfb15b]/20 scale-105'
                      : 'bg-[#09110c]/80 text-stone-300 border-[#dfb15b]/20 hover:border-[#dfb15b]/50 hover:text-[#dfb15b]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* List Count and Global Toggle Action */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 px-2 pt-2 border-b border-white/5 pb-3">
            <span>
              Showing <strong className="text-[#dfb15b] font-semibold">{filteredItems.length}</strong> {filteredItems.length === 1 ? 'question' : 'questions'}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="text-stone-400 hover:text-[#dfb15b] transition-colors uppercase text-[11px]"
              >
                Expand All
              </button>
              <span className="text-stone-600">•</span>
              <button
                onClick={collapseAll}
                className="text-stone-400 hover:text-[#dfb15b] transition-colors uppercase text-[11px]"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List Container */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0b130e]/60 border border-white/10 space-y-3">
            <HelpCircle className="w-8 h-8 text-[#dfb15b] mx-auto opacity-70" />
            <p className="font-cinzel text-lg text-stone-200">No questions found matching your search.</p>
            <p className="text-xs text-stone-400 font-sans max-w-sm mx-auto">
              Please try different keywords or browse our categories above. Alternatively, contact our Oxford Street stylists directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-mono uppercase tracking-wider text-[#dfb15b] underline hover:text-[#f7f4ed]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4" id="faq-accordion-list">
            {filteredItems.map((item, index) => {
              const isOpen = openItemIds.includes(item.id);
              const formattedNumber = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? 'bg-gradient-to-b from-[#0e1b12] to-[#09110c] border-[#dfb15b]/60 shadow-xl shadow-black/60 ring-1 ring-[#dfb15b]/20'
                      : 'bg-[#080e0a]/80 border-white/10 hover:border-[#dfb15b]/40 hover:bg-[#0c1610]'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Numeric Index Badge */}
                      <span className="font-mono text-xs text-[#dfb15b] font-medium pt-0.5 shrink-0 px-2 py-1 rounded bg-[#dfb15b]/10 border border-[#dfb15b]/20">
                        {formattedNumber}
                      </span>

                      <div className="space-y-1.5">
                        {/* Meta Category Pill */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfb15b]">
                            {item.categoryLabel}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#122317] border border-[#dfb15b]/30 text-[#e8c682]">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* The Question Text */}
                        <h3
                          className={`text-base sm:text-lg font-cinzel font-medium transition-colors duration-200 leading-snug ${
                            isOpen
                              ? 'text-[#dfb15b]'
                              : 'text-[#f7f4ed] group-hover:text-[#dfb15b]'
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* Circular Gold Toggle Indicator */}
                    <div
                      className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 border ${
                        isOpen
                          ? 'bg-[#dfb15b] text-[#060907] border-[#dfb15b] rotate-180 shadow-md shadow-[#dfb15b]/30'
                          : 'bg-[#0b130e] text-[#dfb15b] border-[#dfb15b]/30 group-hover:border-[#dfb15b] group-hover:bg-[#dfb15b]/10'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-[#dfb15b]/15 space-y-4">
                          {/* Highlight Banner if available */}
                          {item.highlight && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070d09] border border-[#dfb15b]/25 text-[11px] font-mono text-[#e8c682]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb15b] shrink-0" />
                              <span>Key Takeaway: {item.highlight}</span>
                            </div>
                          )}

                          {/* Rendered Answer with line break support */}
                          <div className="text-xs sm:text-sm font-sans text-stone-300 leading-relaxed font-light space-y-2 whitespace-pre-line pl-1">
                            {item.answer}
                          </div>

                          {/* Contextual Action Link depending on category */}
                          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-cinzel">
                            <button
                              onClick={() => onOpenBooking && onOpenBooking(item.question)}
                              className="text-[#dfb15b] hover:text-[#f7f4ed] inline-flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
                            >
                              <span>Consult With Our Colourist</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>

                            <a
                              href={`tel:${BUSINESS_INFO.phoneRaw}`}
                              className="text-stone-400 hover:text-[#dfb15b] inline-flex items-center gap-1.5 transition-colors"
                            >
                              <Phone className="w-3 h-3 text-[#dfb15b]" />
                              <span>Direct Line: {BUSINESS_INFO.phone}</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Luxury "Still Have a Question?" Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0b130e] via-[#0e1b12] to-[#0b130e] border border-[#dfb15b]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#dfb15b]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#dfb15b]">
                <Leaf className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>PERSONALIZED HAIR CONCIERGE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-cinzel font-light text-[#f7f4ed]">
                Still Have Questions About Your Hair Journey?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-stone-300 font-light max-w-xl">
                Our Oxford Street team is delighted to discuss your hair history, formulate custom colour quotes, or arrange an in-person acoustic diagnostic consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#070e0a] border border-[#dfb15b]/40 hover:border-[#dfb15b] text-[#dfb15b] hover:text-[#f7f4ed] font-cinzel text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Salon</span>
              </a>

              <button
                onClick={() => onOpenBooking && onOpenBooking('Consultation Inquiries')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] font-cinzel text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#dfb15b]/20 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Diagnostic Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
