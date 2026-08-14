"use client";

import { useEffect } from "react";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/10">
        <WarningCircle size={26} weight="bold" className="text-rose-400" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-rose-400">
          Falha no radar
        </p>
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Algo saiu do esperado
        </h1>
        <p className="mx-auto max-w-[48ch] text-sm leading-relaxed text-foreground/60">
          Não foi possível carregar esta seção. Tente novamente — se o problema
          persistir, consulte as fontes oficiais diretamente.
        </p>
      </div>
      <button
        onClick={reset}
        className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
      >
        Tentar novamente
      </button>
    </div>
  );
}
