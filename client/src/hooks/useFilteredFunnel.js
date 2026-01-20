// src/hooks/useFilteredFunnel.js
import { useEffect, useState } from "react";
import { getFunnelGrain } from "../services/funnelGrainService";

const COLORS = {
  Awareness: "#9E2D38",
  Consideration: "#666666",
  Purchase: "#2B5A7A",
};

const LINKS = {
  Awareness: "/awareness-performance",
  Consideration: "/consideration-hub",
  Purchase: "/purchase-leads",
};

const ORDER = ["Awareness", "Consideration", "Purchase"];

export const useFilteredFunnel = (filters = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getFunnelGrain()
      .then(rows => {
            console.log("ROWS RAW:", rows);
            console.log("FILTERS:", filters);
            console.log("YEAR_MONTH ROWS:", rows.map(r => r.year_month));
        // 1️⃣ Filtrar (si no hay filtros, pasa todo)
        const filtered = rows.filter(r =>
          (!filters.year_month || r.year_month === filters.year_month) &&
          (!filters.channel || r.channel === filters.channel) &&
          (!filters.region || r.region === filters.region) &&
          (!filters.vehicle_model || r.vehicle_model === filters.vehicle_model)
        );

        // 2️⃣ Agrupar por funnel_stage
        const grouped = {};

        filtered.forEach(r => {
          const cost =
            Number(String(r.cost).replace(/,/g, "")) || 0;

          grouped[r.funnel_stage] =
            (grouped[r.funnel_stage] || 0) + cost;
        });

        

        // 3️⃣ Formato para Recharts
        const finalData = Object.entries(grouped).map(
          ([stage, value]) => ({
            name: stage,
            value,
            fill: COLORS[stage],
            link: LINKS[stage],
          })
        );

        finalData.sort(
            (a, b) => ORDER.indexOf(a.name) - ORDER.indexOf(b.name)
        );

        console.log("FUNNEL FINAL:", finalData);

        setData(finalData);
        setLoading(false);
      })
        .catch(err => {
            console.error("ERROR FUNNEL 👉", err);
            setError(err);
            setLoading(false);
        });
  }, [JSON.stringify(filters)]);

  return { data, loading, error };
};