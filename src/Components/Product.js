import React from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const { productValues } = location.state;
  return (
    <section>
      <h2>{productValues.title}</h2>
      <div className="product-body">
        <img src={productValues.image} alt={`${productValues.title}`} />
        <p>{productValues.description}</p>
      </div>
      <p>{productValues.category}</p>
      <p>{`Rating of ${productValues.rating.rate} with a total of ${productValues.rating.count} reviews`}</p>
      <div className="checkout">
        <div>{`$${productValues.price}`}</div>
        <button type="button">Add to Cart</button>
      </div>
    </section>
  );
}

export default Product;
