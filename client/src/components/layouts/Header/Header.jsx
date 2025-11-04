// src/components/layout/Header.jsx

import HeaderTitle from './components/HeaderTitle';
import Logo from './components/HeaderLogo';
import Headerspan  from './components/headerspan';
import HeaderFilter from './components/HeaderFilter';

export default function Header() {
  return (
 <header className="flex items-center justify-between h-[56px] w-full bg-white border-b border-b-[oklch(0.928_0.006_264.531)] px-[21px] text-[14px] leading-[21px] font-sans box-border ">

  <div className="
    flex items-center
    w-[303.25px] h-[28px]
    text-[14px] leading-[21px] text-ok
    font-sans
    m-0 p-0
    outline-[color:oklab(0.708_0_0_/0.5)]
    border-0 border-solid border-[rgba(0,0,0,0.1)]
    
  ">
    <Logo/>

    <HeaderTitle className="whitespace-nowrap flex-shrink-0"></HeaderTitle>

    <Headerspan className="flex-shrink-0">
    </Headerspan>
  </div>

  {/* Filtros */}
  <div className="flex items-center h-auto m-0 p-0 box-border w-[102.141px] whitespace-nowrap flex-shrink-0">
    <HeaderFilter>0 filtros activos</HeaderFilter>
  </div>

</header>

  );
}
