import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction.js";

import shoppingBag from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  // function for open or close cart dropdown
  const toggelIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggelIsCartOpen}>
      <img src={shoppingBag} alt="Shopping Icon" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
