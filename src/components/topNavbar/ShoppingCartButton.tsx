import { ShopContext } from '@/context/shop-context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'

type Props = {
  handleOpenCart: () => void
}

const ShoppingCartButton = ({ handleOpenCart }: Props) => {
  const { cartItems } = useContext(ShopContext);
  
  return (
    <div className="relative ml-4">
      <ShoppingCartIcon 
        className="h-8 w-8 text-black hover:cursor-pointer"
        onClick={handleOpenCart}
      />
      <div data-testid="cartNumber" className="absolute flex items-center justify-center rounded-full w-4 h-4 bg-primary-500 text-xs text-white -top-2 -right-2">
        {Object.keys(cartItems).length}
      </div>
    </div>
  )
}

export default ShoppingCartButton