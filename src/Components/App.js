import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Cart from "./Cart";
import cartIcon from "../img/shopping-cart.svg";
import "../index.css";

async function fetchProducts() {
  try {
    const fetchedData = await fetch("https://fakestoreapi.com/products");
    const data = await fetchedData.json();
    const mensClothing = [];
    const jewelry = [];
    const electronics = [];
    const womensClothing = [];
    data.forEach((product) => {
      if (product.category === "men's clothing") mensClothing.push(product);
      if (product.category === "women's clothing") womensClothing.push(product);
      if (product.category === "jewelery") jewelry.push(product);
      if (product.category === "electronics") electronics.push(product);
    });
    return { mensClothing, womensClothing, jewelry, electronics };
  } catch {
    return "error";
  }
}

function App() {
  const [fetchError, setFetchError] = useState(false);
  const [products, setProducts] = useState({});
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const fetchedProducts = await fetchProducts();
      if (fetchedProducts === "error") setFetchError(true);
      else setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop error={fetchError} products={products} />}
        />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {location.pathname === "/cart" ? (
        ""
      ) : (
        <Link to="/cart" className="cart-link">
          <img src={cartIcon} alt="A link to the shopping cart page" />
        </Link>
      )}

      <footer>
        Made by <i>Will Moretz</i>
      </footer>
    </>
  );
}

export default App;
