import type { Indicator } from "./types";

const baseline: Omit<Indicator, "value" | "change" | "changePct" | "timestamp">[] = [
  // MERCADO
  {
    name: "Ibovespa",
    slug: "ibovespa",
    category: "mercado",
    unit: "pontos",
    source: "B3",
    sourceUrl: "https://www.b3.com.br/",
    status: "unavailable",
    clientMeaning:
      "Reflete o humor geral do mercado de ações brasileiro. Clientes com fundos de ações ou previdência que investe em renda variável sentem impacto no patrimônio quando o Ibovespa oscila.",
    series: [
      { label: "09:00", value: 128 },
      { label: "10:00", value: 130 },
      { label: "11:00", value: 129 },
      { label: "12:00", value: 132 },
      { label: "13:00", value: 131 },
      { label: "14:00", value: 134 },
    ],
  },
  {
    name: "Dólar (comercial)",
    slug: "dolar",
    category: "mercado",
    unit: "R$",
    source: "Banco Central (PTAX)",
    sourceUrl: "https://www.bcb.gov.br/estatisticas/fechamento",
    status: "unavailable",
    clientMeaning:
      "Câmbio afeta importadores, exportadores, viagens e o preço de produtos. Alta do dólar pode elevar a inflação de itens importados e pressionar preços.",
    series: [
      { label: "09:00", value: 5.2 },
      { label: "10:00", value: 5.25 },
      { label: "11:00", value: 5.22 },
      { label: "12:00", value: 5.3 },
      { label: "13:00", value: 5.28 },
      { label: "14:00", value: 5.33 },
    ],
  },
  {
    name: "Euro",
    slug: "euro",
    category: "mercado",
    unit: "R$",
    source: "Banco Central (PTAX)",
    sourceUrl: "https://www.bcb.gov.br/estatisticas/fechamento",
    status: "unavailable",
    clientMeaning:
      "Acompanhamento de câmbio para clientes com gastos ou recebimentos na moeda europeia.",
    series: [
      { label: "09:00", value: 6.1 },
      { label: "10:00", value: 6.15 },
      { label: "11:00", value: 6.12 },
      { label: "12:00", value: 6.18 },
      { label: "13:00", value: 6.17 },
      { label: "14:00", value: 6.2 },
    ],
  },
  {
    name: "S&P 500",
    slug: "sp500",
    category: "mercado",
    unit: "pontos",
    source: "S&P Global",
    sourceUrl: "https://www.spglobal.com/",
    status: "unavailable",
    clientMeaning:
      "Principal índice de ações dos EUA. Influencia o humor global de mercados e pode afetar preços no Brasil.",
    series: [
      { label: "09:00", value: 5000 },
      { label: "10:00", value: 5012 },
      { label: "11:00", value: 4998 },
      { label: "12:00", value: 5020 },
      { label: "13:00", value: 5015 },
      { label: "14:00", value: 5031 },
    ],
  },
  {
    name: "Nasdaq",
    slug: "nasdaq",
    category: "mercado",
    unit: "pontos",
    source: "Nasdaq",
    sourceUrl: "https://www.nasdaq.com/",
    status: "unavailable",
    clientMeaning:
      "Índice de tecnologia americano. Volatilidade de tech afeta fundos de ações globais.",
    series: [
      { label: "09:00", value: 16200 },
      { label: "10:00", value: 16280 },
      { label: "11:00", value: 16210 },
      { label: "12:00", value: 16300 },
      { label: "13:00", value: 16260 },
      { label: "14:00", value: 16340 },
    ],
  },
  {
    name: "Dow Jones",
    slug: "dow-jones",
    category: "mercado",
    unit: "pontos",
    source: "Dow Jones",
    sourceUrl: "https://www.spglobal.com/",
    status: "unavailable",
    clientMeaning:
      "Índice das 30 maiores empresas industriais dos EUA. Sinaliza apetite de risco global.",
    series: [
      { label: "09:00", value: 39000 },
      { label: "10:00", value: 39080 },
      { label: "11:00", value: 38990 },
      { label: "12:00", value: 39120 },
      { label: "13:00", value: 39100 },
      { label: "14:00", value: 39160 },
    ],
  },
  {
    name: "Brent",
    slug: "brent",
    category: "mercado",
    unit: "US$/barril",
    source: "ICE",
    sourceUrl: "https://www.ice.com/",
    status: "unavailable",
    clientMeaning:
      "Preço do petróleo impacta combustíveis, inflação e custos de energia. Afeta indústria, transporte e logística.",
    series: [
      { label: "09:00", value: 78 },
      { label: "10:00", value: 78.5 },
      { label: "11:00", value: 78.2 },
      { label: "12:00", value: 79 },
      { label: "13:00", value: 78.8 },
      { label: "14:00", value: 79.2 },
    ],
  },
  {
    name: "Ouro",
    slug: "ouro",
    category: "mercado",
    unit: "US$/oz",
    source: "LBMA",
    sourceUrl: "https://www.lbma.org.uk/",
    status: "unavailable",
    clientMeaning:
      "Ativo de proteção. Clientes conservadores que buscam diversificação acompanham o preço do ouro.",
    series: [
      { label: "09:00", value: 2400 },
      { label: "10:00", value: 2410 },
      { label: "11:00", value: 2395 },
      { label: "12:00", value: 2415 },
      { label: "13:00", value: 2408 },
      { label: "14:00", value: 2420 },
    ],
  },
  {
    name: "DXY (Dólar index)",
    slug: "dxy",
    category: "mercado",
    unit: "pontos",
    source: "ICE",
    sourceUrl: "https://www.ice.com/",
    status: "unavailable",
    clientMeaning:
      "Força do dólar no mundo. Dólar forte globalmente tende a pressionar moedas emergentes, incluindo o real.",
    series: [
      { label: "09:00", value: 104 },
      { label: "10:00", value: 104.2 },
      { label: "11:00", value: 104 },
      { label: "12:00", value: 104.4 },
      { label: "13:00", value: 104.3 },
      { label: "14:00", value: 104.6 },
    ],
  },
  // JUROS
  {
    name: "Taxa Selic (meta)",
    slug: "selic",
    category: "juros",
    unit: "% a.a.",
    source: "Banco Central",
    sourceUrl: "https://www.bcb.gov.br/controleinflacao",
    status: "reference",
    clientMeaning:
      "Taxa básica de juros do Brasil. Define o custo do crédito e o rendimento da renda fixa. Selic alta favorece conversas sobre renda fixa e encarece financiamentos.",
    series: [
      { label: "jul/24", value: 10.5 },
      { label: "set/24", value: 10.75 },
      { label: "nov/24", value: 11.25 },
      { label: "dez/24", value: 12.25 },
      { label: "jan/25", value: 13.25 },
      { label: "mar/25", value: 14.25 },
    ],
  },
  {
    name: "CDI (over)",
    slug: "cdi",
    category: "juros",
    unit: "% a.a.",
    source: "BCB / Cetip (B3)",
    sourceUrl: "https://www.b3.com.br/",
    status: "reference",
    clientMeaning:
      "Referência da renda fixa pós-fixada. CDB, fundos DI e Tesouro Selic rendem próximos ao CDI. É a 'moeda' da renda fixa brasileira.",
    series: [
      { label: "jul/24", value: 10.4 },
      { label: "set/24", value: 10.7 },
      { label: "nov/24", value: 11.2 },
      { label: "dez/24", value: 12.2 },
      { label: "jan/25", value: 13.2 },
      { label: "mar/25", value: 14.2 },
    ],
  },
  {
    name: "Expectativa Selic (Focus)",
    slug: "selic-focus",
    category: "juros",
    unit: "% a.a.",
    source: "BCB — Relatório Focus",
    sourceUrl: "https://www.bcb.gov.br/focus",
    status: "reference",
    clientMeaning:
      "Mediana das projeções do mercado para a Selic. Comunica onde o mercado acha que os juros vão terminar, influenciando decisões de prazo em investimentos.",
    series: [
      { label: "fev/25", value: 14.75 },
      { label: "mar/25", value: 15 },
      { label: "abr/25", value: 14.75 },
      { label: "mai/25", value: 14.5 },
    ],
  },
  {
    name: "Inflação implícita (12m)",
    slug: "inflacao-implicita",
    category: "juros",
    unit: "% a.a.",
    source: "ANBIMA",
    sourceUrl: "https://www.anbima.com.br/",
    status: "reference",
    clientMeaning:
      "Expectativa de inflação embutida nos preços dos títulos. Alta indica que o mercado espera mais inflação — relevante para comparar título prefixado vs. IPCA+.",
    series: [
      { label: "nov/24", value: 6 },
      { label: "dez/24", value: 6.3 },
      { label: "jan/25", value: 6.4 },
      { label: "fev/25", value: 6.5 },
      { label: "mar/25", value: 6.6 },
    ],
  },
  // INFLAÇÃO
  {
    name: "IPCA (12 meses)",
    slug: "ipca",
    category: "inflacao",
    unit: "%",
    source: "IBGE",
    sourceUrl: "https://www.ibge.gov.br/",
    status: "reference",
    clientMeaning:
      "Inflação oficial do Brasil, medida pelo IBGE. Referência do IPCA+ e do poder de compra do cliente. Inflação alta corrói rendimento real da poupança.",
    series: [
      { label: "nov/24", value: 4.87 },
      { label: "dez/24", value: 4.83 },
      { label: "jan/25", value: 4.56 },
      { label: "fev/25", value: 5.06 },
      { label: "mar/25", value: 5.26 },
    ],
  },
  {
    name: "IPCA-15 (12 meses)",
    slug: "ipca-15",
    category: "inflacao",
    unit: "%",
    source: "IBGE",
    sourceUrl: "https://www.ibge.gov.br/",
    status: "reference",
    clientMeaning:
      "Prévia do IPCA divulgada mensalmente. Antecipa a tendência da inflação oficial e sinaliza o cenário para juros.",
    series: [
      { label: "dez/24", value: 4.71 },
      { label: "jan/25", value: 4.5 },
      { label: "fev/25", value: 4.96 },
      { label: "mar/25", value: 5.26 },
      { label: "abr/25", value: 5.55 },
    ],
  },
  {
    name: "IGP-M (12 meses)",
    slug: "igpm",
    category: "inflacao",
    unit: "%",
    source: "FGV",
    sourceUrl: "https://portal.fgv.br/",
    status: "reference",
    clientMeaning:
      "Índice de preços com forte peso de commodities e custos. Reajusta aluguéis, mensalidades e contratos. Impacta o bolso de clientes com contratos indexados.",
    series: [
      { label: "out/24", value: 5.38 },
      { label: "nov/24", value: 5.05 },
      { label: "dez/24", value: 6.54 },
      { label: "jan/25", value: 6.8 },
      { label: "fev/25", value: 7.3 },
    ],
  },
  // RENDA FIXA
  {
    name: "Tesouro Selic",
    slug: "tesouro-selic",
    category: "renda-fixa",
    unit: "% a.a. + Selic",
    source: "Tesouro Nacional",
    sourceUrl: "https://www.tesourodireto.com.br/titulos/historico-de-precos-e-taxas.htm",
    status: "reference",
    clientMeaning:
      "Título pós-fixado que acompanha a Selic. Ideal para reserva de emergência. Não sofre marcação a mercado relevante.",
    series: [
      { label: "jan/25", value: 13.25 },
      { label: "fev/25", value: 13.25 },
      { label: "mar/25", value: 14.25 },
      { label: "abr/25", value: 14.25 },
      { label: "mai/25", value: 14.75 },
    ],
  },
  {
    name: "Tesouro Prefixado (2029)",
    slug: "tesouro-prefixado",
    category: "renda-fixa",
    unit: "% a.a.",
    source: "Tesouro Nacional",
    sourceUrl: "https://www.tesourodireto.com.br/titulos/historico-de-precos-e-taxas.htm",
    status: "reference",
    clientMeaning:
      "Título com taxa fixa até o vencimento. Sofre marcação a mercado: se os juros sobem, o preço cai. Exige explicar ao cliente o efeito de oscilação.",
    series: [
      { label: "out/24", value: 11.5 },
      { label: "dez/24", value: 13.5 },
      { label: "fev/25", value: 14.2 },
      { label: "mar/25", value: 15 },
      { label: "abr/25", value: 14.8 },
    ],
  },
  {
    name: "Tesouro IPCA+ (2035)",
    slug: "tesouro-ipca",
    category: "renda-fixa",
    unit: "% a.a. + IPCA",
    source: "Tesouro Nacional",
    sourceUrl: "https://www.tesourodireto.com.br/titulos/historico-de-precos-e-taxas.htm",
    status: "reference",
    clientMeaning:
      "Título que paga inflação + prêmio. Protege o poder de compra no longo prazo. Também tem marcação a mercado na carreira.",
    series: [
      { label: "out/24", value: 6.4 },
      { label: "dez/24", value: 7.4 },
      { label: "fev/25", value: 7.8 },
      { label: "mar/25", value: 7.6 },
      { label: "abr/25", value: 7.5 },
    ],
  },
  // CRÉDITO
  {
    name: "Spread bancário (total)",
    slug: "spread",
    category: "credito",
    unit: "% a.a.",
    source: "Banco Central",
    sourceUrl: "https://www.bcb.gov.br/estatisticas/spreadbancario",
    status: "reference",
    clientMeaning:
      "Diferença entre o custo do dinheiro para o banco e o que o cliente paga. Spread alto significa crédito caro — contexto importante para conversas de crédito.",
    series: [
      { label: "set/24", value: 28 },
      { label: "out/24", value: 28.2 },
      { label: "nov/24", value: 29.1 },
      { label: "dez/24", value: 29.8 },
      { label: "jan/25", value: 30 },
    ],
  },
  {
    name: "Inadimplência PF",
    slug: "inadimplencia",
    category: "credito",
    unit: "%",
    source: "Banco Central",
    sourceUrl: "https://www.bcb.gov.br/estatisticas",
    status: "reference",
    clientMeaning:
      "Parcela de créditos em atraso. Inadimplência alta endurece concessões de crédito e pode elevar taxas para todos.",
    series: [
      { label: "set/24", value: 4.6 },
      { label: "out/24", value: 4.7 },
      { label: "nov/24", value: 4.8 },
      { label: "dez/24", value: 4.9 },
      { label: "jan/25", value: 5 },
    ],
  },
  {
    name: "Crédito pessoa física (custo médio)",
    slug: "custo-credito",
    category: "credito",
    unit: "% a.a.",
    source: "Banco Central",
    sourceUrl: "https://www.bcb.gov.br/estatisticas",
    status: "reference",
    clientMeaning:
      "Taxa média cobrada ao consumidor. Ajuda o profissional do mercado financeiro a contextualizar o custo do crédito e a conversar sobre alternativas como consignado ou garantia.",
    series: [
      { label: "set/24", value: 42 },
      { label: "out/24", value: 42.5 },
      { label: "nov/24", value: 43 },
      { label: "dez/24", value: 43.5 },
      { label: "jan/25", value: 44 },
    ],
  },
];

export const indicatorCatalog = baseline.map((i) => ({
  ...i,
  value: "",
  change: null,
  changePct: null,
  timestamp: "",
}));

export function getIndicator(slug: string) {
  return indicatorCatalog.find((i) => i.slug === slug);
}

export function getIndicatorsByCategory(category: Indicator["category"]) {
  return indicatorCatalog.filter((i) => i.category === category);
}

export const categories = [
  { id: "mercado" as const, label: "Mercado" },
  { id: "juros" as const, label: "Juros" },
  { id: "inflacao" as const, label: "Inflação" },
  { id: "renda-fixa" as const, label: "Renda Fixa" },
  { id: "credito" as const, label: "Crédito" },
];
