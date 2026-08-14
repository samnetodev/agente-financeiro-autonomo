import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-500">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-[24ch] text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {sub ? (
        <p className="max-w-[65ch] text-sm leading-relaxed text-foreground/60 sm:text-base">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "up" | "down" | "neutral" | "accent";
  className?: string;
}) {
  const tones: Record<string, string> = {
    up: "bg-emerald-500/10 text-emerald-500 border-emerald-500/25",
    down: "bg-rose-500/10 text-rose-400 border-rose-500/25",
    neutral: "bg-foreground/5 text-foreground/60 border-foreground/10",
    accent: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
