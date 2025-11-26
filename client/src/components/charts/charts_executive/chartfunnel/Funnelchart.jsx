import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFunnelData } from "../../../../services/funnelService"; // ✅ USO DEL SERVICE

import {
  FunnelChart,
  Funnel,
  Cell,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

// 🎨 Colores fijos
const COLORS = ["#9E2D38", "#666666", "#2B5A7A"];

// 🔗 Links fijos
const LINKS = [
  "/awareness-performance",
  "/consideration-hub",
  "/purchase-leads",
];

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

const CustomFunnelChart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    getFunnelData()               // ✅ Ahora usamos el service
      .then((apiData) => {
        const finalData = apiData.map((item, index) => ({
          ...item,
          fill: COLORS[index],
          link: LINKS[index],
        }));
        setData(finalData);
      })
      .catch((error) => {
        console.error("Error cargando funnel:", error);
      });
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div className="chart-no-outline flex flex-col justify-center items-center block box-border w-[373.406px] h-[300px]">
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
};

export default CustomFunnelChart;
