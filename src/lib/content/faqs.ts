import type { Faq } from "./types";

export const faqs: Faq[] = [
  {
    slug: "o-que-e-selic",
    question: "O que é a taxa Selic?",
    category: "macroeconomia",
    answerShort:
      "É a taxa básica de juros da economia brasileira, definida pelo Banco Central e usada como referência para quase todas as operações financeiras do país.",
    answer:
      "A Selic é a taxa básica de juros da economia brasileira, definida pelo Comitê de Política Monetária (Copom) do Banco Central do Brasil a cada reunião. Ela serve de referência para a remuneração dos títulos públicos, para o CDI e para as demais taxas praticadas no mercado de crédito e de investimentos. Quando o Copom fixa a meta, o Banco Central atua no mercado para que as operações de um dia (over) do sistema Selic, o Sistema Especial de Liquidação e Custódia, se realizem próximas a essa meta. Por isso a Selic é chamada de taxa básica: ela ancora o custo do dinheiro em toda a economia e influencia diretamente a inflação, o consumo e o investimento. O nome vem do sistema em que são liquidadas e custodiadas as operações com títulos públicos federais.",
    example:
      "Um cliente com um CDB pós-fixado de 100% do CDI observa o rendimento acompanhar o patamar da Selic: se a Selic sobe, a rentabilidade do título tende a subir junto nos meses seguintes.",
    related: ["porque-a-selic-sobe", "quem-decide-a-selic", "cdi-e-selic-sao-iguais", "como-a-selic-afeta-o-cdb"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "porque-a-selic-sobe",
    question: "Por que a Selic sobe?",
    category: "macroeconomia",
    answerShort:
      "Para conter a inflação: juros mais altos encarecem o crédito e o consumo, reduzindo a pressão sobre os preços.",
    answer:
      "O Banco Central sobe a Selic principalmente para controlar a inflação. Com juros maiores, o crédito fica mais caro, o consumo e os investimentos perdem força e a economia desacelera, reduzindo a pressão sobre os preços. Além disso, juros altos valorizam a moeda e tornam mais atrativa a aplicação de recursos no país, o que também ajuda a conter a alta de preços de bens e serviços. É o chamado efeito da política monetária contracionista. O Copom decide com base em projeções de inflação, na meta a ser atingida e no horizonte relevante de cerca de 18 meses à frente, acompanhando indicadores de atividade, mercado de trabalho e expectativas do mercado. O objetivo é garantir que a inflação convirja para a meta definida pelo Conselho Monetário Nacional.",
    example:
      "Se a inflação projetada está acima da meta, o Copom eleva a Selic. No atendimento, o cliente percebe na prática quando as parcelas de novos financiamentos e o rendimento de investimentos pós-fixados aumentam.",
    related: ["o-que-e-selic", "quem-decide-a-selic", "o-que-e-inflacao", "o-que-e-politica-monetaria"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "quem-decide-a-selic",
    question: "Quem decide a taxa Selic?",
    category: "macroeconomia",
    answerShort:
      "O Copom, o Comitê de Política Monetária do Banco Central, que se reúne a cada 45 dias para definir a meta da Selic.",
    answer:
      "A meta da taxa Selic é definida pelo Copom (Comitê de Política Monetária), colegiado do Banco Central do Brasil formado por diretores e pelo presidente do BC. O Copom se reúne oito vezes por ano, aproximadamente a cada 45 dias, e decide por maioria ou unanimidade se mantém, sobe ou reduz a taxa, além de comunicar o chamado viés. A decisão busca atingir a meta de inflação definida pelo Conselho Monetário Nacional (CMN), considerando o cenário de inflação projetado e as expectativas do mercado. Depois da decisão, o Banco Central atua diariamente no mercado aberto para que a taxa das operações de um dia (over) da Selic fique próxima da meta. A autonomia operacional do Banco Central, reconhecida em lei, reforça que as decisões são técnicas e voltadas ao controle da inflação.",
    example:
      "Ao explicar ao cliente por que a Selic mudou, o profissional do mercado financeiro pode citar que a decisão foi tomada na última reunião do Copom e orientar a consulta do calendário oficial no site do Banco Central.",
    related: ["o-que-e-selic", "porque-a-selic-sobe", "o-que-e-politica-monetaria"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "como-a-selic-afeta-o-cdb",
    question: "Como a Selic afeta o CDB?",
    category: "renda-fixa",
    answerShort:
      "Em CDBs pós-fixados, a Selic alta aumenta o rendimento; em prefixados, a taxa já foi fixada na aplicação e não muda.",
    answer:
      "O efeito da Selic sobre o CDB depende do tipo de rentabilidade contratada. No CDB pós-fixado, o mais comum e referenciado em CDI, a rentabilidade acompanha o mercado: quando a Selic sobe, novas aplicações e títulos com taxa variável tendem a render mais. No CDB prefixado, a taxa é fixada no momento da aplicação e não muda durante o prazo, independentemente de a Selic subir ou cair depois. Há também os CDBs híbridos, como os atrelados ao IPCA, cujo rendimento combina uma parcela real prefixada com a variação da inflação. Além do rendimento, a Selic alta reduz o apetite por risco e atrai recursos para a renda fixa, o que pode aumentar a concorrência entre bancos por captação. O ganho real depende sempre de comparar a rentabilidade do CDB com a inflação do período.",
    example:
      "Um cliente aplicou R$ 10.000 em um CDB de 100% do CDI em janeiro e a Selic subiu em março: o rendimento acompanha a alta. Outro aplicou em CDB prefixado de 12% ao ano no mesmo período e continua recebendo os 12% combinados, mesmo que a Selic suba.",
    related: ["o-que-e-cdb", "cdi-e-selic-sao-iguais", "como-a-selic-afeta-o-financiamento", "o-que-e-marcacao-a-mercado"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "como-a-selic-afeta-o-financiamento",
    question: "Como a Selic afeta o financiamento imobiliário e de veículos?",
    category: "credito",
    answerShort:
      "Quando a Selic sobe, novos financiamentos ficam mais caros, pois as taxas de mercado acompanham; contratos já firmados com taxa prefixada não mudam.",
    answer:
      "A Selic é a referência básica do custo do dinheiro: quando ela sobe, o custo de captação dos bancos aumenta e as taxas de novas operações de crédito, incluindo financiamentos imobiliários e de veículos, tendem a subir. Em financiamentos com taxa prefixada, a prestação já está definida na contratação e não muda durante o prazo, mesmo que os juros subam depois. Já em contratos pós-fixados, como os atrelados à TR ou ao IPCA, o valor das parcelas pode variar conforme o indexador e o saldo devedor. É importante explicar que o financiamento imobiliário usa a TR como referência e não é corrigido diretamente pela Selic; o efeito principal vem do custo de captação do banco. As simulações de novas operações devem refletir o cenário atual de juros, incluindo taxa, CET e prazos.",
    example:
      "Um cliente que contratou um financiamento imobiliário prefixado de 10% ao ano mantém a prestação inalterada quando a Selic sobe. Já um cliente novo, ao simular a mesma operação após o aumento, encontra taxas maiores.",
    related: ["o-que-e-selic", "o-que-e-cet", "o-que-e-spread-bancario", "como-a-selic-afeta-o-cdb"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "cdi-e-selic-sao-iguais",
    question: "CDI e Selic são a mesma coisa?",
    category: "renda-fixa",
    answerShort:
      "Não. A Selic é a meta definida pelo Banco Central; o CDI é a taxa média das operações entre bancos e fica praticamente colada na Selic.",
    answer:
      "Não são a mesma coisa, mas andam muito próximos. A Selic é a meta da taxa básica de juros definida pelo Copom. O CDI (Certificado de Depósito Interbancário) é a taxa média das operações de empréstimo de um dia entre bancos, calculada pela B3. Como as instituições usam a Selic como referência, o CDI diário costuma ficar um pouco abaixo ou muito próximo da meta Selic. Na prática, produtos de 100% do CDI rendem aproximadamente a taxa Selic. É comum o mercado tratar as duas taxas como equivalentes para explicar renda fixa, mas tecnicamente uma é definida pelo Banco Central e a outra é medida no mercado interbancário. Para o atendimento, o mais importante é saber que variações da Selic se refletem quase imediatamente no CDI.",
    example:
      "Um CDB de 100% do CDI rende quase exatamente a Selic. Se o cliente pergunta se isso equivale à Selic, o profissional do mercado financeiro pode dizer que 100% do CDI equivale aproximadamente à taxa Selic vigente.",
    related: ["qual-a-diferenca-entre-cdi-e-selic", "o-que-e-selic", "o-que-e-cdb"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "B3", url: "https://www.b3.com.br/" },
    ],
  },
  {
    slug: "qual-a-diferenca-entre-cdi-e-selic",
    question: "Qual a diferença entre CDI e Selic?",
    category: "renda-fixa",
    answerShort:
      "A Selic é a taxa básica fixada pelo Banco Central; o CDI é a taxa média dos negócios entre bancos, que acompanha a Selic no dia a dia.",
    answer:
      "A Selic tem origem na política monetária: é a meta de juros básicos da economia definida pelo Copom para controlar a inflação, e o Banco Central atua para que as operações de um dia no sistema Selic aconteçam nesse patamar. O CDI é uma taxa de mercado: reflete a média das taxas dos depósitos interbancários (DIs) negociados entre os bancos, calculada e divulgada diariamente pela B3. Historicamente o CDI fica levemente abaixo da meta Selic, pois reflete o equilíbrio de oferta e demanda de recursos entre as instituições. Ambos servem de indexador para a renda fixa: produtos atrelados ao CDI, como CDBs, e produtos atrelados à Selic, como o Tesouro Selic e a poupança. A distinção importa para explicar ao cliente por que um título de 100% do CDI não rende exatamente a Selic, embora fique muito próximo.",
    example:
      "Um título Tesouro Selic rende a taxa Selic acumulada do período, enquanto um CDB de 100% do CDI rende a taxa do CDI. Na prática, os dois resultados são quase iguais.",
    related: ["cdi-e-selic-sao-iguais", "o-que-e-selic", "o-que-e-cdb"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "B3", url: "https://www.b3.com.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-inflacao",
    question: "O que é inflação?",
    category: "macroeconomia",
    answerShort:
      "É o aumento generalizado e contínuo dos preços de bens e serviços, medido no Brasil principalmente pelo IPCA, calculado pelo IBGE.",
    answer:
      "Inflação é a elevação generalizada e persistente dos preços de bens e serviços de uma economia, que reduz o poder de compra do dinheiro: com o mesmo valor, o consumidor compra menos ao longo do tempo. No Brasil, a inflação é medida principalmente pelo IPCA (Índice Nacional de Preços ao Consumidor Amplo), calculado pelo IBGE e usado como referência da meta do Banco Central. Há outros indicadores, como o IPCA-15, que funciona como prévia, e o INPC, que mede o custo de vida de famílias de renda mais baixa. A inflação elevada corrói os rendimentos nominais dos investimentos: o que importa é o ganho real, ou seja, o rendimento descontado da inflação do período. Controlar a inflação é o objetivo central da política monetária, que usa a taxa Selic como principal instrumento.",
    example:
      "Um cliente que deixou R$ 10.000 parados na conta corrente por um ano, com inflação de 5% ao ano, perdeu aproximadamente 5% de poder de compra no período, mesmo sem gastar nada.",
    related: ["o-que-e-selic", "porque-a-selic-sobe", "ipca-e-igpm-qual-a-diferenca", "o-que-e-juros-real"],
    sources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "ipca-e-igpm-qual-a-diferenca",
    question: "Qual a diferença entre IPCA e IGP-M?",
    category: "macroeconomia",
    answerShort:
      "O IPCA mede o custo de vida das famílias e é o índice oficial da inflação; o IGP-M mede preços no atacado, varejo e construção civil e é usado para reajustar aluguéis.",
    answer:
      "O IPCA é o índice oficial de inflação do Brasil, calculado pelo IBGE a partir de uma pesquisa mensal de preços de uma cesta de consumo de famílias com renda entre 1 e 40 salários mínimos. Ele é o referencial da meta de inflação perseguida pelo Banco Central e o indexador de muitos investimentos, como o Tesouro IPCA+. O IGP-M, calculado pela FGV, tem composição distinta: pondera preços ao produtor no atacado (IPA), preços ao consumidor (IPC) e custos de construção civil (INCC), o que o torna mais sensível a variações de câmbio e de commodities. Por isso, historicamente o IGP-M oscila mais que o IPCA. No dia a dia, o IGP-M é usado para reajustar aluguéis e contratos, enquanto o IPCA corrige salários, contratos e a maioria dos investimentos atrelados à inflação.",
    example:
      "Um contrato de aluguel reajustado pelo IGP-M pode variar muito mais que o IPCA em meses de choque de commodities, o que o profissional do mercado financeiro deve explicar ao cliente que questiona a diferença entre as duas correções.",
    related: ["o-que-e-inflacao", "o-que-e-tesouro-ipca", "o-que-significa-ipca-mais-6"],
    sources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "FGV", url: "https://portal.fgv.br/" },
    ],
  },
  {
    slug: "o-que-e-politica-monetaria",
    question: "O que é política monetária?",
    category: "macroeconomia",
    answerShort:
      "É o conjunto de ações do Banco Central para controlar a inflação e a atividade econômica, tendo a taxa Selic como principal instrumento.",
    answer:
      "Política monetária é a atuação do Banco Central sobre a quantidade de dinheiro e o custo do crédito na economia, com o objetivo principal de manter a inflação dentro da meta definida pelo Conselho Monetário Nacional. Os principais instrumentos são a taxa de juros básica (Selic), os recolhimentos compulsórios, que são parcelas de depósitos retidas no BC, e as operações de mercado aberto, além do redesconto. Quando o BC sobe a Selic, ele torna o crédito mais caro e reduz a demanda, desacelerando a inflação: é a política contracionista. Quando reduz a Selic, estimula consumo e investimento: é a política expansionista, usada quando a inflação está sob controle. As decisões são tomadas pelo Copom com base em projeções e expectativas de mercado, e os efeitos na economia ocorrem com defasagem de vários meses.",
    example:
      "Ao subir a Selic, o Banco Central reduz a demanda e esfria os preços; o cliente sente isso no aumento das taxas de financiamento e na melhora do rendimento de aplicações pós-fixadas.",
    related: ["o-que-e-selic", "porque-a-selic-sobe", "quem-decide-a-selic", "o-que-e-inflacao"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-politica-fiscal",
    question: "O que é política fiscal?",
    category: "macroeconomia",
    answerShort:
      "É o conjunto de decisões do governo sobre arrecadação (impostos) e gastos públicos, que influencia a demanda e a trajetória da dívida pública.",
    answer:
      "Política fiscal diz respeito às decisões do governo federal sobre quanto arrecadar, por meio de tributos, e quanto gastar, com salários, investimentos, benefícios e transferências. Ela influencia diretamente a atividade econômica: gastos maiores aquecem a demanda, enquanto impostos maiores ou cortes de despesa têm efeito contracionista. A política fiscal também afeta os juros: quando o governo gasta mais do que arrecada, ele precisa emitir títulos para financiar o déficit, o que aumenta a oferta de papéis e pode pressionar as taxas de juros. Por isso, o cenário fiscal é acompanhado de perto pelos agentes e influencia as expectativas de inflação e o prêmio de risco do país. O resultado primário e a relação entre dívida pública e PIB são os indicadores mais acompanhados para avaliar a saúde das contas públicas.",
    example:
      "Quando o mercado avalia que as contas públicas pioram, os títulos prefixados do Tesouro costumam oferecer taxas maiores para compensar o risco, o que altera as condições de novos investimentos em renda fixa.",
    related: ["o-que-e-politica-monetaria", "o-que-e-resultado-primario", "o-que-e-divida-publica"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
    ],
  },
  {
    slug: "o-que-e-resultado-primario",
    question: "O que é resultado primário?",
    category: "macroeconomia",
    answerShort:
      "É a diferença entre receitas e despesas do governo, desconsiderando o pagamento de juros da dívida pública.",
    answer:
      "O resultado primário mede o desempenho das contas públicas excluindo as despesas com juros da dívida: é a diferença entre as receitas primárias, formadas por tributos, contribuições e demais arrecadações, e as despesas primárias, como salários, custeio, investimentos e benefícios. Se as receitas superam as despesas, há superávit primário, e o governo consegue reduzir o estoque da dívida; se as despesas superam as receitas, há déficit primário, que precisa ser financiado com novas dívidas. Já o resultado nominal inclui o pagamento de juros da dívida, sendo o indicador mais abrangente. O resultado primário é usado como meta fiscal e é acompanhado pelo mercado porque sinaliza a sustentabilidade das contas públicas. Déficits primários persistentes tendem a elevar a dívida pública, o que pode pressionar os juros e o risco do país.",
    example:
      "Um governo com resultado primário positivo pode usar o superávit para reduzir o estoque da dívida; com déficit, precisa emitir mais títulos, aumentando a oferta de papéis no mercado.",
    related: ["o-que-e-politica-fiscal", "o-que-e-divida-publica", "o-que-e-curva-de-juros"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-divida-publica",
    question: "O que é dívida pública?",
    category: "macroeconomia",
    answerShort:
      "É o total de recursos que o governo federal deve, principalmente por meio de títulos públicos emitidos para financiar o déficit ou rolar dívidas antigas.",
    answer:
      "A dívida pública é o conjunto de obrigações do governo federal com credores, formada principalmente pela emissão de títulos públicos federais, como LTN, LFT e NTN-B, negociados no Tesouro Direto e no mercado. O governo emite títulos quando as receitas não são suficientes para cobrir as despesas ou para rolar, ou seja, renovar, dívidas que vencem. A sustentabilidade da dívida é avaliada pela relação entre o estoque e o Produto Interno Bruto (PIB): uma dívida que cresce mais rápido que o PIB pode se tornar insustentável e elevar o prêmio de risco cobrado pelo mercado. Como os títulos públicos são o principal ativo de renda fixa do país, o comportamento da dívida influencia diretamente a curva de juros e a remuneração dos demais investimentos. A gestão da dívida é feita pelo Tesouro Nacional, que busca prazos longos e custos previsíveis.",
    example:
      "Quando o cliente compra um Tesouro Prefixado ou IPCA+, ele está, na prática, emprestando dinheiro ao governo federal, que se compromete a devolver o valor corrigido no vencimento do título.",
    related: ["o-que-e-politica-fiscal", "o-que-e-resultado-primario", "o-que-e-tesouro-prefixado"],
    sources: [
      { label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "o-que-e-curva-de-juros",
    question: "O que é a curva de juros?",
    category: "macroeconomia",
    answerShort:
      "É o gráfico que relaciona a taxa de juros de títulos com seus prazos de vencimento, mostrando o quanto o mercado espera de juros futuros.",
    answer:
      "A curva de juros, também chamada de curva de DI no Brasil, mostra a taxa de retorno de títulos de mesmo risco de crédito para diferentes prazos de vencimento. Ela é construída com base nas taxas dos contratos futuros de juros negociados na B3 e nas taxas dos títulos do Tesouro Nacional. Uma curva normal é ascendente: prazos mais longos pagam juros maiores, remunerando a incerteza do futuro. Quando o mercado espera juros mais altos à frente, a curva se inclina ou desloca para cima; expectativas de corte de juros achatam ou até invertem a curva. A inclinação da curva é um termômetro importante para decisões de investimento, pois embute as expectativas do mercado sobre inflação, política monetária e risco fiscal. Para o profissional do mercado financeiro, entender a curva ajuda a orientar o cliente sobre prazos adequados ao seu objetivo e à sua tolerância a oscilações.",
    example:
      "Se a curva de juros está achatada ou invertida, com taxas curtas acima das longas, o mercado sinaliza expectativa de juros menores no futuro, o que pode orientar a escolha entre investimentos prefixados de prazos diferentes.",
    related: ["o-que-e-tesouro-prefixado", "o-que-acontece-com-prefixado-quando-juros-sobem", "o-que-e-duration", "o-que-e-juros-real"],
    sources: [
      { label: "B3", url: "https://www.b3.com.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-juros-real",
    question: "O que é juros real?",
    category: "macroeconomia",
    answerShort:
      "É o rendimento de um investimento descontada a inflação do período, ou seja, o quanto o dinheiro realmente ganhou em poder de compra.",
    answer:
      "Juros real é a taxa de retorno de um investimento após descontar a inflação do período, medindo o ganho efetivo de poder de compra. A relação básica é que o juro real aproximado é igual à taxa nominal menos a inflação; de forma mais precisa, usa-se a equação de Fisher, que divide 1 mais a taxa nominal por 1 mais a inflação e subtrai 1. Um investimento que paga 12% ao ano com inflação de 5% ao ano rende cerca de 6,7% de juros reais ao ano. Quando os juros nominais ficam abaixo da inflação, o investimento tem juros reais negativos e o cliente perde poder de compra, mesmo com o saldo crescendo em termos nominais. Por isso, a comparação correta entre investimentos deve considerar o juro real e não apenas a taxa contratada. Títulos como o Tesouro IPCA+ pagam explicitamente um juro real prefixado acima da inflação.",
    example:
      "Um CDB que rendeu 10% em um ano com inflação de 6% no mesmo período entregou cerca de 3,8% de ganho real, e não os 10% anunciados.",
    related: ["o-que-e-inflacao", "o-que-significa-ipca-mais-6", "diferenca-entre-taxa-nominal-e-efetiva", "o-que-e-tesouro-ipca"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-inflacao-implicita",
    question: "O que é inflação implícita?",
    category: "macroeconomia",
    answerShort:
      "É a inflação esperada pelo mercado para o futuro, calculada pela diferença entre as taxas de títulos prefixados e os títulos corrigidos pela inflação.",
    answer:
      "A inflação implícita é a expectativa de inflação embutida nas taxas dos títulos públicos e nas curvas de juros do mercado. Ela pode ser calculada comparando a taxa de um título prefixado, como o Tesouro Prefixado, com a de um título indexado à inflação, como o Tesouro IPCA+: a diferença entre as duas taxas representa a inflação que o mercado espera para o período. Essa medida é usada pelo Banco Central e pelos agentes para monitorar as expectativas de inflação, que são decisivas nas decisões do Copom. Valores altos de inflação implícita sinalizam desconfiança em relação ao controle de preços, enquanto valores baixos indicam expectativas ancoradas na meta. Para o investidor, conhecer a inflação implícita ajuda a comparar investimentos prefixados e indexados e a decidir qual protege melhor contra surpresas de preços.",
    example:
      "Se o Tesouro Prefixado paga 12% ao ano e o Tesouro IPCA+ paga IPCA mais 6%, a inflação implícita do período é de aproximadamente 5,7% ao ano, ou seja, é isso que o mercado espera de inflação.",
    related: ["o-que-e-tesouro-prefixado", "o-que-e-tesouro-ipca", "o-que-e-curva-de-juros", "o-que-e-inflacao"],
    sources: [
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
      { label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
    ],
  },
  {
    slug: "o-que-e-cdb",
    question: "O que é CDB?",
    category: "renda-fixa",
    answerShort:
      "É um título de renda fixa emitido por bancos para captar recursos, em que o investidor empresta dinheiro ao banco em troca de juros.",
    answer:
      "O CDB (Certificado de Depósito Bancário) é um título de renda fixa emitido por instituições financeiras para captar recursos no mercado, uma alternativa à captação via depósitos tradicionais. Ao aplicar em um CDB, o cliente empresta dinheiro ao banco e recebe juros por isso, dentro das condições contratadas, que podem ser prefixadas, pós-fixadas (geralmente um percentual do CDI) ou híbridas, atreladas à inflação. O retorno depende da taxa contratada, do prazo e da qualidade de crédito do emissor. Os CDBs contam com a garantia do Fundo Garantidor de Créditos (FGC) até R$ 250 mil por CPF/CNPJ e por instituição, dentro dos limites do fundo. São tributados pelo Imposto de Renda com alíquotas regressivas conforme o prazo da aplicação, de 22,5% até 15%. Para o atendimento, o CDB é a porta de entrada mais comum da renda fixa bancária.",
    example:
      "Um cliente aplica R$ 10.000 em um CDB de 110% do CDI com vencimento em 2 anos: o banco paga juros correspondentes ao CDI multiplicado por 1,10, e o valor é resgatado com os juros acumulados no vencimento.",
    related: ["cdb-e-melhor-que-poupanca", "o-que-e-lci-e-lca", "como-a-selic-afeta-o-cdb", "o-que-e-fgc"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "cdb-e-melhor-que-poupanca",
    question: "CDB é melhor que poupança?",
    category: "renda-fixa",
    answerShort:
      "Na maioria dos cenários de juros atuais, sim: o CDB paga um percentual do CDI, que costuma superar a poupança, principalmente em CDBs com taxas acima de 100% do CDI.",
    answer:
      "Historicamente, o CDB tende a render mais que a poupança, mas não é uma regra absoluta. A poupança remunera 0,5% ao mês mais a TR quando a Selic está acima de 8,5% ao ano, ou 70% da Selic quando ela está abaixo desse patamar. O CDB comum paga um percentual do CDI, e quando a taxa oferecida é próxima ou superior a 100% do CDI, o rendimento costuma superar a poupança. Além do rendimento, o CDB tem prazos mais flexíveis, e o resgate antes do vencimento pode envolver marcação a mercado e possibilidade de perda. A poupança, por outro lado, é isenta de Imposto de Renda, tem liquidez diária e garantia do FGC, mas rende menos em cenários normais de juros. A comparação correta deve considerar prazo, liquidez, tributação e a taxa efetivamente contratada, lembrando que rendimentos passados não garantem resultados futuros.",
    example:
      "Com a Selic em dois dígitos, um CDB de 100% do CDI entrega mais que a poupança no mesmo período; o profissional do mercado financeiro deve mostrar a simulação lado a lado para o cliente decidir.",
    related: ["o-que-e-cdb", "o-que-e-selic", "o-que-e-lci-e-lca", "o-que-e-come-cotas"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-lci-e-lca",
    question: "O que são LCI e LCA?",
    category: "renda-fixa",
    answerShort:
      "São títulos de renda fixa emitidos por bancos, lastreados em crédito imobiliário (LCI) e do agronegócio (LCA), que são isentos de Imposto de Renda para pessoa física.",
    answer:
      "A LCI (Letra de Crédito Imobiliário) e a LCA (Letra de Crédito do Agronegócio) são títulos de renda fixa emitidos por instituições financeiras e lastreados, respectivamente, em operações de crédito imobiliário e do agronegócio. A principal vantagem para pessoa física é a isenção de Imposto de Renda sobre os rendimentos, o que torna esses títulos muito atrativos em comparação com CDBs de taxas semelhantes. Elas têm garantia do FGC, dentro dos mesmos limites dos depósitos cobertos, e podem ser prefixadas ou pós-fixadas, geralmente atreladas a um percentual do CDI. Por serem lastreadas em carteiras de crédito específicas, costumam exigir prazo mínimo de carência antes de permitir o resgate. A isenção é válida para aplicações de pessoa física, e por isso a rentabilidade líquida tende a ser melhor que a de um CDB com taxa bruta parecida. Na prática, são boas opções para quem quer renda fixa com eficiência tributária e prazos médios de investimento.",
    example:
      "Um cliente que aplica R$ 20.000 em uma LCA de 95% do CDI por 18 meses recebe os rendimentos sem desconto de Imposto de Renda, o que na prática pode superar um CDB de 110% do CDI no mesmo prazo, conforme a taxa.",
    related: ["o-que-e-cdb", "o-que-e-fgc", "cdb-e-melhor-que-poupanca", "o-que-e-liquidez"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-tesouro-selic",
    question: "O que é o Tesouro Selic?",
    category: "renda-fixa",
    answerShort:
      "É um título público pós-fixado que acompanha diariamente a taxa Selic, ideal para reserva de emergência e objetivos de curto prazo.",
    answer:
      "O Tesouro Selic, antiga LFT, é um título público federal pós-fixado cujo valor acompanha a taxa Selic acumulada no período, corrigido diariamente pela taxa efetiva. Por acompanhar o juro básico da economia, tem volatilidade muito baixa em relação aos demais títulos públicos, especialmente para quem está próximo ao vencimento. É o título mais indicado para reserva de emergência e objetivos de curto prazo, pois tem liquidez diária, com resgate em até um dia útil, e baixo risco de perda em resgates antecipados. A aplicação é garantida pelo Tesouro Nacional, e o título não paga cupons: a rentabilidade é recebida no vencimento. Como qualquer título público, é tributado pelo Imposto de Renda com alíquotas regressivas conforme o prazo e não é coberto pelo FGC, pois a garantia é do próprio Tesouro. Para o atendimento, é a alternativa clássica à poupança para quem quer rendimento melhor com risco baixo.",
    example:
      "Um cliente com R$ 5.000 de reserva de emergência pode aplicar no Tesouro Selic e resgatar o valor corrigido diariamente pela Selic quando precisar, com liquidez praticamente imediata.",
    related: ["o-que-e-tesouro-ipca", "o-que-e-tesouro-prefixado", "o-que-e-selic", "o-que-e-liquidez"],
    sources: [{ label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" }],
  },
  {
    slug: "o-que-e-tesouro-ipca",
    question: "O que é o Tesouro IPCA+?",
    category: "renda-fixa",
    answerShort:
      "É um título público que paga a inflação (IPCA) mais uma taxa de juros real definida na compra, protegendo o poder de compra do investidor.",
    answer:
      "O Tesouro IPCA+, antiga NTN-B, é um título público federal cuja rentabilidade combina a variação do IPCA com uma taxa de juros real prefixada no momento da compra. Isso significa que o investidor sabe antecipadamente qual será o ganho real, acima da inflação, até o vencimento, o que protege o poder de compra do dinheiro. Existem versões com pagamento de cupons semestrais, o Tesouro IPCA+ com juros semestrais, e a versão sem cupons, mais indicada para objetivos de longo prazo. Por ter prazo longo, o título está sujeito à marcação a mercado: se o investidor resgatar antes do vencimento, pode ter ganhos ou perdas dependendo da trajetória dos juros. É indicado para objetivos de médio e longo prazo, como aposentadoria e educação. É garantido pelo Tesouro Nacional e tributado pelo Imposto de Renda conforme a tabela regressiva.",
    example:
      "Um cliente compra Tesouro IPCA+ com taxa de 6% ao ano: ele receberá a inflação do período (IPCA) mais 6% de ganho real, garantindo que seu dinheiro rendeu acima da inflação.",
    related: ["o-que-significa-ipca-mais-6", "o-que-e-tesouro-prefixado", "o-que-e-inflacao", "pgbl-e-vgbl-qual-a-diferenca"],
    sources: [{ label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" }],
  },
  {
    slug: "o-que-e-tesouro-prefixado",
    question: "O que é o Tesouro Prefixado?",
    category: "renda-fixa",
    answerShort:
      "É um título público com taxa fixa definida na compra para todo o período, sem correção pela inflação, indicado para quem espera que os juros caiam.",
    answer:
      "O Tesouro Prefixado, antiga LTN, é um título público federal cuja taxa de juros é fixada no momento da compra e permanece a mesma até o vencimento. O investidor sabe exatamente quanto receberá no vencimento, pois o valor final é calculado pela taxa contratada sobre o preço de compra. Diferentemente do IPCA+, ele não tem correção explícita pela inflação: se a inflação do período superar a taxa, o ganho real pode ser menor ou até negativo. Por ter taxa e prazo definidos, o título sofre forte marcação a mercado: se os juros subirem depois da compra, o preço de mercado do papel cai, e um resgate antecipado pode gerar prejuízo. É indicado para quem acredita que a Selic vai cair ou para objetivos com data certa no futuro, desde que o cliente entenda e aceite a volatilidade. O Tesouro Direto oferece versões com diferentes prazos, inclusive o Tesouro Prefixado com juros semestrais.",
    example:
      "Um cliente aplica no Tesouro Prefixado de 12% ao ano por 3 anos: receberá a taxa combinada no vencimento, independentemente do que acontecer com a Selic no período, mas o valor de mercado do título oscila nesse meio-tempo.",
    related: ["o-que-acontece-com-prefixado-quando-juros-sobem", "o-que-e-curva-de-juros", "o-que-e-marcacao-a-mercado", "o-que-e-tesouro-selic"],
    sources: [{ label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" }],
  },
  {
    slug: "o-que-e-marcacao-a-mercado",
    question: "O que é marcação a mercado?",
    category: "renda-fixa",
    answerShort:
      "É a atualização diária do valor de um título pelo preço que o mercado estaria disposto a pagar por ele, fazendo o valor do investimento oscilar antes do vencimento.",
    answer:
      "A marcação a mercado é o procedimento de registrar os ativos pelo seu preço atual de negociação no mercado, e não pelo valor de compra ou pelo valor de vencimento. Isso faz com que o valor de um investimento oscile diariamente conforme a curva de juros, a inflação esperada e as condições de mercado. No caso de títulos prefixados, se as taxas sobem, o preço do papel cai, e vice-versa, o que pode gerar perdas contábeis em resgates antecipados, mesmo em títulos públicos considerados seguros. Fundos de renda fixa e títulos do Tesouro Direto são marcados a mercado diariamente; a poupança, não. É a marcação a mercado que explica por que um título prefixado pode aparecer no negativo no extrato mesmo sem vencimento próximo. Para o atendimento, é essencial explicar que a perda pode não se concretizar se o cliente mantiver o título até o vencimento, quando recebe a taxa contratada.",
    example:
      "Um cliente que aplicou no Tesouro Prefixado em um período de Selic baixa vê seu saldo cair quando a Selic sobe, pois o mercado recalcula o preço do título; se mantiver até o vencimento, recebe a taxa combinada.",
    related: ["o-que-e-duration", "o-que-e-risco-de-mercado", "o-que-acontece-com-prefixado-quando-juros-sobem", "o-que-e-tesouro-prefixado"],
    sources: [
      { label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-duration",
    question: "O que é duration?",
    category: "renda-fixa",
    answerShort:
      "É o prazo médio ponderado de recebimento dos fluxos de um título, que mede o quanto seu preço é sensível a variações de juros.",
    answer:
      "A duration é uma medida do prazo médio de recebimento dos fluxos de caixa de um título, ponderada pelos valores e pelo momento de cada pagamento, incluindo juros e principal. Ela serve como indicador de sensibilidade do preço do ativo a variações na taxa de juros: quanto maior a duration, maior a oscilação do preço do título quando os juros mudam. Por exemplo, títulos de longo prazo, como o Tesouro IPCA+ e o Prefixado de prazos longos, têm duration alta e oscilam mais em períodos de variação de juros. Títulos de curto prazo, como o Tesouro Selic, têm duration baixa e oscilam pouco. A duration é uma ferramenta útil para comparar riscos e para ajustar a carteira ao perfil e ao horizonte do cliente: quem tem prazo curto deve preferir ativos de duration menor. É um conceito técnico, mas essencial para explicar por que investimentos com o mesmo perfil se comportam de formas diferentes.",
    example:
      "Dois títulos prefixados com taxas iguais podem ter durations diferentes: o de vencimento mais longo cai mais quando os juros sobem, e o profissional do mercado financeiro pode usar isso para explicar a escolha do prazo ideal.",
    related: ["o-que-e-marcacao-a-mercado", "o-que-acontece-com-prefixado-quando-juros-sobem", "o-que-e-curva-de-juros"],
    sources: [
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
      { label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
    ],
  },
  {
    slug: "o-que-e-risco-de-credito",
    question: "O que é risco de crédito?",
    category: "renda-fixa",
    answerShort:
      "É o risco de o emissor de um título ou o tomador de um empréstimo não honrar o pagamento dos juros e do principal combinados.",
    answer:
      "Risco de crédito é a possibilidade de o devedor não cumprir as obrigações financeiras assumidas, seja o emissor de um título, como banco, empresa ou governo, seja o tomador de um empréstimo. No investimento, o risco se manifesta quando o emissor atrasa ou não paga os juros e o principal: por isso, títulos de emissores com pior qualidade de crédito pagam taxas maiores, como prêmio por esse risco. No crédito, ele aparece na inadimplência, ou seja, no risco de o cliente não pagar as parcelas do financiamento ou do cartão. As agências de classificação de risco (rating) e os modelos internos dos bancos avaliam esse risco, e instrumentos como o FGC e as garantias reais ajudam a mitigá-lo no lado do investimento. A avaliação de risco de crédito é um dos pilares da atuação bancária, da concessão de empréstimos à precificação de investimentos.",
    example:
      "Um CDB de um banco pequeno paga mais que o de um banco grande justamente porque o risco de crédito do emissor é maior; o FGC, porém, cobre os dois até R$ 250 mil por instituição.",
    related: ["o-que-e-fgc", "o-que-e-cdb", "o-que-e-risco-de-mercado", "o-que-e-inadimplencia"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-risco-de-mercado",
    question: "O que é risco de mercado?",
    category: "renda-fixa",
    answerShort:
      "É o risco de perdas por oscilação de preços de ativos no mercado, causadas por variações de juros, câmbio, inflação, bolsa e outros fatores.",
    answer:
      "Risco de mercado é a possibilidade de o valor de um investimento cair por oscilação dos preços de mercado, influenciada por fatores como juros, câmbio, inflação e cenário econômico. Ele atinge principalmente títulos prefixados e indexados à inflação, por causa da marcação a mercado, além de ações, fundos e produtos com exposição cambial. Diferente do risco de crédito, que envolve o emissor não pagar, o risco de mercado existe mesmo em ativos considerados seguros, como títulos públicos, quando resgatados antes do vencimento. A volatilidade é a medida mais usada para quantificar esse risco. Mitigá-lo passa por diversificar a carteira, respeitar o prazo dos investimentos e alinhar o perfil de risco do cliente ao produto. No crédito, o risco de mercado aparece, por exemplo, em operações com garantias atreladas a ativos cujo preço varia.",
    example:
      "Um cliente que investe em um fundo multimercado com exposição a câmbio pode ver o patrimônio cair em um mês de forte oscilação do dólar, mesmo que o gestor tenha experiência; isso é risco de mercado.",
    related: ["o-que-e-risco-de-credito", "o-que-e-marcacao-a-mercado", "o-que-e-fundo-multimercado", "o-que-e-duration"],
    sources: [
      { label: "CVM", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-liquidez",
    question: "O que é liquidez?",
    category: "renda-fixa",
    answerShort:
      "É a facilidade e a rapidez de converter um ativo em dinheiro sem perda relevante de valor, ou a capacidade do cliente de pagar suas dívidas no vencimento.",
    answer:
      "Liquidez é a capacidade de um ativo ser convertido em dinheiro rapidamente e com pouca perda de valor. Quanto maior a liquidez, mais fácil é resgatar o recurso: a conta corrente e a poupança têm liquidez imediata, o Tesouro Selic tem resgate em um dia útil, e títulos de longo prazo ou fundos fechados podem exigir espera e ter oscilação no valor resgatado. Também se fala em liquidez para o crédito: mede a capacidade do cliente de honrar suas dívidas, ou seja, a folga entre seus rendimentos e suas obrigações mensais. No atendimento, entender liquidez ajuda a montar a reserva de emergência, normalmente de 3 a 6 meses de despesas em aplicações líquidas, e a evitar o resgate antecipado de ativos com marcação a mercado. Ativos ilíquidos costumam pagar um prêmio de liquidez, ou seja, maior retorno para compensar a dificuldade de venda.",
    example:
      "Um cliente que guarda a reserva de emergência em um CDB com vencimento em 3 anos comete um erro clássico de liquidez: se precisar do dinheiro antes, pode resgatar com perda. O correto é usar aplicações com liquidez diária.",
    related: ["o-que-e-tesouro-selic", "o-que-e-marcacao-a-mercado", "o-que-e-cdb"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-spread",
    question: "O que é spread?",
    category: "mercado-de-capitais",
    answerShort:
      "É a diferença entre duas taxas ou preços; no mercado, costuma indicar o prêmio de risco que um título paga acima da taxa livre de risco.",
    answer:
      "O spread, em finanças, é a diferença entre duas taxas, preços ou rendimentos. No mercado de renda fixa, o spread de crédito é a diferença entre a taxa de um título, de um banco, empresa ou país, e a taxa livre de risco de referência, geralmente os títulos públicos: quanto maior o risco percebido, maior o spread e maior a taxa cobrada. O spread também aparece em operações de compra e venda, conhecido como bid-ask spread, na comparação entre a taxa cobrada e a taxa paga, o spread bancário, e em derivativos. No atendimento, quando o cliente pergunta por que dois CDBs com o mesmo prazo pagam taxas diferentes, a resposta é o spread: o mercado precifica o risco de crédito de cada emissor. Um spread baixo indica percepção de menor risco; um spread alto, maior risco e maior remuneração potencial.",
    example:
      "Um banco sólido emite CDB a 100% do CDI e um banco menor paga 130% do CDI pelo mesmo prazo: a diferença de 30 pontos percentuais é o spread de crédito cobrado pelo mercado.",
    related: ["o-que-e-risco-de-credito", "o-que-e-spread-bancario", "o-que-e-cdb"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "B3", url: "https://www.b3.com.br/" },
    ],
  },
  {
    slug: "o-que-significa-ipca-mais-6",
    question: "O que significa IPCA + 6%?",
    category: "renda-fixa",
    answerShort:
      "Significa que o investimento paga a variação da inflação (IPCA) mais uma taxa de 6% ao ano, garantindo um ganho real de cerca de 6% acima da inflação.",
    answer:
      "Expressões como IPCA mais 6% indicam a rentabilidade de um investimento híbrido: ele paga a variação do IPCA, a inflação medida pelo IBGE, acumulada no período, mais uma parcela fixa de juros reais, aqui de 6% ao ano. Isso significa que o investidor receberá a inflação somada a aproximadamente 6% de ganho real ao ano, protegendo o poder de compra e ainda obtendo retorno acima dela. Títulos assim são comuns no Tesouro Direto, como o Tesouro IPCA+, e também em CDBs e debêntures, sendo especialmente adequados para objetivos de longo prazo. O valor efetivo pago no período depende da inflação realizada e do prazo, pois o juro de 6% ao ano é capitalizado. É importante lembrar que a taxa contratada pode variar conforme a data da aplicação: comprar em um momento de juros altos garante taxas reais maiores. Para o cliente, é a forma mais direta de entender o ganho real de um investimento.",
    example:
      "Um cliente aplica R$ 10.000 em um título IPCA mais 6% ao ano e a inflação do período fica em 5%: o rendimento total será de aproximadamente 11,3% no ano, o que equivale a 1,05 multiplicado por 1,06 menos 1.",
    related: ["o-que-e-tesouro-ipca", "o-que-e-juros-real", "o-que-e-inflacao"],
    sources: [{ label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" }],
  },
  {
    slug: "o-que-acontece-com-prefixado-quando-juros-sobem",
    question: "O que acontece com um investimento prefixado quando os juros sobem?",
    category: "renda-fixa",
    answerShort:
      "O preço de mercado do título cai, o que pode gerar perda se o cliente vender antes do vencimento; mantendo até o vencimento, ele recebe a taxa contratada.",
    answer:
      "Quando os juros do mercado sobem, os títulos prefixados emitidos a taxas mais baixas perdem atratividade, pois novos papéis pagam mais. Pela marcação a mercado, o preço desses títulos cai para compensar, e quem resgata antes do vencimento pode vender com perda. O tamanho da queda depende do prazo: títulos mais longos, com duration maior, oscilam mais. Já o investidor que mantém o título até o vencimento recebe exatamente a taxa contratada na aplicação, independentemente do que aconteceu com os juros no meio do caminho. Na prática, a perda é contábil e temporária, mas se concretiza apenas no resgate antecipado. É por isso que a análise de perfil e de prazo é tão importante na venda de prefixados: o cliente precisa aceitar a volatilidade de curto prazo em troca de uma rentabilidade definida.",
    example:
      "Um cliente comprou Tesouro Prefixado de 11% ao ano e a Selic subiu para 15%: seu título passa a valer menos no extrato, por causa da marcação a mercado, mas se ele aguardar o vencimento, recebe os 11% combinados.",
    related: ["o-que-e-tesouro-prefixado", "o-que-e-marcacao-a-mercado", "o-que-e-duration", "o-que-e-curva-de-juros"],
    sources: [{ label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" }],
  },
  {
    slug: "o-que-e-fundo-di",
    question: "O que é um fundo DI?",
    category: "fundos",
    answerShort:
      "É um fundo de renda fixa que investe em títulos pós-fixados atrelados à Selic ou ao CDI, com volatilidade baixa e objetivo de acompanhar o juro básico.",
    answer:
      "O fundo DI, ou fundo referenciado DI, é um fundo de renda fixa que busca acompanhar de perto a variação do CDI ou da Selic, investindo principalmente em títulos públicos pós-fixados e títulos privados de curto prazo indexados a essas taxas. Por ter duration baixa, sua volatilidade é pequena, embora exista a marcação a mercado diária das cotas. A rentabilidade informada costuma ser apresentada como um percentual do CDI que o fundo busca, como 100% ou 95%. Diferente da aplicação direta em Tesouro Selic, o fundo cobra taxa de administração, que reduz o retorno líquido, e está sujeito ao come-cotas, o recolhimento semestral de Imposto de Renda. É indicado para quem quer praticidade, liquidez e baixo risco, sendo comum como aplicação automática de conta corrente, embora não seja garantido pelo FGC.",
    example:
      "O dinheiro parado em um fundo de liquidez diária da conta corrente, que rende próximo a 100% do CDI, é na prática um fundo DI: resgatável a qualquer momento e com rendimento acompanhando o juro básico.",
    related: ["o-que-e-come-cotas", "cdi-e-selic-sao-iguais", "o-que-e-tesouro-selic", "o-que-e-marcacao-a-mercado"],
    sources: [
      { label: "CVM", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-fundo-multimercado",
    question: "O que é um fundo multimercado?",
    category: "fundos",
    answerShort:
      "É um fundo que combina diferentes estratégias e classes de ativos, como juros, ações, câmbio e commodities, em uma única carteira, buscando retorno absoluto com gestão ativa.",
    answer:
      "O fundo multimercado é um fundo de investimento que pode aplicar em diversas classes de ativos e estratégias, como renda fixa, ações, câmbio, commodities e derivativos, simultaneamente, com liberdade para se posicionar em cenários de alta e de queda. Ele busca retorno absoluto, ou seja, ganhar em diferentes cenários de mercado, e é gerido ativamente por um gestor que decide a alocação e a proteção, o chamado hedge, da carteira. Como usa derivativos e estratégias complexas, costuma ter volatilidade maior que a de fundos DI e pode apresentar perdas em períodos de estresse. É mais indicado para investidores com perfil de risco moderado a arrojado e horizonte de médio e longo prazo. A tributação segue as regras dos fundos de longo prazo, com come-cotas semestral e Imposto de Renda regressivo no resgate. No atendimento, é importante alinhar o produto ao perfil de investidor e explicar que rentabilidade passada não garante resultado futuro.",
    example:
      "Um cliente com perfil arrojado pode ter em carteira um multimercado que, em um mês de dólar em alta, compensa a queda das ações com a posição cambial protegida pelo gestor.",
    related: ["o-que-e-fundo-di", "o-que-e-come-cotas", "o-que-e-hedge-cambial", "o-que-e-suitability"],
    sources: [
      { label: "CVM", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "o-que-e-come-cotas",
    question: "O que é come-cotas?",
    category: "fundos",
    answerShort:
      "É a cobrança semestral do Imposto de Renda sobre os rendimentos de fundos de investimento, feita nos últimos dias úteis de maio e novembro.",
    answer:
      "O come-cotas é o recolhimento semestral obrigatório do Imposto de Renda sobre os rendimentos dos fundos de investimento, incidente nos últimos dias úteis de maio e novembro. Em vez de pagar o imposto só no resgate, o investidor perde cotas do fundo duas vezes por ano: o imposto é retido e o número de cotas da aplicação é reduzido. As alíquotas são de 20% para fundos de curto prazo e 15% para fundos de longo prazo, e os valores retidos são considerados para o cálculo da alíquota definitiva na tabela regressiva do resgate, que vai de 22,5% até 15%. Fundos com cobrança semestral seguem o regime de tributação definido em lei. O come-cotas não é uma cobrança extra: é uma antecipação do imposto que já seria devido, apenas antecipada. Conhecer o come-cotas ajuda o profissional do mercado financeiro a explicar por que o saldo de um fundo cai em maio e novembro, evitando reclamações.",
    example:
      "Um cliente observa uma redução no saldo do fundo de renda fixa no fim de maio; o profissional do mercado financeiro explica que é o come-cotas, a antecipação semestral do Imposto de Renda sobre os rendimentos.",
    related: ["o-que-e-fundo-di", "o-que-e-fundo-multimercado", "diferenca-entre-taxa-nominal-e-efetiva"],
    sources: [
      { label: "CVM", url: "https://www.gov.br/cvm/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "o-que-e-spread-bancario",
    question: "O que é spread bancário?",
    category: "credito",
    answerShort:
      "É a diferença entre a taxa de juros cobrada do tomador de crédito e a taxa paga ao investidor, cobrindo custos, inadimplência e lucro do banco.",
    answer:
      "O spread bancário é a diferença entre o custo de captação do banco, ou seja, quanto ele paga para captar recursos, como nos CDBs e depósitos, e a taxa cobrada nas operações de crédito, como a que o cliente paga no financiamento ou empréstimo. Esse spread remunera os custos administrativos, o custo do compulsório e dos tributos, a inadimplência e o lucro da instituição. No Brasil, o spread é historicamente alto, o que torna o crédito caro em relação a outros países. Um spread alto significa que o banco cobra muito mais do cliente do que paga pela captação, e a redução desse custo depende de fatores como concorrência, garantias, estabilidade econômica e educação financeira. No atendimento, entender o spread ajuda a explicar por que a taxa de um empréstimo é sempre maior que o rendimento de um CDB no mesmo banco.",
    example:
      "Um banco capta recursos pagando 100% do CDI, aproximadamente a Selic, e cobra taxas mensais elevadas no crédito rotativo do cartão: a diferença entre essas taxas é o spread bancário.",
    related: ["o-que-e-spread", "o-que-e-cet", "como-a-selic-afeta-o-financiamento"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-cet",
    question: "O que é CET?",
    category: "credito",
    answerShort:
      "É o Custo Efetivo Total do crédito: a taxa que reúne todos os encargos da operação, incluindo juros, tarifas, tributos e seguros, permitindo comparar ofertas.",
    answer:
      "A CET (Custo Efetivo Total) é a taxa que expressa o custo total de uma operação de crédito para o cliente, incluindo não apenas os juros, mas também tarifas, tributos, como o IOF, seguros e outras despesas envolvidas na contratação. A divulgação da CET é obrigatória por determinação do Banco Central, e ela deve ser apresentada ao cliente antes da contratação para que ele compare ofertas de forma transparente. Como engloba todos os encargos, a CET é maior que a taxa de juros nominal do contrato. No financiamento, a CET considera o fluxo de pagamentos e pode variar conforme o prazo e as condições contratadas. Para o profissional do mercado financeiro, sempre que o cliente comparar empréstimos de bancos diferentes, a análise deve usar a CET, e não apenas a taxa mensal de juros. Ela é a ferramenta correta para apontar qual operação é de fato mais barata.",
    example:
      "Um empréstimo anuncia juros de 1,5% ao mês, mas a CET chega a 1,9% ao mês quando somadas tarifas e seguros; comparando a CET com outra oferta, o cliente vê qual é realmente mais vantajosa.",
    related: ["o-que-e-spread-bancario", "diferenca-entre-taxa-nominal-e-efetiva", "como-a-selic-afeta-o-financiamento"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "diferenca-entre-taxa-nominal-e-efetiva",
    question: "Qual a diferença entre taxa nominal e taxa efetiva?",
    category: "credito",
    answerShort:
      "A taxa nominal é a taxa contratada sem considerar a capitalização dentro do período; a taxa efetiva considera o efeito dos juros compostos e é maior que a nominal.",
    answer:
      "A taxa nominal é a taxa anunciada, sem considerar a capitalização dos juros dentro do período analisado; já a taxa efetiva reflete o custo ou rendimento real considerando a frequência de capitalização, por exemplo, mensal ou semestral. Uma taxa de 12% ao ano com capitalização mensal não rende exatamente 12% ao ano: os juros de cada mês passam a render juros, e a taxa efetiva anual fica em cerca de 12,68%. O cálculo usa a equivalência de taxas, e quanto maior a frequência de capitalização, maior a diferença entre taxa nominal e efetiva. No crédito, a taxa efetiva é a que de fato será cobrada, e por isso os bancos usam a CET para revelar o custo real da operação. Nos investimentos, a rentabilidade anualizada deve ser comparada sempre em taxa efetiva, nunca nominal. Para o cliente, entender a diferença evita surpresas com o rendimento real de um CDB ou o custo real de um financiamento.",
    example:
      "Um financiamento com juros de 1% ao mês anuncia aproximadamente 12% ao ano, mas a taxa efetiva anual é de 12,68%, pois os juros mensais capitalizam; a CET ainda soma tarifas e tributos.",
    related: ["o-que-e-cet", "o-que-e-juros-real", "o-que-e-spread-bancario"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-inadimplencia",
    question: "O que é inadimplência?",
    category: "credito",
    answerShort:
      "É o não pagamento de uma obrigação financeira na data do vencimento, como parcelas de empréstimos, financiamentos e cartões, prejudicando o relacionamento de crédito.",
    answer:
      "A inadimplência ocorre quando o cliente não paga uma obrigação financeira na data estipulada, como uma parcela de empréstimo, financiamento ou fatura de cartão. Ela gera consequências para o cliente, como cobrança de juros de mora, multa e registro negativo em cadastros de inadimplentes, além de restrições para novas operações de crédito. Para o banco, a inadimplência é um dos principais custos do spread bancário, pois as perdas com calotes são repassadas às taxas cobradas dos bons pagadores. Por isso, os bancos avaliam a capacidade de pagamento, por meio da análise de crédito e do score, antes de conceder empréstimos. No atendimento, é essencial orientar o cliente a priorizar o pagamento de dívidas mais caras, negociar atrasos e reestruturar contratos antes que a situação se agrave. O banco também precisa registrar corretamente a classificação de risco de cada operação conforme as regras do Banco Central.",
    example:
      "Um cliente que perde o vencimento da fatura do cartão tem multa e juros de mora aplicados; se continuar sem pagar, é registrado como inadimplente e perde acesso a novos créditos.",
    related: ["o-que-e-spread-bancario", "o-que-e-cet", "o-que-e-risco-de-credito"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-suitability",
    question: "O que é suitability?",
    category: "compliance",
    answerShort:
      "É o processo de avaliar se um produto de investimento é adequado ao perfil de risco, objetivos e prazo do cliente, exigido pela CVM.",
    answer:
      "Suitability é o processo pelo qual a instituição financeira avalia se um produto de investimento é adequado ao perfil do cliente, considerando seus objetivos, prazo, situação financeira, experiência e tolerância a risco. No Brasil, a regra é definida pela Resolução CVM 139, que determina que a instituição deve aplicar um questionário de perfil e verificar se o investimento é compatível com o perfil identificado, geralmente classificado em conservador, moderado e arrojado. Se o produto não for adequado ao perfil, a instituição não pode recomendar a aplicação. O processo protege o investidor e a própria instituição, reduzindo conflitos de interesse e riscos de responsabilização. Produtos como fundos multimercado, por exemplo, exigem perfil compatível com volatilidade. No atendimento, é fundamental manter o questionário atualizado e registrar a análise sempre que recomendar investimentos.",
    example:
      "Um cliente com perfil conservador que busca renda fixa de baixo risco não deve ser direcionado a um fundo multimercado alavancado; o suitability orienta o profissional do mercado financeiro a oferecer produtos compatíveis, como Tesouro Selic ou CDB.",
    related: ["o-que-e-kyc", "o-que-e-fundo-multimercado", "o-que-e-risco-de-mercado"],
    sources: [{ label: "CVM", url: "https://www.gov.br/cvm/" }],
  },
  {
    slug: "o-que-e-kyc",
    question: "O que é KYC (Know Your Client)?",
    category: "compliance",
    answerShort:
      "É o processo de identificação e conhecimento do cliente usado por bancos e corretoras para prevenir fraudes e lavagem de dinheiro.",
    answer:
      "KYC (Know Your Client) é o processo de conhecer o cliente antes de iniciar o relacionamento e mantê-lo atualizado ao longo do tempo, coletando documentos, dados cadastrais, origem de recursos e informações sobre a atividade exercida. Ele é a base do combate à lavagem de dinheiro e ao financiamento do terrorismo, e sua implementação é exigida por reguladores como o Banco Central e a CVM. Com base no KYC, a instituição classifica o cliente por risco e define o nível de monitoramento das operações. O processo também sustenta a análise de suitability, pois permite conhecer o perfil e os objetivos do cliente. O profissional do mercado financeiro deve sempre atualizar dados cadastrais, verificar a compatibilidade entre as operações e a renda declarada e comunicar situações suspeitas ao canal de compliance.",
    example:
      "Ao abrir uma conta, o cliente fornece RG, CPF, comprovante de renda e informa a origem dos recursos: isso é o KYC, que o banco revisa periodicamente, por exemplo, quando o cliente muda de trabalho ou de endereço.",
    related: ["o-que-e-pld", "o-que-e-suitability"],
    sources: [
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
      { label: "CVM", url: "https://www.gov.br/cvm/" },
    ],
  },
  {
    slug: "o-que-e-pld",
    question: "O que é PLD (Prevenção à Lavagem de Dinheiro)?",
    category: "compliance",
    answerShort:
      "É o conjunto de regras e controles que instituições financeiras adotam para identificar, monitorar e reportar operações suspeitas de lavagem de dinheiro.",
    answer:
      "PLD é a sigla para Prevenção à Lavagem de Dinheiro, o arcabouço legal e regulatório que obriga as instituições financeiras a implementar controles para impedir que recursos ilícitos sejam lavados por meio do sistema financeiro. A base legal é a Lei 9.613/1998, complementada por normas do Banco Central, da CVM e de outros reguladores. Os principais pilares são o KYC, que é o conhecimento do cliente, o monitoramento de operações, a manutenção de registros e a comunicação de operações suspeitas ao Conselho de Controle de Atividades Financeiras, o Coaf. Os bancos também devem manter políticas de PLD aprovadas pela diretoria e capacitar funcionários. No atendimento, o profissional do mercado financeiro deve reportar imediatamente qualquer operação atípica pelo canal interno de compliance e jamais avisar o cliente sobre a comunicação de suspeita. O descumprimento das regras pode gerar multas e sanções à instituição.",
    example:
      "Um cliente deposita frequentemente valores em dinheiro incompatíveis com a renda declarada no KYC: o banco monitora a situação e, se mantida, comunica a operação suspeita ao Coaf pelo sistema de PLD.",
    related: ["o-que-e-kyc", "o-que-e-suitability"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-fgc",
    question: "O que é o FGC?",
    category: "renda-fixa",
    answerShort:
      "É o Fundo Garantidor de Créditos, uma entidade privada que protege depositantes e investidores em caso de intervenção ou liquidação do banco, garantindo até R$ 250 mil por CPF/CNPJ e instituição.",
    answer:
      "O FGC (Fundo Garantidor de Créditos) é uma entidade privada, sem fins lucrativos, que garante depósitos e investimentos em caso de falência, intervenção ou liquidação de uma instituição financeira associada. A garantia ordinária cobre até R$ 250 mil por CPF/CNPJ contra cada instituição ou conglomerado financeiro, somando todos os produtos cobertos, e há um teto global de R$ 1 milhão por CPF/CNPJ a cada quatro anos. São cobertos, por exemplo, depósitos em conta corrente, poupança, CDB, RDB, LCI, LCA e LCD. Não são cobertos fundos de investimento, títulos de empresas, ações, criptomoedas e o Tesouro Direto, que é garantido pelo Tesouro Nacional. Depósitos em cooperativas de crédito têm garantia do fundo próprio do cooperativismo, o FGCoop. No atendimento, o FGC é um dos principais argumentos de segurança na oferta de CDBs, LCIs e LCAs dentro dos limites de cobertura.",
    example:
      "Um cliente com R$ 200 mil em CDB e R$ 100 mil em conta corrente no mesmo banco tem garantia total de até R$ 250 mil nessa instituição se ela entrar em liquidação; valores acima disso ficam sujeitos ao processo de recuperação de créditos.",
    related: ["o-fgc-cobre-todos-os-investimentos", "o-que-e-cdb", "o-que-e-lci-e-lca", "o-que-e-risco-de-credito"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-fgc-cobre-todos-os-investimentos",
    question: "O FGC cobre todos os investimentos?",
    category: "renda-fixa",
    answerShort:
      "Não. O FGC cobre apenas depósitos e títulos financeiros específicos; fundos, ações, Tesouro Direto, criptomoedas e previdência não são garantidos por ele.",
    answer:
      "Não. O FGC garante apenas produtos financeiros listados em seu regulamento, como depósitos em conta corrente, poupança, CDB, RDB, LCI, LCA e LCD, dentro dos limites de R$ 250 mil por CPF/CNPJ e instituição e do teto global de R$ 1 milhão por CPF/CNPJ a cada quatro anos. Produtos como fundos de investimento, títulos privados como debêntures e CRIs e CRAs, ações na bolsa, criptomoedas e planos de previdência, como PGBL e VGBL, não são cobertos pelo FGC. O Tesouro Direto não tem FGC, mas é garantido pelo próprio Tesouro Nacional, que responde pelos títulos públicos. Depósitos em cooperativas de crédito têm garantia do fundo próprio do cooperativismo, o FGCoop. Para o atendimento, é essencial esclarecer que a ausência de garantia do FGC não significa que o produto seja ruim: significa apenas que o risco do emissor deve ser avaliado de outra forma.",
    example:
      "Um cliente pergunta se o investimento em fundos tem garantia do FGC: o profissional do mercado financeiro explica que não, e que a garantia do FGC vale para CDB, LCI, LCA, poupança e depósitos, cada um dentro dos limites.",
    related: ["o-que-e-fgc", "o-que-e-cdb", "o-que-e-risco-de-credito", "pgbl-e-vgbl-qual-a-diferenca"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "o-que-e-dxy",
    question: "O que é o DXY?",
    category: "cambio",
    answerShort:
      "É o índice do dólar americano, que mede a força da moeda dos EUA frente a uma cesta de seis moedas internacionais, principalmente o euro.",
    answer:
      "O DXY (US Dollar Index) é um índice criado em 1973 que mede o valor do dólar americano em relação a uma cesta de seis moedas internacionais: euro, iene japonês, libra esterlina, dólar canadense, coroa sueca e franco suíço. O euro tem o maior peso na cesta, por isso é o principal motor do índice. Quando o DXY sobe, o dólar se valoriza frente à cesta; quando cai, o dólar se desvaloriza. O índice é usado como referência global de força da moeda americana e influencia o preço de commodities, o fluxo de capital para mercados emergentes e moedas como o real. Para o Brasil, um dólar forte, com DXY em alta, tende a pressionar o câmbio e, indiretamente, a inflação, por encarecer importações. No atendimento, o DXY ajuda a contextualizar o movimento do dólar, mas a cotação que interessa ao cliente, o par real e dólar, depende também de fatores internos.",
    example:
      "Em um período em que o DXY sobe e o dólar se fortalece globalmente, o real tende a se desvalorizar junto com outras moedas emergentes, encarecendo viagens e compras internacionais do cliente.",
    related: ["o-que-e-hedge-cambial", "o-que-e-inflacao"],
    sources: [
      { label: "B3", url: "https://www.b3.com.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "o-que-e-hedge-cambial",
    question: "O que é hedge cambial?",
    category: "cambio",
    answerShort:
      "É a proteção contra a variação do câmbio, feita com contratos futuros de dólar, opções ou outros derivativos, para garantir um custo ou rendimento previsível.",
    answer:
      "O hedge cambial é uma estratégia de proteção contra o risco de oscilação da taxa de câmbio, usada por empresas e investidores que têm obrigações ou investimentos em moeda estrangeira. Ao contratar um hedge, por exemplo, um contrato futuro de dólar na B3, o agente fixa a cotação futura e reduz a incerteza sobre o câmbio. Empresas que importam ou exportam usam hedge para proteger suas margens, e investidores que aplicam em ativos no exterior usam para proteger o retorno em reais. No Brasil, os instrumentos mais comuns são os contratos futuros de dólar na B3, o dólar futuro de balcão e as opções de câmbio. Existe também o conceito de hedge natural, quando receitas e despesas em dólar se equilibram sem precisar de derivativos. Para o profissional do mercado financeiro, é importante lembrar que hedge reduz risco, mas envolve custos, e que produtos com proteção cambial devem ser adequados ao perfil e ao objetivo do cliente.",
    example:
      "Uma empresa que venderá uma máquina em dólares daqui a 6 meses vende contratos futuros de dólar para travar a cotação atual, garantindo o valor do recebimento mesmo que o dólar caia.",
    related: ["o-que-e-dxy", "o-que-e-risco-de-mercado", "o-que-e-fundo-multimercado"],
    sources: [
      { label: "B3", url: "https://www.b3.com.br/" },
      { label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" },
    ],
  },
  {
    slug: "o-que-e-alienacao-fiduciaria",
    question: "O que é alienação fiduciária?",
    category: "credito",
    answerShort:
      "É uma garantia de crédito em que o bem financiado, como imóvel ou veículo, fica alienado ao banco até o pagamento total do financiamento, mas continua com o cliente.",
    answer:
      "A alienação fiduciária é um tipo de garantia usada em financiamentos de veículos e imóveis: o cliente fica com o uso e a posse do bem, mas a propriedade é transferida ao banco, na condição de fiduciário, até o pagamento integral da dívida. Ao quitar o contrato, a propriedade volta automaticamente ao cliente. Se houver inadimplência, o banco pode retomar o bem por meio de processo extrajudicial, conforme previsto na Lei 9.514/1997 para imóveis e nas normas aplicáveis a veículos. Por reduzir o risco do credor, a alienação fiduciária permite taxas de juros menores que as de crédito sem garantia. Ela é diferente da hipoteca: na hipoteca, o imóvel fica como garantia, mas a propriedade permanece com o devedor, e a execução é mais lenta. No atendimento, o profissional do mercado financeiro deve explicar claramente as consequências da inadimplência e a forma de quitação antecipada do financiamento.",
    example:
      "Um cliente financia um carro com alienação fiduciária: usa o carro normalmente, mas o banco só libera a propriedade quando a última parcela é paga; se deixar de pagar, o bem pode ser retomado para quitar a dívida.",
    related: ["como-a-selic-afeta-o-financiamento", "o-que-e-inadimplencia", "o-que-e-cet"],
    sources: [{ label: "Banco Central do Brasil (BCB)", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "pgbl-e-vgbl-qual-a-diferenca",
    question: "Qual a diferença entre PGBL e VGBL?",
    category: "previdencia",
    answerShort:
      "A diferença está na tributação: no PGBL, é permitida a dedução de até 12% da renda tributável, mas o imposto incide sobre o valor total acumulado; no VGBL, não há dedução, e o imposto incide apenas sobre os rendimentos.",
    answer:
      "PGBL e VGBL são planos de previdência privada aberta com diferentes tratamentos fiscais. No PGBL (Plano Gerador de Benefício Livre), o valor aplicado pode ser deduzido da base de cálculo do Imposto de Renda até o limite de 12% da renda bruta anual tributável e, no resgate, o imposto incide sobre o montante total acumulado, pois o valor aplicado já foi deduzido. No VGBL (Vida Gerador de Benefício Livre), não há dedução, e o imposto incide apenas sobre os rendimentos acumulados, sendo indicado para quem faz a declaração simplificada ou não pode deduzir. Nos dois, a tributação pode ser pela tabela progressiva ou pela tabela regressiva, com alíquotas que caem de 35% até 10% conforme o tempo de contribuição. O PGBL é indicado para quem entrega a declaração completa; o VGBL, para quem faz a simplificada ou busca flexibilidade. Os planos de previdência privada aberta são regulados pela SUSEP.",
    example:
      "Um cliente que declara o Imposto de Renda pela forma completa e aplica R$ 10 mil por ano no PGBL pode reduzir a base de cálculo do imposto em até R$ 10 mil; no VGBL, esse abatimento não existe, mas o imposto no resgate incide só sobre os rendimentos.",
    related: ["o-que-e-tesouro-ipca", "o-que-e-juros-real", "o-fgc-cobre-todos-os-investimentos"],
    sources: [{ label: "SUSEP", url: "https://www.gov.br/susep/" }],
  },
];
