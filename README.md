# Agente Financeiro Autônomo

### O copiloto que transforma o caos da mesa em uma conversa que vende.

> **O radar está aberto. A Selic virou. A curva de DI reprecificou. E o seu cliente pergunta: "o que isso significa para mim?" — você tem 30 segundos para responder.**

Se essa cena é familiar, este projeto foi desenhado para você.

---

## O problema (que você conhece muito bem)

Quem trabalha com mercado financeiro não precisa só de dados. Precisa de **significado** — e de **rapidez**.

Hoje você tem:

- 12 abas abertas (BCB, IBGE, B3, Tesouro, ANBIMA…);
- alertas que se acumulam e **nenhum contexto**;
- jargão que você domina, mas precisa traduzir **agora**, para o cliente que fala a língua do dia a dia;
- e o dilema de sempre: explicar o que mudou **sem prometer rentabilidade** — mas com argumento, benefício e fonte oficial para sustentar a conversa.

O dia não perdoa. O cliente não espera.

---

## A solução: um agente que vigia, explica e vende por você

**Agente Financeiro Autônomo** é um portal que **unifica e centraliza** a informação que o operador do mercado financeiro precisa todos os dias — mercado, juros, inflação, crédito, câmbio, produtos — e traduz tudo em **conversa consultiva**.

Não é mais um site de notícias. É um **copiloto de venda consultiva**.

### O que ele faz por você:

- **🗺️ Radar ao vivo** — 22 indicadores oficiais centralizados. Oito deles em tempo real direto da API SGS do Banco Central (Selic, CDI, IPCA, IPCA-15, IGP-M, Dólar, Euro e Inadimplência PF), com variação, série histórica e fonte oficial em cada card. Quando a fonte cai, o portal **mostra honestamente** que não há dado — nunca inventa número.
- **💬 Do indicador à conversa** — cada indicador vira roteiro: o impacto econômico, o impacto nos investimentos, no crédito e no relacionamento, a pergunta para abrir o diagnóstico e a fonte para o cliente conferir.
- **🎯 Glossário que vende** — pergunte "o que é CDB?" e receba, além da explicação em 30 segundos, um **roteiro consultivo transparente**: benefícios que importam, conexão com o futuro da família e o longo prazo, perguntas de diagnóstico e como responder à objeção mais comum. Tudo com orientação limpa, sem promessa de retorno.
- **🔁 Tradutor de jargão** — "DI futuro subiu 20 pontos-base" vira linguagem de cliente em segundos, com o que observar e o gancho comercial.
- **📚 Base de conhecimento completa** — 62 termos de glossário, 46 FAQs, 20 guias em 3 níveis (30 segundos, visão do profissional, aprofundamento técnico) e 14 produtos com fichas consultivas completas.
- **🤖 IA opcional e sinalizada** — responde primeiro pela base de conhecimento; IA generativa entra quando necessário e **é sempre rotulada**, com instrução explícita de nunca inventar fontes.
- **🔌 API REST pronta** — `/api/radar`, `/api/explique`, `/api/tradutor`, `/api/chat`, `/api/health`. Dá para embutir o copiloto em qualquer fluxo.

### O princípio que sustenta tudo

> **Nada de números inventados. Nunca.**
>
> Todo valor aponta para a fonte oficial (Banco Central, IBGE, B3, Tesouro Nacional, ANBIMA, CVM, SUSEP). Fonte indisponível? O card assume o status `referência` ou `sem dados` — e a confiança do cliente segue intacta. É assim que uma conversa consultiva vira um relacionamento de longo prazo.

---

## Para quem é

- **Operadores de mercado** que precisam de contexto em 30 segundos;
- **Profissionais bancários e assessores** que transformam informação em venda consultiva;
- **Estudantes e curiosos** que querem entender o mercado falando a língua do profissional.

---

## 🚀 Quer testar agora?

