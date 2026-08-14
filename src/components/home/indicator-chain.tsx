import Link from "next/link";
import type { Indicator } from "@/lib/content/types";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    key: "indicador",
    label: "Indicador",
    desc: "O dado em si, com fonte oficial.",
  },
  {
    key: "economia",
    label: "Impacto econômico",
    desc: "O que ele significa para o cenário.",
  },
  {
    key: "produtos",
    label: "Impacto nos produtos",
    desc: "Como afeta renda fixa, crédito e seguros.",
  },
  {
    key: "cliente",
    label: "Impacto no cliente",
    desc: "O que muda no bolso de quem é atendido.",
  },
  {
    key: "perguntas",
    label: "Perguntas para diagnóstico",
    desc: "Perguntas consultivas para abrir a conversa.",
  },
  {
    key: "oportunidades",
    label: "Possíveis oportunidades",
    desc: "Diagnóstico e adequação, nunca empurrão.",
  },
  {
    key: "conteudo",
    label: "Conteúdo aprofundado",
    desc: "Guias, glossário e FAQs para dominar.",
  },
  {
    key: "fontes",
    label: "Fontes oficiais",
    desc: "Onde confirmar com segurança.",
  },
];

export function IndicatorToConversation({
  indicator,
}: {
  indicator: Indicator;
}) {
  return (
    <div className="flex flex-col gap-3">
      <ol className="flex flex-col divide-y hairline rounded-2xl border hairline bg-surface">
        <li className="flex items-center gap-4 p-4">
          <span className="font-mono-nums text-2xl font-semibold text-emerald-400">
            {indicator.value || "—"}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{indicator.name}</span>
            <span className="text-xs text-foreground/50">
              {indicator.unit} · {indicator.source}
            </span>
          </div>
        </li>
        {steps.slice(1).map((step) => (
          <li key={step.key} className="group flex items-center gap-4 p-4 transition hover:bg-foreground/[0.03]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 font-mono-nums text-[10px] text-emerald-400">
              {steps.indexOf(step) + 1}
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-medium">{step.label}</span>
              <span className="text-xs text-foreground/50">{step.desc}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
        <p className="text-[13px] leading-relaxed text-foreground/70">
          <span className="font-semibold text-foreground">Tradução comercial:</span>{" "}
          {indicator.clientMeaning}
        </p>
        <Link
          href={`/indicadores/${indicator.slug}`}
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-[13px] font-medium text-emerald-400 transition hover:gap-2.5"
        >
          Abrir página completa do indicador <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
