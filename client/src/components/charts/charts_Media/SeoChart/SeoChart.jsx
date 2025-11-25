import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { mes: "Ene", CPA: 85000, CPC: 1250, VI: 65 },
  { mes: "Feb", CPA: 82000, CPC: 1180, VI: 68 },
  { mes: "Mar", CPA: 88000, CPC: 1320, VI: 72 },
  { mes: "Abr", CPA: 79000, CPC: 1280, VI: 75 },
  { mes: "May", CPA: 76000, CPC: 1150, VI: 78 },
  { mes: "Jun", CPA: 72000, CPC: 1090, VI: 82 },
  { mes: "Jul", CPA: 68000, CPC: 1020, VI: 82 },
];

export default function MultiLineChart() {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          
          {/* Grid punteado */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* Eje X */}
          <XAxis dataKey="mes" />

          {/* Eje Y izquierdo (Visibility Index) */}
          <YAxis yAxisId="left" domain={[0, 100]} />

          {/* Eje Y derecho (CPA/CPC) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100000]}
          />

          {/* Tooltip */}
          <Tooltip />

          {/* Leyenda */}
          <Legend />

          {/* Líneas */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="CPA"
            stroke="#CFB18D"
            strokeWidth={2}
            dot={{ r: 3 }}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="CPC"
            stroke="#4285F4"
            strokeWidth={2}
            dot={{ r: 3 }}
          />

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="VI"
            name="Visibility Index"
            stroke="#9E2D38"
            strokeWidth={2}
            dot={{ r: 3 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
