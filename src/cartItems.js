const cart = [
  {
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    index: 0,
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
  },
];

function addCartItem(item) {
  Object.assign(item, { index: cart.length });
  cart.push(item);
}

function clearCart() {
  cart.length = 0;
}

function getCartItems() {
  return cart;
}

export { addCartItem, clearCart, getCartItems };
