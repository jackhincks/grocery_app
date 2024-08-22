import React, { useContext } from 'react'
import { ShopContext } from '@/context/shop-context'
import { groceries } from '@/data/groceries'

type Props = {}

const Cart = (props: Props) => {
  const { cartItems, removeFromCart } = useContext(ShopContext)
  return (
    <div className="bg-inherit">
      <section className="flex items-center justify-center bg-inherit mt-[90px]">
        <div className="mx-auto my-[120px] w-11/12 bg-white">
          <div className="grid grid-cols-1">
            {Object.entries(cartItems).map(([productID, quantity]) => (
              <div>
                {groceries[Number(productID)].name}
              </div>
            ))}
          </div> 
        </div>
      </section>
    </div>
  )
}

export default Cart