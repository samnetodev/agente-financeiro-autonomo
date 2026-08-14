import type { Opportunity } from "./types";

export const opportunities: Opportunity[] = [
  {
    slug: "dinheiro-parado",
    title: "Dinheiro parado na conta corrente",
    trigger:
      "Cliente mantém saldo médio elevado em conta corrente, conta remunerada ou em valores que ficam parados sem rendimento.",
    diagnostico:
      "O diagnóstico pode revelar perda de poder de compra pela inflação e a ausência de uma reserva de emergência formalizada, além de desorganização entre o que é recurso de giro e o que pode ser investido.",
    perguntas: [
      "Qual é o valor médio que costuma ficar parado na conta ao longo do mês?",
      "Esse valor é usado para despesas do dia a dia ou é dinheiro que sobra?",
      "Você já tem uma reserva para imprevistos, como desemprego ou urgências de saúde?",
      "Qual é a sua necessidade de ter o dinheiro disponível imediatamente?",
    ],
    produtos: [
      "Renda fixa pós-fixada com liquidez diária (CDB, LCI, LCA atrelados ao CDI)",
      "Tesouro Selic",
      "Fundos de renda fixa com resgate no mesmo dia",
    ],
    compliance:
      "Conteúdo de orientação e educação financeira, sem recomendação de aplicação. A decisão de investir cabe sempre ao cliente, considerando perfil, prazo, liquidez e objetivos.",
  },
  {
    slug: "cdb-vencendo",
    title: "Aplicação em renda fixa vencendo",
    trigger:
      "Cliente com CDB, LCI, LCA, título do Tesouro ou fundo com prazo de carência chegando ao vencimento, ou que venceu e não foi reaplicado.",
    diagnostico:
      "Revela se há reaplicação automática, se a taxa do vencimento ainda é competitiva no mercado atual e se o prazo e a liquidez do próximo produto continuam adequados ao momento de vida do cliente.",
    perguntas: [
      "Quando vence a sua aplicação atual e o que acontece com o valor no vencimento?",
      "O rendimento dessa aplicação ainda é competitivo comparado às taxas de hoje?",
      "Você precisa desse dinheiro em algum prazo específico?",
      "Pretende usar o valor para algum objetivo, como entrada de imóvel ou aposentadoria?",
    ],
    produtos: [
      "Renda fixa pós-fixada e prefixada",
      "Títulos atrelados à inflação (IPCA+)",
      "Fundos de renda fixa e de crédito privado",
    ],
    compliance:
      "O vencimento é uma oportunidade de revisão do planejamento, não uma indicação automática de troca. Qualquer decisão deve ser tomada pelo cliente após comparar taxas, prazos, riscos e adequação ao perfil.",
  },
  {
    slug: "concentracao",
    title: "Concentração de investimentos",
    trigger:
      "Cliente com patrimônio concentrado em um único produto, emissor, indexador ou tipo de ativo, ou com grande exposição em ações de poucas empresas.",
    diagnostico:
      "Identifica exposições elevadas a risco de crédito, de mercado e de liquidez, e mapeia como distribuir o patrimônio entre indexadores, prazos e classes de ativos.",
    perguntas: [
      "Se esse investimento caísse 30% amanhã, você conseguiria manter o planejamento?",
      "Todo o seu patrimônio depende de uma única empresa ou instituição?",
      "Você sabe o que acontece com o seu dinheiro se esse título precisar ser vendido antes do prazo?",
      "Já pensou em como distribuir o patrimônio entre prazos e indexadores diferentes?",
    ],
    produtos: [
      "Diversificação entre indexadores (CDI, IPCA, prefixado)",
      "Fundos de renda variável e multimercado",
      "Fundos e ativos com exposição internacional",
    ],
    compliance:
      "Diversificação reduz risco e não elimina possibilidade de perda, nem garante rentabilidade. A distribuição do patrimônio deve respeitar o perfil, o horizonte e os objetivos de cada cliente.",
  },
  {
    slug: "credito-necessidade",
    title: "Necessidade de crédito",
    trigger:
      "Cliente relata necessidade de crédito para consolidar dívidas, financiar um projeto ou cobrir imprevistos, ou que usa modalidades caras como cheque especial e rotativo.",
    diagnostico:
      "Revela a modalidade mais aderente à renda, o impacto do comprometimento mensal no orçamento e se existem alternativas de custo menor para a mesma necessidade.",
    perguntas: [
      "Para que finalidade você precisa desse crédito e qual o valor envolvido?",
      "Quanto da sua renda mensal já está comprometida com parcelas?",
      "Você já avaliou modalidades como consignado ou crédito com garantia?",
      "Qual seria o impacto no orçamento se você precisar de um atraso no pagamento?",
    ],
    produtos: [
      "Crédito consignado",
      "Crédito com garantia de imóvel ou veículo",
      "Refinanciamento e consolidação de dívidas",
      "Crédito imobiliário",
    ],
    compliance:
      "A concessão de crédito depende de análise de crédito e das políticas de cada instituição, sem garantia de aprovação. O conteúdo não incentiva endividamento; a decisão de contratar é do cliente.",
  },
  {
    slug: "seguros-lacuna",
    title: "Lacunas de proteção no orçamento familiar",
    trigger:
      "Cliente com dependentes ou bens relevantes que não possui ou possui pouca cobertura de seguros de vida, residencial, automóvel ou empresarial.",
    diagnostico:
      "Mapeia a exposição a riscos que podem comprometer o patrimônio ou a renda da família e dimensiona a necessidade de coberturas frente às proteções já existentes.",
    perguntas: [
      "Se você ficasse sem renda por um período, como a família manteria as despesas?",
      "Quem depende financeiramente da sua renda hoje?",
      "Se o imóvel ou o carro sofressem um sinistro, você teria condições de arcar com o prejuízo?",
      "Quais coberturas você já possui e quais os limites atuais?",
    ],
    produtos: [
      "Seguro de vida",
      "Seguro residencial",
      "Seguro automóvel",
      "Seguro empresarial",
    ],
    compliance:
      "Seguro é uma análise de necessidade de proteção; a contratação é decisão do cliente após a leitura das condições contratuais, coberturas, carências, limites e exclusões.",
  },
  {
    slug: "previdencia-planejamento",
    title: "Planejamento previdenciário",
    trigger:
      "Cliente com renda variável, informal ou sem contribuição previdenciária, que ainda não iniciou a construção de uma renda de longo prazo para a aposentadoria.",
    diagnostico:
      "Verifica a existência e a regularidade das contribuições ao INSS, a possibilidade de previdência complementar e se o patrimônio atual é suficiente para a renda desejada no futuro.",
    perguntas: [
      "Você contribui para o INSS hoje? Há quanto tempo e com qual base de cálculo?",
      "Qual renda mensal você gostaria de ter na aposentadoria?",
      "Em quanto tempo pretende parar de trabalhar?",
      "Você já conhece a diferença entre os planos com tributação PGBL e VGBL?",
    ],
    produtos: [
      "Previdência complementar aberta (PGBL e VGBL)",
      "Fundos de investimento de longo prazo",
      "Renda fixa e renda variável com horizonte de aposentadoria",
    ],
    compliance:
      "A previdência complementar é voluntária e tem tributação própria conforme o plano e o regime escolhido. Não há garantia de benefício ou rentabilidade; a decisão deve considerar o perfil e o horizonte do cliente.",
  },
  {
    slug: "reserva-de-emergencia",
    title: "Reserva de emergência",
    trigger:
      "Cliente sem reserva financeira para imprevistos como desemprego, saúde ou manutenção, ou que dependeria de crédito caro para cobrir essas situações.",
    diagnostico:
      "Avalia o tamanho das despesas mensais, a volatilidade da renda e se existe proteção mínima antes de o cliente se expor a investimentos de maior risco.",
    perguntas: [
      "Qual é a sua despesa mensal essencial, incluindo moradia, alimentação e contas?",
      "Quanto tempo você conseguiria manter a família caso a renda cessasse?",
      "Quais imprevistos já afetaram seu orçamento nos últimos dois anos?",
      "Você prefere manter esse dinheiro com liquidez imediata, mesmo rendendo menos?",
    ],
    produtos: [
      "Tesouro Selic",
      "CDB com liquidez diária",
      "Fundos de renda fixa com resgate no mesmo dia",
    ],
    compliance:
      "O tamanho adequado da reserva depende da realidade de cada cliente e não existe valor universal. O conteúdo é educativo e não constitui recomendação de investimento.",
  },
  {
    slug: "primeira-moradia",
    title: "Primeira moradia",
    trigger:
      "Cliente que pretende adquirir o primeiro imóvel e desconhece modalidades de financiamento, uso de FGTS, subsídios ou formas de planejar o valor de entrada.",
    diagnostico:
      "Levanta a capacidade de entrada, o comprometimento de renda nos prazos disponíveis e a estratégia para formar o valor necessário, considerando também a opção de alugar versus comprar.",
    perguntas: [
      "Qual valor de entrada você já consegue dar no imóvel?",
      "Quanto da sua renda mensal está disponível para uma parcela de financiamento?",
      "Você já avaliou usar o FGTS para reduzir o saldo financiado?",
      "Comparou o custo total de financiar com o de continuar alugando?",
    ],
    produtos: [
      "Crédito imobiliário no âmbito do SFH",
      "Utilização de FGTS no financiamento",
      "Investimento voltado a formar o valor de entrada",
      "Análise comparativa entre comprar e alugar",
    ],
    compliance:
      "Financiamento imobiliário exige análise de crédito e capacidade de pagamento; condições variam conforme a instituição e as políticas de crédito vigentes. A decisão de contratar é do cliente.",
  },
  {
    slug: "protecao-cambial",
    title: "Proteção para exposição cambial",
    trigger:
      "Cliente com despesas ou receitas em moeda estrangeira, como viagens, estudos no exterior, importações ou família morando fora do Brasil, ou que deseja diversificar patrimônio em outra moeda.",
    diagnostico:
      "Identifica a exposição natural do cliente à variação do câmbio e os instrumentos que reduzem a surpresa de mudanças bruscas no orçamento e no patrimônio.",
    perguntas: [
      "Qual é o valor e o prazo das suas despesas ou receitas em moeda estrangeira?",
      "Como uma variação de 10% no câmbio impactaria seu orçamento?",
      "Você prefere proteger o valor comprometido ou aceitar a variação do mercado?",
      "Já avaliou o custo de travar o câmbio em uma parte do valor?",
    ],
    produtos: [
      "Fundos cambiais",
      "Conta em moeda estrangeira",
      "Operações de câmbio para viagens e estudos",
      "Títulos e fundos com exposição a moedas fortes",
    ],
    compliance:
      "Câmbio é volátil e proteção reduz risco de variação sem garantir ganho. Nenhuma operação deve ser feita sem que o cliente compreenda os custos, o prazo e a exposição envolvidos.",
  },
  {
    slug: "aposentadoria-proxima",
    title: "Aposentadoria próxima",
    trigger:
      "Cliente a menos de cinco a dez anos da aposentadoria, ou já aposentado, que precisa transformar patrimônio em renda mensal e revisar a adequação dos investimentos.",
    diagnostico:
      "Avalia a renda projetada frente ao padrão de vida, a sequência de retiradas do patrimônio, a adequação da liquidez e a transição gradual do perfil de risco.",
    perguntas: [
      "Qual renda mensal o seu patrimônio atual conseguiria sustentar na aposentadoria?",
      "Quais fontes de renda você terá: INSS, previdência, aluguéis, investimentos?",
      "Você já definiu a ordem e o ritmo de retiradas dos investimentos?",
      "Quanto tempo você pretende manter o patrimônio rendendo após parar de trabalhar?",
    ],
    produtos: [
      "Renda fixa com vencimentos escalonados",
      "Previdência complementar com plano de benefícios",
      "Planejamento de retiradas programadas",
      "Renda variável com participação reduzida no portfólio",
    ],
    compliance:
      "O planejamento de aposentadoria é individualizado e não há garantia de renda futura. As decisões dependem do perfil, do horizonte e das expectativas de gastos de cada cliente.",
  },
];
