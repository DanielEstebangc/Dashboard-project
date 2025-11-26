// src/routes/chart.routes.js
import express from "express";
import { getFunnel } from "../controller/chart.controller.js";

const router = express.Router();
router.get("/funnel", getFunnel); // GET /api/charts/funnel
export default router;

