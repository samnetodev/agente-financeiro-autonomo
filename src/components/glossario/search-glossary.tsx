"use client";

import { useState } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/lib/content/types";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function SearchGlossary({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");

  const normalized = q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const filtered = normalized
    ? terms.filter(
        (t) =>
          t.term.toLowerCase().includes(normalized) ||
          t.definition.toLowerCase().includes(normalized)
      )
    : [];

  return (
    <div className="flex w-full flex-col gap-3 sm:max-w-[480px]">
      <div className="relative">
        <MagnifyingGlass
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40"
        />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Pesquisar termo... ex.: duration"
          aria-label="Pesquisar no glossário"
          className="h-11 w-full rounded-xl border hairline bg-surface pl-10 pr-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-emerald-500/60"
        />
      </div>
      {filtered.length > 0 ? (
        <div className="flex flex-col overflow-hidden rounded-xl border hairline bg-surface">
          {filtered.slice(0, 8).map((t) => (
            <Link
              key={t.slug}
              href={`/glossario/${t.slug}`}
              className={cn(
                "flex items-center justify-between gap-3 border-b hairline px-3.5 py-2.5 text-[13px] text-foreground/80 transition last:border-0 hover:bg-emerald-500/5 hover:text-emerald-300"
              )}
            >
              {t.term}
              <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/35">
                {t.category}
              </span>
            </Link>
          ))}
        </div>
      ) : null}
      {normalized && filtered.length === 0 ? (
        <p className="text-[13px] text-foreground/50">
          Nenhum termo encontrado. Tente outro termo.
        </p>
      ) : null}
    </div>
  );
}
