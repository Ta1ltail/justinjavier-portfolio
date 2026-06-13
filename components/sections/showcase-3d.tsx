"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  RotateCw,
  Loader2,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Maximize,
} from "lucide-react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { showcaseModels } from "@/lib/data";
import { useViewerStore, type MaterialMode } from "@/stores/use-viewer-store";
import { cn } from "@/lib/utils";

const ShowcaseScene = dynamic(
  () => import("@/components/three/showcase-scene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <Loader2
          className="size-5 animate-spin text-muted-foreground"
          aria-label="Loading 3D viewer"
        />
      </div>
    ),
  },
);

const modes: { key: MaterialMode; label: string }[] = [
  { key: "shaded", label: "Render" },
  { key: "wireframe", label: "Wireframe" },
  { key: "normals", label: "Normals" },
];

export function Showcase3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "200px 0px", once: true });
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [hovered, setHovered] = useState(false);

  const model = useViewerStore((s) => s.model);
  const mode = useViewerStore((s) => s.mode);
  const autoRotate = useViewerStore((s) => s.autoRotate);
  const active = useViewerStore((s) => s.active);
  const setModel = useViewerStore((s) => s.setModel);
  const setMode = useViewerStore((s) => s.setMode);
  const toggleAutoRotate = useViewerStore((s) => s.toggleAutoRotate);
  const setActive = useViewerStore((s) => s.setActive);

  // Pan the camera target via OrbitControls
  const nudge = (dx: number, dy: number) => {
    const c = controlsRef.current;
    if (!c) return;
    c.target.x += dx;
    c.target.y += dy;
    c.object.position.x += dx;
    c.object.position.y += dy;
    c.update();
  };

  const reset = () => {
    const c = controlsRef.current;
    if (!c) return;
    c.target.set(0, 0, 0);
    c.object.position.set(0, 0.6, 5);
    c.update();
  };

  const arrowBtn =
    "flex size-9 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:border-accent/40";

  return (
    <section
      ref={sectionRef}
      id="three-d"
      className="relative mx-auto max-w-6xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          kicker="3D Showcase"
          lines={["Geometry, light,", "and code in one place."]}
        />
      </div>

      <FadeIn>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-[280px_1fr]">
          {/* Model list */}
          <div className="flex flex-col bg-surface">
            {showcaseModels.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setModel(m.key)}
                aria-pressed={model === m.key}
                className={cn(
                  "flex flex-col gap-1 border-b border-border p-6 text-left transition-colors last:border-b-0",
                  model === m.key ? "bg-accent-soft" : "hover:bg-background/60",
                )}
              >
                <span className="flex items-center justify-between">
                  <span className="font-medium">{m.name}</span>
                  <span
                    className={cn(
                      "size-1.5 rounded-full transition-colors",
                      model === m.key ? "bg-accent" : "bg-border",
                    )}
                    aria-hidden
                  />
                </span>
                <span className="text-sm text-muted-foreground">
                  {m.description}
                </span>
                <span className="mt-2 font-mono text-xs text-muted-foreground">
                  {m.polyNote}
                </span>
              </button>
            ))}
            <p className="mt-auto p-6 font-mono text-xs text-muted-foreground">
              {active ? "DRAG · SCROLL TO ZOOM" : "CLICK TO INTERACT"}
            </p>
          </div>

          {/* Viewport */}
          <div
            className={cn(
              "relative aspect-square overflow-hidden bg-background transition-all sm:aspect-16/10",
              active && "ring-2 ring-inset ring-accent/40",
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setActive(true)}
            onWheel={(e) => {
              if (active) e.stopPropagation();
            }}
          >
            {/* Canvas fills the box; controls sit on top via z-10 */}
            <div className="absolute inset-0">
              {inView && <ShowcaseScene controlsRef={controlsRef} />}
            </div>

            {/* Hover hint (before activation) */}
            {hovered && !active && (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/30 backdrop-blur-[1px]">
                <span className="rounded-full border border-border bg-background/90 px-4 py-2 font-mono text-xs">
                  Click to interact
                </span>
              </div>
            )}

            {/* Directional pad + reset (top-right, inside canvas) */}
            <div className="absolute right-4 top-4 z-10 flex flex-col items-center gap-1.5">
              <button
                type="button"
                aria-label="Move up"
                className={arrowBtn}
                onClick={() => nudge(0, 0.3)}
              >
                <ArrowUp className="size-4" />
              </button>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  aria-label="Move left"
                  className={arrowBtn}
                  onClick={() => nudge(-0.3, 0)}
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Reset view"
                  className={arrowBtn}
                  onClick={reset}
                >
                  <Maximize className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Move right"
                  className={arrowBtn}
                  onClick={() => nudge(0.3, 0)}
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
              <button
                type="button"
                aria-label="Move down"
                className={arrowBtn}
                onClick={() => nudge(0, -0.3)}
              >
                <ArrowDown className="size-4" />
              </button>
            </div>

            {/* Bottom bar: modes + auto-rotate (inside canvas) */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-4">
              <div className="flex rounded-full border border-border bg-background/80 p-1 backdrop-blur-md">
                {modes.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setMode(m.key)}
                    aria-pressed={mode === m.key}
                    className={cn(
                      "rounded-full px-4 py-1.5 font-mono text-xs transition-colors",
                      mode === m.key
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleAutoRotate}
                aria-pressed={autoRotate}
                aria-label="Toggle auto-rotation"
                className={cn(
                  "flex size-9 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md transition-colors",
                  autoRotate ? "text-accent" : "text-muted-foreground",
                )}
              >
                <RotateCw
                  className={cn(
                    "size-4",
                    autoRotate && "animate-spin [animation-duration:3s]",
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
