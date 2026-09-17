import React, { useState } from 'react';
import { Calendar, Phone, Send, CheckCircle2, Clock, MapPin, ExternalLink, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, SERVICES } from '../data/salonData';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || SERVICES[0].title,
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#dfb15b', '#f7f4ed', '#1b3b27'],
        });
      } catch {
        // Fallback silently if confetti blocked
      }
    }, 600);
  };

  return (
    <section id="booking" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Direct Call CTAs */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20">
            <Calendar className="w-3.5 h-3.5 text-[#dfb15b]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
              SALON RESERVATION
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-cinzel font-light text-[#f7f4ed] leading-[1.1]">
              BOOK YOUR <span className="gold-gradient-text font-normal block">APPOINTMENT</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-stone-300 leading-relaxed font-light">
              Experience the art of beautiful hair in Paddington. Select your preferred botanical ritual below, or reserve directly through our official booking portal.
            </p>
          </div>

          {/* Quick Direct Phone Box */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel-gold border border-[#dfb15b]/30 space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#dfb15b] block">
              INSTANT PHONE RESERVATION
            </span>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs font-sans text-stone-400">Haus Of Aveda Desk</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  id="booking-phone-direct-btn"
                  className="text-xl sm:text-2xl font-cinzel font-semibold text-[#f7f4ed] hover:text-[#dfb15b] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 rounded-full bg-[#dfb15b] hover:bg-[#e8c682] text-[#060907] font-semibold text-xs tracking-wider uppercase active:scale-95 transition-all flex items-center gap-2 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL SALON</span>
              </a>
            </div>

            <div className="pt-3 border-t border-[#dfb15b]/20 flex items-center justify-between text-xs text-stone-300 font-sans">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>Tue – Sat (Late Thu 8 PM)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>Paddington, Sydney</span>
              </div>
            </div>
          </div>

          {/* Official Website Direct Option */}
          <a
            href={BUSINESS_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl glass-panel border border-[#dfb15b]/20 hover:border-[#dfb15b]/50 text-stone-200 hover:text-[#dfb15b] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0b130e] border border-[#dfb15b]/30 text-[#dfb15b] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-sans font-medium block">Official Salon Portal</span>
                <span className="text-[11px] text-stone-400 font-mono">{BUSINESS_INFO.websiteDisplay}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#dfb15b] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Right Column: Appointment Form Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel-gold rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#dfb15b]/25 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#dfb15b]/20 border border-[#dfb15b]/40 mx-auto flex items-center justify-center text-[#dfb15b]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-cinzel text-[#f7f4ed]">
                  Appointment Request Received
                </h3>
                <p className="text-sm font-sans text-stone-300 max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong className="text-[#dfb15b]">{formData.name}</strong>. Our team at Haus Of Aveda Paddington will connect with you at <strong className="text-[#dfb15b]">{formData.phone}</strong> to confirm your appointment for <strong className="text-white">{formData.service}</strong>.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: SERVICES[0].title,
                        preferredDate: '',
                        preferredTime: '11:00 AM',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-sans text-stone-300 hover:text-white"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-6 py-2.5 rounded-full bg-[#dfb15b] text-[#060907] font-semibold text-xs uppercase"
                  >
                    Call Salon Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-cinzel text-[#f7f4ed]">
                    Schedule Your Visit
                  </h3>
                  <p className="text-xs text-stone-400 font-sans mt-1 font-light">
                    184 Oxford St, Paddington NSW 2021 • +61 410 581 602
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans text-stone-300 tracking-wider uppercase block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-stone-100 text-sm font-sans placeholder:text-stone-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans text-stone-300 tracking-wider uppercase block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+61 410 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-stone-100 text-sm font-sans placeholder:text-stone-500"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-stone-300 tracking-wider uppercase block">
                    Desired Ritual / Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-stone-100 text-sm font-sans"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#0b130e] text-white">
                        {srv.number} — {srv.title}
                      </option>
                    ))}
                    <option value="Complimentary Consultation" className="bg-[#0b130e] text-white">
                      Complimentary In-Person Hair & Scalp Consultation
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans text-stone-300 tracking-wider uppercase block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-stone-100 text-sm font-sans"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans text-stone-300 tracking-wider uppercase block">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-stone-100 text-sm font-sans"
                    >
                      <option value="10:00 AM">10:00 AM (Morning)</option>
                      <option value="12:00 PM">12:00 PM (Midday)</option>
                      <option value="02:30 PM">02:30 PM (Afternoon)</option>
                      <option value="04:30 PM">04:30 PM (Late Afternoon)</option>
                      <option value="06:30 PM">06:30 PM (Thursday Evening Salon)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-stone-300 tracking-wider uppercase block">
                    Hair History or Specific Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your hair type, recent colour history, or styling preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-stone-100 text-sm font-sans placeholder:text-stone-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  id="booking-submit-btn"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:shadow-2xl hover:shadow-[#dfb15b]/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Confirming Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>REQUEST APPOINTMENT</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
