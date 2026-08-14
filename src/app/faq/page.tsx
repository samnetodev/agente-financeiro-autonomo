import type { Metadata } from "next";
import { faqs } from "@/lib/content/faqs";
import { PageHeader } from "@/components/layout/page-header";
import { FaqRow } from "@/components/content/cards";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Perguntas que todo profissional do mercado financeiro deveria saber responder: Selic, CDI, IPCA, CDB, LCI, LCA, Tesouro, marcação a mercado, CET, FGC e mais.",
};

const groups = [...new Set(faqs.map((f) => f.category))];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answerShort })))} />
      <JsonLd data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "FAQ", url: "/faq" }])} />
      <div className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Motor de conteúdo"
          title="Perguntas que todo profissional do mercado financeiro deveria saber responder"
          sub="Resposta curta, aprofundada e exemplo prático — prontas para você usar na conversa."
        />
        <div className="flex flex-col gap-8">
          {groups.map((group) => {
            const items = faqs.filter((f) => f.category === group);
            return (
              <section key={group} className="flex flex-col gap-3">
                <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-foreground/45">
                  {group}
                </h2>
                <div className="grid gap-2 md:grid-cols-2">
                  {items.map((f) => (
                    <FaqRow key={f.slug} faq={f} />
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
