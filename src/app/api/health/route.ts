import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  const time = new Date().toISOString();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({
      ok: true,
      service: "agente-financeiro-autonomo",
      db: "ok",
      time,
    });
  } catch {
    return Response.json({
      ok: true,
      service: "agente-financeiro-autonomo",
      db: "unavailable",
      time,
    });
  }
}
