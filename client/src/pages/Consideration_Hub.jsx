import SecciondeAnalisis from "../components/pages/SecciondeAnalisis"
export default function Consideration_Hub() {

  const datosAnalisis = [
    { titulodatos: "CTR Promedio", data: "2.34%", comparacion: "+0.8pp vs target" },
    { titulodatos: "CPC Promedio", data: "$1,180", comparacion: "-12.3% vs target" },
    { titulodatos: "Sessions", data: "84,562", comparacion: "+15.2% vs target" },
    { titulodatos: "Bounce Rate", data: "32.1%", comparacion: "+3.2pp vs target"},
  ];

  return (
      <SecciondeAnalisis icono="Group" titulo="Consideration Hub" subtitulo="Análisis del micro-funnel: Impressions → Clicks → Sessions" datos={datosAnalisis} proximamente="Próximamente: Cascada Impressions→Clicks→Sessions, Top Landing Pages, Radar Audiencias" textoclass="text-gray-500" extraClass="w-[200px] h-[82px]" estilosiconos={{
        fontSize: "1.3rem",
        lineHeight: "1.3rem",
        color: "rgb(107, 114, 128)"
      }}/>
  )
}
