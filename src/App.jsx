import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onSearch={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              searchTerm={searchTerm}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              searchTerm={searchTerm}
            />
          }
        />

        <Route
          path="/categories"
          element={
            <Categories
              addToCart={addToCart}
              searchTerm={searchTerm}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;