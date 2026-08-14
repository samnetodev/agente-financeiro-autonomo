import Link from "next/link";
import type { Indicator } from "@/lib/content/types";
import { Badge } from "@/components/ui/primitives";
import { Sparkline } from "./sparkline";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

function isPositive(ind: Indicator) {
  if (ind.changePct === null) return true;
  return ind.changePct >= 0;
}

const statusLabel: Record<string, string> = {
  live: "em tempo real",
  delayed: "atrasado",
  reference: "referência",
  unavailable: "sem dados",
};

export function IndicatorCard({ indicator }: { indicator: Indicator }) {
  const up = isPositive(indicator);
  const hasData = indicator.value !== "" && indicator.status === "live";
  const trend = hasData ? (up ? "up" : "down") : "neutral";

  return (
    <Link
      href={`/indicadores/${indicator.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border hairline bg-surface p-4 transition hover:border-emerald-500/40 hover:shadow-[0_0_30px_-12px_rgba(52,211,153,0.35)]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-medium text-foreground/80">
            {indicator.name}
          </span>
          <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/35">
            {indicator.unit}
          </span>
        </div>
        <Badge tone={trend}>{statusLabel[indicator.status]}</Badge>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-col">
          <span
            className={cn(
              "font-mono-nums text-2xl font-semibold tracking-tight",
              hasData ? (up ? "text-emerald-400" : "text-rose-400") : "text-foreground/50"
            )}
          >
            {hasData ? indicator.value : "—"}
          </span>
          {hasData && indicator.change ? (
            <span
              className={cn(
                "font-mono-nums text-[11px]",
                up ? "text-emerald-400/80" : "text-rose-400/80"
              )}
            >
              {indicator.change} ({indicator.changePct?.toFixed(2).replace(".", ",") ?? "—"}%)
            </span>
          ) : null}
        </div>
        <ArrowUpRight
          size={16}
          className="text-foreground/25 opacity-0 transition group-hover:opacity-100"
        />
      </div>

      <Sparkline data={indicator.series} positive={hasData ? up : true} />

      <div className="mt-auto flex flex-col gap-1.5 border-t hairline pt-2.5">
        <p className="line-clamp-2 text-[11px] leading-snug text-foreground/50">
          {indicator.clientMeaning}
        </p>
        <p className="font-mono-nums text-[10px] text-foreground/35">
          {indicator.timestamp ? `Atualizado: ${indicator.timestamp}` : "Série ilustrativa"} ·{" "}
          {indicator.source}
        </p>
      </div>
    </Link>
  );
}
