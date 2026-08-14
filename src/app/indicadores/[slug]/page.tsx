import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { indicatorCatalog } from "@/lib/content/indicators";
import { PageHeader } from "@/components/layout/page-header";
import { Sparkline } from "@/components/radar/sparkline";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";
import { ArrowUpRight, TrendDown, TrendUp } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return indicatorCatalog.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const indicator = indicatorCatalog.find((i) => i.slug === slug);
  if (!indicator) return {};
  return {
    title: `${indicator.name} — Indicador`,
    description: indicator.clientMeaning,
    alternates: { canonical: absoluteUrl(`/indicadores/${indicator.slug}`) },
  };
}

export default async function IndicatorPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const indicator = indicatorCatalog.find((i) => i.slug === slug);
  if (!indicator) notFound();

  const up = (indicator.changePct ?? 0) >= 0;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Indicadores", url: absoluteUrl("/indicadores") },
          { name: indicator.name, url: absoluteUrl(`/indicadores/${indicator.slug}`) },
        ])}
      />
      <div className="mx-auto max-w-[1000px] px-4 pb-16 sm:px-6">
        <PageHeader eyebrow={indicator.category} title={indicator.name}>
          <Link
            href="/indicadores"
            className="inline-flex items-center gap-1 text-[13px] text-foreground/50 transition hover:text-emerald-400"
          >
            ← Voltar aos indicadores
          </Link>
        </PageHeader>

        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border hairline bg-surface p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono-nums text-4xl font-bold tracking-tight tabular-nums">
                  {indicator.value}
                </span>
                <span className="text-foreground/50">{indicator.unit}</span>
                {indicator.change ? (
                  <span
                    className={`flex items-center gap-1 font-mono-nums text-sm tabular-nums ${
                      up ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {up ? <TrendUp size={15} /> : <TrendDown size={15} />}
                    {indicator.change}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono-nums text-[11px] uppercase tracking-wider ${
                    indicator.status === "live"
                      ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-500"
                      : indicator.status === "reference"
                        ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300"
                        : "border-foreground/10 bg-foreground/5 text-foreground/60"
                  }`}
                >
                  {indicator.status}
                </span>
                {indicator.value !== "" && indicator.status !== "unavailable" ? (
                  <span
                    className={`flex items-center gap-1 font-mono-nums text-sm tabular-nums ${
                      up ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {up ? <TrendUp size={15} /> : <TrendDown size={15} />}
                    {indicator.change ?? indicator.value}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="mt-5">
              <Sparkline data={indicator.series} positive={up} />
            </div>
            <p className="mt-3 font-mono-nums text-[10px] uppercase tracking-wider text-foreground/35">
              Atualizado: {indicator.timestamp}
            </p>
          </div>

          <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
            <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-500">
              O que significa para o cliente
            </h2>
            <p className="text-[15px] leading-relaxed text-foreground/85">
              {indicator.clientMeaning}
            </p>
          </section>

          <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
            <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-500">
              Do indicador à conversa
            </h2>
            <div className="flex flex-col gap-3">
              <ConversationCard
                trigger={`"O ${indicator.name.toLowerCase()} se mexe todo dia?"`}
                answer="Depende. Nós separamos o que é ruído do que é tendência: acompanhamos o valor, a fonte e o impacto na vida de quem tem crédito, investimentos ou meta de longo prazo."
              />
              <ConversationCard
                trigger="Perguntas para abrir a conversa"
                answer="Você acompanha esse indicador em algum extrato ou na mídia? Sabe o que ele muda no seu bolso? Quer que eu mostre na prática com o seu cenário?"
              />
            </div>
          </section>

          <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
            <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-foreground/45">
              Fonte do dado
            </h2>
            <a
              href={indicator.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1.5 text-[13px] text-emerald-300 transition hover:bg-emerald-500/10"
            >
              {indicator.source} <ArrowUpRight size={13} />
            </a>
            <p className="text-[11px] leading-relaxed text-foreground/40">
              Quando a fonte oficial está indisponível no momento do acesso, o portal exibe o
              valor como “referência” ou “indisponível” em vez de inventar um número.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

function ConversationCard({
  trigger,
  answer,
}: {
  trigger: string;
  answer: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border hairline bg-background p-4">
      <p className="text-[13px] font-semibold text-foreground">{trigger}</p>
      <p className="text-[13px] leading-relaxed text-foreground/70">{answer}</p>
    </div>
  );
}
