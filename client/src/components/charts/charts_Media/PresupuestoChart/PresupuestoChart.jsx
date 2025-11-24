import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

export default function PieChartComponent({ data }) {
  const COLORS = ["#9E2D38", "#666666", "#2B5A7A"];

   // Tooltip personalizado
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 px-3 py-2 shadow">
          <p className="font-semibold">{payload[0].name}</p>
          <p>{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-no-outline w-full h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            stroke="#fff"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
