"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Loader2,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-accent focus:ring-4 focus:ring-accent/10";

const labelClass = "mb-2 block text-sm font-medium";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (data: ContactInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(site.links.discord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Mail className="size-4" />,
    },
    {
      label: "GitHub",
      value: "View my code",
      href: site.links.github,
      icon: <GithubIcon className="size-4" />,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: site.links.linkedin,
      icon: <LinkedinIcon className="size-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-5xl px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-12"
    >
      <SectionHeading
        index="09"
        kicker="Contact"
        lines={["Let's build", "something together."]}
      />

      <FadeIn>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border lg:grid-cols-[2fr_3fr]">
          {/* Left: pitch + channels */}
          <div className="flex flex-col gap-8 border-b border-border bg-surface p-8 lg:border-b-0 lg:border-r md:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                Open to opportunities
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                Have a project in mind?
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                Whether it&apos;s a full stack application, a 3D experience, or
                a game prototype — tell me about it. I read every message
                personally.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-accent" aria-hidden />
              Typical response time: within 24 hours
            </div>

            <nav
              className="mt-auto flex flex-col gap-2"
              aria-label="Contact channels"
            >
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-background"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    {c.icon}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium">{c.label}</span>
                    <span className="block text-xs text-muted-foreground">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}

              <button
                type="button"
                onClick={copyDiscord}
                className="group flex items-center gap-4 rounded-xl border border-transparent p-3 text-left transition-colors hover:border-border hover:bg-background"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <MessageSquare className="size-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium">Discord</span>
                  <span className="block text-xs text-muted-foreground">
                    {copied ? "Copied to clipboard!" : site.links.discord}
                  </span>
                </span>
                {copied ? (
                  <Check className="size-4 text-accent" />
                ) : (
                  <Copy className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </button>
            </nav>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5 bg-background/60 p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="your-name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={cn(inputClass, errors.name && "border-red-500/60")}
                  {...register("name")}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your-email@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={cn(
                    inputClass,
                    errors.email && "border-red-500/60",
                  )}
                  {...register("email")}
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="flex items-baseline justify-between">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <span
                  className={cn(
                    "font-mono text-xs",
                    messageLength > 2000
                      ? "text-red-400"
                      : "text-muted-foreground",
                  )}
                >
                  {messageLength}/2000
                </span>
              </div>
              <textarea
                id="message"
                rows={7}
                placeholder="Tell me about your project, timeline, and goals…"
                aria-invalid={!!errors.message}
                className={cn(
                  inputClass,
                  "flex-1 resize-none",
                  errors.message && "border-red-500/60",
                )}
                {...register("message")}
              />
              {errors.message && (
                <p role="alert" className="mt-1.5 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <AnimatePresence mode="wait">
              {status === "sent" && (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-accent/30 bg-accent-soft py-3 text-sm text-accent"
                >
                  <Check className="size-4" /> Message sent — I&apos;ll get back
                  to you within 24 hours.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="rounded-xl border border-red-500/30 bg-red-500/10 py-3 text-center text-sm text-red-400"
                >
                  Something went wrong — please email me directly at{" "}
                  {site.email}.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
