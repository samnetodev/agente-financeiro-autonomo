import type { Metadata } from "next";
import { articles } from "@/lib/content/articles";
import { PageHeader } from "@/components/layout/page-header";
import { ArticleCard } from "@/components/content/cards";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Guias e artigos",
  description:
    "Guias completos em três níveis (30 segundos, profissional e técnico) sobre juros, renda fixa, crédito, fundos, previdência, seguros e câmbio.",
};

const categories = [...new Set(articles.map((a) => a.category))];

export default function GuiasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Guias", url: "/guias" }])} />
      <div className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Biblioteca"
          title="Guias em três níveis"
          sub="Cada guia tem resumo em 30 segundos, explicação para o profissional do mercado financeiro, aprofundamento técnico, impacto no cliente e fontes oficiais."
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border hairline bg-surface px-3 py-1.5 font-mono-nums text-[11px] uppercase tracking-wider text-foreground/55"
              >
                {c}
              </span>
            ))}
          </div>
        </PageHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </>
  );
}
