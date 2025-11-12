import TitulosMedia from "../TitulosMedia"
import EficienciaChart from "../../../charts/charts_Media/EficienciaChart/EficienciChart.jsx";
export default function SeccionEficiencia(){
    return(
        <div className="hover:border-[rgb(158,45,56)] shadow-[0_0_4px_rgba(0,0,0,0.1)] flex flex-col gap-6 rounded-xl border-2 mb-[21px]">
            <TitulosMedia Titulo="Eficiencia: Gasto vs Resultados" subtitulo="Cada canal comparado por inversión y leads generados (tamaño = frecuencia)"/>
            <div className="px-6 [&:last-child]:pb-6">

            <EficienciaChart/>

            </div>
        </div>
    )
}