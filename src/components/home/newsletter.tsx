"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/actions/newsletter";
import { Envelope, CheckCircle } from "@phosphor-icons/react/dist/ssr";

function FormState() {
  const [state, action, pending] = useActionState(subscribeNewsletter, {});
  return (
    <div className="flex flex-col gap-2">
      <form action={action} className="flex w-full flex-col gap-2 sm:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            placeholder="Seu nome"
            aria-label="Seu nome"
            className="h-11 rounded-xl border hairline bg-background px-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
          />
          <input
            name="email"
            type="email"
            placeholder="Seu melhor e-mail"
            aria-label="Seu e-mail"
            className="h-11 rounded-xl border hairline bg-background px-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 active:scale-[0.98] disabled:opacity-60"
        >
          <Envelope size={16} weight="bold" />
          {pending ? "Enviando..." : "Quero receber"}
        </button>
      </form>
      {state.success ? (
        <p className="flex items-center gap-2 text-[13px] text-emerald-400">
          <CheckCircle size={15} weight="bold" /> {state.success}
        </p>
      ) : null}
      {state.error ? (
        <p className="text-[13px] text-rose-400">{state.error}</p>
      ) : null}
    </div>
  );
}

export function Newsletter() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-surface to-surface p-8 sm:p-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-[46ch] flex-col gap-3">
          <span className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-emerald-400">
            Newsletter do agente · IA
          </span>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Receba o Radar do Mercado pelo agente
          </h2>
          <p className="text-sm leading-relaxed text-foreground/60">
            O agente resume o mercado em 5 minutos, toda manhã, antes de você
            abrir o expediente.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 md:max-w-[560px]">
          <FormState />
          <p className="font-mono-nums text-[10px] leading-relaxed text-foreground/35">
            Seus dados são usados apenas para envio da newsletter. Conteúdo
            educacional, sem recomendação personalizada.
          </p>
        </div>
      </div>
    </div>
  );
}
