import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060907, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: window.devicePixelRatio < 2,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Warm champagne and subtle forest green lighting
    const ambientLight = new THREE.AmbientLight(0x0e1711, 2.5);
    scene.add(ambientLight);

    const keyGoldLight = new THREE.PointLight(0xdfb15b, 4.8, 22);
    keyGoldLight.position.set(4, 3, 5);
    scene.add(keyGoldLight);

    const rimForestLight = new THREE.PointLight(0x284f35, 3.2, 18);
    rimForestLight.position.set(-4, -2, 3);
    scene.add(rimForestLight);

    const bronzeLight = new THREE.PointLight(0x9e7238, 2.4, 14);
    bronzeLight.position.set(0, -4, 2);
    scene.add(bronzeLight);

    // 1. Floating Botanical Gold Dust Particle Constellation
    const particleCount = isMobile ? 240 : 550;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1;
      particleScales[i] = Math.random() * 0.04 + 0.015;
      particleSpeeds[i] = Math.random() * 0.003 + 0.001;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom Particle Canvas Texture for soft champagne halo glow
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 246, 229, 1)');
    gradient.addColorStop(0.3, 'rgba(223, 177, 91, 0.65)');
    gradient.addColorStop(0.7, 'rgba(158, 114, 56, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.2 : 0.26,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Abstract Salon-Inspired Sculptural Ribbon (Hair Wave / Organic Botanical Silk)
    const ribbonGroup = new THREE.Group();
    ribbonGroup.position.set(isMobile ? 0.8 : 2.5, isMobile ? -0.5 : 0.2, -0.5);

    const knotGeometry = new THREE.TorusKnotGeometry(
      1.7,
      0.35,
      isMobile ? 80 : 160,
      isMobile ? 24 : 48,
      2,
      3
    );

    const luxuryMetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f1712,
      emissive: 0x141f17,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 0.95,
      clearcoatRoughness: 0.12,
      reflectivity: 0.95,
      wireframe: false,
    });

    const ribbonMesh = new THREE.Mesh(knotGeometry, luxuryMetalMaterial);
    ribbonGroup.add(ribbonMesh);

    // Champagne gold wireframe aura
    const auraWireGeometry = new THREE.TorusKnotGeometry(1.82, 0.38, 48, 12, 2, 3);
    const auraWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xdfb15b,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const auraWireMesh = new THREE.Mesh(auraWireGeometry, auraWireMaterial);
    ribbonGroup.add(auraWireMesh);

    // Secondary delicate accent ring
    const ringGeometry = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xe8c682,
      transparent: true,
      opacity: 0.28,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI * 0.35;
    ribbonGroup.add(ringMesh);

    scene.add(ribbonGroup);

    // Mouse Parallax Handling
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (event.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Observer
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ribbonMesh.rotation.x = elapsedTime * 0.12;
      ribbonMesh.rotation.y = elapsedTime * 0.18;
      auraWireMesh.rotation.x = elapsedTime * 0.12;
      auraWireMesh.rotation.y = elapsedTime * 0.18;
      ringMesh.rotation.z = elapsedTime * 0.08;

      ribbonGroup.position.y = (isMobile ? -0.5 : 0.2) + Math.sin(elapsedTime * 0.7) * 0.2;

      keyGoldLight.position.x = 4 + Math.sin(elapsedTime * 0.5) * 2;
      keyGoldLight.position.y = 3 + Math.cos(elapsedTime * 0.6) * 1.5;

      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const yIndex = i * 3 + 1;
        positions[yIndex] += particleSpeeds[i];
        if (positions[yIndex] > 7) {
          positions[yIndex] = -7;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsedTime * 0.015;

      camera.position.x = mouseX * 0.7;
      camera.position.y = -mouseY * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      knotGeometry.dispose();
      auraWireGeometry.dispose();
      ringGeometry.dispose();
      luxuryMetalMaterial.dispose();
      auraWireMaterial.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {!webglSupported && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a140e] via-[#060907] to-[#040605]">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#dfb15b]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-10 w-72 h-72 rounded-full bg-[#1b3b27]/15 blur-3xl" />
        </div>
      )}
      <div className="absolute inset-0 bg-radial from-transparent via-[#060907]/60 to-[#060907] pointer-events-none" />
      <div className="absolute inset-0 subtle-film-grain opacity-50 pointer-events-none" />
    </div>
  );
};
