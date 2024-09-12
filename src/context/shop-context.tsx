import { createContext, useState } from "react";
import { CartModifier, Grocery, GroceryCart } from "@/shared/types"
import React from "react";

// this is bad news but not sure on another work around. This seems less messy than making a "fake" CartModifier object
// prior to loading in the properties below within ShopContextProvider.
export const ShopContext = createContext<CartModifier>(null!);

type Props = {
  children: any
}

const ShopContextProvider = (props: Props) => {
  // cartItems will hold an object with keys = productID and values = quantity ordered
  const [cartItems, setCartItems] = useState<GroceryCart[]>([]);

  const addToCart = (grocery: Grocery) => {
    setCartItems((prev) => {
      // finds list index of item if it is already in cart, or -1 if not in cart
      const oldCartIndex = prev.findIndex((cartItem) => cartItem && cartItem.item.id === grocery.id);
      if (oldCartIndex !== -1) {
        // Gets current quantity
        const oldQuantity = prev[oldCartIndex].quantity
        // creates a copy of the GroceryCart[] array currently in CartItems
        const newCart = [...prev];
        newCart[oldCartIndex] = {
          ...prev[oldCartIndex], quantity: oldQuantity + 1
        }
        return newCart;
      }
      else {
        // Just returns a copy of cartItems array + new item with quantity 1
        return [...prev, { item: grocery, quantity: 1}]
      }
    })
  }

  const removeFromCart = (grocery: Grocery) => {
    setCartItems((prev) => {
      const oldCartIndex = prev.findIndex((cartItem) => cartItem.item.id === grocery.id)
      const newCart = [...prev];
      const oldQuantity = prev[oldCartIndex].quantity
      
      // avoid negative quantities
      if (oldQuantity > 0) {
        newCart[oldCartIndex] = {
          ...prev[oldCartIndex], quantity: oldQuantity - 1
        }
      } 
    
      return newCart;
    })
  }

  const deleteFromCart = (grocery: Grocery) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((cartItem) => cartItem.item.id === grocery.id)
      const newCart = [...prev];
      // Deleting the existingItemIndex caused an 'undefined' element within the list. Using splice deletes the item and reindexes the array, so works better here.
      newCart.splice(existingItemIndex, 1);
      return newCart;
    });
  }

  const contextValue = { cartItems, addToCart, removeFromCart, deleteFromCart };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider