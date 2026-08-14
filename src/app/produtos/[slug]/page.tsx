import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/content/products";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";
import { ArrowUpRight, WarningCircle } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Produtos profissionais do mercado financeiro`,
    description: product.concept,
    alternates: { canonical: absoluteUrl(`/produtos/${product.slug}`) },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Produtos", url: absoluteUrl("/produtos") },
          { name: product.name, url: absoluteUrl(`/produtos/${product.slug}`) },
        ])}
      />
      <div className="mx-auto max-w-[880px] px-4 pb-16 sm:px-6">
        <PageHeader eyebrow={product.category} title={product.name} sub={product.concept}>
          <Link
            href="/produtos"
            className="inline-flex items-center gap-1 text-[13px] text-foreground/50 transition hover:text-emerald-400"
          >
            ← Voltar aos produtos
          </Link>
        </PageHeader>

        <div className="grid gap-4 md:grid-cols-2">
          <Section title="Como funciona" span>
            <p className="text-[14px] leading-relaxed text-foreground/80">{product.funcionamento}</p>
          </Section>

          <Section title="Público típico">
            <p className="text-[14px] leading-relaxed text-foreground/80">{product.publico}</p>
          </Section>

          <Section title="Liquidez">
            <p className="text-[14px] leading-relaxed text-foreground/80">{product.liquidez}</p>
          </Section>

          <Section title="Tributação">
            <p className="text-[14px] leading-relaxed text-foreground/80">{product.tributacao}</p>
          </Section>

          <Section title="Riscos" tone="rose">
            <ul className="flex flex-col gap-2">
              {product.riscos.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75">
                  <WarningCircle size={14} className="mt-0.5 shrink-0 text-rose-400" />
                  {r}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Garantias">
            <ul className="flex flex-col gap-2">
              {product.garantias.map((g, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {g}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Vantagens">
            <ul className="flex flex-col gap-2">
              {product.vantagens.map((v, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {v}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Limitações">
            <ul className="flex flex-col gap-2">
              {product.limitacoes.map((l, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                  {l}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Perguntas de diagnóstico" span>
            <ul className="grid gap-2 sm:grid-cols-2">
              {product.perguntasDiagnostico.map((p, i) => (
                <li key={i} className="rounded-xl border hairline bg-background p-3 text-[13px] leading-relaxed text-foreground/75">
                  “{p}”
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Objeções comuns" span>
            <div className="flex flex-col gap-2">
              {product.objecoes.map((o, i) => (
                <div key={i} className="flex flex-col gap-1 rounded-xl border hairline bg-background p-3">
                  <p className="text-[13px] font-semibold text-foreground">“{o.objecao}”</p>
                  <p className="text-[13px] leading-relaxed text-foreground/70">{o.resposta}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Compliance e adequação" tone="accent" span>
            <ul className="flex flex-col gap-2">
              {product.compliance.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Fontes" span>
            <div className="flex flex-wrap gap-2">
              {product.sources.map((s) => (
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
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  tone = "default",
  span,
  children,
}: {
  title: string;
  tone?: "default" | "rose" | "accent";
  span?: boolean;
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    default: "text-foreground/45",
    rose: "text-rose-400",
    accent: "text-emerald-400",
  };
  return (
    <section
      className={`flex flex-col gap-3 rounded-2xl border hairline bg-surface p-5 ${span ? "md:col-span-2" : ""}`}
    >
      <h2 className={`font-mono-nums text-[11px] uppercase tracking-[0.16em] ${tones[tone]}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}
