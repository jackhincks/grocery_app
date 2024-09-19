import { ShoppingCartIcon } from "@heroicons/react/16/solid"
import { useContext, useState } from "react";
import { ShopContext } from "@/context/shop-context";
import { Grocery } from "@/shared/types";

type Props = {
  grocery: Grocery
}

const Add2cart = ({ grocery }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useContext(ShopContext);

  return (
    <div 
      className={`flex items-center justify-center h-10 rounded-md bg-gray-500 transition-all duration-10 ${
        isHovered ? 'w-32' : 'w-10'}`
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        addToCart(grocery);
      }}
    >
      {isHovered ? (
        <span 
          className="flex items-center justify-center h-full w-full text-white font-bold transition-opacity 
          opacity-0 hover:transition-opacity hover:delay-150 hover:opacity-100 hover:cursor-pointer active:bg-gray-100 active:rounded-md"
          >ADD TO CART</span>
      ) : (
        <ShoppingCartIcon className="h-6 w-6 text-white" />
      )}
    </div>
  )
}

export default Add2cart