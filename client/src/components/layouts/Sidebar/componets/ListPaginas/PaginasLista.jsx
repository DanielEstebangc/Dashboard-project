import { useState } from "react";
import BotonPagina from "./BotonPaginas";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


export default function PaginasLista () {
    const [active, setActive] = useState("Executive Cockpit");

    return (
        <div className="box-border text-[oklch(0.145_0_0)] block font-sans text-[14px] leading-[21px] h-[263.5px] w-[237px] border-t-[1px] border-t-[oklch(0.928_0.006_264.531)] border-b-0 border-l-0 border-r-0 text-left pt-[21px] pr-0 pb-0 pl-0 m-0">

            <h3 className="box-border text-[oklch(0.21_0.034_264.665)] block font-sans text-[14px] font-medium leading-[21px] h-[21px] w-[237px] border-t-0 border-b-0 border-l-0 border-r-0 text-left p-0 m-0 mb-[14px]">
                Páginas
            </h3>

            <div className="box-border text-[oklch(0.145_0_0)] block font-sans text-[14px] leading-[21px] h-[206.5px] w-[237px] border-t-0 border-b-0 border-l-0 border-r-0 text-left p-0 m-0">

           <NavLink
                to="/executive"
                style={{ textDecoration: "none" }}
                >
                {({ isActive }) => (
                    <BotonPagina
                    icon="finance"
                    isActive={isActive}
                    >
                    Executive Cockpit
                    </BotonPagina>
                )}
            </NavLink>



            <NavLink 
                to="/media-mix-budget" 
                style={{ textDecoration: 'none' }}
                >
                {({ isActive }) => (
                    <BotonPagina icon="target" isActive={isActive}>
                    Media Mix & Budget
                    </BotonPagina>
                )}
            </NavLink>

            <NavLink 
                to="/awareness-performance" 
                style={{ textDecoration: 'none' }}
                >
                {({ isActive }) => (
                    <BotonPagina icon="Language" isActive={isActive}>
                    Awareness Performance
                    </BotonPagina>
                )}
            </NavLink>

            <NavLink 
                to="/consideration-hub" 
                style={{ textDecoration: 'none' }}
                >
                {({ isActive }) => (
                    <BotonPagina icon="Group" isActive={isActive}>
                    Consideration Hub
                    </BotonPagina>
                )}
            </NavLink>

            <NavLink 
                to="/purchase-leads" 
                style={{ textDecoration: 'none' }}
                >
                {({ isActive }) => (
                    <BotonPagina icon="Shopping_Cart" isActive={isActive}>
                    Purchase & Leads
                    </BotonPagina>
                )}
            </NavLink>

            <NavLink 
                to="/audience-insights" 
                style={{ textDecoration: 'none' }}
                >
                {({ isActive }) => (
                    <BotonPagina icon="Group" isActive={isActive}>
                    Audience Insights
                    </BotonPagina>
                )}
            </NavLink>


            
                
            </div>

            
        </div>

    );
}
                