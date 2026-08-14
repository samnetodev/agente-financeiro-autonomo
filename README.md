# Radar Bancário — Central de Inteligência para o Bancário

Portal educacional e de inteligência de mercado para profissionais bancários: mercado, economia, produtos financeiros e inteligência comercial. Do indicador à conversa.

## Stack

- **Next.js 16** (App Router, Turbopack, `src/` dir, alias `@/*`)
- **React 19 + TypeScript 5**
- **Tailwind CSS v4** (CSS-first, tema escuro por padrão, modo claro opcional)
- **Prisma 7 + SQLite** (`@prisma/adapter-better-sqlite3`) — apenas `NewsletterSubscriber` e `ChatMessage`
- **zod 4**, **recharts** (sparklines), **@phosphor-icons/react** (build SSR), **motion** (reservado)

## Rodar localmente

```bash
npm install
cp .env.example .env     # DATABASE_URL já aponta para SQLite local
npx prisma migrate dev   # aplica a migração init (cria dev.db)
npm run dev              # http://localhost:3000
```

Verificação: `npx tsc --noEmit`, `npm run lint`, `npm run build`.

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

## Como funciona o conteúdo

- **Nada de números inventados.** Todo indicador aponta a fonte oficial (BCB, IBGE, B3, Tesouro, ANBIMA, CVM, SUSEP). Quando a fonte está indisponível, o valor é marcado como `reference`/`unavailable` — nunca substituído por estimativa silenciosa.
- O **radar** tenta buscar dados reais na API SGS do Banco Central (timeout de 4s). Sem resposta → "sem dados".
- O **copiloto** (`/explique`, `/chat`) responde primeiro pelo banco de conhecimento do portal; IA generativa é opcional e sinalizada, com instrução explícita de não inventar fontes.
- Cada guia/FAQ/termo tem **três níveis**: 30 segundos, visão do profissional, aprofundamento técnico.

## API

Todas em `src/app/api/*` (runtime Node). Não exigem chave, exceto onde indicado.

| Rota | Método | Descrição |
| --- | --- | --- |
| `/api/health` | GET | Health check (`ok`, status do banco, timestamp) |
| `/api/radar` | GET | Indicadores atuais (SGS/BCB): valor, unidade, variação, série, fonte e status |
| `/api/explique` | POST | `{ "consulta": "Selic" }` → explicação em 3 níveis a partir da base de conhecimento |
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
