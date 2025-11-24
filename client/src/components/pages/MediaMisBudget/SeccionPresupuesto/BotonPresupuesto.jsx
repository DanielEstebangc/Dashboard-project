export default function BotonPresupuesto({ activeButton, onButtonClick }) {
  return (
    <div className="flex grid-cols-[122.78px_122.78px] items-center justify-center w-[251.56px] h-[31.5px] bg-[#ececf0] text-[#717182] text-[14px] leading-[21px] font-sans p-[3px] rounded-[12.75px] gap-[7px]">
      
      <button
        className={`flex items-center justify-center w-[122.78px] h-[24.83px] px-[7px] py-[3.5px] text-[12.25px] leading-[17.5px] font-medium font-sans rounded-[12.75px] cursor-default whitespace-nowrap transition-colors duration-150 ${
          activeButton === "presupuesto" ? "bg-white text-black" : "bg-transparent text-black"
        }`}
        onClick={() => onButtonClick("presupuesto")}
      >
        Botón
      </button>

      <button
        className={`flex items-center justify-center w-[122.78px] h-[24.83px] px-[7px] py-[3.5px] text-[12.25px] leading-[17.5px] font-medium font-sans rounded-[12.75px] cursor-default whitespace-nowrap transition-colors duration-150 ${
          activeButton === "real" ? "bg-white text-black" : "bg-transparent text-black"
        }`}
        onClick={() => onButtonClick("real")}
      >
        Real
      </button>

    </div>
  );
}
