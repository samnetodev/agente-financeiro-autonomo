import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "conta-corrente",
    name: "Conta Corrente",
    category: "servicos",
    concept:
      "Conta de depósito à vista utilizada para movimentar o dinheiro no dia a dia, como recebimentos, pagamentos, transferências e saques. É o produto básico de relacionamento do cliente com a instituição financeira.",
    funcionamento:
      "O cliente mantém recursos em uma conta vinculada à instituição e os movimenta por meio de cartão de débito, TED, PIX e débitos automáticos. A conta tradicional geralmente não remunera o saldo, embora algumas instituições ofereçam remuneração em condições específicas. As tarifas e os pacotes de serviços devem ser informados no contrato. Existe um conjunto de serviços essenciais que, por regulação, deve ser oferecido gratuitamente.",
    publico:
      "Praticamente todos os consumidores financeiros, de pessoas físicas com movimentação simples a empresas com alto volume de transações.",
    riscos: [
      "Risco de fraude e golpes, como phishing, engenharia social e uso indevido de dados.",
      "Risco de tarifas e encargos quando o cliente contrata pacotes de serviços sem necessidade.",
      "Risco de bloqueio temporário de recursos em situações de suspeita de fraude.",
    ],
    liquidez:
      "Liquidez imediata: o saldo fica disponível a qualquer momento para saques, transferências e pagamentos, respeitados os horários de processamento dos meios de pagamento.",
    tributacao:
      "O saldo da conta corrente não gera rendimento e, por isso, não há incidência de Imposto de Renda. Tarifas e pacotes de serviços não são dedutíveis para a pessoa física.",
    garantias: [
      "Depósitos à vista (contas de depósito) são garantidos pelo Fundo Garantidor de Créditos (FGC) até R$ 250 mil por CPF/CNPJ por instituição financeira.",
      "Regulação e supervisão do Banco Central do Brasil.",
    ],
    vantagens: [
      "Alta liquidez e praticidade para o dia a dia.",
      "Acesso a meios de pagamento modernos como o PIX.",
      "Base de relacionamento que pode facilitar o acesso a crédito e outros produtos.",
    ],
    limitacoes: [
      "Saldo sem remuneração ou com remuneração baixa, geralmente inferior à inflação.",
      "Cobrança de tarifas por pacotes e serviços não essenciais.",
      "Exposição a golpes e fraudes, exigindo cuidado com dados e senhas.",
    ],
    perguntasDiagnostico: [
      "Como você usa a conta no dia a dia: pagamentos, recebimentos, reserva de valores ou movimentação de negócio?",
      "Você costuma manter saldo parado na conta por longos períodos? Que destino esse valor poderia ter?",
      "Quais tarifas você paga hoje pela conta e serviços? Conhece os serviços essenciais gratuitos?",
      "Qual o volume mensal de movimentação e há quanto tempo mantém a conta nessa instituição?",
    ],
    objecoes: [
      {
        objecao: "Minha conta é gratuita, por que eu deveria me preocupar?",
        resposta:
          "O conjunto essencial de serviços pode ser gratuito por regulação, mas pacotes opcionais e serviços eventuais ainda geram tarifas. Vale revisar o extrato para identificar cobranças desnecessárias e comparar com outras instituições.",
      },
      {
        objecao: "Prefiro manter dinheiro na conta para ter segurança e praticidade.",
        resposta:
          "É razoável ter liquidez, mas o saldo parado perde poder de compra. Uma alternativa é manter a reserva de emergência em aplicações com liquidez diária e apenas o essencial para gastos na conta.",
      },
    ],
    compliance: [
      "A instituição é obrigada a informar claramente as tarifas dos pacotes e serviços contratados.",
      "Clientes passam por procedimentos de identificação (PLD/FT) para abertura e manutenção da conta.",
      "O aconselhamento deve evitar a oferta de pacotes desnecessários ao perfil de uso do cliente.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "poupanca",
    name: "Poupança",
    category: "investimentos",
    concept:
      "Aplicação de renda fixa tradicional, regulada pelo Banco Central, isenta de Imposto de Renda e garantida pelo FGC. É um dos primeiros passos de quem começa a construir uma reserva financeira.",
    funcionamento:
      "O dinheiro depositado passa a render conforme a regra em vigor: quando a taxa Selic está acima de 8,5% ao ano, a remuneração é de 0,5% ao mês mais a variação da TR; quando a Selic está igual ou abaixo desse patamar, a remuneração passa a ser de 70% da Selic mais a TR. O rendimento é creditado mensalmente na data de aniversário da aplicação. O resgate pode ser feito a qualquer momento, mas, se ocorrer antes do aniversário do mês, o rendimento daquele período pode ser perdido.",
    publico:
      "Investidores iniciantes, reserva de emergência de curto prazo e perfis mais conservadores que priorizam segurança e isenção de imposto.",
    riscos: [
      "Risco de rentabilidade: em cenários de inflação alta, o rendimento pode não preservar o poder de compra.",
      "Risco de oportunidade: a remuneração costuma ficar abaixo de outras opções de renda fixa.",
      "Risco de crédito mitigado pela cobertura do FGC até o limite regulamentar.",
    ],
    liquidez:
      "Liquidez diária: o saque pode ser feito a qualquer momento, com a ressalva de que o rendimento é creditado na data de aniversário mensal da aplicação.",
    tributacao:
      "Isenta de Imposto de Renda para pessoa física. Não há come-cotas nem cobrança de IOF sobre o resgate.",
    garantias: [
      "Fundo Garantidor de Créditos (FGC) cobre até R$ 250 mil por CPF/CNPJ por instituição financeira.",
      "Regulação e supervisão do Banco Central do Brasil.",
    ],
    vantagens: [
      "Isenção de Imposto de Renda e de IOF.",
      "Alta liquidez e simplicidade de operação.",
      "Garantia do FGC até o limite regulamentar.",
    ],
    limitacoes: [
      "Rentabilidade frequentemente inferior a CDBs, LCIs/LCAs e títulos públicos com o mesmo prazo.",
      "Perda de poder de compra quando a inflação supera o rendimento.",
      "Regra de remuneração definida por legislação, sem possibilidade de negociação.",
    ],
    perguntasDiagnostico: [
      "Para qual objetivo você está guardando dinheiro na poupança?",
      "Esse valor faz parte da sua reserva de emergência ou de um objetivo de médio e longo prazo?",
      "Você já comparou a poupança com outras opções de renda fixa com liquidez diária?",
      "Você conhece o rendimento atual da sua aplicação e como ele se compara à inflação?",
    ],
    objecoes: [
      {
        objecao: "Poupança é segura e não paga imposto, prefiro manter tudo nela.",
        resposta:
          "A segurança e a isenção são reais, mas a rentabilidade pode ficar abaixo da inflação. Para objetivos de médio e longo prazo, outras rendas fixas cobertas pelo FGC ou títulos públicos podem render mais com risco controlado.",
      },
      {
        objecao: "Não quero me preocupar com investimentos.",
        resposta:
          "A poupança exige pouca atenção, o que é uma vantagem. O ponto é apenas dimensionar se o dinheiro está no produto certo para o objetivo, e isso pode ser avaliado em poucos minutos, sem compromisso.",
      },
    ],
    compliance: [
      "Deve-se verificar se o perfil de investidor é coerente com o horizonte do cliente.",
      "O aconselhamento deve explicar a regra de remuneração e comparar com alternativas adequadas.",
      "Não há teste de suitability obrigatório específico, mas a recomendação deve ser adequada ao objetivo declarado.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "cdb",
    name: "CDB (Certificado de Depósito Bancário)",
    category: "investimentos",
    concept:
      "Título de renda fixa emitido por bancos para captar recursos. O investidor empresta dinheiro à instituição e recebe, no vencimento, o valor corrigido por juros previamente combinados. É coberto pelo FGC até o limite regulamentar.",
    funcionamento:
      "O cliente aplica um valor por um prazo definido e escolhe a forma de remuneração: prefixada (taxa fixa), pós-fixada (atrelada a um índice, como o CDI) ou híbrida (parte fixa mais inflação, por exemplo). O rendimento incide sobre o capital aplicado e pode ser pago no vencimento ou de forma periódica, conforme o contrato. Alguns CDBs oferecem liquidez diária e outros exigem prazo de carência. A emissão é registrada em sistema autorizado pelo Banco Central.",
    publico:
      "Investidores de perfil conservador a moderado, com objetivo de rentabilizar recursos no curto, médio ou longo prazo, e que aceitam o risco de crédito do emissor, mitigado pelo FGC.",
    riscos: [
      "Risco de crédito: a instituição emissora pode não honrar o pagamento (mitigado pelo FGC até o limite).",
      "Risco de liquidez: CDBs sem liquidez diária prendem o recurso até o vencimento ou carência.",
      "Risco de mercado: em CDBs negociáveis no mercado secundário, o preço pode oscilar conforme os juros.",
      "Risco de oportunidade: resgates antecipados podem reduzir a rentabilidade efetiva.",
    ],
    liquidez:
      "Depende do contrato: CDBs com liquidez diária permitem resgate a qualquer momento; CDBs sem liquidez mantêm o recurso aplicado até o vencimento, e a venda antecipada no mercado secundário, quando existe, pode ocorrer com ajuste de preço.",
    tributacao:
      "Imposto de Renda regressivo sobre o rendimento: 22,5% para aplicações de até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias. Resgates em menos de 30 dias pagam IOF sobre o rendimento. Não há come-cotas em CDB; esse recolhimento é característico de fundos de investimento e planos de previdência.",
    garantias: [
      "Fundo Garantidor de Créditos (FGC) cobre até R$ 250 mil por CPF/CNPJ por instituição financeira, somando contas, CDBs e outros produtos cobertos.",
      "Regulação e supervisão do Banco Central do Brasil.",
    ],
    vantagens: [
      "Remuneração geralmente superior à poupança.",
      "Garantia do FGC até o limite regulamentar.",
      "Diversidade de prazos e formas de remuneração (pré, pós e híbrida).",
    ],
    limitacoes: [
      "Risco de crédito do emissor, ainda que mitigado pelo FGC.",
      "Tributação regressiva que favorece aplicações de prazo mais longo.",
      "CDBs sem liquidez não permitem resgate antecipado.",
    ],
    perguntasDiagnostico: [
      "Qual é o seu objetivo com esse dinheiro: reserva de emergência, compra planejada ou longo prazo?",
      "Você consegue manter o recurso aplicado até o vencimento ou precisa de liquidez diária?",
      "Como você avalia o risco de crédito da instituição emissora, além da cobertura do FGC?",
      "Qual a sua tolerância a ver o rendimento variar com as condições do mercado?",
    ],
    objecoes: [
      {
        objecao: "Se o banco quebrar, eu perco meu dinheiro.",
        resposta:
          "O FGC protege o aplicador até R$ 250 mil por CPF/CNPJ por instituição. Para valores acima disso, o aconselhamento recomenda diversificar entre emissores e considerar outras classes de ativo.",
      },
      {
        objecao: "CDB paga imposto, prefiro a poupança.",
        resposta:
          "Mesmo após o Imposto de Renda, CDBs de bancos sólidos costumam render mais que a poupança. A conta deve considerar o prazo, a taxa contratada e a inflação.",
      },
      {
        objecao: "Não quero dinheiro preso por muito tempo.",
        resposta:
          "Existem CDBs com liquidez diária para quem precisa de disponibilidade, com rentabilidade menor, porém geralmente superior à poupança.",
      },
    ],
    compliance: [
      "A recomendação deve considerar o perfil do investidor e o limite do FGC na instituição emissora.",
      "Rendimentos devem ser informados de forma clara, incluindo taxa, prazo, tributação e condições de liquidez.",
      "Para valores acima do limite de garantia, deve-se discutir a concentração e a diversificação.",
    ],
    sources: [
      { label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "lci",
    name: "LCI (Letra de Crédito Imobiliário)",
    category: "investimentos",
    concept:
      "Título de renda fixa emitido por instituições financeiras com lastro em operações de crédito imobiliário. Para pessoas físicas, o rendimento é isento de Imposto de Renda, o que o torna uma opção atrativa de renda fixa.",
    funcionamento:
      "A instituição emissora capta recursos para financiar operações imobiliárias e remunera o investidor com juros, que podem ser prefixados, pós-fixados (atrelados ao CDI ou outro índice) ou híbridos. O título exige prazo mínimo de carência previsto em legislação, atualmente de 90 dias, com exceções para determinadas emissões. O investidor recebe o rendimento no vencimento, salvo condições contratuais diferentes.",
    publico:
      "Investidores de perfil conservador a moderado que buscam rendimento isento de Imposto de Renda e aceitam manter o recurso aplicado até o vencimento.",
    riscos: [
      "Risco de crédito: o emissor pode não honrar o pagamento (mitigado pelo FGC até o limite).",
      "Risco de liquidez: a maioria das LCIs exige manutenção até o vencimento; o mercado secundário é limitado.",
      "Risco de mercado: quando há negociação, o preço pode variar conforme os juros.",
    ],
    liquidez:
      "Reduzida: o título exige prazo mínimo de carência e, na maior parte das emissões, o resgate só ocorre no vencimento. A venda antecipada depende de mercado secundário, que é pouco desenvolvido.",
    tributacao:
      "Isenta de Imposto de Renda para pessoa física, inclusive do come-cotas, por se tratar de título e não de fundo. A isenção é específica para investidores pessoas físicas.",
    garantias: [
      "Fundo Garantidor de Créditos (FGC) cobre até R$ 250 mil por CPF/CNPJ por instituição financeira.",
      "Lastro em operações de crédito imobiliário e registro em sistema autorizado pelo Banco Central.",
    ],
    vantagens: [
      "Isenção de Imposto de Renda para pessoa física.",
      "Garantia do FGC até o limite regulamentar.",
      "Rendimento geralmente competitivo frente a títulos tributados de prazo similar.",
    ],
    limitacoes: [
      "Prazo mínimo de carência e liquidez reduzida até o vencimento.",
      "Risco de crédito do emissor, ainda que mitigado pelo FGC.",
      "A isenção de IR se aplica apenas à pessoa física.",
    ],
    perguntasDiagnostico: [
      "Você consegue manter esse valor aplicado até o vencimento do título?",
      "Qual a sua expectativa em relação ao prazo e ao índice de remuneração?",
      "Você já avaliou se a isenção de IR compensa a menor liquidez frente a outras rendas fixas?",
    ],
    objecoes: [
      {
        objecao: "Não quero ficar sem o dinheiro por tanto tempo.",
        resposta:
          "Existem LCIs de prazos menores dentro da carência legal, mas a menor liquidez é a contrapartida da isenção. Para prazos curtos com necessidade de liquidez, outras rendas fixas podem ser mais adequadas.",
      },
      {
        objecao: "Não conheço a instituição emissora.",
        resposta:
          "O FGC protege até R$ 250 mil por CPF/CNPJ por instituição. Acima disso, vale diversificar entre emissores e avaliar a solidez de cada um.",
      },
    ],
    compliance: [
      "Verificar o perfil de investidor e a adequação do prazo ao objetivo declarado.",
      "Informar claramente a isenção de IR, o prazo mínimo e as condições de resgate.",
      "Discutir concentração quando o valor aplicado na instituição ultrapassar o limite do FGC.",
    ],
    sources: [
      { label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "lca",
    name: "LCA (Letra de Crédito do Agronegócio)",
    category: "investimentos",
    concept:
      "Título de renda fixa emitido por instituições financeiras com lastro em operações de crédito rural e do agronegócio. Para pessoas físicas, o rendimento é isento de Imposto de Renda.",
    funcionamento:
      "A instituição capta recursos para financiar produtores e cadeias do agronegócio e remunera o investidor com juros, em modalidade prefixada, pós-fixada ou híbrida. O título exige prazo mínimo de carência previsto em legislação, atualmente de 90 dias, com exceções para emissões específicas vinculadas ao financiamento rural. O rendimento é pago conforme o contrato, geralmente no vencimento.",
    publico:
      "Investidores de perfil conservador a moderado que buscam rendimento isento de imposto e aceitam manter o recurso aplicado por prazo mínimo.",
    riscos: [
      "Risco de crédito: o emissor pode não honrar o pagamento (mitigado pelo FGC até o limite).",
      "Risco de liquidez: resgate antecipado geralmente não é possível ou depende de mercado secundário.",
      "Risco de mercado: oscilação de preço quando há negociação secundária.",
    ],
    liquidez:
      "Reduzida: o título exige prazo mínimo de carência e, na maioria das emissões, o resgate ocorre apenas no vencimento.",
    tributacao:
      "Isenta de Imposto de Renda para pessoa física, inclusive do come-cotas, por se tratar de título e não de fundo. A isenção é específica para pessoas físicas.",
    garantias: [
      "Fundo Garantidor de Créditos (FGC) cobre até R$ 250 mil por CPF/CNPJ por instituição financeira.",
      "Lastro em operações de crédito do agronegócio e registro em sistema autorizado pelo Banco Central.",
    ],
    vantagens: [
      "Isenção de Imposto de Renda para pessoa física.",
      "Garantia do FGC até o limite regulamentar.",
      "Rendimento competitivo frente a títulos tributados de prazo similar.",
    ],
    limitacoes: [
      "Prazo mínimo de carência e baixa liquidez até o vencimento.",
      "Risco de crédito do emissor, ainda que mitigado pelo FGC.",
      "A isenção de IR se aplica apenas à pessoa física.",
    ],
    perguntasDiagnostico: [
      "Você pode manter o recurso aplicado até o vencimento ou precisa de liquidez?",
      "Qual índice de remuneração faz sentido para o seu objetivo: CDI, inflação ou taxa prefixada?",
      "Você já comparou a LCA com a LCI e com títulos públicos isentos ou tributados?",
    ],
    objecoes: [
      {
        objecao: "O que garante que o agronegócio vai pagar meu dinheiro?",
        resposta:
          "O que importa é a solvência do emissor do título, não a atividade econômica do lastro. O FGC cobre até R$ 250 mil por CPF/CNPJ por instituição, e o título tem lastro próprio registrado conforme a regulação.",
      },
      {
        objecao: "Não quero liquidez restrita.",
        resposta:
          "Se a liquidez diária é essencial, a LCA pode não ser o produto ideal. Nesse caso, outras rendas fixas com resgate diário são mais adequadas, ainda que tributadas.",
      },
    ],
    compliance: [
      "Verificar o perfil de investidor e o horizonte do cliente frente à carência legal.",
      "Informar claramente isenção, prazo mínimo, índice e condições de resgate.",
      "Discutir diversificação quando o valor na instituição ultrapassar o limite do FGC.",
    ],
    sources: [
      { label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "fundos-de-investimento",
    name: "Fundos de Investimento",
    category: "investimentos",
    concept:
      "Carteira coletiva formada pela comunhão de recursos de vários investidores, gerida profissionalmente por uma gestora, seguindo política de investimento definida em regulamento. São regulados pela CVM e distribuídos por instituições credenciadas.",
    funcionamento:
      "O investidor adquire cotas e passa a participar dos resultados da carteira, composta por títulos, ações, câmbio e outros ativos conforme o objetivo do fundo. O valor da cota é calculado pela gestora com base no patrimônio líquido. Existem fundos de renda fixa, multimercado, ações, cambiais e de crédito privado, entre outros. O investidor paga taxas como a de administração e, em alguns casos, a de performance, descritas no regulamento e no prospecto.",
    publico:
      "Investidores de diversos perfis, dependendo da classe do fundo, que buscam diversificação, gestão profissional ou acesso a mercados de complexidade maior.",
    riscos: [
      "Risco de mercado: oscilação dos ativos da carteira, mais intensa em fundos de renda variável.",
      "Risco de crédito: perdas caso os emissores de títulos da carteira não paguem.",
      "Risco de liquidez: o resgate pode não ser atendido em determinados cenários, conforme o regulamento.",
      "Risco de gestão: a estratégia adotada pode não alcançar o objetivo declarado.",
    ],
    liquidez:
      "Varia conforme o regulamento: a maioria oferece resgate em prazos que vão de D+0 a prazos mais longos. Fundos de crédito privado e de renda variável podem ter janelas e condições específicas.",
    tributacao:
      "Rendimentos sujeitos ao Imposto de Renda. Fundos de longo prazo seguem a tabela regressiva de 22,5% a 15%, com recolhimento antecipado de imposto (come-cotas) semestralmente, no último dia útil de maio e de novembro. Fundos de curto prazo pagam 20% sobre o rendimento no resgate e também sofrem come-cotas. O come-cotas é antecipação do imposto devido, descontado da cota.",
    garantias: [
      "Não há garantia do FGC: o patrimônio do fundo é separado do patrimônio da gestora e do custodiante.",
      "Fiscalização da CVM e regras de transparência obrigatórias (regulamento, prospecto, lâmina).",
    ],
    vantagens: [
      "Diversificação e gestão profissional de difícil replicação individual.",
      "Acesso a mercados, classes de ativos e estratégias variadas.",
      "Transparência regulatória e relatórios periódicos.",
    ],
    limitacoes: [
      "Cobrança de taxas que reduzem o rendimento líquido.",
      "Come-cotas antecipa parte do imposto em fundos de renda fixa e multimercado.",
      "Resultado depende da gestão e das condições de mercado, sem garantia de rentabilidade.",
    ],
    perguntasDiagnostico: [
      "Qual a sua experiência com investimentos e como você reage a oscilações de curto prazo?",
      "Para qual objetivo o recurso está sendo investido e qual o prazo esperado?",
      "Você prefere renda fixa, renda variável ou uma combinação?",
      "Como você avalia o impacto das taxas de administração e performance no rendimento?",
    ],
    objecoes: [
      {
        objecao: "Não entendo fundos, prefiro coisas mais simples.",
        resposta:
          "A gestão profissional é justamente uma das vantagens. É importante entender o regulamento, as taxas e o nível de risco antes de investir, e isso pode ser feito com orientação adequada ao seu perfil.",
      },
      {
        objecao: "Fundos têm muitas taxas.",
        resposta:
          "As taxas devem ser avaliadas em relação ao rendimento esperado e ao serviço entregue. Fundos com taxas menores e estratégias alinhadas ao seu objetivo costumam ser mais adequados.",
      },
      {
        objecao: "Já perdi dinheiro com fundo no passado.",
        resposta:
          "Fundos variam muito entre classes e gestões. O histórico de perda pode indicar que o fundo não era adequado ao seu perfil, e essa é a primeira questão a avaliar em uma nova indicação.",
      },
    ],
    compliance: [
      "Suitability obrigatório: a recomendação deve ser compatível com perfil, objetivo e experiência do cliente.",
      "Entrega de material informativo (lâmina e regulamento) e alerta de riscos.",
      "Transparência sobre taxas, come-cotas e condições de resgate antes da aplicação.",
    ],
    sources: [
      { label: "CVM", url: "https://www.gov.br/cvm/" },
      { label: "ANBIMA", url: "https://www.anbima.com.br/" },
    ],
  },
  {
    slug: "previdencia",
    name: "Previdência Complementar (PGBL e VGBL)",
    category: "previdencia",
    concept:
      "Planos de previdência complementar aberta, regulados pela SUSEP, que acumulam contribuições ao longo do tempo para formar um benefício de aposentadoria ou um resgate futuro. O PGBL e o VGBL se diferenciam pela forma de tributação e dedução.",
    funcionamento:
      "O participante faz contribuições que são investidas pela seguradora seguindo o perfil escolhido (renda fixa, multimercado, ações). O saldo forma uma provisão técnica que pode ser convertida em renda na aposentadoria ou resgatada. Os planos permitem portabilidade entre seguradoras e entre planos. A tributação é escolhida na contratação, entre a tabela progressiva e a regressiva, e a mudança é limitada a um período específico previsto na legislação.",
    publico:
      "Quem busca construir aposentadoria complementar de forma disciplinada, aproveitando eventuais benefícios fiscais, e aceita o prazo longo típico desse produto.",
    riscos: [
      "Risco de mercado: a rentabilidade depende dos ativos da carteira do plano.",
      "Risco de gestão: resultado depende da estratégia da seguradora.",
      "Risco de tributação: a tabela regressiva favorece prazos longos; resgates precoces sofrem alíquotas mais altas.",
      "Risco de liquidez: resgates podem ter prazos e condições definidos no contrato.",
    ],
    liquidez:
      "Reduzida em relação a aplicações de curto prazo: o plano é desenhado para longo prazo, e resgates antecipados podem sofrer tributação mais alta e condições contratuais de prazo.",
    tributacao:
      "Na tabela regressiva, a alíquota começa em 35% e cai com o tempo, chegando a 10% após 10 anos de aplicação. Na tabela progressiva, incide a tabela do Imposto de Renda, e a base tributável varia conforme o plano: no PGBL, a dedução das contribuições pode chegar a 12% da renda bruta tributável na declaração completa, com tributação sobre o valor total resgatado; no VGBL, não há dedução das contribuições e apenas o rendimento é tributado no resgate. Os planos de previdência aberta estão sujeitos ao come-cotas, recolhido trimestralmente, conforme a regra vigente.",
    garantias: [
      "Regulação e fiscalização da SUSEP, incluindo a constituição de provisões técnicas.",
      "Portabilidade entre planos e seguradoras, conforme regras vigentes.",
      "Não há garantia do FGC; o risco é da carteira de investimentos do plano.",
    ],
    vantagens: [
      "Possibilidade de dedução fiscal no PGBL (até 12% da renda bruta tributável).",
      "Tributação regressiva vantajosa para prazos acima de 10 anos.",
      "Disciplina de contribuição e portabilidade entre planos.",
      "Transmissão de valores aos beneficiários fora do inventário, conforme o regime tributário escolhido.",
    ],
    limitacoes: [
      "Come-cotas trimestral recolhe antecipadamente parte do imposto.",
      "Alíquotas iniciais da tabela regressiva são elevadas para resgates de curto prazo.",
      "Prazo longo é essencial para aproveitar o benefício fiscal e a redução de alíquota.",
    ],
    perguntasDiagnostico: [
      "Qual a sua idade e quanto tempo falta para a aposentadoria?",
      "Você declara Imposto de Renda na forma completa ou simplificada?",
      "Já contribui para o INSS ou possui outra previdência?",
      "Qual o valor que você consegue contribuir mensalmente sem comprometer o orçamento?",
    ],
    objecoes: [
      {
        objecao: "Não sei se vou precisar desse dinheiro antes da aposentadoria.",
        resposta:
          "Previdência é produto de longo prazo, e resgates precoces são penalizados. Se a liquidez de curto prazo é uma possibilidade real, parte da reserva deve ficar em outros investimentos.",
      },
      {
        objecao: "Prefiro investir por conta própria.",
        resposta:
          "Investir por conta própria é válido. A previdência agrega disciplina, benefício fiscal e proteção tributária, que devem ser comparados com a estratégia independente antes de decidir.",
      },
      {
        objecao: "O come-cotas reduz meu rendimento.",
        resposta:
          "O come-cotas é antecipação de imposto, não imposto extra. O efeito deve ser comparado ao benefício fiscal e à redução de alíquota ao longo do tempo.",
      },
    ],
    compliance: [
      "Análise da situação fiscal do cliente (declaração completa ou simplificada) para indicar PGBL ou VGBL.",
      "Verificação do perfil de risco e do horizonte de contribuição antes da contratação.",
      "Apresentação clara de taxas, tabelas de tributação, carências e condições de resgate.",
    ],
    sources: [{ label: "SUSEP", url: "https://www.gov.br/susep/" }],
  },
  {
    slug: "seguro-de-vida",
    name: "Seguro de Vida",
    category: "seguros",
    concept:
      "Contrato de proteção financeira que garante o pagamento de um capital ao beneficiário em caso de morte do segurado, podendo também cobrir invalidez e outras contingências. É regulado pela SUSEP.",
    funcionamento:
      "O segurado paga um prêmio, periódico ou único, e a seguradora assume o risco coberto pela apólice, que define as coberturas, o capital segurado, a carência e as exclusões. Em caso de sinistro, o beneficiário indicado recebe a indenização. Os planos podem ser temporários (cobertura por prazo definido) ou vitalícios, com cobertura por toda a vida do segurado.",
    publico:
      "Pessoas com dependentes financeiros, que buscam proteger a renda familiar contra o impacto da morte, invalidez ou doenças graves.",
    riscos: [
      "Risco de exclusão: declarações incorretas de saúde ou omissões podem levar à recusa do pagamento.",
      "Risco de carência: alguns sinistros, como morte natural, podem não ser cobertos dentro do período de carência.",
      "Risco de perda de cobertura: a falta de pagamento do prêmio pode suspender ou cancelar a apólice.",
      "Risco de inadequação: cobertura subdimensionada pode não atender às necessidades da família.",
    ],
    liquidez:
      "Não é produto de investimento: não há resgate financeiro, exceto em planos com componente de sobrevivência ou resgate contratual, conforme as condições da apólice.",
    tributacao:
      "O capital recebido pelo beneficiário em caso de morte é isento de Imposto de Renda, conforme a regra vigente. Os prêmios pagos não são dedutíveis na declaração da pessoa física, exceto em casos específicos previstos em legislação.",
    garantias: [
      "Regulação e fiscalização da SUSEP, incluindo a exigência de provisões técnicas.",
      "Coberturas e direitos do segurado definidos nas condições gerais da apólice.",
      "Não há garantia do FGC; a proteção é garantida pela solvência da seguradora e pela regulação.",
    ],
    vantagens: [
      "Proteção financeira imediata para dependentes.",
      "Capital isento de IR para os beneficiários em caso de morte.",
      "Contratação simples e prêmio compatível com diferentes orçamentos.",
      "Possibilidade de incluir coberturas de invalidez, doenças graves e assistência.",
    ],
    limitacoes: [
      "Não é produto de rentabilidade: o objetivo é proteção, não retorno financeiro.",
      "Carências e exclusões exigem leitura atenta das condições gerais.",
      "Prêmio pode aumentar ou a cobertura renovar em condições diferentes em planos anuais.",
    ],
    perguntasDiagnostico: [
      "Você tem dependentes que dependem da sua renda?",
      "Quanto da renda familiar ficaria desprotegido em caso de morte ou invalidez?",
      "Você possui dívidas ou compromissos que precisariam ser quitados com a sua ausência?",
      "Quanto você pode comprometer mensalmente com proteção sem prejudicar o orçamento?",
    ],
    objecoes: [
      {
        objecao: "Seguro de vida é dinheiro jogado fora.",
        resposta:
          "É uma proteção, não um investimento: a indenização protege a renda de quem depende de você. O valor deve ser dimensionado conforme a necessidade, e não vendido como produto de retorno.",
      },
      {
        objecao: "Sou jovem e saudável, não preciso disso.",
        resposta:
          "A contratação jovem tende a ter prêmio menor e menores restrições de saúde. A necessidade de proteção está ligada a dependentes e compromissos, não apenas à idade.",
      },
      {
        objecao: "Minha empresa já me dá seguro de vida.",
        resposta:
          "O seguro oferecido pela empresa costuma ser limitado e vinculado ao vínculo empregatício. Vale avaliar se a cobertura cobre as necessidades da família em caso de perda do emprego.",
      },
    ],
    compliance: [
      "Indicação baseada nas necessidades reais de proteção do cliente, com dimensionamento do capital.",
      "Transparência sobre carências, exclusões, prêmio e condições de renovação.",
      "Confirmação de que o cliente entende a natureza do produto (proteção, não investimento).",
    ],
    sources: [{ label: "SUSEP", url: "https://www.gov.br/susep/" }],
  },
  {
    slug: "cartao-de-credito",
    name: "Cartão de Crédito",
    category: "credito",
    concept:
      "Meio de pagamento que oferece crédito rotativo ao portador: as compras são pagas posteriormente, com opção de pagamento integral da fatura ou parcelamento. O pagamento integral evita a incidência de juros.",
    funcionamento:
      "O banco concede um limite de crédito e o cliente utiliza o cartão em compras e saques. A fatura vence mensalmente e pode ser paga de forma integral, com parcelamento ou com o pagamento mínimo, que aciona o crédito rotativo. O crédito rotativo tem juros limitados por teto legal, que não podem superar o valor da dívida original, e deve ser usado apenas pontualmente. O cliente também pode transferir o saldo parcelado para outra instituição (portabilidade de crédito).",
    publico:
      "Consumidores que desejam conveniência de pagamento, uso do crédito de curto prazo e proteção em compras, desde que mantenham o pagamento integral da fatura.",
    riscos: [
      "Risco de endividamento: juros do rotativo e do parcelamento são elevados e podem comprometer o orçamento.",
      "Risco de fraude: uso indevido dos dados do cartão em compras não reconhecidas.",
      "Risco de inadimplência: o não pagamento da fatura gera encargos e negativação.",
      "Risco de superendividamento pelo uso recorrente do crédito para despesas de consumo.",
    ],
    liquidez:
      "Não se aplica como produto de investimento: o limite de crédito é uma disponibilidade de pagamento, não um recurso investido.",
    tributacao:
      "Não incide Imposto de Renda sobre o uso do limite. Sobre operações de crédito vinculadas ao cartão (rotativo e parcelado) podem incidir encargos e IOF conforme a regra vigente. Tarifas como anuidade devem ser informadas no contrato.",
    garantias: [
      "Regulação do Banco Central, incluindo regras de transparência e o teto legal do rotativo.",
      "Possibilidade de portabilidade do saldo parcelado entre instituições.",
      "Mecanismos de contestação de compras não reconhecidas previstos nas regras das bandeiras e na regulação.",
    ],
    vantagens: [
      "Conveniência e segurança no pagamento, com prazo para quitar a fatura sem juros.",
      "Pagamento integral evita encargos e possibilita benefícios e programas de recompensa.",
      "Transparência obrigatória de taxas, encargos e CET.",
    ],
    limitacoes: [
      "Juros elevados quando a fatura não é paga integralmente.",
      "Teto legal limita o acúmulo de juros, mas não elimina o risco de endividamento.",
      "Anuidade e tarifas podem ser cobradas conforme o contrato.",
    ],
    perguntasDiagnostico: [
      "Você paga a fatura integralmente todo mês ou costuma parcelar ou pagar o mínimo?",
      "Quanto do seu limite você utiliza, em média, por mês?",
      "Você usa o cartão para gastos do dia a dia ou para financiar compras de maior valor?",
      "Você conhece os juros do rotativo e o valor total que pagaria se atrasasse a fatura?",
    ],
    objecoes: [
      {
        objecao: "Cartão é caro e cria dívida.",
        resposta:
          "O cartão só gera juros quando a fatura não é paga integralmente. Usado como meio de pagamento, ele oferece conveniência sem custo financeiro, desde que o uso seja disciplinado.",
      },
      {
        objecao: "Meu limite é baixo.",
        resposta:
          "O limite deve ser compatível com a renda e o histórico. Um limite maior não é vantagem se incentivar gastos além do planejado.",
      },
      {
        objecao: "Prefiro pagar tudo à vista.",
        resposta:
          "Pagamento à vista é prudente. O cartão pode ser útil por conveniência, segurança e prazo de carência, se você continuar honrando o pagamento integral.",
      },
    ],
    compliance: [
      "Avaliação da capacidade de pagamento antes de conceder ou elevar limite.",
      "Transparência sobre taxas, encargos, rotativo, parcela mínima e CET.",
      "Orientação sobre o uso consciente e sobre o teto legal do rotativo.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "credito-pessoal",
    name: "Crédito Pessoal",
    category: "credito",
    concept:
      "Empréstimo de valor pré-determinado, sem necessidade de destinação específica dos recursos, pago em parcelas fixas ao longo de um prazo combinado. É uma das formas mais comuns de crédito para consumo.",
    funcionamento:
      "O cliente contrata um valor que é liberado em conta e paga em parcelas mensais, com juros que podem ser prefixados ou pós-fixados. A modalidade consignada desconta as parcelas diretamente da folha de pagamento ou benefício, o que tende a reduzir os juros. O contrato deve apresentar o CET, que reúne juros, tarifas, tributos e demais despesas em um único percentual, para permitir a comparação entre ofertas.",
    publico:
      "Pessoas que precisam de recursos para quitar dívidas, realizar compras ou enfrentar emergências, incluindo aposentados, servidores e assalariados que buscam o consignado.",
    riscos: [
      "Risco de superendividamento: comprometer parcela excessiva da renda reduz a margem para despesas e imprevistos.",
      "Risco de inadimplência: o não pagamento gera encargos e negativação do nome.",
      "Risco de custo: juros elevados, especialmente em crédito pessoal não consignado.",
      "Risco de contratação indevida ou fraude em operações realizadas de forma não autorizada.",
    ],
    liquidez:
      "Não se aplica como investimento: o crédito é um passivo, e a obrigação de pagamento das parcelas é fixada em contrato.",
    tributacao:
      "Incide IOF sobre as operações de crédito, conforme a regra vigente. Os juros pagos não são dedutíveis no Imposto de Renda da pessoa física.",
    garantias: [
      "No consignado, o desconto em folha ou benefício funciona como garantia e costuma reduzir o custo do crédito.",
      "Crédito pessoal tradicional pode incluir aval, fiador ou garantia de bem, conforme o contrato.",
      "Regulação do Banco Central com regras de transparência do CET.",
    ],
    vantagens: [
      "Desembolso rápido e sem necessidade de apresentar finalidade específica.",
      "Parcelas fixas facilitam o planejamento do orçamento.",
      "No consignado, juros geralmente menores e desconto automático.",
    ],
    limitacoes: [
      "Juros elevados em modalidades sem garantia.",
      "IOF e tarifas aumentam o custo efetivo da operação.",
      "Compromete a renda futura por todo o prazo do contrato.",
    ],
    perguntasDiagnostico: [
      "Para que finalidade você precisa do crédito?",
      "Qual o valor da parcela que cabe no seu orçamento sem comprometer outras despesas?",
      "Você já comparou o CET entre diferentes ofertas, incluindo o consignado?",
      "Há alguma forma de antecipar o pagamento sem penalidades, caso sua situação melhore?",
    ],
    objecoes: [
      {
        objecao: "Preciso do dinheiro já, quero a liberação imediata.",
        resposta:
          "A pressa aumenta o risco de contratar condições ruins. Comparar o CET entre ofertas e checar a capacidade de pagamento evita que o crédito resolva um problema e crie outro.",
      },
      {
        objecao: "A parcela cabe no meu bolso, posso contratar o valor máximo.",
        resposta:
          "A parcela precisa caber no orçamento com folga para imprevistos. Comprometer o valor máximo da margem reduz sua segurança financeira.",
      },
      {
        objecao: "Crédito consignado é mais barato, quero o máximo possível.",
        resposta:
          "Consignado costuma ser mais barato, mas ainda é dívida. O valor deve ser dimensionado pela necessidade real, e não pelo limite disponível.",
      },
    ],
    compliance: [
      "Obrigação de apresentar o CET completo antes da contratação.",
      "Avaliação de capacidade de pagamento e alerta sobre comprometimento de renda.",
      "Verificação de autenticidade e autorização na contratação para prevenir fraudes.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "financiamento-imobiliario",
    name: "Financiamento Imobiliário",
    category: "credito",
    concept:
      "Crédito de longo prazo destinado à aquisição, construção ou reforma de imóvel, tendo o próprio imóvel como garantia. Permite comprar um bem de alto valor com pagamento parcelado e, muitas vezes, uso do FGTS.",
    funcionamento:
      "O banco financia uma parcela do valor do imóvel e o comprador paga o restante como entrada. O imóvel fica alienado fiduciariamente à instituição até a quitação. As parcelas podem ser calculadas pelo sistema SAC, com amortização decrescente e parcelas iniciais maiores, ou pelo sistema Price, com parcelas constantes. O contrato prevê índice de correção (como TR ou IPCA) e taxa de juros. O CET é o indicador mais importante de comparação, pois reúne juros, tarifas, seguros e demais despesas do crédito.",
    publico:
      "Pessoas que buscam a casa própria, constroem ou reformam imóveis e têm renda estável e planejamento de longo prazo.",
    riscos: [
      "Risco de inadimplência: o não pagamento pode levar à perda do imóvel pela alienação fiduciária.",
      "Risco de taxa de juros e indexação: parcelas podem variar com o índice de correção ao longo do contrato.",
      "Risco de comprometimento de renda por prazo muito longo.",
      "Risco de desvalorização do imóvel em relação ao saldo devedor.",
    ],
    liquidez:
      "Não se aplica como investimento: o financiamento é um passivo de longo prazo. A venda do imóvel antes da quitação envolve a liquidação do saldo devedor e custos de transação.",
    tributacao:
      "Os juros do financiamento não são dedutíveis no Imposto de Renda da pessoa física. O custo total inclui ainda despesas como avaliação, ITBI e registro, que não fazem parte do CET do crédito. O CET, porém, deve incluir todas as taxas, tarifas e despesas da operação de crédito.",
    garantias: [
      "Alienação fiduciária: o imóvel financia a própria garantia da operação.",
      "Seguro habitacional obrigatório (por exemplo, coberturas de morte e invalidez e danos físicos ao imóvel).",
      "Possibilidade de uso do FGTS e de redução de saldo devedor em condições previstas em regra.",
    ],
    vantagens: [
      "Permite adquirir imóvel com entrada reduzida e prazo longo de pagamento.",
      "Possibilidade de uso do FGTS na entrada e amortização.",
      "Parcelas previsíveis conforme o sistema de amortização escolhido.",
    ],
    limitacoes: [
      "Comprometimento de renda por muitos anos.",
      "Encargos e correção podem aumentar o custo total do imóvel.",
      "Perda do imóvel em caso de inadimplência.",
    ],
    perguntasDiagnostico: [
      "Qual o valor do imóvel e qual a sua capacidade de entrada?",
      "Como você pretende pagar: SAC, Price ou outra forma? Qual o impacto no orçamento?",
      "Você já comparou o CET de diferentes instituições, e não apenas a taxa de juros?",
      "Você tem estabilidade de renda para sustentar as parcelas por todo o prazo?",
    ],
    objecoes: [
      {
        objecao: "O banco fala só da taxa, mas as parcelas parecem diferentes.",
        resposta:
          "É exatamente por isso que o CET existe: ele reúne juros, tarifas, seguros e despesas em um único percentual. Comparar apenas a taxa nominal pode esconder custos que alteram a parcela.",
      },
      {
        objecao: "Prefiro alugar, financiamento é caro.",
        resposta:
          "Alugar tem a vantagem da flexibilidade. A decisão deve comparar o custo total do financiamento, a valorização esperada e o perfil de vida de quem compra.",
      },
      {
        objecao: "O prazo de 30 anos é muito longo.",
        resposta:
          "O prazo longo reduz a parcela, mas aumenta o custo total. Amortizações extraordinárias, quando permitidas, encurtam o prazo e reduzem os juros pagos.",
      },
    ],
    compliance: [
      "Apresentação obrigatória e clara do CET antes da assinatura.",
      "Simulação realista considerando renda, comprometimento e prazo.",
      "Orientação sobre as cláusulas de alienação fiduciária e os riscos da inadimplência.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "consorcio",
    name: "Consórcio",
    category: "credito",
    concept:
      "Sistema de poupança coletiva em que um grupo de pessoas contribui mensalmente para formar um fundo comum. Os participantes são contemplados ao longo do tempo para adquirir um bem ou serviço, sem incidência de juros.",
    funcionamento:
      "Os consorciados pagam mensalidades compostas pela parcela do bem, pela taxa de administração e pelo fundo de reserva. A cada assembleia, um ou mais participantes são contemplados por sorteio ou por lance (oferta de antecipação de parcelas), recebendo crédito para a aquisição do bem. A contemplação é determinada por regras do grupo e da administradora. A taxa de administração varia conforme a administradora e o grupo, e não há cobrança de juros sobre o crédito.",
    publico:
      "Pessoas com disciplina de poupança que desejam adquirir bem de maior valor, como imóvel, veículo ou equipamento, aceitando a incerteza quanto ao prazo de contemplação.",
    riscos: [
      "Risco de prazo: a contemplação depende de sorteio ou lance e não tem data garantida.",
      "Risco de desistência: a desistência pode gerar perdas, como multas e valores de entrada do grupo.",
      "Risco de atraso: a falta de pagamento pode levar à exclusão do grupo com perdas.",
      "Risco do bem: o preço do bem pode variar entre a entrada e a contemplação.",
    ],
    liquidez:
      "Reduzida: os valores pagos formam um crédito que só se torna utilizável com a contemplação. A desistência devolve o saldo conforme regras do grupo, com possíveis descontos.",
    tributacao:
      "Não incide Imposto de Renda sobre a contemplação em si, por não se tratar de rendimento. A taxa de administração é a remuneração da administradora. Em aquisições do bem podem incidir tributos próprios, como IPVA ou ITBI.",
    garantias: [
      "Regulação e fiscalização do Banco Central sobre as administradoras.",
      "Fundo de reserva do grupo, formado por contribuições dos consorciados para equilibrar o grupo.",
      "Crédito garantido pelo valor pago, sem incidência de juros.",
    ],
    vantagens: [
      "Sem juros sobre o crédito, ao contrário de financiamentos.",
      "Disciplina de poupança forçada.",
      "Possibilidade de contemplação antecipada por lance para quem pode acelerar.",
    ],
    limitacoes: [
      "Incerteza quanto ao prazo de contemplação.",
      "Taxa de administração incide por todo o período do grupo.",
      "Inadimplência pode gerar exclusão com perdas financeiras.",
    ],
    perguntasDiagnostico: [
      "Você tem urgência em receber o bem ou pode aguardar o sorteio?",
      "Você consegue manter as mensalidades em dia por todo o grupo?",
      "Você comparou a taxa de administração e as regras de lance entre administradoras?",
      "Qual a sua expectativa de lance, considerando sua capacidade de antecipar parcelas?",
    ],
    objecoes: [
      {
        objecao: "Consórcio demora e não sei quando vou ser contemplado.",
        resposta:
          "É verdade: a contemplação não tem prazo garantido. Se o prazo é determinante, um financiamento ou poupança programada podem ser mais adequados, ainda que com juros.",
      },
      {
        objecao: "A taxa de administração encarece o bem.",
        resposta:
          "A taxa de administração existe, mas não há juros. O custo total deve ser comparado com o de um financiamento equivalente para decidir com base no custo efetivo.",
      },
      {
        objecao: "Prefiro juntar o dinheiro por conta própria.",
        resposta:
          "Guardar por conta própria exige disciplina e rendimento. O consórcio impõe o compromisso mensal e evita o uso do recurso para outros fins, mas vale comparar a rentabilidade da poupança individual.",
      },
    ],
    compliance: [
      "Apresentação clara da taxa de administração, do fundo de reserva e das regras de contemplação.",
      "Orientação sobre os riscos de desistência e inadimplência antes da adesão.",
      "Verificação da idoneidade da administradora e das condições do grupo.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "cambio",
    name: "Câmbio",
    category: "cambio",
    concept:
      "Operações de compra e venda de moeda estrangeira, utilizadas para viagens, remessas, comércio internacional e diversificação de patrimônio. A taxa de câmbio é definida pelo mercado e divulgada como referência pelo Banco Central.",
    funcionamento:
      "O cliente compra ou vende moeda estrangeira por meio de bancos e corretoras autorizadas, em modalidades como dinheiro em espécie, cartão pré-pago, transferências e contas em moeda estrangeira. A taxa final embute a cotação de mercado e o spread da instituição, que varia conforme a modalidade e as condições da operação. A taxa PTAX, divulgada pelo Banco Central, é usada como referência oficial. As operações exigem identificação do cliente e o cumprimento de regras de prevenção à lavagem de dinheiro.",
    publico:
      "Pessoas que viajam ao exterior, fazem remessas familiares, pagam serviços internacionais ou buscam diversificar parte do patrimônio em moeda estrangeira.",
    riscos: [
      "Risco cambial: a cotação varia conforme o mercado, podendo desvalorizar o valor convertido.",
      "Risco de spread: a diferença entre compra e venda cobrada pela instituição aumenta o custo da operação.",
      "Risco de fraude: golpes envolvendo câmbio e remessas não autorizadas.",
      "Risco de custo: tarifas e IOF variam conforme a modalidade e a regra vigente.",
    ],
    liquidez:
      "Alta: a conversão pode ser feita a qualquer momento em instituições autorizadas, mas o custo da operação (spread e tributos) reduz o valor efetivo convertido.",
    tributacao:
      "As operações de câmbio estão sujeitas ao IOF, com alíquotas que variam conforme a modalidade (espécie, cartão pré-pago, cartão de crédito internacional, remessas) e a regra vigente. Ganhos auferidos por pessoa física com variação cambial podem estar sujeitos à tributação conforme a legislação do Imposto de Renda.",
    garantias: [
      "Regulação e fiscalização do Banco Central sobre bancos e corretoras de câmbio autorizados.",
      "Regras de identificação e registro das operações para prevenção à lavagem de dinheiro.",
      "Não há garantia do FGC sobre valores em moeda estrangeira.",
    ],
    vantagens: [
      "Possibilidade de diversificação e proteção contra a desvalorização da moeda local.",
      "Múltiplas modalidades para diferentes necessidades, como viagem e remessas.",
      "Referência oficial (PTAX) que permite comparar o custo entre instituições.",
    ],
    limitacoes: [
      "Exposição à volatilidade da taxa de câmbio.",
      "Custo de spread e tributos que podem ser elevados conforme a modalidade.",
      "Limites e exigências documentais nas operações.",
    ],
    perguntasDiagnostico: [
      "Qual é a finalidade da operação: viagem, remessa, pagamento ou investimento?",
      "Em qual prazo você precisa dos recursos e em qual moeda?",
      "Você comparou a taxa e o spread entre mais de uma instituição autorizada?",
      "O valor movimentado cabe no seu orçamento considerando os custos da operação?",
    ],
    objecoes: [
      {
        objecao: "A taxa de câmbio muda a cada dia, não sei o melhor momento.",
        resposta:
          "Ninguém prevê a cotação com segurança. A decisão deve considerar a necessidade da operação e o custo total (taxa mais spread e tributos), comparando ofertas em instituições autorizadas.",
      },
      {
        objecao: "Cartão de crédito internacional é mais simples que comprar moeda.",
        resposta:
          "É prático, mas envolve spread e tributos próprios, que podem tornar a operação mais cara. Comparar as modalidades conforme o destino e o uso evita custos desnecessários.",
      },
      {
        objecao: "Quero guardar dólar para o futuro.",
        resposta:
          "Manter moeda estrangeira diversifica, mas também expõe ao risco cambial. É importante definir o objetivo e o horizonte antes de converter valores.",
      },
    ],
    compliance: [
      "Obrigação de operar apenas com instituições autorizadas pelo Banco Central.",
      "Identificação do cliente e registro da operação conforme as regras de prevenção à lavagem de dinheiro.",
      "Informação clara sobre a taxa aplicada, o spread e os tributos envolvidos.",
    ],
    sources: [{ label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" }],
  },
  {
    slug: "tesouro-direto",
    name: "Tesouro Direto",
    category: "investimentos",
    concept:
      "Programa do Tesouro Nacional que permite a compra de títulos públicos federais diretamente por pessoas físicas, pela internet, com custódia na B3. É considerado a aplicação de renda fixa de menor risco de crédito do país, por ser garantida pela União.",
    funcionamento:
      "O investidor acessa o programa por uma instituição financeira credenciada e compra frações de títulos públicos. Os principais são o Tesouro Selic (pós-fixado, atrelado à Selic), o Tesouro Prefixado (taxa definida na compra) e o Tesouro IPCA+ (parte fixa mais inflação). O valor mínimo de aplicação é baixo e a compra pode ser parcial. Os títulos têm marcação a mercado: se vendidos antes do vencimento, o preço pode variar conforme os juros, com menor oscilação no Tesouro Selic.",
    publico:
      "Investidores conservadores a moderados, com diferentes objetivos e prazos, que buscam renda fixa com risco de crédito muito baixo e acessível.",
    riscos: [
      "Risco de mercado: títulos vendidos antes do vencimento podem ter preço inferior ao pago, sobretudo prefixados e IPCA+.",
      "Risco de rentabilidade: em títulos prefixados, a inflação pode superar o rendimento contratado.",
      "Risco de liquidez: há prazo para o resgate após a venda do título, conforme as regras do programa.",
    ],
    liquidez:
      "Boa liquidez: é possível vender títulos antes do vencimento em dias úteis, com prazo de disponibilização dos recursos conforme a regra vigente. O Tesouro Selic tem menor volatilidade; prefixados e IPCA+ podem oscilar mais antes do vencimento.",
    tributacao:
      "Imposto de Renda regressivo da renda fixa: 22,5% até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias, sobre o rendimento. Resgates em menos de 30 dias pagam IOF sobre o rendimento. O Tesouro IPCA+ paga juros semestrais, sobre os quais também incidem IR e IOF conforme o prazo. Não há come-cotas por se tratar de título, e não de fundo.",
    garantias: [
      "Garantia do Tesouro Nacional: os títulos são lastreados na União, o que representa o menor risco de crédito do mercado brasileiro.",
      "Custódia na B3 e regulação do programa pelo Tesouro Nacional e pela CVM.",
    ],
    vantagens: [
      "Baixo risco de crédito, por ser dívida do Tesouro Nacional.",
      "Aplicação inicial acessível e compra de frações de título.",
      "Diversidade de títulos: pós-fixado, prefixado e híbrido (IPCA+).",
      "Rendimento competitivo e isenção de tarifas de custódia para acessos até o limite vigente.",
    ],
    limitacoes: [
      "Marcação a mercado pode gerar perdas temporárias em vendas antecipadas.",
      "Imposto de Renda e IOF sobre o rendimento, conforme a regra vigente.",
      "Não há garantia do FGC, mas o risco de crédito é soberano.",
    ],
    perguntasDiagnostico: [
      "Qual é o seu objetivo: reserva de emergência, um projeto de prazo definido ou aposentadoria?",
      "Você pretende manter o título até o vencimento ou pode precisar vender antes?",
      "Como você prefere receber o retorno: atrelado à Selic, taxa prefixada ou inflação mais juros?",
      "Você já avaliou o efeito da marcação a mercado no caso de venda antecipada?",
    ],
    objecoes: [
      {
        objecao: "Se o Brasil quebrar, eu perco tudo.",
        resposta:
          "O Tesouro é a dívida do governo federal, o risco de crédito mais baixo do mercado doméstico. O ponto a avaliar é o prazo e a modalidade do título, não a capacidade do emissor.",
      },
      {
        objecao: "Já vi gente perder dinheiro no Tesouro.",
        resposta:
          "Perdas acontecem quando o título é vendido antes do vencimento, pela marcação a mercado. Para quem mantém até o vencimento, o rendimento contratado é pago. O Tesouro Selic é a opção de menor oscilação.",
      },
      {
        objecao: "Prefiro a segurança da poupança.",
        resposta:
          "A poupança tem FGC, mas o Tesouro tem risco soberano e rentabilidade potencialmente maior. Comparar os dois considerando prazo e tributação mostra qual é mais adequado ao seu objetivo.",
      },
    ],
    compliance: [
      "Verificação do perfil de investidor e do prazo do objetivo antes da recomendação.",
      "Esclarecimento sobre marcação a mercado e o comportamento de cada tipo de título.",
      "Informação clara sobre tributação, resgate e prazos do programa.",
    ],
    sources: [
      { label: "Tesouro Direto", url: "https://www.tesourodireto.com.br/" },
      { label: "B3", url: "https://www.b3.com.br/" },
    ],
  },
];
