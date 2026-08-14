import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqs } from "@/lib/content/faqs";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return faqs.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const faq = faqs.find((f) => f.slug === slug);
  if (!faq) return {};
  return {
    title: faq.question,
    description: faq.answerShort,
    alternates: { canonical: absoluteUrl(`/faq/${faq.slug}`) },
  };
}

export default async function FaqDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const faq = faqs.find((f) => f.slug === slug);
  if (!faq) notFound();

  const related = faq.related
    .map((slug) => faqs.find((f) => f.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={faqSchema([
          {
            question: faq.question,
            answer: faq.answer,
          },
        ])}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: absoluteUrl("/") },
          { name: "FAQ", url: absoluteUrl("/faq") },
          { name: faq.question, url: absoluteUrl(`/faq/${faq.slug}`) },
        ])}
      />
      <div className="mx-auto max-w-[880px] px-4 pb-16 sm:px-6">
        <PageHeader eyebrow={faq.category} title={faq.question}>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-[13px] text-foreground/50 transition hover:text-emerald-400"
          >
            ← Voltar às perguntas
          </Link>
        </PageHeader>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6">
            <h2 className="mb-2 font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-400">
              Resposta em 30 segundos
            </h2>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              {faq.answerShort}
            </p>
          </div>

          <Section title="Resposta aprofundada">
            <p className="text-[15px] leading-relaxed text-foreground/80">{faq.answer}</p>
          </Section>

          <Section title="Exemplo do dia a dia">
            <p className="text-[14px] leading-relaxed text-foreground/75">{faq.example}</p>
          </Section>

          {faq.sources.length > 0 ? (
            <Section title="Fontes">
              <div className="flex flex-wrap gap-2">
                {faq.sources.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1.5 text-[13px] text-emerald-300 transition hover:bg-emerald-500/10"
                  >
                    {s.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </Section>
          ) : null}

          {related.length > 0 ? (
            <Section title="Perguntas relacionadas">
              <div className="grid gap-2 md:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r!.slug}
                    href={`/faq/${r!.slug}`}
                    className="rounded-xl border hairline bg-background p-3 text-[13px] text-foreground/75 transition hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    {r!.question}
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
      <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-foreground/45">
        {title}
      </h2>
      {children}
    </section>
  );
}
