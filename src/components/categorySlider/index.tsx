import Bread from '@/assets/Bread.png'
import Broccoli from '@/assets/Broccoli.png'
import Cafe from '@/assets/Cafe.png'
import Fish from '@/assets/Fish.png'
import Food from '@/assets/Food.png'
import IceCream from '@/assets/IceCream.png'
import Ingredients from '@/assets/Ingredients.png'
import Milk from '@/assets/Milk.png'
import Salt from '@/assets/Salt.png'
import Steak from '@/assets/Steak.png'
import Turkey from '@/assets/Turkey.png'
import Water from '@/assets/Water.png'
import Wine from '@/assets/Wine.png'
import { GroceryButton } from '@/shared/types'
import Options from './options'

const groceries: Array<GroceryButton> = [
  {
    image: Food,
    description: "All"
  },
  {
    image: Bread,
    description: "Bakery"
  },
  {
    image: Broccoli,
    description: "Produce"
  },
  {
    image: Cafe,
    description: "Coffee"
  },
  {
    image: Fish,
    description: "Seafood"
  },
  {
    image: IceCream,
    description: "Frozen"
  },
  {
    image: Ingredients,
    description: "Pantry"
  },
  {
    image: Milk,
    description: "Dairy"
  },
  {
    image: Salt,
    description: "Spices"
  },
  {
    image: Steak,
    description: "Meat"
  },
  {
    image: Turkey,
    description: "Deli"
  },
  {
    image: Water,
    description: "Beverages"
  },
  {
    image: Wine,
    description: "Alcohol"
  }
];

type Props = {}

const CategorySlider = (props: Props) => {
  return (
    <section
      className="mt-[90px]"
    >
      {/* SIDE SCROLLER */}
      <div className="pt-6 h-40 w-full justify-center overflow-x-auto overflow-y-hidden">
          <ul className="mx-auto w-[1200px] whitespace-nowrap">
            {groceries.map((item: GroceryButton, index) => (
              <Options 
                key={`${item.description}-${index}}`}
                image={item.image}
                description={item.description}
              />
            ))}

          </ul>

        </div>
    </section>
  )
}

export default CategorySlider