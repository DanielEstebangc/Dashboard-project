// src/utils/formatData.js
export const formatFunnel = (raw) => {
  return {
    // ejemplo de formato para ApexCharts (donut/pie)
    labels: raw.map(r => r.name),
    series: raw.map(r => r.value),
    colors: raw.map(r => r.fill),
    items: raw // envío también los objetos completos por si frontend usa link u otros props
  };
};
