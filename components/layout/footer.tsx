import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 font-mono text-xs text-muted-foreground md:flex-row md:px-12">
        <p>
          © {new Date().getFullYear()} {site.name}. Designed &amp; built by
          hand.
        </p>
        <p>NEXT.JS · THREE.JS · DEPLOYED ON VERCEL</p>
      </div>
    </footer>
  );
}
