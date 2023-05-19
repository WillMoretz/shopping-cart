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

function removeCartItem(index) {
  cart.splice(index, 1);
}

export { addCartItem, clearCart, getCartItems, removeCartItem };
