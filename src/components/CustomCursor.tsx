import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A'
        );
        setIsPointer(isClickable);

        const hasHoverEffect = Boolean(target.closest('[data-cursor-hover]'));
        setIsHovering(hasHoverEffect);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#dfb15b] pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 0.5 : 1})`,
        }}
      />
      {/* Cinematic Ring Halo */}
      <div
        className="fixed top-0 left-0 rounded-full border border-[#dfb15b]/40 pointer-events-none z-[9998] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isHovering ? 2.2 : isPointer ? 1.5 : 1
          })`,
          width: '32px',
          height: '32px',
          backgroundColor: isHovering ? 'rgba(223, 177, 91, 0.12)' : 'transparent',
          borderColor: isPointer ? 'rgba(232, 198, 130, 0.7)' : 'rgba(223, 177, 91, 0.35)',
        }}
      />
    </>
  );
};
