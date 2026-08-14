import Link from "next/link";
import { Compass } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70dvh] flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="glow-emerald pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-20" />
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
        <Compass size={28} weight="bold" className="text-emerald-400" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-mono-nums text-[11px] uppercase tracking-[0.2em] text-emerald-500">
          Erro 404
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Fora da rota do radar
        </h1>
        <p className="mx-auto max-w-[48ch] text-sm leading-relaxed text-foreground/60">
          A página que você procurou não existe ou saiu do ar. Volte para a
          central ou consulte o glossário para seguir no tema.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
        >
          Voltar ao início
        </Link>
        <Link
          href="/glossario"
          className="rounded-lg border hairline px-4 py-2 text-sm font-medium text-foreground/70 transition hover:text-emerald-400"
        >
          Ir ao glossário
        </Link>
      </div>
    </div>
  );
}
