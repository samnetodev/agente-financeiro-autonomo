import type { Metadata } from "next";
import { Page, Section, Bullets, Meta } from "@/components/layout/legal-page";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "Metodologia",
  description:
    "Como o portal seleciona fontes, monta o radar, escreve os guias e garante que nenhum número ou norma seja inventado.",
};

export default function MetodologiaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Metodologia", url: "/metodologia" }])}
      />
      <Page
        eyebrow="Transparência"
        title="Metodologia"
        sub="Toda a curadoria do portal segue o mesmo princípio: dado sem fonte oficial é dado que não existe para nós."
      >
        <Section title="1. Fontes">
          <p>
            Usamos exclusivamente fontes oficiais e públicas: Banco Central, IBGE, B3,
            Tesouro Nacional, ANBIMA, CVM, SUSEP, FGV, IPEA e órgãos internacionais
            equivalentes. A lista completa está em <a className="text-emerald-400 hover:underline" href="/fontes">Fontes oficiais</a>.
          </p>
          <Bullets
            items={[
              "Cada indicador exibe a fonte primária e o link para conferência.",
              "Quando a fonte está indisponível no momento do acesso, o valor é marcado como 'referência' ou 'sem dados' — nunca substituído por estimativa silenciosa.",
            ]}
          />
        </Section>

        <Section title="2. Radar e briefing">
          <Bullets
            items={[
              "O radar tenta buscar dados reais na API pública de séries temporais do Banco Central (SGS/BCB) com timeout curto.",
              "Se a API não responde, o radar exibe 'sem dados' em vez de valores falsos.",
              "O briefing do dia é montado a partir das notícias e eventos da agenda, com impacto prático explícito.",
            ]}
          />
        </Section>

        <Section title="3. Guias e glossário">
          <Bullets
            items={[
              "Todos escritos em três níveis: 30 segundos, visão do profissional do mercado financeiro e aprofundamento técnico.",
              "Cada guia cita fontes regulatórias e institucionais nos tópicos que tocam normas e tributos.",
              "Os exemplos usam valores hipotéticos, sempre sinalizados como ilustrativos.",
            ]}
          />
        </Section>

        <Section title="4. IA e o que não é verificado">
          <Bullets
            items={[
              "O copiloto responde primeiro pelo banco de conhecimento do portal.",
              "IA generativa é usada apenas de forma opcional e sinalizada, com instrução explícita de não inventar fontes.",
              "Quando uma pergunta não pode ser respondida com segurança, o portal diz 'não foi possível verificar' e aponta as fontes oficiais.",
            ]}
          />
        </Section>

        <Meta updatedAt="12 de agosto de 2026" />
      </Page>
    </>
  );
}
