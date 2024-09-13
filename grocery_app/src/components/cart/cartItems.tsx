import React, { useContext } from 'react'
import { ShopContext } from '@/context/shop-context';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid';

const imagePath = '../../src/assets/groceryImages'

type Props = {}

const CartItems = (props: Props) => {
  const { cartItems, removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });
    
  return (
    <div className="grid grid-cols-1 max-h-[50vh] overflow-y-auto">
      {cartItems.map((cartItem) => (
        <div className="flex justify-center items-start p-2 gap-2" key={cartItem.item.id}>
          {/* PRODUCT IMAGE */}
          <img className="mx-2 my-2 h-12 w-12" src={`${imagePath}/${cartItem.item.image}`}/>
          {/* PRODUCT NAME */}
          <div className="w-64 my-auto">
            {cartItem.item.name}
          </div>
          {/* PRODUCT QUANTITY */}
          <div className="flex justify-center items-center my-auto ml-4 border-2 rounded-full overflow-hidden">
            <div className="flex justify-center items-center h-6 w-6 border-r-2">
              <button 
                className="flex justify-center items-center h-6 w-6 hover:bg-gray-50 active:bg-gray-100"
                onClick={() => removeFromCart(cartItem.item)}
              >
                <MinusIcon className="h-4 w-4"/>
              </button>
            </div>
            <input className="hide-spin h-6 w-10 text-center" type="number" value={cartItem.quantity} readOnly={true}/>
            <div className="flex justify-center items-center h-6 w-6 border-l-2">
              <button 
                className="flex justify-center items-center h-6 w-6  hover:bg-gray-50 active:bg-gray-100"
                onClick={() => addToCart(cartItem.item)}
              >
                <PlusIcon className="h-4 w-4"/>
              </button>
            </div>
          </div>
          {/* PRODUCT PRICE */}
          <div className="flex justify-center items-center my-auto ml-4">
            {USDollar.format(cartItem.item.price)}
          </div>
          {/* DELETE FROM CART */}
          <button 
            className ="my-auto ml-4"
            onClick={() => {
              deleteFromCart(cartItem.item)
              }
            }
          >
            <TrashIcon className="h-3 w-3 text-black" />
          </button>
        </div>
      ))}
    </div>
  )
}


export default CartItems