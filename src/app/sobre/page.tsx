import type { Metadata } from "next";
import { Page, Section, Bullets, Meta } from "@/components/layout/legal-page";
import { JsonLd, breadcrumbSchema, websiteSchema, organizationSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Sobre o portal",
  description:
    "Agente Financeiro Autônomo: um agente de IA que monitora o mercado financeiro, resume o dia e prepara o profissional para a conversa — tudo com fontes oficiais.",
};

export default function SobrePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Sobre", url: "/sobre" }])}
      />
      <Page
        eyebrow="Sobre"
        title="O Agente Financeiro Autônomo, seu copiloto de mercado"
        sub="Nasceu de uma observação simples, como um agente de IA: o profissional do mercado financeiro vive no meio de dois mundos — o jargão do mercado e a vida real do cliente. A ponte entre os dois é a conversa certa."
      >
        <Section title="O que é">
          <p>
            Uma central de conteúdo educacional e de inteligência de mercado
            operada por um agente de IA. Reúne em um só lugar: o radar de
            indicadores, o resumo do dia, notícias, guias em três níveis de
            profundidade, glossário, perguntas frequentes, produtos financeiros
            e ferramentas práticas de conversa.
          </p>
          <p>
            O foco não é o investidor sofisticado: é o profissional que precisa explicar
            juros, inflação, renda fixa, crédito e produtos de forma clara, ética e com base
            em fontes oficiais.
          </p>
        </Section>

        <Section title="Princípios">
          <Bullets
            items={[
              "Nada de números inventados: todo dado aponta a fonte oficial.",
              "Conteúdo educacional e informativo, nunca recomendação personalizada.",
              "Três níveis de profundidade: 30 segundos, profissional e técnico.",
              "Do indicador à conversa: todo dado vira pergunta consultiva.",
              "Transparência: o que não pode ser verificado é dito claramente.",
            ]}
          />
        </Section>

        <Section title="Para quem é">
          <Bullets
            items={[
              "Gerentes e atendentes de agência.",
              "Consultores de investimento, crédito e previdência.",
              "Quem está se preparando para certificações (CPA-20, CEA, CFP).",
              "Qualquer pessoa que queira falar de dinheiro com responsabilidade.",
            ]}
          />
        </Section>

        <Section title="O que o portal não é">
          <Bullets
            items={[
              "Não é assessoria de investimento.",
              "Não é fonte de recomendação de produtos.",
              "Não substitui a regulação, o compliance ou o manual do seu banco.",
              "Não promete rentabilidade de nenhum produto.",
            ]}
          />
        </Section>

        <Meta updatedAt="12 de agosto de 2026" />
      </Page>
    </>
  );
}
