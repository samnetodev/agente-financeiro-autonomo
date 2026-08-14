import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import {
  Lightning,
  Translate,
  Calculator,
  ArrowUpRight,
  ChatCircleText,
  TrendUp,
  BookOpenText,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Ferramentas para o profissional do mercado financeiro",
  description:
    "Ferramentas práticas: copiloto de explicação, tradutor do mercado, simulador de juros compostos e de renda fixa (CDI, IPCA+ e prefixado).",
};

const tools = [
  {
    title: "Explique para mim",
    desc: "Copiloto que explica termos, indicadores e notícias em 3 níveis, com impacto para o cliente e fontes.",
    href: "/explique",
    icon: Lightning,
  },
  {
    title: "Tradutor do mercado",
    desc: "Converte o jargão da mesa em linguagem simples, prática e comercial.",
    href: "/tradutor",
    icon: Translate,
  },
  {
    title: "Simulador de juros compostos",
    desc: "Compare aporte único, mensal e cenários em pós-fixado e prefixado.",
    href: "/ferramentas/simulador-juros",
    icon: Calculator,
  },
  {
    title: "Simulador de renda fixa",
    desc: "Compare CDI, IPCA+ e prefixado em um cenário: bruto, líquido e cenários adversos.",
    href: "/ferramentas/simulador-renda-fixa",
    icon: TrendUp,
  },
];

export default function FerramentasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Ferramentas", url: "/ferramentas" },
        ])}
      />
      <div className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Ferramentas"
          title="Ferramentas para o profissional do mercado financeiro"
          sub="Recursos práticos para explicar, simular e converter cenário em conversa consultiva."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex flex-col gap-4 rounded-2xl border hairline bg-surface p-6 transition hover:border-emerald-500/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <t.icon size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h2 className="flex items-center gap-2 text-[16px] font-semibold">
                  {t.title}
                  <ArrowUpRight
                    size={15}
                    className="text-foreground/30 transition group-hover:text-emerald-400"
                  />
                </h2>
                <p className="text-[13px] leading-relaxed text-foreground/55">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
          <h2 className="flex items-center gap-2 font-mono-nums text-[11px] uppercase tracking-[0.16em] text-foreground/45">
            <ChatCircleText size={15} /> Conversas prontas
          </h2>
          <p className="max-w-[70ch] text-[13px] leading-relaxed text-foreground/60">
            Um bom produto de atendimento não precisa de criatividade na hora. Use os roteiros
            de diagnóstico e objeções de cada produto ou as perguntas consultivas do copiloto.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/produtos"
              className="rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              Roteiros por produto
            </Link>
            <Link
              href="/faq"
              className="rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              Perguntas e respostas
            </Link>
            <Link
              href="/guias"
              className="rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              Guias em 3 níveis
            </Link>
            <Link
              href="/explique"
              className="rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              Copiloto
            </Link>
          </div>
        </div>
        <p className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-[12px] leading-relaxed text-emerald-200/80">
          <BookOpenText size={16} className="shrink-0 text-emerald-400" />
          Ferramentas educacionais. Simulações são ilustrativas e não consideram taxas de
          corretagem, impostos além do IR informado ou mudanças regulatórias futuras.
        </p>
      </div>
    </>
  );
}
