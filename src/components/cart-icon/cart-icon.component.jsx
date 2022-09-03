import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
}

export default CartIcon;
