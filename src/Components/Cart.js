import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCartItems } from "../cartItems";

function Cart() {
  const [cartItems, setCartItems] = useState(undefined);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  if (cartItems === undefined) return <section>loading...</section>;
  if (cartItems.length === 0)
    return (
      <section>
        <h2>Empty!</h2>
      </section>
    );
  const itemsDisplayList = (
    <ul>
      {cartItems.map((item) => (
        <Link
          to={`../shop/${item.id}`}
          className="cart-item"
          key={`cart${item.title}${item.id}`}
        >
          <div>{item.title}</div>
          <img src={item.image} alt={item.title} />
          <div>{item.price}</div>
        </Link>
      ))}
    </ul>
  );
  return <section>{itemsDisplayList}</section>;
}

export default Cart;
