import type { Metadata } from "next";
import { glossaryTerms } from "@/lib/content/glossary";
import { PageHeader } from "@/components/layout/page-header";
import { GlossaryCard } from "@/components/content/cards";
import { SearchGlossary } from "@/components/glossario/search-glossary";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Glossário financeiro",
  description:
    "Glossário pesquisável com os termos que todo profissional do mercado financeiro precisa dominar: juros, renda fixa, fundos, crédito, câmbio, previdência e seguros.",
};

const groups = [...new Set(glossaryTerms.map((t) => t.category))];

export default function GlossarioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Glossário", url: "/glossario" }])} />
      <div className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Referência"
          title="Glossário financeiro"
          sub="Cada termo em três níveis: definição simples, visão do profissional do mercado financeiro e aprofundamento técnico."
        >
          <SearchGlossary terms={glossaryTerms} />
        </PageHeader>

        <div className="flex flex-col gap-10">
          {groups.map((group) => {
            const terms = glossaryTerms.filter((t) => t.category === group);
            return (
              <section key={group} className="flex flex-col gap-4">
                <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                  {group}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {terms.map((t) => (
                    <GlossaryCard key={t.slug} term={t} />
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
