import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./CheckOut.styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="mt-28">
      <h1>the checkout page</h1>

      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quanitity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quanitity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
