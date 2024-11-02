import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../store/cart/cartSelector";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOut = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      {/* THE BUTTON */}
      <Button
        className="m-auto relative flex h-[30px] w-40 items-center justify-center overflow-hidden bg-black font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]"
        onClick={goToCheckOut}
      >
        <span className="relative z-10">GO TO CHECKOUT</span>
      </Button>
    </div>
  );
};

export default CartDropdown;
