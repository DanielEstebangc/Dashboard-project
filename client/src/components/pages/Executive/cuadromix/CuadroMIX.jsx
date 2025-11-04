import MixvsDigitalChart from "../../../charts/charts_executive/mix_chart/Mix_ATL_vs_Digital_Chart"
import Datos_Mix from "./DatosMix"  
export default function CuadroMix(){
    return(
            <div className="shadow-[0_0_7px_rgba(0,0,0,0.1)] hover:border-[rgb(158,45,56)] box-border flex flex-col bg-[rgb(255,255,255)] text-[oklch(0.145_0_0)] w-[536.479px] h-[303.75px] m-0 mb-[21px] p-0 text-left text-[14px] leading-[21px] font-sans rounded-[8px] border-[2px] border-[rgba(0,0,0,0)] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] transition-all duration-[0.2s] ease-[ease] [-webkit-tap-highlight-color:rgba(0,0,0,0)] [background-attachment:scroll] [background-clip:border-box] [background-origin:padding-box] [background-position:0%_0%] [background-repeat:repeat] [background-size:auto] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4]">
                <div className="box-border grid items-start gap-x-[5.25px] gap-y-[5.25px] w-[532.479px] h-[57.75px] m-0 p-[21px] text-left text-[14px] leading-[21px] font-sans text-[oklch(0.145_0_0)] border-[0px] border-solid border-[rgba(0,0,0,0.1)] [grid-auto-rows:min-content] [grid-template-rows:14px_17.5px] [container-name:card-header] [container-type:inline-size] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4] [-webkit-tap-highlight-color:rgba(0,0,0,0)]">
                    <h4 className="box-border block w-[490.479px] h-[14px] m-0 p-0 text-left text-[14px] leading-[14px] font-sans font-[400] text-[oklch(0.145_0_0)] border-[0px] border-solid border-[rgba(0,0,0,0.1)] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4] [-webkit-tap-highlight-color:rgba(0,0,0,0)]">
                        Mix ATL vs Digital
                    </h4>
                    <p className="box-border block w-[490.479px] h-[17.5px] m-0 p-0 text-left text-[12.25px] leading-[17.5px] font-sans font-normal text-[oklch(0.446_0.03_256.802)] border-[0px] border-solid border-[rgba(0,0,0,0.1)] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4] [-webkit-tap-highlight-color:rgba(0,0,0,0)]">
                        Distribución del presupuesto por tipo de medio
                    </p>
                </div>
                <div className="box-border block text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left w-[532.479px] h-[221px] p-[21px] pt-0 m-0 border-b-0 border-l-0 border-r-0 border-t-0 border-[rgba(0,0,0,0.1)] border-solid outline-[oklab(0.708_0_0_/_0.5)] tab-size-[4] [unicode-bidi:isolate] [-webkit-tap-highlight-color:rgba(0,0,0,0)]" >
                    <div className="flex items-center box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left w-[490.479px] h-[200px] m-0 p-0 border-b-0 border-l-0 border-r-0 border-t-0 border-[rgba(0,0,0,0.1)] border-solid outline-[oklab(0.708_0_0_/_0.5)] tab-size-[4] [unicode-bidi:isolate] [-webkit-tap-highlight-color:rgba(0,0,0,0)]">
                        <MixvsDigitalChart/> 
                        <div className="box-border block text-[14px] leading-[21px] text-[oklch(0.145_0_0)] w-[115.229px] h-[91px] m-0 p-0 text-left font-sans [-webkit-tap-highlight-color:rgba(0,0,0,0)] [outline-color:oklab(0.708_0_0_/_0.5)]">
                            <Datos_Mix className="bg-[rgb(158,45,56)]" titulo="ATL" porcentaje={45} valor={1000000}/> 
                            <Datos_Mix className="bg-[#666666]" titulo="Digital" porcentaje={58} valor={2680000}/> 

                        </div>
                    </div>
                </div>


            </div>

    )
}