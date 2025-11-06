export default function BotonPagina ({icon,children, isActive}) {
    return (        
       <button 
        className={`   
       flex items-center box-border text-[14px] leading-[21px] font-sans font-normal h-[31.5px] w-[237px] rounded-[8.75px] border-0 text-left p-[7px_10.5px] m-0 mb-[3.5px] opacity-100 transition-colors duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isActive
          ? "bg-[rgb(158,45,56)] text-white"
          : "bg-white text-gray-700 hover:bg-gray-200"}
        `}
        >

        <span
        className={`w-[4] h-[4] material-symbols-outlined mr-[10px] transition-colors duration-150 
        ${isActive ? "text-white" : "text-gray-700"}`}
        style={{ color: isActive ? "white" : "#374151", 
        fontSize: "1rem", // ancho y alto aproximado de 4x4 en Tailwind
        lineHeight: "1rem" // asegura que el icono quede centrado verticalmente 
        }} // fallback directo
        >
         {icon}
        </span> 

       
        
        <span className="whitespace-nowrap box-border  block font-sans text-[12.25px] leading-[17.5px] font-normal h-[17.5px] w-[94.4062px] border-0 text-left p-0 m-0 mr-[10.5px]">
            {children}            
        </span>

        <span className={`material-symbols-outlined ml-auto text-[16px] transition-colors duration-150
        ${isActive ? "text-white" : "text-gray-700"}`}
        style={{ color: isActive ? "white" : "#374151" }} // fallback directo
        >
            chevron_right
        </span>
        </button>
        
        

    );
}
                