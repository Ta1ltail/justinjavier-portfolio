"use client";

import { useEffect, useMemo, useRef, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Center,
  Html,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { useViewerStore, type MaterialMode } from "@/stores/use-viewer-store";
import type { ModelKey } from "@/lib/data";

const MODEL_CONFIG: Record<
  ModelKey,
  { url: string; scale: number; y: number }
> = {
  kurbs: { url: "/models/kurbs.glb", scale: 1.0, y: 0 },
  switch: { url: "/models/switch.glb", scale: 1.0, y: 0 },
  basketball: { url: "/models/basketball.glb", scale: 1.0, y: 0 },
};

function applyMode(scene: THREE.Object3D, mode: MaterialMode) {
  scene.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.castShadow = true;
    if (!mesh.userData.originalMaterial) {
      mesh.userData.originalMaterial = mesh.material;
    }
    if (mode === "wireframe") {
      mesh.material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: new THREE.Color("#6e8bff"),
      });
    } else if (mode === "normals") {
      mesh.material = new THREE.MeshNormalMaterial();
    } else {
      mesh.material = mesh.userData.originalMaterial as THREE.Material;
    }
  });
}

function GLBModel({
  url,
  mode,
  scale,
  y,
}: {
  url: string;
  mode: MaterialMode;
  scale: number;
  y: number;
}) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  useEffect(() => applyMode(cloned, mode), [cloned, mode]);
  return (
    <Center position={[0, y, 0]}>
      <primitive object={cloned} scale={scale} />
    </Center>
  );
}

useGLTF.preload(MODEL_CONFIG.kurbs.url);
useGLTF.preload(MODEL_CONFIG.switch.url);
useGLTF.preload(MODEL_CONFIG.basketball.url);

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="h-1 w-24 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#6e8bff] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-white/60">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

// Restores each model's saved camera view on switch, and saves it back on change
function CameraController({
  controlsRef,
}: {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}) {
  const { camera } = useThree();
  const model = useViewerStore((s) => s.model);
  const views = useViewerStore((s) => s.views);
  const saveView = useViewerStore((s) => s.saveView);
  const prevModel = useRef<ModelKey | null>(null);

  // On model switch: save the outgoing model's view, then load the new one's
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    if (prevModel.current && prevModel.current !== model) {
      saveView(prevModel.current, {
        position: [camera.position.x, camera.position.y, camera.position.z],
        target: [controls.target.x, controls.target.y, controls.target.z],
      });
    }

    const v = views[model];
    camera.position.set(...v.position);
    controls.target.set(...v.target);
    controls.update();
    prevModel.current = model;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  return null;
}

function ShowcaseContent() {
  const model = useViewerStore((s) => s.model);
  const mode = useViewerStore((s) => s.mode);
  const c = MODEL_CONFIG[model];
  return (
    <GLBModel key={model} url={c.url} mode={mode} scale={c.scale} y={c.y} />
  );
}

export default function ShowcaseScene({
  controlsRef,
}: {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}) {
  const autoRotate = useViewerStore((s) => s.autoRotate);
  const active = useViewerStore((s) => s.active);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 4.2], fov: 40 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
      className="touch-none"
      aria-label="Interactive 3D model viewer"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 4]} intensity={2.2} />
      <directionalLight
        position={[-6, 3, -5]}
        intensity={0.7}
        color="#6e8bff"
      />
      <pointLight position={[0, -3, 2]} intensity={0.4} color="#a78bfa" />

      <Suspense fallback={<Loader />}>
        <ShowcaseContent />
      </Suspense>

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={4}
        resolution={512}
      />

      <CameraController controlsRef={controlsRef} />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan
        enableZoom={active}
        minDistance={1.5}
        maxDistance={12}
        autoRotate={autoRotate}
        autoRotateSpeed={1.1}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
