import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Product from "./Product";

function ProductCard(props) {
  const { product } = props;
  return (
    <Link
      to={`/shop/${product.id}`}
      className="product-card"
      state={{ productValues: product }}
    >
      <h3>{product.title}</h3>
      <img src={product.image} alt={`${product.title}`} />
      <div>{`$${product.price}`}</div>
    </Link>
  );
}

export default ProductCard;
