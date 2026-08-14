import { glossaryTerms } from "@/lib/content/glossary";
import { faqs } from "@/lib/content/faqs";
import { indicatorCatalog } from "@/lib/content/indicators";
import { articlesA } from "@/lib/content/articles-a";
import { articlesB } from "@/lib/content/articles-b";
import { products } from "@/lib/content/products";

const articles = [...articlesA, ...articlesB];

export const DISCLAIMER_IA =
  "Resposta gerada com base no banco de conhecimento do portal e, quando disponível, com apoio de IA. Conteúdo educacional e informativo. Não constitui recomendação personalizada de investimento, crédito ou seguro.";

export const NAO_VERIFICADO =
  "Não foi possível verificar essa informação em uma fonte confiável. Confira nas fontes oficiais (Banco Central, B3, IBGE, Tesouro, ANBIMA, CVM, SUSEP).";

export type Fonte = "base-conhecimento" | "ia" | "nao-verificado";

export interface ImpactoCliente {
  area: string;
  impacto: string;
}

export interface ExplainResult {
  consulta: string;
  resumo30s: string;
  explicacaoTecnica: string;
  porqueImporta: string;
  impactoCliente: ImpactoCliente[];
  perguntasConsultivas: string[];
  relacionado: { label: string; href: string }[];
  fontes: { label: string; url: string }[];
  fonte: Fonte;
  disclaimer: string;
}

export interface TranslateResult {
  frase: string;
  linguagemSimples: string;
  linguagemBancaria: string;
  oQueObservar: string[];
  significadoComercial: string;
  fonte: Fonte;
  disclaimer: string;
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findKnowledge(consulta: string) {
  const q = normalize(consulta);

  const term = glossaryTerms.find(
    (t) =>
      normalize(t.term) === q ||
      t.slug === q ||
      (q.length > 3 && normalize(t.term).includes(q)) ||
      (q.length > 3 && q.includes(normalize(t.term)))
  );

  if (term) {
    return {
      resumo30s: term.definition,
      explicacaoTecnica: `${term.bancario} Em termos técnicos: ${term.tecnico}`,
      relacionado: term.related
        .map((slug) => {
          const t = glossaryTerms.find((x) => x.slug === slug);
          return t ? { label: t.term, href: `/glossario/${t.slug}` } : null;
        })
        .filter(Boolean) as { label: string; href: string }[],
      fontes: [
        { label: "Glossário do portal", url: `/glossario/${term.slug}` },
      ],
    };
  }

  const faq = faqs.find(
    (f) =>
      f.slug === q ||
      (q.length > 4 && normalize(f.question).includes(q)) ||
      (q.length > 4 && q.includes(normalize(f.question).slice(0, 24)))
  );

  if (faq) {
    return {
      resumo30s: faq.answerShort,
      explicacaoTecnica: `${faq.answer} Exemplo: ${faq.example}`,
      relacionado: faq.related
        .map((slug) => {
          const x = faqs.find((f) => f.slug === slug);
          return x
            ? { label: x.question, href: `/faq/${x.slug}` }
            : null;
        })
        .filter(Boolean) as { label: string; href: string }[],
      fontes: faq.sources,
    };
  }

  const indicator = indicatorCatalog.find(
    (i) => i.slug === q || normalize(i.name).includes(q) || q.includes(normalize(i.name))
  );

  if (indicator) {
    return {
      resumo30s: `${indicator.name}: ${indicator.clientMeaning}`,
      explicacaoTecnica: `Indicador acompanhado pelo portal na categoria ${indicator.category}. Fonte primária: ${indicator.source}.`,
      relacionado: [
        { label: "Radar do Mercado", href: "/radar" },
        ...glossaryTerms
          .filter((t) => indicator.name.toLowerCase().includes(normalize(t.term)))
          .slice(0, 2)
          .map((t) => ({ label: t.term, href: `/glossario/${t.slug}` })),
      ],
      fontes: [{ label: indicator.source, url: indicator.sourceUrl }],
    };
  }

  const product = products.find((p) => {
    const n = normalize(p.name);
    return p.slug === q || n.includes(q) || q.includes(n.slice(0, 12));
  });

  if (product) {
    return {
      resumo30s: `${product.concept} ${product.funcionamento}`,
      explicacaoTecnica: `Liquidez: ${product.liquidez}. Tributação: ${product.tributacao}. Riscos: ${product.riscos.join(", ")}.`,
      relacionado: product.sources.map((s) => ({
        label: s.label,
        href: s.url,
      })),
      fontes: product.sources,
    };
  }

  const article = articles.find((a) => {
    const n = normalize(a.title);
    return a.slug === q || q.includes(normalize(a.slug)) || n.includes(q);
  });

  if (article) {
    return {
      resumo30s: article.levels.t30,
      explicacaoTecnica: `${article.levels.bancario} ${article.levels.tecnico}`,
      relacionado: article.related
        .map((slug) => {
          const x = articles.find((a) => a.slug === slug);
          return x ? { label: x.title, href: `/guias/${x.slug}` } : null;
        })
        .filter(Boolean) as { label: string; href: string }[],
      fontes: article.sources,
    };
  }

  return null;
}

export function explain(consulta: string): ExplainResult {
  const kb = findKnowledge(consulta);
  if (kb) {
    return {
      consulta,
      ...kb,
      porqueImporta:
        "Compreender esse conceito ajuda o profissional do mercado financeiro a traduzir o cenário para o cliente: explicar impacto, antecipar perguntas e conduzir uma conversa consultiva.",
      impactoCliente: [
        {
          area: "Investimentos",
          impacto:
            "Permite explicar adequação, riscos, liquidez e tributação de cada produto antes de qualquer indicação.",
        },
        {
          area: "Crédito",
          impacto:
            "Auxilia a contextualizar taxas, CET, garantias e capacidade de pagamento em uma conversa transparente.",
        },
        {
          area: "Relacionamento",
          impacto:
            "Fortalece a confiança ao falar a mesma linguagem e apontar fontes oficiais para o cliente conferir.",
        },
      ],
      perguntasConsultivas: [
        "O que esse assunto significa para a sua realidade financeira hoje?",
        "Você já ouviu esse termo em algum extrato ou conversa?",
        "Quer que eu explique com um exemplo do dia a dia?",
        "Posso indicar a fonte oficial para você consultar com calma?",
      ],
      fonte: "base-conhecimento",
      disclaimer: DISCLAIMER_IA,
    };
  }

  return {
    consulta,
    resumo30s: NAO_VERIFICADO,
    explicacaoTecnica: NAO_VERIFICADO,
    porqueImporta:
      "Não é possível verificar essa informação nas fontes consultadas pelo portal. Por isso, não será produzida uma explicação.",
    impactoCliente: [],
    perguntasConsultivas: [],
    relacionado: [
      { label: "Radar do Mercado", href: "/radar" },
      { label: "Glossário", href: "/glossario" },
      { label: "Perguntas frequentes", href: "/faq" },
    ],
    fontes: [
      { label: "Banco Central", url: "https://www.bcb.gov.br/" },
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "B3", url: "https://www.b3.com.br/" },
    ],
    fonte: "nao-verificado",
    disclaimer: DISCLAIMER_IA,
  };
}

