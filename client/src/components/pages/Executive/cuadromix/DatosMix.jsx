export default function Datos_Mix({className,valor, titulo,porcentaje}){
    const formattedValue = valor
  ? `${Number(valor).toLocaleString("es-ES")}`
  : "0";
    return(
        <div className="flex items-center box-border m-0 mb-[14px] p-0 text-left w-[115.229px] h-[38.5px] leading-[21px] text-[14px] font-sans [color:oklch(0.145_0_0)] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4] [text-size-adjust:100%] [unicode-bidi:isolate] [font-feature-settings:normal] [font-variation-settings:normal] [font-synthesis:none] [webkit-tap-highlight-color:rgba(0,0,0,0)] border-t-[0px] border-t-solid border-t-[rgba(0,0,0,0.1)] border-r-[0px] border-r-solid border-r-[rgba(0,0,0,0.1)] border-b-[0px] border-b-solid border-b-[rgba(0,0,0,0.1)] border-l-[0px] border-l-solid border-l-[rgba(0,0,0,0.1)]">
            <div className={`${className} block box-border m-0 mb-0 ml-0 mr-[10.5px] mt-0 p-0 text-left w-[14px] h-[14px] leading-[21px] text-[14px] font-sans [color:oklch(0.145_0_0)] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4] [text-size-adjust:100%] [unicode-bidi:isolate] [webkit-tap-highlight-color:rgba(0,0,0,0)]  rounded-t-[3.5px] rounded-b-[3.5px] border-t-[0px] border-t-solid border-t-[rgba(0,0,0,0.1)] border-r-[0px] border-r-solid border-r-[rgba(0,0,0,0.1)] border-b-[0px] border-b-solid border-b-[rgba(0,0,0,0.1)] border-l-[0px] border-l-solid border-l-[rgba(0,0,0,0.1)`}>
            </div>
            <div className="block box-border m-0 p-0 text-left w-[90.7292px] h-[38.5px] leading-[21px] text-[14px] font-sans [color:oklch(0.145_0_0)] [outline-color:oklab(0.708_0_0_/_0.5)] [tab-size:4] [text-size-adjust:100%] [unicode-bidi:isolate] [webkit-tap-highlight-color:rgba(0,0,0,0)] border-t-[0px] border-t-solid border-t-[rgba(0,0,0,0.1)] border-r-[0px] border-r-solid border-r-[rgba(0,0,0,0.1)] border-b-[0px] border-b-solid border-b-[rgba(0,0,0,0.1)] border-l-[0px] border-l-solid border-l-[rgba(0,0,0,0.1)]">
                <div class="font-medium">{titulo}</div>
                <div class="flex flex-row items-center space-x-2 text-xs text-gray-600">
                    <span>{porcentaje}%</span>
                    <span>${formattedValue}</span>
                </div>      
            </div>
        </div>
    )

}