"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { site } from "@/config/site";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";

    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        flushSync(() => {
          setTheme(next);
        });
      });
    } else {
      setTheme(next);
    }
  };
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const ids = site.nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="flex w-full max-w-5xl items-center justify-between rounded-2xl border border-border bg-background/75 px-4 py-2.5 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.25)] backdrop-blur-xl"
        aria-label="Primary"
      >
        <Link
          href="#"
          className="font-mono text-sm font-semibold tracking-tight"
          aria-label="Back to top"
        >
          {site.initials}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center md:flex">
          {site.nav.map((item, i) => (
            <li key={item.href} className="flex items-center">
              {i > 0 && (
                <span aria-hidden className="mx-1.5 h-3.5 w-px bg-border" />
              )}
              <div className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "group relative z-10 block rounded-lg px-3.5 py-1.5 text-sm transition-colors duration-200",
                    activeSection === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={
                    activeSection === item.href ? "true" : undefined
                  }
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ease-out",
                      activeSection === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-muted"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div
            aria-hidden
            className="hidden h-5 w-px bg-border md:mx-3 md:block"
          />
          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg border border-border md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-4 top-18 rounded-2xl border border-border bg-background/90 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
