const cart = [];

function addCartItem(item) {
  cart.push(item);
}

function clearCart() {
  cart.length = 0;
}

function getCartItems() {
  return cart;
}

export { addCartItem, clearCart, getCartItems };
