export enum GroceryCategory {
  All="all",
  Pantry = "pantry",
  Seafood = "seafood",
  BakedGoods="bakedgoods",
  Dairy="dairy",
  Produce="produce",
  Deli="deli",
  Frozen="frozen",
  Meat="meat",
  Spices="spices",
  Drinks="drinks",
  Alcohol="alcohol"
};

export interface GroceryButton {
   image: string
   description: string
};

export interface Grocery {
  id: number,
  name: string,
  subcategory: string,
  image: string,
  price: number
};