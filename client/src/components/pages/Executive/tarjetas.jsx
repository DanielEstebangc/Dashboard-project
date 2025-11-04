export default function targetas({ titulo, valor, target  }) {
  const formattedValue = valor
  ? `${Number(valor).toLocaleString("es-ES")}`
  : "0";

  const simbol="+";
  return (
<div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] whitespace-nowrap hover:border-[rgb(158,45,56)] bg-white border-2 border-transparent rounded-lg shadow-sm box-border text-[oklch(0.145_0_0)] flex flex-col gap-[21px] font-sans text-[14px] leading-[21px] text-left h-[150.583px] w-[175.729px] m-0 p-0 transition-all duration-200 ease-in-out">
  <div className="grid items-start box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left gap-x-[5.25px] gap-y-[5.25px] w-[171.729px] h-[50.75px] m-0 mb-0 border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px] border-solid border-[rgba(0,0,0,0.1)] p-[21px] pb-[7px] outline-[oklab(0.708_0_0_/_0.5)] [grid-auto-rows:min-content] [grid-template-rows:17.5px_0px] [container-name:card-header] [container-type:inline-size] [tab-size:4] [text-size-adjust:100%] [unicode-bidi:isolate] [-webkit-tap-highlight-color:rgba(0,0,0,0)]">
    <div className="flex items-center justify-between box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left m-0 p-0 h-[17.5px] w-[129.729px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] [--webkit-tap-highlight-color:rgba(0,0,0,0)] unicode-bidi-isolate [text-size-adjust:100%]">
      <h4 className="block box-border text-[oklch(0.446_0.03_256.802)] font-sans text-[12.25px] font-[400] leading-[17.5px] text-left m-0 p-0 h-[17.5px] w-[50.5312px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] [--webkit-tap-highlight-color:rgba(0,0,0,0)] unicode-bidi-isolate [text-size-adjust:100%]" >
          {titulo}
      </h4>  
    </div>
  </div>  
  <div className="block box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left m-0 p-0 pt-0 pb-[21px] px-[21px] h-[73.5px] w-[171.729px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] [--webkit-tap-highlight-color:rgba(0,0,0,0)] unicode-bidi-isolate [text-size-adjust:100%]">
    <div className="block box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left m-0 p-0 h-[52.5px] w-[129.729px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] [--webkit-tap-highlight-color:rgba(0,0,0,0)] unicode-bidi-isolate [text-size-adjust:100%]">
      <div className="block box-border text-[oklch(0.21_0.034_264.665)] font-sans text-[21px] font-semibold leading-[28px] text-left m-0 mb-[7px] p-0 h-[28px] w-[129.729px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] [--webkit-tap-highlight-color:rgba(0,0,0,0)] unicode-bidi-isolate [text-size-adjust:100%]">
        {formattedValue}
      </div>
      <div className="flex items-center box-border text-[oklch(0.145_0_0)] font-sans text-[14px] leading-[21px] text-left m-0 p-0 h-[17.5px] w-[129.729px] border-[0px] border-solid border-[rgba(0,0,0,0.1)] outline-[oklab(0.708_0_0_/_0.5)] [--webkit-tap-highlight-color:rgba(0,0,0,0)] unicode-bidi-isolate [text-size-adjust:100%]">
          <span className={`material-symbols-outlined`}
            style={{  
            fontSize: "1rem", // ancho y alto aproximado de 4x4 en Tailwind
            lineHeight: "1rem", // asegura que el icono quede centrado verticalmente 
            color: simbol == "+" ? "#16a34a" : "#dc2626",
            }}
          >
              {simbol == "+" ? "trending_up" : "trending_down"}
          </span>
          <span className="text-green-600 whitespace-nowrap block box-border w-[34.2812px] h-[17.5px] text-[12.25px] leading-[17.5px] font-sans text-[oklch(0.627_0.194_149.214)] text-left m-0 mr-[7px] outline-[oklab(0.708_0_0_/_0.5)] border-0 [--webkit-tap-highlight-color:rgba(0,0,0,0)]">
            {simbol}{target}%
          </span>
          <span class="text-xs text-gray-500">
            vs target
          </span>
        </div>
      </div>
    </div>
</div>

  );
}
