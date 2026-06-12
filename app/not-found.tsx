import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Error 404
      </p>
      <h1 className="text-display mt-4">Lost in the void.</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This page doesn&apos;t exist — but the rest of the site definitely does.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform active:scale-[0.97]"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </section>
  );
}
