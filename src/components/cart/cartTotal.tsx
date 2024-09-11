import { ShopContext } from '@/context/shop-context';
import React, { useContext } from 'react'

const TAXRATE: number = .11

type Props = {}

const cartTotal = (props: Props) => {
  const { cartItems } = useContext(ShopContext);
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

  let subtotal:number = 0;

  cartItems.forEach((cartItem)=> {
    const productPrice:number = (cartItem.item.price);
    subtotal += (productPrice * cartItem.quantity);
  })

  const tax: number = subtotal * TAXRATE
  const total: number = subtotal + tax

  return (
    <div className="border-t-2 border-black">
      <div 
        className="grid grid-cols-2 mt-2 ml-[65%] text-black"
      >
        <span>Subtotal:</span>
        <span>{USDollar.format(subtotal)}</span>
        <span>Tax:</span>
        <span>{USDollar.format(tax)}</span>
        <span className="font-bold">Total:</span>
        <span className="font-bold">{USDollar.format(total)}</span>
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