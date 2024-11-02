import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoryReducer";
import { cartReducer } from "./cart/cartReducer";

// it will combine all the reducers together
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
