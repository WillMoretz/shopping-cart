import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { addCartItem } from "../cartItems";
import ProductAddedPopup from "./ProductAddedPopup";

function Product() {
  const [productValues, setProductValues] = useState(undefined);
  const [shouldDisplayPopup, setShouldDisplayPopup] = useState(false);
  let timeoutID;

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

  useEffect(() => {
    if (productValues === undefined) return;
    const rating = document.querySelector(".rating");
    rating.style.setProperty(
      "--percent",
      `${(productValues.rating.rate / 5) * 100}%`
    );
  }, [productValues]);

  useEffect(() => {
    if (!shouldDisplayPopup) return;
    timeoutID = setTimeout(() => setShouldDisplayPopup(false), 5000);
  }, [shouldDisplayPopup]);

  const updatePopup = () => {
    setShouldDisplayPopup(false);
    if (timeoutID !== undefined) {
      clearTimeout(timeoutID);
      timeoutID = undefined;
    }
  };

  return productValues === undefined ? (
    <section>loading...</section>
  ) : (
    <section className="product">
      <h2>{productValues.title}</h2>
      <div className="product-body">
        <img src={productValues.image} alt={`${productValues.title}`} />
        <div className="product-info">
          <div className="price">{`$${productValues.price}`}</div>
          <div
            className="rating"
            alt={`${(productValues.rating.rate / 5) * 100}% positive reviews`}
          >
            ★★★★★
          </div>
          <div className="review-count">{`Rating based on ${productValues.rating.count} user reviews`}</div>
        </div>
        <p className="product-description">{productValues.description}</p>
        <button
          type="button"
          onClick={() => {
            addCartItem({
              title: productValues.title,
              image: productValues.image,
              price: productValues.price,
              id: productValues.id,
            });
            setShouldDisplayPopup(true);
          }}
        >
          Add to Cart
        </button>
      </div>
      <ProductAddedPopup
        shouldDisplay={shouldDisplayPopup}
        updatePopup={updatePopup}
      />
    </section>
  );
}

export default Product;
