import React, { useState } from 'react';
import { X, Calendar, Phone, Send, CheckCircle2, MapPin, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, SERVICES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || SERVICES[0].title,
    date: '',
    time: '11:00 AM',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#dfb15b', '#f7f4ed', '#1b3b27'],
        });
      } catch {
        // Safe fallback
      }
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel-gold rounded-2xl p-6 sm:p-8 border border-[#dfb15b]/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-white/10 hover:border-white/30 text-stone-300 hover:text-white transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#dfb15b]/20 border border-[#dfb15b]/40 mx-auto flex items-center justify-center text-[#dfb15b]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-cinzel text-[#f7f4ed]">
              Appointment Requested
            </h3>
            <p className="text-xs sm:text-sm font-sans text-stone-300 leading-relaxed max-w-sm mx-auto font-light">
              Thank you, <span className="text-[#dfb15b] font-medium">{formData.name}</span>. Our team at Haus Of Aveda Paddington will contact you at <span className="text-[#dfb15b] font-medium">{formData.phone}</span> to finalize your appointment for <span className="text-white font-medium">{formData.service}</span>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#dfb15b] text-[#060907] font-semibold text-xs uppercase tracking-wider"
              >
                Done
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 rounded-xl border border-white/15 text-stone-200 text-xs font-mono flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>Call Salon</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#dfb15b]">
                HAUS OF AVEDA PADDINGTON
              </span>
              <h3 className="text-2xl font-cinzel text-[#f7f4ed] mt-1">
                Reserve Your Appointment
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                184 Oxford St, Paddington NSW 2021 • +61 410 581 602
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] uppercase font-sans text-stone-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-sm text-white placeholder:text-stone-500"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-sans text-stone-300 block mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+61 410 581 602"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-sm text-white placeholder:text-stone-500"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-sans text-stone-300 block mb-1">
                  Selected Ritual
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-sm text-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.number} — {s.title}
                    </option>
                  ))}
                  <option value="Complimentary Scalp & Hair Consultation">
                    Complimentary Scalp & Hair Consultation
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-sans text-stone-300 block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase font-sans text-stone-300 block mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-xs text-white"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase font-sans text-stone-300 block mb-1">
                  Special Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Hair texture, colour goals, or event notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#080d0a]/90 border border-white/10 focus:border-[#dfb15b] focus:outline-none text-xs text-white placeholder:text-stone-500 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] font-semibold text-xs uppercase tracking-widest hover:shadow-xl transition-all mt-4 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{isSubmitting ? 'Reserving...' : 'CONFIRM RESERVATION'}</span>
            </button>

            <p className="text-center text-[10px] text-stone-400 font-mono pt-1">
              Direct Desk: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#dfb15b] underline">{BUSINESS_INFO.phone}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
