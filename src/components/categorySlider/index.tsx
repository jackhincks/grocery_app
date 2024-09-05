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
import { GroceryButton, GroceryCategory } from '@/shared/types'
import Options from './options'
import { useEffect, useRef } from 'react'

const groceries: Array<GroceryButton> = [
  {
    image: Food,
    description: "All",
    category: GroceryCategory.All
  },
  {
    image: Bread,
    description: "Bakery",
    category: GroceryCategory.BakedGoods
  },
  {
    image: Broccoli,
    description: "Produce",
    category: GroceryCategory.Produce
  },
  {
    image: Cafe,
    description: "Coffee",
    category: GroceryCategory.Coffee
  },
  {
    image: Fish,
    description: "Seafood",
    category: GroceryCategory.Seafood
  },
  {
    image: IceCream,
    description: "Frozen",
    category: GroceryCategory.Frozen
  },
  {
    image: Ingredients,
    description: "Pantry",
    category: GroceryCategory.Pantry
  },
  {
    image: Milk,
    description: "Dairy",
    category: GroceryCategory.Dairy
  },
  {
    image: Salt,
    description: "Spices",
    category: GroceryCategory.Spices
  },
  {
    image: Steak,
    description: "Meat",
    category: GroceryCategory.Meat
  },
  {
    image: Turkey,
    description: "Deli",
    category: GroceryCategory.Deli
  },
  {
    image: Water,
    description: "Drinks",
    category: GroceryCategory.Drinks
  },
  {
    image: Wine,
    description: "Alcohol",
    category: GroceryCategory.Alcohol
  }
];

type Props = {
  handleCategoryClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const CategorySlider = ({ handleCategoryClick }: Props) => {

  const scrollContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheelEvent = (event: WheelEvent) => {
      
      // Prevent default vertical scroll only if scroll is an option
      if (scrollContainer && (scrollContainer.scrollWidth > scrollContainer.clientWidth)) {
        event.preventDefault(); 
        scrollContainer.scrollLeft += event.deltaY;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheelEvent, { passive: false });
    }

    // Cleanup function to remove event listener when component unmounts
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheelEvent);
      }
    };
  }, []);

  return (
    <section
      className="mt-[90px]"
    >
      {/* SIDE SCROLLER */}
      <div className="pt-6 h-40 w-full justify-center">
          <ul className="flex justify-start mx-auto w-[80%] h-[90px] whitespace-nowrap overflow-x-auto overflow-y-hidden bg-primary-100 shadow-2xl"
            ref={scrollContainerRef}
          >
            {groceries.map((item: GroceryButton, index) => (
              <Options 
                key={`${item.description}-${index}}`}
                image={item.image}
                description={item.description}
                category={item.category}
                handleCategoryClick={handleCategoryClick}
              />
            ))}

          </ul>

        </div>
    </section>
  )
}

export default CategorySlider