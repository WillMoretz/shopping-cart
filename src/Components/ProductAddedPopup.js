import React from "react";

function ProductAddedPopup(props) {
  const { shouldDisplay, updatePopup } = props;
  function handleClick() {
    updatePopup();
  }

  return (
    <div className={`product-added-popup ${shouldDisplay ? "" : "hide"}`}>
      <div>Item Added to Cart</div>
      <button type="button" onClick={() => handleClick()}>
        X
      </button>
    </div>
  );
}

export default ProductAddedPopup;
