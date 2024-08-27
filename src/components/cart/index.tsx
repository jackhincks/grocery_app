import React, { useContext } from 'react'
import { ShopContext } from '@/context/shop-context'
import { groceries } from '@/data/groceries'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid'
import CartItems from './cartItems'
import CartTotal from './cartTotal'

type Props = {}

const Cart = (props: Props) => {

  return (
    <div className="bg-inherit">
      <div className="mb-8 text-xl text-black">Shopping Cart</div>
      <section className="flex items-center justify-center bg-inherit">
        <div className="mx-auto w-11/12 bg-white">
          <CartItems /> 
          <CartTotal />
        </div>
      </section>
    </div>
  )
}

export default Cart