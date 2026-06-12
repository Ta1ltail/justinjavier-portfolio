"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import { useViewerStore, type MaterialMode } from "@/stores/use-viewer-store";
import type { ModelKey } from "@/lib/data";

function useShowcaseMaterial(mode: MaterialMode): THREE.Material {
  return useMemo(() => {
    switch (mode) {
      case "wireframe":
        return new THREE.MeshBasicMaterial({
          wireframe: true,
          color: new THREE.Color("#6e8bff"),
        });
      case "normals":
        return new THREE.MeshNormalMaterial();
      case "shaded":
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#9aa4b8"),
          metalness: 0.85,
          roughness: 0.25,
        });
    }
  }, [mode]);
}

function useShowcaseGeometry(model: ModelKey): THREE.BufferGeometry {
  return useMemo(() => {
    switch (model) {
      case "knot":
        return new THREE.TorusKnotGeometry(0.9, 0.3, 180, 24);
      case "gem":
        return new THREE.IcosahedronGeometry(1.2, 0);
      case "column":
        return new THREE.CapsuleGeometry(0.55, 1.6, 6, 24);
    }
  }, [model]);
}

function ShowcaseMesh() {
  const model = useViewerStore((s) => s.model);
  const mode = useViewerStore((s) => s.mode);
  const geometry = useShowcaseGeometry(model);
  const material = useShowcaseMaterial(mode);

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh geometry={geometry} material={material} castShadow />
    </Float>
  );
}

export default function ShowcaseScene() {
  const autoRotate = useViewerStore((s) => s.autoRotate);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="touch-none"
      aria-label="Interactive 3D model viewer"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 3]} intensity={2.6} />
      <directionalLight
        position={[-5, 2, -4]}
        intensity={0.8}
        color="#6e8bff"
      />
      <pointLight position={[0, -3, 2]} intensity={0.5} color="#a78bfa" />

      <ShowcaseMesh />

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.4}
        scale={8}
        blur={2.4}
        far={3}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={autoRotate}
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
      />
    </Canvas>
  );
}
