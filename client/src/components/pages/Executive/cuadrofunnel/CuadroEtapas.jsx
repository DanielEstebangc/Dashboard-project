import React from "react";

export default function EtapasCuadro({ className = "", titulo, leads, valor }) {
  return (
    <div className="bg-white block w-[113.047px] h-[52.5px] text-center text-[14px] leading-[21px] text-[oklch(0.145_0_0)] font-sans border-0 p-0 m-0 outline-[oklab(0.708_0_0_/_0.5)]">
      
      <div className="block w-[113.047px] h-[17.5px] text-center text-[12.25px] leading-[17.5px] text-[oklch(0.446_0.03_256.802)] font-sans border-0 p-0 m-0 outline-[oklab(0.708_0_0_/_0.5)]">
        {titulo}
      </div>

      <div className={` ${className} block w-[113.047px] h-[21px] text-center text-[14px] leading-[21px]  font-sans font-semibold border-0 p-0 m-0 outline-[oklab(0.708_0_0_/_0.5)]` }>
        {leads} leads
      </div>

    
      <div 
      className={`block w-[113.047px] h-[14px] text-center text-[10.5px] leading-[14px] text-[oklch(0.551_0.027_264.364)] font-sans border-0 p-0 m-0 outline-[oklab(0.708_0_0_/_0.5) ${className}` }>
        {`${Number(valor).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0
        })} CPL`}
      </div>

    </div>
  );
}
