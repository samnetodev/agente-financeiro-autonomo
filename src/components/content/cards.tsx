import Link from "next/link";
import type { Article, Faq, GlossaryTerm, Product } from "@/lib/content/types";
import { ArrowRight, ArrowUpRight, BookOpen, Clock } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function ArticleCard({ article, className }: { article: Article; className?: string }) {
  return (
    <Link
      href={`/guias/${article.slug}`}
      className={cn(
        "group flex flex-col gap-3 rounded-2xl border hairline bg-surface p-5 transition hover:border-emerald-500/40 hover:shadow-[0_0_30px_-12px_rgba(52,211,153,0.35)]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono-nums text-[10px] uppercase tracking-[0.16em] text-foreground/40">
          {article.category}
        </span>
        <ArrowUpRight size={15} className="text-foreground/30 transition group-hover:text-emerald-400" />
      </div>
      <h3 className="text-balance text-[15px] font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-emerald-300">
        {article.title}
      </h3>
      <p className="line-clamp-2 text-[13px] leading-relaxed text-foreground/55">
        {article.excerpt}
      </p>
      <div className="mt-auto flex items-center gap-3 border-t hairline pt-3 font-mono-nums text-[10px] uppercase tracking-wider text-foreground/35">
        <span className="inline-flex items-center gap-1">
          <Clock size={11} /> {article.readTime}
        </span>
        <span className="inline-flex items-center gap-1">
          <BookOpen size={11} /> 3 níveis
        </span>
      </div>
    </Link>
  );
}

export function FaqRow({ faq }: { faq: Faq }) {
  return (
    <Link
      href={`/faq/${faq.slug}`}
      className="group flex items-start justify-between gap-4 rounded-xl border hairline bg-surface p-4 transition hover:border-emerald-500/40"
    >
      <div className="flex flex-col gap-1.5">
        <span className="font-mono-nums text-[10px] uppercase tracking-[0.16em] text-foreground/40">
          {faq.category}
        </span>
        <h3 className="text-[14px] font-medium leading-snug text-foreground/90 group-hover:text-emerald-300">
          {faq.question}
        </h3>
      </div>
      <ArrowRight size={16} className="mt-1 shrink-0 text-foreground/30 transition group-hover:text-emerald-400" />
    </Link>
  );
}

export function GlossaryCard({ term }: { term: GlossaryTerm }) {
  return (
    <Link
      href={`/glossario/${term.slug}`}
      className="group flex flex-col gap-2 rounded-xl border hairline bg-surface p-4 transition hover:border-emerald-500/40"
    >
      <span className="font-mono-nums text-[11px] uppercase tracking-wider text-emerald-500/80">
        {term.category}
      </span>
      <h3 className="text-[15px] font-semibold text-foreground group-hover:text-emerald-300">
        {term.term}
      </h3>
      <p className="line-clamp-2 text-[13px] leading-relaxed text-foreground/55">
        {term.definition}
      </p>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group flex flex-col gap-2 rounded-xl border hairline bg-surface p-4 transition hover:border-emerald-500/40"
    >
      <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/40">
        {product.category}
      </span>
      <h3 className="text-[14px] font-semibold text-foreground group-hover:text-emerald-300">
        {product.name}
      </h3>
      <p className="line-clamp-2 text-[13px] leading-relaxed text-foreground/55">
        {product.concept}
      </p>
    </Link>
  );
}
