export interface SgsSeriesPoint {
  data: string;
  valor: number;
}

const BASE = "https://api.bcb.gov.br/dados/serie/bcdata.sgs";

async function fetchJson(url: string): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(url, { signal: controller.signal, next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timeout);
  }
}

export async function getSgsSeries(
  code: string | number,
  ultimos: number
): Promise<SgsSeriesPoint[]> {
  try {
    const url = `${BASE}.${code}/dados/ultimos/${ultimos}?formato=json`;
    const data = (await fetchJson(url)) as { data: string; valor: number | string }[];
    return Array.isArray(data)
      ? data.map((p) => ({ data: p.data, valor: Number(p.valor) }))
      : [];
  } catch {
    return [];
  }
}

export async function getLastSgsValue(code: string | number): Promise<number | null> {
  const series = await getSgsSeries(code, 1);
  return series[0]?.valor ?? null;
}

export const sgsCodes = {
  selicMeta: 432,
  selicAcumulada12m: 4189,
  selicTaxaDiaria: 11,
  ipca12m: 433,
  ipcaAcumulado12m: 13522,
  ipca15: 7478,
  igpm: 189,
  pib: 4380,
  desemprego: 24369,
  dolarComercial: 1,
  dolarVenda: 10813,
  euro: 21619,
  ipeadiff: 10870,
  inadimplenciaPf: 21082,
} as const;

export interface FetchedIndicator {
  value: number | null;
  date: string | null;
}
