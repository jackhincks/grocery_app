import { Grocery, GroceryCategory } from "@/shared/types"
import Strawberries from '@/assets/groceryImages/Strawberries.webp'
import Asparagus from '@/assets/groceryImages/Asparagus.webp'
import Sourdough from '@/assets/groceryImages/Sourdough.webp'
import Muffins from '@/assets/groceryImages/Muffins.webp'
import Pasta from '@/assets/groceryImages/Pasta.webp'
import Cereal from '@/assets/groceryImages/Cereal.jfif'
import Salmon from '@/assets/groceryImages/Salmon.jpg'
import Shrimp from '@/assets/groceryImages/Shrimp.jpg'
import Milk from '@/assets/groceryImages/Milk.webp'
import Yogurt from '@/assets/groceryImages/Yogurt.webp'
import Ham from '@/assets/groceryImages/Ham.webp'
import Beef from '@/assets/groceryImages/Beef.webp'
import IceCream from '@/assets/groceryImages/IceCream.webp'
import Pizza from '@/assets/groceryImages/Pizza.webp'
import Filet from '@/assets/groceryImages/Filet.jpg'
import Chicken from '@/assets/groceryImages/Chicken.webp'
import Paprika from '@/assets/groceryImages/Paprika.webp'
import GarlicPowder from '@/assets/groceryImages/GarlicPowder.webp'
import Gatorade from '@/assets/groceryImages/Gatorade.webp'
import ArnoldPalmer from '@/assets/groceryImages/ArnoldPalmer.webp'
import BudLight from '@/assets/groceryImages/BudLight.webp'

export const groceries: Array<Grocery> = [
  {
    id: 1,
    name: "Driscoll's Organic Strawberries",
    subcategory: GroceryCategory.Produce,
    image: Strawberries,
    price: 4.95
  },
  {
    id: 2,
    name: "Organic Asparagus Bundle",
    subcategory: GroceryCategory.Produce,
    image: Asparagus,
    price: 5.50
  },
  {
    id: 3,
    name: "Brownberry Sourdough Bread",
    subcategory: GroceryCategory.BakedGoods,
    image: Sourdough,
    price: 3.75
  },
  {
    id: 4,
    name: "Chocolate Chip Muffins",
    subcategory: GroceryCategory.BakedGoods,
    image: Muffins,
    price: 6.99
  },
  {
    id: 5,
    name: "Barilla Fusilli Pasta",
    subcategory: GroceryCategory.Pantry,
    image: Pasta,
    price: 4.99
  },
  {
    id: 6,
    name: "Cinnamon Toast Crunch",
    subcategory: GroceryCategory.Pantry,
    image: Cereal,
    price: 5.50
  },
  {
    id: 7,
    name: "Salmon Filet - 8oz",
    subcategory: GroceryCategory.Seafood,
    image: Salmon,
    price: 10.99
  },
  {
    id: 8,
    name: "Panamel Shrimp - 50 Count",
    subcategory: GroceryCategory.Seafood,
    image: Shrimp,
    price: 13.99
  },
  {
    id: 9,
    name: "Horizon Organic - Whole Milk",
    subcategory: GroceryCategory.Dairy,
    image: Milk,
    price: 4.75
  },
  {
    id: 10,
    name: "Yoplait Yogurt - Strawberry",
    subcategory: GroceryCategory.Dairy,
    image: Yogurt,
    price: 3.99
  },
  {
    id: 11,
    name: "Buddig Ham - 7oz",
    subcategory: GroceryCategory.Deli,
    image: Ham,
    price: 9.99
  },
  {
    id: 12,
    name: "Oscar Meyer Roast Beef - 7oz",
    subcategory: GroceryCategory.Deli,
    image: Beef,
    price: 11.99
  },
  {
    id: 13,
    name: "Drumstick - 4ct",
    subcategory: GroceryCategory.Frozen,
    image: IceCream,
    price: 4.50
  },
  {
    id: 14,
    name: "Jack's Frozen Pizza",
    subcategory: GroceryCategory.Frozen,
    image: Pizza,
    price: 6.99
  },
  {
    id: 15,
    name: "Filet Mignon - 8oz",
    subcategory: GroceryCategory.Meat,
    image: Filet,
    price: 13.99
  },
  {
    id: 16,
    name: "Chicken Breasts - 3ct",
    subcategory: GroceryCategory.Meat,
    image: Chicken,
    price: 8.25
  },
  {
    id: 17,
    name: "McCormick Paprika",
    subcategory: GroceryCategory.Spices,
    image: Paprika,
    price: 3.99
  },
  {
    id: 18,
    name: "McCormick Garlic Powder",
    subcategory: GroceryCategory.Spices,
    image: GarlicPowder,
    price: 2.99
  },
  {
    id: 19,
    name: "Blue Gatorade - 8ct - 20oz",
    subcategory: GroceryCategory.Drinks,
    image: Gatorade,
    price: 6.99
  },
  {
    id: 20,
    name: "Arnold Palmer",
    subcategory: GroceryCategory.Drinks,
    image: ArnoldPalmer,
    price: 6.99
  },
  {
    id: 21,
    name: "Bud Light - 12ct - 12oz",
    subcategory: GroceryCategory.Alcohol,
    image: BudLight,
    price: 14.99
  }
];