// src/hooks/useFunnelData.js
import { useState, useEffect } from "react";
import { getFunnelData } from "../services/funnelService"; // tu service que trae los datos

// 🎨 Colores fijos para cada etapa del funnel
const COLORS = ["#9E2D38", "#666666", "#2B5A7A"];
// 🔗 Links fijos para cada etapa
const LINKS = ["/awareness-performance", "/consideration-hub", "/purchase-leads"];

export const useFunnelData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFunnelData()
      .then(apiData => {
        // Agregamos colores y links a cada item
        const finalData = apiData.map((item, index) => ({
          ...item,
          fill: COLORS[index % COLORS.length], // ciclo por si hay más etapas
          link: LINKS[index % LINKS.length],   // ciclo por si hay más etapas
        }));
        setData(finalData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando funnel:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};