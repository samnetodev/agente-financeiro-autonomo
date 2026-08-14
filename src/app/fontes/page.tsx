import type { Metadata } from "next";
import { sources } from "@/lib/content/sources";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Fontes oficiais",
  description:
    "Todas as fontes oficiais usadas pelo portal: Banco Central, IBGE, B3, Tesouro, ANBIMA, CVM, SUSEP e mais. Transparência sobre a origem de cada dado.",
};

const groups = [...new Set(sources.map((s) => s.category))];

export default function FontesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Fontes", url: "/fontes" },
        ])}
      />
      <div className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Transparência"
          title="Fontes oficiais"
          sub="O portal usa apenas fontes oficiais e verificáveis. Nenhum número, índice ou norma é inventado. Esta página reúne tudo o que usamos."
        />
        <div className="flex flex-col gap-8">
          {groups.map((group) => {
            const items = sources.filter((s) => s.category === group);
            return (
              <section key={group} className="flex flex-col gap-3">
                <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                  {group === "nacional" ? "Brasil" : group === "internacional" ? "Internacional" : group}
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((s) => (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-2 rounded-2xl border hairline bg-surface p-5 transition hover:border-emerald-500/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[15px] font-semibold leading-tight">{s.name}</h3>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-foreground/30 transition group-hover:text-emerald-400"
                        />
                      </div>
                      <p className="text-[13px] leading-relaxed text-foreground/55">{s.description}</p>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <p className="mt-10 border-t hairline pt-6 text-[12px] leading-relaxed text-foreground/45">
          O acesso aos sites e dados de terceiros é de responsabilidade das respectivas
          instituições. O portal não é afiliado a nenhuma delas e apenas as cita como
          referência pública de dados.
        </p>
      </div>
    </>
  );
}
