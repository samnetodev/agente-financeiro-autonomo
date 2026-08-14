export type IndicatorStatus = "live" | "delayed" | "unavailable" | "reference";

export interface Indicator {
  name: string;
  slug: string;
  category: "mercado" | "juros" | "inflacao" | "renda-fixa" | "credito" | "exterior";
  value: string;
  unit: string;
  change: string | null;
  changePct: number | null;
  timestamp: string;
  source: string;
  sourceUrl: string;
  status: IndicatorStatus;
  clientMeaning: string;
  series: { label: string; value: number }[];
}

export interface ArticleLevel {
  t30: string;
  bancario: string;
  tecnico: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  icon: string;
  accent: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  levels: ArticleLevel;
  example: string;
  clientImpact: string[];
  opportunities: string[];
  perguntas: string[];
  errosComuns: string[];
  related: string[];
  sources: { label: string; url: string }[];
}

export interface Faq {
  slug: string;
  question: string;
  category: string;
  answerShort: string;
  answer: string;
  example: string;
  related: string[];
  sources: { label: string; url: string }[];
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  category: string;
  definition: string;
  bancario: string;
  tecnico: string;
  related: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  concept: string;
  funcionamento: string;
  publico: string;
  riscos: string[];
  liquidez: string;
  tributacao: string;
  garantias: string[];
  vantagens: string[];
  limitacoes: string[];
  perguntasDiagnostico: string[];
  objecoes: { objecao: string; resposta: string }[];
  compliance: string[];
  sources: { label: string; url: string }[];
}

export interface AgendaEvent {
  date: string;
  time: string;
  indicator: string;
  expectation: string | null;
  previous: string | null;
  importance: "alta" | "media" | "baixa";
  timezone: string;
  impactos: string[];
  source: string;
  sourceUrl: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  time: string;
  summary: string;
  impact: string;
  category: string;
  tags: string[];
}

export interface Opportunity {
  slug: string;
  title: string;
  trigger: string;
  diagnostico: string;
  perguntas: string[];
  produtos: string[];
  compliance: string;
}

export interface SourceRef {
  name: string;
  slug: string;
  url: string;
  description: string;
  category: string;
}

export interface Source {
  name: string;
  url: string;
  description: string;
  category: string;
}
