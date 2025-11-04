import GarpChart  from "../../../charts/charts_executive/GarpChart/GarpChart"
export default function CuadroGap(){
    return(
     <div className="shadow-[0_0_7px_rgba(0,0,0,0.1)] hover:border-[rgb(158,45,56)] bg-white bg-scroll bg-clip-border bg-origin-padding bg-left-top bg-repeat border-2 border-transparent rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] shadow-sm box-border flex flex-col font-sans text-[14px] leading-[21px] mb-[21px] mx-0 p-0 text-left transition-all duration-200 ease w-[536.479px] h-[303.75px]" style={{color:'oklch(0.145 0 0)',outlineColor:'oklab(0.708 0 0 / 0.5)',boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',backgroundImage:'none',columnGap:'21px',rowGap:'21px',WebkitTapHighlightColor:'rgba(0,0,0,0)'}}>
        <div className="grid items-start box-border text-left font-sans text-[14px] leading-[21px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] p-[21px] gap-[5.25px] w-[532.479px] h-[57.75px]" style={{color:'oklch(0.145 0 0)',outlineColor:'oklab(0.708 0 0 / 0.5)',gridAutoRows:'min-content',gridTemplateRows:'14px 17.5px',columnGap:'5.25px',rowGap:'5.25px',WebkitTapHighlightColor:'rgba(0,0,0,0)',containerName:'card-header',containerType:'inline-size'}}>
            <h4 className="block box-border text-left font-sans text-[14px] font-normal leading-[14px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] w-[490.479px] h-[14px] m-0 p-0" style={{color:'oklch(0.145 0 0)',outlineColor:'oklab(0.708 0 0 / 0.5)',WebkitTapHighlightColor:'rgba(0,0,0,0)'}}>
                Gap Presupuesto vs Plan
            </h4>
            <p className="box-border text-[oklch(0.446_0.03_256.802)] block font-sans text-[12.25px] leading-[17.5px] h-[17.5px] w-[490.479px] m-0 p-0 text-left border-0 outline-[oklab(0.708_0_0_/_0.5)]">
            Variación mensual planificado vs real</p>
        </div>
        <div className="box-border text-[oklch(0.145_0_0)] block font-sans text-[14px] leading-[21px] h-[221px] w-[532.479px] m-0 text-left border-0 outline-[oklab(0.708_0_0_/_0.5)] pb-[21px] px-[21px] pt-0">
        <GarpChart/>
        </div>


     </div>
   
    )
}