import type { NextRequest } from "next/server";
import { explain, ExplainResult } from "@/lib/ia/explain";
import { chatCompletion } from "@/lib/ia/client";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  let consulta = "";
  try {
    const body = await req.json();
    consulta = String(body?.consulta ?? "").trim();
  } catch {
    return Response.json({ error: "Corpo inválido." }, { status: 400 });
  }

  if (!consulta || consulta.length > 200) {
    return Response.json(
      { error: "Consulta vazia ou longa demais (máx. 200 caracteres)." },
      { status: 400 }
    );
  }

  const kb = explain(consulta);
  let fonte: ExplainResult["fonte"] = kb.fonte;
  let iaTexto: string | undefined;

  if (kb.fonte === "nao-verificado") {
    const ai = await chatCompletion(
      `Usuário perguntou sobre um produto financeiro ou termo de mercado: "${consulta}".\n\nVocê é o Agente Financeiro Autônomo. Gere um texto informativo em pt-BR com foco para o profissional do mercado financeiro (o bancário), com no máximo 220 palavras, estruturado como:\n- O que é (resumo simples)\n- Como funciona (características principais)\n- O que isso significa para o cliente\n- Uma pergunta consultiva para abrir a conversa\n\nRegras: conteúdo educacional; não invente números, fontes, leis ou notícias; não prometa rentabilidade; não faça recomendação personalizada de investimento.`
    );
    if (ai) {
      iaTexto = ai;
      fonte = "ia";
    }
  }

  return Response.json({ ...kb, fonte, iaTexto });
}
