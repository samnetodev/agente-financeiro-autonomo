import { explain } from "@/lib/ia/explain";

export const runtime = "nodejs";

export async function POST(req: Request) {
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

  return Response.json(explain(consulta));
}
