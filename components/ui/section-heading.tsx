import { TextReveal } from "@/components/ui/text-reveal";
import { FadeIn } from "@/components/ui/fade-in";

interface SectionHeadingProps {
  kicker: string;
  lines: readonly string[];
  index: string;
}

export function SectionHeading({ kicker, lines, index }: SectionHeadingProps) {
  return (
    <div className="mb-2 flex flex-col gap-2 md:mb-3">
      <FadeIn className="flex items-baseline gap-4">
        <span className="font-mono text-1xl font-semibold text-accent">
          {index}
        </span>
        <span className="font-mono text-2xl font-medium uppercase tracking-[0.16em] text-foreground/80">
          {kicker}
        </span>
        <span
          className="h-px flex-1 bg-linear-to-r from-accent/40 to-transparent"
          aria-hidden
        />
      </FadeIn>
      <TextReveal
        lines={lines}
        className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl"
      />
    </div>
  );
}
