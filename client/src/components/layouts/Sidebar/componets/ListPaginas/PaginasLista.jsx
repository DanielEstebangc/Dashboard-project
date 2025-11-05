import { useState } from "react";
import BotonPagina from "./BotonPaginas";
import { Link } from 'react-router-dom';

export default function PaginasLista () {
    const [active, setActive] = useState("Executive Cockpit");

    return (
        <div className="box-border text-[oklch(0.145_0_0)] block font-sans text-[14px] leading-[21px] h-[263.5px] w-[237px] border-t-[1px] border-t-[oklch(0.928_0.006_264.531)] border-b-0 border-l-0 border-r-0 text-left pt-[21px] pr-0 pb-0 pl-0 m-0">

            <h3 className="box-border text-[oklch(0.21_0.034_264.665)] block font-sans text-[14px] font-medium leading-[21px] h-[21px] w-[237px] border-t-0 border-b-0 border-l-0 border-r-0 text-left p-0 m-0 mb-[14px]">
                Páginas
            </h3>

            <div className="box-border text-[oklch(0.145_0_0)] block font-sans text-[14px] leading-[21px] h-[206.5px] w-[237px] border-t-0 border-b-0 border-l-0 border-r-0 text-left p-0 m-0">

            <Link to="/executive" style={{ textDecoration: 'none' }}>
                <BotonPagina
                icon="finance"
                isActive={active === "Executive Cockpit"}
                onClick={() => setActive("Executive Cockpit")}
                >Executive Cockpit</BotonPagina>
            </Link>



            <Link to="/media-mix-budget" style={{ textDecoration: 'none' }}>
                <BotonPagina
                icon="target"
                isActive={active === "Media Mix & Budget"}
                onClick={() => setActive("Media Mix & Budget")}>
                Media Mix & Budget</BotonPagina>
            </Link>

            <Link to="/awareness-performance" style={{ textDecoration: 'none' }}>
                <BotonPagina
                icon="Language"
                isActive={active === "Awareness Performance"}
                onClick={() => setActive("Awareness Performance")}
                >Awareness Performance
                </BotonPagina>
            </Link>

            <Link to="/consideration-hub" style={{ textDecoration: 'none' }}>
               <BotonPagina
                icon="Group"
                isActive={active === "Consideration Hub"}
                onClick={() => setActive("Consideration Hub")}
                >Consideration Hub
                </BotonPagina>
            </Link>

            <Link to="/purchase-leads" style={{ textDecoration: 'none' }}>
               <BotonPagina
                icon="Shopping_Cart"
                isActive={active === "Purchase & Leads"}
                onClick={() => setActive("Purchase & Leads")}
                >Purchase & Leads
                </BotonPagina>
            </Link>

            <Link to="/audience-insights" style={{ textDecoration: 'none' }}>
                <BotonPagina
                icon="Group"
                isActive={active === "Audience Insights"}
                onClick={() => setActive("Audience Insights")}
                >Audience Insights
                </BotonPagina> 
            </Link>
            
                
            </div>

            
        </div>

    );
}
                