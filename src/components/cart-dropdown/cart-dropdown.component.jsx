import "./cart-dropdown.styles.scss";

import React from "react";
import Button from "../button/button.component";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
