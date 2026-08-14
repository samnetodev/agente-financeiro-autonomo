import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { explain, DISCLAIMER_IA } from "@/lib/ia/explain";
import { chatCompletion } from "@/lib/ia/client";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function GET() {
  try {
    const messages = await prisma.chatMessage.findMany({
      orderBy: { createdAt: "asc" },
      take: 50,
    });
    return Response.json({ messages });
  } catch {
    return Response.json({ messages: [] });
  }
}

export async function POST(req: NextRequest) {
  let content = "";
  try {
    const body = await req.json();
    content = String(body?.message ?? "").trim();
  } catch {
    return Response.json({ error: "Corpo inválido." }, { status: 400 });
  }

  if (!content || content.length > 500) {
    return Response.json(
      { error: "Mensagem vazia ou longa demais (máx. 500 caracteres)." },
      { status: 400 }
    );
  }

  try {
    await prisma.chatMessage.create({ data: { content, author: "bancario" } });
  } catch {
    // banco indisponível: segue apenas com a resposta
  }

  // 1) resposta determinística da base de conhecimento
  const kb = explain(content);

  // 2) resposta com IA opcional, quando configurada
  let reply = "";
  let disclaimer = DISCLAIMER_IA;

  if (kb.fonte === "nao-verificado") {
    const ai = await chatCompletion(
      `Usuário perguntou: "${content}". Não encontrei na base. Responda em pt-BR, no máximo 220 palavras, separando FATO / EXPECTATIVA / INTERPRETAÇÃO / OPINIÃO. Não invente fontes.`
    );
    if (ai) {
      reply = ai;
      disclaimer = DISCLAIMER_IA;
    } else {
      reply = kb.resumo30s;
      disclaimer = kb.disclaimer;
    }
  } else {
    reply = `**Resumo em 30 segundos**\n${kb.resumo30s}\n\n**Explicação técnica**\n${kb.explicacaoTecnica}\n\n**Por que isso importa?**\n${kb.porqueImporta}\n\n**Impacto para o cliente**\n${kb.impactoCliente
      .map((c) => `• ${c.area}: ${c.impacto}`)
      .join("\n")}\n\n**Fontes**\n${kb.fontes
      .map((f) => `• ${f.label}: ${f.url}`)
      .join("\n")}`;
    disclaimer = kb.disclaimer;
  }

  const replyText = `${reply}\n\n${disclaimer}`;

  try {
    await prisma.chatMessage.create({ data: { content: replyText, author: "portal" } });
  } catch {
    // banco indisponível: segue sem persistir
  }

  return Response.json({ reply: replyText });
}
