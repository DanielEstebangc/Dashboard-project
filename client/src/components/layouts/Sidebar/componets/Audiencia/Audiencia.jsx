import { useState } from "react";
import BotonSelect from "../BotonSelect";
import Cuadros from "../Cuadros";
import TitulosCuadrados from "../TitulosCuadrados";

export default function Audiencia() {
    const [modelo, setModelo] = useState("All Audiences"); // valor seleccionado

      const opciones = [
        { value: "All Audiences", label: "All Audiences" },
        { value: "Lookalike", label: "Lookalike" },
        { value: "In-Market", label: "In-Market" },
        { value: "Navegg", label: "Navegg" },
        { value: "Remarketing", label: "Remarketing" },
        { value: "Contextual", label: "Contextual" },


        
        ];
    return(
        <Cuadros className=" h-[126px] ">
            <TitulosCuadrados>
             Audiencia
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