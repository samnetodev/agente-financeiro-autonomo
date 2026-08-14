import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  sub,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[1400px] flex-col gap-4 px-4 pb-10 pt-14 sm:px-6 sm:pt-20",
        className
      )}
    >
      {eyebrow ? (
        <p className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-[26ch] text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
        {title}
      </h1>
      {sub ? (
        <p className="max-w-[68ch] text-balance text-[15px] leading-relaxed text-foreground/60 sm:text-base">
          {sub}
        </p>
      ) : null}
      {children}
    </div>
  );
}
