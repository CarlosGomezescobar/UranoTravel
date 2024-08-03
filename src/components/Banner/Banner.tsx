import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
       <div className="container relative mx-auto">
          <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
           <div className="max-w-3xl text-center text-white">
             <h2 className="text-5xl font-extrabold text-black">Descubre Nuevos Horizontes Con Nuestra <span className="text-green-800 text-5xl bg-yellow-400 rounded">Agencia De Viajes</span></h2>
             <p className="mt-2 text-xl md:mt-8 text-black font-extrabold">Puedes Obtener Viajes Gratis o a Bajo Costo del Mercado, Tickets NFT y mas  </p>

             
           </div>
          </div>
       </div>
    )
}