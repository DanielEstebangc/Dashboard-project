import { useState } from "react";
import FechaButton from "./FechaButton";

export default function RangoFechas() {
  const [active, setActive] = useState("YTD");

  return (
    <div
      className="
        flex flex-col w-[237px] h-[152.75px]
        rounded-[8px] border-2 border-transparent
        shadow-[0_1px_3px_rgba(0,0,0,0.1)]
        mb-[14px] gap-[21px]
        text-[14px] leading-[21px] text-left
        box-border
        transition-all duration-200 ease-in-out
        hover:border-[rgb(158,45,56)]
    "
       style={{ backgroundColor: "white" }}

    >
        <div
            className="
            w-[233px] h-[54.25px]
            pt-[21px] pb-[10.5px] pr-[21px] pl-[21px]
            gap-y-[5.25px] gap-x-[5.25px]
            text-[14px] leading-[21px] text-left
            box-border
            "
        >
            <h4 className="text-[12.25px] font-medium leading-[17.5px] text-neutral-900 w-[191px] m-0 p-0">
                Rango de Fechas
            </h4>
        </div>

      <div
        className="
          px-[21px] pb-[21px] box-border
          text-[14px] leading-[21px] text-[oklch(0.145_0_0)]
        "
      >
        <div className="flex mb-[12px]">
          {["MTD", "QTD", "YTD"].map((label) => (
            <FechaButton
              key={label}
              label={label}
              isActive={active === label}
              onClick={() => setActive(label)}
            />
          ))}
        </div>

        <div
          className="
            text-[10.5px] text-[color:oklch(0.446_0.03_256.802)]
            leading-[14px] w-[191px]
          "
        >
          Ene 1, 2024 - Jul 23, 2024
        </div>
      </div>
    </div>
  );
}
