import SeccionDatos from "./SeccionDatos"
export default function SecciondeAnalisis({icono,titulo,subtitulo,datos,proximamente,textoclass,extraClass,estilosiconos}){
    return(
    <div className="bg-white border-[2px] hover:border-[rgb(158,45,56)] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] box-border font-sans text-[14px] leading-[21px] flex flex-col gap-[21px] w-[934.667px] h-[222.833px] text-left transition-all duration-200 ease-in-out">
        <div className="grid items-start box-border font-sans text-[14px] leading-[21px] gap-x-[5.25px] gap-y-[5.25px] grid-rows-[17.5px_17.5px] h-[61.25px] w-[930.667px] px-[21px] py-[21px] text-left">
            <h4 className="text-black flex items-center box-border font-sans text-[14px] leading-[14px] font-normal h-[17.5px] w-[888.667px] text-left">
            <span
                className="material-symbols-outlined me-2"
                style={estilosiconos}>
                 {icono}
                </span>
            {titulo}
            </h4>   
            <p className="block box-border text-[oklch(0.446_0.03_256.802)] font-sans text-[12.25px] leading-[17.5px] h-[17.5px] w-[888.667px] text-left m-0 p-0 border-0 outline-[oklab(0.708_0_0_/_0.5)]">
                {subtitulo}
            </p>
        </div>
        <div className="block box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] h-[136.583px] w-[930.667px] p-[21px] pt-0 text-left m-0 outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="block box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] h-[115.583px] w-[888.667px] text-left m-0 p-0 outline-[oklab(0.708_0_0_/_0.5)]">
               <div className="flex flex-wrap gap-[14px] p-0 m-0 mb-[14px] box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
                    {datos?.map((item, index) => (
                    <SeccionDatos
                        key={index}
                        titulodatos={item.titulodatos}
                        data={item.data}
                        comparacion={item.comparacion}
                        textoclass={textoclass}
                        extraClass={extraClass}
                    />
                    ))}
                </div>
                <span className="inline-flex items-center justify-center gap-[3.5px] px-[7px] py-[1.75px] text-[10.5px] font-medium leading-[14px] text-[rgb(207,177,141)] border border-[0.666667px] border-[rgb(207,177,141)] rounded-[6.75px] overflow-hidden transition-colors duration-150 ease-in-out whitespace-nowrap">
                    {proximamente}
                </span>
            </div>
        </div>        

    </div>
    )
    
}