import type { Metadata } from "next";
import { TradutorTool } from "@/components/tradutor/tradutor-tool";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Tradutor do mercado",
  description:
    "Transforme jargão do mercado financeiro em linguagem simples, prática e comercial. De 'DI futuro subiu' a 'como conversar com o cliente'.",
};

export default function TradutorPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 pb-16 sm:px-6">
      <PageHeader
        eyebrow="Ferramenta"
        title="Tradutor do mercado"
        sub="O jargão da mesa em linguagem simples, prática e comercial — para você explicar sem enrolação."
      />
      <TradutorTool />
    </div>
  );
}
