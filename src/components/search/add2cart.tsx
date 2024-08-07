import { ShoppingCartIcon } from "@heroicons/react/16/solid"
import { useState } from "react";

type Props = {}

const Add2cart = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-center justify-center h-10 rounded-md bg-gray-500 transition-all duration-10 ${
        isHovered ? 'w-32' : 'w-10'}`
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <span 
          className="flex items-center justify-center h-full w-full text-white font-bold transition-opacity 
          duration-300 opacity-0 hover:opacity-100 hover:cursor-pointer"
          >ADD TO CART</span>
      ) : (
        <ShoppingCartIcon className="h-6 w-6 text-white" />
      )}
    </div>
  )
}

export default Add2cart