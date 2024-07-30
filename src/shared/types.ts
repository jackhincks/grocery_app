export enum SelectedCategory {
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

export interface GroceryCategory {
   image: string
   description: string
};