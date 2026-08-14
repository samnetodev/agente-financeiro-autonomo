import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Ações",
    slug: "acoes",
    category: "mercado-de-capitais",
    definition:
      "Ações são frações do capital social de uma empresa negociadas em bolsa de valores. Quem compra uma ação se torna sócio da empresa.",
    bancario:
      "Ao recomendar ações, o profissional do mercado financeiro deve esclarecer que o cliente passa a ser sócio da empresa e que o retorno vem da valorização do papel e dos dividendos, sem rendimento garantido. É um produto de renda variável, indicado a perfis arrojados e horizontes longos.",
    tecnico:
      "As ações são valores mobiliários emitidos por sociedades anônimas de capital aberto, negociados na B3. Cada ação confere direito a parte do lucro (dividendos), direito de voto (ações ON) e participação no patrimônio, com retorno não garantido e sujeito à volatilidade do mercado.",
    related: ["bdr", "etf", "beta", "mercado-secundario"],
  },
  {
    term: "Alfa",
    slug: "alfa",
    category: "fundos",
    definition:
      "Alfa mede o retorno de um fundo acima do seu benchmark, considerando o risco assumido. Alfa positivo significa que o gestor gerou valor extra.",
    bancario:
      "Quando um cliente pergunta se o fundo 'ganhou do CDI', o alfa é justamente essa diferença. Explique que nem todo ganho acima do índice é qualidade: é preciso verificar se o gestor assumiu risco adicional para obter esse resultado.",
    tecnico:
      "O alfa de Jensen é o excesso de retorno de uma carteira em relação ao retorno esperado pelo Capital Asset Pricing Model (CAPM), dado pelo intercepto da regressão entre os retornos do fundo e do benchmark. Alfa positivo indica habilidade do gestor em gerar retorno acima do risco sistemático.",
    related: ["beta", "benchmark", "sharpe", "drawdown"],
  },
  {
    term: "ANBIMA",
    slug: "anbima",
    category: "mercado-de-capitais",
    definition:
      "ANBIMA é a associação que autorregula e padroniza o mercado financeiro e de capitais brasileiro, incluindo certificações e regras de distribuição de produtos.",
    bancario:
      "A ANBIMA estabelece regras que o profissional do mercado financeiro deve seguir na distribuição de investimentos, como a coleta do perfil do investidor, a divulgação de lâminas e a verificação da adequação dos produtos. As certificações CPA-10, CPA-20 e CEA são emitidas por essa entidade.",
    tecnico:
      "A Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais exerce autorregulação sobre fundos, valores mobiliários e práticas de distribuição. Mantém códigos de regulação e melhores práticas, a certificação de profissionais e a apuração de índices de referência como o IMA e a taxa DI.",
    related: ["ima", "suitability", "cdi", "fiis"],
  },
  {
    term: "Alocação de ativos",
    slug: "asset-allocation",
    category: "investidores",
    definition:
      "Alocação de ativos é a distribuição do dinheiro do cliente entre classes de investimento, como renda fixa, ações e câmbio. É o que define a maior parte do retorno de uma carteira.",
    bancario:
      "Em uma consultoria de investimento, a primeira conversa é sobre alocação: quanto vai para renda fixa, renda variável, fundos imobiliários e previdência. Essa distribuição deve refletir o objetivo, o prazo e a tolerância a perdas do cliente, não a rentabilidade de cada produto isolado.",
    tecnico:
      "A alocação estratégica define as ponderações de longo prazo entre classes de ativos a partir de modelos de média-variância (Markowitz), risco, correlação e objetivos do investidor; a tática ajusta essas ponderações no curto prazo. Estudos indicam que a política de alocação explica a maior parte da variabilidade dos retornos de carteiras diversificadas.",
    related: ["ativo", "benchmark", "aversao-ao-risco", "suitability"],
  },
  {
    term: "Ativo",
    slug: "ativo",
    category: "mercado-de-capitais",
    definition:
      "Ativo é um bem ou direito com valor financeiro. No mercado, é qualquer título ou aplicação que compõe uma carteira de investimento.",
    bancario:
      "No dia a dia, quando o cliente fala em 'comprar um ativo', ele se refere a um produto de investimento: um título público, uma ação ou uma cota de fundo. Cada ativo tem seu próprio risco, liquidez e forma de tributação.",
    tecnico:
      "No âmbito patrimonial, ativo é todo direito ou bem capaz de gerar benefícios econômicos futuros. No mercado de capitais, o termo designa títulos e valores mobiliários (renda fixa, renda variável, derivativos, fundos) cuja precificação depende de características como fluxo de caixa, risco de crédito e liquidez.",
    related: ["asset-allocation", "renda-fixa", "volatilidade", "liquidez"],
  },
  {
    term: "Aversão ao risco",
    slug: "aversao-ao-risco",
    category: "investidores",
    definition:
      "Aversão ao risco é a preferência do investidor por evitar perdas, exigindo retorno maior para aceitar incerteza. Quanto maior a aversão, menor a tolerância a quedas da carteira.",
    bancario:
      "É o ponto de partida da suitability: o profissional do mercado financeiro precisa entender se o cliente aceita ver o saldo cair para buscar retorno maior. Um cliente avesso ao risco prioriza renda fixa e proteção do capital, mesmo que isso signifique rendimento menor.",
    tecnico:
      "Na teoria da utilidade esperada, o investidor avesso ao risco possui função utilidade côncava, exigindo prêmio positivo para carregar incerteza. O grau de aversão ao risco define o coeficiente de aversão que equilibra risco e retorno na fronteira eficiente de Markowitz e norteia a construção de carteiras adequadas.",
    related: ["suitability", "premio-de-risco", "volatilidade", "asset-allocation"],
  },
  {
    term: "Benchmark",
    slug: "benchmark",
    category: "fundos",
    definition:
      "Benchmark é o índice de referência usado para avaliar o desempenho de um investimento. No Brasil, o CDI e o Ibovespa são os mais comuns.",
    bancario:
      "Ao apresentar um fundo, sempre compare com o benchmark declarado no regulamento. Um fundo que rende 100% do CDI precisa ser avaliado contra o CDI, nunca contra a bolsa; a lâmina do produto traz essa informação obrigatoriamente.",
    tecnico:
      "O benchmark é o índice de mercado contra o qual o desempenho de uma carteira ou gestor é mensurado, definido no regulamento do fundo. A avaliação de performance deve comparar o retorno da carteira ao benchmark com o risco efetivamente incorrido, usando métricas como tracking error, alfa e índice de Sharpe.",
    related: ["ima", "cdi", "sharpe", "alfa"],
  },
  {
    term: "BDR",
    slug: "bdr",
    category: "mercado-de-capitais",
    definition:
      "BDR é um certificado negociado na B3 que representa ações de empresas estrangeiras. Permite investir no exterior sem abrir conta internacional.",
    bancario:
      "É a forma mais simples de dar ao cliente exposição a empresas estrangeiras, como gigantes de tecnologia, usando a mesma conta na B3. Lembre que o investidor fica exposto ao risco da ação e à variação do câmbio, já que o preço é em dólar.",
    tecnico:
      "Brazilian Depositary Receipts são certificados de depósito emitidos no Brasil, custodiados por um banco depositário, representando valores mobiliários emitidos no exterior. Podem ser patrocinados ou não, e sua precificação reflete o preço do papel subjacente convertido pelo câmbio, com tributação de ganhos de capital e de juros sobre capital próprio.",
    related: ["acoes", "dolar", "cambio-comercial", "mercado-secundario"],
  },
  {
    term: "Beta",
    slug: "beta",
    category: "fundos",
    definition:
      "Beta mede a sensibilidade de um ativo ou fundo aos movimentos do mercado. Beta de 1,2 indica que o ativo tende a variar 20% a mais que o mercado.",
    bancario:
      "Sirva-se do beta para explicar por que um fundo sobe ou cai mais que o Ibovespa: ele tem sensibilidade maior ao mercado. Isso não é qualidade do gestor, é característica estrutural do produto.",
    tecnico:
      "O beta é o coeficiente de regressão entre os retornos do ativo e os do mercado, representando o risco sistemático não diversificável no CAPM. Beta igual a 1 significa que o ativo acompanha o mercado; acima de 1 amplifica os movimentos e abaixo de 1 os atenua.",
    related: ["alfa", "volatilidade", "benchmark", "sharpe"],
  },
  {
    term: "CDB",
    slug: "cdb",
    category: "renda-fixa",
    definition:
      "CDB é um título de renda fixa emitido por bancos para captar recursos. É garantido pelo FGC até os limites regulamentares.",
    bancario:
      "É um dos produtos mais comuns de balcão: o banco capta do cliente para financiar suas operações e devolve com juros. Na hora de vender, destaque o emissor, a taxa, o prazo e a garantia do FGC, e prefira títulos de bancos sólidos quando a taxa oferecida for muito alta.",
    tecnico:
      "O Certificado de Depósito Bancário é um valor mobiliário de renda fixa emitido por instituições financeiras como forma de captação. A remuneração pode ser prefixada, pós-fixada em CDI ou híbrida, e a garantia do FGC cobre saldos até o limite regulamentar por CPF e por instituição, conforme o risco de crédito do emissor.",
    related: ["lci", "lca", "fgc", "cdi"],
  },
  {
    term: "CDI",
    slug: "cdi",
    category: "renda-fixa",
    definition:
      "CDI é a taxa média das operações interbancárias de um dia. É a principal referência de rentabilidade da renda fixa brasileira.",
    bancario:
      "Quando o cliente vê '108% do CDI', o CDI é essa taxa de referência do mercado. Explicar que ele acompanha de perto a Selic e que produtos pós-fixados rendem conforme a variação do CDI ao longo do prazo.",
    tecnico:
      "A taxa CDI é calculada pela média ponderada das taxas praticadas nos depósitos interfinanceiros de um dia, apurada pela B3. Por ser próxima da Selic efetiva, funciona como proxy do custo do dinheiro e é o parâmetro mais usado para remuneração de produtos de renda fixa pós-fixados no Brasil.",
    related: ["di", "selic", "benchmark", "curva-de-juros"],
  },
  {
    term: "CET",
    slug: "cet",
    category: "credito",
    definition:
      "CET é o custo efetivo total de uma operação de crédito: juros, tarifas, tributos e seguros somados em uma única taxa. O banco é obrigado a informá-lo.",
    bancario:
      "Na mesa de crédito, mostre sempre o CET antes da assinatura. A taxa de juros sozinha não revela o custo real: tarifas e seguros embutidos podem elevar bastante o custo final, e o BCB exige que o CET seja apresentado ao cliente.",
    tecnico:
      "O Custo Efetivo Total é o indicador do custo completo do crédito, exigido pelo Banco Central do Brasil em contratos de operações de crédito, incluindo taxa de juros, tributos, tarifas e despesas, expresso em percentual anual e equivalente. Ele permite comparar ofertas de crédito de forma transparente e é chave para análise de carência, amortização e quitação antecipada.",
    related: ["custo-efetivo", "inadimplencia", "spread", "garantia"],
  },
  {
    term: "Convexidade",
    slug: "convexidade",
    category: "renda-fixa",
    definition:
      "Convexidade mede a curvatura da relação entre o preço de um título e a variação da taxa de juros. Títulos convexos ganham mais quando a taxa cai e perdem menos quando sobe.",
    bancario:
      "É um conceito avançado, mas útil na prática: títulos com maior convexidade, como os prefixados longos, oscilam mais em cenários de mudança de juros. Para clientes conservadores, prefira prazos curtos, onde esse efeito é pequeno.",
    tecnico:
      "A convexidade é a segunda derivada do preço em relação ao yield, medida da curvatura da curva preço-tempo. Ela corrige a aproximação linear da duration modificada: quanto maior a convexidade, maior o ganho em quedas de taxa e menor a perda em altas, tornando o título mais atrativo em ambientes de juros voláteis.",
    related: ["duration", "duration-modificada", "marcacao-a-mercado", "prefixado"],
  },
  {
    term: "Crédito privado",
    slug: "credito-privado",
    category: "credito",
    definition:
      "Crédito privado é o conjunto de títulos de renda fixa emitidos por empresas e bancos, como debêntures, CDBs, LCI e LCA. Paga prêmio sobre o título público.",
    bancario:
      "Ao diversificar a renda fixa do cliente, o crédito privado é o passo seguinte ao Tesouro: oferece retorno maior, mas exige análise do emissor, do rating e da liquidez. Nunca venda apenas pela taxa; sempre situe o risco de crédito envolvido.",
    tecnico:
      "O crédito privado compreende títulos de dívida emitidos por instituições financeiras e não financeiras, abrangendo debêntures, notas comerciais, CRIs/CRAs e depósitos profissionais do mercado financeiro. Sua precificação incorpora o spread de crédito sobre o ativo livre de risco, determinado por rating, senioridade, garantias, vencimento e condições de mercado.",
    related: ["debenture", "fidc", "rating", "premio-de-risco"],
  },
  {
    term: "Debênture",
    slug: "debenture",
    category: "credito",
    definition:
      "Debênture é um título de dívida emitido por empresas para captar recursos no mercado. Em geral, paga juros periódicos e devolve o principal no vencimento.",
    bancario:
      "É o produto típico do crédito privado: a empresa toma dinheiro emprestado do mercado e paga juros. Na oferta ao cliente, explique que não há garantia do FGC e que o retorno depende da saúde financeira do emissor.",
    tecnico:
      "A debênture é um valor mobiliário de renda fixa emitido por sociedades anônimas de capital aberto ou fechado, sem garantia do FGC, que pode ser simples, conversível em ações, permutável ou incentivada (isenta de IR para pessoa física quando destinada a infraestrutura). Seus fluxos incluem cupons periódicos, amortizações e pagamento do principal no vencimento, e o risco é função do rating e das garantias.",
    related: ["credito-privado", "rating", "mercado-primario", "inadimplencia"],
  },
  {
    term: "Duration",
    slug: "duration",
    category: "renda-fixa",
    definition:
      "Duration é o prazo médio ponderado dos fluxos de caixa de um título. Quanto maior, mais o preço oscila quando os juros mudam.",
    bancario:
      "Explique ao cliente que duration é diferente de prazo de vencimento: é o prazo 'médio' em que o dinheiro é recuperado, considerando os juros pagos no meio do caminho. Títulos com duration longa sofrem mais com alta de juros e valorizam mais quando a taxa cai.",
    tecnico:
      "A duration de Macaulay é a média ponderada dos prazos de recebimento de cada fluxo de caixa, ponderada pelo valor presente de cada pagamento. Ela aproxima a variação percentual do preço de um título para pequenas variações no yield e é a base da gestão de imunização de carteiras de renda fixa.",
    related: ["duration-modificada", "convexidade", "marcacao-a-mercado", "prefixado"],
  },
  {
    term: "DI",
    slug: "di",
    category: "renda-fixa",
    definition:
      "DI é o depósito interfinanceiro, empréstimo de um dia entre bancos. A média das taxas DI forma o CDI.",
    bancario:
      "O cliente não aplica diretamente em DI, mas ouve falar dele nos fundos que rendem porcentuais do CDI. Explique que o mercado DI é a engrenagem por trás da taxa de referência da renda fixa brasileira.",
    tecnico:
      "O Depósito Interfinanceiro é um título emitido por instituições financeiras para empréstimos de curtíssimo prazo (um dia útil), lastreado em operações compromissadas. A média ponderada das taxas DI negociadas é o próprio CDI, e os contratos futuros de DI na B3 formam a curva de juros usada na precificação da renda fixa brasileira.",
    related: ["cdi", "selic", "curva-de-juros", "estrutura-a-termo"],
  },
  {
    term: "Dólar",
    slug: "dolar",
    category: "cambio",
    definition:
      "Dólar é a moeda norte-americana e principal referência cambial do mundo. No Brasil, é negociado pelo câmbio comercial e em contratos futuros.",
    bancario:
      "No dia a dia da agência, o dólar aparece em transferências, investimentos no exterior e viagens. Explique que o preço oscila por oferta e demanda, juros entre países e cenário político e econômico, e que a cotação comercial difere do dólar turismo.",
    tecnico:
      "O dólar norte-americano é a principal moeda de reserva internacional, usada em grande parte das transações globais. No Brasil, a taxa de câmbio é determinada pelo regime de flutuação com intervenções do Banco Central, e o preço é formado no mercado à vista (câmbio comercial), nos swaps e nos contratos futuros de dólar (DOL) na B3.",
    related: ["dxy", "cambio-comercial", "hedge-cambial", "treasury"],
  },
  {
    term: "Drawdown",
    slug: "drawdown",
    category: "fundos",
    definition:
      "Drawdown é a maior queda acumulada de um investimento a partir do seu ponto mais alto. Mostra a pior perda que o investidor teria enfrentado.",
    bancario:
      "Antes de indicar um fundo de ações ou multimercado, mostre o drawdown histórico: é mais transparente que prometer rentabilidade média. Um fundo que caiu 30% pode não ser adequado a um cliente que não suportaria ver a posição nesse nível.",
    tecnico:
      "O drawdown é a máxima queda percentual observada entre um pico e o vale subsequente de uma série de retornos, em um horizonte dado. Junto com a volatilidade e o índice de Sharpe, compõe métricas de risco de cauda e é usado em avaliações de robustez de gestores e em estratégias de controle de perda.",
    related: ["volatilidade", "var", "sharpe", "aversao-ao-risco"],
  },
  {
    term: "ETF",
    slug: "etf",
    category: "fundos",
    definition:
      "ETF é um fundo de índice negociado em bolsa como uma ação. Dá diversificação com custo baixo, replicando índices como Ibovespa ou S&P 500.",
    bancario:
      "Para clientes que querem renda variável sem escolher ações uma a uma, o ETF é uma porta de entrada: um único produto acompanha o índice inteiro. Lembre de explicar a tributação, os custos e que o produto pode ser comprado e vendido a qualquer momento no pregão.",
    tecnico:
      "Exchange Traded Fund é um fundo de investimento com cotas negociadas em bolsa que busca replicar a variação de um índice de referência por meio de gestão passiva. O mercado brasileiro negocia ETFs de renda variável, renda fixa e multiativos, inclusive no exterior (BDRs), com estrutura de custos menor que fundos ativos e acompanhamento do tracking error.",
    related: ["fiis", "benchmark", "bdr", "mercado-secundario"],
  },
  {
    term: "Estrutura a termo",
    slug: "estrutura-a-termo",
    category: "macroeconomia",
    definition:
      "Estrutura a termo é a relação entre as taxas de juros e os prazos de vencimento. No Brasil, a curva de contratos DI mostra essas taxas para cada prazo.",
    bancario:
      "É o que explica por que um título de 1 ano paga taxa diferente de um de 5 anos: cada prazo tem seu próprio prêmio. Ao montar uma carteira escalonada de prazos, o profissional do mercado financeiro está aplicando a leitura da estrutura a termo.",
    tecnico:
      "A estrutura a termo de taxas de juros (ETTJ) descreve a relação entre yield e maturidade para títulos de mesmo emissor e risco, refletindo expectativas de juros futuros, inflação e prêmios de prazo e liquidez. No Brasil, é observada principalmente na curva de contratos futuros de DI da B3, base de precificação de toda a renda fixa.",
    related: ["curva-de-juros", "prefixado", "juros-reais", "inflacao-implicita"],
  },
  {
    term: "FGC",
    slug: "fgc",
    category: "renda-fixa",
    definition:
      "FGC é o fundo que protege depósitos e títulos financeiros até o limite regulamentar. Cobre CDB, LCI, LCA, poupança e contas correntes.",
    bancario:
      "É o principal argumento de segurança na venda de produtos financeiros: em caso de quebra da instituição, o cliente reembolsa até o limite por CPF. Atenção ao limite e à soma das posições no mesmo grupo econômico ao orientar o cliente.",
    tecnico:
      "O Fundo Garantidor de Créditos é uma entidade privada que garante o reembolso de depósitos à vista, a prazo e de títulos emitidos por instituições financeiras associadas, até o limite vigente por CPF e por instituição, com tetos adicionais definidos pela regulamentação. A cobertura não é obrigatória e não abrange produtos de renda variável nem títulos emitidos fora do sistema bancário.",
    related: ["cdb", "lci", "lca", "risco-de-credito"],
  },
  {
    term: "FIDC",
    slug: "fidc",
    category: "credito",
    definition:
      "FIDC é um fundo que compra recebíveis de empresas e emite cotas lastreadas nesses direitos. O retorno vem dos juros pagos pelos devedores.",
    bancario:
      "É um produto sofisticado, normalmente para clientes qualificados ou profissionais. Ao apresentá-lo, destaque a estrutura de cotas sênior e subordinada e o risco de crédito dos recebíveis, que não têm garantia do FGC.",
    tecnico:
      "O Fundo de Investimento em Direitos Creditórios adquire recebíveis (duplicatas, cheques, cartões, contratos) e emite cotas de classes com prioridades distintas de recebimento: sênior, mezanino e subordinada. A subordinação funciona como proteção de crédito das cotas mais altas, e o desempenho depende da inadimplência, do fluxo de caixa e da qualidade da política de crédito do cedente.",
    related: ["credito-privado", "fluxo-de-caixa", "rating", "inadimplencia"],
  },
  {
    term: "FIIs",
    slug: "fiis",
    category: "fundos",
    definition:
      "FIIs são fundos que investem em imóveis e ativos do setor imobiliário. Negociados em bolsa, costumam distribuir rendimentos isentos de IR.",
    bancario:
      "Para o cliente que busca renda periódica, os FIIs distribuem aluguel e rendimentos. Explique que, além do rendimento, o preço da cota oscila no mercado e que a isenção de IR sobre dividendos vale para pessoa física nas condições regulamentares.",
    tecnico:
      "Os Fundos de Investimento Imobiliário são condomínios que investem em empreendimentos, cotas de outros FIIs e títulos imobiliários (LCI, CRI). As cotas são negociadas na B3, com rendimentos distribuídos periodicamente e isentos de imposto de renda para pessoas físicas em bolsa, conforme a Lei 11.033/2004, observados os requisitos de pulverização.",
    related: ["etf", "fluxo-de-caixa", "mercado-secundario", "liquidez"],
  },
  {
    term: "Fluxo de caixa",
    slug: "fluxo-de-caixa",
    category: "credito",
    definition:
      "Fluxo de caixa é a sequência de entradas e saídas de dinheiro de um ativo, empresa ou operação ao longo do tempo. É a base para avaliar crédito e precificar títulos.",
    bancario:
      "Na análise de crédito, o fluxo de caixa do tomador mostra se ele consegue pagar as parcelas sem estrangular o caixa. Na renda fixa, é o conjunto de cupons e do principal que define o valor do título.",
    tecnico:
      "O fluxo de caixa projeta recebimentos e pagamentos em cada período, permitindo cálculo de valor presente, taxa interna de retorno e capacidade de pagamento. É insumo central para precificação de títulos, análise de viabilidade de projetos, avaliação de empresas e estruturas de securitização como FIDCs e CRIs.",
    related: ["fidc", "debenture", "fiis", "inadimplencia"],
  },
  {
    term: "IMA",
    slug: "ima",
    category: "renda-fixa",
    definition:
      "IMA é a família de índices da ANBIMA que acompanha títulos públicos brasileiros, como IMA-B e IRF-M. Serve de referência para renda fixa.",
    bancario:
      "Quando o cliente pergunta 'rendeu quanto?', os fundos de renda fixa costumam ser comparados aos índices IMA. IMA-B acompanha títulos indexados à inflação e IRF-M os prefixados: índices diferentes medem cenários diferentes.",
    tecnico:
      "Os Índices de Mercado ANBIMA são carteiras teóricas de títulos públicos federais, compostos por IMA-S (pós-fixados), IRF-M (prefixados), IMA-B (indexados ao IPCA) e IMA-C (indexados ao IGP-M), além de subíndices por duration como IMA-B5 e IMA-B5+. São benchmarks amplamente usados por fundos e ETFs de renda fixa no Brasil.",
    related: ["benchmark", "anbima", "tesouro-direto", "marcacao-a-mercado"],
  },
  {
    term: "IPCA",
    slug: "ipca",
    category: "macroeconomia",
    definition:
      "IPCA é o índice oficial de inflação do Brasil, medido pelo IBGE. É a referência para metas de inflação e para títulos indexados, como a NTN-B.",
    bancario:
      "É o número que aparece no noticiário econômico e que corrige aluguéis, salários e investimentos indexados. Quando o cliente aplica em 'Tesouro IPCA+', o rendimento é a variação do IPCA mais uma taxa real definida.",
    tecnico:
      "O Índice Nacional de Preços ao Consumidor Amplo, apurado pelo IBGE, mede a variação dos preços de uma cesta de consumo de famílias com rendimento de 1 a 40 salários mínimos. É o índice utilizado pelo Banco Central na verificação do cumprimento das metas de inflação e o indexador dos títulos públicos NTN-B e NTN-B Principal.",
    related: ["inflacao-implicita", "juros-reais", "selic", "tesouro-direto"],
  },
  {
    term: "Inflação implícita",
    slug: "inflacao-implicita",
    category: "macroeconomia",
    definition:
      "Inflação implícita é a expectativa de inflação embutida na diferença entre a taxa prefixada e a taxa real de um título. É a inflação que o mercado projeta para o período.",
    bancario:
      "Para explicar, compare um título prefixado e um indexado ao IPCA de mesmo vencimento: a diferença entre as duas taxas é a inflação que o mercado precifica. Clientes que acreditam em inflação maior que a implícita devem preferir o indexado.",
    tecnico:
      "A inflação implícita é derivada da estrutura a termo, pela diferença entre o retorno nominal (prefixado) e o retorno real (indexado à inflação) de mesma maturidade, aplicando a equação de Fisher. Ela condensa expectativas de mercado e é monitorada pelo Banco Central como insumo de política monetária, podendo ser calculada também para os contratos de swap DI x IPCA da B3.",
    related: ["ipca", "juros-reais", "estrutura-a-termo", "prefixado"],
  },
  {
    term: "Investidor qualificado",
    slug: "investidor-qualificado",
    category: "investidores",
    definition:
      "Investidor qualificado é quem tem mais de R$ 1 milhão investido ou certificação aprovada. Tem acesso a produtos com estrutura mais complexa.",
    bancario:
      "Na prática, é a porta de acesso a fundos de crédito privado, estruturas offshore e produtos que exigem regras especiais de aplicação. Confirme sempre a comprovação da qualificação antes de ofertar esses produtos.",
    tecnico:
      "Pela Resolução CVM 135, é considerado investidor qualificado aquele que possui investimentos financeiros acima de R$ 1 milhão ou certificações aprovadas pela ANBIMA (como CGA) ou determinadas funções no mercado. A qualificação é critério de acesso a fundos com regras especiais de resgate, alavancagem e composição, distintos do público em geral.",
    related: ["suitability", "fidc", "credito-privado", "asset-allocation"],
  },
  {
    term: "Marcação a mercado",
    slug: "marcacao-a-mercado",
    category: "renda-fixa",
    definition:
      "Marcação a mercado é o registro diário do preço de um título pelo valor que ele teria se fosse vendido hoje. Faz o patrimônio oscilar todo dia.",
    bancario:
      "Quando o cliente estranha ver o saldo do fundo cair em um dia de alta de juros, a explicação é a marcação a mercado: os títulos do fundo são recalculados pelos preços atuais, não pelo valor de compra. Para quem leva o título até o vencimento, o efeito tende a se reverter.",
    tecnico:
      "A marcação a mercado (MaM) precifica os ativos de uma carteira a valor de mercado corrente, atualizando diariamente o patrimônio do fundo ou da carteira. A Resolução CVM 175 e as regras da ANBIMA padronizaram sua aplicação em fundos de renda fixa, eliminando a marcação na curva, e ela é fonte primária de volatilidade de cotas em cenários de juros.",
    related: ["duration", "convexidade", "volatilidade", "ima"],
  },
  {
    term: "Mercado primário",
    slug: "mercado-primario",
    category: "mercado-de-capitais",
    definition:
      "Mercado primário é onde nascem os títulos: nas primeiras emissões, o dinheiro vai para o emissor. Inclui IPOs e ofertas de debêntures.",
    bancario:
      "Nas ofertas públicas, o cliente compra o título direto do emissor na fase de lançamento. Explique a diferença para o mercado secundário: no primário, o recurso financia a empresa ou o Tesouro.",
    tecnico:
      "O mercado primário concentra as primeiras emissões de valores mobiliários, nas quais o recurso captado é destinado ao emissor, por meio de ofertas públicas registradas na CVM. Compreende operações como IPO e follow-on, emissões de debêntures e o lançamento de títulos públicos, e é a etapa em que se define o preço inicial dos papéis.",
    related: ["mercado-secundario", "debenture", "tesouro-direto", "fiis"],
  },
  {
    term: "Mercado secundário",
    slug: "mercado-secundario",
    category: "mercado-de-capitais",
    definition:
      "Mercado secundário é onde investidores negociam títulos já emitidos entre si. Dá liquidez e preço de mercado às aplicações.",
    bancario:
      "Quando o cliente compra e vende ações, cotas de FII ou títulos no Tesouro Direto, ele está no mercado secundário. É aqui que se forma o preço de negociação e que o investidor pode sair antes do vencimento.",
    tecnico:
      "No mercado secundário, os valores mobiliários já emitidos são negociados entre investidores, com transferência de propriedade sem intermediação do emissor, via pregão da B3, Tesouro Direto ou balcão. A profundidade e o volume de negociação desse mercado determinam a liquidez dos ativos, influenciando diretamente os prêmios exigidos na precificação.",
    related: ["mercado-primario", "liquidez", "etf", "bdr"],
  },
  {
    term: "PGBL",
    slug: "pgbl",
    category: "previdencia",
    definition:
      "PGBL é um plano de previdência complementar aberta que permite deduzir as contribuições do imposto de renda até 12% da renda bruta.",
    bancario:
      "Para quem declara o IR no modelo completo, o PGBL reduz a base tributável hoje, mas o imposto incide sobre o valor total no resgate. É indicado a quem vai usar o benefício fiscal, não a todos os clientes indistintamente.",
    tecnico:
      "O Plano Gerador de Benefício Livre é um plano de previdência complementar aberta, estruturado na modalidade de contribuição definida, com dedutibilidade das contribuições limitada a 12% da renda bruta anual para quem declara no modelo completo. No resgate, tributa-se o valor total recebido, podendo-se optar pela tabela progressiva ou regressiva, o que torna o benefício fiscal efetivo conforme o prazo de acumulação.",
    related: ["vgbl", "suitability", "tesouro-direto", "juros-reais"],
  },
  {
    term: "Prefixado",
    slug: "prefixado",
    category: "renda-fixa",
    definition:
      "Prefixado é o título de renda fixa com taxa definida na contratação. O investidor sabe hoje quanto vai receber no vencimento.",
    bancario:
      "É a aplicação mais simples de explicar: 'você aplica X hoje e recebe Y no vencimento'. Mas alerta para o risco de oportunidade: se os juros subirem depois, o título prefixado fica defasado frente ao mercado.",
    tecnico:
      "Em um título prefixado, o cupom é fixado na emissão, definindo exatamente o fluxo de pagamentos em termos nominais. A rentabilidade é conhecida ex ante, mas o investidor assume risco de marcação a mercado durante o prazo e risco de reinvestimento, com retorno real dependente da inflação efetiva do período.",
    related: ["juros-reais", "inflacao-implicita", "duration", "estrutura-a-termo"],
  },
  {
    term: "Prêmio de risco",
    slug: "premio-de-risco",
    category: "renda-fixa",
    definition:
      "Prêmio de risco é o retorno extra exigido para investir em algo além do ativo livre de risco. Compensa risco de crédito, de mercado e de liquidez.",
    bancario:
      "É a resposta à pergunta 'por que esse título paga mais que o Tesouro?': porque carrega mais risco. Quanto maior o prêmio, maior a recompensa, mas também maior a chance de perda.",
    tecnico:
      "O prêmio de risco é a diferença entre o retorno esperado de um ativo e a taxa livre de risco de mesmo prazo, decomposto em prêmios de crédito, de liquidez e de maturidade. Na precificação, deriva de modelos de equilíbrio como o CAPM, além de componentes específicos como o risco de default, refletido no spread de crédito.",
    related: ["spread", "risco-de-credito", "aversao-ao-risco", "credito-privado"],
  },
  {
    term: "Rating",
    slug: "rating",
    category: "credito",
    definition:
      "Rating é a nota que agências de classificação dão à capacidade de pagamento de um emissor ou título. Vai de AAA (baixo risco) até D (default).",
    bancario:
      "Antes de recomendar um título de crédito privado, o profissional do mercado financeiro deve olhar o rating e a sua evolução. Uma nota baixa ou em revisão é sinal de alerta, mesmo que a taxa paga seja alta.",
    tecnico:
      "O rating de crédito é uma opinião de agências especializadas (como Moody's, S&P e Fitch, no Brasil também SR Rating e Austin) sobre a probabilidade de inadimplência de um emissor ou instrumento. Escalas globais e locais, com níveis de investment grade e speculative grade, afetam o spread exigido pelo mercado e a capacidade de captação do emissor.",
    related: ["inadimplencia", "risco-de-credito", "debenture", "spread"],
  },
  {
    term: "Renda fixa",
    slug: "renda-fixa",
    category: "renda-fixa",
    definition:
      "Renda fixa é a classe de ativos com remuneração definida por taxa prefixada, indexada a indicador ou híbrida. Inclui títulos públicos, profissionais do mercado financeiro e privados.",
    bancario:
      "É a base das carteiras de clientes conservadores e moderados: CDB, LCI, LCA, Tesouro e fundos. O rendimento é conhecido nas regras, mas o valor de mercado oscila conforme os juros, e o retorno final depende de levar o título até o vencimento.",
    tecnico:
      "Renda fixa compreende instrumentos cujo fluxo de caixa é previsível em função de um regime de remuneração: prefixado, pós-fixado (CDI, Selic) ou híbrido (inflação mais taxa real). Os riscos relevantes são de crédito, de mercado (juros e marcação a mercado), de liquidez e de reinvestimento, mitigados por diversificação, duration e análise do emissor.",
    related: ["cdb", "tesouro-direto", "debenture", "duration", "marcacao-a-mercado"],
  },
  {
    term: "Risco de crédito",
    slug: "risco-de-credito",
    category: "credito",
    definition:
      "Risco de crédito é a chance de o emissor não pagar juros ou devolver o principal. É avaliado por rating, spreads e garantias.",
    bancario:
      "Ao recomendar crédito privado, pergunte sempre: 'esse emissor pode não pagar?'. A resposta está no rating, nas garantias e na situação da empresa. O FGC mitiga esse risco em produtos financeiros, mas não em debêntures.",
    tecnico:
      "O risco de crédito é a probabilidade de perda por inadimplência, degradação de crédito ou descasamento de timing nos fluxos de caixa do emissor. É modelado por probabilidade de default, perda dado o default e exposição na data de default (PD, LGD, EAD), e mitigado por garantias, covenants, subordinação e diversificação.",
    related: ["rating", "inadimplencia", "spread", "fgc"],
  },
  {
    term: "Risco de mercado",
    slug: "risco-de-mercado",
    category: "renda-fixa",
    definition:
      "Risco de mercado é a perda causada por variações em juros, câmbio, ações e preços de ativos. É medido por duration, beta e VaR.",
    bancario:
      "É o risco que mais gera dúvidas na agência: o cliente vê a cota cair mesmo sem notícia de crédito. Isso é movimento de mercado, imposto por juros e cenário, e afeta todos os ativos de forma diferente.",
    tecnico:
      "O risco de mercado é a exposição da carteira a movimentos adversos dos fatores de precificação: taxa de juros, moedas, índices de ações e preços de mercadorias. É mensurado por métricas de sensibilidade (duration, beta, deltas) e de perda potencial (VaR, CVaR), e gerenciado por limites, hedge e estresse de cenários.",
    related: ["volatilidade", "var", "duration", "marcacao-a-mercado"],
  },
  {
    term: "Risco de liquidez",
    slug: "risco-de-liquidez",
    category: "renda-fixa",
    definition:
      "Risco de liquidez é a dificuldade de vender um ativo rápido sem perda relevante de preço. É maior em títulos privados pouco negociados.",
    bancario:
      "Explique ao cliente que liquidez não é só 'posso resgatar': é 'posso resgatar sem desconto grande'. Títulos de crédito privado ilíquidos pagam mais justamente porque exigem espera até o vencimento para sair sem perda.",
    tecnico:
      "O risco de liquidez compreende o risco de liquidez de mercado, impossibilidade de negociar ativos a preços razoáveis em prazos curtos, e o de funding, incapacidade de honrar resgates. É mitigado por estruturas de resgate (como janelas e cotas ilíquidas), limites de concentração e gestão de caixa, e pode se intensificar em momentos de estresse sistêmico.",
    related: ["liquidez", "mercado-secundario", "credito-privado", "fiis"],
  },
  {
    term: "Selic",
    slug: "selic",
    category: "macroeconomia",
    definition:
      "Selic é a taxa básica de juros do Brasil, definida pelo Copom a cada 45 dias. É a principal ferramenta de política monetária e referência do mercado.",
    bancario:
      "Quando o Copom sobe ou corta a Selic, tudo muda na agência: CDI, CDBs, fundos e o crédito. Para o cliente, é o ponto de partida para comparar a rentabilidade de qualquer aplicação de renda fixa.",
    tecnico:
      "A taxa Selic é a taxa média das operações de financiamento diário com lastro em títulos públicos federais, e sua meta é definida pelo Comitê de Política Monetária (Copom) do Banco Central como instrumento do regime de metas de inflação. A Selic meta orienta a curva de juros, o crédito e o câmbio, influenciando a demanda agregada e a formação de preços na economia.",
    related: ["cdi", "di", "juros-reais", "curva-de-juros"],
  },
  {
    term: "Índice de Sharpe",
    slug: "sharpe",
    category: "fundos",
    definition:
      "Índice de Sharpe mede o retorno de um investimento acima do ativo livre de risco por unidade de risco total. Valores maiores indicam melhor relação risco-retorno.",
    bancario:
      "É uma boa forma de comparar fundos: dois produtos com retorno parecido podem ter Sharpe muito diferente, porque um assume mais risco para chegar lá. Para o cliente conservador, prefira fundos com Sharpe alto e volatilidade baixa.",
    tecnico:
      "O índice de Sharpe é o quociente entre o excesso de retorno sobre a taxa livre de risco e o desvio-padrão dos retornos, medindo a eficiência da remuneração por unidade de risco total. Seu uso como métrica de performance assume retornos aproximadamente normais, e deve ser combinado com análise de cauda, drawdown e consistência ao longo do ciclo.",
    related: ["alfa", "beta", "volatilidade", "drawdown"],
  },
  {
    term: "Spread",
    slug: "spread",
    category: "credito",
    definition:
      "Spread é a diferença entre a taxa de um título ou crédito e a taxa livre de risco de mesmo prazo. Reflete o prêmio por risco.",
    bancario:
      "No crédito, o spread é o que o banco ganha entre o custo da captação e o que cobra do cliente, mais a provisão para perdas. Em renda fixa, é o prêmio que o título paga acima do Tesouro.",
    tecnico:
      "O spread de crédito é o diferencial entre o yield de um ativo e a taxa livre de risco de mesma maturidade, expresso em pontos-base. Composto por prêmio de default, de recuperação, de liquidez e de imposto, ele se ajusta ao rating, ao ciclo de crédito e às condições de funding, sendo referência central para a precificação de crédito privado.",
    related: ["premio-de-risco", "rating", "credito-privado", "custo-efetivo"],
  },
  {
    term: "Suitability",
    slug: "suitability",
    category: "investidores",
    definition:
      "Suitability é o processo de adequar produtos de investimento ao perfil do cliente, obrigatório por regulação. O banco deve conhecer o cliente antes de recomendar.",
    bancario:
      "É o coração do trabalho de assessoria: antes de vender qualquer produto, avalie prazo, objetivos e tolerância a risco do cliente e registre o perfil. A Resolução CVM 30 exige essa adequação e responsabiliza quem não a observar.",
    tecnico:
      "A suitability é a obrigação regulatória, prevista na Resolução CVM 30 e nas normas da ANBIMA, de adequar recomendações de investimento ao perfil do cliente, considerando seus conhecimentos, objetivos, situação financeira e disposição ao risco. Seu descumprimento gera responsabilidade civil e sanções regulatórias, e o processo inclui questionário, classificação de perfil e monitoramento de posições.",
    related: ["aversao-ao-risco", "investidor-qualificado", "anbima", "asset-allocation"],
  },
  {
    term: "Tesouro Direto",
    slug: "tesouro-direto",
    category: "renda-fixa",
    definition:
      "Tesouro Direto é o programa que vende títulos públicos federais a pessoas físicas pela internet. É a porta de entrada da renda fixa.",
    bancario:
      "É o ativo de referência da renda fixa: sem risco de crédito do emissor (o Tesouro é o maior emissor do país), com liquidez diária. Ideal para explicar os conceitos de prefixado, indexado à inflação e pós-fixado ao cliente.",
    tecnico:
      "O Tesouro Direto é um programa da Secretaria do Tesouro Nacional, em parceria com a B3, que viabiliza a compra e venda de títulos públicos federais (LTN, LFT, NTN-B, NTN-B Principal e NTN-F) por pessoas físicas, com custódia na Selic e liquidez diária garantida pela recompra. As taxas são definidas pelo Tesouro a cada reoferta, e os preços variam conforme a marcação a mercado.",
    related: ["ima", "prefixado", "ipca", "liquidez"],
  },
  {
    term: "Treasury",
    slug: "treasury",
    category: "macroeconomia",
    definition:
      "Treasury são os títulos da dívida pública dos Estados Unidos, considerados o ativo livre de risco global. Suas taxas guiam os mercados do mundo inteiro.",
    bancario:
      "Quando o juro americano sobe, ele puxa o capital do mundo para os EUA e pressiona câmbio, bolsas e juros no Brasil. O profissional do mercado financeiro precisa acompanhar as taxas do Treasury para explicar os movimentos da renda fixa local.",
    tecnico:
      "Os títulos do Tesouro dos EUA (Treasury bonds, notes e bills) são emitidos em dólar e considerados a referência livre de risco global por sua profundidade e histórico. Os yields de 2 e 10 anos, o descompasso entre eles (inversão da curva) e os títulos indexados à inflação (TIPS) funcionam como termômetro das expectativas globais de crescimento, inflação e política monetária do Federal Reserve.",
    related: ["dolar", "dxy", "juros-reais", "estrutura-a-termo"],
  },
  {
    term: "VGBL",
    slug: "vgbl",
    category: "previdencia",
    definition:
      "VGBL é um plano de previdência sem dedução no imposto de renda. Os juros acumulados são tributados apenas no resgate.",
    bancario:
      "Para quem não declara no modelo completo ou já usou o limite de 12% no PGBL, o VGBL costuma ser a opção: não há benefício fiscal na entrada, mas o imposto incide só sobre o rendimento, não sobre o valor total resgatado.",
    tecnico:
      "O Vida Gerador de Benefício Livre é um plano de previdência complementar aberta em que não há dedutibilidade das contribuições; no resgate, a base de cálculo é apenas a diferença entre o valor bruto e o total de contribuições. Sua alíquota final depende da escolha entre tabela progressiva e regressiva, e é amplamente usado para planejamento sucessório, já que permite indicar beneficiários.",
    related: ["pgbl", "tesouro-direto", "juros-reais", "suitability"],
  },
  {
    term: "Volatilidade",
    slug: "volatilidade",
    category: "fundos",
    definition:
      "Volatilidade é a intensidade das oscilações do retorno de um ativo. Mede a incerteza e o risco de curto prazo do investimento.",
    bancario:
      "Para o cliente, volatilidade é 'quanto o investimento sobe e desce no caminho'. Fundos de ações e multimercados têm volatilidade alta; renda fixa curta, baixa. O perfil conservador não deve aceitar oscilações que comprometam o objetivo.",
    tecnico:
      "A volatilidade é o desvio-padrão anualizado dos retornos de um ativo, proxy do risco total no modelo de média-variância. Pode ser histórica ou implícita (derivada do preço de opções, como no VIX), e é insumo para calibração de VaR, dimensionamento de posições e cálculo de índices de eficiência como o Sharpe.",
    related: ["beta", "var", "drawdown", "aversao-ao-risco"],
  },
  {
    term: "VaR",
    slug: "var",
    category: "fundos",
    definition:
      "VaR é o valor em risco: a maior perda esperada de uma carteira em um horizonte e nível de confiança. Um VaR de 5% ao dia com 95% de confiança indica perda máxima esperada de 5% em 1 a cada 20 dias.",
    bancario:
      "Na gestão de risco, o VaR limita quanto a carteira pode perder. Para o cliente, é uma forma de traduzir risco em números: 'em condições normais, o pior dia provável é uma queda de X%'.",
    tecnico:
      "O Value at Risk quantifica a perda máxima esperada de uma carteira em um dado horizonte, com determinado nível de confiança, estimado por métodos paramétricos, simulação histórica ou de Monte Carlo. Por não capturar a cauda extrema além do quantil, é complementado pelo CVaR (perda esperada condicional) e por testes de estresse.",
    related: ["volatilidade", "risco-de-mercado", "drawdown", "marcacao-a-mercado"],
  },
  {
    term: "Juros reais",
    slug: "juros-reais",
    category: "macroeconomia",
    definition:
      "Juros reais são os juros descontados da inflação do período. Um título que paga 7% com inflação de 4% rende aproximadamente 3% real.",
    bancario:
      "Explique ao cliente a diferença entre o que ele vê na tela (taxa nominal) e o ganho efetivo de poder de compra (taxa real). Títulos IPCA+ mostram o juro real de forma direta: a taxa é o ganho acima da inflação.",
    tecnico:
      "A taxa de juros real é a taxa nominal ajustada pela inflação do período, derivada da equação de Fisher: (1 + i nominal) = (1 + i real) x (1 + inflação). É a referência de rentabilidade verdadeira para o investidor e insumo central do Banco Central para calibrar a política monetária em torno da taxa neutra de juros.",
    related: ["ipca", "inflacao-implicita", "selic", "prefixado"],
  },
  {
    term: "Curva de juros",
    slug: "curva-de-juros",
    category: "macroeconomia",
    definition:
      "Curva de juros é o gráfico das taxas de juros para cada prazo de vencimento. Sua forma reflete expectativas de política monetária e inflação.",
    bancario:
      "Quando o cliente pergunta 'por que o título de 5 anos paga mais que o de 1 ano?', a resposta está na curva de juros: prazos mais longos embutem prêmio por incerteza. A curva invertida, com juro curto maior que o longo, é sinal de expectativa de desaceleração.",
    tecnico:
      "A curva de juros relaciona yields e maturidades para um mesmo emissor, e sua inclinação, curvatura e nível carregam expectativas de política monetária, inflação e prêmios de termo. No Brasil, é observada nos contratos futuros de DI da B3, e sua inversão é estudada como indicador antecedente de ciclos econômicos.",
    related: ["estrutura-a-termo", "selic", "duration", "inflacao-implicita"],
  },
  {
    term: "Liquidez",
    slug: "liquidez",
    category: "renda-fixa",
    definition:
      "Liquidez é a facilidade de transformar um ativo em dinheiro rapidamente, sem perda relevante de valor. Define a rapidez para acessar os recursos.",
    bancario:
      "Na hora de indicar um produto, sempre alinhe a liquidez com o objetivo do cliente: reserva de emergência precisa de liquidez diária; dinheiro que só será usado daqui a anos pode aceitar prazos mais longos e taxas melhores.",
    tecnico:
      "Liquidez é a capacidade de converter um ativo em caixa em curto prazo com impacto mínimo no preço, função do volume negociado e da estrutura do mercado do ativo. No design de carteiras, ela é hierarquizada em caixa imediato, aplicações de liquidez diária e ativos com prazos de resgate ou vencimento, equilibrando retorno e necessidade de recursos.",
    related: ["risco-de-liquidez", "mercado-secundario", "tesouro-direto", "cdb"],
  },
  {
    term: "Duration modificada",
    slug: "duration-modificada",
    category: "renda-fixa",
    definition:
      "Duration modificada aproxima quanto o preço de um título varia para cada variação de 1% na taxa de juros. Mede a sensibilidade do título.",
    bancario:
      "É o número que responde 'se o juro subir 1%, quanto meu título cai?'. Para clientes com horizonte curto, prefira títulos com duration modificada baixa, que sofrem menos com alta de juros.",
    tecnico:
      "A duration modificada é a duration de Macaulay dividida por 1 mais o yield por período, e corresponde à derivada do preço em relação ao yield, aproximando a variação percentual do preço por unidade de variação da taxa. Para variações grandes, a aproximação é corrigida pela convexidade.",
    related: ["duration", "convexidade", "prefixado", "marcacao-a-mercado"],
  },
  {
    term: "LCI",
    slug: "lci",
    category: "renda-fixa",
    definition:
      "LCI é um título de renda fixa lastreado em financiamentos imobiliários, emitido por bancos. É isento de IR para pessoa física e garantido pelo FGC.",
    bancario:
      "É uma boa alternativa ao CDB para clientes que buscam renda fixa com benefício fiscal: a isenção de IR eleva o retorno líquido. Verifique o prazo de carência e a taxa oferecida em comparação ao CDB de mesmo emissor.",
    tecnico:
      "A Letra de Crédito Imobiliário é um título emitido por instituições financeiras, lastreado em créditos imobiliários, com garantia do FGC até o limite regulamentar. Para pessoa física, os rendimentos são isentos de imposto de renda (Lei 8.981/1995), desde que mantidas as condições regulamentares de emissão.",
    related: ["lca", "cdb", "fgc", "renda-fixa"],
  },
  {
    term: "LCA",
    slug: "lca",
    category: "renda-fixa",
    definition:
      "LCA é um título de renda fixa lastreado em operações de crédito do agronegócio, emitido por bancos. É isento de IR para pessoa física e garantido pelo FGC.",
    bancario:
      "Assim como a LCI, a LCA entra na conversa quando o cliente quer maximizar o retorno líquido da renda fixa. Confirme o lastro, o prazo mínimo e a taxa, sempre comparando o retorno líquido com o CDB.",
    tecnico:
      "A Letra de Crédito do Agronegócio é um título emitido por instituições financeiras, lastreado em operações de financiamento do setor agropecuário e beneficiado com isenção de IR para pessoa física. Sua cobertura pelo FGC e a regulação da CVM sobre lastro e vencimento variam conforme as normas vigentes, e o risco final é o de crédito do emissor.",
    related: ["lci", "cdb", "fgc", "renda-fixa"],
  },
  {
    term: "Custo efetivo",
    slug: "custo-efetivo",
    category: "credito",
    definition:
      "Custo efetivo é o custo total real de uma operação financeira, expresso em taxa anual, considerando juros, taxas e tributos.",
    bancario:
      "Ao comparar ofertas de crédito, o profissional do mercado financeiro deve olhar o custo efetivo, não só os juros nominais. Duas propostas com a mesma taxa podem ter custo final diferente por causa de tarifas e seguros embutidos.",
    tecnico:
      "O custo efetivo mede o custo total de uma operação ativa ou passiva, incluindo juros, comissões, tributos e tarifas, expresso em taxa equivalente anual. É o parâmetro do Custo Efetivo Total (CET) exigido pelo Banco Central e o indicador adequado para comparar alternativas com estruturas de pagamento distintas.",
    related: ["cet", "spread", "inadimplencia", "garantia"],
  },
  {
    term: "Inadimplência",
    slug: "inadimplencia",
    category: "credito",
    definition:
      "Inadimplência é o não pagamento de obrigações financeiras no prazo acordado. Sua taxa mede a qualidade da carteira de crédito de uma instituição.",
    bancario:
      "É o indicador que define o preço do crédito: quando a inadimplência sobe, os bancos elevam spreads e restringem novas liberações. Na conversa com o cliente, explique que a taxa de juros do crédito embute o custo das perdas esperadas.",
    tecnico:
      "A inadimplência é o descumprimento de obrigações contratuais em mora, medida por indicadores como a taxa de atraso acima de 90 dias ou as provisões para devedores duvidosos. Ela é modelada por probabilidade de default e impacta diretamente a precificação do crédito, a necessidade de provisões (Resolução CMN 4.697) e o apetite de risco das instituições.",
    related: ["risco-de-credito", "rating", "fluxo-de-caixa", "spread"],
  },
  {
    term: "Garantia",
    slug: "garantia",
    category: "credito",
    definition:
      "Garantia é o bem ou direito dado para assegurar o pagamento de um crédito. Reduz o risco do credor e costuma melhorar as condições da operação.",
    bancario:
      "Quando o cliente não consegue crédito nas condições desejadas, apresentar uma garantia costuma reduzir o juro e aumentar o limite. Explique os tipos: real, fiduciária e pessoal, e o que acontece em caso de inadimplência.",
    tecnico:
      "A garantia é a caução de um ativo ou direito ao cumprimento de uma obrigação, classificada em real (penhor, hipoteca, alienação fiduciária) ou pessoal (aval, fiança). Ela reduz a perda dado o default, permitindo melhores taxas e limites, e sua execução segue regras próprias, como a consolidação da propriedade na alienação fiduciária.",
    related: ["alienacao-fiduciaria", "risco-de-credito", "inadimplencia", "custo-efetivo"],
  },
  {
    term: "Alienação fiduciária",
    slug: "alienacao-fiduciaria",
    category: "credito",
    definition:
      "Alienação fiduciária é a garantia em que o bem fica registrado em nome do credor até a quitação do débito. É comum em financiamentos de veículos e imóveis.",
    bancario:
      "Em um financiamento de carro ou casa, o bem fica alienado ao banco: o cliente usa e pode vender, mas o banco permanece como titular até a dívida ser paga. Em caso de atraso, o credor pode retomar o bem extrajudicialmente.",
    tecnico:
      "A alienação fiduciária em garantia, prevista no Decreto-Lei 911/1969 e na Lei 9.514/1997, transfere ao credor a propriedade resolúvel do bem, mantendo a posse direta com o devedor até a quitação. Em inadimplemento, o credor consolida a propriedade e executa a venda do bem extrajudicialmente, sem necessidade de ação de execução.",
    related: ["garantia", "inadimplencia", "risco-de-credito", "custo-efetivo"],
  },
  {
    term: "Hedge cambial",
    slug: "hedge-cambial",
    category: "cambio",
    definition:
      "Hedge cambial é a proteção contra a variação do câmbio por meio de contratos futuros, swaps ou opções. Elimina ou reduz a exposição ao dólar.",
    bancario:
      "Para o cliente com dívida ou receita em dólar, ou com investimento no exterior, o hedge fixa o câmbio e dá previsibilidade. Na prática, é trocar o risco de oscilação por um custo conhecido.",
    tecnico:
      "O hedge cambial neutraliza a exposição a variações de moeda estrangeira por meio de derivativos como contratos futuros de dólar na B3, NDFs em balcão, swaps e opções. Seu custo é a diferença entre a taxa contratada e a esperada, e sua eficácia é medida pelo grau de redução da variabilidade da posição protegida.",
    related: ["dolar", "cambio-comercial", "dxy", "treasury"],
  },
  {
    term: "Câmbio comercial",
    slug: "cambio-comercial",
    category: "cambio",
    definition:
      "Câmbio comercial é o mercado de dólar para operações de comércio exterior e financeiras. É a cotação de referência para importações, exportações e transferências.",
    bancario:
      "Na agência, o câmbio comercial é o usado nas operações de empresas e nas transferências internacionais, com taxa menor que a do câmbio turismo, que embute margens de serviço. O dólar PTAX, calculado pelo Banco Central, é a referência oficial para contratos de câmbio.",
    tecnico:
      "O mercado de câmbio comercial concentra operações de compra e venda de moeda estrangeira para pagamentos de comércio exterior, transferências e investimentos, com taxa formada livremente entre bancos e clientes sob o regime de câmbio flutuante. A taxa PTAX, apurada pelo Banco Central, serve de referência de liquidação de contratos, e operações cambiais são registradas no sistema do BCB (Sisbacen/Câmbio).",
    related: ["dolar", "dxy", "hedge-cambial", "treasury"],
  },
  {
    term: "DXY",
    slug: "dxy",
    category: "cambio",
    definition:
      "DXY é o índice do dólar americano frente a uma cesta de seis moedas: euro, iene, libra, dólar canadense, coroa sueca e franco suíço. Mede a força global da moeda.",
    bancario:
      "Quando o DXY sobe, o dólar se fortalece no mundo e tende a pressionar as moedas emergentes, inclusive o real. Acompanhar o índice ajuda a explicar movimentos do câmbio local sem olhar só a taxa do dia.",
    tecnico:
      "O DXY é calculado como média geométrica ponderada do dólar frente a seis moedas principais, com o euro tendo o maior peso (57,6%), seguido do iene, da libra, do dólar canadense, da coroa sueca e do franco suíço. Ele sintetiza a conjuntura monetária global, correlacionando-se inversamente a preços de commodities e diretamente a movimentos de aversão ou atração de capital.",
    related: ["dolar", "treasury", "cambio-comercial", "hedge-cambial"],
  },
];
