
import SecciondeAnalisis from "../components/pages/SecciondeAnalisis"
export default function Audience_Insights() {

  const datosAnalisis = [
          { titulodatos: "Clusters Activos", data: "8", comparacion: "Lookalike, In-Market, etc."},
          { titulodatos: "Overlap Rate", data: "23.4%", comparacion: "Optimizable"},
          { titulodatos: "Journey Time", data: "18.5d", comparacion: "Awareness → Purchase" },
        ];

  return (  
     <SecciondeAnalisis icono="Group" titulo="Audience Insights" subtitulo="Análisis de clusters, journey y solapamiento de audiencias" datos={datosAnalisis} proximamente="Próximamente: Treemap Spend & Leads, Journey Arcs, Geo-map, Keyword Sunburst" textoclass="text-[rgb(158,45,56)]" extraClass="h-[80.5px] w-[286.885px]" estilosiconos={{
        fontSize: "1.3rem",
        lineHeight: "1.3rem",
        color: "rgb(158, 45, 56)"
      }}/>
  )
}
