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

export enum AuthMode {
  SignIn="SIGN_IN",
  SignUp="SIGN_UP"
}

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

export interface GroceryCart {
  item: Grocery,
  quantity: number
}

// This allows a Cart type object to have a productID/attr as a number and value as a number.
export interface Cart {
  [productID: number]: number;
}

export interface CartModifier {
  cartItems: GroceryCart[];
  addToCart: (grocery: Grocery) => void;
  removeFromCart: (grocery: Grocery) => void;
  deleteFromCart: (grocery: Grocery) => void;
}

export interface User {
  userID: string,
  userEmail: string,
  userFN: string,
  userLN: string
}

export interface UserModifier {
  user: User | null,
  loading: boolean,
  setAuthorizedUser: (user: User) => void,
  signOutAuthorizedUser: () => Promise<void>

}