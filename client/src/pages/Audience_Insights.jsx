
import SecciondeAnalisis from "../components/pages/SecciondeAnalisis"
export default function Audience_Insights() {

  const datosAnalisis = [
          { titulodatos: "Clusters Activos", data: "8", comparacion: "Lookalike, In-Market, etc."},
          { titulodatos: "Overlap Rate", data: "23.4%", comparacion: "Optimizable"},
          { titulodatos: "Journey Time", data: "18.5d", comparacion: "Awareness → Purchase" },
        ];

  return (  
     <SecciondeAnalisis icono="Group" titulo="Audience Insights" subtitulo="Próximamente: Treemap Spend & Leads, Journey Arcs, Geo-map, Keyword Sunburst" datos={datosAnalisis} proximamente="Próximamente: Funnel Visit→Config→Test Drive→Lead, Boxplot CPL, Decomposition Tree" textoclass="text-[rgb(158,45,56)]" extraClass="h-[80.5px] w-[286.885px]"/>
  )
}
