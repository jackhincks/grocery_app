import { Grocery, GroceryCategory } from "@/shared/types";
import CategorySlider from "@/components/categorySlider";
import GroceryTable from "./groceryTable";
import { useEffect, useState } from "react";
import PageSelection from "@/components/PageSelection";
import { fetchGroceries } from "@/API/fetchGroceries";

type Props = {
  groceryData: Grocery[],
  setGroceryData: React.Dispatch<React.SetStateAction<Grocery[]>>,
  handleCategoryClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  query: string,
  selectedCategory: GroceryCategory
}

const LandingPage = ({ groceryData, setGroceryData, handleCategoryClick, query, selectedCategory }: Props) => {
  const [ page, setPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    setPage(1)
    fetchGroceries(1, query, selectedCategory, setGroceryData, setTotalPages);
  }, [query, selectedCategory]);



  return (
    <div className="bg-inherit">
      <CategorySlider handleCategoryClick={handleCategoryClick} />
      <section className="bg-inherit">
          {/* CONTAINER FOR ALL SEARCH RESULTS */}
          <div
            className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg: max-w-[80%] mx-auto"
          >
            <GroceryTable groceries={groceryData} />
          </div>
          {/* PAGE */}
          <PageSelection 
            setPage={setPage} 
            page={page} 
            totalPages={totalPages}
            query={query}
            category={selectedCategory}
            setGroceryData={setGroceryData}
            setTotalPages={setTotalPages}
          />
      </section>
    </div>
  )
};


export default LandingPage