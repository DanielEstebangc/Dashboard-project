import SecciondeAnalisis from "../components/pages/SecciondeAnalisis"
export default function Consideration_Hub() {

  const datosAnalisis = [
    { titulodatos: "Total Leads", data: "923", comparacion: "+8.6% vs target"},
    { titulodatos: "CPL Promedio", data: "$165K", comparacion: "-8.3% vs target"},
    { titulodatos: "% Calificación", data: "34.2%", comparacion: "+4.2pp vs target" },
    { titulodatos: "Test Drives", data: "412", comparacion: "+12.1% vs target"},
  ];

  return (
      <SecciondeAnalisis icono="finance" titulo="Purchase & Leads" subtitulo="Funnel de conversión: Visit → Config → Test Drive → Lead" datos={datosAnalisis} proximamente="Próximamente: Funnel Visit→Config→Test Drive→Lead, Boxplot CPL, Decomposition Tree" textoclass="text-[#2B5A7A]" extraClass="w-[200px] h-[82px]"estilosiconos={{
        fontSize: "1.3rem",
        lineHeight: "1.3rem",
        color: "#2B5A7A"
      }}/>
  )
}
