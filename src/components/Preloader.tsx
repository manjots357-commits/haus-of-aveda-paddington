import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060907] text-stone-100"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-[#1e3b28]/20 blur-[120px] pointer-events-none" />
          <div className="absolute w-60 h-60 rounded-full bg-[#dfb15b]/10 blur-[100px] pointer-events-none" />

          {/* Luxury Brand Crest / Monogram Reveal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center relative z-10 space-y-3 px-4"
          >
            <div className="w-16 h-16 mx-auto mb-4 border border-[#dfb15b]/40 rounded-full flex items-center justify-center relative bg-[#0b130e]/80">
              <span className="font-cinzel text-xl font-medium text-[#e8c682] tracking-wider">
                HA
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-t border-[#dfb15b]"
              />
            </div>

            <p className="text-[10px] tracking-[0.35em] text-[#dfb15b]/90 uppercase font-sans">
              184 Oxford St • Paddington NSW
            </p>

            <h1 className="text-2xl sm:text-3xl font-cinzel font-light tracking-[0.22em] text-[#f7f4ed]">
              HAUS OF AVEDA
            </h1>

            <p className="text-xs font-serif italic text-stone-400 tracking-[0.25em]">
              PADDINGTON
            </p>
          </motion.div>

          {/* Minimal Line Progress */}
          <div className="w-44 h-[1px] bg-stone-800/80 mt-8 relative overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dfb15b] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
