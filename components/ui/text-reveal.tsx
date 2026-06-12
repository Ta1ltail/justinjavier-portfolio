"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  lines: readonly string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.09,
    },
  }),
};

export function TextReveal({
  lines,
  className,
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  return (
    <Tag className={cn(className)}>
      {lines.map((line, i) => (
        <span key={line} className="reveal-line">
          <motion.span
            className="block will-change-transform"
            custom={i + delay / 0.09}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
