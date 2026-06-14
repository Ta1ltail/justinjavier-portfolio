"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Code2,
  FileDown,
  Gamepad2,
} from "lucide-react";
import { site } from "@/config/site";
import { Magnetic } from "@/components/ui/magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

const disciplines = [
  { icon: Code2, label: "Full Stack", note: "React, Next.js, Node, SQL" },
  { icon: Boxes, label: "3D Modeling", note: "Blender, ZBrush, Houdini" },
  { icon: Gamepad2, label: "Game Dev", note: "Unity, Godot, Unreal Engine" },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden border-b border-border px-6 pb-16 pt-28 md:px-12">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              <span className="text-kicker">Available for work</span>
            </motion.p>

            <h1 className="text-display mt-6">
              {["Hi,", "My Name is"].map((line, i) => (
                <span key={line} className="reveal-line">
                  <motion.span
                    className="block will-change-transform"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease, delay: 0.3 + i * 0.1 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="reveal-line">
                <motion.span
                  className="block whitespace-nowrap will-change-transform"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease, delay: 0.5 }}
                >
                  <span className="text-accent">Justin Javier.</span>
                </motion.span>
              </span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="relative mx-auto w-full max-w-xs -translate-y-4 md:max-w-none"
          >
            <Image
              src="/mee.png"
              alt={`${site.name} portrait`}
              width={560}
              height={700}
              priority
              className="relative block h-auto max-h-115 w-full select-none object-contain object-bottom"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-0.5 w-full rounded-full bg-linear-to-r from-transparent via-accent to-transparent"
              aria-hidden
            />
          </motion.div>
        </div>

        <div className="mt-6 flex max-w-2xl flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="text-lg text-muted-foreground md:text-xl"
          >
            Full Stack Developer • 3D Modeler • Game Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.82 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform active:scale-[0.97]"
              >
                View Projects
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-accent-soft"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-accent-soft"
              >
                Download CV
                <FileDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 1 }}
        className="relative mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
      >
        {disciplines.map((d) => (
          <div
            key={d.label}
            className="flex items-start gap-4 bg-surface/90 p-5 backdrop-blur-sm transition-colors hover:bg-accent-soft"
          >
            <d.icon className="mt-0.5 size-5 text-accent" aria-hidden />
            <div>
              <p className="text-sm font-medium">{d.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{d.note}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
