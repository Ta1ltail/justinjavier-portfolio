import Image from "next/image";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 font-mono text-xs text-muted-foreground md:flex-row md:px-12">
        <div className="flex items-center gap-2 mr-1">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={120}
            height={28}
            priority
            className="h-7 w-auto"
          />
          <p>
            © {new Date().getFullYear()} {site.name} · Personal Portfolio · All
            rights reserved.
          </p>
        </div>
        <p>NEXT.JS · DEPLOYED ON VERCEL</p>
      </div>
    </footer>
  );
}
