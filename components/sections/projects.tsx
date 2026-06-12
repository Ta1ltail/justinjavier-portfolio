"use client";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: "from-accent/25",
  indigo: "from-indigo-glow/25",
  violet: "from-violet-glow/25",
} as const;

function getImages(project: Project): string[] {
  if (project.images && project.images.length > 0) return project.images;
  return project.image ? [project.image] : [];
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const images = getImages(project);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const hasMultiple = images.length > 1;

  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  // Keyboard: Escape closes, arrows navigate. Lock body scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowRight") {
        setDirection(1);
        setIndex((i) => (i + 1) % images.length);
      }
      if (hasMultiple && e.key === "ArrowLeft") {
        setDirection(-1);
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, hasMultiple, images.length]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} image gallery`}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/10 md:right-6 md:top-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative flex max-h-[75vh] min-h-[40vh] items-center justify-center overflow-hidden bg-black/40">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.img
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              src={images[index]}
              alt={`${project.title} — screenshot ${index + 1} of ${images.length}`}
              className="max-h-[75vh] w-full object-contain"
            />
          </AnimatePresence>

          {hasMultiple && (
            <>
              {/* Prev */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:left-4 md:h-11 md:w-11"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:right-4 md:h-11 md:w-11"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {/* Counter */}
              <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
                {index + 1} / {images.length}
              </span>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all",
                      i === index
                        ? "w-5 bg-white"
                        : "bg-white/40 hover:bg-white/70",
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
          <span className="font-mono text-xs text-muted-foreground">
            {project.slug}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const images = getImages(project);
  const clickable = images.length > 0;
  const hasMultiple = images.length > 1;

  return (
    <>
      <div
        ref={ref}
        onClick={clickable ? () => setOpen(true) : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(true);
                }
              }
            : undefined
        }
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        aria-label={clickable ? `View ${project.title} gallery` : undefined}
        className={cn(
          "group relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-surface lg:aspect-auto lg:min-h-full",
          clickable &&
            "cursor-zoom-in transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        )}
      >
        <motion.div
          style={{ y }}
          className="absolute inset-[-8%] will-change-transform"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <>
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-br to-transparent",
                  accentMap[project.accent],
                )}
              />
              <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[48px_48px] opacity-50" />
            </>
          )}
        </motion.div>

        {/* Hover indicator */}
        {clickable && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
            <div className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
                aria-hidden="true"
              >
                <path d="M15 3h6v6" />
                <path d="M9 21H3v-6" />
                <path d="M21 3l-7 7" />
                <path d="M3 21l7-7" />
              </svg>
              <span className="font-mono text-xs text-white">
                {hasMultiple
                  ? `View gallery (${images.length})`
                  : "View full image"}
              </span>
            </div>
          </div>
        )}

        {/* Multi-image badge, always visible */}
        {hasMultiple && (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-xs text-white backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <rect width="14" height="14" x="3" y="3" rx="2" />
              <path d="M21 8v9a4 4 0 0 1-4 4H8" />
            </svg>
            {images.length}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
          <span className="font-mono text-xs text-muted-foreground">
            {project.slug}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {open && <Lightbox project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
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

        {/* Project links */}
        {project.links && project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const isRepo = link.href.includes("github.com");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {isRepo ? (
                    <GithubIcon className="size-3.5" />
                  ) : (
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Restricted project notice */}
        {project.restrictedNote && (
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
            <Lock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Private system
              </span>
              <br />
              {project.restrictedNote}
            </p>
          </div>
        )}

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
