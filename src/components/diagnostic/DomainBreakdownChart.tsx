"use client";

import type { PerDomainScore } from "@/types/quiz";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AP_COLOR = "#00cc36";
const SEC_COLOR = "#00ff41";

const axisStyle = { fill: "#00ff41", fontSize: 11, fontFamily: "var(--font-matrix-mono), monospace" };
const gridStroke = "#003b00";

export function DomainBreakdownChart({ rows }: { rows: PerDomainScore[] }) {
  const data = rows.map((r) => ({
    id: r.domainId,
    label: r.label.length > 42 ? `${r.label.slice(0, 40)}…` : r.label,
    fullLabel: r.label,
    score: Math.round(r.fraction * 100),
    exam: r.exam,
  }));

  return (
    <div className="h-[420px] w-full min-w-0 border border-matrix-dim bg-matrix-deep/80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={axisStyle}
            axisLine={{ stroke: "#003b00" }}
            tickLine={false}
            unit="%"
          />
          <YAxis
            type="category"
            dataKey="label"
            width={200}
            tick={axisStyle}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0, 59, 0, 0.35)" }}
            contentStyle={{
              background: "#000000",
              border: "1px solid #00ff41",
              borderRadius: 0,
              color: "#00ff41",
              fontSize: 12,
              fontFamily: "var(--font-matrix-mono), monospace",
            }}
            formatter={(value) => {
              const n = typeof value === "number" ? value : Number(value);
              return [`${Number.isFinite(n) ? n : 0}%`, "SCORE"];
            }}
          />
          <Bar dataKey="score" radius={[0, 0, 0, 0]} maxBarSize={20}>
            {data.map((entry) => (
              <Cell
                key={entry.id}
                fill={entry.exam === "a-plus" ? AP_COLOR : SEC_COLOR}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
