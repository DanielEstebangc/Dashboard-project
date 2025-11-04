
export default function TitulosCuadrados({ className = "", children }) {
  return (
    <div
        className={`
            w-[233px] h-[54.25px]
            pt-[21px] pb-[10.5px] pr-[21px] pl-[21px]
            gap-y-[5.25px] gap-x-[5.25px]
            text-[14px] leading-[21px] text-left
            box-border
            "
            ${className}  /* ← aquí se mezclan las clases externas */
      `}
        >
            <h4 className="text-[12.25px] font-medium leading-[17.5px] text-neutral-900 w-[191px] m-0 p-0">
                {children}
            </h4>
        </div>
  );
}
