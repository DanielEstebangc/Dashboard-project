import TitulosMedia from "../TitulosMedia"
import BotonPresupuesto from "./BotonPresupuesto"
import { useState } from "react";
import PresupuestoChart from "../../../charts/charts_Media/PresupuestoChart/PresupuestoChart.jsx";


export default function SeccionPresupuesto(){

    const [activeButton, setActiveButton] = useState("presupuesto");

      // Datos de ejemplo (reemplaza con tus datos reales)
        const dataPresupuesto = [
            { name: "Awareness", value: 45 },
            { name: "Consideration", value: 35 },
            { name: "Purchase", value: 20 },

        ];
        const dataReal = [
            { name: "Awareness", value: 42 },
            { name: "Consideration", value: 38 },
            { name: "Purchase", value: 20 },

        ];

       

    const [chartData, setChartData] = useState(dataPresupuesto);

    const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "presupuesto") setChartData(dataPresupuesto);
    if (button === "real") setChartData(dataReal);
    };

    return(
        <div className="hover:border-[rgb(158,45,56)] shadow-[0_0_4px_rgba(0,0,0,0.1)] flex flex-col gap-6 rounded-xl border-2 mb-[21px]">
            <TitulosMedia Titulo="Presupuesto por Etapa" subtitulo="Planificado vs Real"/>
            <div className="px-6 [&:last-child]:pb-6">

                <div className="flex flex-col gap-2 w-full">
                    
                    {/* 🔹 Aquí pasamos las props correctamente */}
                    <BotonPresupuesto 
                        activeButton={activeButton} 
                        onButtonClick={handleButtonClick} 
                    />

                    <div>
                        
                        <PresupuestoChart data={chartData}/>
                    
                    </div>

                </div>

                <div className="space-y-2 mt-4">
                    
                    <div className="flex justify-between text-xs">
                        <span className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: "rgb(158,45,56)" }}> 
                            </div>
                            <span>Awareness</span>
                        </span>

                        <span className="text-gray-600">
                               45% → 42%
                        </span>
                    </div>

                    <div className="flex justify-between text-xs">
                        <span className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: "rgb(78, 72, 72, 1)" }}>
                            </div>
                            <span>Consideration</span>
                            </span>
                            <span className="text-gray-600">
                                35% → 38%
                            </span>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                        <span className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: "rgb(43, 90, 122)"}}>
                                </div><span>Purchase</span>
                                </span>
                                <span className="text-gray-600">
                                    20% → 20%
                                </span>
                    </div>

                </div>
            </div>
        </div>
    )
}