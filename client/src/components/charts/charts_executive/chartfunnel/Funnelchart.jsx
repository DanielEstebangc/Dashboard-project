import { useNavigate } from "react-router-dom";
import {
  FunnelChart,
  Funnel,
  Cell,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

// Colores fijos
const COLORS = ["#9E2D38", "#666666", "#2B5A7A"];
// Links fijos
const LINKS = ["/awareness-performance", "/consideration-hub", "/purchase-leads"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    const formattedValue = `$${value.toLocaleString("en-US")}`;
    return (
      <div className="bg-white border border-gray-300 px-3 py-2 rounded-lg shadow-md text-sm flex justify-between items-center gap-2">
        <p className="m-0 text-gray-700 font-medium">{name}</p>
        <p className="m-0 text-gray-600">{formattedValue}</p>
      </div>
    );
  }
  return null;
};

export default function FunnelChartComponent({ data, loading, error }) {
  const navigate = useNavigate();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando funnel</p>;
  if (!data || data.length === 0) return <p>No hay datos</p>;

  return (
    <div className="chart-no-outline flex flex-col justify-center items-center w-[373px] h-[300px]">
      <div className="w-[330px] h-[300px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip content={<CustomTooltip />} />
            <Funnel dataKey="value" data={data} isAnimationActive={true} stroke="#fff">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(entry.link)}
                />
              ))}
              <LabelList position="center" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
