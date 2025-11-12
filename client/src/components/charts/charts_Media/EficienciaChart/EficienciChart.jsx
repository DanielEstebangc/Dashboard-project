import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EficienciaChart() {
  const data = [
    { gasto: 850, leads: 260, color: "#9E2D38" },
    { gasto: 320, leads: 160, color: "#4285F4" },
    { gasto: 180, leads: 130, color: "#4285F4" },
    { gasto: 420, leads: 195, color: "#9E2D38" },
    { gasto: 680, leads: 130, color: "#9E2D38" },
    { gasto: 240, leads: 160, color: "#9E2D38" },
  ];

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{ top: 5, right: 30, bottom: 30, left: 60 }}
        >
          {/* 🔹 Cuadrícula */}
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

          {/* 🔹 Ejes */}
          <XAxis
            type="number"
            dataKey="gasto"
            name="Gasto"
            unit="K"
            tickFormatter={(v) => `$${v}K`}
            stroke="#666"
          />
          <YAxis
            type="number"
            dataKey="leads"
            name="Leads"
            stroke="#666"
          />

          {/* 🔹 Tooltip */}
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          {/* 🔹 Puntos individuales */}
          <Scatter
            name="Datos"
            data={data}
            fill="#9E2D38"
          >
            {data.map((entry, index) => (
              <circle
                key={`circle-${index}`}
                cx={0}
                cy={0}
                r={4.5}
                fill={entry.color}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
