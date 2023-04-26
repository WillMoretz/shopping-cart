import React from "react";

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={`${product.title}`} />
      <div>{`$${product.price}`}</div>
    </div>
  );
}

export default ProductCard;
