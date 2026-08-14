"use client";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

export function Sparkline({
  data,
  positive = true,
}: {
  data: { label: string; value: number }[];
  positive?: boolean;
}) {
  const color = positive ? "#34d399" : "#fb7185";
  return (
    <div className="h-10 w-full" aria-hidden>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={`spark-${positive ? "up" : "down"}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#spark-${positive ? "up" : "down"})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
