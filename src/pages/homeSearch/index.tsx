import { groceries } from "@/data/groceries";
import { Grocery } from "@/shared/types";
import CategorySlider from "@/components/categorySlider";
import GroceryTable from "./groceryTable";

type Props = {
  filteredGroceries: Array<Grocery>,
  handleCategoryClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const HomeSearch = ({ filteredGroceries, handleCategoryClick }: Props) => {

  return (
    <div className="bg-inherit">
      <CategorySlider handleCategoryClick={handleCategoryClick} />
      <section className="bg-inherit">
          {/* CONTAINER FOR ALL SEARCH RESULTS */}
          <div
            className="mx-auto grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg: max-w-[80%] align-middle justify-center"
          >
            <GroceryTable groceries={filteredGroceries} />
          </div>
      </section>
    </div>
  )
};


export default HomeSearch