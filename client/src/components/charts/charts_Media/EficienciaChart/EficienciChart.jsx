import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function EficienciaChart() {
  const data = [
    { medio: "TV", categoria: "ATL", gasto: 850.000, leads: 245, frecuencia: 3.2, cpl: 3469 },
    { medio: "Meta", categoria: "Digital", gasto: 320.000, leads: 180, frecuencia: 2.1, cpl: 1778 },
    { medio: "Google_Search", categoria: "Digital", gasto: 180.000, leads: 95, frecuencia: 1.8, cpl: 1896 },
    { medio: "Radio", categoria: "ATL", gasto: 420.000, leads: 125, frecuencia: 4.1, cpl: 3360 },
    { medio: "OOH", categoria: "ATL", gasto: 680.000, leads: 85, frecuencia: 5.2, cpl: 8000 },
    { medio: "YouTube", categoria: "ATL", gasto: 240.000, leads: 110, frecuencia: 2.5, cpl: 2182 },

  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div
          className="bg-white shadow-md border border-gray-300 rounded-md p-2 text-xs"
          style={{
            borderTop: `3px solid ${d.categoria === "ATL" ? "#9E2D38" : "#4285F4"}`,
          }}
        >
          <p><b>{d.medio}</b></p>
          <p>Gasto: ${d.gasto}K</p>
          <p>Leads: {d.leads}</p>
          <p>Frecuencia: {d.frecuencia}</p>
          <p>CPL: {d.cpl}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-no-outline w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis
            type="number"
            dataKey="gasto"
            name="Gasto"
            unit="K"
            tickFormatter={(v) => `$${v}`}
            stroke="#666"
          />
          <YAxis type="number" dataKey="leads" name="Leads" stroke="#666" />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3" }} />

          {/* ✅ Un solo Scatter, colores dinámicos */}
          <Scatter
            data={data}
            shape={(props) => (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={5}
                fill={props.payload.categoria === "ATL" ? "#9E2D38" : "#4285F4"}
              />
            )}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            content={() => (
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#9E2D38" }}></div>
                  <span>ATL</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#4285F4" }}></div>
                  <span>Digital</span>
                </div>
              </div>
            )}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
