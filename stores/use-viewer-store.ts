import { create } from "zustand";
import type { ModelKey } from "@/lib/data";

export type MaterialMode = "shaded" | "wireframe" | "normals";

interface ViewerState {
  model: ModelKey;
  mode: MaterialMode;
  autoRotate: boolean;
  setModel: (model: ModelKey) => void;
  setMode: (mode: MaterialMode) => void;
  toggleAutoRotate: () => void;
}

export const useViewerStore = create<ViewerState>((set) => ({
  model: "knot",
  mode: "shaded",
  autoRotate: true,
  setModel: (model) => set({ model }),
  setMode: (mode) => set({ mode }),
  toggleAutoRotate: () => set((s) => ({ autoRotate: !s.autoRotate })),
}));
