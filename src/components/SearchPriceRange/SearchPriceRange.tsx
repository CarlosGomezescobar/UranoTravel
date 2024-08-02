import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [IsOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-2 md:mb-0 items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
        onClick={() => setIsOpen(!IsOpen)}
        >
        
        
         <GrTag />

         <div>
            <p>Rango de Precio</p>
            <p className="text-xs">Selecciona Tu Rango de Precio</p>
        </div>
          {IsOpen ? (
           <GrFormUp /> 
          ): (
            <GrFormDown /> 
          )}

          {!IsOpen && (
            <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
             <p>Cualquier rango</p>
             <p>20.000 - 30.000</p>
             <p>13000 - 20.000</p>
             <p>20.000 - 30.000</p>
             <p>20.000 - 30.000</p>
            </div>
          )}
        </div>
    )
}