import { Grocery, GroceryCategory } from "@/shared/types";
import CategorySlider from "@/components/categorySlider";
import GroceryTable from "./groceryTable";
import { useEffect, useState } from "react";
import PageSelection from "@/components/PageSelection";

const apiHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
const apiPort = import.meta.env.VITE_BACKEND_PORT || 5001;
const filePath = 'getItems';

interface GroceriesResponse {
  groceries: Grocery[];
  totalPages: number;
}

const fetchGroceries = async (page: number, query: string, category: GroceryCategory, setGroceryData: React.Dispatch<React.SetStateAction<Grocery[]>>, setTotalPages:React.Dispatch<React.SetStateAction<number>> ) => {
  try {
    const res: Response = await fetch(`http://${apiHost}:${apiPort}/${filePath}?page=${page}&query=${query}&category=${category}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const json: GroceriesResponse = await res.json();

    const groceries: Grocery[] = json.groceries
    const pages: number = json.totalPages
    
    // Establish total pages of search query to be used for page nav below
    setTotalPages(pages); 
    setGroceryData(groceries);
    
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
  const [ page, setPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(0); 
  let currentQuery = ""
  let currentCategory = GroceryCategory.All
  

  useEffect(() => {
    console.log("UseEffect triggered!")
    // Conditional is TRUE if query and category have not changed - this means only page has changed
    if ( testQuery === currentQuery && testCategory === currentCategory ) {
      fetchGroceries(page, testQuery, testCategory, setGroceryData, setTotalPages);
    } 
    // If query or category has changed, the search results are a different pool, so page must be reset to 1
    else {
      setPage(1)
      fetchGroceries(page, testQuery, testCategory, setGroceryData, setTotalPages);
      currentQuery = testQuery
      currentCategory = testCategory
    }
  }, [testQuery, testCategory, page]);

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
          <PageSelection setPage={setPage} page={page} totalPages={totalPages}/>
      </section>
    </div>
  )
};


export default LandingPage