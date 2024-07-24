import { useState } from "react";
import { SelectedCategory } from "./shared/types";
import TopNavbar from "./components/topNavbar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>(SelectedCategory.All);

  return (
      <div className="app bg-gray-20">
        <TopNavbar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
      </div>
  )
}

export default App
