import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/content/news";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";
import { ArrowUpRight, Clock } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Notícias e cenário",
  description:
    "Principais notícias do mercado financeiro com resumo, impacto prático e o que mudam na rotina do profissional do mercado financeiro.",
};

export default function NoticiasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Notícias", url: "/noticias" },
        ])}
      />
      <div className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
        <PageHeader
          eyebrow="Cenário do dia"
          title="Notícias e o que elas mudam"
          sub="Cada notícia traz um resumo, o impacto prático e a fonte original. Sem alarde: só o que importa para a conversa com o cliente."
        />
        <div className="flex flex-col gap-3">
          {news.map((n) => (
            <article
              key={n.slug}
              className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-5 transition hover:border-emerald-500/40 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono-nums text-[10px] uppercase tracking-wider text-emerald-400">
                    {n.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono-nums text-[11px] text-foreground/40">
                    <Clock size={12} /> {n.date} · {n.time}
                  </span>
                </div>
                <h2 className="text-[16px] font-semibold leading-snug">{n.title}</h2>
                <p className="max-w-[60ch] text-[13px] leading-relaxed text-foreground/60">
                  {n.summary}
                </p>
                <p className="max-w-[60ch] text-[13px] leading-relaxed text-emerald-300/80">
                  Impacto: {n.impact}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2">
                <a
                  href={n.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
                >
                  {n.source} <ArrowUpRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed hairline p-6 text-center">
          <p className="text-[13px] text-foreground/50">
            As notícias são resumidas manualmente com base em comunicados oficiais e veículos
            de imprensa. <Link href="/fontes" className="text-emerald-400 hover:underline">Ver fontes</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
