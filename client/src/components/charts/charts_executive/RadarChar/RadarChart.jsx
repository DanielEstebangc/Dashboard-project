import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,Bar
} from "recharts";

const data = [
  { subject: "Reach", A: 85 },
  { subject: "Quality", A: 92 },
  { subject: "Cost Efficiency", A: 78 },
  { subject: "Conversion", A: 88 },
  { subject: "Frequency", A: 75 },
  { subject: "Attribution", A: 82 },
];

// Tooltip personalizado
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { A, subject, color } = payload[0].payload;
    return (
    <div className="bg-white border border-gray-300 rounded-lg p-2 shadow-md text-sm flex flex-col items-start text-left">
        <p className="font-normal text-black mb-1 m-0 p-0">{subject}</p>
  
        <div className="flex items-center text-red-700 m-0 p-0">
            <span className="font-normal">Score:</span>
            <span className="ml-1 font-normal">{A}</span>
        </div>
    </div>   
    );
  }
  return null;
};

export default function RadarChartGap() {
  return (
    <div className="chart-no-outline w-full h-full"> {/* Contenedor padre con altura definida */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="87%" data={data}>
          <PolarGrid stroke="#ccc" />
          <PolarAngleAxis dataKey="subject" stroke="#808080" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis stroke="#ccc" angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
          <Radar
            name="Score"
            dataKey="A"
            stroke="#9E2D38"
            fill="#9E2D38"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
