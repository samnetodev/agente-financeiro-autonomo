import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms } from "@/lib/content/glossary";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) return {};
  return {
    title: `${term.term} — Glossário financeiro`,
    description: term.definition,
    alternates: { canonical: absoluteUrl(`/glossario/${term.slug}`) },
  };
}

export default async function GlossaryTermPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) notFound();

  const related = term.related
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean)
    .slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Glossário", url: absoluteUrl("/glossario") },
          { name: term.term, url: absoluteUrl(`/glossario/${term.slug}`) },
        ])}
      />
      <div className="mx-auto max-w-[880px] px-4 pb-16 sm:px-6">
        <PageHeader eyebrow={term.category} title={term.term}>
          <Link
            href="/glossario"
            className="inline-flex items-center gap-1 text-[13px] text-foreground/50 transition hover:text-emerald-400"
          >
            ← Voltar ao glossário
          </Link>
        </PageHeader>

        <div className="flex flex-col gap-4">
          <Section title="Definição (30 segundos)">
            <p className="text-[15px] leading-relaxed text-foreground/85">{term.definition}</p>
          </Section>
          <Section title="Para o profissional do mercado financeiro">
            <p className="text-[14px] leading-relaxed text-foreground/75">{term.bancario}</p>
          </Section>
          <Section title="Aprofundamento técnico">
            <p className="text-[14px] leading-relaxed text-foreground/75">{term.tecnico}</p>
          </Section>

          {related.length > 0 ? (
            <Section title="Termos relacionados">
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r!.slug}
                    href={`/glossario/${r!.slug}`}
                    className="group inline-flex items-center gap-1 rounded-full border hairline bg-background px-3 py-1.5 text-[13px] text-foreground/70 transition hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    {r!.term} <ArrowRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </Section>
          ) : null}
        </div>

        <aside className="mt-10 flex flex-col gap-3 border-t hairline pt-6">
          <p className="font-mono-nums text-[11px] uppercase tracking-wider text-foreground/40">
            Aprofunde
          </p>
          <Link
            href="/explique"
            className="group inline-flex w-fit items-center gap-2 text-[14px] font-medium text-emerald-400 transition hover:gap-3"
          >
            Perguntar para o copiloto <ArrowUpRight size={14} />
          </Link>
        </aside>
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
      <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
