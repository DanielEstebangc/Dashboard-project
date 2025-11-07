// src/components/layout/Main/Main.jsx
export default function Main({ children }) {
  return (
    <main className="box-border w-[512px] h-[1318px] p-[21px] m-0 text-left text-[14px] leading-[21px] font-sans flex flex-1 basis-0 shrink grow border border-t-[rgba(0,0,0,0.1)] border-b-[rgba(0,0,0,0.1)] border-l-[rgba(0,0,0,0.1)] border-r-[rgba(0,0,0,0.1)] outline-[#b4b4b4]/50">

    <div className="w-full h-full flex-1 m-0 p-0">
      
        {children}
    </div>
     
    </main>

  );
}