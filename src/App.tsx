import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from 'axios'; -- START HERE

import HomeSearch from "@/pages/homeSearch";
import TopNavbar from "./components/TopNavbar";
import ShopContextProvider from "./context/shop-context";
import { Grocery, GroceryCategory } from "./shared/types";


function App() {
  const [ selectedCategory, setSelectedCategory ] = useState<GroceryCategory>(GroceryCategory.All);
  const [ groceryData, setGroceryData ] = useState<Grocery[]>([])

  // input filter - used to monitor search bar
  const [ query, setQuery ] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);  
  }

  // category filter - used to establish category filter
  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(event.currentTarget.value as GroceryCategory)
  }


  return (
      <div className="app bg-gray-20">
        <ShopContextProvider>
          <Router>
            <TopNavbar handleInputChange={handleInputChange} />
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomeSearch 
                    groceryData={groceryData}
                    setGroceryData={setGroceryData}
                    handleCategoryClick={handleCategoryClick}
                    testQuery={query}
                    testCategory={selectedCategory}
                  />
                } 
              />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
  )
}

export default App
