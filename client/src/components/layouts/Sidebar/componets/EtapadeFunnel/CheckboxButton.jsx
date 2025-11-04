import { useState } from "react";

export default function CheckboxButton() {
  const [checked, setChecked] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      className={`w-[14px] h-[14px] flex items-center justify-center border border-[rgb(3,2,19)] rounded-[4px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-150 mr-2 
        ${checked ? "bg-[rgb(3,2,19)]" : "bg-white"
      }`}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] h-[14px] text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
    
  );
}
