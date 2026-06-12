"use client";

import { Particles } from "@/components/backgrounds/particles";

export function GlobalBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <Particles />
      <div className="absolute left-1/2 top-[-15%] h-[50vh] w-[80vw] -translate-x-1/2 rounded-full bg-accent/6 blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[40vh] w-[50vw] rounded-full bg-violet-glow/5 blur-[100px]" />
    </div>
  );
}
