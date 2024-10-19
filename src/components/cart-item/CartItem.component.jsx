/* eslint-disable react/prop-types */
import "./CartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div className="text-black">
      <p className="text-black">{name}</p>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
