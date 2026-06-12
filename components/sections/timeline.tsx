"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { timeline, type TimelineEntry } from "@/lib/data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const typeColor: Record<TimelineEntry["type"], string> = {
  Education: "text-accent border-accent/30",
  Freelance: "text-violet-glow border-violet-glow/30",
  Project: "text-indigo-glow border-indigo-glow/30",
  Achievement: "text-foreground border-border",
};

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12">
      <SectionHeading
        index="06"
        kicker="Journey"
        lines={["Every step,", "deliberate."]}
      />

      <div ref={containerRef} className="relative">
        <div
          className="absolute left-1.75 top-0 h-full w-px bg-border md:left-1/2"
          aria-hidden
        />
        <div
          ref={lineRef}
          className="absolute left-1.75 top-0 h-full w-px origin-top bg-accent will-change-transform md:left-1/2"
          aria-hidden
        />

        <ol className="flex flex-col gap-14">
          {timeline.map((entry, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={`${entry.year}-${entry.title}`}
                className="relative grid grid-cols-[32px_1fr] gap-2 md:grid-cols-2 md:gap-0"
              >
                <span
                  className="absolute left-0.75 top-1.5 size-2.25 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2"
                  aria-hidden
                />

                <FadeIn
                  className={cn(
                    "col-start-2 md:col-start-auto",
                    left ? "md:pr-14 md:text-right" : "md:col-start-2 md:pl-14",
                  )}
                >
                  <div
                    className={cn(
                      "flex flex-wrap items-center gap-3",
                      left && "md:justify-end",
                    )}
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      {entry.year}
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest",
                        typeColor[entry.type],
                      )}
                    >
                      {entry.type}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {entry.body}
                  </p>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
