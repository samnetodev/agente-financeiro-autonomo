"use client";

import { useRef, useState, useTransition } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChatCircleText,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Badge, SectionHeading } from "@/components/ui/primitives";

type Fonte = "base-conhecimento" | "ia" | "nao-verificado";

interface ImpactoCliente {
  area: string;
  impacto: string;
}

interface GlossarioResponse {
  consulta: string;
  fonte: Fonte;
  resumo30s: string;
  explicacaoTecnica: string;
  porqueImporta: string;
  impactoCliente: ImpactoCliente[];
  perguntasConsultivas: string[];
  relacionado: { label: string; href: string }[];
  fontes: { label: string; url: string }[];
  iaTexto?: string;
  disclaimer: string;
}

const fonteLabel: Record<Fonte, { label: string; tone: "up" | "down" | "neutral" | "accent" }> = {
  "base-conhecimento": { label: "Respondido pela base de conhecimento do portal", tone: "up" },
  ia: { label: "Texto gerado por IA", tone: "accent" },
  "nao-verificado": { label: "Não verificado", tone: "neutral" },
};

export function GlossaryIA({ suggestions }: { suggestions: string[] }) {
  const [input, setInput] = useState("");
  const [res, setRes] = useState<GlossarioResponse | null>(null);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const resultRef = useRef<HTMLDivElement>(null);

  function ask(raw: string) {
    const consulta = raw.trim();
    if (!consulta || pending) return;

    startTransition(async () => {
      try {
        const r = await fetch("/api/glossario", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ consulta }),
        });
        const data = await r.json();
        if (!r.ok) throw new Error(data?.error ?? "Erro ao consultar.");
        setRes(data);
        setError("");
        requestAnimationFrame(() =>
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
        );
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erro ao consultar.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        eyebrow="Glossário do agente · IA"
        title="Pergunte sobre um produto financeiro"
        sub="A IA responde com um resumo informativo voltado para o profissional do mercado financeiro: o que é, como funciona e o que significa para o cliente. Base de conhecimento do portal primeiro; IA generativa quando necessário."
      />

      <div className="flex flex-col gap-6 rounded-3xl border hairline bg-surface p-6 sm:p-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex w-full flex-col gap-2 sm:flex-row"
        >
          <div className="relative flex-1">
            <ChatCircleText
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/35"
            />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex.: o que é CDB? como funciona o Tesouro Direto?"
              aria-label="Pergunte sobre um produto financeiro"
              className="h-12 w-full rounded-xl border hairline bg-background pl-11 pr-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
            />
          </div>
          <button
            type="submit"
            disabled={pending || !input.trim()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 active:scale-[0.98] disabled:opacity-50"
          >
            <Sparkle size={16} weight="fill" />
            {pending ? "Pensando..." : "Perguntar"}
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono-nums text-[11px] uppercase tracking-wider text-foreground/35">
            Sugestões:
          </span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              disabled={pending}
              onClick={() => {
                setInput(s);
                ask(s);
              }}
              className="inline-flex items-center gap-1 rounded-full border hairline bg-background px-3.5 py-1.5 text-[13px] text-foreground/70 transition hover:border-emerald-500/40 hover:text-emerald-300 disabled:opacity-50"
            >
              {s} <ArrowRight size={12} className="text-foreground/30" />
            </button>
          ))}
        </div>

        {error ? <p className="text-[13px] text-rose-400">{error}</p> : null}

        {pending ? (
          <div className="flex items-center gap-2.5 rounded-xl border hairline bg-background px-4 py-3 text-[13px] text-foreground/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            A IA está montando a explicação para o profissional do mercado financeiro…
          </div>
        ) : null}

        {res && !pending ? (
          <div ref={resultRef} className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={fonteLabel[res.fonte].tone}>
                <Sparkle size={11} weight="fill" />
                {fonteLabel[res.fonte].label}
              </Badge>
              <span className="font-mono-nums text-[11px] text-foreground/40">
                “{res.consulta}”
              </span>
            </div>

            {res.iaTexto ? (
              <div className="whitespace-pre-wrap rounded-xl border hairline bg-background p-5 text-[13px] leading-relaxed text-foreground/80">
                {res.iaTexto}
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <h4 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                    Resumo em 30 segundos
                  </h4>
                  <p className="text-[14px] leading-relaxed text-foreground/85">
                    {res.resumo30s}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                    Visão do profissional
                  </h4>
                  <p className="text-[14px] leading-relaxed text-foreground/80">
                    {res.explicacaoTecnica}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                    Por que isso importa?
                  </h4>
                  <p className="text-[14px] leading-relaxed text-foreground/80">
                    {res.porqueImporta}
                  </p>
                </div>

                {res.impactoCliente.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    <h4 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                      Impacto para o cliente
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {res.impactoCliente.map((c) => (
                        <li key={c.area} className="text-[13px] leading-relaxed text-foreground/75">
                          <strong className="font-medium text-foreground/90">{c.area}:</strong>{" "}
                          {c.impacto}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {res.perguntasConsultivas.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    <h4 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                      Como conversar com o cliente
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {res.perguntasConsultivas.map((p, i) => (
                        <li
                          key={i}
                          className="rounded-lg border hairline bg-background px-3 py-2 text-[13px] text-foreground/75"
                        >
                          “{p}”
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            )}

            {res.relacionado.length > 0 || res.fontes.length > 0 ? (
              <div className="flex flex-col gap-3 border-t hairline pt-4">
                {res.relacionado.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/35">
                      Relacionados
                    </span>
                    {res.relacionado.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-400 transition hover:opacity-80"
                      >
                        {r.label} <ArrowUpRight size={12} />
                      </Link>
                    ))}
                  </div>
                ) : null}
                {res.fontes.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/35">
                      Fontes
                    </span>
                    {res.fontes.map((f) => (
                      <a
                        key={f.url}
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border hairline bg-background px-3 py-1 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
                      >
                        {f.label} <ArrowUpRight size={11} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            <p className="font-mono-nums text-[10px] leading-relaxed text-foreground/35">
              {res.disclaimer}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
