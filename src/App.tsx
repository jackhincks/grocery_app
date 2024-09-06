import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from 'axios'; -- START HERE

import HomeSearch from "@/pages/homeSearch";
import { groceries } from "./data/groceries";

import TopNavbar from "./components/TopNavbar";
import ShopContextProvider from "./context/shop-context";
import { Grocery, GroceryCategory } from "./shared/types";


function App() {
  const [ selectedCategory, setSelectedCategory ] = useState<GroceryCategory>(GroceryCategory.All);

  // input filter
  const [ query, setQuery ] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);  
  }

  const filteredItems: Array<Grocery> = groceries.filter(product => 
    product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  // category filter
  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(event.currentTarget.value as GroceryCategory)
  }

  function filteredData(products:Array<Grocery>, query: string, selectedCategory: string) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems
    }

    if (selectedCategory) {
      if (selectedCategory !== GroceryCategory.All) {
        filteredProducts = filteredProducts.filter(product => product.subcategory === selectedCategory)
      }
    }

    return filteredProducts
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
                    filteredGroceries={filteredData(groceries, query, selectedCategory)}
                    handleCategoryClick={handleCategoryClick}
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
