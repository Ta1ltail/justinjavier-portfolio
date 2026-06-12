"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { stackItems, stackCategories, type StackCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { TechIcon } from "../ui/tech-icon";

type Filter = StackCategory | "All";

export function Stack() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All"
      ? stackItems
      : stackItems.filter((i) => i.category === filter);

  return (
    <section
      id="stack"
      className="relative mx-auto max-w-5xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <SectionHeading
        index="08"
        kicker="Tech Stack"
        lines={["Tools chosen", "with intent."]}
      />

      <p className="-mt-2 mb-10 max-w-2xl text-sm text-muted-foreground">
        Every tool below is something I&apos;ve personally worked with across
        coursework, freelance projects, and personal builds.
      </p>

      <div
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter stack by category"
      >
        {(["All", ...stackCategories] as Filter[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
              filter === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.ul
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.li
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-accent-soft"
              >
                <div className="flex items-center gap-2.5">
                  <TechIcon name={item.name} className="size-5" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.detail}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                  {item.category}
                </p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  );
}
