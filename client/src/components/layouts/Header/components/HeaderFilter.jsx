export default function HeaderFilter({ children }) {
  return (
    <span
      className="flex items-center gap-1 text-[12.25px] leading-[17.5px] w-[81.14px] h-[17.5px]"
      style={{ color: 'rgb(75, 85, 99)' }} // gray-600 aplicado al texto
    >
      <span className="material-symbols-outlined text-[16px]">
        filter_alt
      </span>
      {children}
    </span>
  );
}
