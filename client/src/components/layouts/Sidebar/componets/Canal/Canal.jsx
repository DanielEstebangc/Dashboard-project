import { useState, useEffect } from "react";
import BotonSelect from "../BotonSelect";
import Cuadros from "../Cuadros";
import TitulosCuadrados from "../TitulosCuadrados";

export default function Canal({ filters, setFilters }) {
  const [modelo, setModelo] = useState("All Channels"); // estado local del select

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

  // Cuando cambia el estado local, actualizamos el filtro global
    useEffect(() => {
    // Si selecciona "All Channels", no se agrega filtro de canal
        if (modelo === "All Channels") {
            const { channel, ...rest } = filters;
            setFilters(rest);
        } else {
            setFilters({ ...filters, channel: modelo });
        }
    }, [modelo]);

  return (
    <Cuadros className="h-[126px]">
      <TitulosCuadrados>Canal</TitulosCuadrados>

      <BotonSelect
        value={modelo}
        onValueChange={(val) => setModelo(val)}
        options={opciones}
        placeholder=""
        className="h-9"
      />
    </Cuadros>
  );
}
