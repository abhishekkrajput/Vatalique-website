
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Define three.js elements as components to resolve JSX intrinsic element type errors
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const Points = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;
const Fog = 'fog' as any;

const NeuralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#111111"
          attach="material"
          distort={0.45}
          speed={4}
          roughness={0.1}
          metalness={1}
        />
      </Sphere>
      <Sphere args={[1.05, 64, 64]} scale={2}>
        {/* Fix: use defined component to avoid intrinsic element errors */}
        <MeshStandardMaterial
          color="#00ffff"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>
    </Float>
  );
};

const InteractiveParticles = ({ count = 3000 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initialPos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 10 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      pos.set([x, y, z], i * 3);
      initialPos.set([x, y, z], i * 3);
    }
    return [pos, initialPos];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    
    // Target mouse in world space (simplified)
    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Subtle orbital motion
      const speed = 0.02 + (i % 10) * 0.001;
      const angle = time * speed + (i * 0.1);
      
      // Combine initial position with some noise and mouse attraction
      const dx = posAttr.array[ix] - targetX;
      const dy = posAttr.array[iy] - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Pull particles towards or away from mouse subtly
      const force = Math.max(0, (5 - dist) * 0.01);
      
      posAttr.array[ix] += Math.cos(angle) * 0.01 - dx * force;
      posAttr.array[iy] += Math.sin(angle) * 0.01 - dy * force;
      
      // Drift back to shell if too far
      const currentR = Math.sqrt(
        posAttr.array[ix]**2 + posAttr.array[iy]**2 + posAttr.array[iz]**2
      );
      if (currentR > 25) {
         posAttr.array[ix] *= 0.99;
         posAttr.array[iy] *= 0.99;
         posAttr.array[iz] *= 0.99;
      }
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0005;
  });

  return (
    /* Fix: use defined components to avoid intrinsic element errors */
    <Points ref={pointsRef}>
      <BufferGeometry>
        <BufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </BufferGeometry>
      <PointsMaterial 
        size={0.025} 
        color="#7b61ff" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const TwinklingStars = ({ count = 2000 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
      sz[i] = Math.random();
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const material = pointsRef.current.material as THREE.PointsMaterial;
    
    // Twinkle effect using time
    material.opacity = 0.2 + Math.sin(time * 0.5) * 0.1;
    
    // Subtle parallax based on mouse
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 2, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 2, 0.05);
  });

  return (
    /* Fix: use defined components to avoid intrinsic element errors */
    <Points ref={pointsRef}>
      <BufferGeometry>
        <BufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </BufferGeometry>
      <PointsMaterial 
        size={0.1} 
        color="#ffffff" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true}
      />
    </Points>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        {/* Fix: use defined components to avoid intrinsic element errors */}
        <AmbientLight intensity={0.4} />
        <PointLight position={[15, 15, 15]} color="#00ffff" intensity={2.5} />
        <PointLight position={[-15, -15, -15]} color="#7b61ff" intensity={2.5} />
        
        <NeuralCore />
        <InteractiveParticles />
        <TwinklingStars />
        
        {/* Fix: use defined component to avoid intrinsic element errors */}
        <Fog attach="fog" args={['#050505', 5, 40]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
