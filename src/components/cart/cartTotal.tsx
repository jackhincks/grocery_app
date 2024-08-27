import { ShopContext } from '@/context/shop-context';
import { groceries } from '@/data/groceries';
import React, { useContext } from 'react'

type Props = {}

const cartTotal = (props: Props) => {
  const { cartItems } = useContext(ShopContext);
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

  let total:number = 0;

  Object.entries(cartItems).forEach(([productID, quantity])=> {
    const productPrice:number = (groceries[Number(productID) - 1].price);
    total += (productPrice * quantity);
  })

  return (
    <div className="border-t-2 border-black">
      <div 
        className="grid grid-cols-2 mt-2 ml-[65%] text-black"
      >
        <span>Subtotal:</span>
        <span>{USDollar.format(total)}</span>
        <span>Tax:</span>
        <span>{USDollar.format(total*.11)}</span>
        <span className="font-bold">Total:</span>
        <span className="font-bold">{USDollar.format(total*1.11)}</span>
      </div>
      {/* CHECKOUT BUTTON */}
      <button 
        className="ml-[80%] mt-4 px-7 py-2 rounded-md bg-gray-100 text-black font-bold hover:bg-primary-500 hover:text-white cursor-pointer text-nowrap"
      >
        Check Out
      </button>
    </div>
  )
}

export default cartTotal