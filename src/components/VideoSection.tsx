import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Eyebrow */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
            ATMOSPHERIC FILM
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-cinzel font-light text-[#f7f4ed]">
          THE ARTISTRY IN <span className="gold-gradient-text font-normal">MOTION</span>
        </h2>
        <p className="mt-2 text-stone-300 text-sm sm:text-base font-sans font-light">
          Step inside the serene botanical cadence of Haus Of Aveda on Oxford Street, Paddington.
        </p>
      </div>

      {/* Cinematic Video Container */}
      <div className="relative w-full h-[400px] sm:h-[550px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#dfb15b]/25 shadow-2xl group bg-[#060907]">
        {/* HTML5 Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-102 transition-transform duration-1000"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-hairdresser-cutting-hair-41130-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Darkness & Subtle Grain Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060907] via-black/30 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 subtle-film-grain opacity-30 pointer-events-none" />

        {/* Center Play/Pause Floating Luxury Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button
            onClick={togglePlay}
            className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-panel-gold border border-[#dfb15b]/40 flex items-center justify-center text-[#dfb15b] hover:text-white hover:scale-110 hover:shadow-2xl hover:shadow-[#dfb15b]/40 transition-all duration-300"
            aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-8 sm:h-8" />
            ) : (
              <Play className="w-6 h-6 sm:w-8 sm:h-8 translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Bottom Status Bar / Controls */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-stone-300 pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfb15b] animate-pulse" />
            <span className="font-mono text-[11px] tracking-widest uppercase text-stone-300">
              CINEMATIC REEL • HAUS OF AVEDA PADDINGTON
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 hover:border-[#dfb15b]/40 text-stone-300 hover:text-[#dfb15b] transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Studio Pill */}
        <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#dfb15b]/30 text-[10px] font-mono text-[#dfb15b]">
          184 Oxford St, Paddington NSW
        </div>
      </div>
    </section>
  );
};
