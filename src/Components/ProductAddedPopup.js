import React, { useState } from "react";

function ProductAddedPopup() {
  const [shouldHide, setShouldHide] = useState(false);

  return (
    <div className={`product-added-popup ${shouldHide ? "hide" : ""}`}>
      <div>Item Added To Cart</div>
      <button type="button" onClick={() => setShouldHide(true)}>
        Close
      </button>
    </div>
  );
}

export default ProductAddedPopup;
