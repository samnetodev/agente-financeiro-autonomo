import { translateMarket } from "@/lib/ia/explain";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let frase = "";
  try {
    const body = await req.json();
    frase = String(body?.frase ?? "").trim();
  } catch {
    return Response.json({ error: "Corpo inválido." }, { status: 400 });
  }

  if (!frase || frase.length > 500) {
    return Response.json(
      { error: "Frase vazia ou longa demais (máx. 500 caracteres)." },
      { status: 400 }
    );
  }

  return Response.json(translateMarket(frase));
}
