import type { Metadata } from "next";
import Link from "next/link";
import { SimuladorRendaFixa } from "@/components/ferramentas/simulador-renda-fixa";
import { PageHeader } from "@/components/layout/page-header";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Simulador de renda fixa",
  description:
    "Compare CDI (pós), IPCA+ e prefixado em um cenário: bruto, ganho e rentabilidade real. Eduque antes de recomendar.",
};

export default function SimuladorRendaFixaPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
      <PageHeader
        eyebrow="Simulador"
        title="Renda fixa: CDI vs. IPCA+ vs. Prefixado"
        sub="Compare os três tipos de rentabilidade em um cenário — e ensine o cliente a pensar em ganho real, não só no bruto."
      />
      <SimuladorRendaFixa />
      <p className="mt-6 text-[11px] leading-relaxed text-foreground/40">
        Simulação educacional ilustrativa. Não é recomendação de investimento nem promessa
        de rentabilidade.
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
