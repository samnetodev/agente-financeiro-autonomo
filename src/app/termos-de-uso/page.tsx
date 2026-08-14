import type { Metadata } from "next";
import { Page, Section, Bullets, Meta } from "@/components/layout/legal-page";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de uso do portal: uso pessoal e educacional, proibição de redistribuição comercial, e responsabilidade do usuário.",
};

export default function TermosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Termos de uso", url: "/termos-de-uso" }])}
      />
      <Page
        eyebrow="Legal"
        title="Termos de uso"
        sub="As condições para usar o portal."
      >
        <Section title="Uso permitido">
          <p>
            O portal é de uso pessoal e educacional. Você pode ler, compartilhar links e
            usar o conteúdo em sala de aula, treinamento ou estudo individual.
          </p>
        </Section>

        <Section title="Uso não permitido">
          <Bullets
            items={[
              "Reproduzir o conteúdo em massa (web scraping, cópia integral) sem autorização.",
              "Revender, redistribuir ou usar o conteúdo como produto comercial próprio.",
              "Usar as ferramentas para gerar conteúdo fraudulento ou enganoso.",
              "Enviar conteúdo ilegal ou dados pessoais de terceiros pelo chat.",
            ]}
          />
        </Section>

        <Section title="Disponibilidade">
          <p>
            O portal pode ser atualizado, suspenso ou descontinuado a qualquer momento, sem
            aviso prévio. Dados de mercado são fornecidos por terceiros e podem sofrer
            interrupções fora do nosso controle.
          </p>
        </Section>

        <Section title="Lei aplicável">
          <p>
            Estes termos são regidos pelas leis brasileiras. Em caso de divergência, fica
            eleito o foro da comarca do mantenedor do portal.
          </p>
        </Section>

        <Meta updatedAt="12 de agosto de 2026" />
      </Page>
    </>
  );
}
