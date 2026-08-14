import type { Indicator } from "@/lib/content/types";
import { IndicatorCard } from "./indicator-card";
import { Info } from "@phosphor-icons/react/dist/ssr";

const order: Indicator["category"][] = [
  "mercado",
  "juros",
  "inflacao",
  "renda-fixa",
  "credito",
];

const labels: Record<Indicator["category"], string> = {
  mercado: "Mercado",
  juros: "Juros",
  inflacao: "Inflação",
  "renda-fixa": "Renda fixa",
  credito: "Crédito",
  exterior: "Exterior",
};

export function RadarPanel({ indicators }: { indicators: Indicator[] }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
        <Info size={18} className="mt-0.5 shrink-0 text-emerald-400" />
        <p className="text-[13px] leading-relaxed text-foreground/70">
          Os valores são carregados de fontes oficiais (BCB, B3, IBGE, Tesouro,
          ANBIMA) quando a conexão está disponível. Quando o dado não chega, o
          card exibe <span className="font-mono text-emerald-300">—</span> e a
          série fica ilustrativa — nada é inventado. Cada card mostra a fonte e
          o link oficial para conferência.
        </p>
      </div>

      {order.map((cat) => {
        const items = indicators.filter((i) => i.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="flex flex-col gap-4">
            <h3 className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-foreground/45">
              {labels[cat]}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((ind) => (
                <IndicatorCard key={ind.slug} indicator={ind} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
