import type { Metadata } from "next";
import Link from "next/link";
import { indicatorCatalog } from "@/lib/content/indicators";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const statusLabel: Record<string, string> = {
  live: "em tempo real",
  delayed: "atrasado",
  reference: "referência",
  unavailable: "sem dados",
};

export const metadata: Metadata = {
  title: "Indicadores econômicos e financeiros",
  description:
    "Catálogo dos indicadores que todo profissional do mercado financeiro acompanha: Selic, CDI, IPCA, câmbio, Ibovespa, crédito, renda fixa e exterior — com o que cada um significa para o cliente.",
};

const groups = [...new Set(indicatorCatalog.map((i) => i.category))];

const groupLabel: Record<string, string> = {
  mercado: "Mercado",
  juros: "Juros",
  inflacao: "Inflação",
  "renda-fixa": "Renda fixa",
  credito: "Crédito",
  exterior: "Exterior",
};

export default function IndicadoresPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Indicadores", url: "/indicadores" },
        ])}
      />
      <div className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Inteligência de mercado"
          title="Indicadores econômicos e financeiros"
          sub="O que cada indicador significa, de onde sai a informação e o que muda na conversa com o cliente."
        />
        <div className="flex flex-col gap-10">
          {groups.map((group) => {
            const items = indicatorCatalog.filter((i) => i.category === group);
            return (
              <section key={group} className="flex flex-col gap-4">
                <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                  {groupLabel[group] ?? group}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/indicadores/${i.slug}`}
                      className="group flex flex-col gap-3 rounded-2xl border hairline bg-surface p-5 transition hover:border-emerald-500/40"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-[15px] font-semibold leading-tight">{i.name}</h3>
                        <ArrowUpRight
                          size={15}
                          className="mt-0.5 shrink-0 text-foreground/30 transition group-hover:text-emerald-400"
                        />
                      </div>
                      <p className="line-clamp-3 text-[12px] leading-relaxed text-foreground/55">
                        {i.clientMeaning}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-500">
                          {statusLabel[i.status] ?? i.status}
                        </span>
                        <span className="font-mono-nums text-[10px] text-foreground/35">
                          {i.source}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
