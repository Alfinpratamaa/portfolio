"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(
    () => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }),
    []
  );
  const posRef = useRef<Float32Array>(positions.slice());

  useFrame((state, delta) => {
    if (!ref.current) return;

    const { mouse } = state;
    const pos = posRef.current;

    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i];
      const y = pos[i + 1];

      const mx = mouse.x * 1.2;
      const my = mouse.y * 1.2;

      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 0.25) {
        const force = (0.25 - dist) * 0.03;
        pos[i] += dx * force;
        pos[i + 1] += dy * force;
      }
    }

    // kasih tau three.js kalau posisi berubah
    ref.current.geometry.attributes.position.needsUpdate = true;

    // rotasi background biar tetap hidup
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={posRef.current} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => (
  <div className="w-full h-screen fixed inset-0 z-[1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;
