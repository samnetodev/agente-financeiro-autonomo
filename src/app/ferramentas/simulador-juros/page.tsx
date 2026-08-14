import type { Metadata } from "next";
import Link from "next/link";
import { SimuladorJuros } from "@/components/ferramentas/simulador-juros";
import { PageHeader } from "@/components/layout/page-header";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Simulador de juros compostos",
  description:
    "Simule aporte inicial e mensal com juros compostos, mês a mês, para explicar o efeito do tempo e da taxa em uma conversa.",
};

export default function SimuladorJurosPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
      <PageHeader
        eyebrow="Simulador"
        title="Juros compostos"
        sub="Mostre na prática o efeito do tempo e da taxa — a melhor forma de conversar sobre disciplina financeira."
      />
      <SimuladorJuros />
      <p className="mt-6 text-[11px] leading-relaxed text-foreground/40">
        Simulação educacional ilustrativa, sem IR ou tributação. Não substitui um projeto
        personalizado.
      </p>
      <Link
        href="/ferramentas"
        className="mt-4 inline-flex items-center gap-1 text-[13px] text-foreground/50 transition hover:text-emerald-400"
      >
        <ArrowLeft size={14} /> Voltar às ferramentas
      </Link>
    </div>
  );
}
