"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export function SimuladorRendaFixa() {
  const [aporte, setAporte] = useState("50000");
  const [anos, setAnos] = useState("2");
  const [cdi, setCdi] = useState("12.0");
  const [ipca, setIpca] = useState("4.5");
  const [inflacaoCenario, setInflacaoCenario] = useState("6.0");

  const principal = Number(aporte) || 0;
  const n = Number(anos) || 0;
  const cdiRate = (Number(cdi) || 0) / 100;
  const ipcaRate = (Number(ipca) || 0) / 100;
  const infAlt = (Number(inflacaoCenario) || 0) / 100;

  const cdiBruto = principal * Math.pow(1 + cdiRate, n);
  const ipcaBruto = principal * Math.pow(1 + ipcaRate + 0.032, n);
  const preBruto = principal * Math.pow(1 + 0.115, n);

  const rows = [
    { nome: "CDI (pós-fixado)", bruto: cdiBruto, real: cdiBruto / Math.pow(1 + infAlt, n), color: "text-emerald-400" },
    { nome: "IPCA+ 3,2%", bruto: ipcaBruto, real: ipcaBruto / Math.pow(1 + infAlt, n), color: "text-sky-400" },
    { nome: "Prefixado 11,5%", bruto: preBruto, real: preBruto / Math.pow(1 + infAlt, n), color: "text-amber-400" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="Investimento (R$)" value={aporte} onChange={setAporte} />
        <Field label="Prazo (anos)" value={anos} onChange={setAnos} />
        <Field label="CDI esperado (a.a.)" value={cdi} onChange={setCdi} />
        <Field label="IPCA esperado (a.a.)" value={ipca} onChange={setIpca} />
        <Field label="Inflação do cenário (a.a.)" value={inflacaoCenario} onChange={setInflacaoCenario} />
      </div>

      <div className="overflow-hidden rounded-2xl border hairline bg-surface">
        <table className="w-full text-left text-[13px]">
          <thead className="border-b hairline bg-background">
            <tr className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/45">
              <th className="px-4 py-3">Produto</th>
              <th className="px-4 py-3 text-right">Bruto final</th>
              <th className="px-4 py-3 text-right">Ganho</th>
              <th className="px-4 py-3 text-right">Rentabilidade real*</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.nome} className="border-b hairline last:border-0">
                <td className="px-4 py-3 font-medium">{r.nome}</td>
                <td className="px-4 py-3 text-right tabular-nums">{formatCurrency(r.bruto)}</td>
                <td className={`px-4 py-3 text-right tabular-nums ${r.color}`}>
                  {formatCurrency(r.bruto - principal)}
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{formatCurrency(r.real)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-[12px] leading-relaxed text-emerald-200/80 sm:grid-cols-2">
        <p>
          * Rentabilidade real descontada pela inflação do cenário. Taxas usadas: CDI {Number(cdi).toFixed(2)}%,
          IPCA+3,2% e prefixado 11,5% a.a., juros compostos anuais.
        </p>
        <p>
          Valores brutos (antes do IR regressivo da tabela da renda fixa). Simulação ilustrativa,
          sem custódia, corretagem ou alterações de taxa durante o prazo.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono-nums text-[11px] uppercase tracking-wider text-foreground/45">
        {label}
      </span>
      <input
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border hairline bg-surface px-3 text-sm tabular-nums outline-none transition focus:border-emerald-500/60"
      />
    </label>
  );
}
