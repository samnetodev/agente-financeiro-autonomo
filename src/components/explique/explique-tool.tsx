"use client";

import { useState } from "react";
import Link from "next/link";
import { explain, type ExplainResult } from "@/lib/ia/explain";
import {
  Lightning,
  ArrowUpRight,
  Sparkle,
  Question,
  ArrowBendUpRight,
} from "@phosphor-icons/react/dist/ssr";

const suggestions = [
  "O que é Selic?",
  "Marcação a mercado",
  "Por que o CDB do cliente caiu?",
  "Diferença entre CDB e LCI",
  "O que é CET?",
  "Suitability",
  "Tesouro IPCA+",
  "O que é duration?",
];

export function ExpliqueTool() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<ExplainResult | null>(null);
  const [loading, setLoading] = useState(false);

  function run(q: string) {
    if (!q.trim()) return;
    setLoading(true);
    setResult(null);
    // simula um tick para dar feedback visual; o cálculo é síncrono
    setTimeout(() => {
      setResult(explain(q.trim()));
      setLoading(false);
    }, 350);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <label htmlFor="explique-input" className="sr-only">
          O que você quer entender?
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="explique-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && run(query)}
            placeholder="Digite um termo, indicador ou notícia... ex.: 'marcação a mercado'"
            className="h-12 flex-1 rounded-xl border hairline bg-surface px-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
          />
          <button
            onClick={() => run(query)}
            disabled={loading}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 active:scale-[0.98] disabled:opacity-60"
          >
            <Lightning size={16} weight="bold" />
            {loading ? "Entendendo..." : "Explicar"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => {
                setQuery(s);
                run(s);
              }}
              className="rounded-full border hairline bg-surface px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-6">
          {[100, 92, 84].map((w, i) => (
            <div
              key={i}
              className="h-4 animate-pulse rounded-full bg-foreground/10"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      ) : null}

      {result ? (
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
            <Sparkle size={20} className="mt-0.5 shrink-0 text-emerald-400" />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">{result.consulta}</p>
              <p className="font-mono-nums text-[11px] uppercase tracking-wider text-emerald-500/80">
                {result.fonte === "base-conhecimento"
                  ? "Base de conhecimento do portal"
                  : result.fonte === "ia"
                    ? "Gerado com apoio de IA"
                    : "Não verificado"}
              </p>
            </div>
          </div>

          <Section title="Resumo em 30 segundos" icon={<Lightning size={16} />}>
            <p className="text-[15px] leading-relaxed text-foreground/80">
              {result.resumo30s}
            </p>
          </Section>

          <Section title="Explicação técnica" icon={<Question size={16} />}>
            <p className="text-[14px] leading-relaxed text-foreground/75">
              {result.explicacaoTecnica}
            </p>
          </Section>

          <Section title="Por que isso importa?" icon={<Sparkle size={16} />}>
            <p className="text-[14px] leading-relaxed text-foreground/75">
              {result.porqueImporta}
            </p>
          </Section>

          {result.impactoCliente.length > 0 ? (
            <Section title="Impacto para o cliente" icon={<ArrowBendUpRight size={16} />}>
              <div className="grid gap-2 sm:grid-cols-3">
                {result.impactoCliente.map((c) => (
                  <div key={c.area} className="flex flex-col gap-1 rounded-xl border hairline bg-background p-3">
                    <span className="font-mono-nums text-[10px] uppercase tracking-wider text-emerald-500">
                      {c.area}
                    </span>
                    <p className="text-[13px] leading-relaxed text-foreground/70">{c.impacto}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}

          {result.perguntasConsultivas.length > 0 ? (
            <Section title="Como conversar com o cliente?" icon={<ArrowBendUpRight size={16} />}>
              <ul className="flex flex-col gap-2">
                {result.perguntasConsultivas.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-foreground/80">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          <div className="flex flex-col gap-4 rounded-2xl border hairline bg-surface p-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                Leia também
              </span>
              <div className="flex flex-wrap gap-2">
                {result.relacionado.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="inline-flex items-center gap-1 rounded-full border hairline bg-background px-3 py-1.5 text-[12px] text-foreground/70 transition hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    {r.label} <ArrowUpRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                Fontes
              </span>
              <div className="flex flex-wrap gap-2">
                {result.fontes.map((f) => (
                  <a
                    key={f.url}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1.5 text-[12px] text-emerald-300 transition hover:bg-emerald-500/10"
                  >
                    {f.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="flex items-start gap-2 text-[11px] leading-relaxed text-foreground/40">
            <Sparkle size={13} className="mt-0.5 shrink-0 text-emerald-500/60" />
            {result.disclaimer}
          </p>
        </div>
      ) : null}

      {!result && !loading ? (
        <div className="flex flex-col gap-2 rounded-2xl border border-dashed hairline p-6 text-center">
          <p className="text-sm text-foreground/50">
            Digite acima e receba: resumo em 30 segundos, explicação técnica,
            impacto para o cliente e perguntas consultivas.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border hairline bg-surface p-5">
      <h2 className="flex items-center gap-2 font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-500">
        {icon} {title}
      </h2>
      {children}
    </section>
  );
}
