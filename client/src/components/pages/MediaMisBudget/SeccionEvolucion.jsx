import EvolucionChart from "../../charts/charts_Media/EvolutionChart/EvolucionChart.jsx";
export default function SeccionEvolucion(){
    return(
        <div className="hover:border-[rgb(158,45,56)] shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 mb-[21px]">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <h4 className="leading-none">
                Evolución Histórica del Mix de Medios
                </h4>
                <p className="text-xs text-gray-600">Porcentaje de inversión mensual por canal</p>
            </div>
            <EvolucionChart/>
        </div>    
    )
}