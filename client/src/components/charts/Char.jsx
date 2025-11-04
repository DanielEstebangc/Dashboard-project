import React, { useState/*, useEffect*/ } from "react";
import Chart from "react-apexcharts";

const VentasChart = () => {
  const [data /*, setData*/] = useState([10, 40, 35, 50, 49, 60, 70, 91]);

  const options = {
    chart: {
      id: "ventas-chart",
    },
    xaxis: {
      categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
    },
    title: {
      text: "Ventas mensuales",
      align: "center",
    },
  };

  const series = [
    {
      name: "Ventas",
      data: data,
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default VentasChart;
