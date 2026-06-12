"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: "from-accent/25",
  indigo: "from-indigo-glow/25",
  violet: "from-violet-glow/25",
} as const;

function ProjectVisual({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-surface lg:aspect-auto lg:min-h-full"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-[-8%] will-change-transform"
      >
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-br to-transparent",
            accentMap[project.accent],
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[48px_48px] opacity-50" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <span className="font-mono text-xs text-muted-foreground">
          {project.slug}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>
    </div>
  );
}

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <FadeIn className={cn(reversed && "lg:order-2")}>
        <ProjectVisual project={project} />
      </FadeIn>

      <FadeIn
        delay={0.1}
        className={cn("flex flex-col", reversed && "lg:order-1")}
      >
        <p className="text-kicker">{project.tagline}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h3>

        <dl className="mt-8 flex flex-col gap-6">
          {(
            [
              ["Problem", project.problem],
              ["Solution", project.solution],
              ["Challenge", project.challenge],
            ] as const
          ).map(([label, text]) => (
            <div key={label}>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">
                {label}
              </dt>
              <dd className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {text}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="bg-surface p-4">
              <dd className="text-xl font-semibold tracking-tight md:text-2xl">
                {metric.value}
              </dd>
              <dt className="mt-1 text-xs text-muted-foreground">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </FadeIn>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-6xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          kicker="Featured work"
          lines={["Problems solved,", "not just pages built."]}
        />
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, i) => (
          <CaseStudy key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
