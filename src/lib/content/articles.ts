import type { Article } from "./types";
import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";

export { articlesA, articlesB };

export const articles: Article[] = [...articlesA, ...articlesB];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
