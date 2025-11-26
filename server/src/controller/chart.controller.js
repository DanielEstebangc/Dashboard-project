// controllers/chart.controller.js
import { fetchFunnelData } from "../services/chart.service.js";

export const getFunnel = async (req, res) => {
  try {
    const data = await fetchFunnelData();
    res.json(data); // <-- solo mandamos name + value
  } catch (err) {
    res.status(500).json({ error: "Error interno" });
  }
};
