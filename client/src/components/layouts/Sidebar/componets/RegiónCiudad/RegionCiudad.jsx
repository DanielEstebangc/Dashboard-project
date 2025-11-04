import { useState } from "react";
import BotonSelect from "../BotonSelect";
import Cuadros from "../Cuadros";
import TitulosCuadrados from "../TitulosCuadrados";

export default function RegionCiudad() {
    const [modelo, setModelo] = useState("Colombia (All)"); // valor seleccionado

      const opciones = [
        { value: "Colombia (All)", label: "Colombia (All)" },
        { value: "Bogotá", label: "Bogotá" },
        { value: "Medellín", label: "Medellín" },
        { value: "Cali", label: "Cali" },
        { value: "Barranquilla", label: "Barranquilla" },
        
        




        
        ];
    return(
        <Cuadros className=" h-[126px] ">
            <TitulosCuadrados>
             Región / Ciudad
            </TitulosCuadrados>

            <BotonSelect
                    value={modelo}
                    onValueChange={(val) => setModelo(val)}
                    options={opciones}
                    placeholder=""
                    className="h-9" 
            />
            
        </Cuadros>

    )
    
}   