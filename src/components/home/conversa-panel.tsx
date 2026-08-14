import Link from "next/link";
import type { Indicator } from "@/lib/content/types";
import { explain } from "@/lib/ia/explain";
import { cn } from "@/lib/utils";

export function ConversaPanel({ indicator }: { indicator: Indicator }) {
  const kb = explain(indicator.name.toLowerCase());
  const live = indicator.status === "live" && indicator.value !== "";
  const up = indicator.changePct !== null && indicator.changePct >= 0;

  const steps: { label: string; text?: string; quote?: string; href?: string; link?: string }[] = [
    { label: "Impacto econômico", text: kb.porqueImporta },
    ...kb.impactoCliente.map((c) => ({ label: c.area, text: c.impacto })),
    { label: "Pergunta para diagnóstico", quote: kb.perguntasConsultivas[0] },
    { label: "Fonte oficial", href: indicator.sourceUrl, link: indicator.source },
  ];

  return (
    <div className="rounded-2xl border hairline bg-surface/70 p-5 backdrop-blur">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/45">
          Do indicador à conversa
        </span>
        <span className="flex items-center gap-1.5 font-mono-nums text-[11px]">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              live ? (up ? "animate-pulse bg-emerald-400" : "animate-pulse bg-rose-400") : "bg-foreground/25"
            )}
          />
          <span className={cn(live ? (up ? "text-emerald-400" : "text-rose-400") : "text-foreground/45")}>
            {indicator.name.split(" (")[0].toUpperCase()}
            {live ? ` ${indicator.value}${up ? " ↑" : " ↓"}` : " —"}
          </span>
        </span>
      </div>

      <div className="flex flex-col divide-y hairline">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 py-2.5 text-[13px] text-foreground/75">
            <span className="font-mono-nums text-[10px] text-emerald-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-[9.5rem] text-foreground/90">{s.label}</span>
            {s.quote ? (
              <span className="ml-auto max-w-[16rem] text-[11px] italic text-foreground/40">
                “{s.quote}”
              </span>
            ) : s.href ? (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[11px] text-emerald-400 transition hover:opacity-80"
              >
                {s.link} ↗
              </a>
            ) : (
              <span className="ml-auto max-w-[16rem] text-[11px] leading-snug text-foreground/50">
                {s.text}
              </span>
            )}
          </div>
        ))}
      </div>

      {live && indicator.timestamp ? (
        <p className="mt-3 font-mono-nums text-[10px] text-foreground/35">
          Atualizado em {indicator.timestamp} ·{" "}
          <Link href="/indicadores/selic" className="text-emerald-500/80 hover:text-emerald-400">
            ver ficha do indicador
          </Link>
        </p>
      ) : null}
    </div>
  );
}
