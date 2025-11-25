import SeccionEvolucion from "../components/pages/MediaMisBudget/SeccionEvolucion"
import SeccionEficiencia from "../components/pages/MediaMisBudget/SeccionEficiencia/SeccionEficiencia"
import SeccionPresupuesto from "../components/pages/MediaMisBudget/SeccionPresupuesto/SeccionPresupuesto"
import SeccionSeo from "../components/pages/MediaMisBudget/SeccioSeoperformance/SeccionSeo"
export default function Media_Mix_get(){
  return(

  <div className="w-full flex flex-col">

    <div className="flex items-center justify-between  mb-[21px]">
      <div>
        <h2>Media Mix & Budget Analysis</h2>
        <p className="text-xs text-gray-600 mt-1">Análisis de distribución de inversión y optimización de mix de medios</p>
      </div>
      <span className="inline-flex items-center justify-center rounded-md border border-[#9E2D38] px-[7px] py-[1.75px] text-[10.5px] leading-[14px] font-medium text-[#9E2D38] w-fit whitespace-nowrap transition-[color,box-shadow] overflow-hidden">
      Presupuesto Total: $4.63M
      </span>
    </div>

    <SeccionEvolucion/>
    
    <div className="grid grid-cols-12 mb-6 gap-6">
      <div className="col-span-8">
        <SeccionEficiencia/>
      </div>
      <div className="col-span-4">
        <SeccionPresupuesto/>
      </div>
    </div>
    

    <SeccionSeo/>

    
    
  
    
    
  </div>

  )
}
