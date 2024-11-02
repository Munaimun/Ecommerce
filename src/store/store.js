import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddlewear = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action);

  console.log("next state: ", store.getState());
};

// catch the actions and logged out the state
const middleWares = [loggerMiddlewear];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//root-reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
