import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/content/articles";
import { indicatorCatalog } from "@/lib/content/indicators";
import { agenda } from "@/lib/content/agenda";
import { opportunities } from "@/lib/content/opportunities";
import { news } from "@/lib/content/news";
import { glossaryTerms } from "@/lib/content/glossary";
import { faqs } from "@/lib/content/faqs";
import { products } from "@/lib/content/products";
import { sources } from "@/lib/content/sources";
import { JsonLd, websiteSchema, organizationSchema } from "@/lib/seo/json-ld";
import { buildRadar } from "@/lib/market/radar";
import { RadarPanel } from "@/components/radar/radar-panel";
import { Ticker } from "@/components/market/ticker";
import { Briefing } from "@/components/home/briefing";
import { Newsletter } from "@/components/home/newsletter";
import { GlossaryIA } from "@/components/home/glossary-ia";
import { IndicatorToConversation } from "@/components/home/indicator-chain";
import { SectionHeading, Badge } from "@/components/ui/primitives";
import {
  ArticleCard,
  FaqRow,
  GlossaryCard,
  ProductCard,
} from "@/components/content/cards";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDots,
  Compass,
  ChartLineUp,
  Lightning,
  Translate,
  MathOperations,
  Newspaper,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Agente Financeiro Autônomo — Central de Inteligência para o Mercado Financeiro",
  description:
    "Um agente de IA que vigia o mercado, explica o que importa e traduz cada indicador em conversa consultiva. Fontes oficiais em tudo.",
};

export const dynamic = "force-dynamic";

const selic = indicatorCatalog.find((i) => i.slug === "selic")!;
const nextAgenda = agenda
  .filter((e) => e.date >= new Date().toISOString().slice(0, 10))
  .slice(0, 3);

const glossarioSugestoes = [
  "O que é CDB?",
  "O que é LCI?",
  "O que é LCA?",
  "O que é Tesouro Direto?",
  "O que é a poupança?",
  "O que é previdência privada?",
  "O que é CET?",
  "O que é FGC?",
];

const tools = [
  {
    href: "/explique",
    icon: Lightning,
    title: "Explique para mim",
    desc: "Entenda um termo, indicador ou notícia em 3 níveis, com impacto para o cliente.",
  },
  {
    href: "/tradutor",
    icon: Translate,
    title: "Tradutor do mercado",
    desc: "Transforme jargão do mercado em linguagem simples, prática e comercial.",
  },
  {
    href: "/ferramentas",
    icon: MathOperations,
    title: "Simuladores",
    desc: "Juros compostos, CDI, IPCA+, CET e marcação a mercado. Educacional.",
  },
  {
    href: "/chat",
    icon: ChartLineUp,
    title: "Chat do dia",
    desc: "Comente a produção do dia com outros profissionais do mercado financeiro. Público, sem login.",
  },
];

