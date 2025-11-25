import TitulosMedia from "../TitulosMedia"
import Seochart from "../../../charts/charts_Media/SeoChart/SeoChart.jsx";
export default function SeccionSeoperformance(){
    return(
        <div className="hover:border-[rgb(158,45,56)] shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 mb-[21px]">

            <TitulosMedia Titulo={"Search & SEO Performance"} subtitulo={"Visibilidad de marca y costos en búsquedas orgánicas y pagadas"}/>

            <div className="px-6 [&:last-child]:pb-6">

                <Seochart/>
            
            </div>
        </div>    
    )
}