import type { Article } from "./types";

export const articlesB: Article[] = [
  {
    slug: "fundos-de-investimento-guia",
    title: "Fundos de investimento: guia para o profissional do mercado financeiro explicar",
    seoTitle: "Fundos de investimento explicados para o profissional do mercado financeiro | Guia didático",
    metaDescription:
      "Aprenda a explicar fundos de investimento com linguagem simples: cota, taxa de administração, performance, liquidez, classes e cuidados de compliance.",
    category: "fundos",
    excerpt:
      "Como traduzir o funcionamento de um fundo em linguagem acessível: o que é cota, quem administra, quais taxas existem e como enquadrar o produto ao perfil.",
    icon: "pie-chart",
    accent: "violet",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-02-11",
    updatedAt: "2025-08-02",
    readTime: "8 min",
    levels: {
      t30: "Um fundo reúne o dinheiro de vários investidores e entrega a um gestor profissional. Cada investidor possui cotas, que representam a fatia dele no total. O valor de cada cota é calculado todos os dias, dividindo o patrimônio do fundo pelo número de cotas.",
      bancario:
        "O profissional do mercado financeiro deve explicar que o fundo tem CNPJ próprio, administrador e gestor. A taxa de administração é cobrada ao longo do tempo e a taxa de performance, quando existir, recompensa o gestor por superar o benchmark. Resgate e aplicação seguem regras de carência e liquidez descritas no regulamento.",
      tecnico:
        "Estrutura regulatória pela CVM (fundos regulados pela ICVM 175 e normas correlatas), valor da cota dado por patrimônio líquido dividido pelo número de cotas em circulação, marcação a mercado diária dos ativos, taxa de administração descontada do patrimônio, taxa de performance comparada a um benchmark, e a TEA (taxa efetiva anual) que consolida o custo total.",
    },
    example:
      "Cliente: 'Esse fundo rende quanto?' Profissional: 'O fundo não tem rendimento garantido, porque ele aplica em ativos que variam. O que existe é uma meta, chamada benchmark. Esse fundo aqui busca acompanhar o CDI, então o retorno dele acompanha o comportamento dos juros do mercado. O que podemos avaliar é o histórico e os custos.'",
    clientImpact: [
      "Cliente entende que cotas variam e que o valor aplicado pode oscilar no dia a dia",
      "Reduz mal-entendidos sobre rendimento garantido e promessas indevidas",
      "Cliente percebe o custo real ao comparar taxas de administração entre opções",
      "Aplicação fica mais aderente ao horizonte e à necessidade de liquidez",
    ],
    opportunities: [
      "Usar a comparação de custos para apresentar alternativas mais baratas",
      "Conversar sobre diversificação ao explicar classes de fundos",
      "Agendar revisão periódica da carteira de fundos do cliente",
      "Vincular o fundo a um objetivo financeiro concreto do cliente",
    ],
    perguntas: [
      "O cliente já investiu em algum fundo antes? Como foi a experiência?",
      "Para quando o cliente precisa desse dinheiro?",
      "O cliente entende que o valor pode oscilar e aceita essa variação?",
      "Quanto o cliente pode reservar por mês para esse investimento?",
      "O cliente costuma precisar resgatar com frequência?",
    ],
    errosComuns: [
      "Prometer rentabilidade ou dizer que o fundo 'rendeu X no ano passado, logo rende agora'",
      "Confundir fundo com CDB ou poupança ao falar de garantia do FGC",
      "Vender fundo de perfil incompatível por causa de meta comercial",
      "Não explicar taxa de performance e cobrança quando há carência",
    ],
    related: [
      "mercado-de-capitais",
      "como-interpretar-o-cenario-economico",
      "pgbl-e-vgbl",
    ],
    sources: [
      { label: "CVM — Fundos de investimento", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA — Fundos de investimento", url: "https://www.anbima.com.br/" },
      { label: "Banco Central — Mercado de capitais", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "pgbl-e-vgbl",
    title: "PGBL e VGBL: como orientar sem prometer rentabilidade",
    seoTitle: "PGBL e VGBL: diferenças de tributação, portabilidade e sucessão",
    metaDescription:
      "Diferenças entre PGBL e VGBL explicadas ao profissional do mercado financeiro: tabela progressiva e regressiva, dedução de 12%, portabilidade, carregamento e sucessão.",
    category: "previdencia",
    excerpt:
      "O que o profissional do mercado financeiro precisa dominar para explicar PGBL e VGBL: dedução no IR até 12% da renda bruta, tabelas de tributação, portabilidade e herança.",
    icon: "umbrella",
    accent: "amber",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-03-05",
    updatedAt: "2025-08-02",
    readTime: "9 min",
    levels: {
      t30: "PGBL e VGBL são planos de previdência complementar. No PGBL, o valor aplicado pode ser abatido do imposto de renda até o limite de 12% da renda bruta. No VGBL não há esse abatimento, mas o imposto incide só sobre os rendimentos. Nos dois, o imposto pode ser cobrado por tabela progressiva ou regressiva.",
      bancario:
        "Na tabela progressiva, o imposto é retido ao longo do tempo, na chamada cobrança mensal, e pode haver ajuste na declaração anual. Na tabela regressiva, a alíquota cai com o prazo de permanência: começa em 35% e chega ao mínimo de 10% após dez anos de aplicação. O cliente escolhe a tabela na contratação e, na portabilidade, avalia se mantém ou altera a forma de tributação.",
      tecnico:
        "No PGBL as contribuições deduzidas reduzem a base de cálculo do IR e, no resgate, o imposto incide sobre o valor acumulado total. No VGBL o imposto incide apenas sobre a rentabilidade. A tabela regressiva aplica 35% até dois anos, decaindo até 10% acima de dez anos. Portabilidade entre planos não gera incidência de IR no momento da transferência. Pode haver taxa de carregamento sobre aportes e taxa de gestão/administração. Na sucessão, o VGBL com beneficiário indicado pode ser pago diretamente ao beneficiário, enquanto o PGBL integra o inventário como parte do espólio.",
    },
    example:
      "Cliente que declara imposto pelo modelo completo: 'Como isso ajuda no meu IR?' Profissional: 'Se você usa a declaração completa e tem renda tributável, o PGBL permite deduzir até 12% dessa renda. Você reduz o imposto hoje, mas pagará imposto sobre todo o valor acumulado no resgate. Se prefere não abater agora, o VGBL tributa só o que o plano rendeu. A escolha depende do seu perfil tributário.'",
    clientImpact: [
      "Cliente entende por que existe diferença entre PGBL e VGBL no imposto",
      "Reduz a expectativa errada de rentabilidade garantida em previdência",
      "Cliente compreende que escolher a tabela regressiva exige prazo longo",
      "Esclarece o que acontece com o plano em caso de falecimento",
    ],
    opportunities: [
      "Identificar clientes com IR a pagar que usam declaração completa",
      "Conversar sobre objetivos de longo prazo e aposentadoria",
      "Usar a portabilidade para revisar taxas e qualidade de planos antigos",
      "Discutir sucessão e planejamento familiar com o cliente",
    ],
    perguntas: [
      "O cliente declara imposto de renda no modelo completo ou simplificado?",
      "Qual o horizonte: o cliente pretende resgatar em quanto tempo?",
      "O cliente já tem outro plano de previdência? Há taxas altas nele?",
      "O cliente tem renda tributável e deseja reduzir o imposto do ano?",
      "Quem seriam os beneficiários do plano em caso de falecimento?",
    ],
    errosComuns: [
      "Dizer que previdência 'rende mais que a poupança' sem comparar taxas",
      "Afirmar que PGBL é sempre melhor que VGBL, sem avaliar o perfil tributário",
      "Esquecer de explicar que a escolha da tabela é definitiva e difícil de reverter",
      "Omitir taxas de carregamento, gestão e administração na proposta",
    ],
    related: [
      "fundos-de-investimento-guia",
      "seguros-para-o-bancario",
      "como-interpretar-o-cenario-economico",
    ],
    sources: [
      { label: "SUSEP — Previdência complementar", url: "https://www.gov.br/susep/" },
      { label: "CVM — Fundos de previdência", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA — Previdência", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "seguros-para-o-bancario",
    title: "Seguros: vida, residencial e auto — o básico que o profissional do mercado financeiro domina",
    seoTitle: "Seguros de vida, residencial e auto explicados ao profissional do mercado financeiro",
    metaDescription:
      "Conceitos fundamentais de seguros para o profissional do mercado financeiro: prêmio, cobertura, franquia, sinistro, indenização, beneficiário e carência, com exemplos práticos.",
    category: "seguros",
    excerpt:
      "Os pilares técnicos dos seguros de vida, residencial e auto: prêmio, cobertura, franquia, sinistro e indenização explicados em linguagem de balcão.",
    icon: "shield",
    accent: "sky",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-04-14",
    updatedAt: "2025-08-02",
    readTime: "8 min",
    levels: {
      t30: "Seguro é uma proteção contra risco. O cliente paga um valor periódico, o prêmio, e em troca a seguradora cobre certos eventos, as coberturas. Se o evento coberto acontece, isso é o sinistro, e a seguradora paga a indenização até o limite contratado. A franquia é o valor que o próprio cliente paga antes de acionar a cobertura.",
      bancario:
        "Na vida, o segurado indica beneficiários que recebem a indenização em caso de morte. No residencial, as coberturas básicas costumam incluir incêndio, raio e explosão, com opção de danos elétricos e roubo. No auto, a cobertura completa inclui colisão, e o cliente escolhe a franquia, que influencia o prêmio. É importante ler o contrato: cobertura não é sinônimo de tudo segurado.",
      tecnico:
        "Prêmio é o custo do contrato, influenciado por probabilidade de sinistro, perfil do risco e coberturas. Carência é o prazo entre a contratação e a vigência de determinadas coberturas. Indenização limita-se ao capital segurado ou ao dano efetivo (princípio indenitário). Coberturas e exclusões constam da apólice, e a SUSEP fiscaliza planos, produtos e cláusulas das seguradoras. Caso o segurado minta dados relevantes, pode haver perda de direito à indenização.",
    },
    example:
      "Cliente: 'Se eu bater o carro, o seguro paga tudo?' Profissional: 'O seguro paga dentro do que está na apólice. A cobertura de colisão paga o conserto do seu carro, mas antes há a franquia, que é a parte que você paga. Além disso, cada cobertura tem um limite de indenização. Vale ler a apólice para saber exatamente o que está coberto.'",
    clientImpact: [
      "Cliente entende que franquia menor encarece o prêmio e vice-versa",
      "Reduz conflitos na hora do sinistro, pois o cliente conhece a apólice",
      "Cliente valoriza a proteção de vida como planejamento familiar",
      "Cliente revisa coberturas e limites ao mudar de endereço ou veículo",
    ],
    opportunities: [
      "Revisar anualmente coberturas e valores segurados",
      "Oferecer seguro de vida atrelado a proteção de renda familiar",
      "Aproveitar a troca de veículo ou mudança para readequar apólices",
      "Vincular seguro a outros momentos da vida: casamento, filhos, financiamento",
    ],
    perguntas: [
      "Quem depende financeiramente do cliente hoje?",
      "O cliente mora em imóvel próprio ou alugado? O imóvel é segurado?",
      "O veículo é usado para trabalho? O valor dele é relevante para a família?",
      "O cliente já teve sinistro? Como foi a experiência com a seguradora?",
      "Qual o orçamento mensal que o cliente pode destinar para proteção?",
    ],
    errosComuns: [
      "Vender seguro sem explicar exclusões e limites de cada cobertura",
      "Confundir franquia com prêmio na hora de explicar o custo",
      "Ignorar a declaração de informações do segurado no ato da contratação",
      "Tratar seguro de vida como investimento, prometendo retorno",
    ],
    related: [
      "pgbl-e-vgbl",
      "venda-consultiva-no-banco",
      "como-identificar-oportunidades-comerciais",
    ],
    sources: [
      { label: "SUSEP — Seguros", url: "https://www.gov.br/susep/" },
      { label: "Banco Central — Relação com o cliente", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "cambio-e-cambio",
    title: "Câmbio: o que move o dólar e como conversar com o cliente",
    seoTitle: "Câmbio e dólar: fatores que movem a cotação e como explicar",
    metaDescription:
      "O que determina a cotação do dólar: juros, fluxo comercial, cenário externo e Fed. Como conversar com o cliente sobre câmbio sem prever a cotação.",
    category: "cambio",
    excerpt:
      "Juros, comércio exterior, fluxo de capital e o Federal Reserve: os principais motores da cotação e como usar isso em uma conversa comercial responsável.",
    icon: "globe",
    accent: "emerald",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-05-20",
    updatedAt: "2025-08-02",
    readTime: "7 min",
    levels: {
      t30: "O dólar muda de preço conforme oferta e procura. Se muitas pessoas e empresas querem comprar dólares, ele fica mais caro; se muitos querem vender, fica mais barato. Juros altos no Brasil atraem dinheiro de fora e costumam segurar o dólar; juros altos nos Estados Unidos fazem o contrário.",
      bancario:
        "O profissional do mercado financeiro deve explicar que o câmbio reflete juros, fluxo comercial e de investimentos, expectativas sobre o cenário fiscal e o comportamento do Federal Reserve. Intervenções do Banco Central via leilões podem reduzir a volatilidade, mas não fixam a cotação. Para o cliente, o que importa é planejar quando precisa de moeda e avaliar custos como spread e IOF.",
      tecnico:
        "A taxa de câmbio é determinada no mercado interbancário, com a taxa Ptax como referência de cálculo das negociações. O BCB atua por meio de leilões de compra e venda de moeda e operações de swap para conter oscilações excessivas. O diferencial de juros (carry), o prêmio de risco-país, o saldo de transações correntes e as decisões do Fed (taxa de juros americana) compõem os fatores fundamentais. Câmbio não é previsível no curto prazo.",
    },
    example:
      "Cliente: 'Acho que o dólar vai subir, devo comprar tudo agora?' Profissional: 'Ninguém consegue prever a cotação com segurança. O que dá para fazer é planejar: se você tem uma viagem marcada, defina quanto vai precisar e avalie o custo total da operação, incluindo spread e IOF. Comprar por ansiedade costuma custar mais caro do que planejar.'",
    clientImpact: [
      "Cliente entende que câmbio varia e que previsão é incerta",
      "Reduz compras por impulso em momentos de oscilação",
      "Cliente compara custo total ao escolher onde fazer o câmbio",
      "Cliente planeja compras parceladas para viagens e remessas",
    ],
    opportunities: [
      "Oferecer cartão internacional ou conta multimoeda para viagens",
      "Apresentar proteção de câmbio para quem tem despesas em dólar",
      "Vincular a conversa a objetivos: viagem, estudo ou moradia no exterior",
      "Usar notícias do Fed para iniciar conversa com cliente importador",
    ],
    perguntas: [
      "O cliente tem viagem ou despesa planejada em outra moeda?",
      "Qual o valor e a data de quando o dinheiro será usado?",
      "O cliente recebe ou paga valores em dólar com regularidade?",
      "O cliente prefere levar dinheiro em espécie, cartão ou conta internacional?",
      "O cliente acompanha câmbio? Com que objetivo?",
    ],
    errosComuns: [
      "Dar opinião de que 'o dólar vai subir ou cair'",
      "Ocultar o spread e o IOF no comparativo de custos",
      "Sugerir operação especulativa com moeda para cliente conservador",
      "Ignorar que a necessidade real do cliente é o que define a operação",
    ],
    related: [
      "como-interpretar-o-cenario-economico",
      "transformar-noticias-economicas-em-conversas-comerciais",
      "mercado-de-capitais",
    ],
    sources: [
      { label: "Banco Central — Câmbio e capitais estrangeiros", url: "https://www.bcb.gov.br/" },
      { label: "Federal Reserve — Juros americanos", url: "https://www.federalreserve.gov/" },
      { label: "IPEA — Estudos de conjuntura", url: "https://www.ipea.gov.br/" },
    ],
  },
  {
    slug: "mercado-de-capitais",
    title: "Mercado de capitais: ações, ETF, BDR e debêntures",
    seoTitle: "Ações, ETFs, BDRs e debêntures explicados para o profissional do mercado financeiro",
    metaDescription:
      "Diferenças entre ações, ETFs, BDRs e debêntures: o que cada um representa, onde se negocia e como o profissional do mercado financeiro orienta sem prometer retorno.",
    category: "mercado-de-capitais",
    excerpt:
      "O básico do mercado de capitais: participação em empresas (ações), carteiras negociadas em bolsa (ETF), ativos estrangeiros (BDR) e dívida privada (debênture).",
    icon: "trending-up",
    accent: "blue",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-01-27",
    updatedAt: "2025-08-02",
    readTime: "8 min",
    levels: {
      t30: "Quem compra uma ação se torna sócio de uma empresa. O ETF é uma cesta de ativos que se compra na bolsa de uma vez só. O BDR é um certificado que representa ações de empresas estrangeiras. A debênture é um empréstimo que você faz a uma empresa em troca de juros.",
      bancario:
        "Ações podem pagar dividendos, quando a empresa distribui parte do lucro, e oscilam conforme o desempenho da companhia e do mercado. ETFs replicam índices ou grupos de ativos e são negociados em bolsa. BDRs dão acesso diversificado a empresas de fora, com risco de moeda e de mercado. Debêntures são títulos de dívida de empresas e, em geral, rendem juros periódicos, com risco de crédito do emissor.",
      tecnico:
        "A B3 centraliza a negociação e custódia de ações, ETFs e BDRs. A CVM regula o mercado de valores mobiliários, incluindo ofertas públicas, companhias abertas e suitability (ANBIMA e CVM exigem que o produto seja adequado ao perfil). Debêntures podem ser incentivadas ou não, com tributação regressiva semelhante à de outros títulos de renda fixa. Dividendos e juros sobre capital próprio são formas de distribuição de resultados. Rendimento passado não é garantia de rendimento futuro.",
    },
    example:
      "Cliente: 'Ações pagam o quê?' Profissional: 'Depende da empresa. Se ela tiver lucro, pode distribuir dividendos, que é uma parte desse lucro paga aos acionistas. Mas o valor da ação também pode cair. Ações são para quem tem horizonte longo e aceita oscilação. Para quem quer diversificar com mais comodidade, existem ETFs e fundos.'",
    clientImpact: [
      "Cliente entende que renda variável não tem rendimento garantido",
      "Cliente associa prazo e tolerância a risco antes de investir em bolsa",
      "Cliente percebe a diferença entre ser sócio (ação) e ser credor (debênture)",
      "Reduz decisões por moda ou 'dica' de terceiros",
    ],
    opportunities: [
      "Enquadrar o perfil de investidor antes de qualquer oferta de renda variável",
      "Explicar diversificação com ETFs e fundos de ações",
      "Conversar sobre dividendos com quem busca renda periódica",
      "Apresentar debêntures a clientes de renda fixa com apetite por risco de crédito",
    ],
    perguntas: [
      "O cliente entende que o valor pode oscilar, inclusive para baixo?",
      "Qual o prazo que o cliente pretende manter o dinheiro investido?",
      "O cliente busca renda periódica ou crescimento de longo prazo?",
      "O cliente já tem outros investimentos em renda variável?",
      "Como o cliente reagiria a uma queda de 20% no curto prazo?",
    ],
    errosComuns: [
      "Indicar ação ou BDR específico como 'garantido'",
      "Ignorar o teste de perfil de investidor (suitability)",
      "Vender debênture como renda fixa 'sem risco', ignorando risco de crédito",
      "Tratar ETF como ativo livre de risco porque 'segue um índice'",
    ],
    related: [
      "fundos-de-investimento-guia",
      "como-interpretar-o-cenario-economico",
      "venda-consultiva-no-banco",
    ],
    sources: [
      { label: "B3 — Bolsa de valores", url: "https://www.b3.com.br/" },
      { label: "CVM — Mercado de valores mobiliários", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA — Mercado de capitais", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "como-interpretar-o-cenario-economico",
    title: "Como interpretar o cenário econômico em 5 minutos",
    seoTitle: "Como ler o cenário econômico em 5 minutos: guia para profissionais do mercado financeiro",
    metaDescription:
      "Método rápido para o profissional do mercado financeiro interpretar juros, inflação, câmbio e atividade econômica no dia a dia, com fontes oficiais e sem fazer previsões.",
    category: "carreira",
    excerpt:
      "Um roteiro de leitura rápida do cenário: Selic e juros, IPCA, câmbio, emprego, fiscal e o que o Fed sinaliza. Em cinco minutos por dia.",
    icon: "eye",
    accent: "teal",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-06-03",
    updatedAt: "2025-08-02",
    readTime: "6 min",
    levels: {
      t30: "O cenário econômico é contado por números simples: a taxa básica de juros (Selic), a inflação (IPCA), o dólar, o emprego e o quanto a economia cresce. Bastam alguns minutos por dia para saber se o momento é de juros altos ou baixos, inflação em alta ou queda.",
      bancario:
        "O roteiro de cinco minutos: 1) olhe a taxa Selic vigente e a expectativa para as próximas reuniões do Copom; 2) veja o IPCA acumulado e se está dentro da meta; 3) confira a cotação do dólar e o movimento recente; 4) acompanhe emprego e atividade; 5) veja se o Federal Reserve está subindo, mantendo ou cortando juros. Fontes: relatório Focus do BCB, IBGE, IPEA e comunicados do Fed.",
      tecnico:
        "Juros altos tendem a valorizar renda fixa pós-fixada e desestimular consumo e investimento. Inflação acima da meta pressiona o BCB a elevar a Selic via Copom. O câmbio reflete juros, fluxos e risco. A atividade (PIB, taxa de desemprego) mostra o ritmo da demanda. O fiscal afeta expectativas de inflação e prêmio de risco. O cenário externo, liderado pela política monetária do Fed, influencia o fluxo de capital para emergentes.",
    },
    example:
      "Notícia: 'IPCA acima da meta'. Leitura do profissional do mercado financeiro: 'Se a inflação está acima da meta, é provável que o Banco Central mantenha juros mais altos por mais tempo. Isso pode manter a renda fixa pós-fixada atrativa. É um gancho para conversar com o cliente sobre revisão da carteira — sem prometer que os juros vão subir ou cair.'",
    clientImpact: [
      "Bancário fala de cenário com base em dados, não em opinião",
      "Cliente percebe o profissional como atualizado e confiável",
      "Conversas ganham contexto: juros, inflação e câmbio viram enredo",
      "Reduz o risco de comentários desinformados com o cliente",
    ],
    opportunities: [
      "Abrir conversas comerciais com base em um dado do dia",
      "Revisar carteiras quando o cenário de juros muda",
      "Preparar a frase de abertura antes de cada reunião",
      "Criar vínculo ao explicar a notícia em linguagem simples",
    ],
    perguntas: [
      "O que mudou hoje na agenda econômica?",
      "Como a notícia afeta o bolso do cliente?",
      "Que pergunta posso fazer ao cliente com base nesse dado?",
      "Qual produto pode ser citado com segurança, sem promessa?",
    ],
    errosComuns: [
      "Comentar cenário sem checar a fonte do dado",
      "Transformar a leitura do cenário em previsão de mercado",
      "Usar termos técnicos sem traduzir para o cliente",
      "Ignorar a agenda econômica do dia antes do expediente",
    ],
    related: [
      "transformar-noticias-economicas-em-conversas-comerciais",
      "como-comecar-o-dia-como-bancario",
      "cambio-e-cambio",
    ],
    sources: [
      { label: "Banco Central — Focus e Selic", url: "https://www.bcb.gov.br/" },
      { label: "IBGE — IPCA e atividade", url: "https://www.ibge.gov.br/" },
      { label: "IPEA — Indicadores", url: "https://www.ipea.gov.br/" },
      { label: "Federal Reserve — Comunicados do Fed", url: "https://www.federalreserve.gov/" },
    ],
  },
  {
    slug: "transformar-noticias-economicas-em-conversas-comerciais",
    title: "Como transformar notícias econômicas em conversas comerciais",
    seoTitle: "De notícia econômica a conversa comercial: o método do profissional do mercado financeiro",
    metaDescription:
      "Método prático para o profissional do mercado financeiro usar notícias de juros, inflação e câmbio como ponto de partida de conversas consultivas, sem transformá-las em dica.",
    category: "vendas",
    excerpt:
      "Do dado à conversa: como transformar uma notícia econômica em uma pergunta ao cliente e abrir espaço para uma oferta consultiva e aderente.",
    icon: "message-circle",
    accent: "indigo",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-07-08",
    updatedAt: "2025-08-02",
    readTime: "6 min",
    levels: {
      t30: "Uma notícia sobre juros ou inflação vira conversa quando você a liga à vida do cliente. O segredo é o roteiro: contexto, impacto e pergunta. Depois de explicar o que aconteceu, você pergunta como aquilo toca o cliente.",
      bancario:
        "O roteiro contexto-impacto-pergunta: 1) contexto: o que aconteceu (ex.: BCB manteve a Selic); 2) impacto: o que isso significa para o bolso (ex.: renda fixa pós-fixada pode seguir acompanhando os juros); 3) pergunta aberta: 'sua reserva está rendendo como você gostaria?'. A notícia é o gancho; a necessidade do cliente é o foco.",
      tecnico:
        "A técnica exige rigor: o profissional do mercado financeiro comunica o fato com base em fonte oficial (BCB, IBGE, B3), explica o mecanismo econômico (transmissão da política monetária, expectativas de inflação, prêmio de risco) e converte em pergunta diagnóstica. Não recomenda produto com base em previsão. A aderência à suitability e às regras de oferta do banco preservam a consulta. O registro do interesse do cliente alimenta o funil de oportunidades.",
    },
    example:
      "Notícia: 'Copom mantém a taxa Selic.' Profissional: 'Hoje saiu a decisão do Banco Central: a Selic seguiu onde estava. Para quem tem dinheiro aplicado em títulos que acompanham os juros, isso é um sinal de como a renda pode se comportar nos próximos meses. No seu caso, você tem uma reserva de quanto mais ou menos? O que você espera dela no curto e no longo prazo?'",
    clientImpact: [
      "Cliente recebe informação útil antes de receber oferta",
      "Conversa ganha profundidade e gera confiança",
      "Oferta nasce da necessidade revelada, não do produto",
      "Menos resistência: o cliente fala de si, não de uma venda",
    ],
    opportunities: [
      "Usar cada notícia relevante para abrir um novo contato",
      "Criar um banco de assuntos por cliente e por segmento",
      "Preparar perguntas abertas com antecedência para a pauta do dia",
      "Transformar clientes atendidos em relacionamentos com agenda",
    ],
    perguntas: [
      "O que essa notícia significa para o cliente específico?",
      "Que pergunta revelaria a necessidade sem induzir a resposta?",
      "Como o cliente está investindo e para que finalidade?",
      "Que dados o cliente gostaria de receber regularmente?",
    ],
    errosComuns: [
      "Usar a notícia como argumento de venda ('o juro vai subir, invista já')",
      "Falar de economia sem dar o contexto para o cliente entender",
      "Fazer perguntas fechadas que só confirmam o que se quer vender",
      "Não registrar o interesse e o contexto da conversa",
    ],
    related: [
      "como-interpretar-o-cenario-economico",
      "venda-consultiva-no-banco",
      "como-comecar-o-dia-como-bancario",
    ],
    sources: [
      { label: "Banco Central — Comunicados e Focus", url: "https://www.bcb.gov.br/" },
      { label: "IBGE — Indicadores de preços", url: "https://www.ibge.gov.br/" },
      { label: "ANBIMA — Autorregulação", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "venda-consultiva-no-banco",
    title: "Venda consultiva no banco: diagnosticar antes de ofertar",
    seoTitle: "Venda consultiva: diagnosticar antes de ofertar no banco",
    metaDescription:
      "A venda consultiva no banco em etapas: abertura, diagnóstico com perguntas, oferta aderente, objeções e acompanhamento, sempre dentro da suitability.",
    category: "vendas",
    excerpt:
      "O método da venda consultiva aplicado ao balcão: ouvir antes de propor, diagnosticar necessidade, horizonte e tolerância a risco, e só então ofertar.",
    icon: "handshake",
    accent: "orange",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-02-24",
    updatedAt: "2025-08-02",
    readTime: "7 min",
    levels: {
      t30: "Venda consultiva é escutar antes de vender. Em vez de oferecer o produto que você quer empurrar, você pergunta o que o cliente precisa e para quando. Só depois apresenta uma opção que faça sentido para ele.",
      bancario:
        "As etapas: 1) abertura, criando clima de conversa; 2) diagnóstico, com perguntas sobre objetivo, prazo, liquidez e tolerância a risco; 3) oferta aderente, apresentando o produto como resposta ao que foi dito; 4) tratamento de objeções; 5) acompanhamento e revisão. O teste de perfil de investidor é obrigatório e precede a oferta de investimentos.",
      tecnico:
        "A suitability (CVM/ANBIMA) exige que produtos de investimento sejam adequados ao perfil, ao prazo e aos objetivos do cliente. A consulta registra necessidade, situação financeira e horizonte. Objeções genuínas revelam condições: restrição de prazo, liquidez, custo ou aversão a risco. O diagnóstico alimenta o CRM e permite acompanhamento periódico, transformando a venda em relacionamento.",
    },
    example:
      "Cliente: 'Estou com um dinheiro parado na conta.' Profissional: 'Ótimo momento para conversar. Me conta: esse dinheiro é para um objetivo próximo, como uma viagem, ou é reserva de longo prazo? Você precisaria dele nos próximos meses? E como você se sente com a ideia de o valor oscilar? Com suas respostas, eu te mostro as opções mais coerentes.'",
    clientImpact: [
      "Cliente se sente ouvido, não empurrado",
      "Produto ofertado combina com necessidade real",
      "Menos cancelamentos e reclamações no pós-venda",
      "Cliente volta: virou relacionamento, não transação",
    ],
    opportunities: [
      "Identificar necessidades não declaradas durante o diagnóstico",
      "Revisar a carteira inteira em vez de vender produto isolado",
      "Agendar revisões periódicas e aumentar a base ativa",
      "Construir reputação de conselheiro no bairro ou na agência",
    ],
    perguntas: [
      "Qual o objetivo do cliente com esse dinheiro?",
      "Qual o prazo: semanas, anos ou décadas?",
      "O cliente pode ficar sem esse dinheiro se precisar?",
      "Como o cliente reagiu a oscilações no passado?",
      "O que mudaria se o dinheiro não rendesse como esperado?",
    ],
    errosComuns: [
      "Apresentar produto antes de fazer o diagnóstico",
      "Induzir respostas no teste de perfil para 'passar' o cliente",
      "Ofertar produto de perfil incompatível para cumprir meta",
      "Ignorar objeções e insistir na mesma oferta",
    ],
    related: [
      "como-identificar-oportunidades-comerciais",
      "transformar-noticias-economicas-em-conversas-comerciais",
      "seguros-para-o-bancario",
    ],
    sources: [
      { label: "CVM — Suitability", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA — Regras de oferta", url: "https://www.anbima.com.br/" },
      { label: "Banco Central — Relacionamento", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "como-identificar-oportunidades-comerciais",
    title: "Como identificar oportunidades comerciais no dia a dia",
    seoTitle: "Oportunidades comerciais no banco: gatilhos e diagnósticos",
    metaDescription:
      "Gatilhos de oportunidades comerciais no dia a dia financeiro: salário, FGTS, vencimentos, eventos de vida e hábitos do cliente. Com perguntas e compliance.",
    category: "vendas",
    excerpt:
      "Onde nascem as oportunidades: depósitos, vencimentos de investimento, FGTS, aposentadoria e eventos de vida. Observar, perguntar e propor na ordem certa.",
    icon: "search",
    accent: "rose",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-05-12",
    updatedAt: "2025-08-02",
    readTime: "6 min",
    levels: {
      t30: "Uma oportunidade comercial é um momento na vida do cliente em que ele precisa de um serviço. O profissional do mercado financeiro que observa movimentos como salário caindo, investimento vencendo ou um evento de vida percebe o momento certo de conversar.",
      bancario:
        "Gatilhos comuns: depósito de salário ou entrada de recursos, resgates e vencimentos de investimentos, recebimento de FGTS, aposentadoria, mudança de emprego ou de endereço, casamento, nascimento de filhos, compra de imóvel ou veículo. A regra é observar, perguntar com respeito e propor apenas quando houver contexto. Toda interação respeita a privacidade do cliente e a política de uso de dados do banco.",
      tecnico:
        "A identificação de oportunidades usa informações legítimas: fluxo de conta, extrato, perfil e histórico autorizado. A abordagem segue a LGPD e as políticas internas de consentimento e finalidade. O diagnóstico usa perguntas abertas para confirmar o evento de vida antes da oferta. Cada oportunidade alimenta o CRM com contexto, e o compliance define limites de oferta, como janelas adequadas para crédito, investimento e proteção.",
    },
    example:
      "Gatilho: cliente de 58 anos recebeu saque de aposentadoria. Profissional: 'Percebi uma movimentação recente na sua conta. Posso perguntar? Ah, você se aposentou, parabéns. Com essa mudança de renda, você já pensou em como vai organizar seu dinheiro no longo prazo? Há opções de previdência e investimento para quem entra nessa fase. Quer que eu te mostre?'",
    clientImpact: [
      "Oferta acontece no momento certo, quando o cliente precisa",
      "Cliente sente que o banco acompanha sua vida, não apenas a conta",
      "Menos interrupções indesejadas em horários sem contexto",
      "Maior aderência: o produto nasce de um evento real",
    ],
    opportunities: [
      "Mapear a carteira de clientes por faixa etária e momento de vida",
      "Criar rotina de varredura diária de movimentações relevantes",
      "Agendar contato em datas previstas: vencimentos e saques",
      "Vincular cada oportunidade a um produto de investimento ou proteção",
    ],
    perguntas: [
      "Que mudanças recentes ocorreram na conta desse cliente?",
      "Que evento de vida pode estar por trás dessa movimentação?",
      "Qual a melhor pergunta para confirmar o contexto sem invadir?",
      "Qual produto resolve a necessidade revelada?",
    ],
    errosComuns: [
      "Abordar o cliente com base em dado sem confirmar o contexto",
      "Transformar uma movimentação em oferta agressiva no primeiro contato",
      "Usar dados da conta para finalidade fora do escopo autorizado",
      "Perseguir volume de ofertas em vez de relevância para o cliente",
    ],
    related: [
      "venda-consultiva-no-banco",
      "transformar-noticias-economicas-em-conversas-comerciais",
      "seguros-para-o-bancario",
    ],
    sources: [
      { label: "ANBIMA — Autorregulação e oferta", url: "https://www.anbima.com.br/" },
      { label: "CVM — Boas práticas", url: "https://www.gov.br/cvm/" },
      { label: "Banco Central — Relacionamento com o cliente", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "como-comecar-o-dia-como-bancario",
    title: "Como começar o dia como profissional do mercado financeiro: rotina de leitura de 5 minutos",
    seoTitle: "Rotina matinal do profissional do mercado financeiro: 5 minutos de leitura para o dia",
    metaDescription:
      "Rotina de 5 minutos para o profissional do mercado financeiro começar o dia: agenda econômica, taxas, notícias e frase de abertura preparada para o atendimento.",
    category: "carreira",
    excerpt:
      "Um ritual matinal curto e sustentável: agenda econômica do dia, taxa Selic, câmbio, notícias do setor e a frase de abertura pronta para o atendimento.",
    icon: "sunrise",
    accent: "cyan",
    author: "Equipe de Conteúdo Financeiro",
    publishedAt: "2025-06-24",
    updatedAt: "2025-08-02",
    readTime: "5 min",
    levels: {
      t30: "Bastam cinco minutos para começar bem o dia: veja se há indicador econômico saindo hoje, confira a Selic e o dólar, leia uma notícia do setor e prepare uma pergunta para usar com o primeiro cliente.",
      bancario:
        "O roteiro de cinco minutos: minuto 1, agenda econômica (indicadores do dia, decisões de juros, dados de emprego ou inflação); minuto 2, taxas de referência (Selic meta, câmbio); minuto 3, uma notícia do setor financeiro ou de investimentos; minuto 4, traduzir o assunto em impacto para o cliente; minuto 5, escrever a frase de abertura e escolher o primeiro cliente a abordar. Consistência vale mais que profundidade.",
      tecnico:
        "Fontes de rotina: relatório Focus e agenda do BCB, IPCA e IPCA-15 do IBGE, comunicados do Fed, cotações na B3 e releases da ANBIMA. A leitura não busca prever, mas contextualizar: entender como a política monetária, a inflação e o câmbio tocam a carteira de produtos. A frase de abertura preparada reduz improviso e aumenta a aderência às normas de oferta, pois nasce de dado, não de venda.",
    },
    example:
      "Rotina matinal: agenda diz que o IBGE divulga o IPCA-15 hoje. O profissional do mercado financeiro traduz: 'Se a inflação vier em linha com o esperado, a conversa com o cliente de renda fixa fica mais fácil: mostro como o juro real compõe o retorno e pergunto se a reserva dele está protegida contra a inflação.' A frase de abertura: 'Bom dia, você viu o dado de inflação que saiu hoje?'",
    clientImpact: [
      "Bancário chega ao atendimento informado e confiante",
      "Cliente recebe atualizações relevantes, não ofertas no escuro",
      "Rotina diária vira diferencial percebido no relacionamento",
      "Disciplina de leitura reduz furos de comunicação",
    ],
    opportunities: [
      "Selecionar o cliente mais impactado pelo dado do dia",
      "Preparar a agenda de contatos antes de começar o expediente",
      "Usar a notícia para abrir conversas com clientes inativos",
      "Construir repertório que sustenta a venda consultiva",
    ],
    perguntas: [
      "O que sai hoje na agenda econômica?",
      "Como isso toca o cliente que atenderei primeiro?",
      "Qual pergunta abre a conversa sem prometer nada?",
      "Que contato posso agendar usando o assunto do dia?",
    ],
    errosComuns: [
      "Pular a rotina em dias de pressão e improvisar no balcão",
      "Ler o cenário e não traduzir em impacto para o cliente",
      "Começar o dia sem saber a agenda econômica e ser surpreendido",
      "Transformar a notícia em promessa de retorno na abordagem",
    ],
    related: [
      "como-interpretar-o-cenario-economico",
      "transformar-noticias-economicas-em-conversas-comerciais",
      "venda-consultiva-no-banco",
    ],
    sources: [
      { label: "Banco Central — Agenda econômica e Focus", url: "https://www.bcb.gov.br/" },
      { label: "IBGE — Calendário de divulgações", url: "https://www.ibge.gov.br/" },
      { label: "ANBIMA — Notícias do mercado", url: "https://www.anbima.com.br/" },
    ],
  },
];
