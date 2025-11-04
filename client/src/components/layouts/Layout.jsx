// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Main from "./Main/Main"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
        <div className="flex flex-1 min-h-0">
            {/* SIDEBAR */}
           

                <Sidebar />
                
            
           

            {/* MAIN */}

                <Main >
                  <Outlet />
                </Main>
            
        </div>
    </div>
  )
}
