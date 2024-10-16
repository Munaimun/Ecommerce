/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/Firebase.utils";

// Create a User context with default values
export const UserContexts = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // Value to be provided to children

  useEffect(() => {
    // Listen for authentication state changes and update currentUser state
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user); // Update the state with the authenticated user
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  // Any component (children) can access the currentUser and setCurrentUser via context
  return (
    <UserContexts.Provider value={value}>{children}</UserContexts.Provider>
  );
};
