import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { Interactive3DViewer } from './components/Interactive3DViewer';
import { AboutSection } from './components/AboutSection';
import { VideoSection } from './components/VideoSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CinematicLiveBackground } from './components/CinematicLiveBackground';
import { BUSINESS_INFO } from './data/salonData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState('');

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedBookingService(serviceTitle || '');
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#060907] text-[#f7f4ed] overflow-x-hidden selection:bg-[#dfb15b] selection:text-[#060907]">
      {/* 1. Brand Loading Sequence */}
      <Preloader />

      {/* 2. Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* 3. Global 3D Ambient Botanical Particle Background */}
      <CinematicLiveBackground />

      {/* 4. Luxury Floating Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="relative z-10">
        {/* 5. Cinematic Hero Section with Live Three.js 3D Background */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. The Aveda Sanctuary Experience & Sensory Rituals */}
        <ExperienceSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Signature Services & Rituals Showcase */}
        <ServicesSection onSelectServiceForBooking={(srv) => handleOpenBooking(srv)} />

        {/* 8. Experiential 3D Botanical Artistry Sculpture */}
        <Interactive3DViewer />

        {/* 9. Brand Philosophy: More than a Salon */}
        <AboutSection />

        {/* 10. Cinematic Studio Atmosphere Video Reel */}
        <VideoSection />

        {/* 11. Curated Lookbook Portfolio & Filterable Gallery */}
        <GallerySection />

        {/* 12. 4 Foundational Pillars: Why Choose Haus Of Aveda */}
        <WhyChooseUs />

        {/* 13. Client Testimonials & Google Maps Rating (4.8/5 from 346 reviews) */}
        <TestimonialsSection />

        {/* 14. Frequently Asked Questions Accordion */}
        <FaqSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 15. High-Conversion Appointment Booking Section */}
        <BookingSection initialService={selectedBookingService} />

        {/* 15. Verified Studio Location, Embedded Map & Directions */}
        <ContactLocationSection />
      </main>

      {/* 16. Luxury Brand Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#060907]/92 backdrop-blur-xl border-t border-[#dfb15b]/20 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 rounded-xl border border-[#dfb15b]/30 bg-[#0b130e] text-[#dfb15b] font-cinzel text-xs font-semibold flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Salon</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#dfb15b] via-[#e8c682] to-[#c99e46] text-[#060907] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#dfb15b]/20 active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedBookingService}
      />
    </div>
  );
}
