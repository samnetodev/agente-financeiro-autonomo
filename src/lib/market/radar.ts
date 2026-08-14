import { indicatorCatalog } from "@/lib/content/indicators";
import type { Indicator } from "@/lib/content/types";
import { getSgsSeries, sgsCodes } from "./sgs";

async function mapFromSgs(
  indicator: Indicator,
  code: number,
  labelValue: (v: number) => string
): Promise<Indicator> {
  const series = await getSgsSeries(code, 20);
  if (series.length === 0) return indicator;
  const last = series[series.length - 1];
  const prev = series[series.length - 2];
  const lastValue = last.valor;
  const change = prev ? lastValue - prev.valor : null;
  return {
    ...indicator,
    value: labelValue(lastValue),
    change:
      change !== null
        ? (change >= 0 ? "+" : "") + labelValue(change)
        : null,
    changePct: prev && prev.valor !== 0 ? ((lastValue - prev.valor) / Math.abs(prev.valor)) * 100 : null,
    timestamp: last.data,
    status: "live",
    series: series.map((p) => ({
      label: p.data.slice(5),
      value: p.valor,
    })),
  };
}

function nowBR() {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export async function buildRadar(): Promise<Indicator[]> {
  const live = await Promise.all([
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "selic")! }, sgsCodes.selicMeta, (v) =>
      v.toFixed(2).replace(".", ",")
    ),
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "cdi")! }, sgsCodes.selicAcumulada12m, (v) =>
      v.toFixed(2).replace(".", ",")
    ),
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "ipca")! }, sgsCodes.ipcaAcumulado12m, (v) =>
      v.toFixed(2).replace(".", ",")
    ),
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "ipca-15")! }, sgsCodes.ipca15, (v) =>
      v.toFixed(2).replace(".", ",")
    ),
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "igpm")! }, sgsCodes.igpm, (v) =>
      v.toFixed(2).replace(".", ",")
    ),
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "dolar")! }, sgsCodes.dolarComercial, (v) =>
      v.toFixed(4).replace(".", ",")
    ),
    mapFromSgs({ ...indicatorCatalog.find((i) => i.slug === "euro")! }, sgsCodes.euro, (v) =>
      v.toFixed(4).replace(".", ",")
    ),
  ]);

  const radar = indicatorCatalog.map((ind) => {
    const found = live.find((l) => l.slug === ind.slug);
    if (found && found.value) return found;
    return ind;
  });

  return radar.map((ind) => ({
    ...ind,
    timestamp: ind.timestamp || nowBR(),
  }));
}
