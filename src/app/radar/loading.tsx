import { PageHeader } from "@/components/layout/page-header";

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 sm:px-6">
      <PageHeader
        eyebrow="Mercado · Juros · Inflação"
        title="Radar do Mercado"
        sub="Buscando os indicadores mais recentes nas fontes oficiais…"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border hairline bg-card p-5"
            aria-hidden
          >
            <div className="h-3 w-24 animate-pulse rounded bg-foreground/10" />
            <div className="mt-4 h-7 w-32 animate-pulse rounded bg-foreground/10" />
            <div className="mt-2 h-3 w-20 animate-pulse rounded bg-foreground/10" />
            <div className="mt-6 h-3 w-full animate-pulse rounded bg-foreground/10" />
            <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-foreground/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
