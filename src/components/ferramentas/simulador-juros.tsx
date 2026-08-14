"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export function SimuladorJuros() {
  const [inicial, setInicial] = useState("10000");
  const [mensal, setMensal] = useState("500");
  const [taxa, setTaxa] = useState("10");
  const [meses, setMeses] = useState("12");

  const p = Number(inicial) || 0;
  const m = Number(mensal) || 0;
  const r = (Number(taxa) || 0) / 100;
  const n = Number(meses) || 0;

  const months: { label: string; saldo: number; aportado: number }[] = [];
  let saldo = p;
  for (let i = 1; i <= n; i++) {
    saldo = saldo * (1 + r / 12) + m;
    months.push({
      label: `M${i}`,
      saldo,
      aportado: p + m * i,
    });
  }

  const total = months.length ? months[months.length - 1] : { saldo: 0, aportado: p };
  const juros = total.saldo - total.aportado;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="flex flex-col gap-4 rounded-2xl border hairline bg-surface p-6">
        <Field label="Aporte inicial (R$)" value={inicial} onChange={setInicial} prefix="R$" />
        <Field label="Aplicação mensal (R$)" value={mensal} onChange={setMensal} prefix="R$" />
        <Field label="Taxa anual (a.a., %)" value={taxa} onChange={setTaxa} suffix="%" />
        <Field label="Prazo (meses)" value={meses} onChange={setMeses} suffix="m" />

        <div className="mt-2 grid grid-cols-3 gap-2 rounded-xl border hairline bg-background p-4">
          <div className="flex flex-col">
            <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/40">
              Total aportado
            </span>
            <span className="text-[15px] font-semibold tabular-nums">{formatCurrency(total.aportado)}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/40">
              Juros
            </span>
            <span className="text-[15px] font-semibold tabular-nums text-emerald-400">
              {formatCurrency(juros)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-nums text-[10px] uppercase tracking-wider text-foreground/40">
              Total final
            </span>
            <span className="text-[15px] font-semibold tabular-nums">{formatCurrency(total.saldo)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border hairline bg-surface p-6">
        <h2 className="font-mono-nums text-[11px] uppercase tracking-[0.16em] text-emerald-500">
          Evolução mês a mês
        </h2>
        <ul className="flex max-h-[380px] flex-col gap-1 overflow-y-auto pr-1">
          {months.map((month) => (
            <li
              key={month.label}
              className="flex items-center justify-between rounded-lg border-b hairline px-2 py-1.5 text-[12px]"
            >
              <span className="font-mono-nums text-foreground/40">{month.label}</span>
              <span className="text-foreground/60">aporte {formatCurrency(month.aportado)}</span>
              <span className="font-semibold tabular-nums">{formatCurrency(month.saldo)}</span>
            </li>
          ))}
        </ul>
        <p className="text-[11px] leading-relaxed text-foreground/40">
          Juros compostos mensais com taxa proporcional simples (taxa a.a. ÷ 12). Simulação
          ilustrativa, sem IR, encargos ou tributação de cada produto.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono-nums text-[11px] uppercase tracking-wider text-foreground/45">
        {label}
      </span>
      <div className="flex items-center gap-2">
        {prefix ? (
          <span className="font-mono-nums text-sm text-foreground/40">{prefix}</span>
        ) : null}
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full rounded-xl border hairline bg-background px-3 text-sm tabular-nums outline-none transition focus:border-emerald-500/60"
        />
        {suffix ? (
          <span className="font-mono-nums text-sm text-foreground/40">{suffix}</span>
        ) : null}
      </div>
    </label>
  );
}
