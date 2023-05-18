import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCartItems, removeCartItem } from "../cartItems";

function Cart() {
  const [cartItems, setCartItems] = useState(undefined);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  function removeItem(index) {
    removeCartItem(index);
    setCartItems([...getCartItems()]);
  }

  if (cartItems === undefined) return <section>loading...</section>;
  if (cartItems.length === 0)
    return (
      <section>
        <h2>Empty!</h2>
      </section>
    );
  const itemsDisplayList = (
    <>
      {cartItems.map((item) => (
        <div className="cart-item" key={`cart${cartItems.indexOf(item)}`}>
          <Link to={`../shop/${item.id}`} className="cart-shop-link">
            <img src={item.image} alt={item.title} />
            <div className="cart-title">{item.title}</div>
          </Link>
          <div className="cart-price">{`$${item.price}`}</div>
          <button
            type="button"
            className="cart-remove"
            onClick={() => removeItem(cartItems.indexOf(item))}
          >
            ✕
          </button>
        </div>
      ))}
    </>
  );
  return <section>{itemsDisplayList}</section>;
}

export default Cart;
