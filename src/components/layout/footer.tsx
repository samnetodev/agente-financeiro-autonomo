import Link from "next/link";
import { Crosshair, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { sources } from "@/lib/content/sources";

const columns = [
  {
    title: "Conteúdo",
    links: [
      { href: "/radar", label: "Agente Financeiro Autônomo" },
      { href: "/explique", label: "Explique para mim" },
      { href: "/tradutor", label: "Tradutor do mercado" },
      { href: "/guias", label: "Guias e artigos" },
      { href: "/noticias", label: "Notícias" },
      { href: "/ferramentas", label: "Ferramentas" },
    ],
  },
  {
    title: "Referência",
    links: [
      { href: "/faq", label: "Perguntas frequentes" },
      { href: "/glossario", label: "Glossário financeiro" },
      { href: "/produtos", label: "Produtos profissionais do mercado financeiro" },
      { href: "/fontes", label: "Fontes e referências" },
      { href: "/indicadores", label: "Indicadores" },
      { href: "/chat", label: "Chat do dia" },
    ],
  },
  {
    title: "Portal",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/metodologia", label: "Metodologia" },
      { href: "/politica-editorial", label: "Política editorial" },
      { href: "/aviso-legal", label: "Aviso legal" },
      { href: "/politica-de-privacidade", label: "Privacidade" },
      { href: "/termos-de-uso", label: "Termos de uso" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                <Crosshair size={20} weight="bold" className="text-emerald-400" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                Agente Financeiro <span className="text-emerald-400">Autônomo</span>
              </span>
            </Link>
            <p className="max-w-[42ch] text-sm leading-relaxed text-foreground/55">
              Central de inteligência para o profissional do mercado financeiro. Mercado, economia,
              produtos e inteligência comercial para quem vive o dia a dia
              financeiro.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono-nums text-[11px] uppercase tracking-[0.15em] text-foreground/45">
                Do indicador à conversa
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-mono-nums text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                {col.title}
              </h3>
              {col.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex w-fit items-center gap-1 text-sm text-foreground/65 transition hover:text-emerald-400"
                >
                  {l.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t hairline pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono-nums text-[11px] text-foreground/40">
              © {new Date().getFullYear()} Agente Financeiro Autônomo. Conteúdo
              educacional e informativo.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {sources.slice(0, 5).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-nums text-[11px] text-foreground/40 transition hover:text-emerald-400"
                >
                  {s.name.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 max-w-[100ch] text-xs leading-relaxed text-foreground/40">
            Aviso legal: o conteúdo deste portal tem finalidade educacional e
            informativa e não constitui recomendação personalizada de
            investimento, crédito, seguro ou qualquer outro produto financeiro.
            Dados de mercado podem sofrer alterações e devem ser conferidos nas
            fontes oficiais.
          </p>
        </div>
      </div>
    </footer>
  );
}
