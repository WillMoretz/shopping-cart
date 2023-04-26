import React, { useState, useEffect } from "react";

function Shop(props) {
  const { error, products } = props;
  const [shownProducts, setShownProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([
    "mensClothing",
    "womensClothing",
    "jewelry",
    "electronics",
  ]);

  useEffect(() => {
    if (Object.keys(products).length === 0) return;
    let selectedProducts = [];
    selectedCategories.forEach((category) => {
      selectedProducts = selectedProducts.concat(products[category]);
    });
    setShownProducts(selectedProducts);
  }, [products, selectedCategories]);

  if (error) return <section>Error</section>;
  if (!error && Object.keys(products).length === 0)
    return <section>loading...</section>;

  const shopItems = (
    <ul>
      {shownProducts.map((product) => (
        <li key={`product${product.title}${product.id}`}>{product.title}</li>
      ))}
    </ul>
  );

  return <section>{shopItems}</section>;
}

export default Shop;
