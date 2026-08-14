import type { Indicator } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function Ticker({ indicators }: { indicators: Indicator[] }) {
  const items = indicators.filter((i) => i.status === "reference" || i.status === "live");
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y hairline bg-surface/60">
      <div className="animate-[ticker_40s_linear_infinite] flex w-max items-center gap-8 py-2.5">
        {doubled.map((ind, i) => (
          <div
            key={`${ind.slug}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-[11px] font-medium text-foreground/60">
              {ind.name}
            </span>
            <span
              className={cn(
                "font-mono-nums text-[11px]",
                ind.status === "live"
                  ? "text-emerald-400"
                  : "text-foreground/45"
              )}
            >
              {ind.value || "—"}
            </span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
          </div>
        ))}
      </div>
      <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
