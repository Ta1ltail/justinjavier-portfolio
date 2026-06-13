import { create } from "zustand";
import type { ModelKey } from "@/lib/data";

export type MaterialMode = "shaded" | "wireframe" | "normals";

export type CameraView = {
  position: [number, number, number];
  target: [number, number, number];
};

// Per-model default camera framing
// kurbs: slightly zoomed in · switch: zoomed out a bit · basketball: zoomed in more
export const DEFAULT_VIEWS: Record<ModelKey, CameraView> = {
  kurbs: { position: [0, 0.4, 4.2], target: [0, 0, 0] },
  switch: { position: [0, 0.5, 6.5], target: [0, 0, 0] },
  basketball: { position: [0, 0.3, 3.0], target: [0, 0, 0] },
};

interface ViewerState {
  model: ModelKey;
  mode: MaterialMode;
  autoRotate: boolean;
  active: boolean;
  // Saved camera view per model
  views: Record<ModelKey, CameraView>;
  setModel: (model: ModelKey) => void;
  setMode: (mode: MaterialMode) => void;
  toggleAutoRotate: () => void;
  setActive: (active: boolean) => void;
  saveView: (model: ModelKey, view: CameraView) => void;
  resetView: (model: ModelKey) => void;
}

export const useViewerStore = create<ViewerState>((set) => ({
  model: "kurbs",
  mode: "shaded",
  autoRotate: true,
  active: false,
  views: {
    kurbs: { ...DEFAULT_VIEWS.kurbs },
    switch: { ...DEFAULT_VIEWS.switch },
    basketball: { ...DEFAULT_VIEWS.basketball },
  },
  setModel: (model) => set({ model }),
  setMode: (mode) => set({ mode }),
  toggleAutoRotate: () => set((s) => ({ autoRotate: !s.autoRotate })),
  setActive: (active) => set({ active }),
  saveView: (model, view) =>
    set((s) => ({ views: { ...s.views, [model]: view } })),
  resetView: (model) =>
    set((s) => ({
      views: { ...s.views, [model]: { ...DEFAULT_VIEWS[model] } },
    })),
}));
