import SecciondeAnalisis from "../components/pages/SecciondeAnalisis"
export default function Awareness_Performance() {

  const datosAnalisis = [
    { titulodatos: "Total Reach", data: "2.68M", comparacion: "+7.2% vs target" },
    { titulodatos: "Avg Frequency", data: "3.4", comparacion: "-2.1% vs target" },
    { titulodatos: "TRP Total", data: "1,247", comparacion: "+12.8% vs target" },
  ];

  return (

      <SecciondeAnalisis icono="Language" titulo="Awareness Performance" subtitulo="Análisis de alcance, frecuencia y exposición por canal" datos={datosAnalisis} proximamente="Próximamente: Heatmap Reach × Frecuencia, TRP trends, Search Impressions"/>
  )
}
