import { Grocery, GroceryCategory } from "@/shared/types";


interface GroceriesResponse {
  groceries: Grocery[];
  totalPages: number;
}

const apiHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
const apiPort = import.meta.env.VITE_BACKEND_PORT || 5001;
const filePath = 'getItems';


export const fetchGroceries = async (page: number, query: string, category: GroceryCategory, setGroceryData: React.Dispatch<React.SetStateAction<Grocery[]>>, setTotalPages:React.Dispatch<React.SetStateAction<number>> ) => {
  console.log(`Fetching page:${page}, category:${category}`)
  try {
    const res: Response = await fetch(`http://${apiHost}:${apiPort}/${filePath}?page=${page}&query=${query}&category=${category}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const json: GroceriesResponse = await res.json();

    const groceries: Grocery[] = json.groceries
    const pages: number = json.totalPages

    console.log(pages)
    
    // Establish total pages of search query to be used for page nav below
    setTotalPages(pages); 
    setGroceryData(groceries);
    
  } catch (error: any) {
    console.log(error.message)
  }
};