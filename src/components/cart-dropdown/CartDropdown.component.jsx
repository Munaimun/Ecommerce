import Button from "../Button/Button.component";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button className="m-auto relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-black font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
        <span className="relative z-10">GO TO CHECKOUT</span>
      </Button>
    </div>
  );
};

export default CartDropdown;
