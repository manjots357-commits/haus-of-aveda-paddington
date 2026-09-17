import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CinematicLiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060907, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Floating Champagne Gold & Forest Green Botanical Particle Field
    const particleCount = window.innerWidth < 768 ? 220 : 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const goldColor = new THREE.Color('#dfb15b');
    const bronzeColor = new THREE.Color('#9e7238');
    const forestColor = new THREE.Color('#2d5038');
    const creamColor = new THREE.Color('#f7f4ed');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const colorChoice = Math.random();
      let c = goldColor;
      if (colorChoice < 0.45) c = goldColor;
      else if (colorChoice < 0.7) c = bronzeColor;
      else if (colorChoice < 0.9) c = forestColor;
      else c = creamColor;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      scales[i] = Math.random() * 2.2 + 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Soft circular particle texture
    const canvasMap = document.createElement('canvas');
    canvasMap.width = 32;
    canvasMap.height = 32;
    const ctx = canvasMap.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.35, 'rgba(255,240,200,0.7)');
      grad.addColorStop(0.8, 'rgba(223,177,91,0.15)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvasMap);

    const material = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Ethereal floating ribbon ring (representing hair flow & organic botanical waves)
    const ringGeo = new THREE.TorusGeometry(38, 0.45, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xdfb15b,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });
    const ribbonRing = new THREE.Mesh(ringGeo, ringMat);
    ribbonRing.rotation.x = Math.PI / 3;
    scene.add(ribbonRing);

    // Mouse Tracking with smooth inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 16;
      targetY = (e.clientY / window.innerHeight - 0.5) * 16;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll parallax reaction
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY || 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement following cursor
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;

      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(0, 0, 0);

      // Particle rotation & gentle floating
      particles.rotation.y = elapsedTime * 0.035;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08;

      // Scroll effect on particle position
      particles.position.y = -scrollY * 0.02;

      // Ribbon ring slow geometric dance
      ribbonRing.rotation.z = elapsedTime * 0.02;
      ribbonRing.rotation.y = Math.cos(elapsedTime * 0.025) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060907]">
      {/* 1. Looping Ambient Salon Video Background (Subtle, Muted, Darkened) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.22] filter saturate-[1.2] brightness-[0.7] contrast-[1.1] transform scale-105"
        poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-hairdresser-cutting-hair-41130-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. Deep Forest Green & Dark Obsidian Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060907]/90 via-[#0a120d]/70 to-[#060907]/95 mix-blend-multiply" />

      {/* 3. Continuously Drifting Cinematic Light Orbs (Gold, Bronze & Dark Forest) */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#1b3826]/20 blur-[160px] animate-pulse"
        style={{ animationDuration: '9s' }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-[#dfb15b]/10 blur-[180px] animate-pulse"
        style={{ animationDuration: '13s' }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[650px] h-[650px] rounded-full bg-[#9e7238]/12 blur-[170px] animate-pulse"
        style={{ animationDuration: '11s' }}
      />

      {/* 4. Live Three.js WebGL Particle & Gold Nebula Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Subtle Film Grain */}
      <div className="absolute inset-0 subtle-film-grain opacity-40" />
    </div>
  );
};
