import { CART_ACTION_TYPES } from "./cartTypes";

// Initial state of the cart
export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// Reducer function to handle state changes based on action types
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload, // Update cart items, total, and count
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload, // Update whether the cart is open or closed
      };
    default:
      return state;
  }
};
