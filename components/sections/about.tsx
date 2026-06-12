"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { chapters, aboutStats } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <SectionHeading
        index="01"
        kicker="About"
        lines={["Three crafts,", "one obsession with detail."]}
      />

      <div className="flex flex-col gap-12">
        {chapters.map((chapter, i) => (
          <div
            key={chapter.index}
            className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-12"
          >
            <FadeIn delay={0.05} className="md:sticky md:top-32 md:self-start">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="font-mono text-xs text-accent">
                  {chapter.index}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {chapter.title}
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="max-w-2xl text-pretty text-lg leading-[1.8] text-muted-foreground">
                {chapter.body}
              </p>
              {i < chapters.length - 1 && (
                <div className="mt-12 h-px w-full bg-border" aria-hidden />
              )}
            </FadeIn>
          </div>
        ))}
      </div>

      <FadeIn className="mt-16">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border md:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="flex flex-col gap-1 border-border bg-surface p-6 not-last:border-r max-md:nth-[-n+2]:border-b max-md:odd:border-r max-md:even:border-r-0"
            >
              <dt className="order-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
}
