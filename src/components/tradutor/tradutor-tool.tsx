"use client";

import { useState } from "react";
import { translateMarket, type TranslateResult } from "@/lib/ia/explain";
import { Translate, ArrowRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const examples = [
  "DI futuro subiu 20 pontos-base",
  "Selic caiu 0,50 ponto percentual",
  "IPCA veio acima do esperado",
  "Dólar renovou máxima no ano",
  "Ibovespa fechou em queda",
];

export function TradutorTool() {
  const [frase, setFrase] = useState("");
  const [result, setResult] = useState<TranslateResult | null>(null);

  function run(f: string) {
    if (!f.trim()) return;
    setResult(translateMarket(f.trim()));
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <label htmlFor="tradutor-input" className="sr-only">
          Frase do mercado
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="tradutor-input"
            value={frase}
            onChange={(e) => setFrase(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && run(frase)}
            placeholder='Ex.: "DI futuro subiu 20 pontos-base"'
            className="h-12 flex-1 rounded-xl border hairline bg-surface px-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
          />
          <button
            onClick={() => run(frase)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 active:scale-[0.98]"
          >
            <Translate size={16} weight="bold" /> Traduzir
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex}
              onClick={() => {
                setFrase(ex);
                run(ex);
              }}
              className="rounded-full border hairline bg-surface px-3 py-1.5 text-[12px] text-foreground/60 transition hover:border-emerald-500/40 hover:text-emerald-300"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {result ? (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
            <p className="flex items-start gap-2 text-[15px] font-medium text-foreground">
              <ArrowRight size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              “{result.frase}”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Block title="Em linguagem simples">
              <p className="text-[14px] leading-relaxed text-foreground/80">{result.linguagemSimples}</p>
            </Block>
            <Block title="Em linguagem prática">
              <p className="text-[14px] leading-relaxed text-foreground/80">{result.linguagemBancaria}</p>
            </Block>
            <Block title="O que observar">
              <ul className="flex flex-col gap-2">
                {result.oQueObservar.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-[13px] text-foreground/75">
                    <MagnifyingGlass size={13} className="text-emerald-400" /> {o}
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="O que pode significar comercialmente">
              <p className="text-[14px] leading-relaxed text-foreground/80">{result.significadoComercial}</p>
            </Block>
          </div>

          <p className="text-[11px] leading-relaxed text-foreground/40">{result.disclaimer}</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed hairline p-6 text-center">
          <p className="text-sm text-foreground/50">
            Cole uma frase de mercado e receba a tradução em linguagem simples,
            prática e comercial.
          </p>
        </div>
      )}
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border hairline bg-surface p-5">
      <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-500">
        {title}
      </h2>
      {children}
    </div>
  );
}
