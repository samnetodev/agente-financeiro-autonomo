import type { Metadata } from "next";
import { Page, Section, Bullets, Meta } from "@/components/layout/legal-page";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como o portal coleta, usa e protege dados: newsletter por e-mail e mensagens do chat público. Sem venda de dados.",
};

export default function PrivacidadePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Privacidade", url: "/politica-de-privacidade" }])}
      />
      <Page
        eyebrow="Legal"
        title="Política de privacidade"
        sub="Quais dados coletamos, para quê, e seus direitos. Curto e direto, como deve ser."
      >
        <Section title="O que coletamos">
          <Bullets
            items={[
              "E-mail: apenas quando você assina a newsletter.",
              "Mensagens enviadas ao chat público do portal (para exibir o histórico da conversa).",
              "Dados técnicos básicos de acesso (registros de servidor, conforme a hospedagem), para operação e segurança.",
            ]}
          />
        </Section>

        <Section title="Como usamos">
          <Bullets
            items={[
              "O e-mail é usado exclusivamente para envio da newsletter e resposta a pedidos de descadastro.",
              "Mensagens do chat são usadas para a exibição do histórico e melhoria das respostas.",
              "Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para marketing.",
            ]}
          />
        </Section>

        <Section title="Aviso ao usar o chat">
          <p>
            Não envie dados pessoais sensíveis (documento, dados de conta, senhas, valor de
            patrimônio identificado) pelo chat público. Trate o chat como um espaço
            educacional e anônimo.
          </p>
        </Section>

        <Section title="Seus direitos (LGPD)">
          <p>
            Você pode solicitar acesso, correção ou exclusão dos seus dados, além do
            cancelamento da newsletter, pelo e-mail de contato do rodapé. Atenderemos dentro
            do prazo previsto na Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>
        </Section>

        <Section title="Cookies e armazenamento">
          <p>
            O portal não usa cookies de rastreamento publicitário. Preferências de tema são
            guardadas localmente no seu navegador.
          </p>
        </Section>

        <Meta updatedAt="12 de agosto de 2026" />
      </Page>
    </>
  );
}
