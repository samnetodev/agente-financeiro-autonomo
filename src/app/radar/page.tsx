import type { Metadata } from "next";
import { buildRadar } from "@/lib/market/radar";
import { RadarPanel } from "@/components/radar/radar-panel";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Radar do Mercado",
  description:
    "Dashboard com os principais indicadores para o profissional do mercado financeiro: mercado, juros, inflação, renda fixa e crédito — com fonte oficial e tradução comercial.",
};

export const dynamic = "force-dynamic";

export default async function RadarPage() {
  const indicators = await buildRadar();
  const now = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Radar do Mercado", url: "/radar" },
        ])}
      />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <PageHeader
          eyebrow="Radar do Mercado"
          title="O dia, em uma tela."
          sub="Indicadores de mercado, juros, inflação, renda fixa e crédito. Cada card mostra valor (quando disponível), unidade, horário de atualização, fonte e link oficial. Nada é inventado."
        >
          <p className="flex items-center gap-2 font-mono-nums text-[11px] uppercase tracking-wider text-foreground/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Atualizado em {now} (horário de Brasília)
          </p>
        </PageHeader>
      </div>
      <div className="border-t hairline bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
          <RadarPanel indicators={indicators} />
        </div>
      </div>
    </>
  );
}
