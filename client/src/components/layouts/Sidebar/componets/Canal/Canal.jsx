import { useState } from "react";
import BotonSelect from "../BotonSelect";
import Cuadros from "../Cuadros";
import TitulosCuadrados from "../TitulosCuadrados";

export default function Canal() {
    const [modelo, setModelo] = useState("All Channels"); // valor seleccionado

      const opciones = [
        { value: "All Channels", label: "All Channels" },
        { value: "ATL", label: "ATL" },
        { value: "Digital", label: "Digital" },
        { value: "TV", label: "TV" },
        { value: "Radio", label: "Radio" },
        { value: "OOH", label: "OOH" },
        { value: "Meta", label: "Meta" },
        { value: "Google", label: "Google" },
        { value: "DV360", label: "DV360" },
        




        
        ];
    return(
        <Cuadros className=" h-[126px] ">
            <TitulosCuadrados>
             Canal
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