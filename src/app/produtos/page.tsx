import type { Metadata } from "next";
import { products } from "@/lib/content/products";
import { PageHeader } from "@/components/layout/page-header";
import { ProductCard } from "@/components/content/cards";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Produtos profissionais do mercado financeiro",
  description:
    "Conteúdo aprofundado sobre produtos financeiros: conceito, funcionamento, riscos, liquidez, tributação, garantias, objeções e compliance.",
};

const groups = [...new Set(products.map((p) => p.category))];

export default function ProdutosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Produtos", url: "/produtos" }])} />
      <div className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Biblioteca"
          title="Produtos profissionais do mercado financeiro"
          sub="Do conceito ao compliance: funcionamento, riscos, tributação, perguntas de diagnóstico e objeções."
        />
        <div className="flex flex-col gap-10">
          {groups.map((group) => {
            const items = products.filter((p) => p.category === group);
            return (
              <section key={group} className="flex flex-col gap-4">
                <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                  {group}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((p) => (
                    <ProductCard key={p.slug} product={p} />
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
