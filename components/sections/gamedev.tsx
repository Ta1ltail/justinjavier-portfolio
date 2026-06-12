"use client";

import { Play, Gamepad2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { games, type Game } from "@/lib/data";

function GameMedia({ game }: { game: Game }) {
  if (game.videoSrc) {
    return (
      <video
        src={game.videoSrc}
        controls
        muted
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-xl border border-border object-cover"
        aria-label={`${game.title} gameplay video`}
      />
    );
  }

  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface">
      <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />
      <div className="absolute inset-0 bg-linear-to-t from-violet-glow/15 to-transparent" />
      <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
        <span className="flex size-14 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm">
          <Play className="ml-0.5 size-5" />
        </span>
        <span className="font-mono text-xs uppercase tracking-widest">
          Gameplay footage coming soon
        </span>
      </div>
    </div>
  );
}

function GameCard({ game }: { game: Game }) {
  return (
    <FadeIn>
      <article className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-6 md:p-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <Gamepad2 className="size-4 text-accent" aria-hidden />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {game.engine}
            </span>
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-accent">
              {game.status}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight">
            {game.title}
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {game.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent">
                Mechanics
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {game.mechanics.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent">
                Systems
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {game.systems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-violet-glow"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <GameMedia game={game} />
          <div className="rounded-xl border border-border bg-background p-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Development process
            </h4>
            <ol className="mt-4 flex flex-col gap-3">
              {game.process.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <span className="font-mono text-xs text-accent">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function GameDev() {
  return (
    <section
      id="games"
      className="relative mx-auto max-w-6xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          kicker="Game Development"
          lines={["Systems that", "have to feel right."]}
        />
      </div>
      <div className="flex flex-col gap-10">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
