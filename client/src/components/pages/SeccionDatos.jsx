export default function SeccionDatos({titulodatos, comparacion, data , extraClass, textoclass}){
    return(
        <div className={`block box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px]  text-left bg-[oklch(0.985_0.002_247.839)] border border-[rgba(0,0,0,0.1)] border-solid rounded-[3.5px] m-0 p-[14px] outline-[oklab(0.708_0_0_/_0.5)] ${extraClass}`}>
            <div className="box-border text-[oklch(0.446_0.03_256.802)] block font-sans text-[10.5px] leading-[14px] m-0 p-0 w-[258.885px] h-[14px] text-left border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/0.5)] [tab-size:4] isolate">
                {titulodatos}
            </div>
            <div className={`box-border block font-sans text-[17.5px] leading-[24.5px] font-semibold  m-0 p-0 w-[258.885px] h-[24.5px] text-left border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/0.5)] [tab-size:4] isolate ${textoclass}`}>
                {data}
            </div>
            <div className="text-green-600 box-border text-[oklch(0.446_0.03_256.802)] block font-sans text-[10.5px] leading-[14px] m-0 p-0 w-[258.885px] h-[14px] text-left border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/0.5)] [tab-size:4] isolate">
                {comparacion}
            </div>
        </div>        
   )
}