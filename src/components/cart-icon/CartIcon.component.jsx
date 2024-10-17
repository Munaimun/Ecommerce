import shoppingBag from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img src={shoppingBag} alt="Shopping Icon" className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
