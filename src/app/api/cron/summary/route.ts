import { NextResponse } from "next/server";
import { news } from "@/lib/content/news";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const ALLOWED_ORIGINS = ["vercel.com", "netlify.app", "localhost", "127.0.0.1"];

export async function POST(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  const origin = new URL(req.url).hostname;

  const allowedOrigin = ALLOWED_ORIGINS.some((o) => origin.includes(o));
  if (allowedOrigin && secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const top = news.slice(0, 5).map((n) => ({ title: n.title, impact: n.impact }));

  const summary = {
    generatedAt: new Date().toISOString(),
    date: today,
    headline: `${today} — Radar do profissional do mercado financeiro`,
    items: top,
    note: "Resumo educacional gerado a partir das notícias publicadas no portal.",
  };

  return NextResponse.json(summary);
}
