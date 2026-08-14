import type { MetadataRoute } from "next";
import { articles } from "@/lib/content/articles";
import { glossaryTerms } from "@/lib/content/glossary";
import { faqs } from "@/lib/content/faqs";
import { products } from "@/lib/content/products";
import { indicatorCatalog } from "@/lib/content/indicators";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/radar",
    "/explique",
    "/tradutor",
    "/guias",
    "/glossario",
    "/faq",
    "/indicadores",
    "/produtos",
    "/noticias",
    "/ferramentas",
    "/ferramentas/simulador-juros",
    "/ferramentas/simulador-renda-fixa",
    "/chat",
    "/fontes",
    "/sobre",
    "/metodologia",
    "/politica-editorial",
    "/aviso-legal",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.6,
  }));

  const articlesRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: absoluteUrl(`/guias/${a.slug}`),
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossaryTerms.map((t) => ({
    url: absoluteUrl(`/glossario/${t.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const faqRoutes: MetadataRoute.Sitemap = faqs.map((f) => ({
    url: absoluteUrl(`/faq/${f.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: absoluteUrl(`/produtos/${p.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const indicatorRoutes: MetadataRoute.Sitemap = indicatorCatalog.map((i) => ({
    url: absoluteUrl(`/indicadores/${i.slug}`),
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.6,
  }));

  return [
    ...pages,
    ...articlesRoutes,
    ...glossaryRoutes,
    ...faqRoutes,
    ...productRoutes,
    ...indicatorRoutes,
  ];
}
