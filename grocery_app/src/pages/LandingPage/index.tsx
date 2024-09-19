import { Grocery, GroceryCategory } from "@/shared/types";
import CategorySlider from "@/components/categorySlider";
import GroceryTable from "./groceryTable";
import { useEffect } from "react";

const apiHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
const apiPort = import.meta.env.VITE_BACKEND_PORT || 5001;
const filePath = '';

const fetchGroceries = async (query: string, category: GroceryCategory, setGroceryData: React.Dispatch<React.SetStateAction<Grocery[]>>) => {
  try {
    const res: Response = await fetch(`http://${apiHost}:${apiPort}/${filePath}?query=${query}&category=${category}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const json: Grocery[] = await res.json();
    setGroceryData(json);
    
  } catch (error: any) {
    console.log(error.message)
  }
};

type Props = {
  groceryData: Grocery[],
  setGroceryData: React.Dispatch<React.SetStateAction<Grocery[]>>,
  handleCategoryClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  testQuery: string,
  testCategory: GroceryCategory
}

const LandingPage = ({ groceryData, setGroceryData, handleCategoryClick, testQuery, testCategory }: Props) => {
  useEffect(() => {
    fetchGroceries(testQuery, testCategory, setGroceryData);
  }, [testQuery, testCategory]);

  return (
    <div className="bg-inherit">
      <CategorySlider handleCategoryClick={handleCategoryClick} />
      <section className="bg-inherit">
          {/* CONTAINER FOR ALL SEARCH RESULTS */}
          <div
            className="mx-auto grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg: max-w-[80%] align-middle justify-center"
          >
            <GroceryTable groceries={groceryData} />
          </div>
      </section>
    </div>
  )
};


export default LandingPage