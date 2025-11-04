import VentasChart from "../components/charts/Char";
export default function Media_Mix_Budget() {
  return (
  < section className="p-6 rounded-2xl shadow-lg text-red-500">
      <h1 className="text-2xl font-bold drop-shadow-md">          
        Media_Mix & Budget
      </h1>
        <p className="text-sm text-gray-900 mb-4">
            Media
        </p>

      <div>
        <h2>Panel de ventas</h2>
          <VentasChart />
      </div>

    <div className="font-bold text-red p-6 rounded-2xl shadow-lg text-black">
      prueba melo todo
      </div>  
  </section>
      
  )
}
