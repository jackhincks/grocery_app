import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeSearch from "@/pages/homeSearch";
import Cart from "@/pages/cart";

import TopNavbar from "./components/topNavbar";
import ShopContextProvider from "./context/shop-context";


function App() {
  return (
      <div className="app bg-gray-20">
        <ShopContextProvider>
          <Router>
            <TopNavbar />
            <Routes>
              <Route path="/" element={<HomeSearch />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
  )
}

export default App
