/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/Firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

// Create a User context with default values
export const UserContexts = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Define action types for the user reducer
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// Reducer function to handle user actions
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // Update the currentUser in the state with the provided payload
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // Throw an error if an unhandled action type is received
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

// Define the initial state of the user context
const INITIAL_STATE = {
  currentUser: null,
};

// UserProvider component to manage user state and provide it to children
export const UserProvider = ({ children }) => {
  // Use the useReducer hook to manage the user state with the reducer function
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // Function to dispatch an action to set the current user
  const setCurrentUser = (user) =>
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

  // Create the value object to pass down through the context
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // If user is authenticated, create a user document in the database
        createUserDocumentFromAuth(user);
      }
      // Update the currentUser state with the authenticated user
      setCurrentUser(user);
    });

    // Cleanup function to unsubscribe from the listener on unmount
    return () => unsubscribe();
  }, []);

  // Provide the currentUser and setCurrentUser to any child components
  return (
    <UserContexts.Provider value={value}>{children}</UserContexts.Provider>
  );
};
