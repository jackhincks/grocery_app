import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import TopNavbar from "./components/TopNavbar";
import ShopContextProvider from "./context/shop-context";
import { Grocery, GroceryCategory } from "./shared/types";
import PageNotFound from "./pages/PageNotFound";
import UserContextProvider from "./context/user-context";


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
        <UserContextProvider>
          <ShopContextProvider>
            <Router>
              <TopNavbar handleInputChange={handleInputChange} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <LandingPage 
                      groceryData={groceryData}
                      setGroceryData={setGroceryData}
                      handleCategoryClick={handleCategoryClick}
                      query={query}
                      selectedCategory={selectedCategory}
                    />
                  } 
                />
                <Route 
                  path="*"
                  element={<PageNotFound />}
                />
              </Routes>
            </Router>
          </ShopContextProvider>
        </UserContextProvider>
      </div>
  )
}

export default App
