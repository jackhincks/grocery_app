import { createContext, useState } from "react";
import { Cart, CartModifier } from "@/shared/types"

// this is bad news but not sure on another work around. This seems less messy than making a "fake" CartModifier object
// prior to loading in the properties below within ShopContextProvider.
export const ShopContext = createContext<CartModifier>(null!);

type Props = {
  children: any
}

const ShopContextProvider = (props: Props) => {
  // cartItems will hold an object with keys = productID and values = quantity ordered
  const [cartItems, setCartItems] = useState<Cart>({});

  const addToCart = (productID: number) => {
    setCartItems((prev) => ({
      ...prev, 
      [productID]: (prev[productID] || 0) + 1
    }))
  }

  const removeFromCart = (productID: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productID]: prev[productID] - 1
    }))
  }

  const contextValue = { cartItems, addToCart, removeFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider