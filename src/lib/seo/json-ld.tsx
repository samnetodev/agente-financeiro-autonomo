import { absoluteUrl } from "@/lib/utils";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agente Financeiro Autônomo",
    url: absoluteUrl("/"),
    description:
      "Central de inteligência para o profissional do mercado financeiro: mercado, economia, produtos financeiros e inteligência comercial.",
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agente Financeiro Autônomo",
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/busca")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  author?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    url: input.url,
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: input.author ?? "Equipe Agente Financeiro Autônomo" },
    keywords: input.keywords?.join(", "),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: i.url,
    })),
  };
}