[![Deploy para o Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/samnetodev/agente-financeiro-autonomo)

Um clique, entre com o GitHub, e o Render lê o `render.yaml` do repositório — build, banco e health check configurados. Em minutos o portal está no ar com o radar ao vivo da API do Banco Central.

> **No plano grátis do Render**, o serviço dorme após ~15 min sem acesso e acorda na primeira visita (30–60s). O SQLite é efêmero: dados ao vivo e o portal funcionam normalmente; apenas mensagens do chat não persistem entre *redeploys*.

---

## O que tem por trás (a honestidade que o projeto pede)

Este é um **projeto teste**, construído **com a intermediação de IA — o [opencode](https://opencode.ai)**, a partir de uma instrução clara: *"sane uma dor do dia a dia de operadores do mercado financeiro, unificando e centralizando as informações pertinentes à rotina de trabalho"*.

Ou seja: foi escrito para resolver um problema real, mas **não é um produto comercial final**. É um experimento — funcional, bonito e com dados reais — para mostrar o que é possível. O código é aberto, o conteúdo é educacional e a arquitetura foi pensada para crescer.

Se você quer ver o copiloto do bancário em ação, o convite é simples:

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Abra `http://localhost:3000` e pergunte ao agente: **"o que é CDB?"** Depois volte aqui e me diga se não parece que ele entende o seu dia.

---

## Stack

- **Next.js 16** (App Router, Turbopack, `src/` dir, alias `@/*`)
- **React 19 + TypeScript 5**
- **Tailwind CSS v4** (CSS-first, tema escuro por padrão, modo claro opcional)
- **Prisma 7 + SQLite** (`@prisma/adapter-better-sqlite3`) — apenas `NewsletterSubscriber` e `ChatMessage`
- **zod 4**, **recharts** (sparklines), **@phosphor-icons/react** (build SSR), **motion** (reservado)

## Estrutura

```
src/
  app/          # páginas + API routes + sitemap/robots
  components/   # layout, radar, home, content, ferramentas, chat, explique, tradutor, ui
  lib/
    content/    # camada de conteúdo (tudo em TS estático): tipos, indicadores, guias, glossário, FAQ, produtos, agenda, notícias, oportunidades, fontes
    market/     # SGS (API pública do BCB) e buildRadar
    ia/         # explain() + translateMarket() (knowledge-base first) e client OpenAI-compat opcional
    seo/        # JSON-LD (Organization, WebSite, Article, FAQ, Breadcrumb)
    validation/ # zod schemas
  actions/      # server action da newsletter
  generated/    # Prisma Client gerado (gitignored)
prisma/         # schema (NewsletterSubscriber, ChatMessage) + migrations
```

## API

Todas em `src/app/api/*` (runtime Node). Não exigem chave, exceto onde indicado.

| Rota | Método | Descrição |
| --- | --- | --- |
| `/api/health` | GET | Health check (`ok`, status do banco, timestamp) |
| `/api/radar` | GET | Indicadores atuais (SGS/BCB): valor, unidade, variação, série, fonte e status |
| `/api/explique` | POST | `{ "consulta": "Selic" }` → explicação em 3 níveis + roteiro consultivo |
| `/api/tradutor` | POST | `{ "frase": "DI futuro subiu" }` → jargão de mercado em linguagem simples |
| `/api/chat` | POST / GET | `{ "message": "..." }` → resposta do copiloto (persistida no SQLite); GET lista as mensagens |
| `/api/cron/summary` | POST | Briefing do dia (exige header `Authorization: Bearer $CRON_SECRET` quando setado) |

```bash
curl http://localhost:3000/api/radar
curl -X POST http://localhost:3000/api/explique -H "Content-Type: application/json" -d '{"consulta":"Selic"}'
curl -X POST http://localhost:3000/api/tradutor -H "Content-Type: application/json" -d '{"frase":"DI futuro subiu"}'
```

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `DATABASE_URL` | sim | `file:./dev.db` (SQLite local) |
| `NEXT_PUBLIC_APP_URL` | não | URL pública para canonical/sitemap (default: `http://localhost:3000`) |
| `OPENAI_API_KEY` / `AI_API_KEY` | não | Habilita IA opcional no chat |
| `AI_BASE_URL` | não | Base URL OpenAI-compat (default: `https://api.openai.com/v1`) |
| `AI_MODEL` | não | Modelo (default: `gpt-4o-mini`) |
| `CRON_SECRET` | não | Protege `POST /api/cron/summary` quando em produção |

## Observações técnicas (Next 16 / Prisma 7)

- **Não usar `url` no `schema.prisma`** — Prisma 7 exige o driver adapter e a configuração fica em `prisma.config.ts`.
- **`next/font/google` não carrega dados nesta instalação** (sem rede); o layout usa stack de fontes do sistema via variáveis `--font-geist-sans`/`--font-geist-mono`.
- **Ícones**: importar de `@phosphor-icons/react/dist/ssr` (o barrel normal usa `createContext` em módulo e quebra em Server Components no Next 16).
- **API SGS do BCB**: `dados/ultimos/{n}` aceita no máximo `n=20` (acima disso retorna HTTP 400) e devolve `valor` como *string* — o radar usa 20 pontos e converte para número.
- **zod 4**: use `z.email()` (o `z.string().email()` rejeita e-mails curtos).

## Aviso

Conteúdo educacional e informativo. Não constitui recomendação personalizada de investimento, crédito ou seguro. Ver `/aviso-legal`.
