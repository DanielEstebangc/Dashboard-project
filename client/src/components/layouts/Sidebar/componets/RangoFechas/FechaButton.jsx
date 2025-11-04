export default function FechaButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center w-[49.875px] h-[28px] px-[10.5px] gap-[5.25px] mb-0 mr-[7px] p-0 
        border border-[rgba(0,0,0,0.1)] rounded-[6.75px] text-[12.25px] font-medium leading-[17.5px] 
        flex-shrink-0 whitespace-nowrap transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        box-border cursor-pointer outline-none
        ${isActive
          ? "bg-black text-white border-black"
          : "bg-white text-black hover:bg-gray-200"}
      `}
      style={{
        appearance: "button",
        columnGap: "5.25px",
        textAlign: "center",
        backgroundColor: isActive ? "black" : "white",
        color: isActive ? "white" : "black",
      }}
      onMouseEnter={(e) => {
      if (!isActive) e.currentTarget.style.backgroundColor = "lightgray";
      }}
      onMouseLeave={(e) => {
       if (!isActive) e.currentTarget.style.backgroundColor = "white";
      }}
    >
      {label}
    </button>
  );
}
