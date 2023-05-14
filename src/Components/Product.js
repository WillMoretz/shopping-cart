import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Product() {
  const [productValues, setProductValues] = useState(undefined);

  const { id } = useParams();
  if (id < 1 || id > 20 || !Number.isInteger(+id))
    return <section>No Product Found</section>;

  const location = useLocation();
  useEffect(() => {
    if (location.state === null && productValues === undefined) {
      (async () => {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await result.json();
        setProductValues(data);
      })();
    } else if (productValues === undefined) {
      setProductValues(location.state.productValues);
    }
  }, []);

  return productValues === undefined ? (
    <section>loading...</section>
  ) : (
    <section className="product">
      <h2>{productValues.title}</h2>
      <div className="product-body">
        <img src={productValues.image} alt={`${productValues.title}`} />
        <div className="product-info">
          <div>{`$${productValues.price}`}</div>
          {/* <p>{`Rating of ${productValues.rating.rate} with a total of ${productValues.rating.count} reviews`}</p> */}
          <div className="rating">★★★★★</div>
        </div>
        <p className="product-description">{productValues.description}</p>
        <button type="button">Add to Cart</button>
      </div>
    </section>
  );
}

export default Product;
