import { useState } from "react";
import BotonSelect from "../BotonSelect";
import Cuadros from "../Cuadros";
import TitulosCuadrados from "../TitulosCuadrados";

export default function ModeloVehículo() {
      const [modelo, setModelo] = useState("All Models"); // valor seleccionado

      const opciones = [
        { value: "All Models", label: "All Models" },
        { value: "EX30", label: "EX30" },
        { value: "XC40", label: "XC40" },
        { value: "XC60", label: "XC60" },
        { value: "XC90", label: "XC90" },
        { value: "C40", label: "C40" },
        { value: "EX90", label: "EX90" },


        
        ];

    
  return (
    <Cuadros className=" h-[130px] ">

    <TitulosCuadrados>
        Modelo de Vehículo          
    </TitulosCuadrados>

      <BotonSelect
        value={modelo}
        onValueChange={(val) => setModelo(val)}
        options={opciones}
        placeholder="All Models"
        className="h-9" 
      />

    </Cuadros>    
    
  )
}


