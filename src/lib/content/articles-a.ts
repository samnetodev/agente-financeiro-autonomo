import type { Article } from "./types";

export const articlesA: Article[] = [
  {
    slug: "selic-guia-completo",
    title: "Selic: guia completo para profissionais do mercado financeiro",
    seoTitle: "Selic o que é: guia completo para profissionais do mercado financeiro",
    metaDescription:
      "Entenda o que é a Selic meta, a taxa Selic Over e como a política monetária do Copom impacta crédito, investimentos e o dia a dia do relacionamento bancário.",
    category: "macroeconomia",
    excerpt:
      "A Selic é a taxa básica de juros da economia brasileira e a referência da política monetária. Entender como ela é definida e transmitida ajuda a antecipar movimentos em crédito e renda fixa.",
    icon: "signal",
    accent: "blue",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-03-15",
    updatedAt: "2025-07-10",
    readTime: "9 min",
    levels: {
      t30: "A Selic é a taxa básica de juros da economia brasileira, definida pelo Comitê de Política Monetária (Copom) do Banco Central. Ela é a referência de todos os demais juros do país: quando sobe, o crédito encarece e a renda fixa pós-fixada fica mais rentável.",
      bancario:
        "O Copom se reúne oito vezes por ano e define a meta para a taxa Selic. No mercado, a taxa Selic efetiva, também chamada de Selic Over, é a média diária das operações compromissadas de um dia lastreadas em títulos públicos federais, e é ela que remunera aplicações e corrige contratos. Na prática, a Selic funciona como a taxa livre de risco do Brasil: todos os preços de crédito e de renda fixa partem dela. Para o profissional do mercado financeiro, uma alta da Selic significa, ao mesmo tempo, financiamentos e empréstimos mais caros e investimentos pós-fixados atrelados a Selic ou CDI mais atrativos. Uma redução tende a produzir o efeito inverso, incentivando a busca por títulos prefixados e de maior prazo para travar rentabilidade.",
      tecnico:
        "Existem duas dimensões da Selic: a Selic meta, definida pelo Copom como instrumento operacional de política monetária, e a taxa Selic (over), divulgada pelo Banco Central como a média ponderada das taxas das operações compromissadas com títulos públicos federais, liquidadas no Sistema Especial de Liquidação e Custódia, com vencimento de um dia útil (overnight). A meta atua como teto da taxa Selic over, com a autoridade monetária operando no mercado aberto para manter a taxa interbancária dentro do corredor desejado. A Selic over é considerada a risk-free rate doméstica e serve de base para o prêmio de risco embutido nos demais ativos. O mecanismo de transmissão passa pela curva de juros, pelo crédito, pelo canal de câmbio e pelas expectativas de inflação. A taxa Selic over é apurada em base anualizada com regime de capitalização composta por dias úteis (252 dias).",
    },
    example:
      "Um cliente tem a reserva de emergência aplicada em um fundo referenciado Selic. Após o Copom elevar a meta, a rentabilidade diária do fundo sobe quase automaticamente, porque a taxa Selic over acompanha a meta. Esse mesmo cliente, se tiver um financiamento com juros pós-fixados, verá as parcelas subirem na mesma direção.",
    clientImpact: [
      "Investimento: renda fixa pós-fixada (Selic/CDI) acompanha a taxa, e títulos prefixados têm preço afetado pela marcação a mercado.",
      "Crédito: alta da Selic tende a elevar taxas de novos contratos e renegociações, principalmente no crédito livre.",
      "Previdência e seguros: rentabilidade de planos PGBL/VGBL e provisionamento de reservas são sensíveis à curva de juros.",
      "Relacionamento: explicar o ciclo de alta permite antecipar perguntas e orientar decisões de aplicação e de endividamento.",
    ],
    opportunities: [
      "Revisar a rentabilidade da reserva de emergência e migrar de conta remunerada para aplicações atreladas a Selic/CDI com melhor condição.",
      "Antecipar reprecificação do crédito e ofertar portabilidade ou renegociação antes do repasse integral da alta.",
      "Apoiar clientes em momento de queda da Selic a avaliar títulos prefixados para fixar rentabilidade futura.",
    ],
    perguntas: [
      "O senhor sabe quanto a sua reserva de emergência está rendendo hoje?",
      "A renda da família acompanha o custo das dívidas quando a Selic sobe?",
      "Qual é o objetivo deste dinheiro: proteção, prazo definido ou longo prazo?",
      "O senhor já conversou com alguém sobre o impacto da Selic nas suas parcelas de crédito?",
    ],
    errosComuns: [
      "Confundir a Selic meta, decidida pelo Copom, com a taxa Selic efetiva (over) apurada no mercado.",
      "Prometer que 'com Selic alta tudo rende mais', ignorando que títulos prefixados podem perder valor pela marcação a mercado.",
      "Tratar a Selic como se fosse fixa, sem considerar que o Copom ajusta a meta conforme a inflação e as expectativas.",
    ],
    related: [
      "cdi-tudo-que-profissional-bancario-precisa-entender",
      "curva-de-juros-como-interpretar",
      "marcacao-a-mercado-guia-pratico",
      "cdb-lci-lca-diferencas",
      "tesouro-selic-prefixado-ipca",
      "inflacao-e-politica-monetaria",
    ],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "Copom (BCB)", url: "https://www.bcb.gov.br/controleinflacao/copom" },
    ],
  },
  {
    slug: "cdi-tudo-que-profissional-bancario-precisa-entender",
    title: "CDI: o que todo profissional do mercado financeiro precisa entender",
    seoTitle: "CDI o que é: guia para profissionais do mercado financeiro e renda fixa",
    metaDescription:
      "Saiba o que é a taxa CDI, como ela é calculada, sua relação com a Selic e como explicar a comparação entre CDBs e outros produtos de renda fixa.",
    category: "renda-fixa",
    excerpt:
      "O CDI é a taxa média das operações interbancárias de um dia e a principal referência de comparação da renda fixa brasileira. CDBs e fundos são avaliados por seu percentual do CDI.",
    icon: "chart",
    accent: "emerald",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-03-22",
    updatedAt: "2025-07-18",
    readTime: "8 min",
    levels: {
      t30: "O CDI é a taxa média que os bancos usam entre si em empréstimos de um dia. Ele anda muito próximo da Selic e serve de referência para a renda fixa: um CDB que rende 100% do CDI paga a taxa do CDI ao dia.",
      bancario:
        "O CDI (Certificado de Depósito Interbancário) nasce das operações entre instituições financeiras com sobra e falta de caixa, com prazo de um dia útil. Como há muita negociação, o mercado apura uma taxa média diária, o DI, que tende a acompanhar de perto a Selic over. É essa taxa que os bancos usam como referência para captar via CDB. Por isso os CDBs são anunciados em percentuais do CDI, como 100% ou 110%. Comparar percentuais do CDI só faz sentido entre produtos da mesma natureza e mesmo prazo, pois o que importa é a rentabilidade líquida de impostos, considerando o prazo e o vencimento de cada um.",
      tecnico:
        "O CDI é um título emitido para lastrear os depósitos interfinanceiros, operações de empréstimo entre instituições financeiras com prazo de um dia útil. A taxa DI (CDI) divulgada é a média ponderada das taxas praticadas nessas operações, calculada sobre um ano de 252 dias úteis e acumulada em regime composto. Na prática, a taxa CDI funciona como a taxa over de referência do mercado interbancário e converge para a taxa Selic em função da arbitragem entre operações compromissadas com títulos públicos e empréstimos interfinanceiros. O CDI é adotado como benchmark para papéis pós-fixados, como CDBs 'atrelados a 100% do CDI', e para fundos de renda fixa, cuja cota é atualizada pela marcação a mercado dos ativos, sendo o fator de rentabilidade diária o di (taxa ao dia) equivalente ao CDI acumulado.",
    },
    example:
      "Um CDB paga 110% do CDI e outro paga 95%. Em um dia, o primeiro remunera 110% da taxa diária do CDI e o segundo, 95%. Antes de decidir, o cliente deve descontar o imposto de renda e comparar com alternativas isentas, como LCI e LCA, e considerar prazo, liquidez e cobertura do FGC.",
    clientImpact: [
      "Investimento: é o parâmetro para comparar CDBs, fundos e a maior parte da renda fixa pós-fixada.",
      "Crédito: o CDI serve de referência para empréstimos com taxas flutuantes e para o custo de captação dos bancos.",
      "Previdência: fundos de previdência e planos com renda fixa sofrem impacto direto do CDI na rentabilidade.",
      "Relacionamento: dominar o CDI permite traduzir jargão de mercado para o cliente e embasar comparações de proposta.",
    ],
    opportunities: [
      "Comparar taxas de CDBs de prazos e liquidez distintos e explicar a diferença entre percentual do CDI e rentabilidade líquida.",
      "Mostrar o impacto do imposto de renda na comparação entre CDB tributado e LCI/LCA isentas.",
      "Indicar o CDI como referência para avaliar se a reserva de emergência está sendo bem remunerada.",
    ],
    perguntas: [
      "O senhor sabe o que significa um investimento render 100% do CDI?",
      "Esses recursos podem ficar aplicados até o vencimento?",
      "O senhor está comparando a rentabilidade líquida de impostos ou apenas a taxa bruta?",
      "A liquidez diária é importante para este valor?",
    ],
    errosComuns: [
      "Comparar percentuais do CDI sem considerar prazo, liquidez, tributação e risco do emissor.",
      "Dizer que o CDI é igual à Selic meta, ignorando a diferença entre a taxa over do mercado e a meta de política monetária.",
      "Tratar o percentual do CDI como se fosse a taxa final recebida pelo cliente, sem descontar impostos.",
    ],
    related: [
      "selic-guia-completo",
      "cdb-lci-lca-diferencas",
      "tesouro-selic-prefixado-ipca",
      "curva-de-juros-como-interpretar",
      "marcacao-a-mercado-guia-pratico",
    ],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "curva-de-juros-como-interpretar",
    title: "Curva de juros: como interpretar",
    seoTitle: "Curva de juros: como interpretar e usar no dia a dia financeiro",
    metaDescription:
      "Aprenda a ler a estrutura a termo das taxas de juros, a diferença entre curva inclinada e invertida e o que ela indica sobre inflação, Copom e decisões de investimento.",
    category: "macroeconomia",
    excerpt:
      "A curva de juros mostra quanto o mercado cobra para emprestar dinheiro em cada prazo. Ler sua inclinação ajuda a entender expectativas de inflação, política monetária e o preço dos títulos.",
    icon: "trend",
    accent: "indigo",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-04-02",
    updatedAt: "2025-07-22",
    readTime: "9 min",
    levels: {
      t30: "A curva de juros relaciona prazos e taxas: normalmente, prazos mais longos pedem taxas mais altas. Quando a curva está invertida, com taxa de curto prazo acima da de longo prazo, o mercado costuma antecipar aperto monetário e cautela com a economia.",
      bancario:
        "A curva de juros, também chamada de estrutura a termo das taxas de juros (ETTJ), mostra a remuneração exigida para cada prazo de investimento. Em geral é inclinada para cima, pois quem empresta por mais tempo exige compensação adicional pelo risco de prazo. Quando o mercado espera inflação mais alta ou aumento de juros, a parte longa da curva se eleva. Quando a curva fica invertida, sinaliza expectativa de juros menores no futuro, geralmente após um ciclo de aperto. Os contratos de DI Futuro negociados na B3 são a materialização dessas taxas e ajudam a projetar o comportamento futuro do Copom.",
      tecnico:
        "A ETTJ é construída a partir de títulos com pagamentos conhecidos e modelada em sua forma zero-cupom, isolando cada vértice de taxa de prazos sem pagamentos intermediários. A curva normal (positivamente inclinada) reflete a preferência pela liquidez e o prêmio de risco de prazo (term premium); a curva invertida sinaliza expectativa de queda da taxa básica, frequentemente associada à fase final de um ciclo de aperto monetário. As taxas à vista (spot) permitem derivar taxas a termo (forward) embutidas; a diferença entre a taxa prefixada e a taxa real de um título indexado à inflação de mesmo vencimento fornece a inflação implícita, principal insumo de leitura das expectativas. A precificação dos contratos de DI Futuro na B3 reflete essas taxas e é base da marcação a mercado dos papéis prefixados.",
    },
    example:
      "Um cliente vê na tela do app a taxa do Tesouro Prefixado de 2029 e a do Tesouro IPCA+ de 2029. A diferença entre as duas é a inflação implícita esperada para o período. Se o mercado passar a esperar inflação maior, a taxa prefixada sobe e o preço do título existente cai pela marcação a mercado.",
    clientImpact: [
      "Investimento: a inclinação da curva orienta a escolha entre pós-fixado, prefixado e indexado à inflação.",
      "Crédito: taxas longas da curva influenciam financiamentos de prazo estendido e empréstimos atrelados a índices.",
      "Previdência: rentabilidade e expectativa de longo prazo dos planos dependem da parte longa da curva.",
      "Relacionamento: explicar a curva transforma decisões abstratas de 'mercado' em linguagem de objetivos e prazos.",
    ],
    opportunities: [
      "Usar a leitura da curva para recomendar (dentro do perfil) o travamento de taxas prefixadas quando o mercado sinaliza queda futura.",
      "Ofertar títulos indexados à inflação quando a parte longa da curva indica incerteza inflacionária.",
      "Traduzir movimentos da curva em orientações de funding e de crédito para clientes empresariais.",
    ],
    perguntas: [
      "Qual é o prazo que o senhor pretende manter esse dinheiro aplicado?",
      "O senhor prefere saber exatamente quanto vai receber no vencimento ou se proteger da inflação?",
      "Como o senhor se sentiria se o saldo oscilasse antes do vencimento?",
      "O senhor já ouviu falar em inflação implícita e gostaria de entender na prática?",
    ],
    errosComuns: [
      "Achar que a taxa mostrada na tela do título será a rentabilidade efetiva se o título for vendido antes do vencimento.",
      "Interpretar a curva invertida como garantia de recessão, quando ela reflete apenas expectativas.",
      "Ignorar o prêmio de risco de prazo e comparar apenas as taxas de curto e longo prazo em momentos distintos.",
    ],
    related: [
      "selic-guia-completo",
      "marcacao-a-mercado-guia-pratico",
      "tesouro-selic-prefixado-ipca",
      "cdb-lci-lca-diferencas",
      "inflacao-e-politica-monetaria",
    ],
    sources: [
      { label: "B3", url: "https://www.b3.com.br/" },
      { label: "Tesouro Nacional / Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "marcacao-a-mercado-guia-pratico",
    title: "Marcação a mercado: guia prático",
    seoTitle: "Marcação a mercado: guia prático para profissionais do mercado financeiro e clientes",
    metaDescription:
      "Entenda o que é marcação a mercado, por que títulos oscilam antes do vencimento e como explicar o efeito dos juros no preço de fundos, CDBs e Tesouro Direto.",
    category: "renda-fixa",
    excerpt:
      "Marcação a mercado é a atualização diária do valor de um título pelo seu preço real de negociação. Juros sobem, preço de prefixado cai; juros caem, o preço sobe.",
    icon: "scale",
    accent: "emerald",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-04-14",
    updatedAt: "2025-08-01",
    readTime: "9 min",
    levels: {
      t30: "Marcação a mercado é atualizar, todos os dias, o valor de um investimento para o preço que ele tem no mercado. Se os juros sobem, títulos prefixados caem de preço; se caem, sobem. Quem espera o vencimento pode evitar esse sobe e desce no papel, embora o valor do título continue a ser precificado diariamente.",
      bancario:
        "Todo título de renda fixa tem um valor no papel e um valor de mercado. O valor de mercado é obtido descontando o fluxo de caixa futuro pela taxa corrente de juros. Como essa taxa muda todos os dias, o preço do título muda também. Em um CDB, a maioria é registrada com rendimento definido no vencimento e o cliente só sente o efeito se resgatar antes. Em fundos e no Tesouro Direto, a marcação é visível no saldo. Para o profissional do mercado financeiro, o essencial é explicar que oscilação não é perda: perda só se realiza na venda. E que prazos mais longos e taxas prefixadas produzem maior sensibilidade a juros.",
      tecnico:
        "A marcação a mercado (mark-to-market) consiste em avaliar o ativo pelo valor presente do seu fluxo de caixa descontado à taxa corrente vigente para o vencimento, refletindo a curva de juros do dia. A sensibilidade do preço a variações na taxa é medida pela duration de Macaulay e, em sua forma linearizada, pela duration modificada, que aproxima a variação percentual do preço por variação de 100 pontos-base. A convexidade corrige a curvatura dessa relação, tornando a aproximação mais precisa para movimentos maiores da taxa. Em uma carteira, o risco de mercado é quantificado por métricas como o VaR. A liquidação dos ativos negociados na B3 usa o PU (preço unitário), derivado da mesma lógica de desconto. O valor contábil (custo) e o valor de mercado divergem ao longo da vida do título, e essa diferença é o que gera ganho ou perda não realizada.",
    },
    example:
      "Um cliente comprou um Tesouro Prefixado que pagará R$ 1.000 no vencimento. Logo depois, o Copom eleva os juros e as novas emissões passam a pagar taxas maiores. Para compensar, o preço do título do cliente cai no mercado. Se ele segurar até o vencimento, recebe os R$ 1.000 combinados; se vender antes, realiza o preço de mercado, possivelmente menor do que pagou.",
    clientImpact: [
      "Investimento: fundos e títulos podem mostrar saldo inferior ao aporte em períodos de alta de juros, sem significar perda realizada.",
      "Previdência: planos com marcação a mercado têm cotas afetadas pela curva de juros, o que muda expectativas de resgate.",
      "Crédito: títulos dados em garantia ou carteiras de funding são avaliados a mercado, afetando limites e colateral.",
      "Relacionamento: saber explicar a marcação evita saques por pânico e reforça a confiança na orientação.",
    ],
    opportunities: [
      "Orientar clientes em momento de alta de juros a aproveitar taxas melhores para novos aportes em vez de resgatar em perda.",
      "Usar a explicação de marcação a mercado para qualificar o planejamento de vencimentos e necessidades de liquidez.",
      "Segmentar clientes conforme tolerância à volatilidade e adequar produtos com e sem marcação a mercado.",
    ],
    perguntas: [
      "O senhor consegue deixar esse dinheiro investido até o vencimento?",
      "Se o saldo oscilar um pouco no meio do caminho, o senhor prefere manter a estratégia?",
      "Para que esse valor será usado e em quanto tempo?",
      "O senhor já viu algum investimento seu oscilar e se preocupou? Como reagiu?",
    ],
    errosComuns: [
      "Confundir oscilação de preço pela marcação a mercado com perda definitiva do capital.",
      "Prometer ao cliente que título de renda fixa 'não oscila', sem ressalvar o resgate antecipado.",
      "Recomendar vender na baixa por pânico, transformando uma oscilação temporária em perda realizada.",
    ],
    related: [
      "curva-de-juros-como-interpretar",
      "tesouro-selic-prefixado-ipca",
      "cdb-lci-lca-diferencas",
      "selic-guia-completo",
      "cdi-tudo-que-profissional-bancario-precisa-entender",
    ],
    sources: [
      { label: "Tesouro Nacional / Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
      { label: "B3", url: "https://www.b3.com.br/" },
    ],
  },
  {
    slug: "cdb-lci-lca-diferencas",
    title: "CDB, LCI e LCA: diferenças e como explicar",
    seoTitle: "CDB, LCI e LCA: diferenças, isenção de IR e FGC explicados",
    metaDescription:
      "Compare CDB, LCI e LCA: emissor, lastro, tributação, liquidez e cobertura do FGC, e aprenda a explicar qual faz sentido para cada cliente.",
    category: "renda-fixa",
    excerpt:
      "CDB, LCI e LCA são títulos emitidos por bancos. A diferença central está na tributação, no lastro e na liquidez: LCI e LCA são isentas de IR e costumam ter vencimento mínimo e resgate apenas no vencimento.",
    icon: "layers",
    accent: "teal",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-04-25",
    updatedAt: "2025-07-30",
    readTime: "9 min",
    levels: {
      t30: "CDB, LCI e LCA são investimentos de renda fixa emitidos por bancos. A principal diferença: CDB paga imposto de renda, enquanto LCI e LCA são isentas. Todos têm proteção do FGC até o limite da garantia ordinária.",
      bancario:
        "O CDB (Certificado de Depósito Bancário) é a forma mais comum de o banco captar recursos e paga imposto de renda regressivo conforme o prazo. A LCI (Letra de Crédito Imobiliário) é lastreada em operações de crédito imobiliário e a LCA (Letra de Crédito do Agronegócio), em operações do agronegócio; ambas são isentas de IR para pessoas físicas e, por isso, rendem menos na taxa bruta, mas costumam ter rentabilidade líquida competitiva. Em geral, LCI tem vencimento mínimo de 90 dias e LCA de 12 meses, com resgate concentrado no vencimento, e ambas dependem de lastro disponível do emissor, o que reduz a oferta e a flexibilidade. A cobertura do FGC vale para CDB, LCI e LCA, limitada ao valor garantido por instituição financeira.",
      tecnico:
        "O CDB é um valor mobiliário de renda fixa emitido por instituição financeira como instrumento de captação de recursos, registrado na B3, com remuneração prefixada, pós-fixada (percentual do CDI) ou híbrida, sujeito a IRRF com alíquotas regressivas por prazo (22,5% a 15%). A LCI e a LCA são letras lastreadas em carteiras de crédito imobiliário e do agronegócio, respectivamente, e a isenção de imposto de renda para pessoa física está prevista na legislação, com vencimentos mínimos de 90 dias (LCI) e 12 meses (LCA) e resgate ao par no vencimento. Por não incidirem sobre elas o IR, a comparação adequada exige o cálculo da equivalência de taxa bruta: um CDB tributado precisa render, após o imposto, mais que a letra isenta para ser vantajoso. Todos os três produtos contam com a garantia ordinária do FGC, dentro do limite vigente por instituição e por CPF/CNPJ, o que não elimina o risco de crédito acima desse limite.",
    },
    example:
      "Uma LCA paga 92% do CDI e um CDB paga 112% do CDI, ambos de 24 meses. Após descontar o IR de 15% do CDB, a rentabilidade líquida aproximada é 95,2% do CDI, superior à LCA. Nesse cenário, o CDB vence a comparação; sem o cálculo, o cliente poderia escolher o produto errado.",
    clientImpact: [
      "Investimento: comparar rentabilidade líquida muda o resultado real para o cliente, não apenas a taxa anunciada.",
      "Crédito: LCI e LCA dependem do lastro de crédito do emissor, ligando a oferta ao ciclo de originação imobiliária e do agro.",
      "Seguros e previdência: a isenção fiscal não se aplica a planos, reforçando a comparação tributária entre produtos.",
      "Relacionamento: explicar a equivalência de taxas constrói confiança e reduz trocas de produto por desconhecimento.",
    ],
    opportunities: [
      "Apresentar a conta de rentabilidade líquida entre CDB e letras isentas para o mesmo prazo e emissor.",
      "Ofertar LCI/LCA para clientes com horizonte definido e sem necessidade de resgate antecipado.",
      "Usar a análise de equivalência como diferencial consultivo na carteira de renda fixa do cliente.",
    ],
    perguntas: [
      "O senhor consegue manter esse recurso aplicado por, pelo menos, o vencimento do papel?",
      "O senhor sabe se o seu investimento atual é isento ou tributado no resgate?",
      "Qual é mais importante: liquidez diária ou maior rentabilidade líquida?",
      "O senhor já comparou dois investimentos pela rentabilidade depois do imposto?",
    ],
    errosComuns: [
      "Escolher entre CDB e LCI/LCA apenas pela taxa bruta anunciada, sem calcular o efeito do IR.",
      "Afirmar que LCI e LCA são isentas 'para sempre', sem explicar os requisitos de vencimento mínimo e prazo de carência.",
      "Tratar a garantia do FGC como ilimitada ou como substituto da análise de risco do emissor.",
    ],
    related: [
      "cdi-tudo-que-profissional-bancario-precisa-entender",
      "tesouro-selic-prefixado-ipca",
      "selic-guia-completo",
      "marcacao-a-mercado-guia-pratico",
      "suitability-e-perfil-do-investidor",
    ],
    sources: [
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "tesouro-selic-prefixado-ipca",
    title: "Tesouro Selic, Prefixado e IPCA+: qual explicar para cada cliente",
    seoTitle: "Tesouro Selic, Prefixado e IPCA+: qual escolher para cada cliente",
    metaDescription:
      "Entenda as diferenças entre Tesouro Selic, Tesouro Prefixado e Tesouro IPCA+, seus riscos de marcação a mercado e como adequá-los ao objetivo de cada cliente.",
    category: "renda-fixa",
    excerpt:
      "O Tesouro Direto oferece títulos pós-fixados, prefixados e indexados à inflação. Cada um atende a um objetivo: reserva, previsibilidade e proteção real, com marcação a mercado distinta entre eles.",
    icon: "lock",
    accent: "emerald",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-05-06",
    updatedAt: "2025-08-05",
    readTime: "9 min",
    levels: {
      t30: "O Tesouro Selic acompanha os juros do dia a dia e é indicado para reservas; o Prefixado trava a taxa até o vencimento, mas oscila antes dele; o IPCA+ paga a inflação mais uma taxa e é usado para objetivos de longo prazo.",
      bancario:
        "No Tesouro Direto, cada título tem um papel. O Tesouro Selic remunera pela taxa Selic e é pouco sensível a juros, adequado para reserva de emergência. O Tesouro Prefixado define no momento da compra a taxa e o valor exato no vencimento, mas sofre marcação a mercado diária: se os juros subirem, o preço cai. O Tesouro IPCA+ paga a inflação medida pelo IPCA mais uma taxa real fixada na emissão, protegendo o poder de compra, e é típico de planos de longo prazo; sua volatilidade também existe, especialmente em prazos longos. A escolha deve considerar o objetivo, o prazo e a tolerância do cliente a oscilações no meio do caminho, respeitando sempre o perfil de investidor.",
      tecnico:
        "O Tesouro Selic é um título pós-fixado indexado à taxa Selic over, com duration curta e baixa sensibilidade a movimentos na estrutura a termo. O Tesouro Prefixado é um título com fluxo de caixa fixo, cujo preço é o valor presente descontado à taxa corrente; sua duration aumenta com o prazo, e a duration modificada indica a variação aproximada do preço para cada 100 bps de variação da taxa, com a convexidade corrigindo a aproximação em movimentos maiores. O Tesouro IPCA+ é um título híbrido que paga cupom semestral e principal corrigido pelo IPCA, mais juros reais; a inflação implícita é a taxa de equilíbrio entre o prefixado e o indexado de mesmo vencimento, que reflete as expectativas do mercado. A marcação a mercado do IPCA+ e do Prefixado depende da curva de juros real e nominal, respectivamente, e o resgate antecipado sujeita o cliente ao preço de mercado, que pode diferir do valor contratado.",
    },
    example:
      "Um cliente conservador, de 62 anos, tem R$ 50 mil que usará em dois anos para reforma: um Tesouro Selic protege o valor sem surpresa de volatilidade. Outro cliente, de 35 anos, investindo para a aposentadoria em 20 anos, pode avaliar o Tesouro IPCA+, que preserva o poder de compra ao longo do tempo, desde que esteja confortável com as oscilações do caminho.",
    clientImpact: [
      "Investimento: cada título tem comportamento distinto de marcação a mercado, o que muda a experiência do cliente no app.",
      "Previdência: a rentabilidade real do IPCA+ dialoga com objetivos de longo prazo e complementação de renda.",
      "Crédito: o entendimento de prazos e taxas ajuda o cliente a evitar carências de liquidez em projetos que dependem do resgate.",
      "Relacionamento: explicar qual título serve a qual objetivo qualifica o papel consultivo e reduz resgates por surpresa.",
    ],
    opportunities: [
      "Indicar o Tesouro Selic para reserva de emergência e horizontes curtos, dentro do perfil do cliente.",
      "Apresentar o IPCA+ para objetivos de longo prazo, explicando a diferença entre juros nominal e juros real.",
      "Usar a inflação implícita para demonstrar como o mercado projeta preços, em linguagem acessível.",
    ],
    perguntas: [
      "Para que esse dinheiro será usado e em quantos anos?",
      "O senhor prefere saber hoje quanto vai receber ou se proteger da inflação?",
      "O senhor se sente confortável se o saldo oscilar nos próximos meses?",
      "O senhor já considerou quanto sua aposentadoria precisará render acima da inflação?",
    ],
    errosComuns: [
      "Recomendar prefixado de prazo longo para cliente com necessidade de liquidez no curto prazo, expondo-o à marcação a mercado.",
      "Prometer que o IPCA+ 'sempre ganha', ignorando a oscilação de preço e o custo de oportunidade em cenários deflacionários.",
      "Comparar títulos por taxa sem considerar o prazo e o efeito da curva de juros na precificação.",
    ],
    related: [
      "selic-guia-completo",
      "cdb-lci-lca-diferencas",
      "curva-de-juros-como-interpretar",
      "marcacao-a-mercado-guia-pratico",
      "cdi-tudo-que-profissional-bancario-precisa-entender",
    ],
    sources: [
      { label: "Tesouro Nacional / Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "inflacao-e-politica-monetaria",
    title: "Inflação e política monetária: o ciclo completo",
    seoTitle: "Inflação e política monetária: o ciclo completo explicado",
    metaDescription:
      "Entenda como a inflação é medida pelo IPCA, como o Copom usa a Selic para controlá-la e como o ciclo monetário afeta crédito, investimentos e previdência.",
    category: "macroeconomia",
    excerpt:
      "Inflação é o aumento generalizado dos preços, medida no Brasil pelo IPCA. Para controlá-la, o Copom ajusta a Selic, e esse ciclo afeta consumo, crédito, investimentos e câmbio.",
    icon: "percent",
    accent: "rose",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-05-18",
    updatedAt: "2025-08-08",
    readTime: "10 min",
    levels: {
      t30: "Inflação é o aumento geral dos preços. Para contê-la, o Banco Central sobe a Selic, encarecendo o crédito e desacelerando o consumo. Quando a inflação cede, os juros podem ser reduzidos.",
      bancario:
        "A inflação é medida oficialmente pelo IPCA, do IBGE, que acompanha a variação de preços de uma cesta de bens e serviços das famílias. O Banco Central persegue uma meta de inflação definida pelo Conselho Monetário Nacional: se a inflação fica acima da meta, o Copom tende a elevar a Selic para esfriar a demanda; se fica abaixo, pode reduzir. Esse ciclo se transmite pelo crédito (mais caro ou mais barato), pelo câmbio, pelas decisões de consumo e pelas expectativas. Entender o ciclo permite ao profissional do mercado financeiro explicar por que juros de financiamento sobem em um período e por que investimentos pós-fixados rendem mais em outro, além de ler as sinalizações do Copom nas comunicações oficiais.",
      tecnico:
        "A política monetária opera com metas de inflação: o CMN fixa a meta e os intervalos de tolerância, e o Copom ajusta a Selic para convergir as expectativas ao centro da meta, com horizonte de atuação de 18 a 24 meses. Os canais de transmissão incluem o canal de crédito, o canal de taxa de juros e de preço de ativos, o canal de câmbio e o canal de expectativas. A taxa neutra de juros é aquela consistente com inflação na meta e produto em seu potencial, sem estimular nem contrair a demanda; a diferença entre a Selic e a inflação esperada define o juro real ex-ante. Os núcleos de inflação (médias aparadas, exclusões, núcleo por suavização) e as medidas de inflação de serviços e de itens monitorados ajudam a distinguir choques temporários de pressões persistentes. As expectativas de mercado, compiladas pelo Relatório Focus, são insumo central das decisões, e a inflação implícita derivada da curva de juros sinaliza a leitura que os mercados fazem da credibilidade da política.",
    },
    example:
      "O IPCA sobe por alguns trimestres. O Copom eleva a Selic em duas reuniões seguidas. No banco, a taxa de juros do crédito pessoal sobe, o financiamento imobiliário com juros livres fica mais caro e a caderneta do cliente, atrelada à TR, não acompanha a inflação. Ao mesmo tempo, um CDB pós-fixado passa a render mais, e o Tesouro IPCA+ ganha apelo como proteção do poder de compra.",
    clientImpact: [
      "Crédito: inflação e juros determinam o custo das parcelas e a conveniência de antecipar ou postergar financiamentos.",
      "Investimento: o ciclo muda a atratividade relativa de pós-fixado, prefixado e indexado à inflação.",
      "Previdência e seguros: benefícios e reservas perdem poder de compra sem indexação à inflação.",
      "Relacionamento: dominar o ciclo permite dar previsibilidade e evitar surpresas no orçamento do cliente.",
    ],
    opportunities: [
      "Usar cenários de inflação para indicar proteção via títulos indexados ao IPCA, conforme o perfil.",
      "Antecipar reprecificação de crédito e orientar decisões de tomar ou recomprar dívidas no momento do ciclo.",
      "Promover educação financeira básica sobre inflação como diferencial de relacionamento.",
    ],
    perguntas: [
      "O senhor percebeu os preços do seu dia a dia subindo mais nos últimos meses?",
      "Quanto do dinheiro do senhor está protegido contra a inflação hoje?",
      "As suas dívidas têm juros fixos ou pós-fixados?",
      "O senhor acompanha as decisões do Copom e entende como elas afetam suas contas?",
    ],
    errosComuns: [
      "Achar que 'inflação caiu' significa que os preços baixaram, quando significa apenas que subiram menos.",
      "Concentrar toda a explicação na taxa nominal, sem considerar o juro real (rentabilidade acima da inflação).",
      "Desconsiderar as expectativas, que são o principal canal pelo qual a política monetária atua hoje.",
    ],
    related: [
      "selic-guia-completo",
      "curva-de-juros-como-interpretar",
      "tesouro-selic-prefixado-ipca",
      "spread-bancario",
      "credito-risco-cet-capacidade-de-pagamento",
    ],
    sources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "IPEA", url: "https://www.ipea.gov.br/" },
    ],
  },
  {
    slug: "spread-bancario",
    title: "Spread bancário: o que é e por que o crédito custa o que custa",
    seoTitle: "Spread bancário: por que o crédito no Brasil custa o que custa",
    metaDescription:
      "Entenda o spread bancário, seus componentes e por que o crédito tem taxas altas. Saiba como explicar ao cliente e como reduzir o custo com garantias e relacionamento.",
    category: "credito",
    excerpt:
      "Spread bancário é a diferença entre o custo de captação do banco e a taxa cobrada do tomador. Ele embute inadimplência, impostos, custos operacionais e lucro. Entender seus componentes ajuda a explicar e a reduzir o custo do crédito.",
    icon: "coins",
    accent: "amber",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-06-03",
    updatedAt: "2025-08-10",
    readTime: "9 min",
    levels: {
      t30: "O spread bancário é a diferença entre quanto o banco paga para captar dinheiro e quanto cobra do cliente. Ele cobre o risco de quem não paga, impostos, custos do banco e a margem de lucro. Por isso o crédito custa mais do que a taxa básica de juros.",
      bancario:
        "Quando um banco empresta, ele não empresta dinheiro próprio: capta do mercado (via CDB, depósitos) pagando uma taxa e repassa ao tomador com uma margem. Essa margem é o spread, que precisa cobrir a inadimplência esperada, os impostos e encargos (IOF, PIS/Cofins), o compulsório, os custos administrativos, o custo do capital e o lucro. É por essa combinação que taxas de cartão de crédito rotativo e cheque especial são elevadas mesmo com a Selic baixa. Para o profissional do mercado financeiro, o caminho é reduzir o risco percebido: garantias, consignação, histórico de relacionamento e uso consciente do crédito melhoram as condições ofertadas ao cliente.",
      tecnico:
        "O spread bancário é a diferença entre a taxa média de aplicação em operações de crédito e o custo médio de captação de recursos da instituição, decomposto na literatura em componentes de risco de crédito (inadimplência esperada), tributos (PIS/Cofins e IOF), compulsório e encargos de depósitos, despesas administrativas e margem de lucro. O prêmio de risco de crédito embutido varia conforme a probabilidade de default (PD) e a perda dado o default (LGD) do tomador, além da exposição na data do inadimplemento (EAD). A taxa cobrada é precificada sobre a taxa livre de risco (risk-free rate, no Brasil aproximada pela Selic/CDI) acrescida desse prêmio. O relatório de Economia Bancária, do Banco Central, publica a decomposição do spread por modalidade, evidenciando o peso da inadimplência e dos tributos no custo final. A análise por cliente, com score e garantias, é o mecanismo que ajusta o prêmio à qualidade individual do tomador.",
    },
    example:
      "Um cliente sem garantias e com histórico de atrasos solicita um empréstimo pessoal. O banco capta recursos a 110% do CDI e, dado o risco de inadimplência esperado para esse perfil, além dos tributos e custos, precifica a operação a uma taxa muito superior à captação. O mesmo cliente, se oferecer consignação em folha ou um veículo em garantia, reduz o risco e pode obter condições significativamente melhores, porque o spread cai.",
    clientImpact: [
      "Crédito: o spread explica por que duas pessoas com o mesmo produto podem receber taxas diferentes, conforme o risco.",
      "Investimento: o lado da captação remunera o investidor; o spread é a outra face da mesma operação.",
      "Seguros: seguros prestamista reduzem o risco da operação e podem melhorar a condição do crédito.",
      "Relacionamento: explicar o spread posiciona o banco como parceiro na redução do custo do crédito.",
    ],
    opportunities: [
      "Ofertar crédito com garantia (consignado, veículo, imóvel) para clientes com necessidade de menor custo.",
      "Usar histórico e relacionamento para melhorar a proposta e reduzir o spread individual.",
      "Apresentar a comparação de CET entre modalidades como ferramenta de decisão consciente.",
    ],
    perguntas: [
      "O senhor tem alguma garantia que possa melhorar a condição deste crédito?",
      "O senhor sabia que o consignado costuma ter taxas mais baixas por causa do desconto em folha?",
      "Esse valor é para uma necessidade pontual ou vai virar rotina?",
      "O senhor já avaliou o custo total, incluindo tarifas e seguros, e não apenas a taxa mensal?",
    ],
    errosComuns: [
      "Acreditar que o spread é só lucro do banco, ignorando o peso da inadimplência e dos tributos.",
      "Comparar taxas de modalidades diferentes sem considerar garantia, prazo e perfil de risco.",
      "Oferecer crédito rotativo ou cheque especial como solução permanente, quando são produtos de custo elevado.",
    ],
    related: [
      "credito-risco-cet-capacidade-de-pagamento",
      "selic-guia-completo",
      "cdi-tudo-que-profissional-bancario-precisa-entender",
      "inflacao-e-politica-monetaria",
    ],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "IPEA", url: "https://www.ipea.gov.br/" },
    ],
  },
  {
    slug: "suitability-e-perfil-do-investidor",
    title: "Suitability e perfil do investidor",
    seoTitle: "Suitability e perfil do investidor: regras, questionário e deveres",
    metaDescription:
      "Entenda o suitability, a Resolução CVM 179, o questionário de perfil, os deveres da instituição e como aplicar o processo na prática de atendimento.",
    category: "compliance",
    excerpt:
      "Suitability é o dever de oferecer produtos compatíveis com o perfil do investidor. Regulado pela Resolução CVM 179, exige questionário, análise de adequação, registro e conduta adequada no atendimento.",
    icon: "shield",
    accent: "violet",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-06-15",
    updatedAt: "2025-08-12",
    readTime: "8 min",
    levels: {
      t30: "Suitability é a regra que exige que os produtos oferecidos ao cliente sejam compatíveis com o perfil dele. Antes de investir, o cliente responde a um questionário que define se é conservador, moderado ou arrojado.",
      bancario:
        "O suitability é o processo de verificação de adequação do investimento ao perfil do cliente. A regra exige que a instituição colete informações sobre situação financeira, objetivos, horizonte e tolerância a risco, e que produtos sejam compatíveis com essas características. A norma atual é a Resolução CVM 179, de 2023, que substituiu a instrução anterior e detalha os deveres de coleta, análise, registro e reavaliação. Aplicações em produtos incompatíveis com o perfil só podem ocorrer com ciência formal do cliente, em procedimentos previstos na norma. Para o profissional do mercado financeiro, o questionário é o ponto de partida, mas o cuidado continua em cada indicação: explicar riscos, prazos e liquidez é parte do dever de adequação.",
      tecnico:
        "A Resolução CVM nº 179, de 15 de fevereiro de 2023, disciplina o dever de verificação da adequação dos produtos, serviços e operações ao perfil do investidor, aplicável à distribuição e ao atendimento. O normativo exige coleta periódica de informações, classificação do perfil (por exemplo, conservador, moderado e arrojado), avaliação de adequação considerando categoria do produto, valor, prazo, risco e liquidez, e a vedação de recomendação de produtos inadequados. A aplicação em produto incompatível exige o preenchimento das hipóteses legais, incluindo a ciência expressa do cliente e o cumprimento de formalidades, com arquivamento do registro. A reavaliação do perfil deve ocorrer em periodicidade definida pela norma, e a instituição deve manter governança e controles para documentar todo o processo, inclusive em canais digitais, sob pena de responsabilidade em caso de prejuízo decorrente da inadequação.",
    },
    example:
      "Um cliente responde ao questionário de suitability e é classificado como conservador. Ele pede para aplicar a maior parte do patrimônio em um fundo de ações. Pela norma, o banco não pode recomendar nem executar a aplicação como recomendação; pode, em hipótese prevista, executá-la com ciência formal do cliente sobre a incompatibilidade, registrando a operação.",
    clientImpact: [
      "Investimento: o processo protege o cliente de produtos fora do apetite a risco e de surpresas com perdas.",
      "Previdência e seguros: produtos de investimento e planos seguem lógica própria, mas o perfil orienta a construção da carteira.",
      "Relacionamento: a boa condução do suitability gera confiança e reduz conflitos em momentos de mercado adverso.",
      "Compliance: falhas no processo expõem a instituição e o profissional a sanções e a responsabilidade civil.",
    ],
    opportunities: [
      "Usar a reavaliação periódica do perfil como pretexto para revisar a carteira e identificar novos objetivos.",
      "Construir portfólio-referência por perfil para agilizar o atendimento com segurança.",
      "Transformar o questionário em conversa consultiva, não em formulário burocrático.",
    ],
    perguntas: [
      "O senhor entende que o seu perfil define quais produtos são recomendados para o seu caso?",
      "Se este investimento caísse 10% no próximo ano, o senhor aguentaria sem vender?",
      "Quanto desse dinheiro o senhor pode deixar parado por mais de dois anos?",
      "O senhor já respondeu a este questionário antes? Houve mudança na sua vida desde então?",
    ],
    errosComuns: [
      "Preencher o questionário pelo cliente ou aceitar respostas genéricas sem explorar a tolerância real a risco.",
      "Recomendar produtos incompatíveis 'porque o cliente pediu', sem documentar o procedimento previsto na norma.",
      "Tratar o suitability como etapa burocrática única, sem reavaliação periódica e sem registro de cada indicação.",
    ],
    related: [
      "cdb-lci-lca-diferencas",
      "tesouro-selic-prefixado-ipca",
      "marcacao-a-mercado-guia-pratico",
      "credito-risco-cet-capacidade-de-pagamento",
    ],
    sources: [
      { label: "CVM (Comissão de Valores Mobiliários)", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "credito-risco-cet-capacidade-de-pagamento",
    title: "Crédito: risco, CET e capacidade de pagamento",
    seoTitle: "Crédito responsável: risco, CET e capacidade de pagamento",
    metaDescription:
      "Entenda como o crédito é precificado, o que o CET inclui, como calcular a capacidade de pagamento e como conduzir a oferta responsável de crédito ao cliente.",
    category: "credito",
    excerpt:
      "Crédito responsável une três pilares: análise de risco, transparência do CET e capacidade de pagamento. O profissional do mercado financeiro que domina esses conceitos oferta crédito que serve ao cliente, não apenas à meta.",
    icon: "wallet",
    accent: "amber",
    author: "Equipe de Educação Financeira",
    publishedAt: "2025-06-28",
    updatedAt: "2025-08-11",
    readTime: "9 min",
    levels: {
      t30: "Antes de contratar crédito, o cliente deve olhar o CET, que é o custo total da operação, incluindo juros, tarifas e impostos. E o banco deve avaliar se as parcelas cabem no orçamento. Assim, crédito bom é crédito que se paga.",
      bancario:
        "O crédito responsável começa pela análise de risco do tomador e pela verificação da capacidade de pagamento. O CET (Custo Efetivo Total) é a informação obrigatória que mostra o custo total da operação em percentual ao ano, incluindo taxa de juros, tarifas, impostos, seguros e demais despesas, permitindo comparar propostas de forma transparente. A capacidade de pagamento é avaliada pela renda líquida e pelo comprometimento mensal, com políticas de comprometimento máximo e, no caso de consignado, o limite legal de margem. O profissional do mercado financeiro deve explicar o CET, verificar o encaixe das parcelas no orçamento e recusar ou redesenhar operações que comprometam excessivamente a renda, ainda que isso reduza a venda imediata.",
      tecnico:
        "O CET é definido pelo Banco Central como o custo efetivo da operação, expresso em taxa efetiva anual, calculado como a taxa interna de retorno que iguala o valor liberado ao fluxo de pagamentos, incorporando juros, comissões, tarifas, tributos e seguros obrigatórios, conforme a regra de transparência das operações de crédito. O risco de crédito é modelado por componentes como a probabilidade de default (PD), a perda dado o default (LGD) e a exposição no momento do default (EAD), que determinam a perda esperada e, por consequência, o prêmio de risco embutido na taxa. A capacidade de pagamento é avaliada com base na renda líquida disponível, no comprometimento de renda e em modelos de score, observando limites regulatórios e políticas internas de concentração. A reavaliação da capacidade de pagamento ao longo da vida do contrato e a análise de endividamento (relação dívida/renda) compõem a prática de crédito responsável, incluindo a verificação de inadimplência em bureaus de crédito.",
    },
    example:
      "Duas propostas de empréstimo pessoal para o mesmo cliente: a primeira anuncia 2,8% a.m. sem informar tarifas; a segunda, 2,5% a.m. mas com tarifa de abertura e seguro prestamista. Pelo CET, a segunda pode ser mais cara, pois o CET já soma todos os custos. Um cliente com renda líquida de R$ 3.000 não deve ter comprometimento que inviabilize o orçamento, ainda que a parcela 'caiba' na margem máxima.",
    clientImpact: [
      "Crédito: o CET protege o cliente de comparações equivocadas e de custos ocultos.",
      "Seguros: o seguro prestamista é componente do CET e melhora a proteção da operação e da família.",
      "Investimento: capacidade de pagamento preservada mantém espaço para poupança e reservas.",
      "Relacionamento: negar ou redesenhar um crédito excessivo constrói confiança de longo prazo.",
    ],
    opportunities: [
      "Ofertar crédito com garantia ou consignado para reduzir o CET em relação ao crédito pessoal livre.",
      "Incluir seguro prestamista como proteção responsável, explicando seu efeito no CET.",
      "Conduzir a revisão de endividamento como serviço consultivo periódico ao cliente.",
    ],
    perguntas: [
      "O senhor sabe qual é o custo total desta operação, o CET, e não apenas a taxa mensal?",
      "Quanto da sua renda já está comprometida com parcelas hoje?",
      "Esse crédito é para uma necessidade planejada ou urgente?",
      "Se a renda da família cair, as parcelas ainda caberiam no orçamento?",
    ],
    errosComuns: [
      "Vender crédito apenas pela taxa mensal anunciada, sem abrir o CET ao cliente.",
      "Liberar operação no limite máximo de comprometimento sem checar o orçamento real.",
      "Tratar o score ou a renda isoladamente, ignorando que capacidade de pagamento combina renda, dívidas e despesas.",
    ],
    related: [
      "spread-bancario",
      "inflacao-e-politica-monetaria",
      "selic-guia-completo",
      "cdi-tudo-que-profissional-bancario-precisa-entender",
    ],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
];
