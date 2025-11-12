import TitulosMedia from "../TitulosMedia"
export default function SeccionPresupuesto(){
    return(
        <div className="hover:border-[rgb(158,45,56)] shadow-[0_0_4px_rgba(0,0,0,0.1)] flex flex-col gap-6 rounded-xl border-2 mb-[21px]">
            <TitulosMedia Titulo="Presupuesto por Etapa" subtitulo="Planificado vs Real"/>
            <div className="px-6 [&:last-child]:pb-6"></div>
        </div>
    )
}