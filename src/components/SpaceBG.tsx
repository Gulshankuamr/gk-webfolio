"use client";

import { useRef } from "react";
import type { Points } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function MovingStars() {
  const starsRef = useRef<Points | null>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={3}
      saturation={0}
      speed={1}
    />
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed bg-gradient-to-b from-purple-950 to-indigo-500  inset-0 z-[-1]">
      {/* You can style these classes in your Tailwind CSS or global CSS */}
      <div className="absolute inset-0 cosmic-gradient"></div>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <MovingStars />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 planet-horizon"></div>
    </div>
  );
}
