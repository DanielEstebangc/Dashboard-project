import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "ATL", value: 1950000, fill: "#9E2D38"},
  { name: "Digital", value: 2680000, fill: "#666666"},
];

// Tooltip personalizado
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;

    // formato con separadores de miles y símbolo de dólar
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

export default function MixvsDigitalChart() {
  return (
    <div style={{ width: 200, height: 200, marginRight: 28}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            stroke="#fff"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill}/>
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
