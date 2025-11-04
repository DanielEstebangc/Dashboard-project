import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function BotonSelect({
  options = [],
  value = "",
  onValueChange = () => {},
  placeholder = "Seleccionar",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null); // 🔹 referencia al contenedor principal

  const handleSelect = (optionValue) => {
    onValueChange(optionValue);
    setOpen(false);
  };

  // 🔹 Detectar click fuera del componente y cerrar el menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef} // 🔹 Asignamos la referencia aquí
      className={`
        relative ${className}
        box-border block text-left text-[14px] leading-[21px]
        h-[52.5px] w-[233px]
        px-[21px] pt-0 pb-[21px]
        text-[oklch(0.145_0_0)]
        outline-[oklab(0.708_0_0_/_0.5)]
        border-solid border-[rgba(0,0,0,0.1)] 
        font-sans [font-synthesis:none] [font-feature-settings:normal] [font-variation-settings:normal]
        [tab-size:4] [text-size-adjust:100%] [unicode-bidi:isolate] [-webkit-tap-highlight-color:rgba(0,0,0,0)]
      `}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-[191px] h-[31.5px] items-center justify-between rounded-md border border-transparent bg-[#f3f3f5] px-[10.5px] py-[7px] text-[12.25px] font-normal text-[oklch(0.145_0_0)] leading-[17.5px] shadow-sm transition-colors duration-150 ease-in-out hover:bg-gray-50"
      >
        <span
          className="flex items-center w-[76.164px] h-[17.5px] text-[12.25px] leading-[17.5px] font-normal text-[oklch(0.145_0_0)] overflow-hidden whitespace-nowrap pointer-events-none"
        >
          {value ? options.find((o) => o.value === value)?.label : placeholder}
        </span>
        <ChevronDown className="size-4 opacity-50" />
      </button>

      {open && (
        <ul className="py-[2px] absolute z-10 mt-0.5 w-[190px] bg-white border border-gray-200 rounded-sm shadow-sm text-[12px]">

          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="px-1.5 py-1.5 cursor-pointer hover:bg-gray-100"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
