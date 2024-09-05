export enum GroceryCategory {
  All="all",
  Pantry = "pantry",
  Seafood = "seafood",
  BakedGoods="bakedGoods",
  Dairy="dairy",
  Produce="produce",
  Deli="deli",
  Frozen="frozen",
  Meat="meat",
  Spices="spices",
  Drinks="drinks",
  Alcohol="alcohol",
  Coffee="coffee"
};

export interface GroceryButton {
   image: string
   description: string
   category: GroceryCategory
};

export interface Grocery {
  id: number,
  name: string,
  subcategory: string,
  image: string,
  price: number
};

// This allows a Cart type object to have a productID/attr as a number and value as a number.
export interface Cart {
  [productID: number]: number;
}

export interface CartModifier {
  cartItems: Cart;
  addToCart: (productID: number) => void;
  removeFromCart: (productID: number) => void;
  deleteFromCart: (productID: number) => void;
}