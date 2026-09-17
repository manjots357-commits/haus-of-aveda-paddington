import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Eye, Rotate3d, Compass } from 'lucide-react';

interface MaterialOption {
  id: string;
  name: string;
  color: number;
  emissive: number;
  roughness: number;
  metalness: number;
  clearcoat: number;
  accentClass: string;
}

const MATERIALS: MaterialOption[] = [
  {
    id: 'gold',
    name: 'Champagne Gold',
    color: 0xdfb15b,
    emissive: 0x2e2007,
    roughness: 0.18,
    metalness: 0.92,
    clearcoat: 0.85,
    accentClass: 'bg-[#dfb15b] border-[#dfb15b]',
  },
  {
    id: 'forest',
    name: 'Forest Olive',
    color: 0x142b1d,
    emissive: 0x05130b,
    roughness: 0.22,
    metalness: 0.65,
    clearcoat: 0.95,
    accentClass: 'bg-[#1b3b27] border-[#2d5a3c]',
  },
  {
    id: 'bronze',
    name: 'Antique Bronze',
    color: 0x9e7238,
    emissive: 0x221506,
    roughness: 0.24,
    metalness: 0.88,
    clearcoat: 0.7,
    accentClass: 'bg-[#9e7238] border-[#c4924d]',
  },
  {
    id: 'cream',
    name: 'Aveda Botanical Platinum',
    color: 0xf7f4ed,
    emissive: 0x1d1a15,
    roughness: 0.12,
    metalness: 0.75,
    clearcoat: 1.0,
    accentClass: 'bg-[#f7f4ed] border-stone-300',
  },
];

const SCULPTURE_MODES = [
  {
    id: 'geometry',
    title: 'Precision Architecture',
    concept: 'Harmonic Geometry',
    detail: 'Reflecting London-precision haircutting and structural ergonomics crafted specifically for your facial contours at Haus Of Aveda.',
  },
  {
    id: 'botanical',
    title: 'Pure Plant Essence',
    concept: 'Organic Vitality',
    detail: 'Symbolizing certified organic botanical extracts and 100% vegan conditioning lipids restoring inner cuticle strength.',
  },
  {
    id: 'luminance',
    title: 'Balayage Dimension',
    concept: 'Solar Refraction',
    detail: 'Channeling Sydney sunlight through micro-fine hand-painted highlights, tone glosses, and effortless beach-to-evening glow.',
  },
];

