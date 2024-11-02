import { USER_ACTION_TYPES } from "../../contexts/user.contexts";

// Define the initial state of the userReducer
const INITIAL_STATE = {
  currentUser: null,
};

// Reducer function to handle user actions
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // Update the currentUser in the state with the provided payload
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
