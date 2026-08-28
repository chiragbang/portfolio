"use client";

import * as React from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Hero 3D centerpiece: a distorted, slowly-rotating icosphere in the
 * indigo→violet palette, wrapped in a wireframe shell, with an ambient
 * sparkle field. The whole group gently parallaxes toward the cursor.
 *
 * This module is dynamically imported with `ssr: false` (see Hero3D) so Three
 * never ships in the initial bundle and never runs during SSR.
 */

function Blob(props: ThreeElements["group"]) {
  const group = React.useRef<THREE.Group>(null);
  const mesh = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Slow idle spin
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18;
      mesh.current.rotation.z += delta * 0.04;
    }
    // Parallax: ease the group toward the pointer position
    if (group.current) {
      const targetX = state.pointer.y * 0.25;
      const targetY = state.pointer.x * 0.35;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.05,
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.05,
      );
    }
  });

  return (
    <group ref={group} {...props}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
        {/* Solid distorted core */}
        <mesh ref={mesh} scale={1.35}>
          <icosahedronGeometry args={[1, 14]} />
          <MeshDistortMaterial
            color="#6366F1"
            emissive="#4338CA"
            emissiveIntensity={0.25}
            roughness={0.18}
            metalness={0.45}
            distort={0.38}
            speed={1.6}
          />
        </mesh>

        {/* Wireframe shell for structure */}
        <mesh scale={1.7}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial
            color="#8B5CF6"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene({ active }: { active: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={2.4} color="#8B5CF6" />
      <pointLight position={[-4, -2, 2]} intensity={1.8} color="#22D3EE" />
      <directionalLight position={[0, 4, 2]} intensity={0.8} color="#ffffff" />

      <Blob position={[0, 0, 0]} />

      <Sparkles
        count={42}
        scale={6}
        size={2.2}
        speed={0.3}
        opacity={0.6}
        color="#A5B4FC"
      />
    </Canvas>
  );
}
