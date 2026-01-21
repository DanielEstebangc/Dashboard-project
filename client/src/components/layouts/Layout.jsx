// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

export default function Layout() {
  // Estado global de filtros
  const [filters, setFilters] = useState({});

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-1 min-h-0">
        {/* SIDEBAR con filtros */}
        <Sidebar filters={filters} setFilters={setFilters} />

        {/* MAIN */}
        <Main>
          {/* Outlet pasa el contexto de filtros a las páginas */}
          <Outlet context={{ filters, setFilters }} />
        </Main>
      </div>
    </div>
  );
}
