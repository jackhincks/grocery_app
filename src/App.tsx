import { useState } from "react";
import TopNavbar from "./components/topNavbar";
import CategorySlider from "./components/categorySlider";
import SearchResults from "./components/search";

function App() {
  return (
      <div className="app bg-gray-20">
        <TopNavbar />
        <CategorySlider />
        <SearchResults />
      </div>
  )
}

export default App
