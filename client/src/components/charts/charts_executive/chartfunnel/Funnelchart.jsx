import React from "react";
import {
  FunnelChart,
  Funnel,
  Cell,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Gasto Awareness", value: 277590326, fill: "#9E2D38" },
  { name: "Consideration", value: 277979326, fill: "#666666" },
  { name: "Purchase", value: 277306326, fill: "#2B5A7A" },
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

const CustomFunnelChart = () => {
  return (
    <div className="chart-no-outline flex flex-col justify-center items-centerblock box-border w-[373.406px] h-[300px] min-w-0 text-[oklch(0.145_0_0)] text-[14px] leading-[21px] text-left font-sans font-normal m-0 p-0 border-[rgba(133, 60, 60, 0.8)] border-t-0 border-r-0 border-b-0 border-l-0 outline-[oklab(0.708_0_0_/_0.5)] [tab-size:4] [unicode-bidi:isolate] [text-size-adjust:100%] [border-image:unset] [border-image-outset:0] [border-image-repeat:stretch] [border-image-slice:100%] [border-image-width:1] [--tw-border-opacity:1]">
      <div className="chart-no-outline flex flex-col justify-center items-centerw-[330px] h-[300px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            {/* 👇 Aquí usamos el tooltip personalizado */}
            <Tooltip content={<CustomTooltip />} />
            <Funnel
              dataKey="value"
              data={data}
              isAnimationActive={true}
              stroke="#fff"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
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
