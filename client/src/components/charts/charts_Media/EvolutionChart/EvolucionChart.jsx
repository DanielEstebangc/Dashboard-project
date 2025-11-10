import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ene", Google: 10, Meta: 12, OOH: 22, Other: 2, Radio: 18, TV: 30, YouTube: 6 },
  { name: "Feb", Google: 12, Meta: 15, OOH: 20, Other: 2, Radio: 17, TV: 28, YouTube: 6 },
  { name: "Mar", Google: 14, Meta: 16, OOH: 19, Other: 3, Radio: 16, TV: 25, YouTube: 7 },
  { name: "Abr", Google: 15, Meta: 17, OOH: 18, Other: 3, Radio: 15, TV: 24, YouTube: 8 },
  { name: "May", Google: 16, Meta: 19, OOH: 17, Other: 3, Radio: 14, TV: 22, YouTube: 9 },
  { name: "Jun", Google: 17, Meta: 21, OOH: 16, Other: 3, Radio: 13, TV: 20, YouTube: 10 },
  { name: "Jul", Google: 18, Meta: 23, OOH: 15, Other: 3, Radio: 12, TV: 18, YouTube: 11 },
];

export default function MediaAreaChart() {
  return (
    <div className="chart-no-outline w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
      <defs>
        <linearGradient id="colorYouTube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF0000" stopOpacity={0.9} />
          <stop offset="90%" stopColor="#FF0000" stopOpacity={0.85} />
        </linearGradient>

        <linearGradient id="colorTV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9E2D38" stopOpacity={1} />
          <stop offset="90%" stopColor="#9E2D38" stopOpacity={0.85} />
        </linearGradient>

        <linearGradient id="colorRadio" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CFB18D" stopOpacity={1} />
          <stop offset="90%" stopColor="#CFB18D" stopOpacity={0.85} />
        </linearGradient>

        <linearGradient id="colorOther" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#999999" stopOpacity={1} />
          <stop offset="90%" stopColor="#999999" stopOpacity={0.85} />
        </linearGradient>

        <linearGradient id="colorOOH" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#666666" stopOpacity={1} />
          <stop offset="90%" stopColor="#666666" stopOpacity={0.85} />
        </linearGradient>

        <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1877F2" stopOpacity={1} />
          <stop offset="90%" stopColor="#1877F2" stopOpacity={0.85} />
        </linearGradient>

        <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4285F4" stopOpacity={1} />
          <stop offset="90%" stopColor="#4285F4" stopOpacity={0.85} />
        </linearGradient>
      </defs>


          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Legend />

        <Area type="monotone" dataKey="TV" stroke="#9E2D38" fill="url(#colorTV)" stackId="1" />
        <Area type="monotone" dataKey="Radio" stroke="#CFB18D" fill="url(#colorRadio)" stackId="1" />
        <Area type="monotone" dataKey="Other" stroke="#999999" fill="url(#colorOther)" stackId="1" />
        <Area type="monotone" dataKey="OOH" stroke="#666666" fill="url(#colorOOH)" stackId="1" />
        <Area type="monotone" dataKey="Meta" stroke="#1877F2" fill="url(#colorMeta)" stackId="1" />
        <Area type="monotone" dataKey="Google" stroke="#4285F4" fill="url(#colorGoogle)" stackId="1" />
        <Area type="monotone" dataKey="YouTube" stroke="#FF0000" fill="url(#colorYouTube)" stackId="1" />


        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
