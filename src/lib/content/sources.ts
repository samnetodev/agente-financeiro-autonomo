import type { Source, SourceRef } from "./types";

export const sources: Source[] = [
  {
    name: "Banco Central do Brasil (BCB)",
    url: "https://www.bcb.gov.br/",
    description:
      "Banco central do Brasil. Fonte oficial para Selic, juros, câmbio, crédito, expectativas (Focus), dívida pública e política monetária.",
    category: "nacional",
  },
  {
    name: "B3",
    url: "https://www.b3.com.br/",
    description:
      "Bolsa de valores brasileira. Índices, Ibovespa, contratos futuros de juros (DI), derivativos e dados de negociação.",
    category: "nacional",
  },
  {
    name: "IBGE",
    url: "https://www.ibge.gov.br/",
    description:
      "Instituto Brasileiro de Geografia e Estatística. Fonte oficial de IPCA, IPCA-15, inflação, PIB, desemprego, produção e varejo.",
    category: "nacional",
  },
  {
    name: "Tesouro Nacional / Tesouro Direto",
    url: "https://www.tesourodireto.com.br/",
    description:
      "Renda fixa pública. Taxas indicativas do Tesouro Selic, Prefixado e IPCA+, marcação a mercado e dados do programa.",
    category: "nacional",
  },
  {
    name: "ANBIMA",
    url: "https://www.anbima.com.br/",
    description:
      "Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais. Taxas, índices, regras de certificação e autorregulação.",
    category: "nacional",
  },
  {
    name: "CVM (Comissão de Valores Mobiliários)",
    url: "https://www.gov.br/cvm/",
    description:
      "Regulador do mercado de valores mobiliários. Regras de fundos, suitability, companhias abertas e mercado de capitais.",
    category: "nacional",
  },
  {
    name: "SUSEP",
    url: "https://www.gov.br/susep/",
    description:
      "Superintendência de Seguros Privados. Regulação de seguros, previdência complementar aberta e capitalização.",
    category: "nacional",
  },
  {
    name: "IPEA",
    url: "https://www.ipea.gov.br/",
    description:
      "Instituto de Pesquisa Econômica Aplicada. Indicadores macroeconômicos, análises fiscais e estudos econômicos.",
    category: "nacional",
  },
  {
    name: "FGV (Fundação Getulio Vargas)",
    url: "https://portal.fgv.br/",
    description:
      "Fonte oficial de IGP-M, IGP-DI e outros indicadores de preços e conjuntura econômica.",
    category: "nacional",
  },
  {
    name: "Ministério da Fazenda",
    url: "https://www.gov.br/fazenda/",
    description:
      "Política fiscal e econômica do governo federal. Orçamento, resultados fiscais e medidas econômicas.",
    category: "nacional",
  },
  {
    name: "Receita Federal",
    url: "https://www.gov.br/receitafederal/",
    description:
      "Tributação, declaração de imposto de renda, impostos sobre investimentos e produtos financeiros.",
    category: "nacional",
  },
  {
    name: "Federal Reserve (Fed)",
    url: "https://www.federalreserve.gov/",
    description:
      "Banco central dos Estados Unidos. Taxa de juros americana (Fed Funds), reuniões do FOMC e política monetária dos EUA.",
    category: "internacional",
  },
  {
    name: "U.S. Treasury",
    url: "https://home.treasury.gov/",
    description:
      "Tesouro dos Estados Unidos. Títulos soberanos americanos (Treasuries), taxas de longo prazo e dados da dívida pública.",
    category: "internacional",
  },
  {
    name: "BIS (Bank for International Settlements)",
    url: "https://www.bis.org/",
    description:
      "Banco de Compensações Internacionais. Estatísticas bancárias globais, crédito e regulamentação prudencial.",
    category: "internacional",
  },
  {
    name: "FMI (IMF)",
    url: "https://www.imf.org/",
    description:
      "Fundo Monetário Internacional. Perspectivas econômicas globais e projeções para as economias.",
    category: "internacional",
  },
  {
    name: "Banco Mundial (World Bank)",
    url: "https://www.worldbank.org/",
    description:
      "Instituição multilateral. Dados de desenvolvimento econômico e pobreza no mundo.",
    category: "internacional",
  },
  {
    name: "OCDE (OECD)",
    url: "https://www.oecd.org/",
    description:
      "Organização para a Cooperação e Desenvolvimento Econômico. Indicadores econômicos comparados entre países.",
    category: "internacional",
  },
];

export const sourcesIndexed: SourceRef[] = sources.map((s) => ({
  name: s.name,
  slug: s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  url: s.url,
  description: s.description,
  category: s.category,
}));

export function getSource(name: string) {
  return sources.find(
    (s) => s.name.toLowerCase().includes(name.toLowerCase())
  );
}
