import React from "react";
import { useLocation } from "react-router-dom";

function Product(props) {
  const location = useLocation();
  const { productValues } = location.state;
  return <section>{productValues.image}</section>;
}

export default Product;