export default async function HomePage() {
  const indicators = await buildRadar();

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <Ticker indicators={indicators} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b hairline">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-24">
          <div className="flex flex-col gap-6">
            <Badge tone="accent" className="w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Agente de IA para profissionais do mercado financeiro
            </Badge>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Comece o dia{" "}
              <span className="text-emerald-400">sabendo o que importa.</span>
            </h1>
            <p className="max-w-[55ch] text-balance text-base leading-relaxed text-foreground/60 sm:text-lg">
              Um agente de IA que vigia o mercado, explica o que importa e
              traduz cada indicador em conversa consultiva — com fonte oficial
              em tudo.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/radar"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 active:scale-[0.98]"
              >
                Ver Radar de Hoje <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/guias"
                className="inline-flex h-12 items-center gap-2 rounded-xl border hairline bg-surface px-6 text-sm font-medium text-foreground/85 transition hover:border-emerald-500/40 hover:text-emerald-300 active:scale-[0.98]"
              >
                Explorar conteúdos
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono-nums text-[11px] uppercase tracking-wider text-foreground/40">
              <span className="flex items-center gap-1.5">
                <Compass size={13} className="text-emerald-400" /> Indicadores oficiais
              </span>
              <span className="flex items-center gap-1.5">
                <Lightning size={13} className="text-emerald-400" /> Explicações por IA
              </span>
              <span className="flex items-center gap-1.5">
                <ChartLineUp size={13} className="text-emerald-400" /> Venda consultiva
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border hairline bg-surface/70 p-5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                  Do indicador à conversa
                </span>
                <span className="flex items-center gap-1.5 font-mono-nums text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  SELIC ↑
                </span>
              </div>
              <div className="flex flex-col divide-y hairline">
                {[
                  "Impacto econômico",
                  "Impacto nos produtos",
                  "Impacto no cliente",
                  "Perguntas para diagnóstico",
                  "Possíveis oportunidades",
                  "Fontes oficiais",
                ].map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 py-2.5 text-[13px] text-foreground/75"
                  >
                    <span className="font-mono-nums text-[10px] text-emerald-500">
                      0{i + 1}
                    </span>
                    {s}
                    {i === 3 ? (
                      <span className="ml-auto text-[11px] text-foreground/40">
                        “Como está sua reserva de emergência?”
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEFING */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Briefing indicators={indicators} />
      </section>

      {/* RADAR */}
      <section className="border-y hairline bg-surface/40">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Radar do Mercado"
              title="Principais indicadores do dia"
              sub="Mercado, juros, inflação, renda fixa e crédito. Cada card aponta a fonte oficial."
            />
            <Link
              href="/radar"
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition hover:gap-2"
            >
              Radar completo <ArrowRight size={14} />
            </Link>
          </div>
          <RadarPanel indicators={indicators} />
        </div>
      </section>

      {/* NOTÍCIAS */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Notícias"
              title="O que está movimentando o mercado"
              sub="Tendências estruturais e contexto para o dia a dia. Sem alarde: com fonte, impacto e tag."
            />
            <Link
              href="/noticias"
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition hover:gap-2"
            >
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {news.slice(0, 4).map((n) => (
              <article
                key={n.slug}
                className="flex flex-col gap-2 rounded-2xl border hairline bg-surface p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge tone="neutral">{n.category}</Badge>
                  <span className="font-mono-nums text-[10px] text-foreground/35">
                    {n.source}
                  </span>
                </div>
                <h3 className="text-balance text-[15px] font-semibold leading-snug text-foreground">
                  {n.title}
                </h3>
                <p className="line-clamp-3 text-[13px] leading-relaxed text-foreground/55">
                  {n.summary}
                </p>
                <p className="mt-auto flex items-start gap-1.5 border-t hairline pt-3 text-[12px] leading-snug text-foreground/45">
                  <Newspaper size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                  {n.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDICADOR -> CONVERSA */}
      <section className="border-y hairline bg-surface/40">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHeading
              eyebrow="Do indicador à conversa"
              title="SELIC ↑ — o que isso significa para o cliente?"
              sub="A cadeia completa: do número à pergunta de diagnóstico. O diferencial do portal."
            />
            <ul className="flex flex-col gap-3 text-[14px] leading-relaxed text-foreground/70">
              <li className="flex gap-3 rounded-xl border hairline bg-background p-4">
                <span className="font-mono-nums text-emerald-400">01</span>
                <span>
                  <strong className="text-foreground">Impacto econômico:</strong> juros
                  mais altos tendem a elevar o custo de oportunidade de manter recursos
                  líquidos e o custo do crédito.
                </span>
              </li>
              <li className="flex gap-3 rounded-xl border hairline bg-background p-4">
                <span className="font-mono-nums text-emerald-400">02</span>
                <span>
                  <strong className="text-foreground">Produtos:</strong> renda fixa
                  pós-fixada passa a render mais; financiamentos e crédito ficam mais
                  caros.
                </span>
              </li>
              <li className="flex gap-3 rounded-xl border hairline bg-background p-4">
                <span className="font-mono-nums text-emerald-400">03</span>
                <span>
                  <strong className="text-foreground">Cliente:</strong> quem tem
                  dinheiro parado perde oportunidade; quem planeja financiar precisa
                  revisar a capacidade de pagamento.
                </span>
              </li>
            </ul>
          </div>
          <IndicatorToConversation indicator={selic} />
        </div>
      </section>

      {/* OPORTUNIDADES */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Oportunidades comerciais"
            title="Sinais que valem uma conversa consultiva"
            sub="Diagnóstico, nunca empurrão. Cada sinal é um convite para entender o cliente."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.slice(0, 6).map((o) => (
              <article
                key={o.slug}
                className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-5 transition hover:border-emerald-500/40"
              >
                <h3 className="text-[15px] font-semibold text-foreground">{o.title}</h3>
                <p className="text-[13px] leading-relaxed text-foreground/60">
                  {o.diagnostico}
                </p>
                <p className="mt-auto border-t hairline pt-3 font-mono-nums text-[11px] uppercase tracking-wider text-emerald-500/80">
                  {o.trigger}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="border-y hairline bg-surface/40">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Agenda econômica"
              title="O que acompanhar nos próximos dias"
            />
            <Link
              href="/radar"
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition hover:gap-2"
            >
              Ver agenda completa <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex flex-col divide-y hairline rounded-2xl border hairline bg-surface">
            {nextAgenda.map((e) => (
              <div key={`${e.date}-${e.indicator}`} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-3 sm:w-44">
                  <CalendarDots size={18} className="text-emerald-400" />
                  <span className="font-mono-nums text-sm text-foreground/85">
                    {e.date.slice(8, 10)}/{e.date.slice(5, 7)} · {e.time}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{e.indicator}</p>
                  <p className="text-xs text-foreground/50">
                    {e.expectation ?? "Expectativa conforme divulgação oficial"} · {e.timezone}
                  </p>
                </div>
                <Badge tone={e.importance === "alta" ? "accent" : "neutral"}>
                  {e.importance}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIAS */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Conteúdo aprofundado"
              title="Guias em três níveis: 30s, profissional e técnico"
            />
            <Link
              href="/guias"
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition hover:gap-2"
            >
              Todos os guias <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articles.slice(0, 8).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + GLOSSÁRIO */}
      <section className="border-y hairline bg-surface/40">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="flex items-end justify-between gap-3">
              <SectionHeading title="Perguntas que todo profissional do mercado financeiro deveria saber responder" />
              <Link
                href="/faq"
                aria-label="Ver todas as perguntas"
                className="shrink-0 text-emerald-400 transition hover:opacity-80"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {faqs.slice(0, 6).map((f) => (
                <FaqRow key={f.slug} faq={f} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-end justify-between gap-3">
              <SectionHeading title="Glossário financeiro pesquisável" />
              <Link
                href="/glossario"
                aria-label="Abrir glossário"
                className="shrink-0 text-emerald-400 transition hover:opacity-80"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {glossaryTerms.slice(0, 8).map((t) => (
                <GlossaryCard key={t.slug} term={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FERRAMENTAS */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Ferramentas"
            title="Ferramentas do Agente Financeiro Autônomo"
            sub="Entenda, pesquise, traduza e simule — sempre com linguagem educacional."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex flex-col gap-4 rounded-2xl border hairline bg-surface p-5 transition hover:border-emerald-500/40 hover:shadow-[0_0_30px_-12px_rgba(52,211,153,0.35)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10">
                  <t.icon size={20} className="text-emerald-400" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-semibold text-foreground group-hover:text-emerald-300">
                    {t.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-foreground/55">
                    {t.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="border-y hairline bg-surface/40">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Produtos profissionais do mercado financeiro"
              title="Do conceito à objeção"
            />
            <Link
              href="/produtos"
              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition hover:gap-2"
            >
              Todos os produtos <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {["cdb", "lci", "lca", "poupanca", "tesouro-direto", "previdencia"]
              .map((slug) => products.find((p) => p.slug === slug))
              .filter(Boolean)
              .map((p) => (
                <ProductCard key={p!.slug} product={p!} />
              ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <Newsletter />
      </section>

      {/* GLOSSÁRIO POR IA */}
      <section className="border-t hairline bg-background">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <GlossaryIA suggestions={glossarioSugestoes} />
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t hairline bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Fontes oficiais"
            title="Onde confirmar cada informação"
          />
          <div className="flex flex-wrap gap-2">
            {sources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border hairline bg-surface px-4 py-2 text-[13px] text-foreground/70 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                {s.name}
                <ArrowUpRight size={13} className="text-foreground/30 transition group-hover:text-emerald-400" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
