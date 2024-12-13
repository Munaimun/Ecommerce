import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const CATEGORIES_INITI_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITI_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
