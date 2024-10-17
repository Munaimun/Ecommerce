import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import shoppingBag from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  // function for open or close cart dropdown
  const toggelIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggelIsCartOpen}>
      <img src={shoppingBag} alt="Shopping Icon" className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
