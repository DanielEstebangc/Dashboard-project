import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ene", Planificado: 800000, Real: 750000 },
  { name: "Feb", Planificado: 850000, Real: 920000 },
  { name: "Mar", Planificado: 900000, Real: 880000 },
  { name: "Abr", Planificado: 950000, Real: 1020000 },
  { name: "May", Planificado: 1000000, Real: 980000 },
  { name: "Jun", Planificado: 1100000, Real: 1150000 },
  { name: "Jul", Planificado: 1200000, Real: 1080000 },
];

// 💵 Función para formatear valores en USD abreviados
const formatUSD = (value) => {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
};

// 🎨 Tooltip personalizado
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-md text-sm">
        <p className="font-semibold text-gray-800 mb-1">Mes: {label}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            className="flex items-center text-gray-700"
            style={{ color: entry.color }}
          >
            <span className="w-2 h-2 inline-block rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
            {entry.name}: <span className="ml-1 font-medium">{formatUSD(entry.value)}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function BarChartGap() {
  return (
    // Este div es el contenedor del gráfico y debe ocupar todo el espacio disponible
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis
            stroke="#666"
            tickFormatter={(value) => {
                if (value >= 1_000_000) {
                return `$${(value / 1_000_000).toFixed(1)}M`;
                }
                return `$${value.toLocaleString()}`;
            }}
            />
        <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Planificado" fill="#CFB18D" />
          <Bar dataKey="Real" fill="#9E2D38" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
