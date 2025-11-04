export default function cuadroAletas(){
    return(
        <div className="flex flex-row">
           <span
                className="w-[4] h-[4] material-symbols-outlined mr-[10px] transition-colors duration-150"
                style={{ fontSize: "1rem", // ancho y alto aproximado de 4x4 en Tailwind
                lineHeight: "1rem",
                color:"black" // asegura que el icono quede centrado verticalmente 
                }} // fallback directo
                >
                target
            </span> 
        <div class="whitespace-nowrap grid box-border text-[oklch(0.444_0.177_26.899)] text-[12.25px] leading-[17.5px] font-sans border border-[rgba(0,0,0,0.1)] border-0 gap-x-[3.5px] gap-y-[3.5px] h-[38.5px] justify-items-start text-left col-start-2 w-[880.833px]">
            <strong>Alertas de Performance:</strong>
             "Reach +3 está 12.5% por debajo del target. Revisar optimización de frecuencia en canales digitales".
        </div>

        </div>
    )
}