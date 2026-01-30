# Dashboard Project
Dashboard ejecutivo de funnel de marketing construido en React, que visualiza la inversión por etapa del funnel (Awareness, Consideration, Purchase) a partir de datos agregados consumidos desde Google Sheets.

El objetivo del proyecto es ofrecer una vista clara y rápida del desempeño de medios, con filtros dinámicos para análisis ejecutivo.

## 🚀Features
📈 Visualización de funnel de marketing por etapa

🎯 Filtros dinámicos por:

Canal

proximamente por:

Región

Modelo de vehículo

Fecha (year_month)

🔄 Datos consumidos en tiempo real desde Google Sheets (GViz API)

🧮 Agregación automática de costos por funnel_stage

🎨 Colores y orden consistentes por etapa del funnel

⚡ Arquitectura basada en hooks reutilizables

## 🧠 Arquitectura

Frontend: React

Data source: Google Sheets (vista tipo materialized view)

Data fetching: Fetch + Google Visualization API

State management: React hooks

Charts: Recharts

## 🔌Fuente de datos
Los datos provienen de una vista en Google Sheets (vw_funnel_grain) construida mediante QUERY() sobre una tabla fact (fact_leads), exponiendo únicamente las columnas necesarias para el funnel:

year_month

funnel_stage

channel

audience

region

vehicle_model

cost

## 🛠️Hook principal

El hook useFilteredFunnel: Consume los datos desde Google Sheets Aplica filtros dinámicos Agrupa por funnel_stage Devuelve la data lista para visualización

## ▶️Cómo correr el proyecto
npm install
npm run dev

## 📌Notas importantes

La fila de encabezados en Google Sheets es crítica para el correcto parseo de datos.
El parámetro headers en la función QUERY() debe coincidir con la fila real de headers.
El orden de los datos no afecta la visualización, pero sí la configuración de la vista.
