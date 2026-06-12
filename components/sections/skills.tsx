"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { TechIcon } from "../ui/tech-icon";

const ease = [0.16, 1, 0.3, 1] as const;

export function Skills() {
  const [active, setActive] = useState<string | null>(
    skillCategories[0]?.index ?? null,
  );

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-5xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <SectionHeading
        index="02"
        kicker="Skills"
        lines={["A toolkit built", "across the stack."]}
      />

      <div className="overflow-hidden rounded-2xl border border-border">
        {skillCategories.map((category) => {
          const isOpen = active === category.index;
          return (
            <div
              key={category.index}
              className="border-b border-border last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setActive(isOpen ? null : category.index)}
                aria-expanded={isOpen}
                aria-controls={`skills-panel-${category.index}`}
                className={cn(
                  "group flex w-full items-center gap-4 px-6 py-5 text-left transition-colors md:px-8",
                  isOpen ? "bg-surface" : "hover:bg-surface/60",
                )}
              >
                <span className="font-mono text-xs text-accent">
                  {category.index}
                </span>
                <span className="text-lg font-medium tracking-tight md:text-xl">
                  {category.label}
                </span>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {category.skills.length.toString().padStart(2, "0")}
                </span>
                <Plus
                  className={cn(
                    "size-4 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-45 text-accent",
                  )}
                  aria-hidden
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`skills-panel-${category.index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden bg-surface"
                  >
                    <ul className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2">
                      {category.skills.map((skill, i) => (
                        <motion.li
                          key={skill.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease,
                            delay: 0.1 + i * 0.05,
                          }}
                          className="group/skill bg-background p-6 transition-colors hover:bg-accent-soft md:px-8"
                        >
                          <p className="flex items-center gap-3 font-large">
                            <TechIcon name={skill.name} className="size-4.5" />
                            {skill.name}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {skill.note}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
