import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<section>Home</section>} />
        <Route path="/shop" element={<section>Shop</section>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>Made by Will Moretz</footer>
    </>
  );
}

export default App;
