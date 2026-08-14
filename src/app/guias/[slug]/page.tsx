import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/content/articles";
import { PageHeader } from "@/components/layout/page-header";
import { ArticleCard } from "@/components/content/cards";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";
import {
  ArrowUpRight,
  Clock,
  Question,
  Sparkle,
  TrendUp,
  WarningCircle,
  ChatCircleText,
} from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: absoluteUrl(`/guias/${article.slug}`) },
    keywords: article.related,
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.metaDescription,
      url: absoluteUrl(`/guias/${article.slug}`),
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.related
    .map((s) => getArticle(s))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          url: absoluteUrl(`/guias/${article.slug}`),
          keywords: article.related,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Guias", url: absoluteUrl("/guias") },
          { name: article.title, url: absoluteUrl(`/guias/${article.slug}`) },
        ])}
      />
      <div className="mx-auto max-w-[880px] px-4 pb-16 sm:px-6">
        <PageHeader eyebrow={article.category} title={article.title} sub={article.excerpt}>
          <div className="flex flex-wrap items-center gap-4 font-mono-nums text-[11px] uppercase tracking-wider text-foreground/40">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-emerald-500" /> {article.readTime}
            </span>
            <span>{article.author}</span>
            <span>Atualizado: {article.updatedAt}</span>
          </div>
        </PageHeader>

        <div className="flex flex-col gap-5">
          <Level title="Nível 1 — 30 segundos" tone="emerald" icon={<Sparkle size={16} />}>
            <p className="text-[15px] leading-relaxed text-foreground/85">{article.levels.t30}</p>
          </Level>

          <Level title="Nível 2 — Profissional" tone="accent" icon={<ChatCircleText size={16} />}>
            <p className="text-[15px] leading-relaxed text-foreground/85">{article.levels.bancario}</p>
          </Level>

          <Level title="Nível 3 — Técnico" tone="neutral" icon={<Question size={16} />}>
            <p className="text-[15px] leading-relaxed text-foreground/85">{article.levels.tecnico}</p>
          </Level>

          <Block title="Exemplo prático" tone="neutral">
            <p className="text-[14px] leading-relaxed text-foreground/75">{article.example}</p>
          </Block>

          <Block title="Impacto para o cliente" tone="emerald">
            <ul className="flex flex-col gap-2.5">
              {article.clientImpact.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {c}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Oportunidades comerciais (consultivas)" tone="accent">
            <ul className="flex flex-col gap-2.5">
              {article.opportunities.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/75">
                  <TrendUp size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  {o}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Perguntas de diagnóstico" tone="accent">
            <ul className="flex flex-col gap-2.5">
              {article.perguntas.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/75">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 font-mono-nums text-[10px] text-emerald-400">
                    {i + 1}
                  </span>
                  “{p}”
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Erros comuns" tone="rose">
            <ul className="flex flex-col gap-2.5">
              {article.errosComuns.map((e, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/75">
                  <WarningCircle size={16} className="mt-0.5 shrink-0 text-rose-400" />
                  {e}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Fontes e referências" tone="neutral">
            <ul className="flex flex-col gap-2">
              {article.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[14px] text-emerald-400 transition hover:underline"
                  >
                    {s.label} <ArrowUpRight size={13} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[12px] leading-relaxed text-foreground/45">
              Conteúdo educacional e informativo. Não constitui recomendação personalizada
              de investimento, crédito ou seguro.
            </p>
          </Block>
        </div>

        <aside className="mt-12 flex flex-col gap-4 border-t hairline pt-8">
          <h2 className="text-lg font-semibold tracking-tight">Leia também</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <ArticleCard key={r!.slug} article={r!} />
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

function Level({
  title,
  tone,
  icon,
  children,
}: {
  title: string;
  tone: "emerald" | "accent" | "neutral" | "rose";
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
    accent: "border-emerald-500/20 bg-surface text-emerald-300",
    neutral: "border-hairline bg-surface text-foreground/60",
    rose: "border-rose-500/25 bg-rose-500/5 text-rose-400",
  };
  return (
    <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
      <h2 className={`flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono-nums text-[11px] uppercase tracking-[0.14em] ${tones[tone]}`}>
        {icon} {title}
      </h2>
      {children}
    </section>
  );
}

function Block({
  title,
  tone,
  children,
}: {
  title: string;
  tone: "emerald" | "accent" | "neutral" | "rose";
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    emerald: "text-emerald-500",
    accent: "text-emerald-300",
    neutral: "text-foreground/45",
    rose: "text-rose-400",
  };
  return (
    <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
      <h2 className={`font-mono-nums text-[11px] uppercase tracking-[0.16em] ${tones[tone]}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}
