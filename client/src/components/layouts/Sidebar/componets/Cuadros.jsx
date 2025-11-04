export default function Cuadros({ className = "", children }) {
  return (
    <div
      className={`
        flex flex-col w-[237px] 
        rounded-[8px] border-2 border-transparent
        shadow-[0_1px_3px_rgba(0,0,0,0.1)]
        mb-[14px] gap-[21px]
        text-[14px] leading-[21px] text-left
        box-border
        transition-all duration-200 ease-in-out
        hover:border-[rgb(158,45,56)]
        ${className}  /* ← aquí se mezclan las clases externas */
      `}
      style={{ backgroundColor: "white" }}
    >
      {children}
    </div>
  );
}
