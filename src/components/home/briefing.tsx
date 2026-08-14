import Link from "next/link";
import type { Indicator } from "@/lib/content/types";
import { indicatorCatalog } from "@/lib/content/indicators";
import { agenda } from "@/lib/content/agenda";
import { opportunities } from "@/lib/content/opportunities";
import { formatBRDate } from "@/lib/utils";
import { ArrowRight, TrendUp } from "@phosphor-icons/react/dist/ssr";

function fmt(v: string) {
  return v || "—";
}

export function Briefing({ indicators = indicatorCatalog }: { indicators?: Indicator[] }) {
  const today = new Date().toISOString().slice(0, 10);
  const next = agenda
    .filter((e) => e.date >= today)
    .slice(0, 4);
  const upcoming = agenda.filter((e) => e.date >= today).length;
  const selic = indicators.find((i) => i.slug === "selic");
  const ipca = indicators.find((i) => i.slug === "ipca");
  const dolar = indicators.find((i) => i.slug === "dolar");
  const prefixado = indicators.find((i) => i.slug === "tesouro-prefixado");

  const ops = opportunities.slice(0, 3);

  return (
    <article className="relative overflow-hidden rounded-3xl border hairline bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      <div className="flex flex-col gap-8 p-7 sm:p-10">
        <header className="flex flex-col gap-2">
          <span className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
            Agente Financeiro Autônomo · resumo do dia
          </span>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Comece o expediente sabendo o que importa.
          </h2>
          <p className="text-sm text-foreground/55">
            Resumo do dia preparado pelo agente de IA a partir das fontes
            oficiais do portal. Conferência sempre nas fontes originais.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-2">
              <h3 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                O que está acontecendo agora
              </h3>
              <ul className="flex flex-col divide-y hairline">
                {[selic, ipca, dolar, prefixado].filter(Boolean).map((i) => (
                  <li key={i!.slug} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm text-foreground/75">{i!.name}</span>
                    <span className="font-mono-nums text-sm text-foreground/90">
                      {fmt(i!.value)}
                      <span className="ml-1 text-[11px] text-foreground/40">{i!.unit}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-2">
              <h3 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                O que observar hoje
              </h3>
              {next.length > 0 ? (
                <ul className="flex flex-col gap-2">
                  {next.map((e) => (
                    <li key={`${e.date}-${e.indicator}`} className="flex items-center gap-3 rounded-xl border hairline bg-background px-3 py-2.5">
                      <span className="w-20 shrink-0 font-mono-nums text-[11px] text-foreground/60">
                        {formatBRDate(e.date)} · {e.time}
                      </span>
                      <span className="flex-1 text-[13px] text-foreground/85">{e.indicator}</span>
                      <span className="font-mono-nums text-[10px] uppercase tracking-wider text-emerald-500">
                        {e.importance}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-foreground/50">Agenda em atualização.</p>
              )}
            </section>
          </div>

          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-2">
              <h3 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                O que pode mexer com os clientes
              </h3>
              <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-foreground/75">
                <li className="rounded-xl border hairline bg-background p-3">
                  <span className="font-semibold text-foreground">Juros:</span>{" "}
                  ambiente de juros elevados pode favorecer conversas sobre
                  reserva de emergência e renda fixa pós-fixada, sempre com
                  diagnóstico.
                </li>
                <li className="rounded-xl border hairline bg-background p-3">
                  <span className="font-semibold text-foreground">Inflação:</span>{" "}
                  variações pressionam o poder de compra; vale revisar metas de
                  curto e longo prazo e explicar proteção (IPCA+) sem prometer
                  rentabilidade.
                </li>
                <li className="rounded-xl border hairline bg-background p-3">
                  <span className="font-semibold text-foreground">Crédito:</span>{" "}
                  taxas e spreads acompanham o cenário; reforçar a conversa de
                  capacidade de pagamento e CET.
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-2">
              <h3 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                Oportunidades comerciais em pauta
              </h3>
              <ul className="flex flex-col gap-2">
                {ops.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href="/guias/como-identificar-oportunidades-comerciais"
                      className="group flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2.5 text-[13px] text-foreground/80 transition hover:border-emerald-500/40"
                    >
                      <TrendUp size={14} className="text-emerald-400" />
                      <span className="flex-1">{o.title}</span>
                      <ArrowRight size={13} className="text-foreground/30 transition group-hover:text-emerald-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <footer className="flex flex-wrap items-center gap-3 border-t hairline pt-4">
          <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/40">
            Próximas divulgações: {upcoming}
          </span>
          <Link
            href="/radar"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-400 transition hover:gap-2"
          >
            Abrir Radar completo <ArrowRight size={13} />
          </Link>
          <span className="ml-auto font-mono-nums text-[10px] text-foreground/30">
            Conteúdo educacional · confira nas fontes oficiais
          </span>
        </footer>
      </div>
    </article>
  );
}
