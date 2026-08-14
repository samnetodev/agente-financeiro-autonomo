import type { Metadata } from "next";
import { ExpliqueTool } from "@/components/explique/explique-tool";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Explique para mim",
  description:
    "Entenda um termo, indicador, notícia ou decisão do Copom em 3 níveis: resumo em 30 segundos, explicação técnica, impacto para o cliente e perguntas consultivas.",
};

export default function ExpliquePage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 pb-16 sm:px-6">
      <PageHeader
        eyebrow="Copiloto do profissional do mercado financeiro"
        title="Explique para mim"
        sub="Digite um termo, indicador, notícia ou decisão. A resposta usa primeiro o banco de conhecimento do portal (fontes oficiais); quando não é possível verificar, isso é dito claramente."
      />
      <ExpliqueTool />
    </div>
  );
}
