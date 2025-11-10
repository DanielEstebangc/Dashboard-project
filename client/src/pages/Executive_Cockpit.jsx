{/* importacion tarjeta funnels */}
import FunnelChart from "../components/charts/charts_executive/chartfunnel/Funnelchart"
import FunnelTitulo from "../components/pages/Executive/cuadrofunnel/Funnelcart"
import Tarjeta from "../components/pages/Executive/tarjetas"
import EtapasCuadro  from "../components/pages/Executive/cuadrofunnel/CuadroEtapas"
{/* importacion tarjeta Mix */}
import CuadroMIX from "../components/pages/Executive/cuadromix/CuadroMIX" 
{/* importacion tarjeta quick */}
import QuickCuadro from "../components/pages/Executive/QuickCuadro/Quick_Cuadro"
{/* importacion tarjeta Gap */}
import CuadroGap from "../components/pages/Executive/cuadroGap/CuadroGap"
{/* importacion tarjeta Radar */}
import CuadroRadar from "../components/pages/Executive/CuadroRadar/CuadroRadar"
{/* importacion tarjeta Alertas */}
import CuadroAlertas from "../components/pages/Executive/CuadroAlertas/CuadroAlertas"

export default function Executive_Cockpit() {
  return (
<div className="w-full flex flex-col items-center justify-center p-4 ">
  <div className="grid box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left gap-x-[14px] gap-y-[14px] m-0 mb-[21px] w-full max-w-[900px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] grid-cols-5 [--webkit-tap-highlight-color:rgba(0,0,0,0)]">
    <Tarjeta titulo={"Reach+1"} valor={2680000} target={7.8}/>
    <Tarjeta titulo={"Reach +3"} valor={1050000} target={12.5}/>
    <Tarjeta titulo={"Qualified Leads"} valor={923} target={8.6}/>
    <Tarjeta titulo={"CPL"} valor={165000} target={8.3}/>
    <Tarjeta titulo={"ROAS"} valor={38} target={9.5}/>
    
  </div>

  <div className="bg-white grid box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left gap-x-[21px] gap-y-[21px] m-0 mb-[21px] w-full max-w-[900px] border-[0px] grid box-border outline-[oklab(0.708_0_0_/_0.5)] grid-cols-12 ">
    <div className="col-span-5 flex flex-col items-center justify-start box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left w-full h-auto border-[0px] border-solid  outline-[oklab(0.708_0_0_/_0.5)] ">
      {/* seccion 1 */}
      <div className="overflow-hidden bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center hover:border-[rgb(158,45,56)] w-[377.188px] h-auto bg-white rounded-[8px] border-2 border-transparent shadow-sm text-[14px] text-[oklch(0.145_0_0)] font-sans leading-[21px] p-0 m-0 mb-[21px] gap-[21px] outline-[oklab(0.708_0_0_/_0.5)] transition-all duration-200 ease-in-out [box-sizing:border-box] [unicode-bidi:isolate]">
        <div className="shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-white border-[rgba(112, 103, 103, 0.8)] block w-full h-auto m-0 p-0 outline-[oklab(0.708_0_0_/_0.5)]">
            <FunnelTitulo/>
            <div className="bg-white flex flex-col justify-center items-center w-full h-auto px-[21px] py-[21px] border-[rgba(112, 103, 103, 0.8)]">
                <div className="flex flex-col justify-center items-center w-full h-auto border-[rgba(112, 103, 103, 0.8)]">
                  <FunnelChart/>
                </div>
                <div className=" bg-white grid grid-cols-3 gap-[14px] w-full h-auto mt-[14px] text-[14px] leading-[21px] text-left text-[oklch(0.145_0_0)] font-sans border-0 p-0 m-0">
                  <EtapasCuadro className=" text-[#9E2D38]" titulo="Awareness" leads={1200} valor={2300} />
                  <EtapasCuadro className=" text-[rgb(102,102,102)]" titulo="Consideration" leads={1200} valor={2300} />
                  <EtapasCuadro className=" text-[rgb(43,90,122)]" titulo="Purchase" leads={1200} valor={2300} />
                </div>
            </div>
        </div>
      </div>
        <QuickCuadro/>
    </div>
    {/* seccion 2 */}
    <div className="flex flex-col gap-[2px] box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left border-0 outline-[oklab(0.708_0_0_/_0.5)] isolate w-[536.479px] h-[953.25px] m-0 p-0 [grid-column:span_7/span_7] [tab-size:4] [text-size-adjust:100%] [-webkit-tap-highlight-color:rgba(0,0,0,0)]">
      <CuadroMIX/>
      <CuadroGap/>
      <CuadroRadar/>
    </div>
  </div>
  {/* seccion 3 */}
  <div className=" grid items-start box-border text-[oklch(0.145_0_0)] font-sans text-[12.25px] leading-[17.5px] text-left bg-[oklch(0.971_0.013_17.38)] border border-[0.666667px] border-[oklch(0.885_0.062_18.334)] rounded-[8.75px] gap-x-[10.5px] gap-y-[1.75px] w-[934.667px] h-[60.8333px] m-0 p-[10.5px_14px] relative outline-[oklab(0.708_0_0_/_0.5)] [grid-template-columns:14px_880.833px] [tab-size:4] [text-size-adjust:100%] [-webkit-tap-highlight-color:rgba(0,0,0,0)] isolate">
    <CuadroAlertas/>
  </div>
</div>
)
}
