
// src/components/layout/Sidebar.jsx
import SidebarTitle from "./componets/SidebarTitle";
import RangoFechas from "./componets/RangoFechas/SidebarRangofechas";
import  ModeloVehiculo  from "./componets/ModelodeVehículo/ModeloVehiculo";
import EtapaFunnel from "./componets/EtapadeFunnel/EtapaFunnel";
import Audiencia from "./componets/Audiencia/Audiencia";
import Canal from "./componets/Canal/Canal";
import RegionCiudad from "./componets/RegiónCiudad/RegionCiudad";
import PaginasLista from "./componets/ListPaginas/PaginasLista";

export default function Sidebar({ filters, setFilters }) {
  return (
    <aside className="block box-border m-0 p-[21px] w-[280px] h-full bg-[oklch(0.985_0.002_247.839)] border-r border-[1px] border-[oklch(0.928_0.006_264.531)] font-sans text-[14px] leading-[21px] text-[oklch(0.145_0_0)] text-left">
      <div className="block m-0 mb-[21px] w-[237px] h-[958.5px] p-0 border-0 font-sans text-[14px] leading-[21px] text-left box-border">
        <SidebarTitle />
        <RangoFechas filters={filters} setFilters={setFilters} />
        <ModeloVehiculo filters={filters} setFilters={setFilters} />
        <EtapaFunnel filters={filters} setFilters={setFilters} />
        <Canal filters={filters} setFilters={setFilters} />
        <Audiencia filters={filters} setFilters={setFilters} />
        <RegionCiudad filters={filters} setFilters={setFilters} />
        <PaginasLista filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  );
}
