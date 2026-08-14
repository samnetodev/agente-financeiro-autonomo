import type { Metadata } from "next";
import { Page, Section, Bullets, Meta } from "@/components/layout/legal-page";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal do portal: conteúdo educacional, sem recomendação personalizada, sem promessa de rentabilidade e com vínculos de terceiros de responsabilidade das respectivas instituições.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Aviso legal", url: "/aviso-legal" }])}
      />
      <Page eyebrow="Legal" title="Aviso legal" sub="Leia antes de usar o portal.">
        <Section title="Natureza do conteúdo">
          <p>
            O portal publica conteúdo educacional e informativo sobre economia, mercado
            financeiro, crédito, previdência, seguros e produtos financeiros. Nada aqui é
            recomendação personalizada de investimento, crédito ou seguro, nem promessa de
            rentabilidade ou resultado futuro.
          </p>
        </Section>

        <Section title="Limitação de responsabilidade">
          <Bullets
            items={[
              "Decisões financeiras são de responsabilidade exclusiva do usuário e, no caso de clientes, da instituição e do profissional regulamentado, conforme a regulamentação aplicável.",
              "O portal não garante a integridade, pontualidade ou disponibilidade de dados de terceiros.",
              "Vínculos (links) externos levam a sites de instituições cujo conteúdo é de responsabilidade das respectivas entidades.",
            ]}
          />
        </Section>

        <Section title="Não é assessoria">
          <p>
            Profissionais que atuam com recomendação devem observar a regulamentação da CVM,
            a adequação ao perfil do cliente (suitability) e as normas internas de sua
            instituição. O conteúdo do portal apoia a formação, não substitui esses
            procedimentos.
          </p>
        </Section>

        <Section title="Mudanças">
          <p>
            Este aviso pode ser atualizado a qualquer momento. A data da última revisão está
            indicada ao final da página.
          </p>
        </Section>

        <Meta updatedAt="12 de agosto de 2026" />
      </Page>
    </>
  );
}
