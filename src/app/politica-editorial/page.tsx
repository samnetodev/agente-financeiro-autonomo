import type { Metadata } from "next";
import { Page, Section, Bullets, Meta } from "@/components/layout/legal-page";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Política editorial",
  description:
    "As regras editoriais do portal: independência, correção, transparência, revisão e separação entre fato e opinião.",
};

export default function PoliticaEditorialPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Política editorial", url: "/politica-editorial" }])}
      />
      <Page
        eyebrow="Editorial"
        title="Política editorial"
        sub="As regras que regem todo conteúdo publicado no portal."
      >
        <Section title="Independência">
          <p>
            O portal não é afiliado a nenhuma instituição financeira, corretora ou seguradora.
            Nenhum conteúdo é pago para favorecer um produto ou marca. A escolha de temas é
            feita pelo que é relevante e útil para o profissional do mercado financeiro.
          </p>
        </Section>

        <Section title="Correção e atualização">
          <Bullets
            items={[
              "Fatos são checados contra a fonte oficial antes da publicação.",
              "Mudanças regulatórias relevantes levam à revisão dos guias afetados.",
              "Erros identificados são corrigidos e sinalizados na própria página.",
            ]}
          />
        </Section>

        <Section title="Fato, expectativa, interpretação e opinião">
          <p>
            O conteúdo separa explicitamente o que é fato (divulgado pela fonte), o que é
            expectativa (pesquisa de mercado, como o Boletim Focus) e o que é interpretação
            pedagógica do portal. Opinião, quando existe, é sempre identificada como tal.
          </p>
        </Section>

        <Section title="Conteúdo educacional">
          <p>
            Todo o material tem objetivo educacional. Não há recomendação personalizada de
            investimento, crédito ou seguro, não há promessa de rentabilidade e não há
            indução a decisão financeira.
          </p>
        </Section>

        <Section title="Correções e contato">
          <p>
            Encontrou um erro ou uma informação desatualizada? A correção será avaliada e
            feita com a devida sinalização. O e-mail de contato está no rodapé do portal.
          </p>
        </Section>

        <Meta updatedAt="12 de agosto de 2026" />
      </Page>
    </>
  );
}
