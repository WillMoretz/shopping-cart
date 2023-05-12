import React from "react";
import { Link } from "react-router-dom";

function truncateString(str, desiredEnd) {
  if (str.length < desiredEnd) return str;
  let lowerEnd = desiredEnd;
  let higherEnd = desiredEnd;
  while (lowerEnd > -1 && higherEnd < str.length) {
    if (str.charAt(lowerEnd) === " ") {
      return `${str.slice(0, lowerEnd)}...`;
    }
    lowerEnd -= 1;
    if (str.charAt(higherEnd) === " ") {
      return `${str.slice(0, higherEnd)}...`;
    }
    higherEnd += 1;
  }
  return `${str.slice(0, desiredEnd)}...`;
}

function ProductCard(props) {
  const { product } = props;
  return (
    <Link
      to={`/shop/${product.id}`}
      className="product-card"
      state={{ productValues: product }}
    >
      <img src={product.image} alt={`${product.title}`} />
      <h3>{truncateString(product.title, 40)}</h3>
      <div>{`$${product.price}`}</div>
    </Link>
  );
}

export default ProductCard;
