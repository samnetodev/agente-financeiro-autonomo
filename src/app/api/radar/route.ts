import { buildRadar } from "@/lib/market/radar";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function GET() {
  try {
    const indicators = await buildRadar();
    return Response.json(
      {
        ok: true,
        source: "Banco Central do Brasil (SGS)",
        generatedAt: new Date().toISOString(),
        indicators,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return Response.json(
      { ok: false, error: "Radar indisponível no momento." },
      { status: 503 }
    );
  }
}