const TRANSLATOR_RULES: {
  key: string;
  simples: string;
  bancaria: string;
  observar: string[];
  comercial: string;
}[] = [
  {
    key: "di futuro",
    simples:
      "Os contratos futuros de juros estão indicando a percepção do mercado sobre taxas futuras.",
    bancaria:
      "Há reprecificação da curva de juros futuros, refletindo mudanças nas expectativas de política monetária ou no prêmio de risco.",
    observar: ["inflação", "Copom", "fiscal", "câmbio", "curva longa"],
    comercial:
      "Pode alterar a conversa sobre crédito e renda fixa: revisar adequação e explicar marcação a mercado.",
  },
  {
    key: "selic",
    simples:
      "Indica para onde o mercado espera que a taxa básica de juros do Brasil caminhe.",
    bancaria:
      "Mudança nas expectativas de Selic altera o custo do crédito, a atratividade da renda fixa pós e prefixada e o valor dos títulos na carteira.",
    observar: ["Copom", "inflação", "comunicação do BC", "dólar"],
    comercial:
      "Boas oportunidades de conversa sobre renda fixa, revisão de carteira e renegociação de dívidas.",
  },
  {
    key: "ipca",
    simples: "Indica a direção esperada da inflação oficial brasileira.",
    bancaria:
      "Inflação esperada maior tende a manter juros altos, afetando renda fixa, crédito e o poder de compra do cliente.",
    observar: ["IPCA", "expectativas", "juros", "alimentos", "energia"],
    comercial:
      "Sinaliza conversas sobre proteção contra inflação (IPCA+) e revisão de metas financeiras.",
  },
  {
    key: "dólar",
    simples: "Indica o movimento esperado da moeda americana em relação ao real.",
    bancaria:
      "Câmbio em alta pressiona preços e afeta importadores, viagens e dívidas em moeda estrangeira.",
    observar: ["Fed", "juros americanos", "fluxo de capital", "risco local"],
    comercial:
      "Oportunidade de conversar sobre proteção cambial e custos de quem tem despesas em moeda forte.",
  },
  {
    key: "bovespa",
    simples: "Indica o humor do mercado de ações brasileiro.",
    bancaria:
      "A oscilação da bolsa afeta carteiras de renda variável, fundos e previdência com exposição a ações.",
    observar: ["fluxo estrangeiro", "commodities", "juros", "lucro das empresas"],
    comercial:
      "Momento para conversar sobre diversificação e revisão de exposição a renda variável.",
  },
];

export function translateMarket(frase: string): TranslateResult {
  const f = normalize(frase);
  const rule = TRANSLATOR_RULES.find((r) => f.includes(r.key));
  if (rule) {
    return {
      frase,
      linguagemSimples: rule.simples,
      linguagemBancaria: rule.bancaria,
      oQueObservar: rule.observar,
      significadoComercial: rule.comercial,
      fonte: "base-conhecimento",
      disclaimer: DISCLAIMER_IA,
    };
  }
  return {
    frase,
    linguagemSimples:
      "Sem contexto suficiente para traduzir de forma confiável. Tente frases que citem um indicador, ex.: 'DI futuro subiu 20 pontos-base' ou 'Selic caiu'.",
    linguagemBancaria: NAO_VERIFICADO,
    oQueObservar: ["indicador citado", "fonte oficial", "horário da divulgação"],
    significadoComercial:
      "Identifique o indicador para traduzir em conversa consultiva com o cliente.",
    fonte: "nao-verificado",
    disclaimer: DISCLAIMER_IA,
  };
}