export const Interactive3DViewer: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [activeMaterial, setActiveMaterial] = useState<MaterialOption>(MATERIALS[0]);
  const [activeModeIndex, setActiveModeIndex] = useState<number>(0);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const meshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.Mesh | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    try {
      const test = document.createElement('canvas');
      if (!test.getContext('webgl')) return;
    } catch {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0x0f1c13, 2.8);
    scene.add(ambient);

    const mainLight = new THREE.PointLight(0xfff0d0, 6.0, 20);
    mainLight.position.set(3, 4, 4);
    scene.add(mainLight);
    pointLightRef.current = mainLight;

    const fillLight = new THREE.PointLight(0x2d5a3c, 3.2, 16);
    fillLight.position.set(-4, -3, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xdfb15b, 1.5);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // Base sculpture: Icosahedron / Faceted Luxury Gem with smooth dual layer
    const geometry = new THREE.IcosahedronGeometry(2.1, 2);
    const material = new THREE.MeshPhysicalMaterial({
      color: activeMaterial.color,
      emissive: activeMaterial.emissive,
      roughness: activeMaterial.roughness,
      metalness: activeMaterial.metalness,
      clearcoat: activeMaterial.clearcoat,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
      flatShading: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Outer crystalline wireframe accent
    const wireGeom = new THREE.IcosahedronGeometry(2.28, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xdfb15b,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    scene.add(wireMesh);
    wireMeshRef.current = wireMesh;

    // Outer orbital ring
    const orbitGeom = new THREE.TorusGeometry(3.15, 0.016, 16, 120);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0xdfb15b,
      transparent: true,
      opacity: 0.35,
    });
    const orbitMesh = new THREE.Mesh(orbitGeom, orbitMat);
    orbitMesh.rotation.x = Math.PI * 0.42;
    scene.add(orbitMesh);

    // Pointer Interaction
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousPointerPosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousPointerPosition.x;
      const deltaY = clientY - previousPointerPosition.y;

      targetRotation.y += deltaX * 0.008;
      targetRotation.x += deltaY * 0.008;

      previousPointerPosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domElem.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (autoRotate && !isDragging) {
        targetRotation.y += 0.35 * delta;
        targetRotation.x += Math.sin(elapsed * 0.6) * 0.003;
      }

      mesh.rotation.y += (targetRotation.y - mesh.rotation.y) * 0.08;
      mesh.rotation.x += (targetRotation.x - mesh.rotation.x) * 0.08;

      wireMesh.rotation.y = mesh.rotation.y * -0.6;
      wireMesh.rotation.x = mesh.rotation.x * 0.8;

      orbitMesh.rotation.z = elapsed * 0.12;

      mainLight.position.x = 3 + Math.sin(elapsed * 0.8) * 1.5;
      mainLight.position.y = 4 + Math.cos(elapsed * 0.7) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElem.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElem.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      orbitGeom.dispose();
      orbitMat.dispose();
      renderer.dispose();
    };
  }, [autoRotate]);

  useEffect(() => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshPhysicalMaterial;
    mat.color.setHex(activeMaterial.color);
    mat.emissive.setHex(activeMaterial.emissive);
    mat.roughness = activeMaterial.roughness;
    mat.metalness = activeMaterial.metalness;
    mat.clearcoat = activeMaterial.clearcoat;
    mat.needsUpdate = true;
  }, [activeMaterial]);

  const currentMode = SCULPTURE_MODES[activeModeIndex];

  return (
    <div className="w-full relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#dfb15b]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b130e] border border-[#dfb15b]/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#dfb15b]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c682] font-medium font-sans">
            3D EXPERIENTIAL LAB
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-cinzel font-light text-[#f7f4ed] tracking-wide">
          THE SCULPTURE OF <span className="gold-gradient-text font-normal">BOTANICAL ARTISTRY</span>
        </h2>
        <p className="mt-4 text-stone-300 text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed font-light">
          Interact in real-time with our 3D sculpture embodying Haus Of Aveda Paddington: Precision Architecture, Pure Plant Essence, and Balayage Dimension.
        </p>
      </div>

      {/* Main 3D Stage Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-gold rounded-2xl p-6 sm:p-10 relative border border-[#dfb15b]/25 shadow-2xl">
        {/* Left Column: Conceptual Pillar Selector */}
        <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.2em] text-[#dfb15b] font-cinzel block mb-3">
            Exploration Modes
          </span>
          {SCULPTURE_MODES.map((mode, index) => {
            const isSelected = activeModeIndex === index;
            return (
              <button
                key={mode.id}
                id={`sculpture-mode-${mode.id}`}
                onClick={() => setActiveModeIndex(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#0d1712] border-[#dfb15b]/50 shadow-lg shadow-black/60 translate-x-1'
                    : 'bg-[#080d0a]/60 border-white/5 hover:border-[#dfb15b]/30 hover:bg-[#0b130e]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#dfb15b] tracking-widest">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-sans">
                    {mode.concept}
                  </span>
                </div>
                <h4 className="text-lg font-cinzel text-[#f7f4ed] mt-1 font-medium">
                  {mode.title}
                </h4>
                {isSelected && (
                  <p className="text-xs text-stone-300 mt-2 font-sans leading-relaxed font-light transition-opacity">
                    {mode.detail}
                  </p>
                )}
              </button>
            );
          })}

          {/* Interaction Guide */}
          <div className="pt-4 flex items-center justify-between text-xs text-stone-400 border-t border-white/5 font-sans">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#dfb15b]" />
              <span>Drag to orbit 360°</span>
            </div>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className="flex items-center gap-1 hover:text-[#dfb15b] transition-colors"
            >
              <Rotate3d className="w-3.5 h-3.5" />
              <span>{autoRotate ? 'Pause Orbit' : 'Resume Orbit'}</span>
            </button>
          </div>
        </div>

        {/* Center/Right Column: 3D Interactive Canvas */}
        <div className="lg:col-span-8 relative order-1 lg:order-2">
          <div className="relative w-full h-[380px] sm:h-[480px] rounded-xl overflow-hidden bg-radial from-[#0a150f] via-[#060907] to-[#040605] border border-[#dfb15b]/20 cursor-grab active:cursor-grabbing">
            {/* Live Three.js Canvas Container */}
            <div ref={canvasContainerRef} className="w-full h-full" />

            {/* Interactive Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#dfb15b]/25 text-xs text-stone-300">
              <span className={`w-2 h-2 rounded-full ${isInteracting ? 'bg-[#dfb15b] animate-ping' : 'bg-[#dfb15b]'}`} />
              <span className="font-mono text-[10px] tracking-wide text-stone-200">
                {isInteracting ? 'USER ORBIT ACTIVE' : 'LIVE 3D WEBGL'}
              </span>
            </div>

            {/* Current Mode Overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs pointer-events-none">
              <span className="text-[10px] tracking-[0.25em] text-[#dfb15b] uppercase font-mono">
                BOTANICAL SCULPTURE
              </span>
              <p className="text-lg font-cinzel text-[#f7f4ed] font-medium">
                {currentMode.title}
              </p>
            </div>

            {/* Material Finishes Palette Bar */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/80 backdrop-blur-xl border border-[#dfb15b]/30 p-2 rounded-xl flex items-center gap-2 shadow-2xl">
              <span className="text-[10px] text-stone-400 tracking-wider uppercase font-sans px-2 hidden sm:inline">
                Finish:
              </span>
              {MATERIALS.map((mat) => {
                const isActive = activeMaterial.id === mat.id;
                return (
                  <button
                    key={mat.id}
                    id={`material-btn-${mat.id}`}
                    onClick={() => setActiveMaterial(mat)}
                    title={mat.name}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all ${
                      mat.accentClass
                    } ${
                      isActive
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110 shadow-lg'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    {isActive && <Eye className="w-3 h-3 text-stone-900" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
