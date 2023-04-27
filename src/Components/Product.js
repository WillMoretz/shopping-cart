import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Product() {
  const [productValues, setProductValues] = useState(undefined);

  const { id } = useParams();
  if (id < 1 || id > 20 || !Number.isInteger(+id))
    return <section>No Product Found</section>;

  const location = useLocation();
  if (location.state === null && productValues === undefined) {
    (async () => {
      const result = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await result.json();
      setProductValues(data);
    })();
  } else if (productValues === undefined) {
    setProductValues(location.state.productValues);
  }

  return productValues === undefined ? (
    <section>loading...</section>
  ) : (
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
